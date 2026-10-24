import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  details?: string;
  honeypot?: string;
}

type FieldErrors = Partial<
  Record<"name" | "company" | "email" | "phone" | "service" | "details", string>
>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Server-side deduplication cache (60-second window) to prevent duplicate rows/emails from repeated clicks
const recentSubmissions = new Map<string, number>();
const DEDUP_WINDOW_MS = 60_000;

function cleanupRecentSubmissions(now: number) {
  recentSubmissions.forEach((timestamp, key) => {
    if (now - timestamp > DEDUP_WINDOW_MS) {
      recentSubmissions.delete(key);
    }
  });
}

function isRealEnvValue(val: string | undefined): val is string {
  if (!val) return false;
  const trimmed = val.trim();
  if (!trimmed) return false;
  if (
    trimmed.includes("your-project-ref") ||
    trimmed.includes("your-supabase-service-role") ||
    trimmed.includes("re_your_resend_api_key")
  ) {
    return false;
  }
  return true;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * GET /api/contact
 * Diagnostic check returning boolean configuration state (never exposes secret values).
 */
export async function GET() {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  const supabaseConfigured =
    isRealEnvValue(supabaseUrl) && isRealEnvValue(supabaseServiceKey);
  const resendConfigured = isRealEnvValue(resendApiKey);

  return NextResponse.json({
    ok: true,
    targetTable: "project_enquiries",
    defaultStatus: "New",
    receiverEmail:
      process.env.CONTACT_RECEIVER_EMAIL || "contact@themadmonkey.in",
    configured: {
      supabase: supabaseConfigured,
      resend: resendConfigured,
    },
  });
}

/**
 * POST /api/contact
 * Validates project enquiry fields, prevents duplicate submissions, saves to
 * Supabase `project_enquiries` (default status = 'New'), and sends an email
 * notification to `contact@themadmonkey.in` via Resend.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // 1. Honeypot spam protection
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json(
        { ok: false, code: "SPAM_DETECTED", message: "Spam check triggered." },
        { status: 400 }
      );
    }

    // 2. Normalize and validate fields on the server
    const name = body.name?.trim() || "";
    const company = body.company?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const service = body.service?.trim() || "";
    const budget = body.budget?.trim() || "";
    const details = body.details?.trim() || "";

    const fieldErrors: FieldErrors = {};

    if (!name) {
      fieldErrors.name = "Please enter your full name.";
    }
    if (!company) {
      fieldErrors.company = "Please enter your company or brand name.";
    }
    if (!email) {
      fieldErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(email)) {
      fieldErrors.email =
        "Please enter a valid email address (e.g. name@company.com).";
    }
    const digitsOnlyPhone = phone.replace(/\D/g, "");
    if (!phone) {
      fieldErrors.phone = "Please provide your phone or WhatsApp number.";
    } else if (digitsOnlyPhone.length < 7) {
      fieldErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }
    if (!service) {
      fieldErrors.service = "Please select the primary service you need.";
    }
    if (!details) {
      fieldErrors.details =
        "Please share a few details about your project and goals.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please check the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. Check server-side environment configuration first (never pretend to save/send if unconfigured)
    const supabaseUrlRaw =
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKeyRaw = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKeyRaw = process.env.RESEND_API_KEY;

    const supabaseConfigured =
      isRealEnvValue(supabaseUrlRaw) && isRealEnvValue(supabaseKeyRaw);
    const resendConfigured = isRealEnvValue(resendApiKeyRaw);

    if (!supabaseConfigured && !resendConfigured) {
      return NextResponse.json(
        {
          ok: false,
          code: "BACKEND_NOT_CONFIGURED",
          configured: {
            supabase: false,
            resend: false,
          },
          missingEnvVars: [
            "SUPABASE_URL",
            "SUPABASE_SERVICE_ROLE_KEY",
            "RESEND_API_KEY",
          ],
          message:
            "Supabase database (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) and Resend email (RESEND_API_KEY) are not configured in .env.local yet. Use the WhatsApp or email fallback buttons below to send your enquiry immediately.",
        },
        { status: 503 }
      );
    }

    // 4. Duplicate submission protection (60s window for identical payloads)
    const now = Date.now();
    cleanupRecentSubmissions(now);
    const submissionFingerprint = [
      name.toLowerCase(),
      company.toLowerCase(),
      email.toLowerCase(),
      digitsOnlyPhone,
      service.toLowerCase(),
      details.toLowerCase(),
    ].join("|");

    const previousTimestamp = recentSubmissions.get(submissionFingerprint);
    if (previousTimestamp && now - previousTimestamp < DEDUP_WINDOW_MS) {
      return NextResponse.json({
        ok: true,
        duplicatePrevented: true,
        message:
          "Your project enquiry was already received moments ago. Our team will be in touch shortly.",
      });
    }

    const submittedAt = new Date().toISOString();
    const enquiryStatus = "New";
    let savedToDatabase = false;
    let insertedRowId: string | null = null;
    let dbErrorDetail: string | null = null;
    let emailSent = false;
    let emailErrorDetail: string | null = null;

    // 5. Save submission to Supabase table `project_enquiries`
    if (supabaseConfigured && supabaseUrlRaw && supabaseKeyRaw) {
      const normalizedSupabaseUrl = supabaseUrlRaw.replace(/\/+$/, "");
      const insertEndpoint = `${normalizedSupabaseUrl}/rest/v1/project_enquiries`;

      const dbResponse = await fetch(insertEndpoint, {
        method: "POST",
        headers: {
          apikey: supabaseKeyRaw,
          Authorization: `Bearer ${supabaseKeyRaw}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          service_required: service,
          budget: budget || null,
          project_details: details,
          status: enquiryStatus,
          submitted_at: submittedAt,
          email_notification_sent: false,
        }),
      });

      if (dbResponse.ok) {
        savedToDatabase = true;
        try {
          const rows = (await dbResponse.json()) as Array<{ id?: string }>;
          if (Array.isArray(rows) && rows[0]?.id) {
            insertedRowId = rows[0].id;
          }
        } catch {
          // representation parsing optional
        }
      } else {
        const errText = await dbResponse.text().catch(() => "");
        dbErrorDetail = `Supabase error (${dbResponse.status}): ${errText.slice(
          0,
          180
        )}`;
      }
    }

    // 6. Send email notification to `contact@themadmonkey.in` via Resend
    if (resendConfigured && resendApiKeyRaw) {
      const toEmail =
        process.env.CONTACT_RECEIVER_EMAIL?.trim() || "contact@themadmonkey.in";
      const fromEmail =
        process.env.CONTACT_SENDER_EMAIL?.trim() || "onboarding@resend.dev";

      const formattedBudget = budget || "Not specified";
      const htmlBody = `
        <div style="font-family: system-ui, -apple-system, sans-serif; background-color: #171815; color: #F3F0E8; padding: 32px; border-radius: 16px; max-width: 640px;">
          <div style="border-bottom: 1px solid rgba(243,240,232,0.15); padding-bottom: 16px; margin-bottom: 24px;">
            <span style="display: inline-block; background-color: #D8FF3E; color: #171815; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px;">
              Status: ${escapeHtml(enquiryStatus)}
            </span>
            <h1 style="margin: 12px 0 4px; font-size: 22px; color: #F3F0E8;">
              New Project Enquiry — ${escapeHtml(company)}
            </h1>
            <p style="margin: 0; font-size: 12px; color: #AAAFA5;">
              Submitted at ${escapeHtml(submittedAt)}
            </p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5; width: 160px;">Name</td>
              <td style="padding: 8px 0; color: #F3F0E8; font-weight: 600;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5;">Company / Brand</td>
              <td style="padding: 8px 0; color: #F3F0E8; font-weight: 600;">${escapeHtml(company)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5;">Email</td>
              <td style="padding: 8px 0; color: #D8FF3E;"><a href="mailto:${escapeHtml(email)}" style="color: #D8FF3E;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5;">Phone / WhatsApp</td>
              <td style="padding: 8px 0; color: #F3F0E8; font-weight: 600;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5;">Service Required</td>
              <td style="padding: 8px 0; color: #D8FF3E; font-weight: 600;">${escapeHtml(service)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #AAAFA5;">Project Budget</td>
              <td style="padding: 8px 0; color: #F3F0E8;">${escapeHtml(formattedBudget)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #20211F; border: 1px solid rgba(243,240,232,0.12); border-radius: 12px;">
            <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #D8FF3E; font-weight: 700;">
              Project Details
            </p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #F3F0E8; white-space: pre-wrap;">${escapeHtml(details)}</p>
          </div>
        </div>
      `;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKeyRaw}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[New Enquiry] ${company} — ${service}`,
          html: htmlBody,
          text: [
            `New Project Enquiry — Mad Monkey Media`,
            `Status: ${enquiryStatus}`,
            `Submitted At: ${submittedAt}`,
            ``,
            `Name: ${name}`,
            `Company / Brand: ${company}`,
            `Email: ${email}`,
            `Phone / WhatsApp: ${phone}`,
            `Service Required: ${service}`,
            `Project Budget: ${formattedBudget}`,
            ``,
            `Project Details:`,
            details,
          ].join("\n"),
        }),
      });

      if (emailResponse.ok) {
        emailSent = true;

        // Update `email_notification_sent = true` on the Supabase row if it was inserted
        if (
          savedToDatabase &&
          insertedRowId &&
          supabaseUrlRaw &&
          supabaseKeyRaw
        ) {
          const normalizedSupabaseUrl = supabaseUrlRaw.replace(/\/+$/, "");
          await fetch(
            `${normalizedSupabaseUrl}/rest/v1/project_enquiries?id=eq.${encodeURIComponent(
              insertedRowId
            )}`,
            {
              method: "PATCH",
              headers: {
                apikey: supabaseKeyRaw,
                Authorization: `Bearer ${supabaseKeyRaw}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email_notification_sent: true }),
            }
          ).catch(() => {});
        }
      } else {
        const errText = await emailResponse.text().catch(() => "");
        emailErrorDetail = `Resend error (${emailResponse.status}): ${errText.slice(
          0,
          180
        )}`;
      }
    }

    // 7. Evaluate overall delivery outcome honestly
    if (!savedToDatabase && !emailSent) {
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          savedToDatabase: false,
          emailSent: false,
          details: [dbErrorDetail, emailErrorDetail].filter(Boolean).join(" | "),
          message:
            "We could not complete your submission due to a backend service error. Please use the WhatsApp fallback button below to send your pre-filled enquiry directly.",
        },
        { status: 502 }
      );
    }

    // Mark fingerprint in deduplication cache now that at least one channel succeeded
    recentSubmissions.set(submissionFingerprint, now);

    const partialWarnings: string[] = [];
    if (!supabaseConfigured) {
      partialWarnings.push(
        "Email notification was sent, but Supabase (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY) is not configured yet."
      );
    } else if (!savedToDatabase) {
      partialWarnings.push(
        "Email notification was sent, but saving to Supabase table `project_enquiries` failed."
      );
    }

    if (!resendConfigured) {
      partialWarnings.push(
        "Enquiry was saved to Supabase (`project_enquiries`), but Resend (RESEND_API_KEY) is not configured yet."
      );
    } else if (!emailSent) {
      partialWarnings.push(
        "Enquiry was saved to Supabase (`project_enquiries`), but the Resend email notification failed."
      );
    }

    return NextResponse.json({
      ok: true,
      savedToDatabase,
      emailSent,
      status: enquiryStatus,
      submittedAt,
      warning:
        partialWarnings.length > 0 ? partialWarnings.join(" ") : undefined,
      message:
        savedToDatabase && emailSent
          ? "Thank you. Your project enquiry has been saved and our team at Mad Monkey Media has been notified."
          : savedToDatabase
          ? "Thank you. Your project enquiry has been saved to our studio database."
          : "Thank you. Your project enquiry email has been sent to Mad Monkey Media.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_ERROR",
        message:
          "An unexpected error occurred while processing your request. Please use the WhatsApp fallback button below.",
      },
      { status: 500 }
    );
  }
}

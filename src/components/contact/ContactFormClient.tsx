"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { services } from "@/data/services";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
  honeypot: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const BUDGET_OPTIONS = [
  "Not sure yet / Let's discuss scope",
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,00,000",
  "₹3,00,000+",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactFormClient() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [values, setValues] = useState<FormValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService,
    budget: "",
    details: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "backend_unconfigured" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [serverWarning, setServerWarning] = useState<string>("");
  const [lastFormattedMessage, setLastFormattedMessage] = useState<string>("");

  // Synchronous ref locks to prevent duplicate submissions from rapid clicks
  const isSubmittingRef = useRef(false);
  const lastSubmittedFingerprintRef = useRef<string>("");

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!values.company.trim()) {
      nextErrors.company = "Please enter your company or brand name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email =
        "Please enter a valid email address (e.g. name@company.com).";
    }
    const phoneDigits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      nextErrors.phone = "Please provide your phone or WhatsApp number.";
    } else if (phoneDigits.length < 7) {
      nextErrors.phone =
        "Please provide a valid phone or WhatsApp number (at least 7 digits).";
    }
    if (!values.service.trim()) {
      nextErrors.service = "Please select the primary service you need.";
    }
    if (!values.details.trim()) {
      nextErrors.details =
        "Please share a few details about your project and goals.";
    }

    return nextErrors;
  };

  const buildFormattedMessage = (sourceValues: FormValues = values): string => {
    const hasCurrentInput = Boolean(
      sourceValues.name.trim() ||
        sourceValues.company.trim() ||
        sourceValues.details.trim()
    );
    if (!hasCurrentInput && lastFormattedMessage) {
      return lastFormattedMessage;
    }

    return [
      `Hi Mad Monkey Media, I would like to discuss a project.`,
      ``,
      `Name: ${sourceValues.name.trim() || "—"}`,
      `Brand / Company: ${sourceValues.company.trim() || "—"}`,
      `Email: ${sourceValues.email.trim() || "—"}`,
      `Phone / WhatsApp: ${sourceValues.phone.trim() || "—"}`,
      `Service Required: ${sourceValues.service.trim() || "—"}`,
      `Project Budget: ${sourceValues.budget.trim() || "Open / Not specified"}`,
      `Project Details: ${sourceValues.details.trim() || "—"}`,
    ].join("\n");
  };

  const buildMailtoHref = (): string => {
    const subject = encodeURIComponent(
      `Project Enquiry — ${
        values.company.trim() || values.name.trim() || "New Brand"
      }`
    );
    const body = encodeURIComponent(buildFormattedMessage());
    return `${siteConfig.mailtoUrl}?subject=${subject}&body=${body}`;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prevent rapid double-click duplicate submissions synchronously
    if (isSubmittingRef.current) {
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    const payloadFingerprint = [
      values.email.trim().toLowerCase(),
      values.phone.replace(/\D/g, ""),
      values.service.trim().toLowerCase(),
      values.details.trim().toLowerCase(),
    ].join("|");

    if (
      status === "success" &&
      lastSubmittedFingerprintRef.current === payloadFingerprint
    ) {
      return;
    }

    isSubmittingRef.current = true;
    const formattedSnapshot = buildFormattedMessage(values);
    setLastFormattedMessage(formattedSnapshot);
    setErrors({});
    setStatus("submitting");
    setServerMessage("");
    setServerWarning("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        lastSubmittedFingerprintRef.current = payloadFingerprint;
        setStatus("success");
        setServerMessage(
          data.message ||
            "Thank you. Your enquiry has been saved and sent to Mad Monkey Media."
        );
        setServerWarning(data.warning || "");
        setValues({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: preselectedService,
          budget: "",
          details: "",
          honeypot: "",
        });
      } else if (data.code === "VALIDATION_ERROR" && data.fieldErrors) {
        setErrors(data.fieldErrors as FormErrors);
        setStatus("error");
        setServerMessage(
          data.message || "Please check the highlighted fields and try again."
        );
      } else if (data.code === "BACKEND_NOT_CONFIGURED") {
        setStatus("backend_unconfigured");
        setServerMessage(data.message);
      } else {
        setStatus("error");
        setServerMessage(
          data.message ||
            "We could not submit the form right now. Please use the WhatsApp or email option below."
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Network error while submitting the form. Please send your prefilled enquiry via WhatsApp (+91 7470637758) or email below."
      );
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const inputBaseClass =
    "w-full rounded-xl border bg-studio-charcoal px-4 py-3.5 text-sm text-studio-cream placeholder:text-studio-muted/60 transition-colors focus:border-studio-lime focus:outline-none";

  return (
    <div className="rounded-3xl border border-studio-cream/15 bg-studio-charcoalDeep p-6 sm:p-10 lg:p-12 shadow-editorial">
      <div className="mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-studio-cream">
          Project Enquiry Form
        </h2>
        <p className="mt-2 text-sm sm:text-base text-studio-muted">
          Fill in your project details below, or message us directly on WhatsApp
          for an immediate conversation.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Honeypot field for spam protection (hidden from human users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-company-website">Website</label>
          <input
            id="contact-company-website"
            name="honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.honeypot}
            onChange={(e) => handleChange("honeypot", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Your Name <span className="text-studio-lime">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder="e.g. Aarav Sharma"
              className={`${inputBaseClass} ${
                errors.name ? "border-studio-orange" : "border-studio-cream/15"
              }`}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-studio-orange"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Company or Brand */}
          <div>
            <label
              htmlFor="contact-company"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Company or Brand <span className="text-studio-lime">*</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              value={values.company}
              onChange={(e) => handleChange("company", e.target.value)}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={
                errors.company ? "contact-company-error" : undefined
              }
              placeholder="e.g. Aura Fine Jewels"
              className={`${inputBaseClass} ${
                errors.company
                  ? "border-studio-orange"
                  : "border-studio-cream/15"
              }`}
            />
            {errors.company && (
              <p
                id="contact-company-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-studio-orange"
              >
                {errors.company}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Email Address <span className="text-studio-lime">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              placeholder="name@brand.com"
              className={`${inputBaseClass} ${
                errors.email ? "border-studio-orange" : "border-studio-cream/15"
              }`}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-studio-orange"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Phone / WhatsApp <span className="text-studio-lime">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "contact-phone-error" : undefined
              }
              placeholder="+91 98765 43210"
              className={`${inputBaseClass} ${
                errors.phone ? "border-studio-orange" : "border-studio-cream/15"
              }`}
            />
            {errors.phone && (
              <p
                id="contact-phone-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-studio-orange"
              >
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Required */}
          <div>
            <label
              htmlFor="contact-service"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Service Required <span className="text-studio-lime">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              required
              value={values.service}
              onChange={(e) => handleChange("service", e.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "contact-service-error" : undefined
              }
              className={`${inputBaseClass} ${
                errors.service
                  ? "border-studio-orange"
                  : "border-studio-cream/15"
              }`}
            >
              <option value="">Select a primary service...</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Full-Scope Retainer (Production + Social)">
                Full-Scope Retainer (Production + Social)
              </option>
            </select>
            {errors.service && (
              <p
                id="contact-service-error"
                role="alert"
                className="mt-1.5 text-xs font-medium text-studio-orange"
              >
                {errors.service}
              </p>
            )}
          </div>

          {/* Project Budget (Optional) */}
          <div>
            <label
              htmlFor="contact-budget"
              className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
            >
              Project Budget{" "}
              <span className="text-studio-muted font-normal">(Optional)</span>
            </label>
            <select
              id="contact-budget"
              name="budget"
              value={values.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              className={`${inputBaseClass} border-studio-cream/15`}
            >
              <option value="">Select an estimated range...</option>
              {BUDGET_OPTIONS.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label
            htmlFor="contact-details"
            className="block text-xs font-bold uppercase tracking-[0.14em] text-studio-cream mb-2"
          >
            Project Details <span className="text-studio-lime">*</span>
          </label>
          <textarea
            id="contact-details"
            name="details"
            rows={4}
            required
            value={values.details}
            onChange={(e) => handleChange("details", e.target.value)}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={
              errors.details ? "contact-details-error" : undefined
            }
            placeholder="Tell us about your brand, location, timeline, and what you want to create..."
            className={`${inputBaseClass} ${
              errors.details ? "border-studio-orange" : "border-studio-cream/15"
            }`}
          />
          {errors.details && (
            <p
              id="contact-details-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-studio-orange"
            >
              {errors.details}
            </p>
          )}
        </div>

        {/* Submit & Direct WhatsApp Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-studio-lime px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppEnquiryUrl(buildFormattedMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoal px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
          >
            <MessageCircle
              className="h-4 w-4 text-studio-lime"
              aria-hidden="true"
            />
            <span>Send via WhatsApp Instead</span>
          </a>
        </div>

        {/* Real Success State */}
        {status === "success" && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-studio-lime/50 bg-studio-lime/10 p-5 text-sm text-studio-cream flex items-start gap-3"
          >
            <CheckCircle2
              className="h-5 w-5 shrink-0 text-studio-lime mt-0.5"
              aria-hidden="true"
            />
            <div className="space-y-1.5">
              <p className="font-semibold text-studio-lime">Enquiry Received</p>
              <p className="text-studio-cream/90">{serverMessage}</p>
              {serverWarning && (
                <p className="text-xs text-studio-muted pt-1">
                  Note: {serverWarning}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Transparent Backend-Not-Configured / Error State with Instant WhatsApp & Mailto Actions */}
        {(status === "backend_unconfigured" || status === "error") && (
          <div
            role="alert"
            aria-live="assertive"
            className="rounded-2xl border border-studio-lime/45 bg-studio-charcoal p-6 text-sm text-studio-cream space-y-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                className="h-5 w-5 shrink-0 text-studio-lime mt-0.5"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading font-bold text-base text-studio-cream">
                  {status === "backend_unconfigured"
                    ? "Supabase & Resend Not Configured Yet — Instant WhatsApp & Email Ready"
                    : "Submission Notice"}
                </p>
                <p className="mt-1 text-studio-muted leading-relaxed">
                  {serverMessage}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={getWhatsAppEnquiryUrl(buildFormattedMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-studio-lime px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-studio-ink transition-colors hover:bg-studio-cream"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>
                  Send Prefilled Enquiry on WhatsApp ({siteConfig.whatsappNumber})
                </span>
              </a>

              <a
                href={buildMailtoHref()}
                className="inline-flex items-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep px-5 py-3 text-xs sm:text-sm font-bold text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
              >
                <Mail
                  className="h-4 w-4 text-studio-lime"
                  aria-hidden="true"
                />
                <span>Open Prefilled Email ({siteConfig.email})</span>
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

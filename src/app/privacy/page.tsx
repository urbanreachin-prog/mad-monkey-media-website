import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Mad Monkey Media",
  description:
    "Privacy Policy for Mad Monkey Media. Learn how we handle client data, production assets, and communications securely.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#68716B] hover:text-[#B88D44] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO HOME</span>
        </Link>

        {/* Header */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#B88D44] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL &bull; PRIVACY POLICY</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#191E1B]">
            Privacy Policy
          </h1>

          <p className="mt-3 text-xs font-mono text-[#8A948E]">
            Last updated: January 2026 &bull; {siteConfig.businessName}
          </p>
        </Reveal>

        {/* Legal Content */}
        <div className="mt-12 space-y-8 text-sm sm:text-base text-[#68716B] leading-relaxed font-sans border-t border-[#EDE7DA] pt-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#EDE7DA] shadow-xs">
          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you interact with {siteConfig.businessName} through our website, project brief forms, or direct communication channels (WhatsApp, email, phone), we collect only the necessary details required to deliver creative production services. This includes your name, business name, email address, phone number, creative briefs, brand assets, and footage uploaded for editing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              2. How We Use Your Production Assets
            </h2>
            <p>
              Raw video footage, audio recordings, brand assets, and creative materials uploaded to our client portals are used strictly for the execution of your contracted production services. We never sell, lease, or share your proprietary assets or unpublished footage with third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              3. Client Data &amp; Communication
            </h2>
            <p>
              Your contact details are used exclusively to coordinate project sprints, deliver master files, issue invoices, and communicate critical updates regarding your retainers. You can request the removal or deletion of your contact records at any time by contacting{" "}
              <a href={siteConfig.mailtoUrl} className="text-[#B88D44] underline font-semibold">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              4. Analytics &amp; Cookies
            </h2>
            <p>
              Our website uses basic technical cookies and privacy-respecting analytics to evaluate page load speeds, screen resolutions, and general traffic patterns. We do not track or sell behavioral advertising profiles across third-party networks.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how your creative assets are stored, reach out directly at{" "}
              <a href={siteConfig.mailtoUrl} className="text-[#B88D44] underline font-semibold">
                {siteConfig.email}
              </a>{" "}
              or via WhatsApp at {siteConfig.whatsappNumber}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

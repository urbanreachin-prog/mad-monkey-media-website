import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Get in touch with Mad Monkey Media via WhatsApp (+91 7470637758), email (contact@themadmonkey.in), or our project enquiry form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream min-h-screen pb-20 sm:pb-28">
      {/* Contact Header */}
      <section className="studio-dark-grid pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream">
              <span
                className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_10px_#D8FF3E]"
                aria-hidden="true"
              />
              <span>START A CONVERSATION</span>
            </div>

            <h1 className="mt-6 max-w-4xl font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tightest text-studio-cream leading-[1.03]">
              Let&apos;s Create Something{" "}
              <span className="text-studio-lime">People Remember.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-studio-muted leading-relaxed">
              Tell us about your brand, timeline, and objectives. Reach out
              directly on WhatsApp, send us an email, or complete the project
              brief below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                {/* WhatsApp Card */}
                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-7 transition-all duration-200 hover:border-studio-lime/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-studio-cream/15 bg-studio-charcoal text-studio-lime">
                      <MessageCircle
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-studio-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-studio-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-studio-lime">
                    WhatsApp Direct
                  </h2>
                  <p className="mt-1 font-heading text-2xl font-bold text-studio-cream">
                    {siteConfig.whatsappNumber}
                  </p>
                  <p className="mt-2 text-sm text-studio-muted">
                    Fastest way to discuss shoots, retainers, and campaign
                    timelines.
                  </p>
                </a>

                {/* Email Card */}
                <a
                  href={siteConfig.mailtoUrl}
                  className="mt-5 group block rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-7 transition-all duration-200 hover:border-studio-lime/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-studio-cream/15 bg-studio-charcoal text-studio-lime">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-studio-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-studio-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-studio-lime">
                    Business Email
                  </h2>
                  <p className="mt-1 font-heading text-xl sm:text-2xl font-bold text-studio-cream break-all">
                    {siteConfig.email}
                  </p>
                  <p className="mt-2 text-sm text-studio-muted">
                    Send brand decks, RFPs, or detailed project documentation.
                  </p>
                </a>

                {/* Instagram Card */}
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 group block rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-7 transition-all duration-200 hover:border-studio-lime/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-studio-cream/15 bg-studio-charcoal text-studio-lime">
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-studio-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-studio-lime"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-studio-lime">
                    Instagram
                  </h2>
                  <p className="mt-1 font-heading text-xl font-bold text-studio-cream">
                    {siteConfig.instagramHandle}
                  </p>
                  <p className="mt-2 text-sm text-studio-muted">
                    Follow our latest reels, campaigns, and studio productions.
                  </p>
                </a>
              </Reveal>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Suspense
                  fallback={
                    <div className="rounded-3xl border border-studio-cream/12 bg-studio-charcoalDeep p-10 text-sm text-studio-muted">
                      Loading project enquiry form...
                    </div>
                  }
                >
                  <ContactFormClient />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

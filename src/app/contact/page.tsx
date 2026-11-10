import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowRight, Mail, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { Reveal } from "@/components/motion/Reveal";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

export const metadata: Metadata = {
  title: "Contact — Start a Production Conversation",
  description:
    "Get in touch with Mad Monkey Media via WhatsApp (+91 7470637758), email (contact@themadmonkey.in), or our project enquiry brief.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. CONTACT HEADER */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
              <span>STUDIO TERMINAL &bull; DIRECT CHANNELS</span>
            </div>

            <h1 className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#191E1B] leading-tight">
              Let&apos;s create something{" "}
              <span className="text-[#B88D44]">people remember.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#68716B] leading-relaxed font-sans">
              Tell us about your brand, timeline, and vision. Connect directly via WhatsApp for fastest response, or submit the structured production brief below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. DIRECT CONTACT GRID */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              {/* WhatsApp Primary Card */}
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border-2 border-[#EDE7DA] bg-white p-7 transition-all duration-300 hover:border-[#B88D44] hover:shadow-lg shadow-xs"
              >
                <div className="flex items-center justify-between font-mono text-xs text-[#68716B]">
                  <span className="text-[#B88D44] font-bold">DIRECT WHATSAPP</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold">
                    FASTEST RESPONSE
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-7 h-7 fill-white" />
                  </div>
                  <div>
                    <span className="font-heading text-xl font-bold text-[#191E1B] block">
                      {siteConfig.whatsappNumber}
                    </span>
                    <span className="text-xs text-[#68716B] font-mono">
                      Chat directly with our Creative Director
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EDE7DA] flex items-center justify-between text-xs font-mono text-[#B88D44] font-bold">
                  <span>START CHAT NOW</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.06}>
              {/* Email Card */}
              <a
                href={siteConfig.mailtoUrl}
                className="group block rounded-3xl border border-[#EDE7DA] bg-white p-7 transition-all duration-300 hover:border-[#B88D44]/50 shadow-xs"
              >
                <div className="flex items-center justify-between font-mono text-xs text-[#68716B]">
                  <span>OFFICIAL INBOX</span>
                  <span>PROPOSALS &amp; BRIEFS</span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#FAF7F2] border border-[#EDE7DA] text-[#B88D44] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-heading text-lg font-bold text-[#191E1B] block">
                      {siteConfig.email}
                    </span>
                    <span className="text-xs text-[#68716B] font-mono">
                      Send RFPs, decks, and project briefs
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              {/* Studio Telemetry Card */}
              <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-7 shadow-xs">
                <span className="font-mono text-xs text-[#B88D44] font-bold uppercase tracking-widest block mb-4">
                  STUDIO TELEMETRY
                </span>
                <div className="space-y-3 font-mono text-xs text-[#68716B]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B88D44]" />
                    <span className="text-[#191E1B] font-medium">Location: India &bull; Operating Nationwide</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B88D44]" />
                    <span className="text-[#191E1B] font-medium">Billing: 100% Tax Compliant GST Invoicing</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B88D44]" />
                    <span className="text-[#191E1B] font-medium">Turnaround: 24-48h First Cut Sprints</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Suspense fallback={<div className="text-sm font-mono text-[#68716B]">Loading form...</div>}>
                <ContactFormClient />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}

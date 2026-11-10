"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Mail, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

export function StudioConversionCTA() {
  return (
    <section className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-3xl border-2 border-[#EDE7DA] bg-[#111513] text-white p-8 sm:p-14 lg:p-16 shadow-[0_24px_70px_rgba(25,30,27,0.15)] relative overflow-hidden pattern-dark-obsidian">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF67] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span>START A PRODUCTION CONVERSATION</span>
              </div>

              <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Ready to turn raw footage into{" "}
                <span className="text-[#D4AF67]">high-retention content?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#8A948E] max-w-xl leading-relaxed">
                Partner with senior creative directors and lead editors dedicated to scaling your channel watch time, brand authority, and revenue.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] px-8 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white transition-all shadow-[0_6px_24px_rgba(184,141,68,0.35)] hover:-translate-y-0.5"
                >
                  <span>Claim Your Onboarding Slot</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all backdrop-blur-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-[#8A948E]">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF67]" />
                  <span>24-48h First Cut Sprint</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF67]" />
                  <span>100% Unlimited Revisions</span>
                </span>
                <a
                  href={siteConfig.mailtoUrl}
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#D4AF67] transition-colors sm:ml-auto"
                >
                  <Mail className="w-4 h-4 text-[#D4AF67]" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

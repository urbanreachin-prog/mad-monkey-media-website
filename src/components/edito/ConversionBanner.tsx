"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Sparkles, Mail, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

export function ConversionBanner() {
  return (
    <section className="bg-[#171C19] text-[#F5F2E9] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Atmosphere */}
      <div className="pointer-events-none absolute inset-0 edito-charcoal-pattern opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#D3B45F]/15 via-[#103C32]/30 to-transparent blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-3xl border-2 border-[#D3B45F]/30 bg-gradient-to-br from-[#103C32] to-[#0B2822] p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Corner Decorative Vector Circles */}
            <div className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-white/10 opacity-30" />
            <div className="pointer-events-none absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-[#D3B45F]/30 opacity-40" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D3B45F]/30 bg-[#D3B45F]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.04]">
                GOT SOMETHING{" "}
                <span className="text-[#D3B45F] underline underline-offset-8 decoration-[#D3B45F]/50">
                  WORTH BUILDING?
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#A9DCD0] max-w-xl leading-relaxed">
                Let&apos;s turn your vision into content that stops the scroll, commands authority, and turns viewers into customers.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D3B45F] hover:bg-[#C4A247] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103C32] transition-all shadow-[0_8px_24px_rgba(211,180,95,0.4)] hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all backdrop-blur-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust checkmarks & Direct Contact */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#A9DCD0]">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>24-48h First Cut Delivery</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Unlimited Creative Revisions</span>
                </span>
                <a
                  href={siteConfig.mailtoUrl}
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#D3B45F] transition-colors ml-auto"
                >
                  <Mail className="w-4 h-4 text-[#D3B45F]" />
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

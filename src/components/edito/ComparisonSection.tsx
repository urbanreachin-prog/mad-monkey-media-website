"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Check, X, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const comparisonRows = [
  {
    feature: "Delivery Turnaround",
    traditional: "3 to 4 weeks with frequent delays & missed deadlines",
    madmonkey: "Guaranteed 24-48h first cuts on all content packages",
  },
  {
    feature: "Creative Talent",
    traditional: "Outsourced to junior interns or budget freelancers",
    madmonkey: "Senior Creative Director & Lead Editor assigned to your brand",
  },
  {
    feature: "Revision Policy",
    traditional: "Capped at 1-2 rounds with surprise invoice add-ons",
    madmonkey: "100% Unlimited creative revisions until you're thrilled",
  },
  {
    feature: "Audio & Color Craft",
    traditional: "Cheesy stock audio tracks & basic flat LUTs",
    madmonkey: "Custom sound design, SFX risers, Foley & film-grade color",
  },
  {
    feature: "Channel Communication",
    traditional: "Bureaucratic email chains with 48h reply times",
    madmonkey: "Direct WhatsApp & Slack group with real-time feedback",
  },
  {
    feature: "Pricing Transparency",
    traditional: "Opaque hourly billing with endless scope creep",
    madmonkey: "Clear flat monthly retainer packages with zero hidden fees",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-[#103C32] text-[#F5F2E9] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/40 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 edito-deepgreen-pattern opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D3B45F] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D3B45F]" />
              <span>THE MAD MONKEY ADVANTAGE</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              Why Forward-Thinking Brands Choose Us.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A9DCD0]">
              See how our agile, cinema-grade content production engine stacks up against bloated traditional marketing agencies.
            </p>
          </Reveal>
        </div>

        {/* Side-by-Side Comparison Table / Cards */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/15 bg-[#0B2822]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-black/30">
              <div className="p-5 md:col-span-4 text-xs font-heading font-bold uppercase tracking-widest text-[#A9DCD0]">
                Agency Criteria
              </div>
              <div className="p-5 md:col-span-4 text-xs font-heading font-bold uppercase tracking-widest text-white/50 border-t md:border-t-0 md:border-l border-white/10">
                Traditional Agency
              </div>
              <div className="p-5 md:col-span-4 text-xs font-heading font-bold uppercase tracking-widest text-[#D3B45F] border-t md:border-t-0 md:border-l border-white/10 bg-[#D3B45F]/10">
                Mad Monkey Media
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-white/5"
                >
                  {/* Feature Title */}
                  <div className="p-5 md:col-span-4 flex items-center font-heading text-sm font-bold text-white">
                    {row.feature}
                  </div>

                  {/* Traditional Agency */}
                  <div className="p-5 md:col-span-4 flex items-start gap-3 border-t md:border-t-0 md:border-l border-white/10 text-xs text-white/60">
                    <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 text-red-400">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>{row.traditional}</span>
                  </div>

                  {/* Mad Monkey Media */}
                  <div className="p-5 md:col-span-4 flex items-start gap-3 border-t md:border-t-0 md:border-l border-white/10 text-xs font-medium text-white bg-[#D3B45F]/5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{row.madmonkey}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer Banner */}
            <div className="p-6 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#A9DCD0]">
                Ready to experience the agile content production standard?
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#D3B45F] hover:bg-[#C4A247] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#103C32] transition-all shadow-md"
              >
                <span>Start Today</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

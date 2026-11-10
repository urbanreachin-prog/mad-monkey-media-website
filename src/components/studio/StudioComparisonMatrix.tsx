"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Check, X, Sparkles, ArrowRight, ShieldCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ComparisonPoint {
  title: string;
  description: string;
}

const traditionalPoints: ComparisonPoint[] = [
  {
    title: "Delivery Time",
    description: "Videos often take several days or even weeks to arrive.",
  },
  {
    title: "Communication",
    description: "You may have to follow up repeatedly just to get an update.",
  },
  {
    title: "Editor Changes",
    description: "Different people may work on your videos, so the quality can vary.",
  },
  {
    title: "Revisions",
    description: "You may get limited changes, or have to pay extra for more edits.",
  },
  {
    title: "Pricing",
    description: "Extra charges and unclear pricing can make monthly costs difficult to predict.",
  },
  {
    title: "Personal Attention",
    description: "Your project may not always get the attention it needs.",
  },
];

const madMonkeyPoints: ComparisonPoint[] = [
  {
    title: "Faster Delivery",
    description: "First cuts delivered within 24–48 hours for eligible short-form projects.",
  },
  {
    title: "Direct Communication",
    description: "Talk directly with your dedicated editor through WhatsApp.",
  },
  {
    title: "Consistent Editing",
    description: "A dedicated editor who understands your style and requirements.",
  },
  {
    title: "Unlimited Creative Revisions",
    description: "Get revisions until the video matches the agreed creative direction.",
  },
  {
    title: "Clear Monthly Pricing",
    description: "Know what you're paying every month, without surprise editing charges.",
  },
  {
    title: "Reliable Support",
    description: "A team that stays involved throughout your project.",
  },
];

export function StudioComparisonMatrix() {
  return (
    <section className="bg-[#111513] text-[#EDE7DA] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-white/10">
      <div className="relative max-w-7xl mx-auto">
        {/* Asymmetric 12-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (4 cols): Studio Diagnostics & Thesis */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#D4AF67] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span>04 // CONTRAST ANALYSIS</span>
              </div>

              <h2 className="mt-6 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                The cost of mediocre editing is{" "}
                <span className="font-serif italic font-normal text-[#D4AF67]">invisible</span>{" "}
                until you calculate lost reach.
              </h2>

              <p className="mt-5 text-base text-[#8A948E] leading-relaxed font-sans">
                Every time a prospective customer scrolls past your video in the first 2 seconds, your acquisition cost spikes. We engineered an alternative to unreliable freelancers and bloated agencies.
              </p>
            </Reveal>

            {/* Diagnostic Metrics */}
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#161B18] border border-white/10">
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>DIAGNOSTIC: 1.8S HOOK DROP</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#8A948E]">
                    83% of mobile viewer drop-off occurs before second 2 if the hook is generic.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#161B18] border border-[#B88D44]/40">
                  <div className="flex items-center gap-2 text-[#D4AF67] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>MAD MONKEY BENCHMARK</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#8A948E]">
                    Over 200,000,000+ views engineered across 26 high-retention reel categories.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-7 py-3.5 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(184,141,68,0.4)]"
                >
                  <span>Switch To Mad Monkey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column (8 cols): Structured Contrast Dossier */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
                  {/* 1. LEFT PANEL — Traditional Agency */}
                  <div className="group/trad relative rounded-3xl border border-white/10 bg-[#161B18] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.14),0_8px_32px_rgba(0,0,0,0.35)]">
                    <div>
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          THE USUAL WAY
                        </span>
                        <span className="font-mono text-[10px] text-red-400/60 uppercase">
                          01 // LEGACY
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Traditional Agencies
                      </h3>

                      <div className="h-px bg-white/10 my-6" />

                      {/* 6 Comparison Points */}
                      <div className="space-y-4 sm:space-y-5">
                        {traditionalPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-heading text-sm font-bold text-white/95">
                                {point.title}
                              </h4>
                              <p className="mt-0.5 text-xs sm:text-[13px] text-[#8A948E] leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Result Box */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 text-xs sm:text-[13px] text-red-300/90 font-medium leading-relaxed">
                        Result: More follow-ups, slower delivery, and unnecessary stress.
                      </div>
                    </div>
                  </div>

                  {/* 2. RIGHT PANEL — Mad Monkey Media */}
                  <div className="group/mad relative rounded-3xl border border-white/10 bg-[#161B18] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:border-emerald-500/50 hover:shadow-[0_0_36px_rgba(16,185,129,0.22),0_8px_32px_rgba(0,0,0,0.35)]">
                    <div>
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          A BETTER WAY TO WORK
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400/70 uppercase">
                          02 // MAD MONKEY
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        Mad Monkey Media
                      </h3>

                      <div className="h-px bg-white/10 my-6" />

                      {/* 6 Positive Comparison Points */}
                      <div className="space-y-4 sm:space-y-5">
                        {madMonkeyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-heading text-sm font-bold text-white">
                                {point.title}
                              </h4>
                              <p className="mt-0.5 text-xs sm:text-[13px] text-[#EDE7DA]/85 leading-relaxed">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Result Box */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/25 text-xs sm:text-[13px] text-emerald-300/90 font-medium leading-relaxed">
                        Result: Better communication, consistent videos, and less work for you.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Floating VS Badge for Desktop */}
                <div
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#111513] border border-white/20 items-center justify-center font-mono text-[10px] font-bold text-[#D4AF67] shadow-xl pointer-events-none"
                  aria-hidden="true"
                >
                  VS
                </div>
              </div>

              {/* Bottom Reassurance Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8A948E]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>GST REGISTRATION &bull; 100% INVOICED</span>
                </div>
                <span className="text-[#D4AF67] font-bold">
                  ZERO CONTRACT LOCK-INS &bull; CANCEL ANY TIME
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  UploadCloud,
  MessageSquare,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";

const pipelineSteps = [
  {
    step: "01",
    phase: "PHASE 01 // INGESTION",
    title: "Raw Footage Ingestion & Media Architecture",
    description:
      "Drop raw camera files, A-roll takes, or podcast multi-cam feeds into your private high-bandwidth cloud vault or connect your Google Drive and Frame.io in one click.",
    specs: ["Dedicated private cloud vault", "Auto-proxy generation for rapid scrubbing", "Lossless multi-gigabit transfer"],
    icon: UploadCloud,
    duration: "DAY 01",
  },
  {
    step: "02",
    phase: "PHASE 02 // DIRECT COLLABORATION",
    title: "Direct Senior Director & Editor Sync",
    description:
      "Skip junior account managers and telephone games. You collaborate directly with your dedicated senior editor inside your private WhatsApp or Slack channel for real-time creative alignment.",
    specs: ["Direct WhatsApp/Slack communication", "Zero administrative middleman lag", "Daily creative check-ins"],
    icon: MessageSquare,
    duration: "REAL-TIME",
  },
  {
    step: "03",
    phase: "PHASE 03 // VELOCITY SPRINT",
    title: "24-48h Sprint & Frame-Accurate Revision",
    description:
      "Receive your initial cut within 24-48 hours. Leave precise timecode-based feedback directly on the video timeline. We iterate with unlimited revision rounds until the cut is pristine.",
    specs: ["Guaranteed 24-48h first-cut delivery", "Frame-accurate timecode feedback", "Unlimited revision rounds guarantee"],
    icon: RefreshCw,
    duration: "24-48 HOURS",
  },
  {
    step: "04",
    phase: "PHASE 04 // MASTER HANDOFF",
    title: "4K Master Delivery & Publishing Handover",
    description:
      "Approve the final cut and receive pristine 4K DCI exports formatted for 9:16 vertical and 16:9 horizontal, bundled with custom high-CTR cover thumbnails and caption typography.",
    specs: ["ProRes & 4K 10-bit master exports", "Custom high-CTR cover thumbnails", "Ready-to-publish feed formats"],
    icon: Sparkles,
    duration: "FINAL MASTER",
  },
];

export function StudioProductionEngine() {
  return (
    <section id="process" className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric 12-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (4 cols): Sticky Editorial Manifesto */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <span className="text-[#B88D44] font-bold">03 // THE PRODUCTION PIPELINE</span>
              </div>

              <h2 className="mt-6 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B] leading-tight">
                Engineered for velocity without{" "}
                <span className="font-serif italic font-normal text-[#B88D44]">creative compromise.</span>
              </h2>

              <p className="mt-5 text-base text-[#68716B] leading-relaxed font-sans">
                Traditional agencies are clogged with account coordinators, endless briefing documents, and 3-week revision cycles. We eliminated the bloat so your content actually ships.
              </p>
            </Reveal>

            {/* Operational Guarantees */}
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-3 pt-6 border-t border-[#EDE7DA] font-mono text-xs">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#EDE7DA]">
                  <Zap className="w-4 h-4 text-[#B88D44] shrink-0" />
                  <span className="text-[#191E1B] font-bold">24-48H TURNAROUND STANDARD</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#EDE7DA]">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-[#191E1B] font-bold">100% UNLIMITED REVISIONS</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#EDE7DA]">
                  <Clock className="w-4 h-4 text-[#B88D44] shrink-0" />
                  <span className="text-[#191E1B] font-bold">DIRECT SENIOR EDITOR SYNC</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (8 cols): Staggered Timeline Roadmap */}
          <div className="lg:col-span-8 relative">
            {/* Vertical Connecting Hairline */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-[#EDE7DA]" />

            <div className="space-y-8">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.step} delay={idx * 0.08}>
                    <div className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group">
                      {/* Step Indicator Pill */}
                      <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#191E1B] text-[#191E1B] flex flex-col items-center justify-center shrink-0 shadow-md group-hover:border-[#B88D44] group-hover:bg-[#FAF7F2] transition-all z-10">
                        <span className="font-heading font-black text-xl leading-none">
                          {step.step}
                        </span>
                        <span className="text-[9px] font-mono font-bold text-[#B88D44] mt-0.5">
                          STEP
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 rounded-3xl border border-[#EDE7DA] bg-white p-7 sm:p-8 shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EDE7DA] font-mono text-xs">
                          <div className="flex items-center gap-2 text-[#B88D44] font-bold">
                            <Icon className="w-4 h-4" />
                            <span>{step.phase}</span>
                          </div>
                          <span className="rounded-full bg-[#FAF7F2] border border-[#EDE7DA] px-3 py-0.5 text-[#191E1B] font-bold">
                            {step.duration}
                          </span>
                        </div>

                        <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold text-[#191E1B]">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm text-[#68716B] leading-relaxed">
                          {step.description}
                        </p>

                        <div className="mt-6 pt-4 border-t border-[#EDE7DA] grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs text-[#191E1B]">
                          {step.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#68716B]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88D44] shrink-0" />
                              <span className="truncate">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

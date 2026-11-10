"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const pricingTiers = [
  {
    name: "Reel Sprint",
    spec: "TIER 01 // 08 DELIVERABLES",
    tagline: "Agile Production for Product & Hook Launches",
    description:
      "A fast, high-impact vertical production sprint designed to test new hook angles and establish immediate organic reach.",
    highlight: false,
    badge: "AGILE SPRINT",
    deliverables: [
      "08 High-Retention 9:16 Vertical Reels",
      "Psychological Hook Ideation & Scripting",
      "Dynamic Rhythm Cut & Custom Captions",
      "Rec.709 Color Grade & Spatial Foley Audio",
      "Guaranteed 24-48h First Cut Delivery Sprint",
      "Direct WhatsApp Production Channel",
    ],
    ctaText: "Start Reel Sprint",
  },
  {
    name: "Growth Brand Retainer",
    spec: "FLAGSHIP // 16-20 DELIVERABLES",
    tagline: "The Full-Scale Monthly Studio Retainer",
    description:
      "Comprehensive monthly content and creative distribution engine built to scale audience engagement and inbound inquiries.",
    highlight: true,
    badge: "★ MOST POPULAR // FLAGSHIP",
    deliverables: [
      "16 to 20 High-Retention 9:16 Master Reels",
      "End-to-End Hook Scripting & Storyboards",
      "Paid Performance Ad Creative Variations",
      "Cohesive 9-Grid Social Media Architecture",
      "Dedicated Senior Creative Director & Lead Editor",
      "100% Unlimited Creative Revisions Guarantee",
      "Priority 24h Rush Turnaround Availability",
      "Monthly Creative Performance Review",
    ],
    ctaText: "Apply For Retainer",
  },
  {
    name: "Enterprise Studio Engine",
    spec: "TIER 03 // 30+ DELIVERABLES",
    tagline: "Full-Scale Brand & Production Domination",
    description:
      "Commercial brand filmmaking, multi-cam podcasts, and high-budget paid acquisition ad creative systems.",
    highlight: false,
    badge: "ENTERPRISE",
    deliverables: [
      "30+ Short-Form Reels + Commercial Brand Films",
      "Multi-Cam Podcast Ingestion & Viral Teasers",
      "High-ROAS Paid Ad Creative Scaling",
      "Custom Foley Soundscapes & Advanced 3D VFX",
      "Dedicated Creative Pod & Real-Time Slack",
      "Guaranteed Same-Day Rush Turnaround Option",
    ],
    ctaText: "Contact Enterprise",
  },
];

export function StudioPricingMatrix() {
  return (
    <section id="pricing" className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE7DA]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span className="text-[#B88D44] font-bold">07 // PREDICTABLE RETAINERS</span>
              </div>
              <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191E1B] leading-tight">
                Predictable studio{" "}
                <span className="font-serif italic font-normal text-[#B88D44]">partnerships.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#68716B]">
                Flat monthly retainers with dedicated senior creative talent, guaranteed 24-48h velocity, and zero surprise hourly billing.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 font-mono text-xs text-[#8A948E]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>100% GST INVOICING &bull; CANCEL ANY TIME</span>
            </div>
          </Reveal>
        </div>

        {/* 3-Tier Grid with Asymmetric Retainer Focus */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const isFlagship = tier.highlight;
            const colSpan = isFlagship ? "lg:col-span-6" : "lg:col-span-3";

            return (
              <div key={tier.name} className={`${colSpan} flex flex-col`}>
                <Reveal delay={idx * 0.08}>
                  <div
                    className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between h-full transition-all duration-300 ${
                      isFlagship
                        ? "bg-[#111513] text-[#EDE7DA] border-2 border-[#B88D44] shadow-[0_24px_60px_rgba(25,30,27,0.18)] -translate-y-2"
                        : "bg-white text-[#191E1B] border border-[#EDE7DA] shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg"
                    }`}
                  >
                    <div>
                      {/* Top Header */}
                      <div
                        className={`flex items-center justify-between pb-4 border-b font-mono text-xs ${
                          isFlagship ? "border-white/10" : "border-[#EDE7DA]"
                        }`}
                      >
                        <span className={isFlagship ? "text-[#D4AF67] font-bold" : "text-[#B88D44] font-bold"}>
                          {tier.spec}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            isFlagship
                              ? "bg-[#B88D44] text-white"
                              : "bg-[#FAF7F2] text-[#68716B] border border-[#EDE7DA]"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      </div>

                      <h3
                        className={`mt-6 font-heading font-bold ${
                          isFlagship ? "text-3xl sm:text-4xl text-white" : "text-2xl text-[#191E1B]"
                        }`}
                      >
                        {tier.name}
                      </h3>

                      <p
                        className={`mt-2 text-xs font-mono font-semibold uppercase tracking-wider ${
                          isFlagship ? "text-[#D4AF67]" : "text-[#B88D44]"
                        }`}
                      >
                        {tier.tagline}
                      </p>

                      <p
                        className={`mt-4 text-sm leading-relaxed ${
                          isFlagship ? "text-[#8A948E]" : "text-[#68716B]"
                        }`}
                      >
                        {tier.description}
                      </p>

                      {/* Deliverables List */}
                      <div
                        className={`mt-8 pt-6 border-t space-y-3 ${
                          isFlagship ? "border-white/10" : "border-[#EDE7DA]"
                        }`}
                      >
                        <span
                          className={`block text-[10px] font-mono font-bold uppercase tracking-widest ${
                            isFlagship ? "text-[#D4AF67]" : "text-[#8A948E]"
                          }`}
                        >
                          DELIVERABLE SPECIFICATIONS
                        </span>

                        <ul className="space-y-2.5">
                          {tier.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2.5 text-xs ${
                                isFlagship ? "text-white" : "text-[#191E1B]"
                              }`}
                            >
                              <Check
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isFlagship ? "text-[#D4AF67]" : "text-[#B88D44]"
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-6 border-t border-inherit">
                      <Link
                        href="/contact"
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md ${
                          isFlagship
                            ? "bg-[#B88D44] hover:bg-[#A37B35] text-white shadow-[#B88D44]/30 hover:scale-[1.02]"
                            : "bg-[#191E1B] hover:bg-[#B88D44] text-white"
                        }`}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

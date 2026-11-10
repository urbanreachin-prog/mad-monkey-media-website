"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Check, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

const pricingTiers = [
  {
    name: "Starter Reel Sprint",
    tagline: "For Founders & Creators",
    description:
      "A fast, high-impact sprint designed to test new hook angles and elevate your organic video presence.",
    highlight: false,
    badge: "QUICK LAUNCH",
    deliverables: [
      "08 High-Retention 9:16 Vertical Reels",
      "Psychological Hook Ideation & Scripting",
      "Dynamic Rhythm Cut & Kinetic Captions",
      "Filmic Color Grade & Audio SFX",
      "24-48h First Cut Turnaround Sprint",
      "Direct WhatsApp Production Chat",
    ],
    ctaText: "Start Reel Sprint",
  },
  {
    name: "Growth Brand Retainer",
    tagline: "Most Popular & High Impact",
    description:
      "Complete monthly content and creative distribution engine built to scale audience and inbound inquiries.",
    highlight: true,
    badge: "MOST POPULAR",
    deliverables: [
      "16 to 20 High-Retention 9:16 Master Reels",
      "End-to-End Scripting, Hooks & Storyboards",
      "Ad Creative Variations (A/B Hook Splits)",
      "Cohesive 9-Grid Social Media Management",
      "Dedicated Senior Creative Director & Lead Editor",
      "100% Unlimited Creative Revisions",
      "Priority 24h Rush Turnaround Option",
    ],
    ctaText: "Apply For Retainer",
  },
  {
    name: "Enterprise Studio Engine",
    tagline: "Full-Scale Brand Domination",
    description:
      "End-to-end commercial filmmaking, multi-cam podcasts, and high-budget paid acquisition ad creatives.",
    highlight: false,
    badge: "ENTERPRISE",
    deliverables: [
      "30+ Short-Form Reels + 2 Commercial Films",
      "Multi-Cam Podcast Ingestion & Viral Snippets",
      "On-Location Cinema 4K Shooting & Lighting",
      "High-ROAS Meta Ads Creative Scaling",
      "Custom Soundscapes & Advanced 3D Motion",
      "Dedicated Creative Team & Real-Time Slack",
      "Guaranteed Same-Day Rush Delivery",
    ],
    ctaText: "Contact Enterprise",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D3B45F]" />
              <span>TRANSPARENT ENGAGEMENT MODELS</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
              Predictable Retainer Packages.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E7771]">
              Zero hidden hourly fees. Flat, predictable retainer partnerships with dedicated creative talent and guaranteed 24-48h delivery.
            </p>
          </Reveal>
        </div>

        {/* 3-Tier Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <Reveal key={tier.name} delay={idx * 0.08}>
              <div
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[#103C32] text-white border-2 border-[#D3B45F] shadow-[0_24px_70px_rgba(16,60,50,0.22)] -translate-y-2"
                    : "bg-white text-[#171C19] border border-[#103C32]/12 shadow-[0_12px_36px_rgba(16,60,50,0.05)] hover:border-[#103C32]/25"
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-mono font-bold tracking-wider ${
                        tier.highlight
                          ? "bg-[#D3B45F] text-[#103C32]"
                          : "bg-[#103C32]/10 text-[#103C32]"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        tier.highlight ? "text-[#A9DCD0]" : "text-[#6E7771]"
                      }`}
                    >
                      {tier.tagline}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 font-heading text-2xl sm:text-3xl font-bold ${
                      tier.highlight ? "text-white" : "text-[#103C32]"
                    }`}
                  >
                    {tier.name}
                  </h3>

                  <p
                    className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                      tier.highlight ? "text-[#A9DCD0]" : "text-[#6E7771]"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Checklist */}
                  <div
                    className={`mt-8 pt-6 border-t space-y-3 ${
                      tier.highlight ? "border-white/15" : "border-[#103C32]/10"
                    }`}
                  >
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-widest ${
                        tier.highlight ? "text-[#D3B45F]" : "text-[#103C32]"
                      }`}
                    >
                      DELIVERABLES & SCOPE
                    </span>

                    {tier.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs font-medium"
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            tier.highlight
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span
                          className={
                            tier.highlight ? "text-white/90" : "text-[#171C19]"
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Actions */}
                <div className="mt-8 pt-6 border-t border-inherit flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                      tier.highlight
                        ? "bg-[#D3B45F] hover:bg-[#C4A247] text-[#103C32]"
                        : "bg-[#103C32] hover:bg-[#0B2822] text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-xs font-semibold transition-colors ${
                      tier.highlight
                        ? "text-[#A9DCD0] hover:text-white"
                        : "text-[#6E7771] hover:text-[#103C32]"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

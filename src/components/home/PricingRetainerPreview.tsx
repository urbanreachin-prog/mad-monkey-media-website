"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Check, Sparkles } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  badge?: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
  highlight?: boolean;
}

const previewRetainers: PricingPlan[] = [
  {
    id: "growth-reels",
    name: "Short-Form Growth System",
    tier: "REEL PRODUCTION & STRATEGY",
    summary:
      "Structured monthly vertical reel production designed to maintain organic presence, audience retention, and consistent brand discovery.",
    deliverables: [
      "Dedicated creative strategy & platform hook scripting",
      "Studio or on-location shoot direction & lighting",
      "Cinema-grade 9:16 post-production with kinetic type",
      "Cover design, caption hooks & posting schedule",
      "Continuous watch-time and format optimization",
    ],
    bestFor: "Jewellery, automotive, retail showrooms & consumer brands aiming for organic growth.",
  },
  {
    id: "full-stack",
    name: "Full-Funnel Brand Retainer",
    tier: "PRODUCTION + ADS + SOCIAL",
    badge: "MOST COMPREHENSIVE",
    highlight: true,
    summary:
      "Our flagship partnership model: end-to-end creative direction, vertical content, social architecture, and targeted Meta acquisition campaigns.",
    deliverables: [
      "Everything in Short-Form Growth System",
      "Meta Ads creative variations (hooks, angles & CTAs)",
      "Ad campaign setup, audience targeting & spend management",
      "Full monthly social publishing calendar & grid curation",
      "Monthly performance breakdown & creative roadmap",
    ],
    bestFor: "Established brands and growing businesses scaling customer enquiries and brand authority.",
  },
  {
    id: "commercial-project",
    name: "Custom Campaign Sprint",
    tier: "BESPOKE PRODUCTION SPRINT",
    summary:
      "Single-scope commercial film production, product launch campaigns, brand anthem videos, or architectural & industrial showcases.",
    deliverables: [
      "Custom concepting, moodboard & storyboard development",
      "Full crew shoot production with 4K/cinema gear",
      "Master commercial film + social cutdowns (16:9 & 9:16)",
      "Color grading, custom sound design & licensing",
      "Rapid turnaround sprint for product or seasonal launches",
    ],
    bestFor: "Product launches, facility showcases, showroom openings & personal branding keynotes.",
  },
];

/**
 * PricingRetainerPreview — Premium pricing & engagement models section for the preview redesign.
 * Presents transparent scope, deliverables, and customized enquiry triggers without inventing fake numbers.
 */
export function PricingRetainerPreview() {
  return (
    <section
      id="engagement-models"
      aria-labelledby="pricing-preview-heading"
      className="studio-ink-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10 bg-studio-charcoalDeep"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-studio-cream/12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
              <span className="h-2 w-2 rotate-45 bg-studio-lime" aria-hidden="true" />
              <span>ENGAGEMENT MODELS &middot; CUSTOM PARTNERSHIPS</span>
            </div>
            <h2
              id="pricing-preview-heading"
              className="mt-3 font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tightest text-studio-cream leading-[1.05]"
            >
              Tailored Retainers &amp; Project Sprints.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-studio-muted leading-relaxed">
            Every brand has specific production cadence and reach goals. We structure scopes
            around your exact monthly output and platform requirements.
          </p>
        </div>

        {/* 3 Pricing / Model Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {previewRetainers.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "border-studio-lime/60 bg-studio-charcoal shadow-[0_24px_70px_rgba(216,255,62,0.12)]"
                    : "border-studio-cream/12 bg-studio-charcoal/60 hover:border-studio-cream/30"
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-lime bg-studio-lime px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-studio-ink shadow-md">
                      <Sparkles className="h-3 w-3" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-studio-lime">
                    {plan.tier}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-studio-cream">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-studio-muted leading-relaxed">
                    {plan.summary}
                  </p>

                  <div className="my-6 border-t border-studio-cream/10" />

                  {/* Deliverables List */}
                  <span className="block text-[11px] font-mono uppercase tracking-[0.18em] text-studio-cream/70 mb-3">
                    WHAT&apos;S INCLUDED:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-studio-muted">
                    {plan.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-studio-lime/15 text-studio-lime mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-studio-cream/10 bg-studio-charcoalDeep/70 p-3 text-[11px] text-studio-muted">
                    <span className="font-semibold text-studio-cream">Ideal for: </span>
                    <span>{plan.bestFor}</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-studio-cream/10 flex flex-col gap-2.5">
                  <a
                    href={getWhatsAppEnquiryUrl(`Hi Mad Monkey Media, I'd like a custom proposal for the ${plan.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                      plan.highlight
                        ? "bg-studio-lime text-studio-ink hover:bg-studio-cream"
                        : "border border-studio-cream/20 bg-studio-charcoalDeep text-studio-cream hover:border-studio-lime hover:text-studio-lime"
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Enquire About This Model</span>
                  </a>

                  <Link
                    href="/contact"
                    className="text-center text-[11px] text-studio-muted hover:text-studio-cream transition-colors"
                  >
                    Request Custom Scope Brief &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

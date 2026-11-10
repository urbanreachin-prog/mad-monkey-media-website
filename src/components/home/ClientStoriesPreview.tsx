"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Car, Gem, Factory, UserCheck } from "lucide-react";

interface ClientStory {
  sector: string;
  partner: string;
  focus: string;
  observation: string;
  deliverablesTag: string;
  icon: React.ElementType;
}

const verifiedCollaborations: ClientStory[] = [
  {
    sector: "Jewellery & Luxury Retail",
    partner: "Super Jewellers / Jinendra Jain",
    focus: "Craftsmanship & Heirloom Storytelling",
    observation:
      "Consistent macro cinematography highlighting gold purity, diamond sparkle, and seasonal collections turned everyday jewellery displays into high-share digital culture.",
    deliverablesTag: "Reels & Organic Social System",
    icon: Gem,
  },
  {
    sector: "Automotive & Detailing Studios",
    partner: "3M Car Care & Detailing Bays",
    focus: "Process Detailing & Ceramic Transformation",
    observation:
      "Macro paint correction and satisfying gloss reveal films gave car enthusiasts and luxury owners proof of craftsmanship before booking detailing sessions.",
    deliverablesTag: "Commercial Reels & Showroom Showcases",
    icon: Car,
  },
  {
    sector: "Personal Branding & Professional Advisory",
    partner: "CA Vaibhav Jain & Finance Creators",
    focus: "Authority Building & Complex Insights",
    observation:
      "Studio lighting, tight editorial pacing, and dynamic on-screen motion graphics turned dense regulatory and tax concepts into engaging, highly shareable authority reels.",
    deliverablesTag: "Personal Branding Studio Setup",
    icon: UserCheck,
  },
  {
    sector: "Manufacturing & Infrastructure",
    partner: "Industrial Plants & Operations",
    focus: "Scale, Engineering & Precision",
    observation:
      "Cinematic factory floor b-roll and worker precision films elevated industrial operations from behind-the-scenes factories into trustworthy market leaders.",
    deliverablesTag: "Commercial Brand Documentary",
    icon: Factory,
  },
];

/**
 * ClientStoriesPreview — Grounded collaboration case stories highlighting real industries
 * and verified client partners without inventing fake quotes or unsupported statistics.
 */
export function ClientStoriesPreview() {
  return (
    <section
      aria-labelledby="client-stories-heading"
      className="studio-dark-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10 bg-studio-charcoal"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-studio-cream/12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
              <span className="h-2 w-2 rotate-45 bg-studio-lime" aria-hidden="true" />
              <span>INDUSTRY TRACK RECORD &middot; CLIENT COLLABORATIONS</span>
            </div>
            <h2
              id="client-stories-heading"
              className="mt-3 font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tightest text-studio-cream leading-[1.05]"
            >
              Built Across Real Industries.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-studio-muted leading-relaxed">
            From luxury jewellery counters and auto bays to executive podcasts and plant floors,
            our creative systems are tested across diverse commercial landscapes.
          </p>
        </div>

        {/* 4 Sector Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {verifiedCollaborations.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl border border-studio-cream/12 bg-studio-charcoalDeep p-7 sm:p-9 transition-all duration-300 hover:border-studio-lime/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-studio-lime/30 bg-studio-lime/10 text-studio-lime">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-studio-lime">
                        {item.sector}
                      </span>
                    </div>

                    <span className="rounded-full border border-studio-cream/15 bg-studio-charcoal px-3 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-studio-muted">
                      {item.deliverablesTag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl sm:text-2xl font-bold text-studio-cream">
                    {item.partner}
                  </h3>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-studio-muted mt-1">
                    {item.focus}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-studio-muted leading-relaxed">
                    &ldquo;{item.observation}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-studio-cream/10 flex items-center justify-between">
                  <span className="text-[11px] text-studio-cream/80 font-mono">
                    VERIFIED PARTNERSHIP
                  </span>

                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-studio-lime hover:text-studio-cream transition-colors"
                  >
                    <span>Inspect Reel</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
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

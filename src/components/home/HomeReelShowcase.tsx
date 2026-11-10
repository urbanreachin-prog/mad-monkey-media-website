"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Eye } from "lucide-react";
import { portfolioItems } from "@/data/projects";

/**
 * HomeReelShowcase — High-impact vertical reel showcase for the homepage redesign.
 * Renders large 9:16 portrait video cards with responsive touch controls,
 * clean play triggers, client tags, and direct links to the full /work portfolio.
 */
export function HomeReelShowcase() {
  const topSixReels = portfolioItems.slice(0, 6);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section
      aria-labelledby="featured-reels-heading"
      className="studio-dark-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10 bg-studio-charcoal"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-studio-cream/12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
              <span className="h-2 w-2 rotate-45 bg-studio-lime" aria-hidden="true" />
              <span>VERTICAL REELS &middot; FEATURED SELECTION</span>
            </div>
            <h2
              id="featured-reels-heading"
              className="mt-3 font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tightest text-studio-cream leading-[1.05]"
            >
              Stories Crafted For Retention.
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-studio-lime/40 bg-studio-lime/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-studio-lime transition-all duration-200 hover:bg-studio-lime hover:text-studio-ink"
          >
            <span>Explore All 26 Reels</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* 6-Reel Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topSixReels.map((reel, index) => {
            const isActive = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative overflow-hidden rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep transition-all duration-300 hover:border-studio-lime/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col"
              >
                {/* 9:16 Video Canvas */}
                <div className="relative aspect-[9/15] sm:aspect-[9/14.5] w-full overflow-hidden bg-studio-ink">
                  {/* Poster Thumbnail Image */}
                  {!isActive && (
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title || reel.client || "Portfolio reel"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* HTML5 Video element when activated */}
                  {isActive && (
                    <video
                      src={reel.video}
                      autoPlay
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio-charcoalDeep via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="rounded-full border border-studio-cream/20 bg-studio-charcoalDeep/80 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.12em] text-studio-cream backdrop-blur-md">
                      {reel.category}
                    </span>

                    {reel.views && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-studio-lime/50 bg-studio-lime/15 px-2.5 py-0.5 text-[10px] font-bold text-studio-lime backdrop-blur-md">
                        <Eye className="h-3 w-3" />
                        <span>{reel.views}</span>
                      </span>
                    )}
                  </div>

                  {/* Central Play Trigger Button (visible when not playing) */}
                  {!isActive && (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(reel.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                      aria-label={`Play ${reel.title || reel.client || "reel"}`}
                    >
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-studio-lime text-studio-ink shadow-[0_0_28px_rgba(216,255,62,0.5)] transition-transform duration-200 group-hover:scale-110">
                        <Play className="h-6 w-6 fill-current ml-0.5" />
                      </span>
                    </button>
                  )}
                </div>

                {/* Below-Video Editorial Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-studio-muted">
                      REEL // 0{index + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-studio-cream group-hover:text-studio-lime transition-colors">
                      {reel.title || reel.client}
                    </h3>
                    <p className="mt-2 text-xs text-studio-muted leading-relaxed line-clamp-2">
                      {reel.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-studio-cream/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(isActive ? null : reel.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-studio-lime hover:text-studio-cream transition-colors"
                    >
                      <span>{isActive ? "Close Player" : "Watch Reel"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <Link
                      href="/work"
                      className="text-[11px] text-studio-muted hover:text-studio-cream transition-colors"
                    >
                      View in Archive &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

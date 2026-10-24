"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Clapperboard, Share2, Sparkles } from "lucide-react";

/**
 * ProcessSystemGraphic — Custom responsive technical diagram for the About page.
 * Visualizes Mad Monkey Media's core workflow:
 *   01. STRATEGY & POSITIONING -> 02. PRODUCTION & TIMELINE -> 03. MULTI-CHANNEL DISTRIBUTION
 * Remains 100% legible and structured when animations are disabled.
 */
export function ProcessSystemGraphic() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-studio-cream/15 bg-studio-charcoalDeep p-5 sm:p-7 shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
      {/* Subtle Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 studio-ink-grid opacity-85"
        aria-hidden="true"
      />

      {/* Top Studio Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-studio-cream/10 pb-3.5 text-[10px] font-mono uppercase tracking-[0.2em] text-studio-muted">
        <span className="inline-flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_8px_#D8FF3E]"
            aria-hidden="true"
          />
          <span>MAD MONKEY STUDIO WORKFLOW</span>
        </span>
        <span className="text-studio-lime font-semibold">SYSTEM // 01-03</span>
      </div>

      {/* Main 3-Stage Process Architecture */}
      <div className="relative z-10 mt-5 space-y-4">
        {/* Stage 01: Strategy Nodes */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-studio-cream/12 bg-studio-charcoal/90 p-4"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-studio-lime/40 bg-studio-lime/10 text-studio-lime">
                <Compass className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-studio-lime">
                  STAGE 01 // STRATEGY
                </span>
                <span className="font-heading text-sm font-bold text-studio-cream">
                  Brand Positioning &amp; Audience Hooks
                </span>
              </div>
            </div>
            <span className="rounded-full border border-studio-cream/15 bg-studio-charcoalDeep px-2.5 py-0.5 text-[10px] font-mono text-studio-muted">
              INPUT
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border border-studio-cream/10 bg-studio-charcoalDeep px-2 py-1.5 text-[10px] font-mono text-studio-cream/85">
              BRAND VOICE
            </div>
            <div className="rounded-lg border border-studio-lime/35 bg-studio-lime/10 px-2 py-1.5 text-[10px] font-mono font-bold text-studio-lime">
              CORE HOOKS
            </div>
            <div className="rounded-lg border border-studio-cream/10 bg-studio-charcoalDeep px-2 py-1.5 text-[10px] font-mono text-studio-cream/85">
              SHOT SCRIPT
            </div>
          </div>
        </motion.div>

        {/* Connector Line 01 -> 02 */}
        <div
          className="flex items-center justify-center py-0.5"
          aria-hidden="true"
        >
          <div className="h-5 w-px bg-gradient-to-b from-studio-lime to-studio-orange" />
        </div>

        {/* Stage 02: Content Production & Timeline */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-2xl border border-studio-lime/40 bg-studio-charcoal/95 p-4 shadow-[0_0_24px_rgba(216,255,62,0.08)]"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-studio-lime text-studio-ink">
                <Clapperboard className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-studio-lime">
                  STAGE 02 // CREATION
                </span>
                <span className="font-heading text-sm font-bold text-studio-cream">
                  Direction, Filming &amp; Precision Edit
                </span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-studio-orange/45 bg-studio-orange/15 px-2.5 py-0.5 text-[10px] font-mono text-studio-cream">
              <span className="h-1.5 w-1.5 rounded-full bg-studio-orange" />
              STUDIO CUT
            </span>
          </div>

          {/* Mini SVG Multi-Track Timeline */}
          <svg
            viewBox="0 0 320 54"
            fill="none"
            className="mt-3 w-full h-12 rounded-lg border border-studio-cream/10 bg-studio-charcoalDeep p-1.5"
            aria-hidden="true"
          >
            <rect
              x="8"
              y="8"
              width="98"
              height="10"
              rx="3"
              fill="#D8FF3E"
            />
            <rect
              x="112"
              y="8"
              width="124"
              height="10"
              rx="3"
              fill="rgba(216,255,62,0.35)"
            />
            <rect
              x="242"
              y="8"
              width="68"
              height="10"
              rx="3"
              fill="#D8FF3E"
            />
            <rect
              x="32"
              y="24"
              width="156"
              height="8"
              rx="2"
              fill="#FF6B35"
              fillOpacity="0.85"
            />
            <path
              d="M12 42 H80 L90 36 L102 48 L114 38 L126 46 L138 42 H308"
              stroke="#F3F0E8"
              strokeOpacity="0.45"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="158"
              y1="2"
              x2="158"
              y2="52"
              stroke="#D8FF3E"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        {/* Connector Line 02 -> 03 */}
        <div
          className="flex items-center justify-center py-0.5"
          aria-hidden="true"
        >
          <div className="h-5 w-px bg-gradient-to-b from-studio-orange to-studio-lime" />
        </div>

        {/* Stage 03: Platform-Native Distribution Frames */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="rounded-2xl border border-studio-cream/12 bg-studio-charcoal/90 p-4"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-studio-lime/40 bg-studio-lime/10 text-studio-lime">
                <Share2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-studio-lime">
                  STAGE 03 // DISTRIBUTION
                </span>
                <span className="font-heading text-sm font-bold text-studio-cream">
                  Reels, Social Systems &amp; Paid Reach
                </span>
              </div>
            </div>
            <Sparkles
              className="h-4 w-4 text-studio-lime shrink-0"
              aria-hidden="true"
            />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-studio-lime/35 bg-studio-charcoalDeep p-2 text-center">
              <span className="block font-heading text-xs font-bold text-studio-lime">
                9:16
              </span>
              <span className="block text-[9px] font-mono uppercase text-studio-muted">
                VERTICAL REELS
              </span>
            </div>
            <div className="rounded-lg border border-studio-cream/12 bg-studio-charcoalDeep p-2 text-center">
              <span className="block font-heading text-xs font-bold text-studio-cream">
                16:9
              </span>
              <span className="block text-[9px] font-mono uppercase text-studio-muted">
                BRAND FILMS
              </span>
            </div>
            <div className="rounded-lg border border-studio-cream/12 bg-studio-charcoalDeep p-2 text-center">
              <span className="block font-heading text-xs font-bold text-studio-cream">
                META
              </span>
              <span className="block text-[9px] font-mono uppercase text-studio-muted">
                AD CAMPAIGNS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Studio Telemetry Bar */}
      <div className="relative z-10 mt-5 pt-3.5 border-t border-studio-cream/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-studio-muted">
        <span>STRATEGY &rarr; CREATION &rarr; DISTRIBUTION</span>
        <span className="text-studio-lime font-bold">END-TO-END</span>
      </div>
    </div>
  );
}

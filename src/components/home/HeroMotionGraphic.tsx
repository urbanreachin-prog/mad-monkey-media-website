"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight, Sparkles, Layers } from "lucide-react";

/**
 * HeroMotionGraphic — Art-directed SVG + HTML/CSS + Framer Motion composition
 * Communicates content creation, vertical reels craft, and digital momentum
 * without relying on external video files. Fully responsive and respects prefers-reduced-motion.
 */
export function HeroMotionGraphic() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative w-full max-w-[540px] mx-auto select-none"
      aria-label="Animated graphic illustrating creative production, vertical reels, and digital brand momentum"
      role="img"
    >
      {/* Subtle Ambient Lime Backdrop Glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-studio-lime/[0.06] blur-2xl"
        aria-hidden="true"
      />

      {/* Main Artboard Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-studio-cream/15 bg-studio-charcoalDeep/95 p-4 sm:p-6 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
        {/* Top Studio Viewfinder Header */}
        <div className="flex items-center justify-between border-b border-studio-cream/10 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-studio-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-studio-orange" />
            <span>STUDIO ENGINE // 01</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-studio-cream/60">
              ASPECT 9:16 &middot; 4K
            </span>
            <span className="rounded bg-studio-lime/15 px-2 py-0.5 text-[9px] font-bold text-studio-lime">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Central Stage Canvas */}
        <div className="relative mt-4 h-[340px] sm:h-[390px] w-full overflow-hidden rounded-xl border border-studio-cream/10 bg-studio-charcoal/80">
          {/* Background SVG Grid, Orbiting Ring & Curved Rocket Trajectory */}
          <svg
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-stage-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(243,240,232,0.05)"
                  strokeWidth="1"
                />
              </pattern>
              <linearGradient
                id="trajectory-grad"
                x1="30"
                y1="350"
                x2="460"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#D8FF3E" stopOpacity="0.05" />
                <stop offset="55%" stopColor="#D8FF3E" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Precision Grid */}
            <rect width="500" height="400" fill="url(#hero-stage-grid)" />

            {/* Subtle Rotating Orbital Circle */}
            <g className="origin-center animate-orbit-slow">
              <circle
                cx="250"
                cy="200"
                r="142"
                stroke="rgba(243,240,232,0.1)"
                strokeWidth="1"
                strokeDasharray="6 8"
              />
              <circle cx="250" cy="58" r="3.5" fill="#D8FF3E" />
              <circle cx="392" cy="200" r="2.5" fill="#FF6B35" />
            </g>

            {/* Inner Reference Ring */}
            <circle
              cx="250"
              cy="200"
              r="96"
              stroke="rgba(216,255,62,0.12)"
              strokeWidth="1"
            />

            {/* Curved Momentum Trajectory Arc */}
            <path
              d="M 36 346 C 145 330, 195 125, 452 54"
              stroke="url(#trajectory-grad)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />

            {/* Solid Glowing Highlight Segment on Trajectory */}
            <motion.path
              d="M 36 346 C 145 330, 195 125, 452 54"
              stroke="#D8FF3E"
              strokeWidth="2.2"
              strokeLinecap="round"
              initial={{ pathLength: 0.35, opacity: 0.75 }}
              animate={
                prefersReducedMotion
                  ? { pathLength: 1, opacity: 0.85 }
                  : {
                      pathLength: [0.2, 0.92, 0.2],
                      opacity: [0.5, 0.95, 0.5],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Registration Crosshairs */}
            <g stroke="rgba(243,240,232,0.25)" strokeWidth="1">
              <path d="M 48 64 H 60 M 54 58 V 70" />
              <path d="M 436 330 H 448 M 442 324 V 336" />
            </g>
          </svg>

          {/* Stylized Geometric Vector Rocket / Craft Moving Along Curved Trajectory */}
          <motion.div
            aria-hidden="true"
            initial={{ x: 310, y: 72, rotate: -22 }}
            animate={
              prefersReducedMotion
                ? { x: 345, y: 64, rotate: -18 }
                : {
                    x: [70, 215, 365, 70],
                    y: [282, 165, 58, 282],
                    rotate: [-32, -26, -15, -32],
                  }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden sm:flex items-center gap-1.5"
          >
            <div className="relative flex items-center justify-center rounded-full border border-studio-lime/60 bg-studio-charcoalDeep/95 p-2 shadow-[0_0_20px_rgba(216,255,62,0.35)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-studio-lime"
              >
                <path
                  d="M21 3L14.5 21L11 13L3 9.5L21 3Z"
                  stroke="#D8FF3E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="rgba(216,255,62,0.18)"
                />
              </svg>
              <span className="absolute -left-1.5 bottom-1 h-1.5 w-1.5 rounded-full bg-studio-orange" />
            </div>
          </motion.div>

          {/* Centerpiece: 9:16 Vertical Reels Production Frame */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              animate={
                prefersReducedMotion
                  ? { y: 0 }
                  : { y: [-5, 5, -5] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[168px] sm:w-[192px] rounded-2xl border border-studio-lime/40 bg-studio-charcoalDeep/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
            >
              {/* Frame Top Pill */}
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-studio-muted">
                <span className="text-studio-lime">REEL // 9:16</span>
                <span>60 FPS</span>
              </div>

              {/* Inner Visual Reel Art */}
              <div className="relative mt-2.5 aspect-[9/12] overflow-hidden rounded-xl border border-studio-cream/10 bg-gradient-to-b from-studio-charcoalSurface via-studio-charcoalDeep to-studio-charcoal p-3 flex flex-col justify-between">
                {/* Corner Viewfinder Ticks */}
                <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-studio-lime/70" />
                <span className="absolute right-2 top-2 h-2 w-2 border-r border-t border-studio-lime/70" />
                <span className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-studio-lime/70" />
                <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-studio-lime/70" />

                {/* Top Tag */}
                <div className="inline-flex self-start items-center gap-1 rounded bg-studio-cream/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-studio-cream">
                  <Sparkles className="h-2.5 w-2.5 text-studio-lime" />
                  <span>SCROLL-STOPPING</span>
                </div>

                {/* Center Animated Play Trigger */}
                <div className="my-auto flex flex-col items-center justify-center">
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <motion.span
                      animate={
                        prefersReducedMotion
                          ? { scale: 1, opacity: 0.3 }
                          : { scale: [1, 1.38, 1], opacity: [0.45, 0, 0.45] }
                      }
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-full border border-studio-lime"
                    />
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-studio-lime text-studio-ink shadow-[0_0_24px_rgba(216,255,62,0.45)]">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="mt-2.5 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-studio-cream">
                    HOOK &rarr; STORY
                  </span>
                </div>

                {/* Animated Audio Waveform Strip */}
                <div className="flex items-end justify-center gap-1 h-5">
                  {[0.45, 0.85, 0.6, 1, 0.5, 0.9, 0.65, 0.8, 0.4].map(
                    (heightRatio, i) => (
                      <motion.span
                        key={i}
                        animate={
                          prefersReducedMotion
                            ? { scaleY: heightRatio }
                            : {
                                scaleY: [
                                  heightRatio,
                                  Math.max(0.3, 1.15 - heightRatio),
                                  heightRatio,
                                ],
                              }
                        }
                        transition={{
                          duration: 1.6 + (i % 3) * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ originY: 1 }}
                        className="w-1 h-4 rounded-full bg-studio-lime/85"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Frame Bottom Caption */}
              <div className="mt-2.5 flex items-center justify-between text-[9px] font-medium text-studio-cream/80">
                <span>HIGH-RETENTION EDIT</span>
                <span className="h-1.5 w-1.5 rounded-full bg-studio-lime" />
              </div>
            </motion.div>
          </div>

          {/* Floating Tile 1 (Top-Left): Creative Strategy & Hook Architecture */}
          <motion.div
            animate={
              prefersReducedMotion
                ? { y: 0 }
                : { y: [0, -7, 0] }
            }
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-3 top-3 sm:left-4 sm:top-4 z-20 w-[142px] sm:w-[164px] rounded-xl border border-studio-cream/15 bg-studio-charcoalDeep/90 backdrop-blur-md p-2.5 sm:p-3 shadow-lg"
          >
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-studio-lime">
              <span>01 // DIRECTION</span>
              <Layers className="h-3 w-3 text-studio-lime" />
            </div>
            <p className="mt-1 font-heading text-xs font-bold text-studio-cream leading-tight">
              Creative Strategy &amp; Scripts
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1 flex-1 rounded-full bg-studio-lime" />
              <span className="h-1 w-4 rounded-full bg-studio-orange" />
              <span className="h-1 w-2 rounded-full bg-studio-cream/20" />
            </div>
          </motion.div>

          {/* Floating Tile 2 (Bottom-Right): Digital Momentum & Growth Curve */}
          <motion.div
            animate={
              prefersReducedMotion
                ? { y: 0 }
                : { y: [0, 7, 0] }
            }
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-[148px] sm:w-[172px] rounded-xl border border-studio-lime/35 bg-studio-charcoalDeep/95 backdrop-blur-md p-2.5 sm:p-3 shadow-lg"
          >
            <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-studio-muted">
              <span>02 // MOMENTUM</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-studio-lime text-studio-ink">
                <ArrowUpRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <p className="mt-1 font-heading text-xs font-bold text-studio-cream leading-tight">
              Brand Recall &amp; Reach
            </p>
            {/* Mini Rising Growth Vector */}
            <svg
              viewBox="0 0 120 28"
              fill="none"
              className="mt-1.5 h-6 w-full"
              aria-hidden="true"
            >
              <path
                d="M 4 24 Q 36 22, 58 14 T 114 4"
                stroke="#D8FF3E"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="114" cy="4" r="3" fill="#D8FF3E" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom Production Timeline Bar */}
        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-studio-cream/10 bg-studio-charcoal px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-studio-muted">
          <span className="text-studio-cream">TIMELINE</span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-studio-cream/10">
            <motion.div
              animate={
                prefersReducedMotion
                  ? { width: "68%" }
                  : { width: ["25%", "88%", "25%"] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full rounded-full bg-studio-lime"
            />
          </div>
          <span className="text-studio-lime font-bold">THINK &middot; CREATE &middot; GROW</span>
        </div>
      </div>
    </div>
  );
}

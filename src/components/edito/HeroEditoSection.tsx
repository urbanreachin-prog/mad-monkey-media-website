"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  Flame,
  Zap,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function HeroEditoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative bg-[#F5F2E9] text-[#171C19] pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Organic Ambient Gradient */}
      <div className="pointer-events-none absolute inset-0 edito-cream-pattern opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D3B45F]/15 via-[#A9DCD0]/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#103C32]/8 via-[#D3B45F]/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Centered Header Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* 4.9/5 Star Rating with Client Avatars (EditoHub Style) */}
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#103C32]/12 bg-white/90 backdrop-blur-md px-4 py-1.5 shadow-[0_4px_16px_rgba(16,60,50,0.06)]">
              {/* Overlapping Client Avatars */}
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#103C32] text-[#F5F2E9] text-[9px] font-bold flex items-center justify-center">
                  MM
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#D3B45F] text-[#103C32] text-[9px] font-bold flex items-center justify-center">
                  RK
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#171C19] text-[#A9DCD0] text-[9px] font-bold flex items-center justify-center">
                  AP
                </div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-700 text-white text-[9px] font-bold flex items-center justify-center">
                  VS
                </div>
              </div>

              {/* Gold Stars */}
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>

              <span className="text-xs font-heading font-bold text-[#103C32] tracking-tight">
                4.9/5 RATED BY 80+ BRANDS
              </span>
            </div>
          </Reveal>

          {/* Massive Headline with Golden Brush Underline SVG */}
          <Reveal delay={0.06}>
            <h1 className="mt-7 font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-[#103C32] leading-[1.03] uppercase">
              <span className="block">WE MAKE CONTENT</span>
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="relative z-10 text-[#103C32]">IMPOSSIBLE</span>{" "}
                <span className="relative z-10 text-[#171C19]">TO IGNORE.</span>
                {/* Organic Golden Brush Underline SVG */}
                <svg
                  viewBox="0 0 520 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-6 text-[#D3B45F] pointer-events-none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 21C95 6 270 4 517 14C375 7 195 9 18 24"
                    stroke="#D3B45F"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                  />
                  <path
                    d="M45 25C170 12 360 9 495 18"
                    stroke="#D3B45F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#6E7771] leading-relaxed">
              From high-retention 9:16 vertical reels to cinema-grade commercial films, we craft brand visuals engineered to command attention, earn authority, and convert casual viewers into paying clients.
            </p>
          </Reveal>

          {/* CTA Action Buttons */}
          <Reveal delay={0.18}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D3B45F] hover:bg-[#C4A247] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103C32] transition-all shadow-[0_8px_24px_rgba(211,180,95,0.35)] hover:shadow-[0_12px_32px_rgba(211,180,95,0.5)] hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={togglePlay}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-[#103C32]/20 bg-white/80 hover:bg-white px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#103C32] transition-all shadow-sm hover:border-[#103C32]/40"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-[#103C32]" />
                ) : (
                  <Play className="w-4 h-4 fill-[#103C32] text-[#103C32]" />
                )}
                <span>{isPlaying ? "Pause Showreel" : "Play Showreel"}</span>
              </button>
            </div>
          </Reveal>

          {/* Trust Guarantees Small Strip */}
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[#6E7771]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>24-48h Delivery Turnaround</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Unlimited Creative Revisions</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>200M+ Organic Views Delivered</span>
              </span>
            </div>
          </Reveal>
        </div>

        {/* Realistic Laptop Device Mockup Section (EditoHub Reference 1) */}
        <Reveal delay={0.25}>
          <div className="mt-14 sm:mt-18 lg:mt-20 max-w-5xl mx-auto relative">
            {/* Ambient Backlight Glow Behind Device */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#D3B45F]/20 via-[#103C32]/10 to-transparent blur-3xl transform -translate-y-8" />

            {/* Floating Trust Pills Around Laptop Frame */}
            <div className="hidden md:flex absolute -left-6 top-16 z-20 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md p-3.5 shadow-[0_16px_36px_rgba(16,60,50,0.12)]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600">
                <Flame className="w-5 h-5 fill-amber-500 text-amber-600" />
              </div>
              <div>
                <span className="block text-xs font-heading font-bold text-[#103C32]">
                  200M+ Organic Views
                </span>
                <span className="block text-[10px] text-[#6E7771]">
                  Verified Video Engagement
                </span>
              </div>
            </div>

            <div className="hidden md:flex absolute -right-6 top-24 z-20 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md p-3.5 shadow-[0_16px_36px_rgba(16,60,50,0.12)]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                <Zap className="w-5 h-5 fill-emerald-500 text-emerald-600" />
              </div>
              <div>
                <span className="block text-xs font-heading font-bold text-[#103C32]">
                  24-48h First Cut
                </span>
                <span className="block text-[10px] text-[#6E7771]">
                  Agile Production Sprint
                </span>
              </div>
            </div>

            <div className="hidden md:flex absolute -right-4 bottom-12 z-20 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md p-3.5 shadow-[0_16px_36px_rgba(16,60,50,0.12)]">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <span className="block text-xs font-heading font-bold text-[#103C32]">
                  4.8x Avg ROAS
                </span>
                <span className="block text-[10px] text-[#6E7771]">
                  Performance Ad Creatives
                </span>
              </div>
            </div>

            {/* Laptop Mockup Bezel (MacBook Style) */}
            <div className="relative mx-auto w-full max-w-4xl rounded-t-3xl border-4 border-[#2A2E2C] bg-[#121513] shadow-[0_30px_90px_rgba(16,60,50,0.22)] overflow-hidden">
              {/* Laptop Top Bezel with Camera Dot */}
              <div className="h-6 sm:h-7 bg-[#1D211F] flex items-center justify-center px-4 relative border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0D100E] border border-white/10 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                {/* Header Title inside Mockup */}
                <div className="absolute right-4 text-[10px] font-mono uppercase tracking-wider text-[#A9DCD0]/70 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D3B45F]" />
                  <span>MAD MONKEY MEDIA MASTER SHOWREEL</span>
                </div>
              </div>

              {/* Screen Area Playing the Video */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/videos/projects/Mad%20monkey%20edit.mp4"
                  poster="/images/portfolio/thumbnails/mad-monkey-edit.webp"
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover sm:object-contain bg-black"
                />

                {/* Floating On-Screen Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#103C32]/85 hover:bg-[#103C32] text-white border border-white/20 backdrop-blur-md transition-all shadow-md"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-white" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#103C32]/85 hover:bg-[#103C32] text-white border border-white/20 backdrop-blur-md transition-all shadow-md"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                  </div>

                  <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/15 text-[10px] font-mono text-white/90">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>4K HDR MASTER</span>
                  </div>
                </div>
              </div>

              {/* Laptop Bottom Lip / Trackpad Notch */}
              <div className="h-4 bg-[#1E2220] border-t border-white/10 flex items-center justify-center">
                <div className="w-20 h-1.5 rounded-full bg-[#121513]" />
              </div>
            </div>

            {/* Laptop Aluminum Base Stand */}
            <div className="relative mx-auto -mt-0.5 h-3.5 sm:h-4 w-[102%] -left-[1%] rounded-b-2xl bg-gradient-to-b from-[#2C312E] to-[#1A1D1B] shadow-[0_16px_40px_rgba(0,0,0,0.35)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Film,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const partnerLogos = [
  "HYPERION MEDIA",
  "APEX CREATIVE",
  "LUMEN LABS",
  "NEXUS DYNAMICS",
  "SOLARIS VENTURES",
  "VORTEX STUDIOS",
  "AURA HEALTHCARE",
  "ZENITH CAPITAL",
];

export function StudioHeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [timecode, setTimecode] = useState("00:00:14:08");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Timecode animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const frames = Math.floor((now.getMilliseconds() / 1000) * 24);
      const secs = String(now.getSeconds()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setTimecode(`00:${mins}:${secs}:${String(frames).padStart(2, "0")}`);
    }, 41); // ~24fps update
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative bg-[#F6F2E9] text-[#191E1B] pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#EDE7DA]">
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-6 sm:grid-cols-12 divide-x divide-[#EDE7DA]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* 1. EDITORIAL MASTHEAD TELEMETRY STRIP */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 sm:mb-12 border-b border-[#EDE7DA] text-[11px] font-mono text-[#68716B]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#B88D44] font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>STUDIO DISPATCH // VOL. 26</span>
            </span>
            <span className="text-[#EDE7DA] hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">NEW DELHI &bull; WORLDWIDE DIRECTING</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#191E1B] font-semibold">4K DCI 10-BIT MASTERS</span>
            <span className="text-[#EDE7DA]">&bull;</span>
            <span className="text-[#B88D44] font-bold">200M+ VIEWS BENCHMARK</span>
          </div>
        </div>

        {/* 2. ASYMMETRIC 12-COLUMN EDITORIAL HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols): Bold Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Client Intake Status Pill */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#191E1B] shadow-xs mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-[#B88D44]">INTAKE STATUS:</span>
                <span>OPEN FOR SELECT BRANDS</span>
              </div>
            </Reveal>

            {/* Oversized Mixed Display Sans + Serif Italic Typography */}
            <Reveal delay={0.06}>
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#191E1B] leading-[1.04]">
                We direct &amp; edit{" "}
                <span className="font-serif italic font-normal text-[#B88D44] block sm:inline">
                  visual narratives
                </span>{" "}
                that command massive attention.
              </h1>
            </Reveal>

            {/* Editorial Lead Paragraph */}
            <Reveal delay={0.12}>
              <p className="mt-6 text-base sm:text-lg text-[#68716B] leading-relaxed max-w-xl font-sans">
                Mad Monkey Media is an independent creative video production studio. We engineer high-retention vertical reels, cinematic commercials, and digital media systems designed to elevate perceived brand value and scale inbound revenue.
              </p>
            </Reveal>

            {/* Monospace Studio Metadata Index */}
            <Reveal delay={0.16}>
              <div className="mt-8 pt-6 border-t border-[#EDE7DA] grid grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <span className="block text-[10px] text-[#8A948E] uppercase tracking-wider">
                    REACH BENCHMARK
                  </span>
                  <span className="font-heading font-bold text-xl sm:text-2xl text-[#191E1B] mt-0.5 block">
                    200M+
                  </span>
                  <span className="text-[11px] text-[#68716B]">Audited Views</span>
                </div>

                <div>
                  <span className="block text-[10px] text-[#8A948E] uppercase tracking-wider">
                    VELOCITY SPRINT
                  </span>
                  <span className="font-heading font-bold text-xl sm:text-2xl text-[#B88D44] mt-0.5 block">
                    24-48h
                  </span>
                  <span className="text-[11px] text-[#68716B]">First Cut Timeline</span>
                </div>

                <div>
                  <span className="block text-[10px] text-[#8A948E] uppercase tracking-wider">
                    AGENCY RATING
                  </span>
                  <span className="font-heading font-bold text-xl sm:text-2xl text-[#191E1B] mt-0.5 block">
                    4.9 / 5
                  </span>
                  <span className="text-[11px] text-[#68716B]">80+ Brand Partners</span>
                </div>
              </div>
            </Reveal>

            {/* Editorial Action Buttons */}
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] px-8 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white transition-all shadow-[0_6px_24px_rgba(184,141,68,0.32)] hover:shadow-[0_8px_30px_rgba(184,141,68,0.45)] hover:-translate-y-0.5"
                >
                  <span>Initiate Production</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#EDE7DA] bg-white hover:bg-[#FAF7F2] px-7 py-4 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#191E1B] transition-all shadow-xs"
                >
                  <span>Work Archive (26 Reels)</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A948E]" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 cols): Asymmetric Cinema Viewport with Director HUD */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Director Viewport Container */}
                <div className="relative rounded-3xl border-2 border-[#191E1B] bg-[#111513] p-3 sm:p-4 shadow-[0_30px_80px_rgba(25,30,27,0.22)] overflow-hidden">
                  {/* Top Director HUD Header */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-[11px] font-mono text-[#8A948E]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white font-bold">REC [●] 24FPS</span>
                    </div>

                    <div className="text-[#D4AF67] font-bold font-mono">
                      {timecode}
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-white/90">
                        KODAK 2383
                      </span>
                    </div>
                  </div>

                  {/* 9:16 Vertical Master Video Canvas */}
                  <div className="relative aspect-[9/14] sm:aspect-[9/15] w-full rounded-2xl overflow-hidden bg-black mt-3">
                    {/* Immediate poster underlay so viewport is never black while video buffers */}
                    <Image
                      src="/images/portfolio/thumbnails/mad-monkey-edit.webp"
                      alt="Mad Monkey Media Master Reel"
                      fill
                      priority
                      className="object-cover pointer-events-none"
                    />

                    <video
                      ref={videoRef}
                      src="/videos/projects/Mad%20monkey%20edit.mp4"
                      poster="/images/portfolio/thumbnails/mad-monkey-edit.webp"
                      playsInline
                      autoPlay
                      loop
                      muted={isMuted}
                      preload="auto"
                      className="w-full h-full object-cover relative z-[1]"
                    >
                      <source src="/videos/projects/Mad%20monkey%20edit.mp4" type="video/mp4" />
                      <source src="/videos/projects/Mad monkey edit.mp4" type="video/mp4" />
                    </video>

                    {/* Subtle Cinema Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                    {/* Viewport Crosshairs & Safe Area Guides */}
                    <div className="absolute inset-4 pointer-events-none border border-white/10 rounded-xl">
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF67]" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF67]" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF67]" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF67]" />
                    </div>

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-white/15">
                        MASTER REEL &bull; SHOWCASE
                      </span>
                      <span className="rounded-full bg-[#B88D44] px-2.5 py-1 text-[10px] font-mono font-bold text-white shadow-sm">
                        200M+ SPEC
                      </span>
                    </div>

                    {/* Bottom Video Controller Bar */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="w-9 h-9 rounded-full bg-white text-[#191E1B] flex items-center justify-center transition-all shadow-md hover:scale-105"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                        </button>

                        <button
                          type="button"
                          onClick={toggleMute}
                          className="w-9 h-9 rounded-full bg-white text-[#191E1B] flex items-center justify-center transition-all shadow-md hover:scale-105"
                          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-[#B88D44]" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-mono text-white/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                        <span>AUDIO SYNC 48KHZ</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technical Spec Bar */}
                  <div className="mt-3 pt-2.5 px-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8A948E]">
                    <span>PRORES 422 HQ &bull; DCI-P3</span>
                    <span className="text-[#D4AF67]">MAD MONKEY LABS</span>
                  </div>
                </div>

                {/* Overlapping Floating Editorial Placard */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 rounded-2xl bg-white border border-[#EDE7DA] p-4 shadow-2xl items-center gap-3.5 max-w-xs text-left z-20">
                  <div className="w-11 h-11 rounded-xl bg-[#B88D44]/15 border border-[#B88D44]/30 text-[#B88D44] flex items-center justify-center shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B88D44] font-bold block">
                      ARCHIVE SPECIFICATION
                    </span>
                    <p className="text-xs font-heading font-bold text-[#191E1B]">
                      High-Retention Frame Pipeline
                    </p>
                    <p className="text-[10px] text-[#68716B]">
                      Color Graded &bull; Custom Foley Audio
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. ASYMMETRIC CLIENT & COLLABORATION ROSTER */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#EDE7DA]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A948E] font-semibold">
                TRUSTED CREATIVE PARTNERS &bull; ROSTER
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-70">
              {partnerLogos.map((logo) => (
                <span
                  key={logo}
                  className="font-heading font-bold text-xs sm:text-sm tracking-wider text-[#191E1B] hover:text-[#B88D44] transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

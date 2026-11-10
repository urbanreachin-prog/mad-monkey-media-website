"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { MoveHorizontal, Sparkles, Film } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#EDE7DA]">
      <div className="relative max-w-7xl mx-auto">
        {/* Asymmetric 2-Column Spread (5 cols vs 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (5 cols): Editorial Thesis & Technical Dossier */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span className="text-[#B88D44] font-bold">01 // THE METAMORPHOSIS</span>
              </div>

              <h2 className="mt-6 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B] leading-tight">
                From flat sensor capture to{" "}
                <span className="font-serif italic font-normal text-[#B88D44]">cinema-grade</span>{" "}
                master.
              </h2>

              <p className="mt-5 text-base text-[#68716B] leading-relaxed font-sans">
                Most agencies simply trim clips and slap default text presets on timeline tracks. We treat every millisecond as a psychological retention device—calibrating color science, acoustic dynamics, and kinetic cadence to eliminate viewer drop-off.
              </p>
            </Reveal>

            {/* Monospace Technical Specification Dossier */}
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 pt-6 border-t border-[#EDE7DA]">
                <div className="rounded-2xl border border-[#EDE7DA] bg-white p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#191E1B]">01 / COLOR GRADING</span>
                    <span className="text-[#B88D44] font-bold">KODAK 2383 / REC.709</span>
                  </div>
                  <p className="mt-1 text-xs text-[#68716B] leading-relaxed">
                    Skin tone isolation, tonal separation, and cinematic highlight roll-off.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#EDE7DA] bg-white p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#191E1B]">02 / CADENCE &amp; RHYTHM</span>
                    <span className="text-[#B88D44] font-bold">ZERO DEAD AIR</span>
                  </div>
                  <p className="mt-1 text-xs text-[#68716B] leading-relaxed">
                    Sub-second pattern interrupts, micro-zooms, and narrative tension flow.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#EDE7DA] bg-white p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#191E1B]">03 / FOLEY &amp; SOUND DESIGN</span>
                    <span className="text-[#B88D44] font-bold">48KHZ 24-BIT</span>
                  </div>
                  <p className="mt-1 text-xs text-[#68716B] leading-relaxed">
                    Binaural impacts, spatial whooshes, and subtle tactile foley integration.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols): Interactive Luxury Cinema Slider */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-3xl border-2 border-[#191E1B] bg-[#111513] p-3 sm:p-4 shadow-[0_24px_70px_rgba(25,30,27,0.18)]">
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-[11px] font-mono text-[#8A948E]">
                  <div className="flex items-center gap-2">
                    <Film className="w-3.5 h-3.5 text-[#D4AF67]" />
                    <span className="text-white font-bold">INTERACTIVE GRADE INSPECTOR</span>
                  </div>
                  <span className="text-[#D4AF67]">HEALTHCARE COMMERCIAL REEL</span>
                </div>

                {/* Slider Canvas */}
                <div
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize bg-black mt-3"
                >
                  {/* 1. AFTER Image (High-End Master Graded) */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/portfolio/thumbnails/Healthcare.webp"
                      alt="After: Graded Cinematic Commercial"
                      fill
                      priority
                      className="object-cover"
                    />
                    {/* After Badge */}
                    <div className="absolute top-4 right-4 z-10 rounded-full bg-black/75 border border-[#B88D44]/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono font-bold tracking-wider text-[#D4AF67] shadow-md">
                      GRADED &bull; 4K DCI MASTER
                    </div>
                  </div>

                  {/* 2. BEFORE Image (Clipped overlay layer - Flat LOG look) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="relative w-full h-full min-w-[500px] sm:min-w-[800px]">
                      <Image
                        src="/images/portfolio/thumbnails/Healthcare.webp"
                        alt="Before: Raw Flat Footage"
                        fill
                        className="object-cover filter grayscale contrast-75 brightness-110"
                      />
                    </div>
                    {/* Before Badge */}
                    <div className="absolute top-4 left-4 z-10 rounded-full bg-black/75 border border-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono font-bold tracking-wider text-white shadow-md">
                      RAW &bull; FLAT LOG PROFILE
                    </div>
                  </div>

                  {/* 3. Draggable Vertical Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-[#B88D44] shadow-[0_0_16px_#B88D44] pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#B88D44] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(184,141,68,0.6)] border-2 border-white">
                      <MoveHorizontal className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Center Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none rounded-full bg-black/70 backdrop-blur-md px-4 py-1 border border-white/10 text-[10px] font-mono tracking-wider text-white">
                    DRAG HORIZONTALLY TO INSPECT
                  </div>
                </div>

                {/* Bottom Frame Footer */}
                <div className="mt-3 pt-2 px-2 flex items-center justify-between text-[10px] font-mono text-[#8A948E]">
                  <span>TIMECODE 00:01:24:18 &bull; SCENE 03</span>
                  <span className="text-[#D4AF67]">MAD MONKEY COLOR SUITE</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

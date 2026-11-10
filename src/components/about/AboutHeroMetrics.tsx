"use client";

import React, { useState, useEffect, useRef } from "react";

export function AboutHeroMetrics() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const duration = 1600;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const linearProgress = Math.min(elapsed / duration, 1);
            // Smooth easeOutCubic
            const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
            setProgress(easedProgress);

            if (linearProgress < 1) {
              requestAnimationFrame(animate);
            } else {
              setProgress(1);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Formatted count-up values
  const stat1Value = progress === 0 ? "0.0" : (1.3 * progress).toFixed(1);
  const stat2Value =
    progress === 0
      ? "0"
      : Math.floor(2000 * progress).toLocaleString();
  const stat3Start = Math.floor(24 * progress);
  const stat3End = Math.floor(48 * progress);
  const stat4Value = Math.floor(80 * progress);

  return (
    <div
      ref={containerRef}
      className="mt-10 pt-8 border-t border-[#EDE7DA] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs"
    >
      {/* 01 — 1.3 BILLION+ */}
      <div className="group/stat relative rounded-2xl p-4 sm:p-5 border border-[#EDE7DA]/80 bg-white/40 hover:bg-white hover:border-[#B88D44]/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,141,68,0.12)]">
        {/* Subtle gold ambient glow behind the number */}
        <div
          className="absolute -inset-1 rounded-2xl bg-[#B88D44]/10 blur-xl opacity-40 group-hover/stat:opacity-80 group-hover/stat:bg-[#B88D44]/20 transition-all duration-300 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#B88D44] font-bold tracking-widest uppercase">
              <span>01 // AUDITED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88D44]" />
            </div>

            <div className="mt-2.5">
              <span className="block font-heading font-black text-2xl sm:text-3xl text-[#191E1B] tracking-tight">
                {stat1Value}{" "}
                <span className="text-[#B88D44] text-lg sm:text-xl font-bold">
                  BILLION+
                </span>
              </span>
              <span className="text-[#68716B] mt-1 block uppercase font-bold text-[11px] tracking-wider">
                Views Generated
              </span>
            </div>
          </div>

          {/* Motion Graphics Indicator 1: Ascending Growth Wave */}
          <div className="mt-4 pt-3 border-t border-[#EDE7DA]/70">
            <div className="h-6 w-full flex items-center">
              <svg
                viewBox="0 0 120 24"
                className="w-full h-full overflow-visible"
                fill="none"
              >
                {/* Background subtle guide */}
                <path
                  d="M 2 20 Q 30 18, 60 12 T 118 4"
                  stroke="#EDE7DA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Animated gold growth line */}
                <path
                  d="M 2 20 Q 30 18, 60 12 T 118 4"
                  stroke="#B88D44"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="140"
                  strokeDashoffset={140 * (1 - progress)}
                  className="transition-all duration-300 group-hover/stat:stroke-[#A37B35]"
                />
                {/* Pulse dot at peak */}
                <circle
                  cx="118"
                  cy="4"
                  r="2.5"
                  fill="#B88D44"
                  className="transition-transform duration-300 group-hover/stat:scale-125"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — 2,000+ */}
      <div className="group/stat relative rounded-2xl p-4 sm:p-5 border border-[#EDE7DA]/80 bg-white/40 hover:bg-white hover:border-[#B88D44]/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,141,68,0.12)]">
        <div
          className="absolute -inset-1 rounded-2xl bg-[#B88D44]/10 blur-xl opacity-40 group-hover/stat:opacity-80 group-hover/stat:bg-[#B88D44]/20 transition-all duration-300 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#B88D44] font-bold tracking-widest uppercase">
              <span>02 // CAPACITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>

            <div className="mt-2.5">
              <span className="block font-heading font-black text-2xl sm:text-3xl text-[#191E1B] tracking-tight">
                {stat2Value}
                <span className="text-[#B88D44]">+</span>
              </span>
              <span className="text-[#68716B] mt-1 block uppercase font-bold text-[11px] tracking-wider leading-snug">
                Reels Delivered Every Month
              </span>
            </div>
          </div>

          {/* Motion Graphics Indicator 2: High-Velocity Cadence Waveform */}
          <div className="mt-4 pt-3 border-t border-[#EDE7DA]/70">
            <div className="h-6 w-full flex items-center justify-between gap-1.5 px-0.5">
              {[0.4, 0.7, 1.0, 0.6, 0.85, 0.5, 0.9, 0.75].map((scale, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-[#EDE7DA] overflow-hidden h-4 flex items-end"
                >
                  <div
                    className="w-full rounded-full bg-[#B88D44] transition-all duration-500 ease-out group-hover/stat:bg-[#A37B35]"
                    style={{
                      height: `${Math.max(15, scale * 100 * progress)}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 03 — 24–48 HOURS */}
      <div className="group/stat relative rounded-2xl p-4 sm:p-5 border border-[#EDE7DA]/80 bg-white/40 hover:bg-white hover:border-[#B88D44]/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,141,68,0.12)]">
        <div
          className="absolute -inset-1 rounded-2xl bg-[#B88D44]/10 blur-xl opacity-40 group-hover/stat:opacity-80 group-hover/stat:bg-[#B88D44]/20 transition-all duration-300 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#B88D44] font-bold tracking-widest uppercase">
              <span>03 // VELOCITY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88D44]" />
            </div>

            <div className="mt-2.5">
              <span className="block font-heading font-black text-2xl sm:text-3xl text-[#191E1B] tracking-tight">
                {stat3Start}–{stat3End}{" "}
                <span className="text-[#B88D44] text-lg sm:text-xl font-bold">
                  HOURS
                </span>
              </span>
              <span className="text-[#68716B] mt-1 block uppercase font-bold text-[11px] tracking-wider leading-snug">
                Fast Turnaround Delivery
              </span>
            </div>
          </div>

          {/* Motion Graphics Indicator 3: 24-48h Velocity Progress Arc */}
          <div className="mt-4 pt-3 border-t border-[#EDE7DA]/70">
            <div className="relative h-6 flex items-center">
              <div className="w-full h-1.5 rounded-full bg-[#EDE7DA] overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#B88D44] to-[#D4AF67] transition-all duration-300"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              {/* Dual milestone markers for 24h and 48h */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-1 w-3 h-3 rounded-full border-2 border-white bg-[#B88D44] shadow-xs transition-transform duration-300 group-hover/stat:scale-125"
                title="24h sprint point"
              />
              <div
                className="absolute right-0 -top-1 w-3 h-3 rounded-full border-2 border-white bg-[#10B981] shadow-xs transition-transform duration-300 group-hover/stat:scale-125"
                title="48h final delivery"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 04 — 80+ */}
      <div className="group/stat relative rounded-2xl p-4 sm:p-5 border border-[#EDE7DA]/80 bg-white/40 hover:bg-white hover:border-[#B88D44]/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,141,68,0.12)]">
        <div
          className="absolute -inset-1 rounded-2xl bg-[#B88D44]/10 blur-xl opacity-40 group-hover/stat:opacity-80 group-hover/stat:bg-[#B88D44]/20 transition-all duration-300 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#B88D44] font-bold tracking-widest uppercase">
              <span>04 // PARTNERS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>

            <div className="mt-2.5">
              <span className="block font-heading font-black text-2xl sm:text-3xl text-[#191E1B] tracking-tight">
                {stat4Value}
                <span className="text-[#B88D44]">+</span>
              </span>
              <span className="text-[#68716B] mt-1 block uppercase font-bold text-[11px] tracking-wider leading-snug">
                Brands Served
              </span>
            </div>
          </div>

          {/* Motion Graphics Indicator 4: Circular Milestone Progress Ring */}
          <div className="mt-4 pt-3 border-t border-[#EDE7DA]/70 flex items-center gap-2.5">
            <div className="relative w-6 h-6 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full -rotate-90" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#EDE7DA"
                  strokeWidth="2.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#B88D44"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="56.5"
                  strokeDashoffset={56.5 * (1 - progress)}
                  className="transition-all duration-300"
                />
              </svg>
            </div>
            <span className="text-[10px] font-mono text-[#68716B] uppercase tracking-wider font-semibold">
              Client Network
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

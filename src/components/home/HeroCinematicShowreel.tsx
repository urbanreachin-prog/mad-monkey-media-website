"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Sparkles, Layers } from "lucide-react";

interface HeroCinematicShowreelProps {
  videoSrc?: string;
}

/**
 * HeroCinematicShowreel — Premium video-led hero showcase component for the preview redesign.
 * Plays the actual optimized master showreel with sound toggle, custom HUD overlays,
 * timecode telemetry, and glassmorphic micro-interactions.
 */
export function HeroCinematicShowreel({
  videoSrc = "/videos/projects/200million%2B%20Views.mp4",
}: HeroCinematicShowreelProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      const cur = Math.floor(video.currentTime || 0);
      const mins = String(Math.floor(cur / 60)).padStart(2, "0");
      const secs = String(cur % 60).padStart(2, "0");
      setCurrentTime(`${mins}:${secs}`);
    };

    video.addEventListener("timeupdate", updateTime);
    return () => video.removeEventListener("timeupdate", updateTime);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto select-none"
      aria-label="Cinematic agency reel preview"
    >
      {/* Ambient Acid-Lime Underglow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-studio-lime/[0.08] blur-3xl"
        aria-hidden="true"
      />

      {/* Outer Studio Viewfinder Shell */}
      <div className="relative overflow-hidden rounded-3xl border border-studio-cream/15 bg-studio-charcoalDeep/95 p-3.5 sm:p-5 shadow-[0_32px_90px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        {/* Top Camera HUD Telemetry Bar */}
        <div className="flex items-center justify-between border-b border-studio-cream/10 pb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-studio-muted">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-lime shadow-[0_0_8px_#D8FF3E]" />
            </span>
            <span className="text-studio-cream font-bold">LIVE REEL // 200M+</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-studio-cream/60">REC [9:16]</span>
            <span className="rounded border border-studio-lime/40 bg-studio-lime/10 px-2 py-0.5 text-[9px] font-bold text-studio-lime">
              MASTER CUT
            </span>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="group relative mt-3.5 aspect-[9/14] sm:aspect-[9/13.5] w-full overflow-hidden rounded-2xl border border-studio-cream/12 bg-studio-ink">
          {/* Native HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Cinematic Vignette & Gradient Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio-charcoalDeep via-transparent to-studio-charcoalDeep/60 opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(23,24,21,0.6)_100%)]" />

          {/* Viewfinder Crosshairs */}
          <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-studio-lime/80" />
          <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-studio-lime/80" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-studio-lime/80" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-studio-lime/80" />

          {/* Top Badge Overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-lime/50 bg-studio-charcoalDeep/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-studio-lime backdrop-blur-md shadow-lg">
              <Sparkles className="h-3 w-3" />
              <span>MOST VIEWED REEL</span>
            </span>
          </div>

          {/* Quick Audio & Playback Controls Floating Strip */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep/85 px-3.5 py-1.5 text-[11px] font-semibold text-studio-cream backdrop-blur-md transition-colors hover:border-studio-lime hover:text-studio-lime"
              aria-label={isPlaying ? "Pause reel" : "Play reel"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-studio-lime" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-studio-lime fill-current" />
                  <span>PLAY</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-studio-cream/80 bg-studio-charcoalDeep/80 px-2 py-1 rounded border border-studio-cream/10">
                {currentTime}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-studio-cream/20 bg-studio-charcoalDeep/85 text-studio-cream backdrop-blur-md transition-colors hover:border-studio-lime hover:text-studio-lime"
                aria-label={isMuted ? "Unmute reel" : "Mute reel"}
              >
                {isMuted ? (
                  <VolumeX className="h-3.5 w-3.5" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5 text-studio-lime" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Floating Mini Overlay Card: Direct Strategy Link */}
        <div className="mt-3.5 flex items-center justify-between gap-3 rounded-xl border border-studio-cream/10 bg-studio-charcoal/90 px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-studio-lime/10 text-studio-lime border border-studio-lime/30">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-heading text-xs font-bold text-studio-cream">
                Editorial Retention Architecture
              </span>
              <span className="block text-[10px] text-studio-muted">
                Engineered for watch-time, saves &amp; organic reach
              </span>
            </div>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-1 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-studio-lime transition-all hover:bg-studio-lime hover:text-studio-ink"
          >
            <span>ALL WORK</span>
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

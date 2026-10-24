"use client";

import React, { useEffect, useRef, useState } from "react";
import { Film, Play } from "lucide-react";
import { GlassControls } from "@/components/glass/GlassControls";

interface SmartVideoProps {
  src?: string;
  poster?: string;
  title: string;
  autoPlay?: boolean;
  hoverPreview?: boolean;
  loop?: boolean;
  showControls?: boolean;
  aspectClassName?: string;
  className?: string;
  durationLabel?: string;
  priorityLoad?: boolean;
}

/**
 * Reusable Video Component for Showreel and Portfolio Media.
 * Features:
 * - Lazy loading below the fold via IntersectionObserver
 * - Muted autoplay or desktop hover preview without excessive bandwidth usage
 * - Accessible GlassControls overlay
 * - Graceful missing-file fallback that never pretends to be a broken player
 */
export function SmartVideo({
  src,
  poster = "/images/projects/posters/showreel-poster.svg",
  title,
  autoPlay = false,
  hoverPreview = false,
  loop = true,
  showControls = true,
  aspectClassName = "aspect-video",
  className = "",
  durationLabel,
  priorityLoad = false,
}: SmartVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(priorityLoad);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(!src);

  // Lazy load video source only when near viewport
  useEffect(() => {
    if (priorityLoad || shouldLoadVideo) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priorityLoad, shouldLoadVideo]);

  // Manage autoplay when loaded and in viewport
  useEffect(() => {
    if (!autoPlay || !shouldLoadVideo || hasError) return;
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [autoPlay, shouldLoadVideo, hasError]);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleMouseEnter = () => {
    if (!hoverPreview || hasError) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!hoverPreview || hasError || autoPlay) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  if (hasError || !src) {
    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-2xl bg-studio-charcoalDeep border border-studio-cream/15 flex flex-col items-center justify-center p-8 text-center ${aspectClassName} ${className}`.trim()}
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-studio-charcoal border border-studio-cream/15 shadow-sm mb-4">
          <Film className="h-5 w-5 text-studio-lime" aria-hidden="true" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-studio-charcoal px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-studio-cream border border-studio-cream/15">
          Studio Reel Composition
        </span>
        <p className="mt-3 font-heading text-lg font-bold text-studio-cream">
          {title}
        </p>
        <p className="mt-1 text-xs text-studio-muted max-w-sm">
          Master video reel scheduled for studio upload.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden bg-brand-black ${aspectClassName} ${className}`.trim()}
    >
      <video
        ref={videoRef}
        src={shouldLoadVideo ? src : undefined}
        poster={poster}
        muted={isMuted}
        loop={loop}
        playsInline
        preload={priorityLoad ? "metadata" : "none"}
        aria-label={title}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
        onClick={handleTogglePlay}
        className="h-full w-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />

      {/* Subtle gradient vignette at bottom for control readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
      />

      {showControls ? (
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-3 z-10">
          <GlassControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            onTogglePlay={handleTogglePlay}
            onToggleMute={handleToggleMute}
            label={title}
            durationLabel={durationLabel}
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
          className="glass-media-pill absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-foreground-primary transition-transform duration-200 hover:scale-105 z-10"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-black text-white">
            <Play className="h-2.5 w-2.5 translate-x-[0.5px]" aria-hidden="true" />
          </span>
          <span>{isPlaying ? "Playing" : "Preview"}</span>
        </button>
      )}
    </div>
  );
}

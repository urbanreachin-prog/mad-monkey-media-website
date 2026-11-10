"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Eye, AlertCircle, Film } from "lucide-react";
import {
  PortfolioItem,
  formatPortfolioViews,
  projects,
} from "@/data/projects";

interface PortfolioVideoCardProps {
  item: PortfolioItem;
  isActive: boolean;
  onActivate: (id: string) => void;
  onDeactivate: (id: string) => void;
  priority?: boolean;
  layout?: "grid" | "list";
}


const DESCRIPTIVE_FILENAME_TITLES: Record<string, string> = {
  "tvs-promotional-video": "TVS Promotional Video",
  "before-vs-after": "Before vs. After Showcase",
  "ai-talking-heads": "AI Talking Heads Production",
  "gym-edits": "Gym & Fitness Promotional Edit",
  "mad-monkey-edit": "Mad Monkey Media — Creative Edit",
  "medical-genre": "Medical & Healthcare Reel",
  "most-professional-one": "Executive Studio Production",
  "most-popular-one": "Automotive Studio Detailing Reel",
  "fitness-wellness": "Fitness & Wellness Campaign",
  "healthcare": "Healthcare Brand Campaign",
  "podcast-trailer": "Podcast Trailer & Personal Branding",
  "gym-promotion": "Gym Promotion Campaign",
};

function resolveReelMetadata(item: PortfolioItem): {
  heading: string;
  subheading: string | null;
  description: string;
} {
  const directProject =
    projects.find(
      (p) =>
        p.coverVideo === item.video ||
        p.videoGallery?.some((v) => v.src === item.video)
    ) ?? projects.find((p) => p.category === item.category);

  const matchedGalleryItem = projects
    .flatMap((p) => p.videoGallery ?? [])
    .find((v) => v.src === item.video);

  const filenameTitle = DESCRIPTIVE_FILENAME_TITLES[item.id];

  const heading =
    item.client ||
    item.title ||
    matchedGalleryItem?.title ||
    filenameTitle ||
    directProject?.title ||
    directProject?.client ||
    item.category;

  const secondaryCandidate =
    item.title ||
    matchedGalleryItem?.title ||
    filenameTitle ||
    directProject?.title ||
    null;

  const subheading =
    secondaryCandidate && secondaryCandidate !== heading
      ? secondaryCandidate
      : null;

  const description =
    item.description ||
    directProject?.description ||
    "Short-form vertical reel crafted for audience retention and brand impact.";

  return {
    heading,
    subheading,
    description,
  };
}

export function PortfolioVideoCard({
  item,
  isActive,
  onActivate,
  onDeactivate,
  priority = false,
  layout = "grid",
}: PortfolioVideoCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [triedFallbackUrl, setTriedFallbackUrl] = useState(false);

  const primaryVideoUrl = `/videos/projects/${encodeURIComponent(item.filename)}`;
  const fallbackVideoUrl = item.video;
  const activeVideoSrc = triedFallbackUrl ? fallbackVideoUrl : primaryVideoUrl;

  const verifiedViewsLabel = formatPortfolioViews(item.views);
  const hasThumbnail = Boolean(item.thumbnail) && !thumbError;
  const isTopPerformer =
    item.id === "200million-plus-views" || verifiedViewsLabel === "200M+ VIEWS";

  const { heading, subheading, description } = resolveReelMetadata(item);

  // Pause video when another card becomes active
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (!isActive) {
      if (!videoEl.paused) {
        videoEl.pause();
      }
      setIsPlaying(false);
    }
  }, [isActive]);

  // Automatically pause playback if scrolled out of viewport
  useEffect(() => {
    if (!isActive || !cardRef.current) return;

    const el = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting && isActive) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
            setIsPlaying(false);
            onDeactivate(item.id);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [isActive, item.id, onDeactivate]);

  const startVideoPlayback = (videoEl: HTMLVideoElement) => {
    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          videoEl.muted = true;
          videoEl
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              setIsPlaying(false);
            });
        });
    }
  };

  const handlePlayTrigger = () => {
    if (videoError) {
      setVideoError(false);
    }

    const videoEl = videoRef.current;

    if (isActive && isPlaying) {
      videoEl?.pause();
      setIsPlaying(false);
      onDeactivate(item.id);
      return;
    }

    onActivate(item.id);

    if (videoEl) {
      videoEl.muted = false;
      startVideoPlayback(videoEl);
    }
  };

  const accessibleLabel = `Play ${heading} (${item.category}) portfolio reel`;
  const isList = layout === "list";

  return (
    <article
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 bg-white ${
        isList
          ? isActive
            ? "flex flex-col sm:flex-row items-stretch"
            : "flex flex-row items-stretch"
          : "flex flex-col h-full"
      } ${
        isActive
          ? "border-[#B88D44] shadow-[0_12px_36px_rgba(184,141,68,0.2)]"
          : isTopPerformer
          ? "border-[#B88D44]/60 shadow-[0_8px_30px_rgba(184,141,68,0.12)] hover:border-[#B88D44]"
          : "border-[#EDE7DA] hover:border-[#B88D44]/50 hover:shadow-[0_12px_30px_rgba(25,30,27,0.06)]"
      }`}
    >
      {/* 9:16 Portrait Media Frame */}
      <div
        className={`relative aspect-[9/16] overflow-hidden bg-black ${
          isList
            ? isActive
              ? "w-full sm:w-48 shrink-0"
              : "w-28 min-[380px]:w-32 min-[440px]:w-36 sm:w-48 shrink-0"
            : "w-full"
        }`}
      >
        {/* Poster Thumbnail Layer */}
        {hasThumbnail ? (
          <Image
            src={item.thumbnail}
            alt={`${heading} — ${item.category} portfolio reel thumbnail`}
            fill
            sizes={
              isList
                ? "(max-width: 640px) 144px, 192px"
                : "(max-width: 420px) 94vw, (max-width: 1024px) 48vw, 24vw"
            }
            priority={priority}
            onError={() => setThumbError(true)}
            className={`object-cover object-center transition-transform duration-500 ease-out ${
              isActive
                ? "opacity-0 pointer-events-none"
                : "group-hover:scale-[1.03]"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#191E1B] p-5 text-center">
            <Film
              className="h-8 w-8 text-[#B88D44] mb-2.5"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              {item.category}
            </span>
          </div>
        )}

        {/* Top/Bottom Vignette */}
        {!isActive && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"
            aria-hidden="true"
          />
        )}

        {/* Top of Thumbnail Badges */}
        <div className="pointer-events-none absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between gap-1.5">
          <span
            className={`items-center gap-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-white max-w-full truncate ${
              isList && !isActive ? "hidden sm:inline-flex" : "inline-flex"
            }`}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88D44]"
              aria-hidden="true"
            />
            <span className="truncate">{item.category}</span>
          </span>

          {isActive ? (
            <button
              type="button"
              onClick={handlePlayTrigger}
              aria-label="Pause video"
              className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-[#B88D44] bg-[#B88D44] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xs shrink-0"
            >
              <Pause className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
              <span>Playing</span>
            </button>
          ) : isTopPerformer && !isList ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B88D44]/60 bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF67] shrink-0">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#B88D44] animate-pulse"
                aria-hidden="true"
              />
              <span>TOP REEL</span>
            </span>
          ) : null}
        </div>

        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            src={activeVideoSrc}
            poster={hasThumbnail ? item.thumbnail : undefined}
            preload="none"
            playsInline
            controls={isActive}
            onPlay={() => {
              setIsPlaying(true);
              onActivate(item.id);
            }}
            onPause={() => {
              setIsPlaying(false);
            }}
            onEnded={() => {
              setIsPlaying(false);
              onDeactivate(item.id);
            }}
            onError={() => {
              if (!triedFallbackUrl && primaryVideoUrl !== fallbackVideoUrl) {
                setTriedFallbackUrl(true);
                return;
              }
              setVideoError(true);
              setIsPlaying(false);
              onDeactivate(item.id);
            }}
            className={`absolute inset-0 h-full w-full object-contain bg-black transition-opacity duration-200 ${
              isActive
                ? "opacity-100 z-20"
                : "opacity-0 pointer-events-none -z-10"
            }`}
          />
        )}

        {/* Video Error Message */}
        {videoError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/95 p-4 text-center">
            <AlertCircle className="h-6 w-6 text-amber-500 mb-1.5" aria-hidden="true" />
            <p className="text-xs font-semibold text-white">Video preview unavailable</p>
          </div>
        )}

        {/* Play Button Overlay */}
        {!isActive && !videoError && (
          <button
            type="button"
            onClick={handlePlayTrigger}
            aria-label={accessibleLabel}
            className="absolute inset-0 z-10 flex items-center justify-center w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44]"
          >
            <span
              className={`flex items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B88D44] group-hover:border-transparent ${
                isList ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-14 sm:w-14"
              }`}
            >
              <Play
                className={`${
                  isList ? "h-4 w-4" : "h-5 w-5"
                } translate-x-0.5 fill-current`}
                aria-hidden="true"
              />
            </span>
          </button>
        )}

        {/* View Count Tag on Thumbnail */}
        {!isActive && item.viewsConfirmed && verifiedViewsLabel && (
          <div
            className={`pointer-events-none absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 items-center justify-start ${
              isList ? "hidden sm:flex" : "flex"
            }`}
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EDE7DA] bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#B88D44] shadow-xs">
              <Eye className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{verifiedViewsLabel}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Side / Below */}
      <div
        className={`flex min-w-0 flex-1 flex-col justify-between bg-white ${
          isList
            ? isActive
              ? "border-t sm:border-t-0 sm:border-l border-[#EDE7DA] p-4 sm:p-6"
              : "border-l border-[#EDE7DA] p-4 sm:p-6"
            : "border-t border-[#EDE7DA] p-4 sm:p-5"
        }`}
      >
        <div className="min-w-0">
          {isList && (
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex sm:hidden items-center gap-1.5 rounded-full border border-[#EDE7DA] bg-[#FAF7F2] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#68716B]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88D44]" />
                <span>{item.category}</span>
              </span>

              {isTopPerformer && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B88D44]/30 bg-[#B88D44]/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#B88D44]">
                  <span>TOP REEL</span>
                </span>
              )}
            </div>
          )}

          <h2
            className={`font-heading font-bold tracking-tight text-[#191E1B] line-clamp-1 transition-colors duration-200 group-hover:text-[#B88D44] ${
              isList ? "text-base sm:text-xl" : "text-sm sm:text-base"
            }`}
          >
            {heading}
          </h2>

          {subheading && (
            <p className="mt-0.5 text-xs font-medium text-[#8A948E] line-clamp-1">
              {subheading}
            </p>
          )}

          <p
            className={`mt-1.5 text-[#68716B] leading-relaxed ${
              isList
                ? "text-xs sm:text-sm line-clamp-2 sm:line-clamp-3"
                : "text-xs line-clamp-2"
            }`}
          >
            {description}
          </p>
        </div>

        {isList && (
          <div className="mt-4 pt-3.5 border-t border-[#EDE7DA] flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={handlePlayTrigger}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#EDE7DA] bg-[#FAF7F2] px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#191E1B] transition-colors hover:border-[#B88D44] hover:text-[#B88D44]"
            >
              {isActive && isPlaying ? (
                <>
                  <Pause className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Pause Reel</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  <span>Play Reel</span>
                </>
              )}
            </button>

            {item.viewsConfirmed && verifiedViewsLabel && (
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#B88D44]">
                <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{verifiedViewsLabel}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

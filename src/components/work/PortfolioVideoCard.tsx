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

const isDev = process.env.NODE_ENV !== "production";

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

/**
 * Resolves the existing client/project name and short existing description
 * from `PORTFOLIO_METADATA` and the `projects` archive in `src/data/projects.ts`
 * without inventing fake clients or fake project data.
 */
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

  // Automatically pause playback if the card scrolls out of the viewport
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
          // If unmuted autoplay is restricted by the browser, fall back to muted playback immediately
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
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 bg-studio-charcoalDeep ${
        isList
          ? isActive
            ? "flex flex-col sm:flex-row items-stretch"
            : "flex flex-row items-stretch"
          : "flex flex-col h-full"
      } ${
        isActive
          ? "border-studio-lime shadow-[0_0_26px_rgba(216,255,62,0.16)]"
          : isTopPerformer
          ? "border-studio-lime/65 shadow-[0_0_22px_rgba(216,255,62,0.12)] hover:border-studio-lime hover:shadow-[0_0_28px_rgba(216,255,62,0.2)]"
          : "border-studio-cream/10 hover:border-studio-lime/45 hover:shadow-[0_12px_30px_-12px_rgba(216,255,62,0.12)]"
      }`}
    >
      {/* 9:16 Portrait Media Frame */}
      <div
        className={`relative aspect-[9/16] overflow-hidden bg-studio-ink ${
          isList
            ? isActive
              ? "w-full sm:w-44 shrink-0"
              : "w-28 min-[380px]:w-32 min-[440px]:w-36 sm:w-44 shrink-0"
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
                ? "(max-width: 640px) 144px, 180px"
                : "(max-width: 420px) 94vw, (max-width: 1024px) 48vw, 24vw"
            }
            priority={priority}
            onError={() => setThumbError(true)}
            className={`object-cover object-center transition-transform duration-500 ease-out ${
              isActive
                ? "opacity-0 pointer-events-none"
                : "group-hover:scale-[1.025]"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-studio-charcoalDeep p-5 text-center">
            <Film
              className="h-8 w-8 text-studio-lime/70 mb-2.5"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-studio-cream">
              {item.category}
            </span>
            {isDev && (
              <span className="mt-2 rounded-md border border-studio-orange/40 bg-studio-orange/10 px-2.5 py-1 text-[11px] font-mono text-studio-cream/90 break-all">
                Missing thumbnail: {item.filename}
              </span>
            )}
          </div>
        )}

        {/* Restrained Top & Bottom Vignette so the video thumbnail stays bright and dominant */}
        {!isActive && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio-ink/75 via-transparent to-studio-ink/35"
            aria-hidden="true"
          />
        )}

        {/* Top of Thumbnail: Category Badge & Top Performer / Playing Status */}
        <div className="pointer-events-none absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between gap-1.5">
          <span
            className={`items-center gap-1.5 rounded-full border border-studio-cream/15 bg-studio-ink/75 backdrop-blur-md px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-studio-cream/95 max-w-full truncate ${
              isList && !isActive ? "hidden sm:inline-flex" : "inline-flex"
            }`}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-studio-lime"
              aria-hidden="true"
            />
            <span className="truncate">{item.category}</span>
          </span>

          {isActive ? (
            <button
              type="button"
              onClick={handlePlayTrigger}
              aria-label="Pause video"
              className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-studio-lime/55 bg-studio-ink/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-studio-lime hover:bg-studio-lime hover:text-studio-ink transition-colors shrink-0"
            >
              <Pause className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
              <span>Playing</span>
            </button>
          ) : isTopPerformer && !isList ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-studio-lime/60 bg-studio-ink/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-studio-lime shadow-[0_0_12px_rgba(216,255,62,0.18)] shrink-0">
              <span
                className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse"
                aria-hidden="true"
              />
              <span>MOST VIEWED</span>
            </span>
          ) : null}
        </div>

        {/* Video Element (Mounted with preload="none" for reliable click-to-play across desktop & mobile) */}
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
            className={`absolute inset-0 h-full w-full object-contain bg-studio-ink transition-opacity duration-200 ${
              isActive
                ? "opacity-100 z-20"
                : "opacity-0 pointer-events-none -z-10"
            }`}
          />
        )}

        {/* Graceful Fallback if Video File Fails to Play */}
        {videoError && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-studio-ink/95 p-4 text-center">
            <AlertCircle
              className="h-6 w-6 text-studio-orange mb-1.5"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold text-studio-cream">
              Video preview unavailable
            </p>
            {isDev && (
              <p className="mt-1 text-[10px] font-mono text-studio-muted break-all">
                {item.filename}
              </p>
            )}
          </div>
        )}

        {/* Centred Subtle Play Button Overlay */}
        {!isActive && !videoError && (
          <button
            type="button"
            onClick={handlePlayTrigger}
            aria-label={accessibleLabel}
            className="absolute inset-0 z-10 flex items-center justify-center w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-lime focus-visible:ring-inset"
          >
            <span
              className={`flex items-center justify-center rounded-full border border-studio-cream/25 bg-studio-ink/60 text-studio-cream shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-studio-lime group-hover:bg-studio-lime group-hover:text-studio-ink group-hover:shadow-[0_0_22px_rgba(216,255,62,0.35)] ${
                isList ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-12 sm:h-14 sm:w-14"
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

        {/* Bottom of Thumbnail: Existing Confirmed View-Count Badge Only */}
        {!isActive && item.viewsConfirmed && verifiedViewsLabel && (
          <div
            className={`pointer-events-none absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 items-center justify-start ${
              isList ? "hidden sm:flex" : "flex"
            }`}
          >
            <div
              className={
                isTopPerformer
                  ? "inline-flex items-center gap-1.5 rounded-full border border-studio-lime bg-studio-lime px-3 py-1 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.1em] text-studio-ink shadow-[0_0_18px_rgba(216,255,62,0.28)]"
                  : "inline-flex items-center gap-1.5 rounded-full border border-studio-lime/40 bg-studio-ink/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-studio-lime"
              }
            >
              <Eye className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span>{verifiedViewsLabel}</span>
            </div>
          </div>
        )}
      </div>

      {/* Below Thumbnail (or Right Column in List Mode): Project/Client Name & Short Existing Description */}
      <div
        className={`flex min-w-0 flex-1 flex-col justify-between bg-studio-charcoalDeep ${
          isList
            ? isActive
              ? "border-t sm:border-t-0 sm:border-l border-studio-cream/10 p-3.5 sm:p-5"
              : "border-l border-studio-cream/10 p-3.5 sm:p-5"
            : "border-t border-studio-cream/10 px-3.5 py-3 sm:px-4 sm:py-3.5"
        }`}
      >
        <div className="min-w-0">
          {isList && (
            <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
              <span className="inline-flex sm:hidden items-center gap-1.5 rounded-full border border-studio-cream/15 bg-studio-ink/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-studio-cream/90">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-studio-lime"
                  aria-hidden="true"
                />
                <span>{item.category}</span>
              </span>

              {isTopPerformer && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-lime/50 bg-studio-lime/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-studio-lime">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>MOST VIEWED</span>
                </span>
              )}
            </div>
          )}

          <h2
            className={`font-heading font-bold tracking-tight text-studio-cream line-clamp-1 transition-colors duration-200 group-hover:text-studio-lime ${
              isList ? "text-sm sm:text-lg" : "text-sm sm:text-[15px]"
            }`}
          >
            {heading}
          </h2>

          {subheading && (
            <p className="mt-0.5 text-[11px] font-medium text-studio-cream/75 line-clamp-1">
              {subheading}
            </p>
          )}

          <p
            className={`mt-1 text-studio-muted leading-relaxed ${
              isList
                ? "text-xs sm:text-sm line-clamp-2 sm:line-clamp-3"
                : "text-[11px] sm:text-xs line-clamp-2"
            }`}
          >
            {description}
          </p>
        </div>

        {isList && (
          <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-studio-cream/10 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={handlePlayTrigger}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-studio-cream/15 bg-studio-charcoal px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
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
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] text-studio-lime">
                <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden="true" />
                <span>{verifiedViewsLabel}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}


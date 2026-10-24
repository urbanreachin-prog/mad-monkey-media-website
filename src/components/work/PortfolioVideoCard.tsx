"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Eye, AlertCircle, Film } from "lucide-react";
import { PortfolioItem, formatPortfolioViews } from "@/data/projects";

interface PortfolioVideoCardProps {
  item: PortfolioItem;
  isActive: boolean;
  onActivate: (id: string) => void;
  onDeactivate: (id: string) => void;
  priority?: boolean;
}

const isDev = process.env.NODE_ENV !== "production";

export function PortfolioVideoCard({
  item,
  isActive,
  onActivate,
  onDeactivate,
  priority = false,
}: PortfolioVideoCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [hasActivatedOnce, setHasActivatedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const verifiedViewsLabel = formatPortfolioViews(item.views);
  const hasThumbnail = Boolean(item.thumbnail) && !thumbError;
  const isTopPerformer =
    item.id === "200million-plus-views" || verifiedViewsLabel === "200M+ VIEWS";

  // Sync play/pause state with parent activeVideoId so only one video plays at a time
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isActive) {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    } else {
      if (!videoEl.paused) {
        videoEl.pause();
      }
      setIsPlaying(false);
    }
  }, [isActive, hasActivatedOnce]);

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

  const handlePlayTrigger = () => {
    if (videoError) return;
    if (!hasActivatedOnce) {
      setHasActivatedOnce(true);
    }
    if (isActive && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
      onDeactivate(item.id);
    } else {
      onActivate(item.id);
    }
  };

  const accessibleLabel = item.title
    ? `Play ${item.title} video`
    : item.client
    ? `Play ${item.client} portfolio video`
    : `Play ${item.category} portfolio reel`;

  return (
    <article
      ref={cardRef}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 bg-studio-charcoalDeep ${
        isActive
          ? "border-studio-lime shadow-[0_0_28px_rgba(216,255,62,0.16)]"
          : isTopPerformer
          ? "border-studio-lime/70 shadow-[0_0_24px_rgba(216,255,62,0.14)] hover:border-studio-lime hover:shadow-[0_0_32px_rgba(216,255,62,0.22)]"
          : "border-studio-cream/12 hover:border-studio-lime/45"
      }`}
    >
      {/* 9:16 Portrait Media Frame */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-studio-ink">
        {/* Poster Thumbnail Layer (Always rendered behind or before video playback) */}
        {hasThumbnail ? (
          <Image
            src={item.thumbnail}
            alt={
              item.title ||
              item.client ||
              `${item.category} portfolio video thumbnail`
            }
            fill
            sizes="(max-width: 420px) 95vw, (max-width: 768px) 48vw, (max-width: 1200px) 32vw, 24vw"
            priority={priority}
            onError={() => setThumbError(true)}
            className={`object-cover transition-transform duration-500 ${
              isActive
                ? "opacity-0 pointer-events-none"
                : "group-hover:scale-[1.02]"
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

        {/* Subtle Top & Bottom Editorial Vignette Overlays (when poster is visible) */}
        {!isActive && (
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio-ink/90 via-studio-ink/15 to-studio-ink/40"
            aria-hidden="true"
          />
        )}

        {/* Top Bar: Category Pill, Top Performer Badge & Active Status */}
        <div className="pointer-events-none absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-cream/15 bg-studio-ink/75 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-studio-cream/90">
            <span
              className="h-1.5 w-1.5 rounded-full bg-studio-lime"
              aria-hidden="true"
            />
            {item.category}
          </span>

          {isActive ? (
            <button
              type="button"
              onClick={handlePlayTrigger}
              aria-label="Pause video"
              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-studio-lime/50 bg-studio-ink/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-studio-lime hover:bg-studio-lime hover:text-studio-ink transition-colors"
            >
              <Pause className="h-3 w-3 fill-current" aria-hidden="true" />
              <span>Playing</span>
            </button>
          ) : isTopPerformer ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-studio-lime/60 bg-studio-ink/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-studio-lime shadow-[0_0_14px_rgba(216,255,62,0.2)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse"
                aria-hidden="true"
              />
              <span>MOST VIEWED</span>
            </span>
          ) : null}
        </div>

        {/* Active Video Element (Mounted only on explicit click, preload="none", object-contain) */}
        {hasActivatedOnce && !videoError && (
          <video
            ref={videoRef}
            src={item.video}
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
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-studio-ink/95 p-5 text-center">
            <AlertCircle
              className="h-7 w-7 text-studio-orange mb-2"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold text-studio-cream">
              Video preview unavailable
            </p>
            {isDev && (
              <p className="mt-1 text-[11px] font-mono text-studio-muted break-all">
                {item.filename}
              </p>
            )}
          </div>
        )}

        {/* Manual Play Button Overlay (Never triggers on hover; click/tap only) */}
        {!isActive && !videoError && (
          <button
            type="button"
            onClick={handlePlayTrigger}
            aria-label={accessibleLabel}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-lime focus-visible:ring-inset"
          >
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-studio-lime/60 bg-studio-ink/80 text-studio-lime shadow-[0_8px_28px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-200 group-hover:scale-105 group-hover:bg-studio-lime group-hover:text-studio-ink group-hover:shadow-[0_0_25px_rgba(216,255,62,0.45)]">
              <Play
                className="h-6 w-6 translate-x-0.5 fill-current"
                aria-hidden="true"
              />
            </span>
          </button>
        )}

        {/* Bottom Overlay inside Portrait Frame: Clean Confirmed Views & Optional Client/Title */}
        {!isActive && ((item.viewsConfirmed && verifiedViewsLabel) || item.title || item.client) && (
          <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10 p-3.5 sm:p-4 flex flex-col justify-end">
            {/* Prominent Views Badge (Only shown when viewsConfirmed is true) */}
            {item.viewsConfirmed && verifiedViewsLabel ? (
              <div
                className={
                  isTopPerformer
                    ? "inline-flex items-center gap-1.5 self-start rounded-full border border-studio-lime bg-studio-lime px-3.5 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em] text-studio-ink shadow-[0_0_20px_rgba(216,255,62,0.3)]"
                    : "inline-flex items-center gap-1.5 self-start rounded-full border border-studio-lime/40 bg-studio-ink/85 backdrop-blur-md px-3 py-1 text-xs sm:text-[13px] font-bold uppercase tracking-[0.1em] text-studio-lime shadow-sm"
                }
              >
                <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{verifiedViewsLabel}</span>
              </div>
            ) : null}

            {/* Optional Verified Client or Clean Title (Omitted when not set) */}
            {(item.title || item.client) && (
              <div className="mt-2">
                {item.title && (
                  <h2 className="font-heading text-sm sm:text-base font-bold text-studio-cream leading-snug line-clamp-1">
                    {item.title}
                  </h2>
                )}
                {item.client && (
                  <p className="text-[11px] sm:text-xs font-medium text-studio-cream/75 line-clamp-1">
                    {item.client}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

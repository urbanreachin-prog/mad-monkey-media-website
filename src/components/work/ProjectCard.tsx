"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { Project } from "@/data/projects";
import { SmartImage } from "@/components/media/SmartImage";

interface ProjectCardProps {
  project: Project;
  variant?: "large" | "wide" | "standard";
  priority?: boolean;
}

/**
 * Editorial Project Card
 * Lets the creative work dominate the frame.
 * Uses desktop-only hover video preview on demand (no simultaneous preload)
 * and a small selective glass category label over the media frame.
 */
export function ProjectCard({
  project,
  variant = "standard",
  priority = false,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [hasInteractedDesktop, setHasInteractedDesktop] = useState(false);

  const handleMouseEnter = () => {
    if (!project.coverVideo) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    setHasInteractedDesktop(true);
    setIsHoveringVideo(true);

    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.play().catch(() => {
          setIsHoveringVideo(false);
        });
      }
    });
  };

  const handleMouseLeave = () => {
    if (!project.coverVideo) return;
    setIsHoveringVideo(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  };

  const aspectClass = {
    large: "aspect-[16/11] sm:aspect-[16/10]",
    wide: "aspect-[16/10] sm:aspect-[21/10]",
    standard: "aspect-[16/11]",
  }[variant];

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col"
    >
      <Link
        href={`/work/${project.slug}`}
        className="relative block overflow-hidden rounded-2xl bg-brand-black border border-border-subtle shadow-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
        aria-label={`View project: ${project.title}`}
      >
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          {/* Poster / Cover Image */}
          <SmartImage
            src={project.coverImage}
            alt={`${project.title} — ${project.industryLabel}`}
            fill
            priority={priority}
            sizes={
              variant === "wide"
                ? "(max-width: 1024px) 100vw, 90vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Desktop Hover Video Preview (mounts video source only when hovered on desktop to save bandwidth) */}
          {project.coverVideo && hasInteractedDesktop && (
            <video
              ref={videoRef}
              src={project.coverVideo}
              poster={project.coverImage}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                isHoveringVideo ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Small selective glass overlay pill for industry tag */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
            <span className="glass-media-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-primary">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
                aria-hidden="true"
              />
              {project.industryLabel}
            </span>

            {project.coverVideo && (
              <span className="glass-media-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium text-foreground-primary">
                <Play
                  className="h-3 w-3 fill-brand-black text-brand-black"
                  aria-hidden="true"
                />
                <span className="hidden sm:inline">
                  {isHoveringVideo ? "Playing Preview" : "Film"}
                </span>
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Editorial Metadata Below Media Frame */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          {project.client && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground-secondary">
              {project.client}
            </p>
          )}
          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground-primary group-hover:text-brand-black">
            <Link
              href={`/work/${project.slug}`}
              className="hover:underline decoration-brand-yellow decoration-2 underline-offset-4"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <Link
          href={`/work/${project.slug}`}
          aria-label={`View ${project.title}`}
          className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border-subtle bg-white px-4 py-2 text-xs font-semibold text-foreground-primary transition-all duration-200 group-hover:border-brand-yellow group-hover:bg-brand-yellow"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

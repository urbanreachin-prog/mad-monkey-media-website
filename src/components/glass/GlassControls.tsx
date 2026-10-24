"use client";

import React from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface GlassControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  label?: string;
  durationLabel?: string;
}

/**
 * Refined dark studio media control bar for project video players.
 * Ensures accessible contrast and full keyboard operability.
 */
export function GlassControls({
  isPlaying,
  isMuted,
  onTogglePlay,
  onToggleMute,
  label = "Showreel",
  durationLabel,
}: GlassControlsProps) {
  return (
    <div
      className="glass-media-pill inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-medium text-studio-cream transition-all duration-300"
      role="group"
      aria-label={`${label} video controls`}
    >
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? `Pause ${label}` : `Play ${label}`}
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-studio-lime text-studio-ink transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-lime"
      >
        {isPlaying ? (
          <Pause className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
        ) : (
          <Play
            className="h-3.5 w-3.5 translate-x-[0.5px] fill-current"
            aria-hidden="true"
          />
        )}
      </button>

      <span className="select-none tracking-wide text-studio-cream font-medium">
        {label}
      </span>

      {durationLabel && (
        <span className="hidden sm:inline-block text-studio-muted border-l border-studio-cream/15 pl-3">
          {durationLabel}
        </span>
      )}

      <button
        type="button"
        onClick={onToggleMute}
        aria-label={isMuted ? `Unmute ${label}` : `Mute ${label}`}
        className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-studio-cream/20 bg-studio-charcoal text-studio-cream transition-colors duration-200 hover:border-studio-lime hover:text-studio-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-lime"
      >
        {isMuted ? (
          <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

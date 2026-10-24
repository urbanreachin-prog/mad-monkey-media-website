"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

interface SmartImageProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  fallbackLabel?: string;
}

/**
 * Reusable Image Component with graceful missing-file fallback,
 * responsive sizing, lazy loading by default, and editorial presentation.
 */
export function SmartImage({
  src,
  alt,
  fill = false,
  width = 1200,
  height = 800,
  priority = false,
  className = "",
  containerClassName = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  fallbackLabel,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-background-secondary border border-border-subtle text-center p-6 ${
          fill ? "absolute inset-0 h-full w-full" : "w-full min-h-[240px]"
        } ${containerClassName}`.trim()}
      >
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border-subtle text-foreground-secondary mb-3">
          <ImageOff className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
        </div>
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.16em] text-foreground-primary">
          {fallbackLabel || "Visual Asset"}
        </p>
        <p className="mt-1 text-xs text-foreground-secondary max-w-xs">
          {alt}
        </p>
      </div>
    );
  }

  const isSvg = src.endsWith(".svg");

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "h-full w-full" : ""
      } ${containerClassName}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        unoptimized={isSvg}
        sizes={sizes}
        onError={() => setHasError(true)}
        className={`transition-transform duration-500 ease-out ${className}`.trim()}
      />
    </div>
  );
}

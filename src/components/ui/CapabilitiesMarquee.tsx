import React from "react";

interface CapabilitiesMarqueeProps {
  items?: string[];
  variant?: "default" | "editorial";
}

const DEFAULT_CAPABILITIES = [
  "CONTENT PRODUCTION",
  "REELS PRODUCTION",
  "SOCIAL MEDIA",
  "PERFORMANCE MARKETING",
  "BRAND STRATEGY",
  "PERSONAL BRANDING",
  "WEBSITE DEVELOPMENT",
];

/**
 * CapabilitiesMarquee — Compact, seamless horizontal services strip
 * Uses two identical tracks for a jump-free 50% CSS translate3d loop,
 * marking the second copy aria-hidden so screen readers never hear duplicates.
 */
export function CapabilitiesMarquee({
  items = DEFAULT_CAPABILITIES,
  variant = "default",
}: CapabilitiesMarqueeProps) {
  const isEditorial = variant === "editorial";

  return (
    <div
      role="region"
      aria-label="Mad Monkey Media Core Services"
      className={`relative overflow-hidden border-y border-studio-cream/12 bg-studio-charcoalDeep ${
        isEditorial ? "py-4 sm:py-5" : "py-3.5"
      }`}
    >
      <div className="flex w-max animate-editorial-marquee items-center">
        {/* Track 1: Accessible to screen readers */}
        <ul className="flex shrink-0 items-center">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-5 sm:gap-7 px-2.5 sm:px-3.5"
            >
              <span
                className={
                  isEditorial
                    ? "font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-studio-cream whitespace-nowrap"
                    : "text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream/90 whitespace-nowrap"
                }
              >
                {item}
              </span>
              <span
                className="h-1.5 w-1.5 rotate-45 bg-studio-lime shadow-[0_0_8px_rgba(216,255,62,0.7)] shrink-0"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* Track 2: Duplicate for seamless infinite loop, hidden from screen readers */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={`${item}-dup-${idx}`}
              className="flex items-center gap-5 sm:gap-7 px-2.5 sm:px-3.5"
            >
              <span
                className={
                  isEditorial
                    ? "font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-studio-cream whitespace-nowrap"
                    : "text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream/90 whitespace-nowrap"
                }
              >
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-studio-lime shadow-[0_0_8px_rgba(216,255,62,0.7)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

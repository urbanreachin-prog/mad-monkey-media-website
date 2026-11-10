import React from "react";

interface CapabilitiesMarqueeProps {
  items?: string[];
  variant?: "default" | "editorial";
}

const DEFAULT_CAPABILITIES = [
  "HIGH-RETENTION REELS",
  "YOUTUBE CINEMA CUTS",
  "KINETIC MOTION GRAPHICS",
  "UGC PERFORMANCE ADS",
  "FILM-GRADE COLOR SCIENCE",
  "MULTI-CAM PODCAST EXTRACTION",
  "24-48H TURNAROUND SPRINTS",
];

export function CapabilitiesMarquee({
  items = DEFAULT_CAPABILITIES,
  variant = "default",
}: CapabilitiesMarqueeProps) {
  const isEditorial = variant === "editorial";

  return (
    <div
      role="region"
      aria-label="Mad Monkey Media Core Services"
      className={`relative overflow-hidden border-y border-[#EDE7DA] bg-white/80 backdrop-blur-sm ${
        isEditorial ? "py-4 sm:py-4.5" : "py-3"
      }`}
    >
      <div className="flex w-max animate-editorial-marquee items-center">
        {/* Track 1 */}
        <ul className="flex shrink-0 items-center">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-5 sm:gap-7 px-3 sm:px-4"
            >
              <span
                className="font-heading text-xs sm:text-xs font-bold uppercase tracking-[0.2em] text-[#191E1B] whitespace-nowrap"
              >
                {item}
              </span>
              <span
                className="h-1.5 w-1.5 rotate-45 bg-[#B88D44] shadow-[0_0_8px_rgba(184,141,68,0.5)] shrink-0"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* Track 2 */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={`${item}-dup-${idx}`}
              className="flex items-center gap-5 sm:gap-7 px-3 sm:px-4"
            >
              <span
                className="font-heading text-xs sm:text-xs font-bold uppercase tracking-[0.2em] text-[#191E1B] whitespace-nowrap"
              >
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B88D44] shadow-[0_0_8px_rgba(184,141,68,0.5)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppEnquiryUrl } from "@/config/site";

interface GlassCTAProps {
  headline?: string;
  supportingText?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappContext?: string;
  eyebrow?: string;
}

/**
 * Refined Dark Studio CTA section component.
 * Matches the approved homepage's dark charcoal surface, technical grid,
 * subtle vector geometry, and neon lime primary action button.
 */
export function GlassCTA({
  headline = "Have a brand worth talking about?",
  supportingText = "Let's create something worth remembering.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  whatsappContext,
  eyebrow = "NEXT STEP",
}: GlassCTAProps) {
  const whatsappHref = getWhatsAppEnquiryUrl(whatsappContext);

  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="studio-dark-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-studio-cream/10"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-studio-lime/30 bg-studio-charcoalDeep p-8 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
          {/* Subtle Corner Geometric Vector Composition */}
          <svg
            viewBox="0 0 320 320"
            fill="none"
            className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 opacity-20 sm:opacity-35"
            aria-hidden="true"
          >
            <circle
              cx="160"
              cy="160"
              r="140"
              stroke="#D8FF3E"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <circle
              cx="160"
              cy="160"
              r="95"
              stroke="#F3F0E8"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <path
              d="M 60 260 L 245 75 M 185 75 H 245 V 135"
              stroke="#D8FF3E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-studio-lime mb-5">
                <span
                  className="h-2 w-2 rounded-full bg-studio-lime"
                  aria-hidden="true"
                />
                <span>{eyebrow}</span>
              </div>

              <h2
                id="closing-cta-heading"
                className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tightest text-studio-cream leading-[1.06]"
              >
                {headline}
              </h2>

              <p className="mt-4 text-base sm:text-xl text-studio-muted leading-relaxed">
                {supportingText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href={primaryHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-studio-lime px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream shadow-[0_0_25px_rgba(216,255,62,0.2)]"
              >
                <span>{primaryLabel}</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-studio-cream/20 bg-studio-charcoal px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-all duration-200 hover:border-studio-lime hover:text-studio-lime"
              >
                <MessageCircle
                  className="h-4 w-4 text-studio-lime"
                  aria-hidden="true"
                />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

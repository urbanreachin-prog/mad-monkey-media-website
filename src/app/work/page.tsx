import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WorkPortfolioClient } from "@/components/work/WorkPortfolioClient";
import { Reveal } from "@/components/motion/Reveal";
import { getWhatsAppEnquiryUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Selected Work — The Work Archive",
  description:
    "Content made to capture attention. Creative built to make it count. Explore Mad Monkey Media's vertical reels and creative productions.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream min-h-screen">
      {/* Portfolio Header */}
      <section className="studio-dark-grid relative pt-10 pb-8 sm:pt-14 sm:pb-12 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream">
              <span
                className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_10px_#D8FF3E]"
                aria-hidden="true"
              />
              <span>THE WORK ARCHIVE</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tightest text-studio-cream leading-[1.03]">
              Selected Work
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-studio-muted leading-relaxed">
              &ldquo;Content made to capture attention. Creative built to make
              it count.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portrait-First Filterable Video Archive */}
      <section
        aria-label="Selected Work Video Archive"
        className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-16 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <WorkPortfolioClient />
        </div>
      </section>

      {/* Compact Studio Closing CTA */}
      <section
        aria-labelledby="work-closing-cta-heading"
        className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-studio-cream/15 bg-studio-charcoalDeep p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>NEXT PRODUCTION</span>
                </div>

                <h2
                  id="work-closing-cta-heading"
                  className="mt-4 font-heading text-2xl sm:text-4xl font-bold tracking-tightest text-studio-cream leading-tight"
                >
                  Have a project in mind?
                </h2>

                <p className="mt-2 max-w-xl text-sm sm:text-base text-studio-muted leading-relaxed">
                  Tell us about your brand and let&apos;s plan your next content
                  shoot or social campaign.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-studio-lime px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream shadow-[0_0_25px_rgba(216,255,62,0.18)]"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-studio-cream/20 bg-studio-charcoal px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-all duration-200 hover:border-studio-lime hover:text-studio-lime"
                >
                  <MessageCircle
                    className="h-4 w-4 text-studio-lime"
                    aria-hidden="true"
                  />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { WorkPortfolioClient } from "@/components/work/WorkPortfolioClient";
import { Reveal } from "@/components/motion/Reveal";
import { Sparkles } from "lucide-react";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

export const metadata: Metadata = {
  title: "Selected Work — The 26-Reel Work Archive",
  description:
    "Content made to capture attention. Creative built to make it count. Explore Mad Monkey Media's 26 vertical reels and commercial productions.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. WARM CREAM WORK ARCHIVE HEADER */}
      <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
              <span>THE REEL VAULT &bull; 26 MASTERPIECES</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#191E1B] leading-tight">
              Selected{" "}
              <span className="text-[#B88D44]">work.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#68716B] leading-relaxed">
              &ldquo;Content made to capture attention. Creative built to make it count.&rdquo; Browse our verified archive of 9:16 vertical reels and commercial brand campaigns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. PORTFOLIO CLIENT (LIST & GRID VIEWS WITH ALL 26 REELS) */}
      <section
        aria-label="Selected Work Video Archive"
        className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 max-w-7xl mx-auto"
      >
        <WorkPortfolioClient />
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}

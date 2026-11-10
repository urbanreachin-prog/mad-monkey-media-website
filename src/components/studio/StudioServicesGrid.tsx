"use client";

import React from "react";
import Link from "next/link";
import {
  Film,
  Smartphone,
  Share2,
  TrendingUp,
  Compass,
  UserCheck,
  Code2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/data/services";

const serviceIcons: Record<string, { icon: React.ElementType; tag: string }> = {
  "content-production": { icon: Sparkles, tag: "STUDIO ASSET LIBRARY" },
  "reels-production": { icon: Smartphone, tag: "VERTICAL 9:16 RETENTION" },
  "social-media-management": { icon: Share2, tag: "GRID ARCHITECTURE" },
  "performance-marketing": { icon: TrendingUp, tag: "PAID MEDIA & UGC" },
  "brand-strategy": { icon: Compass, tag: "POSITIONING & PILLARS" },
  "personal-branding": { icon: UserCheck, tag: "FOUNDER AUTHORITY" },
  "website-development": { icon: Code2, tag: "DIGITAL INFRASTRUCTURE" },
  "video-production": { icon: Film, tag: "CINEMA COMMERCIALS" },
};

export function StudioServicesGrid() {
  const flagshipReels = services.find((s) => s.id === "reels-production") || services[1];
  const commercialFilm = services.find((s) => s.id === "video-production") || services[7] || services[0];
  const contentAsset = services.find((s) => s.id === "content-production") || services[0];
  const performanceAd = services.find((s) => s.id === "performance-marketing") || services[3];
  const personalBrand = services.find((s) => s.id === "personal-branding") || services[5];

  return (
    <section id="services" className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative">
      <div className="max-w-7xl mx-auto">
        {/* 1. ASYMMETRIC BROADSHEET HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE7DA]">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <span className="text-[#B88D44] font-bold">02 // OUR SERVICES [DISCIPLINE CATALOG]</span>
              </div>
              <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191E1B] leading-[1.08]">
                We don&apos;t offer bloated agency packages.{" "}
                <span className="font-serif italic font-normal text-[#B88D44] block sm:inline">
                  We engineer focused production systems.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <span className="font-mono text-xs text-[#8A948E] uppercase tracking-wider">
                08 SPECIALIZED MODULES &bull; GST CERTIFIED
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#191E1B] hover:bg-[#B88D44] text-white px-7 py-3.5 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Explore All 8 Modules</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF67]" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* 2. ASYMMETRIC EDITORIAL SPREAD */}
        <div className="mt-12 space-y-8">
          {/* A. FLAGSHIP HERO MODULE: REELS & VERTICAL PRODUCTION (Full Width Hero Feature) */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl border-2 border-[#191E1B] bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(25,30,27,0.06)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#B88D44]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#B88D44] text-white font-bold">
                      FLAGSHIP DISCIPLINE
                    </span>
                    <span className="text-[#8A948E]">
                      MODULE {flagshipReels.number} &bull; {serviceIcons[flagshipReels.id]?.tag || "VERTICAL REELS"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold text-[#191E1B] tracking-tight">
                    {flagshipReels.title}
                  </h3>

                  <p className="mt-4 text-base sm:text-lg text-[#68716B] leading-relaxed max-w-2xl font-sans">
                    {flagshipReels.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {flagshipReels.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#EDE7DA] px-3.5 py-1.5 text-xs font-mono text-[#191E1B]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B88D44]" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#EDE7DA] lg:pl-8">
                  <div className="font-mono text-xs text-[#8A948E] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-[#191E1B] font-bold">24-48H FIRST CUT SPRINT</span>
                    </div>
                    <div>&bull; UNLIMITED FRAME REVISIONS</div>
                    <div>&bull; 4K DCI &amp; 9:16 VERTICAL MASTERS</div>
                  </div>

                  <Link
                    href={`/services/${flagshipReels.id}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-md group-hover:scale-105"
                  >
                    <span>Inspect Module &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* B. ASYMMETRIC ROW 1: 7 Cols (Commercial Films) + 5 Cols (Motion & Assets) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Commercial Films (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-white p-8 sm:p-10 flex flex-col justify-between h-full shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all group">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-[#EDE7DA]">
                      <span className="text-[#B88D44] font-bold">MODULE {commercialFilm.number}</span>
                      <span className="text-[#8A948E]">{serviceIcons[commercialFilm.id]?.tag || "CINEMA"}</span>
                    </div>

                    <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-bold text-[#191E1B]">
                      {commercialFilm.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#68716B] leading-relaxed">
                      {commercialFilm.description}
                    </p>

                    <div className="mt-6 space-y-2 font-mono text-xs text-[#191E1B]">
                      {commercialFilm.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#B88D44]">&bull;</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8A948E]">COMMERCIAL STANDARD</span>
                    <Link
                      href={`/services/${commercialFilm.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-[#B88D44] hover:text-[#A37B35] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Content Assets (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-8 sm:p-10 flex flex-col justify-between h-full shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all group">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-[#EDE7DA]">
                      <span className="text-[#B88D44] font-bold">MODULE {contentAsset.number}</span>
                      <span className="text-[#8A948E]">{serviceIcons[contentAsset.id]?.tag || "ASSETS"}</span>
                    </div>

                    <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-bold text-[#191E1B]">
                      {contentAsset.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#68716B] leading-relaxed">
                      {contentAsset.shortDescription}
                    </p>

                    <div className="mt-6 space-y-2 font-mono text-xs text-[#191E1B]">
                      {contentAsset.deliverables.slice(0, 2).map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#B88D44]">&bull;</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8A948E]">ORIGINAL ASSET SYSTEM</span>
                    <Link
                      href={`/services/${contentAsset.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-[#B88D44] hover:text-[#A37B35] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* C. ASYMMETRIC ROW 2: 5 Cols (Performance Marketing) + 7 Cols (Founder Brand & Strategy) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Performance Marketing (5 cols) */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-8 sm:p-10 flex flex-col justify-between h-full shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all group">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-[#EDE7DA]">
                      <span className="text-[#B88D44] font-bold">MODULE {performanceAd.number}</span>
                      <span className="text-[#8A948E]">{serviceIcons[performanceAd.id]?.tag || "PAID MEDIA"}</span>
                    </div>

                    <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-bold text-[#191E1B]">
                      {performanceAd.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#68716B] leading-relaxed">
                      {performanceAd.shortDescription}
                    </p>

                    <div className="mt-6 space-y-2 font-mono text-xs text-[#191E1B]">
                      {performanceAd.deliverables.slice(0, 2).map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#B88D44]">&bull;</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8A948E]">CONVERSION ARCHITECTURE</span>
                    <Link
                      href={`/services/${performanceAd.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-[#B88D44] hover:text-[#A37B35] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Founder Authority & Personal Brand (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-white p-8 sm:p-10 flex flex-col justify-between h-full shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all group">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-[#EDE7DA]">
                      <span className="text-[#B88D44] font-bold">MODULE {personalBrand.number}</span>
                      <span className="text-[#8A948E]">{serviceIcons[personalBrand.id]?.tag || "FOUNDER BRAND"}</span>
                    </div>

                    <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-bold text-[#191E1B]">
                      {personalBrand.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#68716B] leading-relaxed">
                      {personalBrand.description}
                    </p>

                    <div className="mt-6 space-y-2 font-mono text-xs text-[#191E1B]">
                      {personalBrand.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-[#B88D44]">&bull;</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#8A948E]">FOUNDER AUTHORITY</span>
                    <Link
                      href={`/services/${personalBrand.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase text-[#B88D44] hover:text-[#A37B35] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

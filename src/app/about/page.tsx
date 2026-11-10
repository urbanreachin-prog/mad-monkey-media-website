import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Clapperboard,
  Share2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";
import { AboutHeroMetrics } from "@/components/about/AboutHeroMetrics";

export const metadata: Metadata = {
  title: "About Us — Creative Production Studio & Manifesto",
  description:
    "Mad Monkey Media is an independent creative video production studio built on craft, velocity, and high-retention visual storytelling.",
  alternates: {
    canonical: "/about",
  },
};

const approachStages = [
  {
    number: "01",
    tag: "DISCIPLINE 01 // POSITIONING",
    title: "Psychological Framing & Hook Architecture",
    headline: "Understand Brand Context & Viewer Drop-off Triggers",
    description:
      "Before cameras roll or timelines are assembled, we dissect your product, market positioning, and audience psychology—defining irresistible 2-second hooks, clear content pillars, and platform distribution formats.",
    icon: Compass,
  },
  {
    number: "02",
    tag: "DISCIPLINE 02 // DIRECTION",
    title: "Cinema-Grade Direction & Cadence Cutting",
    headline: "High-Retention Visual Rhythms & Color Science",
    description:
      "We translate strategic positioning into scroll-stopping vertical reels, commercial films, and brand narratives crafted with disciplined lighting, micro-zooms, kinetic typography, and custom Rec.709 color science.",
    icon: Clapperboard,
  },
  {
    number: "03",
    tag: "DISCIPLINE 03 // DEPLOYMENT",
    title: "Disciplined Publishing & Creative Scaling",
    headline: "Multi-Platform Asset Repurposing & Paid Variations",
    description:
      "Great films deserve disciplined deployment. We bundle vertical reels with custom high-CTR cover thumbnails, viral captions, and A/B hook variations engineered for organic reach and high-ROAS paid acquisition.",
    icon: Share2,
  },
];

const philosophyPoints = [
  {
    number: "01",
    title: "Craft Over Generic Templates",
    description:
      "Every brand possesses distinct textures, cadence, and stories. Whether filming fine jewellery macro details, automotive detailing bays, or corporate leadership stories, we build bespoke visual language rather than recycling generic agency presets.",
  },
  {
    number: "02",
    title: "Attention Is Strictly Engineered",
    description:
      "Viewer retention is never accidental. The first 1.8 seconds must generate irresistible pattern interrupts, the audio track must provide physical weight, and the cut cadence must eliminate dead air.",
  },
  {
    number: "03",
    title: "Velocity Without Compromise",
    description:
      "Digital culture moves rapidly. Our agile 24-48h first-cut delivery sprint ensures your brand leads cultural conversations and product momentum rather than lagging weeks behind.",
  },
  {
    number: "04",
    title: "Complete Radical Transparency",
    description:
      "Zero account coordinator telephone games, zero hidden hourly fees, and 100% tax-compliant GST invoicing. You collaborate directly with senior creative directors inside your private WhatsApp/Slack channel.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. EDITORIAL ABOUT HERO MASTHEAD */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Top Telemetry Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 sm:mb-12 border-b border-[#EDE7DA] text-[11px] font-mono text-[#68716B]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#B88D44] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>STUDIO MANIFESTO // ABOUT US</span>
              </span>
              <span className="text-[#EDE7DA]">&bull;</span>
              <span>INDEPENDENT PRODUCTION STUDIO</span>
            </div>
            <div className="flex items-center gap-4">
              <span>EST. NEW DELHI</span>
              <span className="text-[#EDE7DA]">&bull;</span>
              <span className="text-[#B88D44] font-bold">GST REGISTERED ENTITY</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 cols): Editorial Narrative */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                  <span>CRAFT &bull; RETENTION &bull; VELOCITY</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#191E1B] leading-[1.05]">
                  We believe craft{" "}
                  <span className="font-serif italic font-normal text-[#B88D44] block sm:inline">
                    beats noise.
                  </span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-[#68716B] leading-relaxed max-w-xl font-sans">
                  Mad Monkey Media is an independent creative video production studio. We exist to help ambitious brands move past repetitive agency templates and engineer cinematic visual content that commands attention, builds authority, and accelerates enterprise growth.
                </p>
              </Reveal>

              {/* Four Studio Hero Statistics with Motion Graphics */}
              <Reveal delay={0.1}>
                <AboutHeroMetrics />
              </Reveal>
            </div>

            {/* Right Column (5 cols): Studio Manifesto Card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border-2 border-[#191E1B] bg-[#111513] text-[#EDE7DA] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-[#D4AF67]">
                    <span>STUDIO PRINCIPLE</span>
                    <span>MAD MONKEY MEDIA</span>
                  </div>

                  <p className="mt-6 font-serif italic text-xl sm:text-2xl text-white leading-relaxed">
                    &ldquo;In a world saturated with AI fluff and cookie-cutter social media posts, authentic cinematography and obsessive rhythm cutting are the ultimate unfair advantage.&rdquo;
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8A948E]">
                    <span>NEW DELHI &bull; WORLDWIDE</span>
                    <span className="text-[#D4AF67] font-bold">DIRECTOR STATEMENT</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE DISCIPLINES OF OUR METHOD */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <span className="text-[#B88D44] font-bold">THE STUDIO METHOD</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B]">
                How we architect high-retention video.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approachStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.number} delay={idx * 0.08}>
                  <div className="rounded-3xl border border-[#EDE7DA] bg-white p-8 sm:p-9 flex flex-col justify-between h-full shadow-xs hover:border-[#B88D44]/50 hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#EDE7DA] font-mono text-xs">
                        <span className="text-[#B88D44] font-bold tracking-wider">
                          {stage.tag}
                        </span>
                        <span className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#EDE7DA] text-[#B88D44] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </span>
                      </div>

                      <h3 className="mt-6 font-heading text-2xl font-bold text-[#191E1B]">
                        {stage.title}
                      </h3>

                      <p className="mt-2 text-xs font-mono font-semibold text-[#B88D44] uppercase tracking-wider">
                        {stage.headline}
                      </p>

                      <p className="mt-4 text-sm text-[#68716B] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#EDE7DA] font-mono text-[10px] text-[#8A948E] uppercase tracking-widest">
                      DISCIPLINE 0{idx + 1} &bull; STUDIO PIPELINE
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC PHILOSOPHY SPREAD */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-[#FAF7F2] px-4 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                  <span className="text-[#B88D44] font-bold">ETHOS &amp; STANDARDS</span>
                </div>
                <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B] leading-tight">
                  Our creative standard.
                </h2>
                <p className="mt-4 text-base text-[#68716B] leading-relaxed font-sans">
                  We don&apos;t chase vanity metrics or rely on automated assembly lines. Every cut, hook, and sound effect is placed with intention to elevate your brand&apos;s perceived authority.
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] text-white px-7 py-3.5 text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#A37B35] transition-all shadow-md"
                  >
                    <span>Initiate Project With Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {philosophyPoints.map((point, idx) => (
                <Reveal key={point.number} delay={idx * 0.06}>
                  <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-7 sm:p-8 hover:border-[#B88D44]/50 transition-all shadow-xs">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-[#B88D44]">
                        {point.number}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-[#191E1B]">
                        {point.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-[#68716B] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <StudioConversionCTA />
    </div>
  );
}

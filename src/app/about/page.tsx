import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Clapperboard, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ProcessSystemGraphic } from "@/components/about/ProcessSystemGraphic";
import { GlassCTA } from "@/components/glass/GlassCTA";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About — Our Philosophy & Creative Approach",
  description:
    "Mad Monkey Media is a creative production and digital marketing agency built around one simple idea: creative that captures attention and content that communicates value.",
  alternates: {
    canonical: "/about",
  },
};

const approachStages = [
  {
    number: "01",
    label: "STRATEGY",
    title: "Understand the Brand, Audience & Message",
    description:
      "Before cameras roll, we study your product, showroom environment, and audience psychology—defining clear positioning, content pillars, and platform hooks.",
    icon: Compass,
  },
  {
    number: "02",
    label: "CREATION",
    title: "Direction, Production & Precision Editing",
    description:
      "We translate strategy into scroll-stopping vertical reels, commercial films, and visual design systems crafted with disciplined lighting, framing, and pacing.",
    icon: Clapperboard,
  },
  {
    number: "03",
    label: "DISTRIBUTION",
    title: "Consistent Publishing & Targeted Reach",
    description:
      "Great content needs structured deployment. We pair studio production with cohesive social calendars and performance marketing so your brand stays active and visible.",
    icon: Share2,
  },
];

const philosophyPoints = [
  {
    number: "01",
    title: "Craft Over Templates",
    description:
      "Every brand has its own texture, pace, and story. Whether filming fine jewellery, an automotive detailing bay, or a manufacturing plant floor, we build visual language around the subject rather than recycling generic agency templates.",
  },
  {
    number: "02",
    title: "Clarity Before Camera",
    description:
      "Strong production starts with understanding why the piece exists and who needs to see it. We align creative direction with the actual questions, hesitations, and aspirations of your audience.",
  },
  {
    number: "03",
    title: "Platform-Native Execution",
    description:
      "Cinema-grade production only works online when edited for how people actually watch. We combine high-production visuals with disciplined hooks, pacing, and social systems built for modern digital channels.",
  },
  {
    number: "04",
    title: "Honest Partnership",
    description:
      "We do not make inflated promises or hide behind jargon. We focus on delivering consistent, unmistakable creative quality and clear communication at every stage of production.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream min-h-screen">
      {/* 1. ABOUT HERO & PROCESS VISUAL */}
      <section className="studio-dark-grid relative pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Studio Introduction */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream">
                  <span
                    className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_10px_#D8FF3E]"
                    aria-hidden="true"
                  />
                  <span>ABOUT MAD MONKEY MEDIA</span>
                </div>

                <h1 className="mt-6 font-heading text-4xl sm:text-6xl lg:text-[4.15rem] font-bold tracking-tightest text-studio-cream leading-[1.03]">
                  We&apos;re a creative team built around{" "}
                  <span className="text-studio-lime">one simple idea.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg sm:text-xl font-medium text-studio-cream/95 leading-relaxed">
                  {siteConfig.brandPromise}
                </p>

                <p className="mt-4 max-w-2xl text-base sm:text-lg text-studio-muted leading-relaxed">
                  Most businesses don&apos;t struggle with the quality of what
                  they sell—they struggle with how their brand is perceived
                  online. We bridge the gap between the real-world quality of
                  your business and how people experience it on screen.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 rounded-full bg-studio-lime px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream"
                  >
                    <span>Explore Selected Work</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
                  >
                    <span>Our Services</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Custom Animated Studio Process Graphic */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <ProcessSystemGraphic />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR APPROACH: STRATEGY -> CREATION -> DISTRIBUTION */}
      <section
        aria-labelledby="approach-stages-heading"
        className="studio-ink-grid bg-studio-charcoalDeep py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-studio-cream/12">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-2 w-2 rotate-45 bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>OUR APPROACH</span>
                </span>
                <h2
                  id="approach-stages-heading"
                  className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tightest text-studio-cream leading-[1.06]"
                >
                  Strategy &rarr; Creation &rarr; Distribution.
                </h2>
              </div>
              <p className="max-w-md text-sm sm:text-base text-studio-muted leading-relaxed">
                A unified production and digital system so your content looks
                intentional and reaches the right audience.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {approachStages.map((stage, idx) => {
              const IconComponent = stage.icon;
              return (
                <Reveal key={stage.number} delay={idx * 0.08}>
                  <div className="group h-full rounded-2xl border border-studio-cream/12 bg-studio-charcoal p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-studio-lime/50">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-studio-lime">
                          <span>{stage.number}</span>
                          <span>&middot;</span>
                          <span>{stage.label}</span>
                        </span>

                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-studio-cream/15 bg-studio-charcoalDeep text-studio-cream group-hover:border-studio-lime group-hover:bg-studio-lime group-hover:text-studio-ink transition-colors">
                          <IconComponent
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                      </div>

                      <h3 className="mt-6 font-heading text-xl sm:text-2xl font-bold tracking-tight text-studio-cream group-hover:text-studio-lime transition-colors">
                        {stage.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-studio-muted leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-8 h-0.5 w-12 bg-studio-cream/20 transition-all duration-300 group-hover:w-full group-hover:bg-studio-lime" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK WITH BRANDS (4 STUDIO PRINCIPLES) */}
      <section
        aria-labelledby="philosophy-heading"
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                <span
                  className="h-2 w-2 rounded-full bg-studio-lime"
                  aria-hidden="true"
                />
                <span>HOW WE WORK WITH BRANDS</span>
              </span>
              <h2
                id="philosophy-heading"
                className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tightest text-studio-cream leading-[1.08]"
              >
                Where Strategy, Production, and Digital Presence Meet.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {philosophyPoints.map((point, index) => (
              <Reveal key={point.number} delay={(index % 2) * 0.08}>
                <div className="group h-full rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-7 sm:p-9 transition-colors duration-200 hover:border-studio-lime/45">
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                    {point.number}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-studio-cream group-hover:text-studio-lime transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-studio-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTENT QUALITY & BRAND COMMUNICATION + TARGET INDUSTRIES */}
      <section
        aria-labelledby="industries-heading"
        className="studio-ink-grid bg-studio-charcoalDeep py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content Quality & Brand Communication */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-studio-cream/15 bg-studio-charcoal p-7 sm:p-8">
                  <div className="flex items-center gap-3.5 border-b border-studio-cream/10 pb-5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-studio-cream border border-studio-cream/25 p-1">
                      <Image
                        src="/images/branding/logo.png"
                        alt="Mad Monkey Media brand mark"
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-studio-cream">
                        {siteConfig.businessName}
                      </p>
                      <p className="text-xs text-studio-lime font-mono">
                        STUDIO STANDARD
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold text-studio-cream leading-snug">
                    Why Visual Quality Shapes Brand Trust
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-studio-muted leading-relaxed">
                    In high-trust categories, customers judge your business by
                    how clearly and confidently you present your craft. From
                    showrooms and detailing bays to architectural developments
                    and industrial floors, our focus stays on lighting,
                    composition, and consistent brand communication.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Industries We Partner With */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-2 w-2 rotate-45 bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>SECTOR FOCUS</span>
                </span>
                <h2
                  id="industries-heading"
                  className="mt-3 font-heading text-2xl sm:text-4xl font-bold tracking-tight text-studio-cream"
                >
                  Industries We Partner With
                </h2>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-studio-muted">
                  We collaborate with businesses and founders where visual
                  quality and clear positioning directly shape customer
                  perception.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {siteConfig.targetIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-3 rounded-2xl border border-studio-cream/12 bg-studio-charcoal px-5 py-4 text-sm sm:text-base font-medium text-studio-cream transition-colors hover:border-studio-lime/45"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rotate-45 bg-studio-lime"
                        aria-hidden="true"
                      />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <GlassCTA
        headline="Have a brand worth talking about?"
        supportingText="Let's create something worth remembering."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
      />
    </div>
  );
}

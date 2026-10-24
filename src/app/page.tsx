import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Mail,
  Sparkles,
  Film,
  Smartphone,
  Share2,
  TrendingUp,
  Compass,
  UserCheck,
  Code2,
  Clapperboard,
} from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";
import { HeroMotionGraphic } from "@/components/home/HeroMotionGraphic";
import { CapabilitiesMarquee } from "@/components/ui/CapabilitiesMarquee";
import { Reveal } from "@/components/motion/Reveal";

const approachPrinciples = [
  {
    number: "01",
    label: "THINK",
    description: "Understand the brand, audience, and message.",
    detail:
      "Positioning, audience hooks, and platform context defined before a single frame is produced.",
    diagram: "target",
  },
  {
    number: "02",
    label: "CREATE",
    description: "Turn ideas into compelling content and creative assets.",
    detail:
      "Intentional direction, vertical reels, commercial video, and design built to hold attention.",
    diagram: "frame",
  },
  {
    number: "03",
    label: "GROW",
    description:
      "Distribute content strategically and improve based on results.",
    detail:
      "Consistent social publishing, paid Meta campaigns, and iterative creative refinement.",
    diagram: "trajectory",
  },
] as const;

const homeServices = [
  {
    number: "01",
    id: "content-production",
    title: "Content Production",
    description:
      "End-to-end visual content systems—from concept and scripting to studio direction and post-production.",
    tag: "Campaigns & Grids",
    icon: Clapperboard,
  },
  {
    number: "02",
    id: "reels-production",
    title: "Reels Production",
    description:
      "High-retention 9:16 vertical storytelling engineered for organic discovery, saves, and shares.",
    tag: "Short-Form Vertical",
    icon: Smartphone,
  },
  {
    number: "03",
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Cohesive grid architecture, editorial calendars, and consistent publishing that keep your brand active.",
    tag: "Channel Presence",
    icon: Share2,
  },
  {
    number: "04",
    id: "performance-marketing",
    title: "Performance Marketing / Meta Ads",
    description:
      "Targeted paid social campaigns and ad creatives structured to generate qualified client enquiries.",
    tag: "Paid Acquisition",
    icon: TrendingUp,
  },
  {
    number: "05",
    id: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Clear visual positioning, messaging frameworks, and creative direction that set your business apart.",
    tag: "Positioning",
    icon: Compass,
  },
  {
    number: "06",
    id: "personal-branding",
    title: "Personal Branding",
    description:
      "Executive and founder content systems that build authority, trust, and industry recognition.",
    tag: "Founder Voice",
    icon: UserCheck,
  },
  {
    number: "07",
    id: "website-development",
    title: "Website Development",
    description:
      "Fast, expressive, conversion-focused websites designed to turn visitors into real conversations.",
    tag: "Web Experiences",
    icon: Code2,
  },
  {
    number: "08",
    id: "video-production",
    title: "Video Production",
    description:
      "Cinema-grade commercial films, showroom showcases, and industrial brand documentaries.",
    tag: "Commercial Films",
    icon: Film,
  },
] as const;

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-studio-charcoal text-studio-cream">
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="hero-heading"
        className="studio-dark-grid relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Expressive Typography & CTAs */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream">
                  <span
                    className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_10px_#D8FF3E]"
                    aria-hidden="true"
                  />
                  <span>CREATIVE PRODUCTION &middot; CONTENT &middot; DIGITAL GROWTH</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1
                  id="hero-heading"
                  className="mt-6 font-heading text-4xl sm:text-6xl lg:text-[4.35rem] font-bold tracking-tightest text-studio-cream leading-[1.02] uppercase"
                >
                  <span className="block">WE MAKE CONTENT</span>
                  <span className="relative mt-1 sm:mt-2 inline-block text-studio-lime">
                    IMPOSSIBLE TO IGNORE.
                    {/* Precision SVG Graphic Accent Underline */}
                    <svg
                      viewBox="0 0 420 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1.5 h-2.5 sm:h-3 w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 10.5C118 3.5 284 2.5 412 8.5"
                        stroke="#D8FF3E"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="415" cy="8.5" r="3" fill="#FF6B35" />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-studio-muted leading-relaxed">
                  From scroll-stopping content to stronger digital presence, we
                  help brands get noticed, remembered, and chosen.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-studio-lime px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream shadow-[0_0_30px_rgba(216,255,62,0.2)]"
                  >
                    <span>Explore Our Services</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep/70 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-all duration-200 hover:border-studio-lime hover:text-studio-lime"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight
                      className="h-4 w-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>

              {/* Compact Studio Discipline Markers */}
              <Reveal delay={0.24}>
                <div className="mt-10 pt-6 border-t border-studio-cream/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-studio-muted">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-studio-lime" />
                    <span>08 Core Capabilities</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-studio-orange" />
                    <span>Bespoke Production</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-studio-lime" />
                    <span>Platform-Native Strategy</span>
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Custom Designed Motion Graphic Composition */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <HeroMotionGraphic />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT MOVING SERVICES STRIP */}
      <CapabilitiesMarquee variant="editorial" />

      {/* 3. CREATIVE APPROACH SECTION (Dark Technical Layer) */}
      <section
        aria-labelledby="creative-approach-heading"
        className="studio-ink-grid bg-studio-charcoalDeep text-studio-cream py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-studio-cream/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-14 border-b border-studio-cream/12">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-studio-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-studio-lime" />
                  <span>CREATIVE APPROACH</span>
                </div>
                <h2
                  id="creative-approach-heading"
                  className="mt-5 font-heading text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tightest text-studio-cream leading-[1.05] uppercase"
                >
                  GOOD CONTENT GETS ATTENTION.
                  <span className="block mt-1 text-studio-lime">
                    GOOD STRATEGY GIVES IT DIRECTION.
                  </span>
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                  Effective content combines sharp creative thinking, disciplined
                  production, and consistent distribution—so every piece works
                  toward building a recognizable brand.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Bold Typographic Principles Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-studio-cream/12 border-b border-studio-cream/12">
            {approachPrinciples.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.08}>
                <div className="group relative py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between h-full">
                  {/* Top Row: Number + Animated Geometric SVG Detail */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-studio-muted">
                        STEP
                      </span>
                      <span className="inline-flex items-center justify-center rounded border border-studio-lime/35 bg-studio-charcoal px-2.5 py-0.5 font-heading text-sm font-bold text-studio-lime">
                        {item.number}
                      </span>
                    </div>

                    {/* Small Animated Graphic Accent Per Principle */}
                    <div
                      className="h-11 w-11 rounded-lg border border-studio-cream/15 bg-studio-charcoal flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-studio-lime/50"
                      aria-hidden="true"
                    >
                      {item.diagram === "target" && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          className="h-6 w-6 text-studio-cream group-hover:text-studio-lime transition-colors"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <circle cx="16" cy="16" r="2" fill="#FF6B35" />
                        </svg>
                      )}
                      {item.diagram === "frame" && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          className="h-6 w-6 text-studio-cream group-hover:text-studio-lime transition-colors"
                        >
                          <rect
                            x="6"
                            y="5"
                            width="20"
                            height="22"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M14 12.5L20 16L14 19.5V12.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      {item.diagram === "trajectory" && (
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          className="h-6 w-6 text-studio-cream group-hover:text-studio-lime transition-colors"
                        >
                          <path
                            d="M5 24C11 22 15 16 26 8"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                          />
                          <path
                            d="M20 8H26V14"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="9" cy="22" r="2" fill="#FF6B35" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Bold Principle Title & Concise Copy */}
                  <div className="mt-8">
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-studio-cream uppercase flex items-center gap-3">
                      <span className="text-studio-lime">{item.number}</span>
                      <span className="text-studio-cream/30">&mdash;</span>
                      <span>{item.label}</span>
                    </h3>

                    <p className="mt-3 font-heading text-lg font-bold text-studio-cream leading-snug">
                      {item.description}
                    </p>

                    <p className="mt-2 text-sm text-studio-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Bottom Interactive Progress Hairline */}
                  <div className="mt-8 h-0.5 w-12 bg-studio-cream/20 transition-all duration-300 group-hover:w-full group-hover:bg-studio-lime" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (Deep Charcoal Editorial Matrix) */}
      <section
        id="services"
        aria-labelledby="services-section-heading"
        className="studio-dark-grid bg-studio-charcoal text-studio-cream py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-studio-cream/12">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-2 w-2 rotate-45 bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>OUR CAPABILITIES</span>
                </div>
                <h2
                  id="services-section-heading"
                  className="mt-3 font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tightest text-studio-cream leading-[1.05]"
                >
                  What We Bring To The Table.
                </h2>
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-studio-lime/40 bg-studio-lime/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-studio-lime transition-all duration-200 hover:bg-studio-lime hover:text-studio-ink"
              >
                <span>View Full Services Scope</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          {/* Compact 2-Column Editorial Service Matrix with Thin Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-studio-cream/12 divide-y divide-studio-cream/12 md:divide-y-0">
            {homeServices.map((service, index) => {
              const IconComponent = service.icon;
              const isRightCol = index % 2 === 1;

              return (
                <Reveal key={service.id} delay={(index % 2) * 0.05}>
                  <Link
                    href={`/services#${service.id}`}
                    className={`group relative flex flex-col justify-between h-full p-6 sm:p-8 transition-colors duration-200 hover:bg-studio-charcoalSurface/70 border-studio-cream/12 ${
                      index >= 2 ? "md:border-t" : ""
                    } ${isRightCol ? "md:border-l" : ""}`}
                  >
                    {/* Left Hover Lime Accent Bar */}
                    <span
                      className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-studio-lime opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                            {service.number}
                          </span>
                          <span className="rounded-full border border-studio-cream/15 bg-studio-charcoalDeep px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-studio-muted">
                            {service.tag}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-studio-cream/12 bg-studio-charcoalDeep text-studio-cream transition-colors duration-200 group-hover:border-studio-lime group-hover:bg-studio-lime group-hover:text-studio-ink">
                            <IconComponent
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </span>
                          <ArrowUpRight
                            className="h-4 w-4 text-studio-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-studio-lime"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <h3 className="mt-5 font-heading text-xl sm:text-2xl font-bold tracking-tight text-studio-cream group-hover:text-studio-lime transition-colors">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm text-studio-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SMALL CREATIVE STATEMENT SECTION (Dark Typographic Manifesto) */}
      <section
        aria-labelledby="creative-statement-heading"
        className="studio-ink-grid bg-studio-charcoalDeep text-studio-cream py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-studio-cream/10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-studio-muted">
                  <Sparkles
                    className="h-3.5 w-3.5 text-studio-orange"
                    aria-hidden="true"
                  />
                  <span>STUDIO PHILOSOPHY</span>
                </div>

                <h2
                  id="creative-statement-heading"
                  className="mt-4 font-heading text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tightest text-studio-cream leading-[1.02] uppercase"
                >
                  <span className="block">LESS NOISE.</span>
                  <span className="block">MORE MEANING.</span>
                  <span className="inline-block bg-studio-lime text-studio-ink px-3 py-0.5 mt-1.5">
                    BETTER CONTENT.
                  </span>
                </h2>
              </Reveal>
            </div>

            {/* Right Animated Graphic Signal Emblem & Concise Note */}
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-studio-cream/15 bg-studio-charcoal p-6 sm:p-7 text-studio-cream shadow-xl">
                  <div className="flex items-center justify-between border-b border-studio-cream/10 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-studio-muted">
                    <span>SIGNAL OVER NOISE</span>
                    <span className="text-studio-lime">STUDIO STANDARD</span>
                  </div>

                  {/* Animated Signal SVG Graphic */}
                  <svg
                    viewBox="0 0 260 64"
                    fill="none"
                    className="my-5 h-14 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M 4 32 H 48 L 62 12 L 78 52 L 96 8 L 114 56 L 130 20 L 146 42 L 160 32 H 256"
                      stroke="#D8FF3E"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="96" cy="8" r="3.5" fill="#FF6B35" />
                    <circle cx="252" cy="32" r="3.5" fill="#D8FF3E" />
                  </svg>

                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    We build visual identity and content systems for brands that
                    want intentional creative craft rather than generic templates.
                  </p>

                  <div className="mt-5 pt-4 border-t border-studio-cream/10 flex items-center justify-between">
                    <Link
                      href="/work"
                      className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-studio-lime hover:text-studio-cream transition-colors"
                    >
                      <span>Browse Portfolio Archive</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section
        aria-labelledby="final-cta-heading"
        className="studio-dark-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-studio-lime/30 bg-studio-charcoalDeep p-8 sm:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
              {/* Subtle Corner Geometric Vector Composition */}
              <svg
                viewBox="0 0 320 320"
                fill="none"
                className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 opacity-25 sm:opacity-40"
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
                  strokeOpacity="0.3"
                />
                <path
                  d="M 60 260 L 245 75 M 185 75 H 245 V 135"
                  stroke="#D8FF3E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/35 bg-studio-lime/10 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-studio-lime">
                  <span
                    className="h-2 w-2 rounded-full bg-studio-lime"
                    aria-hidden="true"
                  />
                  <span>START A CONVERSATION</span>
                </div>

                <h2
                  id="final-cta-heading"
                  className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-studio-cream leading-[1.04] uppercase"
                >
                  GOT SOMETHING{" "}
                  <span className="text-studio-lime">WORTH BUILDING?</span>
                </h2>

                <p className="mt-4 max-w-xl text-base sm:text-xl text-studio-muted leading-relaxed">
                  Let&apos;s turn your next idea into something people remember.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-studio-lime px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-all duration-200 hover:bg-studio-cream"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-studio-cream/20 bg-studio-charcoal px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-all duration-200 hover:border-studio-lime hover:text-studio-lime"
                  >
                    <MessageCircle
                      className="h-4 w-4 text-studio-lime"
                      aria-hidden="true"
                    />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Direct Contact Metadata Links */}
                <div className="mt-10 pt-6 border-t border-studio-cream/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-studio-muted">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-studio-lime transition-colors"
                  >
                    <MessageCircle
                      className="h-4 w-4 text-studio-lime"
                      aria-hidden="true"
                    />
                    <span>WhatsApp: {siteConfig.whatsappNumber}</span>
                  </a>

                  <a
                    href={siteConfig.mailtoUrl}
                    className="inline-flex items-center gap-2 hover:text-studio-lime transition-colors"
                  >
                    <Mail
                      className="h-4 w-4 text-studio-lime"
                      aria-hidden="true"
                    />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

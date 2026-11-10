import React from "react";
import type { Metadata } from "next";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Film,
  Zap,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

export const metadata: Metadata = {
  title: "Careers — Join the Mad Monkey Creative Squad",
  description:
    "Explore career opportunities at Mad Monkey Media. We are hiring visionary video editors, motion designers, and content producers.",
  alternates: {
    canonical: "/careers",
  },
};

const openRoles = [
  {
    id: "senior-video-editor",
    title: "Senior Video Editor (Short-Form & Commercial)",
    department: "POST-PRODUCTION",
    type: "Full-Time // Remote or On-Site",
    experience: "3+ Years",
    description:
      "We are looking for a master of rhythm, sound design, and pacing. You will lead edits for high-retention 9:16 vertical reels and widescreen commercial brand films, ensuring every cut hits with musical precision.",
    requirements: [
      "Mastery of DaVinci Resolve Studio & Adobe Premiere Pro",
      "Demonstrated portfolio of high-retention short-form reels (>1M views reach)",
      "Deep understanding of custom Foley, sound design, and impact risers",
      "Disciplined time management with ability to execute 24-48h sprint turnarounds",
    ],
  },
  {
    id: "motion-graphics-designer",
    title: "Motion Graphics & 3D Typography Artist",
    department: "VISUAL EFFECTS",
    type: "Full-Time // Remote",
    experience: "2+ Years",
    description:
      "Design kinetic subtitles, 3D tracked object graphics, futuristic HUD overlays, and generative visual elements that elevate commercial and vertical videos into high-art productions.",
    requirements: [
      "High proficiency in Adobe After Effects and Blender / Cinema 4D",
      "Experience with 3D camera tracking, rotoscoping, and particle dynamics",
      "Strong typographic sensibility with bold, modern layout discipline",
      "Obsessive attention to detail in easing curves and micro-animations",
    ],
  },
  {
    id: "social-media-strategist",
    title: "Social Media & Growth Strategist",
    department: "GROWTH & STRATEGY",
    type: "Full-Time // Hybrid",
    experience: "2+ Years",
    description:
      "Develop hook architectures, analyze competitor whitespace, curate 9-grid social architectures, and manage publishing cadences that turn views into real client inbound enquiries.",
    requirements: [
      "Proven track record of scaling Instagram profiles and YouTube channels",
      "Strong copywriting skills for hooks, captions, and script treatments",
      "Familiarity with Meta Ads Manager and paid creative testing",
      "Data-driven approach to retention graphs and engagement analytics",
    ],
  },
  {
    id: "creative-producer",
    title: "Creative Producer & Shoot Coordinator",
    department: "PRODUCTION",
    type: "Full-Time // On-Location",
    experience: "3+ Years",
    description:
      "Direct commercial filming shoots, coordinate camera rigs (Sony FX series, prime glass, cinema lighting), organize shoot schedules, and manage seamless asset handoff to post-production.",
    requirements: [
      "Experience on commercial video production sets and lighting setups",
      "Exceptional communication skills with founders, directors, and crew",
      "Ability to create detailed storyboards, call sheets, and shot lists",
      "Problem-solving mindset under live production conditions",
    ],
  },
];

const studioPerks = [
  {
    title: "Cinema-Grade Tooling",
    desc: "Work with top-tier gear, DaVinci Resolve Studio, and high-speed cloud infrastructure.",
    icon: Film,
  },
  {
    title: "Remote-First Flexibility",
    desc: "Autonomous workflow with deep respect for creative flow and focused production sprints.",
    icon: Clock,
  },
  {
    title: "High-Visibility Portfolio",
    desc: "Your cuts and motion graphics will be viewed by millions across top Indian and global brands.",
    icon: Zap,
  },
  {
    title: "Competitive Compensation",
    desc: "Transparent salary, performance incentives, and rapid career progression.",
    icon: CheckCircle2,
  },
];

export default function CareersPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. CAREERS HERO */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span>JOIN THE CREATIVE SQUAD &bull; CAREERS</span>
              </div>

              <h1 className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#191E1B] leading-tight">
                Build content that{" "}
                <span className="text-[#B88D44]">shapes the feed.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#68716B] leading-relaxed max-w-2xl font-sans">
                We are looking for obsessively detail-oriented video editors, 3D motion designers, and creative strategists who want to make work that stands out, not blends in.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. STUDIO PERKS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <Reveal key={perk.title} delay={idx * 0.05}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-white p-6 shadow-xs hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF7F2] text-[#B88D44] border border-[#EDE7DA] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#191E1B]">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#68716B] leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 3. OPEN POSITIONS LIST */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Reveal>
              <span className="font-mono text-xs text-[#B88D44] font-bold uppercase tracking-widest block">
                ACTIVE ROSTER
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B]">
                Open creative positions.
              </h2>
              <p className="mt-4 text-base text-[#68716B]">
                Review available roles below. To apply, send your showreel or portfolio link directly to our production inbox.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, idx) => (
              <Reveal key={role.id} delay={idx * 0.06}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-8 sm:p-10 hover:border-[#B88D44]/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EDE7DA]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-3">
                        <span className="text-[#B88D44] font-bold tracking-wider">
                          {role.department}
                        </span>
                        <span className="text-[#8A948E]">&bull;</span>
                        <span className="text-[#68716B]">{role.type}</span>
                        <span className="text-[#8A948E]">&bull;</span>
                        <span className="text-[#191E1B] font-semibold">Exp: {role.experience}</span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#191E1B]">
                        {role.title}
                      </h3>
                    </div>

                    <a
                      href={`mailto:${siteConfig.email}?subject=Job Application: ${encodeURIComponent(role.title)}&body=Hi Mad Monkey Media Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(role.title)} position.%0D%0A%0D%0AMy Portfolio / Showreel link: %0D%0AMy Resume / LinkedIn: %0D%0A%0D%0AThank you!`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shrink-0"
                    >
                      <span>Apply For This Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="mt-6 text-sm text-[#191E1B] leading-relaxed">
                    {role.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#EDE7DA]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#B88D44] block mb-3">
                      KEY REQUIREMENTS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs text-[#68716B]">
                      {role.requirements.map((req) => (
                        <div key={req} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B88D44] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}

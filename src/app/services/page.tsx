import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Film,
  Smartphone,
  Share2,
  TrendingUp,
  Compass,
  UserCheck,
  Code2,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppEnquiryUrl } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { StudioConversionCTA } from "@/components/studio/StudioConversionCTA";

export const metadata: Metadata = {
  title: "Our Services — Full-Stack Creative Production & Digital Growth",
  description:
    "Explore Mad Monkey Media's 8 core services: Content Production, Reels Production, Social Media Management, Performance Marketing, Brand Strategy, Personal Branding, Website Development, and Commercial Video Production.",
  alternates: {
    canonical: "/services",
  },
};

const serviceDesignMap: Record<
  string,
  { icon: React.ElementType; gradient: string; glowShadow: string; haloBg: string }
> = {
  "content-production": {
    icon: Sparkles,
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    glowShadow: "shadow-[0_6px_24px_rgba(139,92,246,0.4)]",
    haloBg: "bg-[#8B5CF6]/30",
  },
  "reels-production": {
    icon: Smartphone,
    gradient: "from-[#FF5D8F] to-[#E02462]",
    glowShadow: "shadow-[0_6px_24px_rgba(255,93,143,0.4)]",
    haloBg: "bg-[#FF5D8F]/30",
  },
  "social-media-management": {
    icon: Share2,
    gradient: "from-[#10B981] to-[#059669]",
    glowShadow: "shadow-[0_6px_24px_rgba(16,185,129,0.4)]",
    haloBg: "bg-[#10B981]/30",
  },
  "performance-marketing": {
    icon: TrendingUp,
    gradient: "from-[#F59E0B] to-[#D97706]",
    glowShadow: "shadow-[0_6px_24px_rgba(245,158,11,0.4)]",
    haloBg: "bg-[#F59E0B]/30",
  },
  "brand-strategy": {
    icon: Compass,
    gradient: "from-[#06B6D4] to-[#0284C7]",
    glowShadow: "shadow-[0_6px_24px_rgba(6,182,212,0.4)]",
    haloBg: "bg-[#06B6D4]/30",
  },
  "personal-branding": {
    icon: UserCheck,
    gradient: "from-[#EC4899] to-[#BE185D]",
    glowShadow: "shadow-[0_6px_24px_rgba(236,72,153,0.4)]",
    haloBg: "bg-[#EC4899]/30",
  },
  "website-development": {
    icon: Code2,
    gradient: "from-[#6366F1] to-[#4338CA]",
    glowShadow: "shadow-[0_6px_24px_rgba(99,102,241,0.4)]",
    haloBg: "bg-[#6366F1]/30",
  },
  "video-production": {
    icon: Film,
    gradient: "from-[#FF4B4B] to-[#D61818]",
    glowShadow: "shadow-[0_6px_24px_rgba(255,75,75,0.4)]",
    haloBg: "bg-[#FF4B4B]/30",
  },
};

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. SERVICES EDITORIAL HEADER */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span>OUR SERVICES &bull; 08 MODULES</span>
              </div>

              <h1 className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#191E1B] leading-tight">
                Content that commands{" "}
                <span className="text-[#B88D44]">attention.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-[#68716B] leading-relaxed max-w-2xl font-sans">
                From high-retention 9:16 vertical reels to cinema-grade commercial films, we craft visual systems engineered to elevate perceived value and scale client acquisition.
              </p>
            </Reveal>

            {/* Jump Navigation */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-2 font-mono text-xs">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="px-3.5 py-1.5 rounded-full border border-[#EDE7DA] bg-white text-[#68716B] hover:text-[#B88D44] hover:border-[#B88D44]/50 transition-colors shadow-xs"
                  >
                    {s.number}. {s.title}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. FULL SERVICES DEEP DIVE CARDS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service) => {
            const meta = serviceDesignMap[service.id] || {
              icon: Film,
              gradient: "from-[#FF5D8F] to-[#E02462]",
            };
            const Icon = meta.icon;

            return (
              <Reveal key={service.id} delay={0.05}>
                <div
                  id={service.id}
                  className="rounded-3xl border border-[#EDE7DA] bg-white p-8 sm:p-12 transition-all duration-300 shadow-[0_4px_24px_rgba(25,30,27,0.04)] hover:shadow-xl hover:border-[#B88D44]/50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Title & Description */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-[#B88D44] font-bold tracking-widest">
                          MODULE {service.number}
                        </span>
                        <span className="text-[#8A948E]">&bull;</span>
                        <span className="text-[#68716B] uppercase">
                          {service.relatedCategory}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-4">
                        <div className="relative shrink-0">
                          {/* Permanent ambient color halo behind the icon */}
                          <div
                            className={`absolute -inset-1.5 rounded-2xl ${meta.haloBg} blur-md transition-all duration-300 opacity-80`}
                            aria-hidden="true"
                          />
                          <div
                            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.gradient} ${meta.glowShadow} text-white flex items-center justify-center shrink-0`}
                          >
                            <Icon className="w-7 h-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
                          </div>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#191E1B]">
                          {service.title}
                        </h2>
                      </div>

                      <p className="mt-4 text-base sm:text-lg text-[#191E1B] leading-snug font-semibold">
                        {service.shortDescription}
                      </p>

                      <p className="mt-4 text-sm text-[#68716B] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Related Project Showcase Link */}
                      {service.relatedProjectSlug && (
                        <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex items-center gap-3 font-mono text-xs">
                          <span className="text-[#8A948E]">Case Reference:</span>
                          <Link
                            href={`/work/${service.relatedProjectSlug}`}
                            className="text-[#B88D44] hover:text-[#A37B35] font-bold flex items-center gap-1 truncate"
                          >
                            <span>{service.relatedProjectTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Deliverables Checklist & Action */}
                    <div className="lg:col-span-5 bg-[#FAF7F2] rounded-3xl border border-[#EDE7DA] p-6 sm:p-8 flex flex-col justify-between h-full">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#B88D44] block mb-4">
                          DELIVERABLES &amp; SCOPE
                        </span>

                        <div className="space-y-3 font-mono text-xs">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-2.5 text-[#191E1B]">
                              <div className="w-4 h-4 rounded-full bg-white border border-[#EDE7DA] text-[#B88D44] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 pt-6 border-t border-[#EDE7DA] flex flex-col sm:flex-row gap-3 font-mono text-xs">
                        <Link
                          href={`/services/${service.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white py-3 px-5 font-bold uppercase tracking-wider transition-all shadow-md"
                        >
                          <span>Deep Dive Page</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href={getWhatsAppEnquiryUrl(
                            `Hi Mad Monkey Media, I'm interested in your ${service.title} service.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#EDE7DA] bg-white hover:border-[#B88D44] py-3 px-5 text-[#191E1B] transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-[#10B981]" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
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

interface ServicePageProps {
  params: {
    slug: string;
  };
}

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

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Our Services`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}

export default function IndividualServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const meta = serviceDesignMap[service.id] || {
    icon: Film,
    gradient: "from-[#FF5D8F] to-[#E02462]",
    glowShadow: "shadow-[0_6px_24px_rgba(255,93,143,0.4)]",
    haloBg: "bg-[#FF5D8F]/30",
  };
  const IconComponent = meta.icon;

  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen">
      {/* 1. SERVICE HERO */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] overflow-hidden pattern-warm-dots">
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb Back Link */}
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#68716B] hover:text-[#B88D44] transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OUR SERVICES</span>
            </Link>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#B88D44] shadow-xs">
                <span>MODULE {service.number} &bull; DEEP DIVE</span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative shrink-0">
                  {/* Permanent ambient color halo behind the icon */}
                  <div
                    className={`absolute -inset-1.5 rounded-2xl ${meta.haloBg} blur-md transition-all duration-300 opacity-80`}
                    aria-hidden="true"
                  />
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.gradient} ${meta.glowShadow} text-white flex items-center justify-center shrink-0`}
                  >
                    <IconComponent className="w-7 h-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
                  </div>
                </div>
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191E1B] leading-tight">
                  {service.title}
                </h1>
              </div>

              <p className="mt-6 text-lg sm:text-2xl text-[#191E1B] leading-snug font-semibold">
                {service.shortDescription}
              </p>

              <p className="mt-4 text-base text-[#68716B] leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </Reveal>

            {/* CTA Bar */}
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href={getWhatsAppEnquiryUrl(
                    `Hi Mad Monkey Media, I'm interested in discussing your ${service.title} capabilities.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-6 py-3.5 font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white hover:bg-[#FAF7F2] px-6 py-3.5 text-[#191E1B] transition-colors shadow-xs"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 text-[#B88D44]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. DELIVERABLES SPECIFICATION SHEET */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-mono text-xs text-[#B88D44] font-bold uppercase tracking-widest block">
                  TECHNICAL SCOPE
                </span>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-[#191E1B]">
                  Included in every production cycle.
                </h2>
                <p className="mt-4 text-sm text-[#68716B] leading-relaxed">
                  Our deliverables are structured for zero ambiguity. Every piece of content is handed over platform-ready with color grade, sound design, and unlimited revision support.
                </p>

                {service.relatedProjectSlug && (
                  <div className="mt-8 rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-6 shadow-xs">
                    <span className="text-[10px] font-mono text-[#B88D44] uppercase tracking-wider block font-bold">
                      FEATURED CASE STUDY
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-bold text-[#191E1B]">
                      {service.relatedProjectTitle}
                    </h3>
                    <Link
                      href={`/work/${service.relatedProjectSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#B88D44] hover:underline"
                    >
                      <span>View Project Archive &rarr;</span>
                    </Link>
                  </div>
                )}
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-[#EDE7DA] bg-[#FAF7F2] p-8 sm:p-10 shadow-xs">
                  <span className="font-mono text-xs text-[#B88D44] uppercase tracking-widest font-bold block pb-4 border-b border-[#EDE7DA]">
                    MODULE DELIVERABLES LIST
                  </span>

                  <div className="mt-6 space-y-4 font-mono text-sm">
                    {service.deliverables.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#EDE7DA] shadow-xs"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FAF7F2] text-[#B88D44] border border-[#EDE7DA] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-[#191E1B] block">
                            DELIVERABLE 0{index + 1}
                          </span>
                          <span className="text-[#68716B] text-xs font-sans mt-0.5 block">
                            {item}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA BANNER */}
      <StudioConversionCTA />
    </div>
  );
}

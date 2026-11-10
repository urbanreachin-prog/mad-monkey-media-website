"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Film,
  Share2,
  TrendingUp,
  Sparkles,
  Mic,
  Compass,
  Code2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  {
    number: "01",
    id: "reels-production",
    title: "Reels & Short-Form Content",
    tagline: "Short-Form Vertical Engine",
    description:
      "High-retention 9:16 vertical storytelling engineered with psychological hooks, musical pacing, and custom kinetic typography to generate organic reach, saves, and shares.",
    icon: Smartphone,
    color: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    deliverables: [
      "Psychological 3-Second Hook Strategy",
      "Full 1080x1920 9:16 Master Deliveries",
      "Custom Kinetic Captions & Sound Effects",
      "Fast 24-48h First Cut Turnaround",
    ],
  },
  {
    number: "02",
    id: "video-production",
    title: "Commercial Video Production",
    tagline: "Cinema-Grade Films",
    description:
      "High-end 4K commercial films, corporate showrooms, and industrial brand documentaries shot on Sony FX cinema cameras with calibrated lighting and cinematic color science.",
    icon: Film,
    color: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    deliverables: [
      "Cinema 4K 10-Bit Multi-Cam Ingestion",
      "Studio Lighting & Sound Engineering",
      "Rec.709 / Filmic LUT Grading",
      "Commercial Broadcast & Web Rights",
    ],
  },
  {
    number: "03",
    id: "social-media-management",
    title: "Social Media Management",
    tagline: "Channel Architecture",
    description:
      "Complete editorial grid curation, consistent daily publishing cadence, community management, and bio optimization that transform your profile into a high-trust conversion engine.",
    icon: Share2,
    color: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    deliverables: [
      "Cohesive 9-Grid Aesthetic Direction",
      "Monthly Editorial Calendar & Scheduling",
      "Copywriting, Captions & Relevant Hashtags",
      "Monthly Analytics & Retention Audits",
    ],
  },
  {
    number: "04",
    id: "performance-marketing",
    title: "UGC & Performance Ad Creatives",
    tagline: "Paid Meta & Google Ads",
    description:
      "Direct-response ad creatives engineered specifically to lower Customer Acquisition Cost (CAC) and scale Return on Ad Spend (ROAS) across Meta, Instagram, and YouTube.",
    icon: TrendingUp,
    color: "bg-purple-500/15 text-purple-600 border-purple-500/30",
    deliverables: [
      "Multi-Hook A/B Split Variations",
      "Direct-Response Scripting & CTA Optimization",
      "Authentic UGC-Style Founder Testimonials",
      "Campaign Creative Refresh Cadence",
    ],
  },
  {
    number: "05",
    id: "ai-video",
    title: "AI & Generative Visuals",
    tagline: "Next-Gen Dynamic Synthesis",
    description:
      "Cutting-edge AI-assisted visual effects, generative b-roll synthesis, seamless audio dubbing, and dynamic multi-language localization to supercharge production efficiency.",
    icon: Sparkles,
    color: "bg-rose-500/15 text-rose-600 border-rose-500/30",
    deliverables: [
      "Generative B-Roll & Visual Backdrops",
      "Automated Multi-Language Audio Dubbing",
      "Next-Gen 3D Motion Graphics & Object Tracking",
      "Rapid AI Prototyping & Moodboarding",
    ],
  },
  {
    number: "06",
    id: "podcast-teasers",
    title: "Podcast & Teaser Systems",
    tagline: "Multi-Cam Long-Form to Viral Clips",
    description:
      "End-to-end long-form podcast editing with multi-cam switching, broadcast audio noise cancellation, and automated extraction of viral short-form teaser snippets.",
    icon: Mic,
    color: "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
    deliverables: [
      "Multi-Angle Automated Camera Switching",
      "Broadcast EQ, De-Essing & Noise Gate",
      "5-10 Viral Cutdown Shorts Per Episode",
      "Audiogram Cards & YouTube Thumbnails",
    ],
  },
  {
    number: "07",
    id: "brand-strategy",
    title: "Brand Strategy & Positioning",
    tagline: "Market Authority Blueprint",
    description:
      "Clear visual identity frameworks, competitive differentiation, audience messaging pillars, and founder voice development that ensure your content cuts through market noise.",
    icon: Compass,
    color: "bg-teal-500/15 text-teal-600 border-teal-500/30",
    deliverables: [
      "Competitive Visual Whitespace Audit",
      "Founder Brand Positioning Blueprint",
      "Core Messaging Framework & Taglines",
      "Comprehensive Studio Brand Guidelines",
    ],
  },
  {
    number: "08",
    id: "website-development",
    title: "High-Converting Web Experiences",
    tagline: "Digital Flagship Storefront",
    description:
      "Fast, responsive, bespoke web experiences built on modern Next.js architecture that turn casual social media traffic into booked strategy calls and high-ticket sales.",
    icon: Code2,
    color: "bg-orange-500/15 text-orange-600 border-orange-500/30",
    deliverables: [
      "Custom Next.js & Tailwind CSS Engineering",
      "Mobile-First Responsive Optimization",
      "Interactive Video Embeds & Sliders",
      "Direct WhatsApp & CRM Form Integrations",
    ],
  },
];

export function ServicesShowcase() {
  return (
    <section id="services" className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#103C32]/10">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D3B45F]" />
                <span>WHAT WE BRING TO THE TABLE</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
                Our Full-Stack Capabilities.
              </h2>
              <p className="mt-3 max-w-xl text-base text-[#6E7771]">
                Everything you need to produce, scale, and monetize world-class video content under one dedicated agency roof.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D3B45F] hover:bg-[#C4A247] text-[#103C32] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Build Custom Package</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* 8-Card Services Grid (EditoHub Reference 3) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={(idx % 4) * 0.06}>
                <div className="group rounded-3xl border border-[#103C32]/12 bg-white p-6 sm:p-7 flex flex-col justify-between h-full shadow-[0_10px_30px_rgba(16,60,50,0.04)] hover:shadow-[0_20px_45px_rgba(16,60,50,0.12)] hover:border-[#103C32]/25 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${service.color} transition-transform duration-200 group-hover:scale-105 shadow-sm`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#6E7771]">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D3B45F]">
                        {service.tagline}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-[#103C32] group-hover:text-[#D3B45F] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs text-[#6E7771] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="mt-6 pt-5 border-t border-[#103C32]/8 space-y-2">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-[11px] font-medium text-[#171C19]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-6 pt-4 border-t border-[#103C32]/8">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#103C32] group-hover:text-[#D3B45F] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

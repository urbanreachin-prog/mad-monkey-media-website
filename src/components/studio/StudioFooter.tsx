"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  RefreshCw,
  Lock,
  UserCheck,
  MessageCircle,
  Mail,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";
import { services } from "@/data/services";

const studioGuarantees = [
  {
    title: "GST Registered Entity",
    desc: "100% Tax Compliant Invoicing",
    icon: ShieldCheck,
  },
  {
    title: "24-48h First Cut Sprint",
    desc: "Rapid delivery on vertical reels",
    icon: Zap,
  },
  {
    title: "Unlimited Revisions",
    desc: "Iterate until the cut is pristine",
    icon: RefreshCw,
  },
  {
    title: "Milestone Security",
    desc: "Transparent invoicing & deliverables",
    icon: Lock,
  },
  {
    title: "Dedicated Creative Lead",
    desc: "Direct WhatsApp & Slack sync",
    icon: UserCheck,
  },
];

export function StudioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111513] text-[#EDE7DA] border-t border-white/10 relative overflow-hidden">
      {/* 1. CINEMATIC STUDIO GUARANTEES BANNER */}
      <div className="border-b border-white/10 bg-[#161B18] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {studioGuarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF67]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-heading font-bold text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="block text-[10px] text-[#8A948E] mt-0.5 font-mono">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. 5-COLUMN STUDIO NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Manifesto & Direct Channels (4 Cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white border border-white/20 p-1 shadow-md">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading text-lg font-bold tracking-tight text-white">
                  MAD MONKEY MEDIA
                </span>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF67]">
                  CREATIVE PRODUCTION STUDIO
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs sm:text-sm text-[#8A948E] leading-relaxed">
              We engineer scroll-stopping vertical reels, cinema-grade commercial films, and high-impact digital systems for brands that want to command market authority.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono text-white hover:border-[#B88D44] hover:text-[#D4AF67] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>

              <a
                href={siteConfig.mailtoUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono text-white hover:border-[#B88D44] hover:text-[#D4AF67] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF67]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services (with Individual Service Links) (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF67]">
              Our Services
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-[#8A948E]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <span className="text-[9px] font-mono text-white/40">{s.number}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Work Archive (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF67]">
              Portfolio
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A948E]">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  All 26 Video Reels
                </Link>
              </li>
              <li>
                <Link href="/work/viral-jewellery-campaign" className="hover:text-white transition-colors">
                  Jewellery Showcase
                </Link>
              </li>
              <li>
                <Link href="/work/automotive-detailing-studios" className="hover:text-white transition-colors">
                  Automotive Studios
                </Link>
              </li>
              <li>
                <Link href="/work/architectural-real-estate-showcase" className="hover:text-white transition-colors">
                  Real Estate Architecture
                </Link>
              </li>
              <li>
                <Link href="/work/industrial-manufacturing-brand-film" className="hover:text-white transition-colors">
                  Manufacturing Story
                </Link>
              </li>
              <li>
                <Link href="/work/ca-vaibhav-jain-personal-branding" className="hover:text-white transition-colors">
                  Founder Personal Brand
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio & Careers (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF67]">
              Studio
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A948E]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Production Engine
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Social & Location (1 Col) */}
          <div className="lg:col-span-1">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#D4AF67]">
              Follow
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#8A948E]">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. STUDIO TELEMETRY BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 px-4 sm:px-6 lg:px-8 bg-black/40 text-xs text-[#8A948E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} {siteConfig.businessName}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="text-[#D4AF67]">GST Registered Indian Entity</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#8A948E]">Engineered for high-retention visual storytelling</span>
            <a
              href="#main-content"
              className="hover:text-white inline-flex items-center gap-1 text-[#D4AF67] font-bold"
            >
              <span>TOP</span>
              <ArrowUpRight className="w-3 h-3 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

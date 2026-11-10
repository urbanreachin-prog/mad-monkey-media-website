"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  Zap,
  Users,
  MessageCircle,
  Mail,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

const trustGuarantees = [
  {
    title: "GST Registered",
    desc: "100% Tax Compliant Invoicing",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payments",
    desc: "Milestone Escrow Protection",
    icon: Lock,
  },
  {
    title: "Unlimited Revisions",
    desc: "Until you love the master cut",
    icon: RefreshCw,
  },
  {
    title: "24-48h First Cut",
    desc: "Agile production delivery sprint",
    icon: Zap,
  },
  {
    title: "Dedicated Director",
    desc: "Direct WhatsApp & Slack channel",
    icon: Users,
  },
];

export function EditoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121513] text-[#F5F2E9] border-t border-white/10 relative overflow-hidden">
      {/* 1. TOP TRUST GUARANTEES BANNER (EditoHub Reference 4) */}
      <div className="border-b border-white/10 bg-[#171C19]/80 backdrop-blur-md py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {trustGuarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0 flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#103C32] border border-[#D3B45F]/30 flex items-center justify-center shrink-0 text-[#D3B45F]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-heading font-bold text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="block text-[10px] text-[#A9DCD0]/70 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. 5-COLUMN MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white border border-white/20 p-1">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading text-lg font-bold tracking-tight text-white">
                  MAD MONKEY MEDIA
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D3B45F]">
                  CREATIVE PRODUCTION STUDIO
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-xs sm:text-sm text-[#AAAFA5] leading-relaxed">
              We help ambitious founders, direct-to-consumer brands, and forward-thinking enterprises turn casual scrollers into loyal customers with scroll-stopping video content.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:border-[#D3B45F] hover:text-[#D3B45F] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>

              <a
                href={siteConfig.mailtoUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:border-[#D3B45F] hover:text-[#D3B45F] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#D3B45F]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
              Capabilities
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#AAAFA5]">
              <li>
                <Link href="/services#reels-production" className="hover:text-white transition-colors">
                  Reels & Short-Form
                </Link>
              </li>
              <li>
                <Link href="/services#video-production" className="hover:text-white transition-colors">
                  Commercial Video
                </Link>
              </li>
              <li>
                <Link href="/services#social-media-management" className="hover:text-white transition-colors">
                  Social Management
                </Link>
              </li>
              <li>
                <Link href="/services#performance-marketing" className="hover:text-white transition-colors">
                  UGC & Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI & Generative Video
                </Link>
              </li>
              <li>
                <Link href="/services#brand-strategy" className="hover:text-white transition-colors">
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Portfolio (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
              Portfolio Archive
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#AAAFA5]">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  200M+ Views Master Reel
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Fitness & Wellness
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Healthcare & Medical
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Podcast Trailers
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Gym Promotions
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#D3B45F] font-semibold hover:underline">
                  All 26 Video Reels &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Agency & Company (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
              Studio
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#AAAFA5]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  5-Step Workflow
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Pricing & Retainers
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect & Legal (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#AAAFA5]">
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
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-[10px] font-mono uppercase text-[#6E7771]">
                  STUDIO LOCATION
                </span>
                <span className="text-white text-xs mt-0.5 block">
                  India &bull; Remote Nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT & ATTRIBUTION BAR */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 bg-black/40 text-xs text-[#AAAFA5]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} {siteConfig.businessName}. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-[#A9DCD0]">GST Registered Indian Entity</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Crafted with cinematic excellence in India</span>
            <a
              href="#main-content"
              className="hover:text-white inline-flex items-center gap-1 text-[#D3B45F]"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
  Film,
  Smartphone,
  Share2,
  TrendingUp,
  UserCheck,
  Code2,
  Camera,
  Play,
} from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

interface NavbarServiceItem {
  number: string;
  title: string;
  shortDescription: string;
  href: string;
  icon: React.ElementType;
  gradient: string;
  glowShadow: string;
  haloBg: string;
}

const navbarServices: NavbarServiceItem[] = [
  {
    number: "01",
    title: "Video Editing",
    shortDescription: "High-retention commercial & social video editing.",
    href: "/services/video-production",
    icon: Film,
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(139,92,246,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(139,92,246,0.65)]",
    haloBg: "bg-[#8B5CF6]/30 group-hover/item:bg-[#8B5CF6]/50",
  },
  {
    number: "02",
    title: "UGC Videos",
    shortDescription: "Authentic creator-style reels & product showcases.",
    href: "/services/reels-production",
    icon: Smartphone,
    gradient: "from-[#FF5D8F] to-[#E02462]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(255,93,143,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(255,93,143,0.65)]",
    haloBg: "bg-[#FF5D8F]/30 group-hover/item:bg-[#FF5D8F]/50",
  },
  {
    number: "03",
    title: "Book a Shoot",
    shortDescription: "On-location & studio cinematic production shoots.",
    href: "/services/content-production",
    icon: Camera,
    gradient: "from-[#10B981] to-[#059669]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(16,185,129,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(16,185,129,0.65)]",
    haloBg: "bg-[#10B981]/30 group-hover/item:bg-[#10B981]/50",
  },
  {
    number: "04",
    title: "Website Development",
    shortDescription: "Fast, bespoke websites engineered for conversion.",
    href: "/services/website-development",
    icon: Code2,
    gradient: "from-[#F59E0B] to-[#D97706]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(245,158,11,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(245,158,11,0.65)]",
    haloBg: "bg-[#F59E0B]/30 group-hover/item:bg-[#F59E0B]/50",
  },
  {
    number: "05",
    title: "Personal Branding",
    shortDescription: "Executive & founder positioning through authority content.",
    href: "/services/personal-branding",
    icon: UserCheck,
    gradient: "from-[#06B6D4] to-[#0284C7]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(6,182,212,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(6,182,212,0.65)]",
    haloBg: "bg-[#06B6D4]/30 group-hover/item:bg-[#06B6D4]/50",
  },
  {
    number: "06",
    title: "YouTube Video Editing",
    shortDescription: "Paced long-form edits, chapters & visual retention.",
    href: "/services/video-production",
    icon: Play,
    gradient: "from-[#EC4899] to-[#BE185D]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(236,72,153,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(236,72,153,0.65)]",
    haloBg: "bg-[#EC4899]/30 group-hover/item:bg-[#EC4899]/50",
  },
  {
    number: "07",
    title: "Social Media Management",
    shortDescription: "End-to-end grid curation, scheduling & organic growth.",
    href: "/services/social-media-management",
    icon: Share2,
    gradient: "from-[#6366F1] to-[#4338CA]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(99,102,241,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(99,102,241,0.65)]",
    haloBg: "bg-[#6366F1]/30 group-hover/item:bg-[#6366F1]/50",
  },
  {
    number: "08",
    title: "Meta Ads Creatives",
    shortDescription: "High-CTR video hooks & creative ad variations.",
    href: "/services/performance-marketing",
    icon: TrendingUp,
    gradient: "from-[#FF4B4B] to-[#D61818]",
    glowShadow:
      "shadow-[0_4px_16px_rgba(255,75,75,0.4)] group-hover/item:shadow-[0_6px_22px_rgba(255,75,75,0.65)]",
    haloBg: "bg-[#FF4B4B]/30 group-hover/item:bg-[#FF4B4B]/50",
  },
];

export function StudioNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. LUXURY ANNOUNCEMENT TELEMETRY BAR */}
      <div className="bg-[#111513] text-[#EDE7DA] border-b border-white/10 text-[11px] sm:text-xs py-2 px-4 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex items-center gap-1.5 text-[#D4AF67] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88D44] animate-ping" />
              <span>✦ LIMITED ONBOARDING SLOTS</span>
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/80">
              24-48h first cuts &bull; Unlimited revisions &bull; Dedicated senior editors
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-white/80 hover:text-[#D4AF67] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B88D44]" />
              <span>{siteConfig.whatsappNumber}</span>
            </a>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/contact"
              className="text-[#D4AF67] hover:text-white transition-colors font-semibold flex items-center gap-1"
            >
              <span>CLAIM YOUR SLOT</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN WARM CREAM NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F6F2E9]/95 backdrop-blur-md border-b border-[#EDE7DA] shadow-[0_8px_30px_rgba(25,30,27,0.06)]"
            : "bg-[#F6F2E9]/80 backdrop-blur-sm border-b border-[#EDE7DA]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary Studio Navigation"
            className="flex h-18 sm:h-20 items-center justify-between gap-4"
          >
            {/* Studio Identity Lockup */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B88D44]"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl bg-white border border-[#EDE7DA] p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media"
                  fill
                  sizes="44px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#191E1B] leading-none group-hover:text-[#B88D44] transition-colors">
                    MAD MONKEY
                  </span>
                  <span className="rounded-full bg-[#B88D44]/12 border border-[#B88D44]/30 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-[#B88D44]">
                    STUDIO
                  </span>
                </div>
                <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#68716B] leading-none font-medium">
                  Creative Production &bull; High Retention
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-[#68716B]">
              <Link
                href="/"
                className={`group relative px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                  pathname === "/"
                    ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                    : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                }`}
              >
                <span className="relative z-10">Home</span>
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                    pathname === "/"
                      ? "scale-x-100 opacity-90"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/work"
                className={`group relative px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                  pathname.startsWith("/work")
                    ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                    : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                }`}
              >
                <span className="relative z-10">Portfolio</span>
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                    pathname.startsWith("/work")
                      ? "scale-x-100 opacity-90"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>

              {/* Our Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = null;
                    }
                    setServicesDropdownOpen((prev) => !prev);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setServicesDropdownOpen(false);
                    }
                  }}
                  className={`group relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                    servicesDropdownOpen || pathname.startsWith("/services")
                      ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                      : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="relative z-10">Our Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                      servicesDropdownOpen
                        ? "rotate-180 text-[#B88D44]"
                        : "text-[#68716B] group-hover:rotate-180 group-hover:text-[#B88D44]"
                    }`}
                  />
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                      servicesDropdownOpen || pathname.startsWith("/services")
                        ? "scale-x-100 opacity-90"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Luxury Cream Mega-Dropdown Panel */}
                {servicesDropdownOpen && (
                  <div
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[760px] z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    {/* Continuous invisible hover bridge to ensure zero gap */}
                    <div className="absolute -top-3 inset-x-0 h-4 bg-transparent" aria-hidden="true" />

                    <div className="rounded-3xl bg-white border border-[#EDE7DA] shadow-[0_24px_60px_rgba(25,30,27,0.14)] p-6">
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#EDE7DA] text-xs">
                        <div>
                          <span className="text-[10px] text-[#B88D44] font-bold uppercase tracking-widest font-mono">
                            ✦ OUR SERVICES [08 MODULES]
                          </span>
                          <h4 className="font-heading text-sm font-bold text-[#191E1B] mt-0.5">
                            High-Retention Video &amp; Creative Production Systems
                          </h4>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-[11px] text-[#B88D44] hover:text-[#A37B35] transition-colors flex items-center gap-1 font-bold"
                        >
                          <span>VIEW ALL SERVICES</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {navbarServices.map((service) => {
                          const IconComponent = service.icon;
                          const isPlay = service.icon === Play;
                          return (
                            <Link
                              key={service.number}
                              href={service.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group/item flex items-start gap-3.5 p-3 rounded-2xl border border-transparent hover:border-[#EDE7DA] hover:bg-[#FAF7F2] transition-all"
                            >
                              <div className="relative shrink-0">
                                {/* Permanent ambient color halo behind the icon */}
                                <div
                                  className={`absolute -inset-1 rounded-2xl ${service.haloBg} blur-md transition-all duration-300 pointer-events-none opacity-80 group-hover/item:opacity-100`}
                                  aria-hidden="true"
                                />
                                {/* Colored icon container with permanent diffused color shadow */}
                                <div
                                  className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} ${service.glowShadow} flex items-center justify-center text-white transition-all duration-300 group-hover/item:scale-105`}
                                >
                                  <IconComponent
                                    className={`w-5 h-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] ${
                                      isPlay ? "fill-current ml-0.5" : ""
                                    }`}
                                  />
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-heading text-xs font-bold text-[#191E1B] group-hover/item:text-[#B88D44] transition-colors truncate">
                                    {service.title}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#8A948E]">
                                    {service.number}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[#68716B] leading-snug line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-[#EDE7DA] flex items-center justify-between text-[11px] font-mono text-[#68716B] bg-[#FAF7F2] -mx-6 -mb-6 px-6 py-3 rounded-b-3xl">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                          <span>FASTEST REELS FIRST CUT: 24-48 HOURS</span>
                        </div>
                        <Link
                          href="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-[#B88D44] hover:text-[#A37B35] font-bold transition-colors"
                        >
                          Explore Service Breakdown &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`group relative px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                  pathname.startsWith("/about")
                    ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                    : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                }`}
              >
                <span className="relative z-10">About Us</span>
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                    pathname.startsWith("/about")
                      ? "scale-x-100 opacity-90"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/careers"
                className={`group relative px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                  pathname.startsWith("/careers")
                    ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                    : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                }`}
              >
                <span className="relative z-10">Careers</span>
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                    pathname.startsWith("/careers")
                      ? "scale-x-100 opacity-90"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className={`group relative px-3.5 py-2 rounded-full transition-all duration-300 ease-out hover:-translate-y-[2px] hover:text-[#B88D44] hover:shadow-[0_4px_16px_rgba(184,141,68,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 ${
                  pathname.startsWith("/contact")
                    ? "text-[#191E1B] bg-white border border-[#EDE7DA] shadow-xs font-bold"
                    : "text-[#68716B] border border-transparent hover:border-[#B88D44]/30 hover:bg-white"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <span
                  className={`absolute bottom-1 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#B88D44] transition-all duration-300 origin-center ${
                    pathname.startsWith("/contact")
                      ? "scale-x-100 opacity-90"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#EDE7DA] bg-white text-xs font-mono font-semibold text-[#191E1B] transition-all duration-300 ease-out shadow-xs hover:-translate-y-[2px] hover:scale-[1.02] hover:border-[#B88D44]/70 hover:text-[#B88D44] hover:shadow-[0_4px_18px_rgba(184,141,68,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
                <span>WHATSAPP</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-white transition-all duration-300 ease-out shadow-[0_4px_16px_rgba(184,141,68,0.3)] hover:shadow-[0_6px_24px_rgba(184,141,68,0.48)] hover:-translate-y-[2px] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88D44] focus-visible:ring-offset-2 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#B88D44] px-4 py-2 text-xs font-heading font-bold text-white shadow-xs"
              >
                <span>Start</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-[#EDE7DA] bg-white text-[#191E1B] hover:text-[#B88D44] transition-colors shadow-xs"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* 3. MOBILE FULL DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#EDE7DA] shadow-2xl max-h-[85vh] overflow-y-auto px-6 py-6 z-50">
            <div className="flex flex-col gap-1 text-sm font-heading font-bold uppercase tracking-wider text-[#191E1B]">
              <Link
                href="/"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors"
              >
                Home
              </Link>

              <Link
                href="/work"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors flex items-center justify-between"
              >
                <span>Portfolio (26 Reels)</span>
                <span className="text-[10px] font-mono text-[#B88D44] bg-[#B88D44]/10 px-2 py-0.5 rounded-full">
                  200M+ VIEWS
                </span>
              </Link>

              <Link
                href="/services"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors"
              >
                Our Services (8 Modules)
              </Link>

              <div className="pl-4 py-2 space-y-1 border-l-2 border-[#EDE7DA] ml-4 my-1">
                {navbarServices.map((s) => (
                  <Link
                    key={s.number}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs text-[#68716B] hover:text-[#B88D44] transition-colors"
                  >
                    &bull; {s.number}. {s.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/careers"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors flex items-center justify-between"
              >
                <span>Careers</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  HIRING
                </span>
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl hover:bg-white hover:text-[#B88D44] transition-colors"
              >
                Contact &amp; Discovery
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-[#EDE7DA] flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#B88D44] py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-white shadow-md shadow-[#B88D44]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full border border-[#EDE7DA] bg-white py-3 text-xs font-mono text-[#191E1B] hover:border-[#B88D44]"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

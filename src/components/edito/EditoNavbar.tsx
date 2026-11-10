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
  Smartphone,
  Film,
  Share2,
  TrendingUp,
  Sparkles,
  Mic,
  Compass,
  Code2,
  MessageCircle,
} from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

const megaMenuServices = [
  {
    title: "Reels & Short-Form",
    tagline: "High-retention 9:16 vertical storytelling",
    href: "/services#reels-production",
    icon: Smartphone,
    color: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  },
  {
    title: "Commercial Video",
    tagline: "Cinema 4K brand films & showroom showcases",
    href: "/services#video-production",
    icon: Film,
    color: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  },
  {
    title: "Social Media Management",
    tagline: "Cohesive grid architecture & growth",
    href: "/services#social-media-management",
    icon: Share2,
    color: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  },
  {
    title: "UGC & Meta Ads",
    tagline: "High-converting paid acquisition creatives",
    href: "/services#performance-marketing",
    icon: TrendingUp,
    color: "bg-purple-500/15 text-purple-600 border-purple-500/30",
  },
  {
    title: "AI & Generative Video",
    tagline: "Next-gen dynamic visual synthesis",
    href: "/services",
    icon: Sparkles,
    color: "bg-rose-500/15 text-rose-600 border-rose-500/30",
  },
  {
    title: "Podcast & Teasers",
    tagline: "Multi-cam editing & viral cutdown clips",
    href: "/services#content-production",
    icon: Mic,
    color: "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
  },
  {
    title: "Brand Strategy",
    tagline: "Visual positioning & market distinction",
    href: "/services#brand-strategy",
    icon: Compass,
    color: "bg-teal-500/15 text-teal-600 border-teal-500/30",
  },
  {
    title: "Web Experiences",
    tagline: "Fast, expressive conversion-focused sites",
    href: "/services#website-development",
    icon: Code2,
    color: "bg-orange-500/15 text-orange-600 border-orange-500/30",
  },
];

export function EditoNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Elevation shift on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close services mega-menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
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
      {/* 1. TOP ANNOUNCEMENT BAR (EditoHub Style) */}
      <div className="bg-[#103C32] text-[#F5F2E9] border-b border-[#103C32]/40 text-xs py-2 px-4 font-medium transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D3B45F] animate-pulse" />
            <span className="text-[#A9DCD0]">Accepting Q2/Q3 Brand Retainers</span>
            <span className="text-[#F5F2E9]/40">&bull;</span>
            <span className="text-[#F5F2E9]/90">24-48h First Cut Delivery Guarantee</span>
          </div>

          <div className="w-full sm:w-auto text-center flex items-center justify-center sm:justify-end gap-3 text-[11px] sm:text-xs">
            <span className="font-semibold text-[#D3B45F]">Scale Your Brand With High-Converting Video Content</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[#F5F2E9] hover:text-[#D3B45F] transition-colors font-bold underline underline-offset-4 decoration-[#D3B45F]"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-xl border-[#103C32]/10 shadow-[0_12px_36px_rgba(16,60,50,0.08)]"
            : "bg-[#F5F2E9] border-[#103C32]/8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary navigation"
            className="flex h-18 sm:h-20 items-center justify-between gap-4"
          >
            {/* Logo & Brand Identity */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#103C32]"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl bg-white border border-[#103C32]/15 shadow-sm p-1 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media logo"
                  fill
                  sizes="44px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm sm:text-base font-bold tracking-tight text-[#103C32] leading-none">
                    MAD MONKEY
                  </span>
                  <span className="rounded-full bg-[#103C32]/10 border border-[#103C32]/20 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#103C32]">
                    MEDIA
                  </span>
                </div>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#6E7771] leading-none">
                  CREATIVE PRODUCTION STUDIO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#171C19]">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  pathname === "/"
                    ? "text-[#103C32] font-semibold bg-[#103C32]/8"
                    : "hover:text-[#103C32] hover:bg-[#103C32]/5"
                }`}
              >
                Home
              </Link>

              {/* Services Mega-Menu Trigger */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors ${
                    servicesOpen || pathname.startsWith("/services")
                      ? "text-[#103C32] font-semibold bg-[#103C32]/8"
                      : "hover:text-[#103C32] hover:bg-[#103C32]/5"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-[#103C32]" : "text-[#6E7771]"
                    }`}
                  />
                </button>

                {/* Services Mega-Menu Dropdown (EditoHub Style) */}
                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl bg-white border border-[#103C32]/12 shadow-[0_24px_60px_rgba(16,60,50,0.14)] p-6 z-50 animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#103C32]/8">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D3B45F]">
                          OUR CAPABILITIES
                        </span>
                        <h4 className="text-sm font-heading font-bold text-[#103C32]">
                          Creative Production & Digital Growth Systems
                        </h4>
                      </div>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-[#103C32] hover:text-[#D3B45F] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View All Capabilities</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {megaMenuServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3.5 p-3 rounded-xl border border-transparent hover:border-[#103C32]/10 hover:bg-[#F5F2E9]/70 transition-all duration-150"
                          >
                            <div
                              className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center border ${service.color} transition-transform duration-200 group-hover:scale-105`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-heading font-bold text-[#171C19] group-hover:text-[#103C32] transition-colors">
                                  {service.title}
                                </span>
                                <ArrowUpRight className="w-3 h-3 text-[#6E7771] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[11px] text-[#6E7771] leading-snug mt-0.5 line-clamp-1">
                                {service.tagline}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom strip in mega-menu */}
                    <div className="mt-4 pt-3.5 border-t border-[#103C32]/8 flex items-center justify-between text-xs text-[#6E7771] bg-[#FAF8F3] -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#103C32]" />
                        <span>24-48h First Cut on All Content Packages</span>
                      </div>
                      <a
                        href={getWhatsAppEnquiryUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#103C32] hover:text-[#D3B45F] transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Direct WhatsApp Strategy Call</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/work"
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/work")
                    ? "text-[#103C32] font-semibold bg-[#103C32]/8"
                    : "hover:text-[#103C32] hover:bg-[#103C32]/5"
                }`}
              >
                Work / Portfolio
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/about")
                    ? "text-[#103C32] font-semibold bg-[#103C32]/8"
                    : "hover:text-[#103C32] hover:bg-[#103C32]/5"
                }`}
              >
                About
              </Link>

              <Link
                href="/#pricing"
                className="px-3.5 py-2 rounded-lg transition-colors hover:text-[#103C32] hover:bg-[#103C32]/5"
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/contact")
                    ? "text-[#103C32] font-semibold bg-[#103C32]/8"
                    : "hover:text-[#103C32] hover:bg-[#103C32]/5"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Action Buttons (EditoHub Style) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#103C32]/20 text-xs font-semibold text-[#103C32] hover:bg-[#103C32]/5 hover:border-[#103C32]/40 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Client WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D3B45F] hover:bg-[#C4A247] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#103C32] transition-all shadow-[0_4px_16px_rgba(211,180,95,0.3)] hover:shadow-[0_6px_20px_rgba(211,180,95,0.45)] hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#D3B45F] px-3.5 py-1.5 text-xs font-bold text-[#103C32]"
              >
                <span>Start</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl border border-[#103C32]/15 text-[#103C32] bg-white hover:bg-[#F5F2E9] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* 3. MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F3] border-b border-[#103C32]/15 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-6">
            <div className="flex flex-col gap-1 text-sm font-medium text-[#171C19]">
              <Link
                href="/"
                className="px-4 py-3 rounded-xl hover:bg-[#103C32]/8 font-heading font-semibold text-[#103C32]"
              >
                Home
              </Link>

              <div className="border-t border-b border-[#103C32]/8 py-2 my-1">
                <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D3B45F]">
                  Services & Capabilities
                </div>
                <div className="grid grid-cols-1 gap-1 mt-1">
                  {megaMenuServices.slice(0, 5).map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[#103C32]/8 text-xs font-medium"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center border ${service.color}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-heading font-bold text-[#103C32]">
                            {service.title}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    className="px-4 py-2 text-xs font-bold text-[#103C32] underline underline-offset-4 decoration-[#D3B45F]"
                  >
                    View All 8 Capabilities &rarr;
                  </Link>
                </div>
              </div>

              <Link
                href="/work"
                className="px-4 py-3 rounded-xl hover:bg-[#103C32]/8 font-heading font-semibold text-[#103C32]"
              >
                Work / Portfolio Archive (26 Reels)
              </Link>

              <Link
                href="/about"
                className="px-4 py-3 rounded-xl hover:bg-[#103C32]/8 font-heading font-semibold text-[#103C32]"
              >
                About Our Studio
              </Link>

              <Link
                href="/#pricing"
                className="px-4 py-3 rounded-xl hover:bg-[#103C32]/8 font-heading font-semibold text-[#103C32]"
              >
                Pricing & Retainers
              </Link>

              <Link
                href="/contact"
                className="px-4 py-3 rounded-xl hover:bg-[#103C32]/8 font-heading font-semibold text-[#103C32]"
              >
                Contact & Discovery Call
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-[#103C32]/10 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#D3B45F] py-3.5 text-xs font-bold uppercase tracking-wider text-[#103C32] shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full border border-[#103C32]/25 py-3 text-xs font-semibold text-[#103C32] bg-white"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

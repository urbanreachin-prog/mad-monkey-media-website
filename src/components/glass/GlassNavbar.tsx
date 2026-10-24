"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

export function GlassNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close mobile menu automatically on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Subtle elevation shift when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manage body scroll lock and Escape key when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-studio-charcoalDeep/95 backdrop-blur-xl border-studio-cream/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-studio-charcoal/90 backdrop-blur-md border-studio-cream/10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary navigation"
            className="flex h-16 items-center justify-between gap-4"
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-studio-lime"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-studio-cream border border-studio-cream/25 p-0.5 transition-transform duration-200 group-hover:scale-[1.03]">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media logo"
                  fill
                  sizes="36px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xs sm:text-sm font-bold tracking-tight text-studio-cream leading-none">
                  MAD MONKEY
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-studio-muted leading-none">
                  MEDIA STUDIO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-1.5 rounded-full border border-studio-cream/10 bg-studio-charcoalDeep/60 px-2 py-1">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-studio-lime bg-studio-cream/[0.07]"
                          : "text-studio-cream/80 hover:text-studio-cream hover:bg-studio-cream/[0.04]"
                      }`}
                    >
                      {isActive && (
                        <span
                          className="mr-2 h-1.5 w-1.5 rounded-full bg-studio-lime shadow-[0_0_8px_#D8FF3E]"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Let's Talk CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-studio-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-studio-ink transition-all duration-200 hover:bg-studio-cream"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Mobile Hamburger / Close Toggle Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-studio-cream/20 bg-studio-charcoalDeep text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu (rendered outside <header> so backdrop-filter never clips position:fixed) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-[100] md:hidden w-full h-[100dvh] min-h-screen bg-studio-charcoalDeep text-studio-cream flex flex-col justify-between overflow-y-auto"
        >
          {/* Mobile Menu Top Header Bar */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-studio-cream/15 bg-studio-charcoal px-4 sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-3"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-studio-cream border border-studio-cream/25 p-0.5">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xs sm:text-sm font-bold tracking-tight text-studio-cream leading-none">
                  MAD MONKEY
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-studio-muted leading-none">
                  MEDIA STUDIO
                </span>
              </div>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-studio-cream/20 bg-studio-charcoalDeep text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav
            aria-label="Mobile navigation links"
            className="flex-1 px-4 sm:px-6 py-6"
          >
            <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.22em] text-studio-muted">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {siteConfig.footerNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? "border-studio-lime/40 bg-studio-lime/10 text-studio-lime"
                          : "border-studio-cream/10 bg-studio-charcoal text-studio-cream hover:border-studio-lime/40 hover:text-studio-lime"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span
                          className="h-2.5 w-2.5 rounded-full bg-studio-lime shadow-[0_0_8px_#D8FF3E]"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowUpRight
                          className="h-5 w-5 text-studio-muted"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Footer CTAs */}
          <div className="shrink-0 space-y-3 border-t border-studio-cream/15 bg-studio-charcoal px-4 sm:px-6 py-6">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-studio-lime px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-studio-ink transition-colors hover:bg-studio-cream"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={getWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep px-6 py-3.5 text-xs font-medium text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
            >
              <MessageCircle
                className="h-4 w-4 text-studio-lime"
                aria-hidden="true"
              />
              <span>WhatsApp: {siteConfig.whatsappNumber}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

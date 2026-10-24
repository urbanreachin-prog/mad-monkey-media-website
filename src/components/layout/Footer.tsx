import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Instagram } from "lucide-react";
import { siteConfig, getWhatsAppEnquiryUrl } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-studio-cream/10 bg-studio-charcoalDeep text-studio-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5"
              aria-label="Mad Monkey Media — Home"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-studio-cream border border-studio-cream/25 p-1">
                <Image
                  src="/images/branding/logo.png"
                  alt="Mad Monkey Media logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-heading text-base font-bold tracking-tight text-studio-cream">
                  {siteConfig.businessName}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-studio-muted">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm text-studio-muted leading-relaxed">
              {siteConfig.brandPromise}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-studio-cream/15 bg-studio-charcoal px-4 py-2 text-xs font-medium text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
              >
                <MessageCircle
                  className="h-3.5 w-3.5 text-studio-lime"
                  aria-hidden="true"
                />
                <span>{siteConfig.whatsappNumber}</span>
              </a>

              <a
                href={siteConfig.mailtoUrl}
                className="inline-flex items-center gap-2 rounded-full border border-studio-cream/15 bg-studio-charcoal px-4 py-2 text-xs font-medium text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
              >
                <Mail
                  className="h-3.5 w-3.5 text-studio-lime"
                  aria-hidden="true"
                />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h2 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-studio-lime">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-studio-muted transition-colors hover:text-studio-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Enquiries Column */}
          <div className="sm:col-span-6 lg:col-span-4">
            <h2 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-studio-lime">
              Direct Channels
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-studio-muted transition-colors hover:text-studio-cream"
                >
                  <Instagram
                    className="h-4 w-4 text-studio-lime"
                    aria-hidden="true"
                  />
                  <span>Instagram ({siteConfig.instagramHandle})</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-studio-muted transition-colors hover:text-studio-cream"
                >
                  <MessageCircle
                    className="h-4 w-4 text-studio-lime"
                    aria-hidden="true"
                  />
                  <span>WhatsApp ({siteConfig.whatsappNumber})</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.mailtoUrl}
                  className="group inline-flex items-center gap-2 text-studio-muted transition-colors hover:text-studio-cream"
                >
                  <Mail
                    className="h-4 w-4 text-studio-lime"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-studio-cream/10 pt-7 text-xs text-studio-muted">
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-studio-muted uppercase tracking-[0.16em] text-[10px]">
            Creative Production &middot; Content &middot; Digital Growth
          </p>
        </div>
      </div>
    </footer>
  );
}

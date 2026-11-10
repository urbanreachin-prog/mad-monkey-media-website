import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service — Mad Monkey Media",
  description:
    "Terms of Service for Mad Monkey Media production sprints, retainer contracts, and creative engagements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="overflow-x-hidden bg-[#F6F2E9] text-[#191E1B] min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#68716B] hover:text-[#B88D44] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO HOME</span>
        </Link>

        {/* Header */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#B88D44] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL &bull; TERMS OF SERVICE</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#191E1B]">
            Terms of Service
          </h1>

          <p className="mt-3 text-xs font-mono text-[#8A948E]">
            Last updated: January 2026 &bull; {siteConfig.businessName}
          </p>
        </Reveal>

        {/* Terms Content */}
        <div className="mt-12 space-y-8 text-sm sm:text-base text-[#68716B] leading-relaxed font-sans border-t border-[#EDE7DA] pt-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#EDE7DA] shadow-xs">
          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              1. Creative Production Scope
            </h2>
            <p>
              {siteConfig.businessName} provides video editing, commercial filmmaking, social media management, brand strategy, and performance ad creative services according to the deliverables specified in your signed proposal or retainer tier.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              2. 24-48h First Cut Sprints &amp; Timelines
            </h2>
            <p>
              Our guaranteed 24-48h first cut turnaround applies to short-form vertical reels once all raw video assets, recording takes, and creative direction briefs have been successfully uploaded and acknowledged in the studio portal. Commercial brand films and multi-cam podcast productions adhere to mutually agreed production schedules.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              3. Unlimited Revisions Policy
            </h2>
            <p>
              We provide unlimited creative revisions to fine-tune pacing, music selection, color grading, and subtitle typography until you are completely satisfied with the contracted deliverables. Fundamental shifts in project scope or script rewrites after filming completion may require separate scope addenda.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              4. Intellectual Property &amp; Commercial Rights
            </h2>
            <p>
              Upon receipt of final milestone or retainer payment, full commercial usage rights for all final rendered master videos and deliverables are transferred to the client. {siteConfig.businessName} retains the right to display final work in its public portfolio archive and promotional showreels unless a formal Non-Disclosure Agreement (NDA) specifies otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              5. Invoicing &amp; GST Compliance
            </h2>
            <p>
              All payments are processed with official, tax-compliant GST invoices. Retainer packages are billed on recurring 30-day billing intervals and can be paused or cancelled at the conclusion of each billing cycle with written notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#191E1B] mb-3">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

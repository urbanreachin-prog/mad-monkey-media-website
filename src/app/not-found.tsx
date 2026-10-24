import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="studio-dark-grid min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-studio-cream/15 bg-studio-charcoalDeep/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-studio-cream mb-6">
          <span
            className="h-2 w-2 rounded-full bg-studio-lime shadow-[0_0_8px_#D8FF3E]"
            aria-hidden="true"
          />
          <span>404 &middot; PAGE NOT FOUND</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tightest text-studio-cream leading-[1.08]">
          This frame isn&apos;t in the cut.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
          The page or project you are looking for does not exist or may have
          moved. Explore our curated portfolio or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-studio-lime px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-ink transition-colors hover:bg-studio-cream"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-studio-cream/20 bg-studio-charcoalDeep px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-studio-cream transition-colors hover:border-studio-lime hover:text-studio-lime"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

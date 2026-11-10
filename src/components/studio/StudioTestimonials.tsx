"use client";

import React, { useState, useMemo } from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  Star,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  MessageSquareQuote,
  Filter,
} from "lucide-react";
import { clientReviews } from "@/data/reviews";
import { MemojiAvatar } from "@/components/ui/MemojiAvatar";

export function StudioTestimonials() {
  const [filter, setFilter] = useState<"all" | "verified" | "hinglish" | "english">("all");

  // Dynamically calculate average from genuine reviews
  const genuineReviews = useMemo(
    () => clientReviews.filter((r) => r.isVerified),
    []
  );

  const dynamicAverage = useMemo(() => {
    if (genuineReviews.length === 0) return "5.0";
    const sum = genuineReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / genuineReviews.length).toFixed(1);
  }, [genuineReviews]);

  // Filtered reviews
  const displayedReviews = useMemo(() => {
    if (filter === "verified") {
      return clientReviews.filter((r) => r.isVerified);
    }
    if (filter === "hinglish") {
      return clientReviews.filter((r) =>
        r.reviewText.includes("bohot") ||
        r.reviewText.includes("fark") ||
        r.reviewText.includes("milta") ||
        r.reviewText.includes("hua")
      );
    }
    if (filter === "english") {
      return clientReviews.filter(
        (r) =>
          !r.reviewText.includes("bohot") &&
          !r.reviewText.includes("fark") &&
          !r.reviewText.includes("milta") &&
          !r.reviewText.includes("hua")
      );
    }
    return clientReviews;
  }, [filter]);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#EDE7DA]">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span className="text-[#B88D44] font-bold">06 // CLIENT REVIEWS &amp; AUDIT</span>
              </div>

              <h2
                id="reviews-heading"
                className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#191E1B] leading-tight"
              >
                Real words.{" "}
                <span className="font-serif italic font-normal text-[#B88D44]">
                  Real partnerships.
                </span>
              </h2>

              <p className="mt-3 text-base sm:text-lg text-[#68716B] leading-relaxed">
                Feedback from brands and businesses we&apos;ve worked with.
              </p>
            </Reveal>
          </div>

          {/* Dynamic Overall Rating Summary Box */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EDE7DA] shadow-[0_4px_24px_rgba(184,141,68,0.08)]">
              {/* Average Score */}
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl font-bold text-[#191E1B]">
                  {dynamicAverage}
                </span>
                <span className="text-xs font-mono text-[#8A948E]">/ 5.0</span>
              </div>

              <div className="h-10 w-px bg-[#EDE7DA] hidden sm:block" />

              {/* Star Rating & Verified Count */}
              <div>
                <div className="flex items-center gap-1 text-[#B88D44]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#B88D44] text-[#B88D44]"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mt-1 font-mono text-[11px] text-[#68716B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Average from {genuineReviews.length} verified client audits
                  </span>
                </div>
              </div>

              <div className="h-10 w-px bg-[#EDE7DA] hidden sm:block" />

              {/* Total Records Badge */}
              <div className="font-mono text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#EDE7DA] text-[#191E1B] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>{clientReviews.length} reviews cataloged</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Filter Controls Bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-[#68716B]">
            <Filter className="w-3.5 h-3.5 text-[#B88D44]" />
            <span className="font-bold text-[#191E1B]">FILTER REVIEWS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full transition-all font-semibold ${
                filter === "all"
                  ? "bg-[#191E1B] text-white shadow-xs"
                  : "bg-white border border-[#EDE7DA] text-[#68716B] hover:border-[#B88D44] hover:text-[#191E1B]"
              }`}
            >
              All Reviews ({clientReviews.length})
            </button>

            <button
              type="button"
              onClick={() => setFilter("verified")}
              className={`px-3.5 py-1.5 rounded-full transition-all font-semibold flex items-center gap-1.5 ${
                filter === "verified"
                  ? "bg-emerald-800 text-white shadow-xs"
                  : "bg-white border border-[#EDE7DA] text-[#68716B] hover:border-emerald-600 hover:text-emerald-700"
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Verified Clients ({genuineReviews.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter("hinglish")}
              className={`px-3.5 py-1.5 rounded-full transition-all font-semibold ${
                filter === "hinglish"
                  ? "bg-[#B88D44] text-white shadow-xs"
                  : "bg-white border border-[#EDE7DA] text-[#68716B] hover:border-[#B88D44] hover:text-[#191E1B]"
              }`}
            >
              Hinglish Feedback
            </button>

            <button
              type="button"
              onClick={() => setFilter("english")}
              className={`px-3.5 py-1.5 rounded-full transition-all font-semibold ${
                filter === "english"
                  ? "bg-[#B88D44] text-white shadow-xs"
                  : "bg-white border border-[#EDE7DA] text-[#68716B] hover:border-[#B88D44] hover:text-[#191E1B]"
              }`}
            >
              English Feedback
            </button>
          </div>
        </div>

        {/* 10–20 Card Masonry Wall */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="break-inside-avoid mb-5 group relative rounded-3xl border border-[#EDE7DA] bg-white p-6 sm:p-7 transition-all duration-300 ease-out shadow-[0_4px_24px_rgba(184,141,68,0.06),0_1px_3px_rgba(25,30,27,0.04)] hover:-translate-y-1.5 hover:border-[#B88D44]/60 hover:shadow-[0_14px_36px_rgba(184,141,68,0.18),0_4px_12px_rgba(25,30,27,0.06)]"
            >
              {/* Top Row: Avatar + Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <MemojiAvatar
                    avatarId={review.avatarId}
                    name={review.name}
                    size="md"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-heading text-sm sm:text-base font-bold text-[#191E1B] leading-tight truncate">
                        {review.name}
                      </h4>
                      {review.isVerified && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-mono font-bold text-emerald-700 border border-emerald-200/80 shrink-0"
                          title="Verified Client of Mad Monkey Media"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      )}
                      {review.isDemoPlaceholder && (
                        <span
                          className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-[#FAF7F2] text-[9px] font-mono text-[#8A948E] border border-[#EDE7DA] shrink-0"
                          title="Editable Feedback Slot"
                        >
                          Slot
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-mono text-[#68716B] truncate mt-0.5">
                      {review.role ? `${review.role} • ` : ""}
                      {review.business || review.industry}
                    </p>
                  </div>
                </div>
              </div>

              {/* Star Rating Visual */}
              <div className="flex items-center gap-1 mt-3.5 text-[#B88D44]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#B88D44] text-[#B88D44]"
                  />
                ))}
              </div>

              {/* Review Quote Body */}
              <p className="mt-3.5 text-xs sm:text-[13px] text-[#191E1B] leading-relaxed font-sans">
                &ldquo;{review.reviewText}&rdquo;
              </p>

              {/* Card Footer: Industry Tag & Verification Date */}
              <div className="mt-5 pt-3.5 border-t border-[#EDE7DA]/80 flex items-center justify-between text-[10px] font-mono text-[#8A948E]">
                <span className="uppercase tracking-wider truncate max-w-[65%]">
                  {review.industry}
                </span>
                <span
                  className={
                    review.isVerified
                      ? "text-[#B88D44] font-semibold shrink-0"
                      : "text-[#8A948E] shrink-0"
                  }
                >
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout / Assurance Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#EDE7DA] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-[#68716B]">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#EDE7DA] flex items-center justify-center text-[#B88D44] shrink-0">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
            <span>
              All partner feedback collected directly from active content retainers &amp; post-delivery sign-offs.
            </span>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-5 py-2.5 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <span>Partner With Us</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

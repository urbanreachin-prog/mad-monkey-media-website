"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/motion/Reveal";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  rating: number;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Singhania",
    role: "Founder & Creative Director",
    company: "Singhania Fine Jewellery",
    initials: "VS",
    avatarBg: "bg-[#103C32]",
    avatarText: "text-[#D3B45F]",
    rating: 5,
    highlight: "Generated 3.2M organic views in our first 30 days",
    quote:
      "Mad Monkey Media completely overhauled our social presence. Their vertical reels transformed our fine jewellery showroom into a nationally recognized viral brand. Their 24-48h turnaround time is unheard of in this industry.",
  },
  {
    id: "2",
    name: "Dr. Ananya Roy",
    role: "Head of Marketing",
    company: "Aura Healthcare & Aesthetics",
    initials: "AR",
    avatarBg: "bg-emerald-700",
    avatarText: "text-white",
    rating: 5,
    highlight: "Inquiries skyrocketed by 240%",
    quote:
      "Medical and aesthetic content requires extreme precision and taste. The team produced clinical yet deeply engaging educational reels that established our doctors as trusted authorities across India.",
  },
  {
    id: "3",
    name: "Karan Mehta",
    role: "Co-Founder",
    company: "IronForge Elite Fitness",
    initials: "KM",
    avatarBg: "bg-[#171C19]",
    avatarText: "text-amber-400",
    rating: 5,
    highlight: "Sold out 150 annual gym memberships in 2 weeks",
    quote:
      "Their pacing, kinetic typography, and sound design make our gym promotional edits feel like Nike commercial spots. The retention on our Instagram reels is consistently over 85%.",
  },
  {
    id: "4",
    name: "Pooja Desai",
    role: "Executive Producer",
    company: "The Unfiltered Tech Podcast",
    initials: "PD",
    avatarBg: "bg-indigo-700",
    avatarText: "text-white",
    rating: 5,
    highlight: "From 5K to 180K followers in 4 months",
    quote:
      "We record multi-cam episodes and Mad Monkey Media turns them into 8 viral short-form clips within 24 hours. Their hook selection and subtitle animations are absolute genius.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toastVisible, setToastVisible] = useState(true);
  const [toastIndex, setToastIndex] = useState(0);

  const notifications = [
    { name: "Rahul S. from Bangalore", action: "just booked a Growth Retainer", time: "3m ago" },
    { name: "Meera K. from Mumbai", action: "approved a 12-Reel Sprint", time: "8m ago" },
    { name: "Amit P. from Delhi NCR", action: "scheduled a Strategy Discovery Call", time: "14m ago" },
  ];

  // Rotate social proof toast periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % notifications.length);
      setToastVisible(true);
    }, 12000);
    return () => clearInterval(timer);
  }, [notifications.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D3B45F]" />
              <span>TESTIMONIALS & CASE PROOF</span>
            </div>
            <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
              What Our Brand Partners Say.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6E7771]">
              Hear directly from founders and marketing executives who trusted Mad Monkey Media with their creative vision.
            </p>
          </Reveal>
        </div>

        {/* Big Testimonial Card (EditoHub Reference 5) */}
        <Reveal delay={0.1}>
          <div className="relative rounded-3xl border border-[#103C32]/12 bg-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(16,60,50,0.06)] overflow-hidden">
            {/* Giant Background Quote Watermark */}
            <Quote className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 text-[#103C32]/5 pointer-events-none" />

            <div className="relative z-10">
              {/* Star Rating & Highlight Pill */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                  ))}
                  <span className="ml-2 text-xs font-heading font-bold text-[#103C32]">
                    5.0 / 5.0 VERIFIED REVIEW
                  </span>
                </div>

                <span className="rounded-full bg-[#103C32]/10 border border-[#103C32]/15 px-3.5 py-1 text-xs font-mono font-bold text-[#103C32]">
                  {current.highlight}
                </span>
              </div>

              {/* Main Testimonial Quote */}
              <blockquote className="mt-8 font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#103C32] leading-snug">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Info & Navigation Controls */}
              <div className="mt-10 pt-8 border-t border-[#103C32]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  {/* Initials Avatar */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-heading text-base font-bold shadow-md ${current.avatarBg} ${current.avatarText}`}
                  >
                    {current.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-base font-bold text-[#171C19]">
                        {current.name}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Client
                      </span>
                    </div>
                    <p className="text-xs text-[#6E7771] mt-0.5">
                      {current.role} &bull; <strong className="text-[#103C32]">{current.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Previous / Next Arrow Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-11 h-11 rounded-full border border-[#103C32]/20 bg-white hover:bg-[#F5F2E9] text-[#103C32] flex items-center justify-center transition-all shadow-sm active:scale-95"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5 px-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          currentIndex === idx
                            ? "w-6 bg-[#D3B45F]"
                            : "w-2 bg-[#103C32]/20 hover:bg-[#103C32]/40"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-11 h-11 rounded-full border border-[#103C32]/20 bg-white hover:bg-[#F5F2E9] text-[#103C32] flex items-center justify-center transition-all shadow-sm active:scale-95"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Live Social Proof Toast (EditoHub Reference 5 bottom-left notification) */}
      {toastVisible && (
        <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 rounded-2xl border border-[#103C32]/15 bg-white/95 backdrop-blur-xl p-4 shadow-[0_16px_40px_rgba(16,60,50,0.15)] animate-in slide-in-from-bottom-5 duration-300 max-w-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <div className="text-xs">
            <span className="font-bold text-[#103C32]">
              {notifications[toastIndex].name}
            </span>{" "}
            <span className="text-[#6E7771]">
              {notifications[toastIndex].action}
            </span>{" "}
            <span className="text-[10px] text-emerald-700 font-mono font-semibold">
              &bull; {notifications[toastIndex].time}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setToastVisible(false)}
            className="text-[#6E7771] hover:text-[#103C32] p-1 ml-auto"
            aria-label="Dismiss toast"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  );
}

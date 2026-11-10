"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TrendingUp, Users, Video, Clock } from "lucide-react";

const stats = [
  {
    number: "200M+",
    label: "Organic Views Delivered",
    subtext: "Across Instagram, YouTube & Meta Ads",
    icon: TrendingUp,
    accent: "text-[#D3B45F]",
  },
  {
    number: "80+",
    label: "Brand Partners Scaled",
    subtext: "E-Commerce, D2C, Healthcare & Luxury",
    icon: Users,
    accent: "text-[#A9DCD0]",
  },
  {
    number: "26+",
    label: "Masterpiece Reels Produced",
    subtext: "Verified short-form archive",
    icon: Video,
    accent: "text-[#D3B45F]",
  },
  {
    number: "24-48h",
    label: "First Cut Sprint Delivery",
    subtext: "Industry-leading production speed",
    icon: Clock,
    accent: "text-emerald-400",
  },
];

export function StatsBar() {
  return (
    <section className="bg-[#103C32] text-[#F5F2E9] py-12 sm:py-16 border-y border-[#103C32]/40 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="pointer-events-none absolute inset-0 edito-deepgreen-pattern opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 0.08}>
                <div className="pt-6 sm:pt-0 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 rounded-lg bg-white/10 border border-white/15">
                      <Icon className={`w-4 h-4 ${stat.accent}`} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A9DCD0]">
                      METRIC 0{idx + 1}
                    </span>
                  </div>

                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-sm sm:text-base font-heading font-semibold text-[#F5F2E9]">
                    {stat.label}
                  </div>

                  <div className="mt-1 text-xs text-[#A9DCD0]/70">
                    {stat.subtext}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

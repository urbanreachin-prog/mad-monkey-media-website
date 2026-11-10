"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ArrowUpRight,
  Flame,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { portfolioItems, PortfolioItem, formatPortfolioViews } from "@/data/projects";

const filterCategories = [
  "All",
  "Fitness & Wellness",
  "Healthcare",
  "Podcast Trailer",
  "Gym Promotion",
  "Agency Edit",
] as const;

export function ReelsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Pick top reels and apply filter
  const displayedItems = portfolioItems.filter((item) => {
    if (selectedFilter === "All") return true;
    const title = (item.title || "").toLowerCase();
    const filename = (item.filename || "").toLowerCase();
    if (selectedFilter === "Fitness & Wellness") {
      return title.includes("fitness") || filename.includes("fitness");
    }
    if (selectedFilter === "Healthcare") {
      return title.includes("healthcare") || filename.includes("healthcare") || filename.includes("medical");
    }
    if (selectedFilter === "Podcast Trailer") {
      return title.includes("podcast") || filename.includes("podcast");
    }
    if (selectedFilter === "Gym Promotion") {
      return title.includes("gym") || filename.includes("gym");
    }
    if (selectedFilter === "Agency Edit") {
      return title.includes("mad monkey") || filename.includes("mad monkey");
    }
    return true;
  }).slice(0, 8);

  const handleOpenModal = (item: PortfolioItem) => {
    setActiveModalItem(item);
    setModalPlaying(true);
    setModalMuted(false);
  };

  const handleCloseModal = () => {
    setActiveModalItem(null);
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setModalPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setModalPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setModalMuted(modalVideoRef.current.muted);
  };

  return (
    <section id="work" className="bg-[#FAF8F3] text-[#171C19] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#103C32]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#103C32]/10">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#103C32]/15 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#103C32] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#D3B45F]" />
                <span>9:16 VERTICAL REELS SHOWCASE</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#103C32] uppercase">
                Content That Stops The Scroll.
              </h2>
              <p className="mt-3 max-w-xl text-base text-[#6E7771]">
                High-converting vertical reels engineered with psychological hooks, filmic color grading, and surgical audio pacing.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#103C32] hover:bg-[#0B2822] text-[#F5F2E9] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Explore All 26 Masterpieces</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Filter Pills (EditoHub Style) */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filterCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedFilter(category)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-heading font-bold transition-all ${
                selectedFilter === category
                  ? "bg-[#D3B45F] text-[#103C32] shadow-sm"
                  : "bg-white border border-[#103C32]/12 text-[#6E7771] hover:text-[#103C32] hover:border-[#103C32]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Cards Grid (EditoHub Reference 2) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, idx) => {
            const viewsDisplay = formatPortfolioViews(item.views);

            return (
              <Reveal key={item.id} delay={(idx % 4) * 0.08}>
                <div
                  onClick={() => handleOpenModal(item)}
                  className="group cursor-pointer relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-[#103C32]/10 shadow-[0_12px_36px_rgba(16,60,50,0.08)] hover:shadow-[0_20px_50px_rgba(16,60,50,0.18)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Real Frame Thumbnail */}
                  <Image
                    src={item.thumbnail}
                    alt={item.title || item.filename}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Darkening Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#103C32] shadow-sm">
                      {item.category}
                    </span>

                    {viewsDisplay && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#103C32]/90 border border-[#D3B45F]/40 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold text-[#D3B45F] shadow-sm">
                        <Flame className="w-3 h-3 text-amber-400" />
                        <span>{viewsDisplay}</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#103C32] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D3B45F]">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <h3 className="font-heading text-base font-bold text-white line-clamp-1 leading-snug">
                      {item.title || item.filename.replace(/\.mp4$/i, "")}
                    </h3>
                    {item.description && (
                      <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA to /work */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#103C32] hover:text-[#D3B45F] transition-colors underline underline-offset-4 decoration-[#D3B45F]"
          >
            <span>Click here to explore the full 26-video portfolio in Grid / List view</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Theater Modal for Fullscreen Reel Playback */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[90vh] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Video Element */}
            <video
              ref={modalVideoRef}
              src={activeModalItem.video}
              poster={activeModalItem.thumbnail}
              playsInline
              autoPlay
              controls={false}
              loop
              muted={modalMuted}
              className="w-full h-full object-contain bg-black"
            />

            {/* Top Close Button & Title */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <span className="rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold text-white border border-white/15">
                {activeModalItem.title || activeModalItem.filename.replace(/\.mp4$/i, "")}
              </span>

              <button
                type="button"
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleModalPlay}
                  className="w-10 h-10 rounded-full bg-[#103C32] hover:bg-[#0B2822] text-white flex items-center justify-center border border-white/20 shadow-md"
                  aria-label={modalPlaying ? "Pause" : "Play"}
                >
                  {modalPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  type="button"
                  onClick={toggleModalMute}
                  className="w-10 h-10 rounded-full bg-[#103C32] hover:bg-[#0B2822] text-white flex items-center justify-center border border-white/20 shadow-md"
                  aria-label={modalMuted ? "Unmute" : "Mute"}
                >
                  {modalMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <Link
                href="/contact"
                className="rounded-full bg-[#D3B45F] hover:bg-[#C4A247] px-4 py-2 text-xs font-bold text-[#103C32] uppercase tracking-wider shadow-md"
              >
                Book This Style
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

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

export function StudioReelVault() {
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [modalMuted, setModalMuted] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const flagshipReel = portfolioItems[0];
  const complementaryReels = portfolioItems.slice(1, 5);

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
    <section className="bg-[#F6F2E9] text-[#191E1B] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE7DA] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#EDE7DA]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EDE7DA] bg-white px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#68716B] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#B88D44]" />
                <span className="text-[#B88D44] font-bold">05 // THE VAULT [26-REEL ARCHIVE]</span>
              </div>
              <h2 className="mt-5 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#191E1B] leading-tight">
                Curated vertical{" "}
                <span className="font-serif italic font-normal text-[#B88D44]">cinema reels.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-[#68716B]">
                Real campaigns engineered for high retention, viral organic reach, and measurable brand authority.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-[#B88D44] hover:bg-[#A37B35] text-white px-7 py-3.5 text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(184,141,68,0.3)] hover:-translate-y-0.5"
            >
              <span>Explore All 26 Reels</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric Exhibition Layout (5 cols Flagship vs 7 cols Lookbook Grid) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Flagship Featured Reel (5 cols) */}
          {flagshipReel && (
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <div
                  onClick={() => handleOpenModal(flagshipReel)}
                  className="group cursor-pointer rounded-3xl border-2 border-[#191E1B] bg-[#111513] p-4 shadow-[0_20px_50px_rgba(25,30,27,0.18)] hover:border-[#B88D44] transition-all"
                >
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-[11px] font-mono text-[#8A948E]">
                    <span className="text-[#D4AF67] font-bold">★ FLAGSHIP REEL // 01</span>
                    <span className="text-white/80">4K MASTER</span>
                  </div>

                  <div className="relative aspect-[9/15] w-full rounded-2xl overflow-hidden bg-black mt-3">
                    <Image
                      src={flagshipReel.thumbnail}
                      alt={flagshipReel.title || flagshipReel.filename}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-white/20">
                        {flagshipReel.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#B88D44] px-3 py-1 text-[10px] font-mono font-bold text-white shadow-md">
                        <Flame className="w-3 h-3" />
                        <span>200M+ VIEWS</span>
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-[#191E1B] backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#B88D44] group-hover:text-white transition-all">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                        {flagshipReel.title || flagshipReel.filename}
                      </h3>
                      {flagshipReel.description && (
                        <p className="mt-1 text-xs text-white/80 line-clamp-2">
                          {flagshipReel.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 px-2 flex items-center justify-between text-[11px] font-mono text-[#8A948E]">
                    <span>CLICK TO PLAY THEATER MASTER</span>
                    <span className="text-[#D4AF67] font-bold">200M+ AUDITED</span>
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Staggered Curated Lookbook (7 cols in 2x2 asymmetric format) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {complementaryReels.map((item, idx) => {
                const viewsDisplay = formatPortfolioViews(item.views);
                return (
                  <Reveal key={item.id} delay={0.1 + idx * 0.06}>
                    <div
                      onClick={() => handleOpenModal(item)}
                      className="group cursor-pointer rounded-3xl border border-[#EDE7DA] bg-white p-3.5 shadow-xs hover:border-[#B88D44]/60 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-[9/14] w-full rounded-2xl overflow-hidden bg-black">
                        <Image
                          src={item.thumbnail}
                          alt={item.title || item.filename}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white border border-white/20">
                            {item.category}
                          </span>
                          {viewsDisplay && (
                            <span className="rounded-full bg-[#B88D44] px-2 py-0.5 text-[9px] font-mono font-bold text-white shadow-xs">
                              {viewsDisplay}
                            </span>
                          )}
                        </div>

                        {/* Center Mini Play Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-white text-[#191E1B] flex items-center justify-center shadow-md">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Bottom Title */}
                        <div className="absolute bottom-3 left-3 right-3 z-10">
                          <h4 className="font-heading text-sm font-bold text-white line-clamp-1">
                            {item.title || item.filename}
                          </h4>
                          {item.description && (
                            <p className="text-[10px] text-white/80 line-clamp-1 mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 px-1 flex items-center justify-between text-[10px] font-mono text-[#8A948E]">
                        <span>REEL ARCHIVE // 0{idx + 2}</span>
                        <span className="text-[#B88D44] font-bold group-hover:underline">PLAY REEL &rarr;</span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Full-Screen Theater Modal */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-sm sm:max-w-md w-full bg-[#111513] border-2 border-[#B88D44] rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-white font-bold truncate max-w-[200px]">
                    {activeModalItem.title || activeModalItem.filename}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Video Player */}
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black mt-3">
                <video
                  ref={modalVideoRef}
                  src={activeModalItem.video}
                  poster={activeModalItem.thumbnail}
                  playsInline
                  autoPlay
                  loop
                  muted={modalMuted}
                  className="w-full h-full object-cover"
                />

                {/* Floating Bottom Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleModalPlay}
                      className="w-9 h-9 rounded-full bg-white text-[#191E1B] flex items-center justify-center shadow-lg hover:scale-105 transition-all"
                      aria-label={modalPlaying ? "Pause" : "Play"}
                    >
                      {modalPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={toggleModalMute}
                      className="w-9 h-9 rounded-full bg-white text-[#191E1B] flex items-center justify-center shadow-lg hover:scale-105 transition-all"
                      aria-label={modalMuted ? "Unmute" : "Mute"}
                    >
                      {modalMuted ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-[#B88D44]" />}
                    </button>
                  </div>

                  <Link
                    href={`/work/${activeModalItem.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white bg-black/60 hover:bg-black/80 px-3 py-1.5 rounded-full border border-white/20 transition-colors"
                  >
                    <span>VIEW DOSSIER</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-3 pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-[#8A948E]">
                <span>CATEGORY: {activeModalItem.category}</span>
                <span className="text-[#D4AF67] font-bold">MAD MONKEY MASTER</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

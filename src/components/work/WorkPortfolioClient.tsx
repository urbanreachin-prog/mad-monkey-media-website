"use client";

import React, { useCallback, useState } from "react";
import {
  ProjectCategory,
  getActivePortfolioCategories,
  getPortfolioItemsByCategory,
} from "@/data/projects";
import { PortfolioVideoCard } from "@/components/work/PortfolioVideoCard";

export function WorkPortfolioClient() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All"
  );
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const categories = getActivePortfolioCategories();
  const filteredItems = getPortfolioItemsByCategory(activeCategory);

  const handleCategoryChange = (category: "All" | ProjectCategory) => {
    setActiveCategory(category);
    setActiveVideoId(null);
  };

  const handleActivateVideo = useCallback((id: string) => {
    setActiveVideoId(id);
  }, []);

  const handleDeactivateVideo = useCallback((id: string) => {
    setActiveVideoId((prev) => (prev === id ? null : prev));
  }, []);

  return (
    <div>
      {/* Compact Category Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-7 border-b border-studio-cream/10">
        <div
          role="tablist"
          aria-label="Filter portfolio videos by category"
          className="flex flex-wrap items-center gap-2"
        >
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            const count = getPortfolioItemsByCategory(category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryChange(category)}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold tracking-[0.04em] transition-all duration-200 ${
                  isSelected
                    ? "bg-studio-lime text-studio-ink shadow-[0_0_20px_rgba(216,255,62,0.22)]"
                    : "border border-studio-cream/12 bg-studio-charcoalDeep/90 text-studio-muted hover:border-studio-cream/30 hover:text-studio-cream"
                }`}
              >
                {isSelected && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-studio-ink"
                    aria-hidden="true"
                  />
                )}
                <span>{category}</span>
                <span
                  className={`text-[11px] font-mono ${
                    isSelected ? "text-studio-ink/75" : "text-studio-muted/75"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono uppercase tracking-[0.14em] text-studio-muted shrink-0">
          Showing{" "}
          <span className="text-studio-lime font-bold">
            {filteredItems.length}
          </span>{" "}
          {filteredItems.length === 1 ? "Reel" : "Reels"}
        </div>
      </div>

      {/* Portrait 9:16 Responsive Video Grid */}
      {filteredItems.length > 0 ? (
        <div className="mt-8 sm:mt-10 grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-start">
          {filteredItems.map((item, index) => (
            <PortfolioVideoCard
              key={item.id}
              item={item}
              isActive={activeVideoId === item.id}
              onActivate={handleActivateVideo}
              onDeactivate={handleDeactivateVideo}
              priority={index < 4}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-studio-cream/12 bg-studio-charcoalDeep p-10 text-center">
          <p className="font-heading text-lg font-bold text-studio-cream">
            No videos found in {activeCategory}.
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-studio-muted max-w-md mx-auto">
            Select &ldquo;All&rdquo; to browse the complete portfolio archive.
          </p>
          <button
            type="button"
            onClick={() => handleCategoryChange("All")}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-studio-lime px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-studio-ink hover:bg-studio-cream transition-colors"
          >
            Show All Work
          </button>
        </div>
      )}
    </div>
  );
}

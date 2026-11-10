"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Film,
  Smartphone,
  Camera,
  Code2,
  UserCheck,
  Play,
  Share2,
  TrendingUp,
  X,
  Sparkles,
} from "lucide-react";

interface ActivityItem {
  id: string;
  actor: string;
  action: string;
  target: string;
  timeAgo: string;
  highlight?: string;
  iconType:
    | "video-editing"
    | "ugc-videos"
    | "book-shoot"
    | "web-dev"
    | "personal-branding"
    | "youtube-editing"
    | "social-media"
    | "meta-ads";
}

const activityPool: ActivityItem[] = [
  {
    id: "act-1",
    actor: "Aarav Mehta from Mumbai",
    action: "is exploring",
    target: "Video Editing retainers",
    timeAgo: "2m ago",
    highlight: "Popular Choice",
    iconType: "video-editing",
  },
  {
    id: "act-2",
    actor: "Direct-to-consumer apparel brand",
    action: "is reviewing",
    target: "UGC Videos for product campaigns",
    timeAgo: "4m ago",
    highlight: "Trending",
    iconType: "ugc-videos",
  },
  {
    id: "act-3",
    actor: "Founder from Bengaluru",
    action: "is interested in",
    target: "Book a Shoot multi-cam production",
    timeAgo: "6m ago",
    highlight: "Studio & Location",
    iconType: "book-shoot",
  },
  {
    id: "act-4",
    actor: "Kavita S. from New Delhi",
    action: "is exploring",
    target: "Website Development architectures",
    timeAgo: "8m ago",
    highlight: "Fast Turnaround",
    iconType: "web-dev",
  },
  {
    id: "act-5",
    actor: "Executive from Gurgaon",
    action: "is reviewing",
    target: "Personal Branding video series",
    timeAgo: "10m ago",
    highlight: "Thought Leadership",
    iconType: "personal-branding",
  },
  {
    id: "act-6",
    actor: "Devansh Kapoor from Pune",
    action: "is exploring",
    target: "YouTube Video Editing packages",
    timeAgo: "12m ago",
    highlight: "Long-Form Pacing",
    iconType: "youtube-editing",
  },
  {
    id: "act-7",
    actor: "Lifestyle hospitality brand",
    action: "is interested in",
    target: "Social Media Management retainers",
    timeAgo: "15m ago",
    highlight: "Cohesive Grid",
    iconType: "social-media",
  },
  {
    id: "act-8",
    actor: "Priya Nair from Chennai",
    action: "is reviewing",
    target: "Meta Ads Creatives with high-CTR hooks",
    timeAgo: "18m ago",
    highlight: "Paid Social",
    iconType: "meta-ads",
  },
  {
    id: "act-9",
    actor: "Studio Milestone:",
    action: "24–48h first-cut delivery sprint",
    target: "is a popular choice for vertical reels",
    timeAgo: "Just now",
    highlight: "Rapid Velocity",
    iconType: "ugc-videos",
  },
  {
    id: "act-10",
    actor: "Luxury fine jewellery label",
    action: "is exploring",
    target: "Commercial Video Editing & color science",
    timeAgo: "21m ago",
    highlight: "4K Cinema Grade",
    iconType: "video-editing",
  },
  {
    id: "act-11",
    actor: "Siddharth Verma from Hyderabad",
    action: "is interested in",
    target: "Book a Shoot creative direction",
    timeAgo: "24m ago",
    highlight: "Lighting & Framing",
    iconType: "book-shoot",
  },
  {
    id: "act-12",
    actor: "Fintech educational creator",
    action: "is exploring",
    target: "YouTube Video Editing & retention graphics",
    timeAgo: "27m ago",
    highlight: "Audience Retention",
    iconType: "youtube-editing",
  },
  {
    id: "act-13",
    actor: "Trending:",
    action: "Meta Ads Creative variations",
    target: "are frequently requested this week",
    timeAgo: "Active",
    highlight: "High ROAS Focus",
    iconType: "meta-ads",
  },
  {
    id: "act-14",
    actor: "Ananya Roy from Kolkata",
    action: "is reviewing",
    target: "Social Media Management & weekly publishing",
    timeAgo: "30m ago",
    highlight: "Consistency",
    iconType: "social-media",
  },
  {
    id: "act-15",
    actor: "D2C skincare brand",
    action: "is exploring",
    target: "UGC Videos & aesthetic unboxing reels",
    timeAgo: "34m ago",
    highlight: "High Engagement",
    iconType: "ugc-videos",
  },
  {
    id: "act-16",
    actor: "Rohan Singhal from Ahmedabad",
    action: "is interested in",
    target: "Website Development & portfolio showcase",
    timeAgo: "38m ago",
    highlight: "Bespoke Design",
    iconType: "web-dev",
  },
  {
    id: "act-17",
    actor: "Automotive detailing bay",
    action: "is reviewing",
    target: "Video Editing with kinetic sound foley",
    timeAgo: "42m ago",
    highlight: "Sound Design",
    iconType: "video-editing",
  },
  {
    id: "act-18",
    actor: "Clinical healthcare specialist",
    action: "is exploring",
    target: "Personal Branding thought-leadership clips",
    timeAgo: "46m ago",
    highlight: "Authority Content",
    iconType: "personal-branding",
  },
];

function getIcon(type: ActivityItem["iconType"]) {
  switch (type) {
    case "video-editing":
      return Film;
    case "ugc-videos":
      return Smartphone;
    case "book-shoot":
      return Camera;
    case "web-dev":
      return Code2;
    case "personal-branding":
      return UserCheck;
    case "youtube-editing":
      return Play;
    case "social-media":
      return Share2;
    case "meta-ads":
      return TrendingUp;
    default:
      return Sparkles;
  }
}

/**
 * Floating promotional activity notification system.
 * - Robust React 18 / Next.js lifecycle.
 * - Random interval between 8-14s.
 * - Visible for 4-5s.
 * - Deduplication per session: never repeats the same name twice.
 * - High z-index (z-[99]) positioned in bottom-left.
 */
export function ActivityNotification() {
  const [currentNotification, setCurrentNotification] = useState<ActivityItem>(activityPool[0]);
  const [isVisible, setIsVisible] = useState(false);
  const queueRef = useRef<ActivityItem[]>([]);
  const shownNamesRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // 1. Recover any shown names from this session
    let sessionShown: string[] = [];
    try {
      const stored = sessionStorage.getItem("mmm_shown_notification_names");
      if (stored) {
        sessionShown = JSON.parse(stored);
      }
    } catch {
      sessionShown = [];
    }

    sessionShown.forEach((name) => shownNamesRef.current.add(name));

    // 2. Build and shuffle unshown items
    const buildQueue = () => {
      let unshown = activityPool.filter((item) => !shownNamesRef.current.has(item.actor));
      // If all have been shown in this session, reset tracker so it rotates continuously
      if (unshown.length === 0) {
        shownNamesRef.current.clear();
        try {
          sessionStorage.removeItem("mmm_shown_notification_names");
        } catch {
          // ignore
        }
        unshown = [...activityPool];
      }

      // Fisher-Yates shuffle
      const shuffled = [...unshown];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    queueRef.current = buildQueue();

    let displayTimer: NodeJS.Timeout | null = null;
    let nextTimer: NodeJS.Timeout | null = null;
    let isMounted = true;

    const showNext = () => {
      if (!isMounted) return;

      if (queueRef.current.length === 0) {
        queueRef.current = buildQueue();
      }

      const nextItem = queueRef.current.shift();
      if (!nextItem) return;

      // Mark this actor name as shown in this session
      shownNamesRef.current.add(nextItem.actor);
      try {
        sessionStorage.setItem(
          "mmm_shown_notification_names",
          JSON.stringify(Array.from(shownNamesRef.current))
        );
      } catch {
        // ignore
      }

      setCurrentNotification(nextItem);
      setIsVisible(true);

      // Keep visible for 4.5 seconds (4–5 seconds)
      displayTimer = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);

        // Next popup after random interval between 8 and 14 seconds
        const randomInterval = Math.floor(8000 + Math.random() * 6000);
        nextTimer = setTimeout(showNext, randomInterval);
      }, 4500);
    };

    // First notification appears after random interval of 8–14 seconds after page load
    const initialDelay = Math.floor(8000 + Math.random() * 6000);
    nextTimer = setTimeout(showNext, initialDelay);

    return () => {
      isMounted = false;
      if (displayTimer) clearTimeout(displayTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const IconComponent = getIcon(currentNotification.iconType);
  const isPlay = currentNotification.iconType === "youtube-editing";

  return (
    <aside
      aria-label="Live Activity Notification"
      className={`fixed bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-[99] max-w-[360px] transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-md border border-[#EDE7DA] p-3.5 sm:p-4 shadow-[0_16px_40px_rgba(25,30,27,0.14),0_4px_16px_rgba(184,141,68,0.14)]">
        {/* Top Header: Activity indicator & Close */}
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-[#68716B] mb-2">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-bold text-[#191E1B] tracking-wider uppercase">
              STUDIO ACTIVITY
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#8A948E] text-[10px]">{currentNotification.timeAgo}</span>
            <button
              type="button"
              onClick={handleDismiss}
              className="text-[#8A948E] hover:text-[#191E1B] p-0.5 rounded transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FAF7F2] to-[#F2EDE4] border border-[#EDE7DA] flex items-center justify-center text-[#B88D44] shrink-0 mt-0.5 shadow-xs">
            <IconComponent
              className={`w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] ${
                isPlay ? "fill-current ml-0.5" : ""
              }`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs text-[#191E1B] font-medium leading-snug">
              <span className="font-bold text-[#191E1B]">
                {currentNotification.actor}
              </span>{" "}
              <span className="text-[#68716B]">{currentNotification.action}</span>{" "}
              <span className="font-semibold text-[#B88D44]">
                {currentNotification.target}
              </span>
            </p>

            {currentNotification.highlight && (
              <span className="inline-flex items-center gap-1 mt-1.5 text-[9px] font-mono font-bold text-[#B88D44] bg-[#B88D44]/10 px-2 py-0.5 rounded-full">
                ✦ {currentNotification.highlight}
              </span>
            )}
          </div>
        </div>

        {/* Subtle animated progress line indicating remaining visible time */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B88D44] to-[#10B981] origin-left transition-all duration-[4500ms] ease-linear ${
            isVisible ? "scale-x-0" : "scale-x-100"
          }`}
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}

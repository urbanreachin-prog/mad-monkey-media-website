"use client";

import React from "react";

interface MemojiAvatarProps {
  avatarId: string;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * iOS Memoji-inspired illustrated circular avatars.
 * Clean, lightweight, self-contained vector SVGs with diverse styles,
 * warm neutral backgrounds, and friendly studio expressions.
 */
export function MemojiAvatar({
  avatarId,
  name,
  className = "",
  size = "md",
}: MemojiAvatarProps) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  }[size];

  // Distinct background tones and illustration styles for each avatarId
  switch (avatarId) {
    case "male-glasses-fade":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EFEAE1] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Background */}
            <circle cx="50" cy="50" r="50" fill="#EFEAE1" />
            {/* Shoulders / Shirt */}
            <path d="M22 100 C22 78 78 78 78 100 Z" fill="#2E332F" />
            {/* Neck */}
            <path d="M43 65 L57 65 L57 78 L43 78 Z" fill="#E0AC69" />
            {/* Head */}
            <path
              d="M32 44 C32 30 68 30 68 44 C68 62 59 72 50 72 C41 72 32 62 32 44 Z"
              fill="#E0AC69"
            />
            {/* Hair (Fade Cut) */}
            <path
              d="M30 38 C30 22 70 20 70 38 C70 33 66 26 50 26 C34 26 30 33 30 38 Z"
              fill="#221C19"
            />
            <path
              d="M31 36 C31 28 40 24 50 24 C60 24 69 28 69 36 C67 30 60 27 50 27 C40 27 33 30 31 36 Z"
              fill="#181311"
            />
            {/* Glasses (Gold Wireframe) */}
            <rect
              x="36"
              y="45"
              width="11"
              height="8"
              rx="3"
              stroke="#B88D44"
              strokeWidth="2"
              fill="rgba(255,255,255,0.25)"
            />
            <rect
              x="53"
              y="45"
              width="11"
              height="8"
              rx="3"
              stroke="#B88D44"
              strokeWidth="2"
              fill="rgba(255,255,255,0.25)"
            />
            <line x1="47" y1="48" x2="53" y2="48" stroke="#B88D44" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="41.5" cy="49" r="1.5" fill="#1A1816" />
            <circle cx="58.5" cy="49" r="1.5" fill="#1A1816" />
            {/* Smile */}
            <path
              d="M45 61 Q50 66 55 61"
              stroke="#B36B39"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Groomed Stubble */}
            <path
              d="M40 64 Q50 71 60 64"
              stroke="#B5814C"
              strokeWidth="1.5"
              strokeDasharray="1 2"
              fill="none"
            />
          </svg>
        </div>
      );

    case "female-bun-chic":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#F2EDE4] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#F2EDE4" />
            {/* Bun */}
            <circle cx="50" cy="22" r="12" fill="#241B17" />
            {/* Shoulders */}
            <path d="M22 100 C22 80 78 80 78 100 Z" fill="#8C7E74" />
            {/* Neck */}
            <path d="M44 65 L56 65 L56 78 L44 78 Z" fill="#F1C27D" />
            {/* Head */}
            <path
              d="M33 44 C33 30 67 30 67 44 C67 62 58 71 50 71 C42 71 33 62 33 44 Z"
              fill="#F1C27D"
            />
            {/* Hair Front */}
            <path
              d="M31 40 C33 26 67 26 69 40 C67 32 58 30 50 30 C42 30 33 32 31 40 Z"
              fill="#241B17"
            />
            {/* Eyes */}
            <circle cx="42" cy="48" r="2" fill="#1F1B18" />
            <circle cx="58" cy="48" r="2" fill="#1F1B18" />
            {/* Lashes */}
            <path d="M40 45 Q42 43 45 45" stroke="#1F1B18" strokeWidth="1.2" fill="none" />
            <path d="M55 45 Q58 43 60 45" stroke="#1F1B18" strokeWidth="1.2" fill="none" />
            {/* Blush */}
            <circle cx="39" cy="55" r="3" fill="#E88B7B" opacity="0.35" />
            <circle cx="61" cy="55" r="3" fill="#E88B7B" opacity="0.35" />
            {/* Smile */}
            <path
              d="M45 59 Q50 64 55 59"
              stroke="#C06249"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Gold Earring */}
            <circle cx="32" cy="51" r="2.5" fill="#D4AF67" />
            <circle cx="68" cy="51" r="2.5" fill="#D4AF67" />
          </svg>
        </div>
      );

    case "male-beard-buzz":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EAE2D5] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#EAE2D5" />
            {/* Shirt */}
            <path d="M22 100 C22 76 78 76 78 100 Z" fill="#1E2320" />
            {/* Neck */}
            <path d="M42 64 L58 64 L58 78 L42 78 Z" fill="#D89A5B" />
            {/* Head */}
            <path
              d="M32 44 C32 30 68 30 68 44 C68 62 59 72 50 72 C41 72 32 62 32 44 Z"
              fill="#D89A5B"
            />
            {/* Buzz Cut */}
            <path
              d="M32 37 C34 26 66 26 68 37 C67 31 60 27 50 27 C40 27 33 31 32 37 Z"
              fill="#261E1A"
            />
            {/* Full Groomed Beard */}
            <path
              d="M33 54 C33 68 42 74 50 74 C58 74 67 68 67 54 C67 60 63 68 50 68 C37 68 33 60 33 54 Z"
              fill="#261E1A"
            />
            {/* Eyes */}
            <circle cx="42" cy="47" r="2" fill="#1C1816" />
            <circle cx="58" cy="47" r="2" fill="#1C1816" />
            {/* Eyebrows */}
            <line x1="39" y1="42" x2="45" y2="42" stroke="#261E1A" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="55" y1="42" x2="61" y2="42" stroke="#261E1A" strokeWidth="2.5" strokeLinecap="round" />
            {/* Smile */}
            <path
              d="M45 58 Q50 62 55 58"
              stroke="#FAF7F2"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      );

    case "female-wavy-earring":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EFECE6] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#EFECE6" />
            {/* Back Hair */}
            <path d="M26 44 C24 72 34 84 34 84 C34 84 66 84 66 84 C66 84 76 72 74 44 Z" fill="#2E231D" />
            {/* Shoulders */}
            <path d="M22 100 C22 80 78 80 78 100 Z" fill="#4A544C" />
            {/* Neck */}
            <path d="M43 65 L57 65 L57 78 L43 78 Z" fill="#F1C27D" />
            {/* Head */}
            <path
              d="M33 44 C33 30 67 30 67 44 C67 62 58 71 50 71 C42 71 33 62 33 44 Z"
              fill="#F1C27D"
            />
            {/* Wavy Front Hair */}
            <path
              d="M30 46 C30 26 70 26 70 46 C67 30 58 28 50 32 C42 28 33 30 30 46 Z"
              fill="#2E231D"
            />
            {/* Eyes */}
            <circle cx="42" cy="48" r="2" fill="#1C1816" />
            <circle cx="58" cy="48" r="2" fill="#1C1816" />
            {/* Warm Smile */}
            <path
              d="M45 59 Q50 65 55 59"
              stroke="#C06249"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Pearl Earring */}
            <circle cx="32" cy="52" r="3" fill="#FFFFFF" stroke="#EDE7DA" strokeWidth="1" />
            <circle cx="68" cy="52" r="3" fill="#FFFFFF" stroke="#EDE7DA" strokeWidth="1" />
          </svg>
        </div>
      );

    case "female-ponytail-minimal":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EBE5DA] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#EBE5DA" />
            {/* Ponytail Side Tail */}
            <path d="M64 36 C76 42 78 62 74 72 C70 60 68 48 64 36 Z" fill="#1C1715" />
            {/* Shoulders */}
            <path d="M22 100 C22 80 78 80 78 100 Z" fill="#2B3542" />
            <path d="M43 65 L57 65 L57 78 L43 78 Z" fill="#E0AC69" />
            <path
              d="M33 44 C33 30 67 30 67 44 C67 62 58 71 50 71 C42 71 33 62 33 44 Z"
              fill="#E0AC69"
            />
            <path
              d="M31 42 C33 28 67 28 69 42 C67 33 58 31 50 31 C42 31 33 33 31 42 Z"
              fill="#1C1715"
            />
            <circle cx="42" cy="48" r="2" fill="#1A1715" />
            <circle cx="58" cy="48" r="2" fill="#1A1715" />
            <path
              d="M45 59 Q50 64 55 59"
              stroke="#B36B39"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      );

    case "female-glasses-modern":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EDE7DD] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#EDE7DD" />
            {/* Shoulders */}
            <path d="M22 100 C22 78 78 78 78 100 Z" fill="#5A4F46" />
            <path d="M43 65 L57 65 L57 78 L43 78 Z" fill="#F1C27D" />
            <path
              d="M33 44 C33 30 67 30 67 44 C67 62 58 71 50 71 C42 71 33 62 33 44 Z"
              fill="#F1C27D"
            />
            {/* Hair Bob Cut */}
            <path
              d="M30 46 C30 26 70 26 70 46 C70 58 68 64 68 64 C68 64 64 34 50 34 C36 34 32 64 32 64 C32 64 30 58 30 46 Z"
              fill="#28201C"
            />
            {/* Dark Acetate Glasses */}
            <rect
              x="36"
              y="44"
              width="11"
              height="9"
              rx="2.5"
              stroke="#28201C"
              strokeWidth="2"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="53"
              y="44"
              width="11"
              height="9"
              rx="2.5"
              stroke="#28201C"
              strokeWidth="2"
              fill="rgba(255,255,255,0.3)"
            />
            <line x1="47" y1="48" x2="53" y2="48" stroke="#28201C" strokeWidth="2" />
            <circle cx="41.5" cy="48.5" r="1.5" fill="#1A1715" />
            <circle cx="58.5" cy="48.5" r="1.5" fill="#1A1715" />
            <path
              d="M45 60 Q50 65 55 60"
              stroke="#C06249"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      );

    case "male-turban-beard":
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#E8E2D5] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#E8E2D5" />
            {/* Turban */}
            <path
              d="M28 42 C28 18 72 18 72 42 C72 42 66 24 50 24 C34 24 28 42 28 42 Z"
              fill="#2A3B32"
            />
            <path
              d="M30 38 C35 25 65 25 70 38 C68 28 58 26 50 26 C42 26 32 28 30 38 Z"
              fill="#1F2D26"
            />
            {/* Shoulders */}
            <path d="M22 100 C22 78 78 78 78 100 Z" fill="#1F2D26" />
            <path d="M43 64 L57 64 L57 78 L43 78 Z" fill="#D89A5B" />
            {/* Head */}
            <path
              d="M33 44 C33 32 67 32 67 44 C67 62 58 72 50 72 C42 72 33 62 33 44 Z"
              fill="#D89A5B"
            />
            {/* Full Beard */}
            <path
              d="M33 52 C33 68 42 75 50 75 C58 75 67 68 67 52 C67 59 63 67 50 67 C37 67 33 59 33 52 Z"
              fill="#1C1816"
            />
            {/* Eyes */}
            <circle cx="42" cy="46" r="2" fill="#1C1816" />
            <circle cx="58" cy="46" r="2" fill="#1C1816" />
            {/* Moustache */}
            <path
              d="M42 56 Q50 54 58 56 Q50 60 42 56 Z"
              fill="#1C1816"
            />
            {/* Smile */}
            <path
              d="M46 61 Q50 64 54 61"
              stroke="#FAF7F2"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      );

    case "male-classic-part":
    case "male-crew-smile":
    case "male-glasses-warm":
    case "male-fade-sharp":
    case "male-casual-smile":
    default:
      return (
        <div
          className={`relative rounded-full overflow-hidden shrink-0 border border-[#EDE7DA] shadow-xs bg-[#EFEAE1] ${sizeClasses} ${className}`}
          title={name}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            <circle cx="50" cy="50" r="50" fill="#EFEAE1" />
            {/* Shoulders */}
            <path d="M22 100 C22 78 78 78 78 100 Z" fill="#252926" />
            {/* Neck */}
            <path d="M43 65 L57 65 L57 78 L43 78 Z" fill="#E0AC69" />
            {/* Head */}
            <path
              d="M33 44 C33 30 67 30 67 44 C67 62 58 71 50 71 C42 71 33 62 33 44 Z"
              fill="#E0AC69"
            />
            {/* Hair */}
            <path
              d="M30 40 C31 24 69 24 70 40 C68 31 60 27 50 27 C40 27 32 31 30 40 Z"
              fill="#221C18"
            />
            {/* Eyes */}
            <circle cx="42" cy="48" r="2" fill="#1A1816" />
            <circle cx="58" cy="48" r="2" fill="#1A1816" />
            {/* Smile */}
            <path
              d="M45 60 Q50 65 55 60"
              stroke="#B36B39"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      );
  }
}

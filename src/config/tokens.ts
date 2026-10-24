/**
 * Centralized Design Tokens — Mad Monkey Media
 * Luxury Light-Themed Glassmorphism & Editorial System
 */
export const designTokens = {
  colors: {
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F7F7F5",
    textPrimary: "#111111",
    textSecondary: "#666666",
    accentYellow: "#F5B301",
    borderDefault: "#E8E8E8",
    glassSurface: "rgba(255, 255, 255, 0.62)",
    glassSurfaceStrong: "rgba(255, 255, 255, 0.78)",
    glassBorder: "rgba(255, 255, 255, 0.85)",
  },
  typography: {
    headingFont: "Space Grotesk",
    bodyFont: "Inter",
  },
  motion: {
    easeEditorial: [0.22, 1, 0.36, 1] as const,
    durationFast: 0.25,
    durationBase: 0.5,
    durationSlow: 0.75,
  },
} as const;

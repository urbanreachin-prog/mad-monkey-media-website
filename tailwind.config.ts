import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          cream: "#F6F2E9",
          creamLight: "#FAF7F2",
          creamDark: "#EDE7DA",
          charcoal: "#191E1B",
          charcoalSoft: "#2C332E",
          muted: "#68716B",
          gold: "#B88D44",
          goldLight: "#D4AF67",
          goldHover: "#A37B35",
          dark: "#111513",
          darkCard: "#1A201C",
          darkBorder: "rgba(255, 255, 255, 0.08)",
          white: "#FFFFFF",
        },
        background: {
          primary: "#F6F2E9",
          secondary: "#FAF7F2",
          elevated: "#FFFFFF",
          dark: "#111513",
        },
        foreground: {
          primary: "#191E1B",
          secondary: "#68716B",
          muted: "#8A948E",
          inverse: "#F6F2E9",
        },
        brand: {
          gold: "#B88D44",
          goldHover: "#A37B35",
          goldLight: "#D4AF67",
          charcoal: "#191E1B",
          dark: "#111513",
        },
        border: {
          subtle: "#EDE7DA",
          glass: "rgba(25, 30, 27, 0.08)",
          darkSubtle: "rgba(255, 255, 255, 0.08)",
          goldMuted: "rgba(184, 141, 68, 0.25)",
        },
        studio: {
          charcoal: "#191E1B",
          charcoalDeep: "#111513",
          charcoalSecondary: "#2C332E",
          charcoalSurface: "#1A201C",
          gold: "#B88D44",
          goldLight: "#D4AF67",
          cream: "#F6F2E9",
          creamSoft: "#FAF7F2",
          ink: "#191E1B",
          muted: "#68716B",
        },
        edito: {
          cream: "#F6F2E9",
          creamLight: "#FAF7F2",
          creamDark: "#EDE7DA",
          deepGreen: "#103C32",
          deepGreenDark: "#0B2822",
          deepGreenLight: "#185346",
          charcoal: "#191E1B",
          charcoalDeep: "#111513",
          gold: "#B88D44",
          goldLight: "#D4AF67",
          goldHover: "#A37B35",
          mint: "#A9DCD0",
          muted: "#68716B",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        glass:
          "0 14px 40px -12px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(243, 240, 232, 0.08)",
        "glass-strong":
          "0 24px 60px -16px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(243, 240, 232, 0.12)",
        editorial:
          "0 20px 50px -16px rgba(0, 0, 0, 0.55), 0 4px 14px -2px rgba(0, 0, 0, 0.35)",
        cinema:
          "0 32px 80px -20px rgba(0, 0, 0, 0.75), 0 8px 24px -6px rgba(0, 0, 0, 0.45)",
        "lime-glow": "0 0 28px rgba(216, 255, 62, 0.18)",
      },
      letterSpacing: {
        tightest: "-0.035em",
        editorial: "-0.025em",
      },
    },
  },
  plugins: [],
};

export default config;

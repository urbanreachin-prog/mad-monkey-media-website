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
        background: {
          primary: "#171815",
          secondary: "#20211F",
          elevated: "#282A27",
        },
        foreground: {
          primary: "#F3F0E8",
          secondary: "#AAAFA5",
          muted: "#7E8479",
        },
        brand: {
          yellow: "#D8FF3E",
          yellowHover: "#C5F022",
          yellowSoft: "rgba(216, 255, 62, 0.14)",
          black: "#171815",
        },
        border: {
          subtle: "rgba(243, 240, 232, 0.12)",
          glass: "rgba(243, 240, 232, 0.16)",
          darkSubtle: "rgba(243, 240, 232, 0.12)",
          limeMuted: "rgba(216, 255, 62, 0.28)",
        },
        studio: {
          charcoal: "#20211F",
          charcoalDeep: "#171815",
          charcoalSecondary: "#1D201B",
          charcoalSurface: "#282A27",
          lime: "#D8FF3E",
          limeHover: "#C5F022",
          cream: "#F3F0E8",
          creamSoft: "#EAE5D9",
          ink: "#171815",
          muted: "#AAAFA5",
          orange: "#FF6B35",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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

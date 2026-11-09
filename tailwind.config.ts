import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // xmhouston clean executive color space
        background: "#FFFFFF",
        foreground: "#050B16",
        surface: "#F8FAFC",
        "surface-raised": "#FFFFFF",
        "surface-hover": "#F1F5F9",
        "surface-dark": "#050B16",
        "surface-dark-card": "#0D1524",
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#E10000",
          hover: "#C50000",
          light: "#FEF2F2",
          border: "#FECACA",
        },
        border: "#E2E8F0",
        "border-strong": "#CBD5E1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Montserrat", "Helvetica", "sans-serif"],
        display: ["var(--font-montserrat)", "Montserrat", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        red: "0 10px 25px -3px rgba(225, 0, 0, 0.25)",
      },
      letterSpacing: {
        tightest: "-.04em",
        tighter: "-.02em",
        tight: "-.01em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".15em",
        executive: ".2em",
      },
    },
  },
  plugins: [],
};

export default config;

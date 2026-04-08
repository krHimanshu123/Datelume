import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"]
      },
      colors: {
        ink: "#1f2937",
        paper: "#fcfaf6",
        accent: "#cc7a52",
        accentSoft: "#f3dfd4",
        line: "#e5dfd6"
      },
      boxShadow: {
        card: "0 18px 45px rgba(31, 41, 55, 0.08)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(31, 41, 55, 0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;

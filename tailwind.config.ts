import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "rgba(255, 255, 255, 0.2)" },
          "100%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing:
          "typing 2s steps(30, end) 1s 1 normal both, blink 900ms steps(30, end) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

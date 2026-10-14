import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Theme-aware colors backed by the tokens in styles/index.css, so one
      // class works in both Classic and Midnight.
      colors: {
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        accent: "var(--blue-mid)",
        surface: "var(--bg-card)",
        canvas: { DEFAULT: "var(--bg)", alt: "var(--bg2)" },
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailgrids/plugin"),
  ],
};
export default config;

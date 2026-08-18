import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#ebe1d4",
        "primary-fixed-dim": "#c9c6c1",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#ebe1d4",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "inverse-primary": "#c9c6c1",
        "on-primary-fixed": "#1c1c18",
        "on-secondary-fixed": "#1c1b19",
        "on-tertiary": "#ffffff",
        "secondary-container": "#e6e2de",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#474743",
        "surface-tint": "#5f5e5a",
        "on-background": "#1f1b13",
        "primary-container": "#f5f2ec",
        "inverse-surface": "#353027",
        "on-tertiary-container": "#836a45",
        "on-tertiary-fixed": "#281800",
        "surface-container-low": "#fcf2e5",
        "secondary-fixed": "#e6e2de",
        "surface": "#fff8f2",
        "outline": "#787770",
        "inverse-on-surface": "#f9efe2",
        "tertiary-fixed-dim": "#e1c296",
        "primary": "#5f5e5a",
        "error": "#ba1a1a",
        "primary-fixed": "#e5e2dc",
        "surface-bright": "#fff8f2",
        "on-surface-variant": "#474741",
        "on-primary-container": "#6f6e69",
        "on-surface": "#1f1b13",
        "surface-container": "#f6ece0",
        "tertiary-container": "#fff0e0",
        "secondary": "#605e5b",
        "on-secondary-fixed-variant": "#484644",
        "tertiary-fixed": "#ffddb0",
        "surface-dim": "#e2d9cc",
        "background": "#fff8f2",
        "secondary-fixed-dim": "#cac6c2",
        "on-secondary-container": "#666461",
        "on-tertiary-fixed-variant": "#594321",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "tertiary": "#725a36",
        "surface-container-high": "#f1e7da",
        "outline-variant": "#c8c7be"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      spacing: {
        "margin-page": "64px",
        "element-gap": "24px",
        "section-gap": "160px",
        "margin-mobile": "24px",
        "unit": "8px",
        "grid-gutter": "32px",
        "grid-columns": "12"
      },
      fontFamily: {
        "serif": ["var(--font-eb-garamond)", "EB Garamond", "serif"],
        "sans": ["var(--font-inter)", "Inter", "sans-serif"],
        "caption": ["var(--font-inter)", "Inter", "sans-serif"],
        "headline-sm": ["var(--font-eb-garamond)", "EB Garamond", "serif"],
        "body-lg": ["var(--font-inter)", "Inter", "sans-serif"],
        "headline-md": ["var(--font-eb-garamond)", "EB Garamond", "serif"],
        "display-lg": ["var(--font-eb-garamond)", "EB Garamond", "serif"],
        "body-md": ["var(--font-inter)", "Inter", "sans-serif"],
        "label-caps": ["var(--font-inter)", "Inter", "sans-serif"],
        "display-lg-mobile": ["var(--font-eb-garamond)", "EB Garamond", "serif"],
        "display-xl": ["var(--font-eb-garamond)", "EB Garamond", "serif"]
      },
      fontSize: {
        "caption": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "headline-sm": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "body-lg": ["20px", { lineHeight: "32px", fontWeight: "300" }],
        "headline-md": ["42px", { lineHeight: "52px", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.15em", fontWeight: "600" }],
        "display-lg-mobile": ["42px", { lineHeight: "48px", fontWeight: "400" }],
        "display-xl": ["84px", { lineHeight: "92px", letterSpacing: "-0.02em", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      padding: {
        "viewport-inline-padding": "var(--viewport-inline-padding)",
      },
      margin: {
        "viewport-inline-padding": "var(--viewport-inline-padding)",
      },
      colors: {
        "primary-50": "hsl(var(--primary-50) / <alpha-value>)",
        "primary-100": "hsl(var(--primary-100) / <alpha-value>)",
        "primary-200": "hsl(var(--primary-200) / <alpha-value>)",
        "primary-300": "hsl(var(--primary-300) / <alpha-value>)",
        "primary-400": "hsl(var(--primary-400) / <alpha-value>)",
        "primary-500": "hsl(var(--primary-500) / <alpha-value>)",
        "primary-600": "hsl(var(--primary-600) / <alpha-value>)",
        "primary-700": "hsl(var(--primary-700) / <alpha-value>)",
        "primary-800": "hsl(var(--primary-800) / <alpha-value>)",
        "primary-900": "hsl(var(--primary-900) / <alpha-value>)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-quote-borders": "var(--quote-border)",
            "--tw-prose-invert-quote-borders": "var(--quote-border)",
            "blockquote p::after": {
              display: "none",
            },
            "blockquote p::before": {
              display: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
      },
      colors: {
        brand: {
          DEFAULT: "#4EFF74",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui"],
        clash: ["var(--font-clash)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;

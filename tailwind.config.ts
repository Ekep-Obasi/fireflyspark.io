import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25rem" }], // 12px / 20px
        sm: ["0.875rem", { lineHeight: "1.375rem" }], // 14px / 22px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px / 24px
      },
    },
  },
  plugins: [],
}
export default config

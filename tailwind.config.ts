import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        silver: {
          '50': '#f7f7f7',
          '100': '#f0f0f0',
          '200': '#e3e3e3',
          '300': '#d1d1d1',
          '400': '#c2c2c2',
          '500': '#aaaaaa',
          '600': '#969696',
          '700': '#818181',
          '800': '#6a6a6a',
          '900': '#585858',
          '950': '#333333',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

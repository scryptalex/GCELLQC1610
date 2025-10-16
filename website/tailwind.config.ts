import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#D4AF37',
          light: '#F4D03F',
          dark: '#B8860B',
        },
        platinum: {
          DEFAULT: '#E5E4E2',
          light: '#F5F5F5',
          dark: '#C0C0C0',
        },
      },
    },
  },
  plugins: [],
};

export default config;

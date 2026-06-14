/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#02040a',
          900: '#050816',
          850: '#08101f',
          800: '#0b1120',
          700: '#111827',
          600: '#1f2937',
        },
        ink: {
          100: '#f5f7ff',
          200: '#dbe7ff',
          300: '#b5c4e6',
          400: '#93a4c7',
        },
        accent: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#101312',
          900: '#151918',
          850: '#1a1f1d',
          800: '#202624',
          700: '#2b3330',
          600: '#3b4541',
        },
        ink: {
          100: '#f3f0e8',
          200: '#d9d6cd',
          300: '#aaa9a2',
          400: '#7f817c',
        },
        accent: {
          300: '#77c7bd',
          400: '#3faaa0',
          500: '#278b82',
          600: '#1d6e68',
        },
        signal: '#d76549',
        paper: '#ebe6da',
      },
      fontFamily: {
        display: ['IBM Plex Sans', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

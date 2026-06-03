/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creative-orange': '#ff6b35',
        'creative-amber': '#ff9f1c',
        'creative-peach': '#ffbf69',
        'creative-dark': '#111111',
        'logical-blue': '#0ea5e9',
        'logical-sky': '#38bdf8',
        'logical-dark': '#111827',
        'logical-light': '#f8fafc',
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
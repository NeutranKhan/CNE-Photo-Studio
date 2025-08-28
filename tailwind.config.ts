const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      colors: {
        'brand-primary': '#0A2540',
        'brand-secondary': '#0077FF',
        'brand-light': '#F6F9FC',
        'brand-dark': '#333333',
        'brand-accent': '#FFD700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add this line
  ],
};
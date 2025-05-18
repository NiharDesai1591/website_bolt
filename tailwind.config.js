/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B',
        },
        ferrari: {
          DEFAULT: '#DC0000',
          light: '#FF0000',
          dark: '#8B0000',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInDelay: 'fadeIn 0.5s ease-in-out 0.2s forwards',
        fadeInDelayLong: 'fadeIn 0.5s ease-in-out 0.4s forwards',
        slideDown: 'slideDown 0.3s ease-in-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
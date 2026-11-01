/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#061507',        // Primary forest green (Header, Footer, Headings, Primary Buttons)
          surface: '#0A1B0D',     // Secondary dark green
          gold: '#C39C69',        // Antique brand gold
          'gold-light': '#D7AD76',// Warm gold highlight
          'gold-pale': '#E2C89F', // Soft gold
          ivory: '#F9F7F2',       // Warm ivory background
          'ivory-dark': '#F0EBE1',// Subtle ivory separator
          white: '#FFFFFF',       // Pure white background
          body: '#263028',        // Primary readable body text
          muted: '#637066',       // Muted secondary text
          border: 'rgba(6, 21, 7, 0.09)',
          'border-gold': 'rgba(195, 156, 105, 0.3)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(6, 21, 7, 0.04), 0 2px 6px -1px rgba(6, 21, 7, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(6, 21, 7, 0.08), 0 4px 12px -2px rgba(6, 21, 7, 0.03)',
        'drawer': '-10px 0 40px rgba(6, 21, 7, 0.15)',
        'gold-glow': '0 0 20px rgba(195, 156, 105, 0.25)',
      }
    },
  },
  plugins: [],
}

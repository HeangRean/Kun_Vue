// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#008C0E',
      },
      fontFamily: {
        'khmer-battambang': ['"Khmer OS Battambang"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

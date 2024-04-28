/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#B9D9EB',
        'costomBgColor': '#0D23BE0A'
      },
      fontFamily: {
        'playfair': ["Playfair Display", 'serif'],
        'worksans': ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#0F1424',
        'dark-blue': '#1C1F4A',
        'blue': '#5847EB'
      },
    }
  },
  plugins: [],
}

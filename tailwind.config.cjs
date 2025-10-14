/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mystic: {
          900: "#0a0f24",
          800: "#101735",
          700: "#1a2755",
          accent: "#3b6eff"
        }
      }
    }
  },
  plugins: []
}
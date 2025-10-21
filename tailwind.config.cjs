/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        samadhi: {
          900: '#070821',
          800: '#0a1333',
          700: '#0f214d',
          accent: '#334ee6'
        }
      },
      fontFamily: {
        display: ['"Lora"', 'serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: [],
}

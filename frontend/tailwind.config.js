/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '18px', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['Syncopate', 'sans-serif'],
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #050510, #000000)',
      }
    },
  },
  plugins: [],
}

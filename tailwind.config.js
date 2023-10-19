/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "gabarito-font": ['Gabarito', 'sans-serif'],
        "lilita-font": ['Lilita One', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}


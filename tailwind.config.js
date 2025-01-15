/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'], // Replace 'Roboto' with your preferred font
      },
      colors: {
        primary: '#5E3BEE',
        shades: '#F5FCFF', 
      },
    },
  },
  plugins: [],
}
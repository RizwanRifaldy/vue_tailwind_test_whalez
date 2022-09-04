/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'font-color-1': '#8FAFC4',
      'font-color-2': '#1F2855',
      'font-color-3': '#797F99',
      'color-4': '#D2000F',
      'font-color-5': '#0093AD',
      'white': '#fff',
      'blue-active' : '#457B9D',
      'hover-color' : '#DAE5EB',
      'border' : '#EFEFEF',
      'badge' : '#f9dbdb',
      'tab' : '#cbe9e9'
    },
    backgroundImage: {
      'circle-1': "url('./assets/circle.png')",
      'circle-2': "url('./assets/circle-active.png')"
    }
  },
  plugins: [],
}

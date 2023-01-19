/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'brand-green' : '#073937',
        'brand-yellow' : '#E7B022'
      }
    },
  },
  plugins: [],
}

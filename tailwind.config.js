/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx','./src/**/*.ts', "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Palace Script MT', 'cursive'],
        knight: ['Chomskey'],
        sans: ['Helvetica Neue', 'serif'],
      },
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
      },
    },
  },
  plugins: [],
};
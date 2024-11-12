/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Palace Script MT', 'cursive'],
        sans: ['"Times New Roman"', 'serif'],
      },
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'betterhover': {'raw': '(hover: hover)'},
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};
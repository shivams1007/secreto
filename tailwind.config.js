/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#032538',
        dark: '#032538',
        light: '#032538',
      },
      secondary: {
        DEFAULT: '#edf2f7',
        dark: '#edf2f7',
        light: '#edf2f7',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000',
      },
      gray: {
        DEFAULT: '#F3F4F6',
        dark: '#F3F4F6',
        light: '#F3F4F6',
      },
    },
  },
  plugins: [],
};
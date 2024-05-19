/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#27546e',
        dark: '#27546e',
        light: '#27546e',
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
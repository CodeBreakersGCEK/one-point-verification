/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Inter', sans-serif",
        popins:"'Poppins', sans-serif"
      },
      colors:{
        'darkSky':'#0369A1',
      }
    },
    plugins: [],
  },
};

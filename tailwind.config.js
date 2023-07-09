/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.{html,js,jsx}"],
  theme: {
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#10283F',
      blue2: '#10283f59',
      primary2: '#C34D0A',
      white: '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
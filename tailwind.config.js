/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#F9FAFF ',
        'brand-white': '#FFFFFF',
        'light-brown': '#D9D9D9',
        'brand-primary-light': '#B1CDFD',
        'picture-background': '#f4f7fb',
        'separator-bg': '#EEF2FF',
        'text-color-dark-blue': '#384A69',
        'text-color-blue': 'rgba(29, 78, 216, 1)',
        'picture-background-two': '#FAFCFF',
        'profile-text-color': '#D0E1FF',
        'black-color': '#000',
        'hash-text-color': '#8492A7',
        'primary-bg': '#F5F8FF',
        'drop-down-bg': 'rgba(255, 255, 255, 0.75)'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'brand-shadow': '0px 4px 25px 0px rgba(29, 78, 216, 0.05)',
        'drop-down-shadow': '-1px -1px 25px 1px rgba(47, 79, 237, 0.08)',
        'shadow-low': '0px 4px 25px 0px rgba(141, 141, 141, 0.05)',
        'brand-shadow-two': '0px 4px 23px 0px rgba(29, 78, 216, 0.05)',
        'brand-shadow-three': '0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        
      }
    },
  },
  plugins: [],
}
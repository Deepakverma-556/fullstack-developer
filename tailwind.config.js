/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#70ff00',
        dark: '#161616',
        light: '#e0e0e0',
        'dark-gray': '#828282',
        'light-gray': '#f2f2f2',
        'medium-gray':'#4f4f4f',
      },
      fontSize:{
        xsm: '26px',
        medium: '33px',
        xxl:'50px',
      },
      lineHeight: {
        xl: '33px',
        xxl:'91px',
      }
    },
  },
  plugins: [],
};

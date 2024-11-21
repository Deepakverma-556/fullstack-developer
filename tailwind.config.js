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
        md:'39px',
        xxl:'45px',
        xxxl: '50px',
        xxxxl:'54px',
        large: '74px',
        extralarge:'82px',
      },
      lineHeight: {
        xl: '33px',
        xxl:'91px',
      },
      screens: {
        lg: '1025px',
        md: '770px',
        xsm: '435px',
      },
      maxWidth: {
        xxl:'1200px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        courier: ['Courier Prime', 'sans-serif'],
      },
      animation: {
        typewriter: 'typewriter 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
        type: 'type 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
        skills: 'skills 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
      },
      keyframes: {
        typewriter: { '0%': { width: '0%' }, '100%': { width: '25%' }, },
        type: { '0%': { width: '0%' }, '100%': { width: '70%' },},
        skills: { '0%': { width: '0%' }, '100%': { width: '70%' }, },
        blinkTextCursor: { '0%': { borderRightColor: 'transparent' }, '50%': { borderRightColor: '#70ff00' }, '100%': { borderRightColor: 'transparent' }, },
      },
    },
  },
  plugins: [],
};

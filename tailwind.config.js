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
        'medium-gray': '#4f4f4f',
      },
      fontSize: {
        xsm: '25px',
        medium: '32px',
        md: '39px',
        xxl: '40px',
        xxxl: '45px',
        xxxxl: '50px',
        large: '70px',
        extralarge: '74px',
      },
      lineHeight: {
        xl: '33px',
        xxl: '91px',
      },
      screens: {
        lg: '1025px',
        md: '770px',
        xsm: '435px',
      },
      maxWidth: {
        xxl: '1200px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        courier: ['"Courier Prime"', 'monospace'],
      },
      animation: {
        projects: 'projects 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
        about: 'about 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
        skills: 'skills 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(10) infinite normal',
        faq: 'faq 2s steps(20) 1 normal both, blinkTextCursor 500ms steps(1) infinite normal',
      },
      keyframes: {
        projects: {
          '0%': { width: '0ch' },
          '100%': { width: '9ch' },
        },
        about: {
          '0%': { width: '0ch' },
          '100%': { width: '9.5ch' },
        },
        skills: {
          '0%': { width: '0ch' },
          '100%': { width: '7ch' },
        },
        faq: {
          '0%': { width: '0ch' },
          '100%': { width: '7ch' },
        },
        blinkTextCursor: {
          '0%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#70ff00' },
          '100%': { borderRightColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

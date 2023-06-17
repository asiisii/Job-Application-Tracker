/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '426px',
      md: '769px',
      lg: '1025px',
      xl: '1281px',
    },
    extend: {
      colors: {
        //light mode
        'primary-light': '#E3FDFD', //Background for the navbar, button background color, and background for the app in light mode.
        'secondary-light': '#CBF1F5', //Button text color, hover effect, and sign-up button in light mode
        'accent-light': '#A6E3E9', //Chart color or any other accent color for data visualization in light mode
        'neutral-light': '#71C9CE', //Logo color or brand color to highlight important elements in light mode
        //dark mode
        ' primary-dark': '#074F57',
        'secondary-dark': '#043A43',
        'accent-dark': '#032A30',
        'neutral-dark': '#021E25',
      },
    },
  },
  plugins: [require('daisyui')],
};

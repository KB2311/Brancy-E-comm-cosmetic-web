/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xsm: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
};

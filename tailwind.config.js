/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: {
        300: '#858584',
        400: '#3B3B3B',
        500: '#2B2B2B'
      },
      primary: {
        500: '#A259FF'
      }
    }
  },
  plugins: []
}

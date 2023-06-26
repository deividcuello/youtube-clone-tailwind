/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      lightGray: '#eeeeee',
      gray: '#cccccc',
      blue: '#0000ff',
      red: '#ff0000',
      white: '#ffffff',
      black: '#000000'
    },
    
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


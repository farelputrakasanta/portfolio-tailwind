/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        navy: '#090057',
        navy2: '#06283D',
        ungu: '#57007E',
        pinky: '#C400C6',
        cream: '#FFA069',
        abutx: '#374151'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

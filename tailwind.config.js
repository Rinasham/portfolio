/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        computer: 'url("/imgs/student.jpg")',
      }),
      fontFamily: {
        text: ['Alumni Sans Pinstripe'],
        title: ['Rubik Dirt'],
      },
      colors: {
        lightblack: '#0c0b0a',
        darkred: '#89434c',
        lightpink: '#cfb8c4',
        hotpink: '#c88fa0',
        primaryblue: '#3f94ac',
        lightblue: '#5ea7ca',
        paleblue: '#c8dce9',
      },
    },
  },
  plugins: [],
};

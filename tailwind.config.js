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
        darkred: '#89434c',
        lightpink: '#cfb8c4',
        lightblack: '#0c0b0a',
        hotpink: '#c88fa0',
      },
    },
  },
  plugins: [],
};

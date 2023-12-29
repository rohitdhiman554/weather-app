/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#98A2B3',
        secondary: '#344054',
        tertiary: "#EAECEF"
      }
    },
  },
  plugins: [],
}
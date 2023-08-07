/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: {
          light: "#E4E9F7",
          dark: "#0E1422",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Serif"],
      },
    },
    container: {
      center: true
    }
  },
}

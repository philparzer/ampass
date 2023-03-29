/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display": ['var(--font-display)', ...fontFamily.sans],
        "body": ['var(--font-body)', ...fontFamily.sans],
      },
      colors: {
        "lagoon-500": "#00A8E8",
        "scorch-500": "#FF0000",
        "scorch-300": "#FF3636",
        "lagoon-300": "#37B7FF",
      }
    },
  },
  plugins: [],
}
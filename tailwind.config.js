/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["IBM Plex Serif", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

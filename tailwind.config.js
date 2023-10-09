/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    colors: {
      "orkut-pink": "#ED2590",
      "orkut-pink-hover": "#c41c76",
      "white": "#FFFFFF",
      "input-text": "#484848",
      "soft-gray": "#868686",
      "base-gray": "#EFF3F8"
    },
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    },
  },
  plugins: [],
}


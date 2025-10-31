/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'text': '#2c3e50',
        'light-text': '#7f8c8d',
        'background': '#ffffff',
        'border': '#bdc3c7',
        'green': '#59C79B',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
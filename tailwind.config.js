/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,tmpl}"],
  theme: {
    extend: {
        colors: {
            'regal-blue': '#243c5a',
            'whitesmoke': '#f5f5f5',
            'darkwhitesmoke': '#a9a9aa',
          },
    },
  },
  plugins: [],
}



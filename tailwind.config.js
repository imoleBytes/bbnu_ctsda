/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,tmpl}"],
  theme: {
    extend: {
        colors: {
            'regal-blue': '#243c5a',
            'whitesmoke': '#f5f5f5',
            'darkwhitesmoke': '#a9a9aa',
            'logo-color': '#edc329',
            'logo-color-deep': '#ffc800',
            'button-color': '#dc3433',
          },
    },
  },
  plugins: [],
}




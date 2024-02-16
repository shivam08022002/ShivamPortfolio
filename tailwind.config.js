/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spaceFont: ['Poppins', "sans-serif"],
      },
      screens: {
        'tablet': '600px',
        // => @media (min-width: 640px) { ... }

        'laptop': '900px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        outline:"0 5px 1rem rgba(0, 0, 0, .2)"
      }
    },
  },
  plugins: [],
}


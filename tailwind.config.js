/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '640px'},  // Styles for small devices (phones)
        'max-md': {'max': '768px'},  // Styles for tablets
        'max-lg': {'max': '1024px'}, // Styles for devices smaller than laptops
      }
    }
  }
}

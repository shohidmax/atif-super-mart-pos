/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}


// content: [
//   "./src/**/*.{js,jsx,ts,tsx}",
// ],
// "./src/**/*.{js,jsx,ts,tsx}",
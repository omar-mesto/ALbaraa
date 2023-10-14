// tailwind.config.js
module.exports = {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    colors:{
    green: "#00A877",
    white: "#fff",
    gray: "#686868"
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
]
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg':{max: '1350px', min:'951px'},
        'md':{max: '950px' ,min:'670px'},
        'sm':{max: '669px',min:'100px'},

        
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
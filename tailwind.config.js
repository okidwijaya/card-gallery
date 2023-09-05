/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oxygen-font': ['"Oxygen"', 'sans-serif'],
      },
      colors: {
        'bg-custom': '#0B2447',
        'electric-violet': {
            '50': '#f3f1ff',
            '100': '#ebe5ff',
            '200': '#d9ceff',
            '300': '#bea6ff',
            '400': '#9f75ff',
            '500': '#843dff',
            '600': '#7916ff',
            '700': '#6b04fd',
            '800': '#5a03d5',
            '900': '#4b05ad',
            '950': '#2c0076',
        },
        'orange-custom': '#fb8500',
        'light-blue-custom': '#8ecae6',
        'dark-navy-custom': '#023047',
        'tosca-custom': '#219ebc',
        'dark-bg-primary': '#121212',
        'yellow-custom': '#ffb703',
        'yellow-poke-custom': '#FFCB05',
        'blue-poke-custom': '#3466AF',
        'green-custom': '#2a9d8f',
        'red-custom': '#db3a34',
      },
    },
  },
  plugins: [],
}
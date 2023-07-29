/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        uhs: "url('/src/assets/uhs.PNG')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

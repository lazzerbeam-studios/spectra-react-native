/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
  ],
  presets: [
    require('nativewind/preset'),
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        Poppins400: ["Poppins400"],
        Poppins500: ["Poppins500"],
        Poppins600: ["Poppins600"],
        Poppins700: ["Poppins700"],
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [
    require('nativewind/preset'),
  ],
  theme: {
    colors: {
      text: 'var(--color-text)',
      background: 'var(--color-background)',
    },
    extend: {},
  },
  plugins: [],
}

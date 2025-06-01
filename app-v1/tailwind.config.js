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
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        Poppins400: ["Poppins400"],
        Poppins500: ["Poppins500"],
        Poppins600: ["Poppins600"],
        Poppins700: ["Poppins700"],
      },
    },
  },
};

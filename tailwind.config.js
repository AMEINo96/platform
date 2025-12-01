/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0A0F',
        panel: '#0F1117',
        accent: {
          DEFAULT: '#9F7AEA', // Muted royal purple
          glow: 'rgba(159, 122, 234, 0.12)',
        },
        sand: '#E6B89C', // Warm sand
        text: {
          DEFAULT: '#E6E6E6',
          muted: '#9AA0A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

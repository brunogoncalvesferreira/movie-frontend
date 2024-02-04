/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': 'url(/src/assets/background_image.png)',
      },
    },
    fontFamily: {
      sans: ['Roboto Slab', 'sans-serif'],
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
}

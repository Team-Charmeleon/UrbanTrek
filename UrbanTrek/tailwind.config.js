/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        star: "url('./src/assets/star-outline.png')",
        fillStar: "url('./src/assets/star-filled.png')",
      },
    },
  },
  plugins: [],
};

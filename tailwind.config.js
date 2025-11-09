/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        panel: '#0a0a0a',
        mid: '#1b1b1b',
        soft: '#6b6b6b',
      },
    },
  },
  plugins: [],
}

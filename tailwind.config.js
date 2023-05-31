/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        950: '#040406',
        900: '#0c0f15',
        800: '#1a212a',
        700: '#3f4957',
        600: '#475569',
        500: '#64748b',
        400: '#94a3b8',
        300: '#cbd5e1',
        200: '#e2e8f0',
        100: '#b2b2b5',
        50: '#f4f4f5'
      },
      secondary: '#5b21b6',
      link: '#4ca6ff',
      error: '#c93838'
    },
    fontFamily: {
      text: ['Inter', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      title: ['Outfit', 'Helvetica Neue', 'Helvetica', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}

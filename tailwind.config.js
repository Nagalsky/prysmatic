/** @type {import('tailwindcss').Config} */

const bodyFontFamily = '"Inter-Regular", sans-serif'
const headingFontFamily = '"Sora-SemiBold", sans-serif'
const subHeadingFontFamily = '"DM-Mono-Regular", sans-serif'

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: bodyFontFamily,
      heading: headingFontFamily,
      subheading: subHeadingFontFamily,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '910px',
      xl: '1199px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        'semi-white': '#eee8e1',
        'dark-500': '#1b2022',
        'purple-500': '#825AFF',
        'purple-600': '#6540da',
        'yellow-500': '#edc94a',
        'yellow-600': '#d2b343',
        'sky-500': '#75a8ff',
        'rose-500': '#e35484',
        'gradient-start': '#1b2022',
        'gradient-via': '#252a2b',
        'gradient-end': '#484b4b',
      },
    },
  },
  plugins: [],
}

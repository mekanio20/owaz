/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      m_red: {
        100: '#FE0002',
        200: '#E83D46'
      },
      m_gray: {
        100: '#F5F5F5',
        200: '#535353',
        300: '#9B9B9B',
        400: '#B3B3B3'
      },
      m_black: {
        100: '#161616'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sf_pro: ['SF Pro Display', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '95%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#202124',
          1100: '#282C2F',
          1200: '#18191B'
        },
        blue: {
          900: '#05aad3'
        }

      },
      animation: {
        pulse: 'pulse 3.5s infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueTray: '#2E5BFF',
        lightBlue: '#E0E7FF'
      },
      fontFamily: {
        'helBold': ['Hel-Bold'],
        'helLight': ['Hel-light'],
        'helText': ['Hel']
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

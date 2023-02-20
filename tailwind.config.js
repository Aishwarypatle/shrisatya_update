module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#A2D2FF",
          400: "#FF865E",
          600: "#FEE440",
          300: "#FEF9EF",
          200: "#9D9D9D",
        },
      },
      fontFamily: {
        myFont: ["Montserrat"],
      },
      borderWidth:{
        border1:"1px"
      },
    },
    screens: {

       "xs": {"min":"320px" , "max":"420px"},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

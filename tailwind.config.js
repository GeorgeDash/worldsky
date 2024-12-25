/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      screens: {
        "sm": "320px",
        "sm-m": "375px",
        "sm-l": "425px",
        "sm-xl": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1024px",
        "2xl": "1200px",
        "3xl": "1440px"
      },
      colors: {
        "beige": "#c2b8b5"
      },
      backgroundImage: {
        "hero": "url('/build/img/hero.jpeg')",
        "tour-guide": "url('/build/img/tour-guide.jpg')",
        "group-travel": "url('/build/img/group-travel.jpg')"
      },
      fontFamily: {
        "sans": ["Geist", "sans-serif"]
      },
      boxShadow: {
        "btn": "0px 0px 8px 2px #00000024",
        "option": "0 0 10px 100px #1882A8 inset"
      },
      transitionDuration: {
        "375": "375ms"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
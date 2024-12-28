/** @type {import('tailwindcss').Config} */
import fluid, {extract, screens, fontSize} from 'fluid-tailwind'


module.exports = {
  content: {
    files: ["./*.html", "./*.js"],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      screens: {
        "sm": "20rem",
        "sm-m": "23.4375rem",
        "sm-l": "26.5625rem",
        "sm-xl": "36rem",
        "md": "48rem",
        "lg": "62rem",
        "xl": "64rem",
        "2xl": "75rem",
        "3xl": "90rem"
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
    fluid({
      checkSC144: false
    }),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
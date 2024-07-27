/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "from-left": "fromLeft 0.5s ease-out",
        "from-right": "fromRight 0.5s ease-out",
      },
      keyframes: {
        fromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      screens: {
        "mob-sc": { max: "940px" }, // Custom screen for max-width of 640px
      },
    },
    colors: {
      blue: "#032D6C",
      white: "#ffffff",
      red: "#8B0000",
      gray: "#E6EDF8",
      transparent: "#00000000",
      dgray: "#EFEFEF",
    },
  },
  plugins: [],
  variants: {},
};

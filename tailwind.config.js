import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "player-one": "#40C0E7",
        "player-two": "#e7a240",
        "player-win": "rgb(153,255,153)",
        "player-lose": "#ccc",
      },
      animation: {
        slideIn: "slideIn .3s ease 1",
        appear: "appear 2s 1",
      },
    },
    keyframes: {
      slideIn: {
        "0%": {
          transform: "translateX(7rem)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      appear: {
        "0%": {
          "background-color": "white",
        },
        "100%": {
          "background-color": "transparent",
        },
      },
    },
  },
  plugins: [],
};

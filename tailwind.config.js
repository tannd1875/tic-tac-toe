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
    },
  },
  plugins: [],
};

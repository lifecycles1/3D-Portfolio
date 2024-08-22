/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: { 200: "#D5DAE1" },
        black: { DEFAULT: "#000", 500: "#1D2235" },
        blue: { 500: "#2b77e7" },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        clickHoldDrag: {
          "0%": { transform: "translateX(0) scale(1)", opacity: 1 },
          "10%": { opacity: 0 },
          "20%": { opacity: 0 },
          "30%": { opacity: 0 },
          "40%": { opacity: 0 },
          "50%": { opacity: 0 },
          "60%": { transform: "translateX(-20px) scale(0.95)" },
          "70%": { transform: "translateX(-10px) scale(1)" },
          "80%": { transform: "translateX(-5px) scale(1)" },
          "90%": { transform: "translateX(0) scale(1)" },
          "100%": { transform: "translateX(0) scale(1)", opacity: 1 },
        },
        clickHoldDragClicked: {
          "0%": { opacity: 0 },
          "10%": { transform: "translateX(0) scale(0.95)", opacity: 1 },
          "20%": { transform: "translateX(-5px) scale(0.95)", opacity: 1 },
          "30%": { transform: "translateX(-10px) scale(0.95)", opacity: 1 },
          "40%": { transform: "translateX(-20px) scale(0.95)", opacity: 1 },
          "50%": { transform: "translateX(-30px) scale(0.95)", opacity: 1 },
          "60%": { opacity: 0 },
          "70%": { opacity: 0 },
          "80%": { opacity: 0 },
          "90%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        clickHoldDrag: "clickHoldDrag 1.5s ease-in-out infinite",
        clickHoldDragClicked: "clickHoldDragClicked 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

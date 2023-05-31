/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(var(--textWidth))" },
          "75%": { transform: "translateX(var(--textWidth))" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 15s infinite linear",
      },
    },
  },
  plugins: [],
};

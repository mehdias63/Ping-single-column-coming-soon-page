/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      libre: ["Libre Franklin"],
    },
    extend: {
      colors: {
        "black": "#15202A",
        "blue": "#4C7BF3",
        "light-blue": "#C2D3FF",
        "gray": "#969696",
        "red": "#FF5466",
      },
    },
  },
  plugins: [],
};

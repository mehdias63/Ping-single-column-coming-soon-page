/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pop: ["Poppins"],
    },
    extend: {
      colors: {
        pink: "#FF7979",
        green: "#38CC8B",
        purple: "#5E54A4",
        gray: "#BAB7D4",
      },
    },
  },
  plugins: [],
};

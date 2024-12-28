/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        circular: ['"Circular Std"', "sans-serif"],
      },
      boxShadow: {
        custom:
          "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
        custom2: "0px 0px 12px 3px rgba(0, 0, 0, 0.25)",
      },
      textShadow: {
        custom: "2px 2px 2px rgba(0, 0, 0, 0.5)", // Your requested shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", // Define your shadow here
        },
      });
    },
  ],
};
// import "./src/assets/section-hero-2.png";

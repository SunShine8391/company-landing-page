const { withRouter } = require("next/router");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/images/slider-bg.jpg')",
      },
    },
    colors: {
      primary: "#0a97b0",
      secondary: "#04233b",
      white: "#fff",
      black: "#000",
      gray: "#909090",
      subgray: "#f8f8f9",
    },
  },

  plugins: [],
};

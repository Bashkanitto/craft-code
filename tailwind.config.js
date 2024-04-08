/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Geist", "Inter", ...defaultTheme.fontFamily.sans],
      mono: ["GeistMono", "fira-code", ...defaultTheme.fontFamily.mono],
    },
    keyframes: {
      loop: {
        "0%": {
          transform: "translateX(-100px)",
        },
        "50%": {
          transform: "translateX(0px)",
        },
        "100%": {
          transform: "translateX(100px)",
        },
      },
    },
    extend: {
      colors: {
        green: "#16a34a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "3rem" }],
        h2: ["30px", { lineHeight: "2.5rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};

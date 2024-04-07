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
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#123458",
  secondary: "#67e8f9",
  light: {
    bg: "#F5F5F5",
    cardbg: "#F8FAFC",
    navbarbg: "#F8FAFC",
    containerbg: "#F8FAFC",
    buttonbg: "#27548A",
    text: "#27272A",
    txtheader: "#27548A",
    txtlink: "#27548A",
  },
  dark: {
    bg: "#393E46",
    cardbg: "#222831",
    navbarbg: "#222831",
    containerbg: "#222831",
    buttonbg: "#FFF4B7",
    text: "#F7F7F7",
    txtheader: "#FFF4B7",
    txtlink: "#FFF4B7",
  },
};

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: colors.light,
        dark: colors.dark,
        primary: colors.primary,
        secondary: colors.secondary,
      },
      // fontFamily: {
      //   sans: ["YourCustomFont", "sans-serif"],
      //   serif: ["YourSerifFont", "serif"],
      // },
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};

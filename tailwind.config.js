/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // use 'class' strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          base: "#ffffff",
          bg: "#F5F5F5",
          text: "#27272A",
          header: "#123458",
          button: "#123458",
          typewriter: "#123458",
          link: "#123458",
          icon: "#123458",
          border: "#123458",
          card: "#F8FAFC",
          mobilemenu: "#F8FAFC",
          navbar: "#F5F5F5",
        },
        dark: {
          base: "#000000",
          bg: "#011627",
          text: "#9ca3af",
          header: "#67e8f9",
          button: "#67e8f9",
          typewriter: "#67e8f9",
          link: "#67e8f9",
          icon: "#123458",
          border: "#67e8f9",
          card: "#011221",
          mobilemenu: "#011221",
          navbar: "#011627",
        },
      },
      fontFamily: {
        jet: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

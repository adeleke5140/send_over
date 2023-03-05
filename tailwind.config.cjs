/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-dark": "#121212",
        "color-yellow": "#ffc900",
        "color-pink": "#ff90e8",
      },
      fontFamily: {
        sans: [
          "ClashDisplay-Variable",
          "ClashDisplay",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};

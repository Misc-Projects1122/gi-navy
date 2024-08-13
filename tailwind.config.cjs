module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "pop-up": "popup 1s ease-out",
      },
      keyframes: {
        popup: {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        // barlow: ["Barlow Condensed", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        serifa: ["Serifa BT", "serif"],
      },
      lineHeight: {
        "extra-loose": "70px",
      },
      colors: {
        dark: "#03111E",
        backgroundSec: "#EEFBFB",
        background: "#0E1D2B",
        primary: "#01BDB7",
        secondary: "#007BC7",
        textPrimary: "#0E1D2B",
      },
      dropShadow: {
        white: "5px 0 0 #ffffff",
        primary: "0 0 5px #01BDB7",
      },
    },
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

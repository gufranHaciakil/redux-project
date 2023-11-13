/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        formAnimation: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawer: {
          "0%": { "transform": " translateX(400px)" },
          "100%": { "transform": " translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 4s ease-in",
        formAnimation: "formAnimation 2s ease-out",
        drawer: "drawer 1s ease-out",
      },
    },
  },
};

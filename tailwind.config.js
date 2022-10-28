/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {},
  },
  daisyui: {
    themes: [
      {
        shoptheme: {
          primary: "#AFE1AF",
          secondary: "#03B0D6",
          accent: "#D6BE08",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],

}

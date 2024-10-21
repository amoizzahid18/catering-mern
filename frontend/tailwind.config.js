/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xxs:"370px",
        xs: "430px", 
        xsm: "800px",
        xxsm: "900px",
        xlsm: "1100px",
        xlg: "1750px",
        slg: "1500px",
        xmd: "1260px",
        xlmd: "1210px",
      }
    },
  },
  plugins: [require("daisyui")],
};

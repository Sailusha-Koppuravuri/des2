/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fcfcfc",
          "200": "#fbfbfb",
          "300": "rgba(255, 255, 255, 0.37)",
          "400": "rgba(255, 255, 255, 0.8)",
        },
        mediumspringgreen: "#11ee92",
        darkslategray: "#252b2f",
        midnightblue: "#000a62",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        arial: "Arial",
        montserrat: "Montserrat",
        "emilio-test": "'Emilio Test'",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xs": "10px",
      xl: "20px",
      "9xl": "28px",
      "21xl": "40px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

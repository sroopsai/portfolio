/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#282c33",
        gray: "#abb2bf",
        white: "#fff",
        primary: "#c778dd",
        darkgray: "rgba(171, 178, 191, 0.2)",
        orchid: "rgba(199, 120, 221, 0.2)",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "fira-code": "'Fira Code'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

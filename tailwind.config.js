module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700: "#ffffff", A700_a2: "#ffffffa2" },
        red: {
          800: "#d91621",
          A100_01: "#fd8e8e",
          "800_01": "#d81521",
          A100_a5: "#ff7b7ba5",
          A100: "#fc8e8e",
        },
        yellow: {
          600: "#ffd233",
          800: "#f6a730",
          900: "#de7718",
          "800_a5": "#e4b12da5",
        },
        light_green: { 700: "#62b72d", 900: "#567400", A100: "#c1ef94" },
        green: {
          800: "#00901f",
          900: "#0d7911",
          A400: "#03fc73",
          "800_01": "#009020",
        },
        blue: {
          100: "#c6eaf2",
          300: "#74b9e0",
          700: "#1b7bd3",
          800: "#264dd6",
          "300_01": "#699bf7",
          "400_f7": "#3a98ddf7",
          A100_01: "#85b6ff",
          A100: "#77a3f3",
          "300_c9": "#5fa9d3c9",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_01": "#070706",
          "900_02": "#00141a",
        },
        light_blue: { 800: "#0064c0", 900: "#065988" },
        deep_purple: {
          200: "#c4a6d6",
          A200: "#9747ff",
          A200_01: "#9a58f0",
          "200_01": "#c4a6d7",
        },
        teal: {
          300: "#3b9ac3",
          600: "#1f9c6f",
          900: "#11464a",
          "900_01": "#043437",
        },
        blue_gray: {
          100: "#d9d9d9",
          700: "#494a5e",
          "700_01": "#4a4b5f",
          "100_01": "#d5d1d1",
        },
        purple: {
          500: "#b3288c",
          700: "#832992",
          800: "#7b0a8e",
          "500_01": "#bb2190",
        },
        deep_orange: { 100: "#f1b3b3", 600: "#f24e1e" },
        gray: {
          300: "#e6e6e6",
          400: "#c7c3c3",
          500: "#b49971",
          600: "#797979",
        },
        lime: {
          800: "#c58810",
          "500_9e": "#dbdf1c9e",
          "600_00": "#c5c81f00",
          "800_02": "#c4951b",
          "800_01": "#b29b22",
        },
        amber: { A400: "#f6c000", A400_01: "#ffc700" },
        orange: { "50_a5": "#fbf5e3a5" },
        cyan: { 100: "#c6eef1", 900: "#00646b", "100_c1": "#c2e5eac1" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#f1b3b3,#c5c81f00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

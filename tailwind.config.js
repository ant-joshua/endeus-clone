module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/10": "10%",
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "3/5": "60%",
      },
      overflow: ["hover", "focus"],
      padding: {
        "150%": "150%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

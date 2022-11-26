/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/*.html", "./public/*.{js,jsx,ts,tsx,vue}"],

  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

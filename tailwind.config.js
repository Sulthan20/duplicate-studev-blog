/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "F8F8F8",
      },
      fontFamily: {
        inter : ['Inter'],
        sans : ['Plus Jakarta Sans', 'sans-serif'],
        crimson : ['Crimson Pro', 'serif'],
        karla : ['karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

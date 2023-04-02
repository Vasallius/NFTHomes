/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: {
          50: "#fdf0f4",
          100: "#fad2e2",
          200: "#fa68a2",
          300: "#f63c74",
          400: "#ea6175",
          500: "#e52b50",
          600: "#c81c3a",
          700: "#a1132a",
          800: "#800f1f",
          900: "#670b19",
        },
      },
    },
  },
  plugins: [],
};

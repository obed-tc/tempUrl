/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eeffef",
          100: "#d7ffdb",
          200: "#b2ffba",
          300: "#76ff85",
          400: "#33f54a",
          500: "#09de22",
          600: "#00a814",
          700: "#049116",
          800: "#0a7117",
          900: "#0a5d16",
          950: "#003408",
        },
      },
    },
  },
  plugins: [],
};

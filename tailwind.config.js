/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "#f79b4b",
        customHover: "#e38a3c",
      },
    },
  },
  plugins: [require("./tailwind-custom-buttons")],
}

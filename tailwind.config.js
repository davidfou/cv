/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.125rem" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

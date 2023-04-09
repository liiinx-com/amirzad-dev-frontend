/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "smoke-white": "#FAFAFA",
        "logo-primary": "var(--logo-primary-hover)",
        "primary-color": "var(--primary)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "var(--color-purple)",
      lightred: "var(--color-lightred)",
      white: "var(--color-white)",
      offwhite: "var(--color-offwhite)",
      lightgrey: "var(--color-lightgrey)",
      smokeygrey: "var(--color-smokeygrey)",
      offblack: "var(--color-offblack)",
    },
    extend: {},
  },
  plugins: [],
};

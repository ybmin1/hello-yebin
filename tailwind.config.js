/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        550: "550ms",
      },
    },
  },
  plugins: [],
};

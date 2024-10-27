/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(4, 69%, 50%)",
        lime: "hsl(61, 70%, 52%)",
        "lime-900": "hsl(202,55%,12%)",
        "slate-100": "hsl(202, 86%, 94%)",
        "slate-300": "hsl(203, 41%, 72%)",
        "slate-500": "hsl(200, 26%, 54%)",
        "slate-700": "hsl(200, 24%, 40%)",
        "slate-900": "hsl(202, 55%, 16%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

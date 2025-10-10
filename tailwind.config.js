/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0B",
        paper: "#EDE6DF",
        "og-red": "#C62828",
        maroon: "#7B0F0F",
        ember: "#FF5A3C",
        gold: "#D9A441",
        muted: "#9EA6A6",
      },
      fontFamily: {
        display: ['"Black Ops One"', "Inter", "system-ui", "sans-serif"],
        ui: ["Inter", "system-ui", "sans-serif"],
      },
      dropShadow: {
        "red-lg": "0 12px 24px rgba(198,40,40,0.25)",
      },
    },
  },
  plugins: [],
};

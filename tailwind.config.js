/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f8fafc",
        paper: "#e2e8f0",
        "og-blue": "#1e3a8a",
        teal: "#0f766e",
        amber: "#f59e0b",
        gray: "#374151",
        muted: "#cbd5e1",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        ui: ["Inter", "system-ui", "sans-serif"],
      },
      dropShadow: {
        "red-lg": "0 12px 24px rgba(198,40,40,0.25)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "portfolio-theme": {
          primary: "#FF5733", // Bright Orange
          secondary: "#3b82f6", // Blue
          accent: "#facc15", // Yellow
          neutral: "#4b5563", // gray-600
          "base-100": "#111827", // gray-900
          "base-200": "#1f2937", // gray-800
          "base-300": "#374151", // gray-700
          "base-content": "#f9fafb", // gray-50
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};

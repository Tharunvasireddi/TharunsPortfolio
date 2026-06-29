/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09090B",
        card: "#111318",
        panel: "#0D0F14",
        line: "rgba(255,255,255,.08)",
        accent: "#6366F1",
        secondary: "#8B5CF6",
        ink: "#F4F4F5",
        muted: "#A1A1AA",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        ui: ["Inter", "system-ui", "sans-serif"],
      },
      dropShadow: {
        soft: "0 16px 40px rgba(0,0,0,0.28)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "portfolio-theme": {
          primary: "#6366F1",
          secondary: "#8B5CF6",
          accent: "#A78BFA",
          neutral: "#18181B",
          "base-100": "#09090B",
          "base-200": "#111318",
          "base-300": "#27272A",
          "base-content": "#F4F4F5",
          info: "#60A5FA",
          success: "#10b981",
          warning: "#F59E0B",
          error: "#F87171",
        },
      },
    ],
  },
};

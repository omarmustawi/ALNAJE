import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-1": "#18191F",
        "orange-color": "#d7612f",
        "black-color": "#4D4D4D",
        "gray-color": "#717171",
        "gray-light-color": "#717577",
        "bg-btn": "#E8F5E9",
        "light-gray": "#F5F7FA",
        "natural-black": "#263238",
        "silver-light": "#f5f7fa",
        // "color-2": "#f4edf2"
      },
    },
  },
  plugins: [],
};
export default config;

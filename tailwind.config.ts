import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        shades: "#FBFBFB",
      },
      colors: {
        primary: "#0E31AD",
      },
      fontSize: {
        "3xl": "28px",
      },
      margin: {
        "18": "72px",
      },
      padding: {
        "18": "72px",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        shadow: "rgba(3, 8, 23, 0.22)",
      },
      boxShadow: {
        1: "0px -4px 8px 0px rgba(7, 17, 51, 0.19)",
      },
    },
  },
  plugins: [],
};
export default config;

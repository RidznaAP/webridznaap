import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2185D5",
        black1: "#303841",
        black2: "#3A4750",
        white1: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
export default config;

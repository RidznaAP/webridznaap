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
        primary: "#0A2540",     // Oxford Navy (deep, calm, authoritative)
        secondary: "#3B9EDE",   // Cornflower Blue (clear, modern, calm accent)
        steel: "#1B4F8A",       // Steel Blue (mid-navy for hover/depth)
        black1: "#1A202C",      // Navy-black text
        black2: "#4A5568",      // Blue-gray muted text
        white1: "#FFFFFF",      // Pure White
        bgLight: "#F5F7FA",     // Cool off-white (blue-tinted)
        bgMid: "#EBF0F8",       // Slightly blue-tinted light surface
        borderLight: "#CBD5E1", // Blue-gray border
        accent: "#E8F4FD",      // Light sky tint for subtle highlights
      },
    },
  },
  plugins: [],
};
export default config;


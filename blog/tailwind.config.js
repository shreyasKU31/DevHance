/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#111827",
        secondary: "#6B7280",
        accent: "#2563EB",
        card: "#FFFFFF",
      },
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        soft: "0 4px 24px 0 rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

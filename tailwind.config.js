/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Deep black for primary text
        secondary: "#9f8e7d", // Warm beige for accents
        accent: "#d4af37", // Gold accent
        light: "#f5f5f5", // Light background color
        "neutral-100": "#ffffff",
        "neutral-200": "#f8f8f8",
        "neutral-300": "#f0f0f0",
        "neutral-400": "#e0e0e0",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
};

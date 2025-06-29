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
        primary: "#1a1a1a",
        secondary: "#9f8e7d",
        accent: "#d4af37",
        light: "#f5f5f5",
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
  corePlugins: {
    preflight: true,
  },
};

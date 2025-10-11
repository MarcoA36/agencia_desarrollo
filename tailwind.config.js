/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          bgPrimary: "var(--background-primary)",
          bgSecondary: "var(--background-secondary)",
          textPrimary: "var(--text-primary)",
          textSecondary: "var(--text-secondary)",
          accent: "var(--accent)",
          accentLight: "var(--accent-light)",
          accentGlow: "var(--accent-glow)",
        },
        boxShadow: {
          accentGlow: "0 10px 30px var(--accent-glow)",
        },
      },
    },
    plugins: [],
  };
  
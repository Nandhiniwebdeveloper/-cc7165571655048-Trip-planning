export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom travel-friendly theme colors
        primary: "#38bdf8",   // sky blue
        secondary: "#0ea5e9", // light blue
        accent: "#fbbf24",    // warm yellow
        dark: "#1e293b",      // slate/dark text
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { koamaru: "#2D336B", blush: "#FFF2F2", ink: "#0B0B0B", muted: "#777A98", line: "#D9D8E8" },
      boxShadow: { soft: "0 8px 30px rgba(45,51,107,.10)" },
    },
  },
  plugins: [],
};

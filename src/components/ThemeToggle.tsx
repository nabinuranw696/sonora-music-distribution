import { useState } from "react";
import { applyTheme } from "../lib/theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"));
  return (
    <button className="btn btn-ghost !px-3" aria-label="Toggle dark mode" onClick={() => { applyTheme(dark ? "light" : "dark"); setDark(!dark); }}>
      {dark ? "Light" : "Dark"}
    </button>
  );
}

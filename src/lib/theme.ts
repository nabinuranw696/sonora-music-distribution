export function applyTheme(t: "light" | "dark") {
  document.documentElement.classList.toggle("dark", t === "dark");
  try { localStorage.setItem("sonora-theme", t); } catch { /* storage unavailable */ }
}
export function initTheme() {
  let t: "light" | "dark" = "light";
  try { t = (localStorage.getItem("sonora-theme") as "light" | "dark") || t; } catch { /* ignore */ }
  applyTheme(t);
}

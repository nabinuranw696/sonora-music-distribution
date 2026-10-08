import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import type { Mod } from "../content/modules";

export default function DashboardShell({ base, label, modules, collapsedCount = 8 }: { base: string; label: string; modules: Mod[]; collapsedCount?: number }) {
  const [drawer, setDrawer] = useState(false);
  const [q, setQ] = useState("");
  const [all, setAll] = useState(false);
  const filtered = modules.filter((m) => m.title.toLowerCase().includes(q.toLowerCase()));
  const shown = q || all ? filtered : filtered.slice(0, collapsedCount);

  const sidebar = (
    <nav className="flex h-full flex-col gap-3 p-4" aria-label={`${label} navigation`}>
      <Link to="/"><Logo /></Link>
      <div className="sticky top-0 rounded-xl bg-blush p-3 dark:bg-white/5">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-muted">Signed-in workspace</p>
      </div>
      <input className="input" placeholder="Search pages" aria-label="Search pages" value={q} onChange={(e) => setQ(e.target.value)} />
      <ul className="flex-1 space-y-1 overflow-y-auto">
        {shown.map((m) => (
          <li key={m.path}>
            <NavLink to={`${base}/${m.path}`} onClick={() => setDrawer(false)}
              className={({ isActive }) => `block rounded-xl px-3 py-2 text-sm ${isActive ? "bg-koamaru text-white" : "hover:bg-blush dark:hover:bg-white/10"}`}>
              {m.title}
            </NavLink>
          </li>
        ))}
        {shown.length === 0 && <li className="px-3 py-2 text-sm text-muted">No pages match.</li>}
      </ul>
      {!q && filtered.length > collapsedCount && (
        <button className="text-left text-sm font-semibold text-koamaru dark:text-blush" onClick={() => setAll(!all)}>{all ? "Show less" : "Show more"}</button>
      )}
      <div className="flex items-center justify-between border-t border-line pt-3 text-xs text-muted dark:border-white/10">
        <Link to="/help">Help</Link><Link to="/terms">Terms</Link><ThemeToggle />
      </div>
    </nav>
  );

  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-line dark:border-white/10 lg:block">{sidebar}</aside>
      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white dark:bg-ink">{sidebar}</aside>
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center border-b border-line p-3 dark:border-white/10 lg:hidden">
          <button className="btn btn-ghost" aria-label="Open menu" onClick={() => setDrawer(true)}>Menu</button>
        </div>
        <div className="mx-auto max-w-5xl p-6"><Outlet /></div>
      </div>
    </div>
  );
}

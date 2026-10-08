import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
import ThemeToggle from "./ThemeToggle";

const nav = [["Features", "/features"], ["How it works", "/how-it-works"], ["Distribution", "/distribution"], ["Pricing", "/pricing"], ["Help", "/help"], ["Blog", "/blog"], ["Contact", "/contact"]];
const footer: Record<string, string[][]> = {
  Product: [["Features", "/features"], ["Pricing", "/pricing"], ["Platforms", "/supported-platforms"], ["Resources", "/artist-resources"]],
  Company: [["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"], ["FAQ", "/faq"]],
  Legal: [["Terms", "/terms"], ["Privacy", "/privacy"], ["Copyright", "/copyright-policy"], ["Payouts", "/payout-policy"], ["Anti-fraud", "/anti-fraud"], ["Cookies", "/cookies"]],
};

export default function PublicLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="bg-koamaru px-4 py-2 text-center text-xs text-white">SONORA is in development. Delivery integrations are not yet active.</div>
      <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur dark:bg-ink/90 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/"><Logo /></Link>
          <nav className="hidden gap-6 text-sm lg:flex" aria-label="Main">
            {nav.map(([l, to]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "font-semibold text-koamaru dark:text-white" : "text-muted hover:text-koamaru"}>{l}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-2 lg:flex"><ThemeToggle /><AuthButtons /></div>
          <button className="btn btn-ghost lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        </div>
        {open && (
          <div className="space-y-2 border-t border-line p-4 lg:hidden" onClick={() => setOpen(false)}>
            {nav.map(([l, to]) => <Link key={to} className="block py-2" to={to}>{l}</Link>)}
            <div className="flex gap-2 pt-2"><ThemeToggle /><AuthButtons /></div>
          </div>
        )}
      </header>
      <main><Outlet /></main>
      <footer className="mt-20 border-t border-line bg-blush py-12 dark:bg-white/5 dark:border-white/10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
          <div><Logo /><p className="mt-3 text-sm text-muted">Music distribution tools for independent artists.</p></div>
          {Object.entries(footer).map(([h, links]) => (
            <div key={h}><h3 className="text-sm font-semibold">{h}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">{links.map(([l, to]) => <li key={to}><Link to={to} className="hover:text-koamaru">{l}</Link></li>)}</ul></div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted">© {new Date().getFullYear()} SONORA. All rights reserved.</p>
      </footer>
    </div>
  );
}

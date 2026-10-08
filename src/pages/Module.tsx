import type { Mod } from "../content/modules";

/** Routed page for a dashboard module. Honest status: UI shell, backend feature not built yet. */
export default function Module({ mod }: { mod: Mod }) {
  return (
    <div>
      <span className="badge">UI shell: backend not implemented yet</span>
      <h1 className="mt-3 text-2xl font-bold text-koamaru dark:text-blush">{mod.title}</h1>
      <p className="mt-2 text-muted">{mod.desc}</p>
      <div className="card mt-6"><p className="text-sm">No data yet. This page will show real records once its API and database operations are built.</p></div>
    </div>
  );
}

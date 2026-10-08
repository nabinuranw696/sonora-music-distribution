import { Link } from "react-router-dom";
import { faqs } from "../content/pages";

const benefits = [
  ["Own your catalog", "Manage releases, credits and rights in one place."],
  ["Clear royalties", "A transparent ledger by period, store and territory."],
  ["Real support", "Chat with our team and keep the full history."],
  ["Honest status", "See what is live, sandboxed or still needs a delivery partner."],
];

export default function Home() {
  return (
    <>
      <section className="bg-blush dark:bg-white/5">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <span className="badge">For independent artists</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-koamaru dark:text-blush md:text-5xl">Release your music. Understand your earnings.</h1>
            <p className="mt-4 text-lg text-muted">SONORA brings release management, royalty reporting and artist support into one calm, professional dashboard.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" to="/sign-up">Start Distributing</Link>
              <Link className="btn btn-ghost" to="/features">Explore Features</Link>
            </div>
          </div>
          <div className="card" aria-label="Dashboard preview (illustration)">
            <p className="text-xs text-muted">Dashboard preview (illustration, sample numbers)</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[["Releases", "12"], ["In review", "2"], ["Delivered", "9"]].map(([l, v]) => (
                <div key={l} className="rounded-xl bg-white p-3 dark:bg-white/10"><p className="text-2xl font-bold text-koamaru dark:text-white">{v}</p><p className="text-xs text-muted">{l}</p></div>
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
              {[30, 55, 40, 70, 60, 90, 75].map((h, i) => <div key={i} className="flex-1 rounded-t bg-koamaru" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-koamaru dark:text-blush">Why artists choose SONORA</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([h, p]) => <div key={h} className="card"><h3 className="font-semibold">{h}</h3><p className="mt-2 text-sm text-muted">{p}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-koamaru dark:text-blush">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {["Create account", "Build release", "Submit for review", "Track earnings"].map((s, i) => (
            <li key={s} className="card"><span className="badge">Step {i + 1}</span><p className="mt-3 font-semibold">{s}</p></li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-koamaru dark:text-blush">Destinations</h2>
        <p className="mt-3 max-w-2xl text-muted">Our platform directory lists music destinations and shows which have an active delivery integration. The directory total and the operational count are always shown separately.</p>
        <Link to="/distribution-platforms" className="btn btn-ghost mt-5">View directory</Link>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-2xl font-bold text-koamaru dark:text-blush">FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => <details key={f.q} className="card"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-sm text-muted">{f.a}</p></details>)}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4">
        <div className="rounded-3xl bg-koamaru p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to release?</h2>
          <Link to="/sign-up" className="btn mt-5 bg-white text-koamaru">Create your account</Link>
        </div>
      </section>
    </>
  );
}

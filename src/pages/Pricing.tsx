import { Link } from "react-router-dom";
export default function Pricing() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold text-koamaru dark:text-blush">Pricing</h1>
      <p className="mt-3 text-muted">Pricing is managed by administrators and has not been published yet. No prices are shown until real plans are configured.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Starter", "Pro", "Label"].map((n) => (
          <div key={n} className="card"><h2 className="font-semibold">{n}</h2><p className="mt-2 text-sm text-muted">Price not configured</p><Link to="/contact" className="btn btn-ghost mt-4">Ask us</Link></div>
        ))}
      </div>
    </section>
  );
}

import { faqs } from "../content/pages";
export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-koamaru dark:text-blush">Frequently asked questions</h1>
      <div className="mt-6 space-y-3">{faqs.map((f) => <details key={f.q} className="card"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-sm text-muted">{f.a}</p></details>)}</div>
    </section>
  );
}

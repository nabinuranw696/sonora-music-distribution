import { useEffect } from "react";
import { infoPages } from "../content/pages";
import NotFound from "./NotFound";

export default function Info({ slug }: { slug: string }) {
  const page = infoPages[slug];
  useEffect(() => { if (page) document.title = `${page.title} | SONORA`; }, [page]);
  if (!page) return <NotFound />;
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-koamaru dark:text-blush">{page.title}</h1>
      <p className={`mt-3 ${page.legal ? "badge !whitespace-normal" : "text-lg text-muted"}`}>{page.intro}</p>
      <div className="mt-8 space-y-6">{page.sections.map((s) => <section key={s.h}><h2 className="text-lg font-semibold">{s.h}</h2><p className="mt-1 text-muted">{s.p}</p></section>)}</div>
    </article>
  );
}

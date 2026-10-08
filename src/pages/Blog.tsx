import { Link, useParams } from "react-router-dom";
import { posts } from "../content/pages";
import NotFound from "./NotFound";

export function BlogList() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-koamaru dark:text-blush">Blog</h1>
      <p className="mt-2 text-sm text-muted">Posts below are sample content until the CMS is connected.</p>
      <ul className="mt-6 space-y-3">{posts.map((p) => <li key={p.slug} className="card"><Link className="font-semibold" to={`/blog/${p.slug}`}>{p.title}</Link></li>)}</ul>
    </section>
  );
}
export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  return <article className="mx-auto max-w-3xl px-4 py-16"><h1 className="text-3xl font-bold text-koamaru dark:text-blush">{post.title}</h1><p className="mt-4 text-muted">{post.body}</p></article>;
}

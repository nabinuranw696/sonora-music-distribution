import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-6xl font-bold text-koamaru dark:text-blush">404</p>
      <h1 className="mt-2 text-xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn btn-primary mt-6">Back home</Link>
    </section>
  );
}

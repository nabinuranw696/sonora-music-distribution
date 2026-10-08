import { useState, type FormEvent } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.get("name"), email: f.get("email"), message: f.get("message") }) });
      setState(r.ok ? "sent" : "error");
    } catch { setState("error"); }
  }
  return (
    <section className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold text-koamaru dark:text-blush">Contact us</h1>
      {state === "sent" ? <p className="card mt-6">Thanks, your message was received.</p> : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block text-sm">Name<input name="name" required maxLength={100} className="input mt-1" /></label>
          <label className="block text-sm">Email<input name="email" type="email" required className="input mt-1" /></label>
          <label className="block text-sm">Message<textarea name="message" required minLength={10} maxLength={4000} rows={5} className="input mt-1" /></label>
          <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send message"}</button>
          {state === "error" && <p role="alert" className="text-sm text-red-600">Could not send. Check your details and try again.</p>}
        </form>
      )}
    </section>
  );
}

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

type Me = { email: string; role: string; artist: { stageName: string } | null };

export default function ArtistDashboard() {
  const { getToken } = useAuth();
  const [me, setMe] = useState<Me | null>(null);
  const [err, setErr] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/me", { headers: { Authorization: `Bearer ${await getToken()}` } });
        if (!r.ok) throw new Error(String(r.status));
        setMe((await r.json()).data);
      } catch { setErr("Could not reach the API. Is the server running?"); }
    })();
  }, [getToken]);
  const stats = ["Releases", "Pending", "Approved", "Delivered", "Available balance", "Pending balance"];
  return (
    <div>
      <h1 className="text-2xl font-bold text-koamaru dark:text-blush">Welcome{me?.artist ? `, ${me.artist.stageName}` : ""}</h1>
      {me && <p className="mt-1 text-sm text-muted">{me.email} · role verified by server: {me.role}</p>}
      {err && <p role="alert" className="mt-3 text-sm text-red-600">{err}</p>}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {stats.map((s) => <div key={s} className="card"><p className="text-xs text-muted">{s}</p><p className="mt-1 text-2xl font-bold">0</p><p className="text-xs text-muted">No data yet</p></div>)}
      </div>
    </div>
  );
}

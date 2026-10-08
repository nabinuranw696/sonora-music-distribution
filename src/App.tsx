import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import DashboardShell from "./components/DashboardShell";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import { BlogList, BlogPost } from "./pages/Blog";
import NotFound from "./pages/NotFound";
import { SignInPage, SignUpPage } from "./pages/Auth";
import Module from "./pages/Module";
import ArtistDashboard from "./pages/ArtistDashboard";
import { infoPages } from "./content/pages";
import { adminModules, artistModules, clerkModules, type Mod } from "./content/modules";

function area(base: string, label: string, mods: Mod[]) {
  return (
    <Route path={base} element={<Protected><DashboardShell base={base} label={label} modules={mods} /></Protected>}>
      <Route index element={<Navigate to={`${base}/dashboard`} replace />} />
      {mods.map((m) => <Route key={m.path} path={m.path} element={base === "/artist" && m.path === "dashboard" ? <ArtistDashboard /> : <Module mod={m} />} />)}
      {base === "/admin" && <>
        <Route path="artists/:id" element={<Module mod={{ path: "artists/:id", title: "Artist detail", desc: "Detail view of one artist." }} />} />
        <Route path="releases/:id" element={<Module mod={{ path: "releases/:id", title: "Release detail", desc: "Review one release." }} />} />
      </>}
      {base === "/clerk" && <Route path="conversations/:id" element={<Module mod={{ path: "conversations/:id", title: "Conversation", desc: "One support conversation." }} />} />}
      <Route path="*" element={<NotFound />} />
    </Route>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        {Object.keys(infoPages).map((slug) => <Route key={slug} path={slug} element={<Info slug={slug} />} />)}
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="404" element={<NotFound />} />
      </Route>
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      {area("/artist", "Artist", artistModules)}
      {area("/admin", "Administrator", adminModules)}
      {area("/clerk", "Support", clerkModules)}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import type { ReactNode } from "react";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { clerkEnabled } from "../lib/config";
import { Link } from "react-router-dom";

/** UX only. Real access control is enforced by the Express API. */
export default function Protected({ children }: { children: ReactNode }) {
  if (!clerkEnabled) {
    return (
      <div className="mx-auto max-w-lg p-10 text-center">
        <h1 className="text-2xl font-bold text-koamaru dark:text-blush">Authentication not configured</h1>
        <p className="mt-3 text-muted">Set VITE_CLERK_PUBLISHABLE_KEY in web/.env to enable sign-in.</p>
        <Link to="/" className="btn btn-primary mt-6">Back home</Link>
      </div>
    );
  }
  return (<><SignedIn>{children}</SignedIn><SignedOut><RedirectToSignIn /></SignedOut></>);
}

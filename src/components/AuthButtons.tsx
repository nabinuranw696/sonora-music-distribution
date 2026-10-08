import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { clerkEnabled } from "../lib/config";

export default function AuthButtons() {
  if (!clerkEnabled) return <Link className="btn btn-primary" to="/sign-up">Get started</Link>;
  return (
    <>
      <SignedOut>
        <Link className="btn btn-ghost" to="/sign-in">Sign in</Link>
        <Link className="btn btn-primary" to="/sign-up">Get started</Link>
      </SignedOut>
      <SignedIn>
        <Link className="btn btn-ghost" to="/artist/dashboard">Dashboard</Link>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}

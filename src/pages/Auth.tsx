import type { ReactNode } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { clerkEnabled } from "../lib/config";
import Logo from "../components/Logo";

function Wrap({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-blush p-4 dark:bg-ink"><Link to="/"><Logo /></Link>{children}</div>;
}
const missing = <p className="card max-w-sm text-sm">Authentication is not configured. Set VITE_CLERK_PUBLISHABLE_KEY in web/.env.</p>;

export const SignInPage = () => <Wrap>{clerkEnabled ? <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/artist/dashboard" /> : missing}</Wrap>;
export const SignUpPage = () => <Wrap>{clerkEnabled ? <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" forceRedirectUrl="/artist/dashboard" /> : missing}</Wrap>;

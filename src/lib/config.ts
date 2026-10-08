export const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;
export const clerkEnabled = Boolean(clerkKey);

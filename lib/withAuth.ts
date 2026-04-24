import { redirect } from "next/navigation";
import { auth0 } from "./auth0";
import { Auth0User } from "../helpers/types";


/**
 * withAuth — Server Component guard
 *
 * Usage in any async Server Component:
 *   const user = await withAuth();
 *
 * Redirects unauthenticated users to Auth0 login.
 * Returns the typed session user on success.
 */
export async function withAuth(): Promise<Auth0User> {
  const session = await auth0.getSession();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return session.user as Auth0User;
}

/**
 * getSessionUser — Returns user or null (no redirect)
 *
 * Usage when you want to conditionally render based on auth state:
 *   const user = await getSessionUser();
 */
export async function getSessionUser(): Promise<Auth0User | null> {
  const session = await auth0.getSession();
  return session?.user ? (session.user as Auth0User) : null;
}
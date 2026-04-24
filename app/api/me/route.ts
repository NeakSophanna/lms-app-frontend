import { auth0 } from "@/lib/auth0";
import { NextResponse } from "next/server";

/**
 * GET /api/me
 * Protected API route — returns the current user's session data as JSON.
 *
 * Pattern: call auth0.getSession() and return 401 if no session.
 * Use this pattern in any API route handler you want to protect.
 */
export async function GET() {
  const session = await auth0.getSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      sub: session.user.sub,
      name: session.user.name,
      email: session.user.email,
      picture: session.user.picture,
      email_verified: session.user.email_verified,
    },
  });
}
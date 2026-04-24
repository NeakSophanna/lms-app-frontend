export interface Auth0User {
  sub: string;         // Unique user ID (e.g. "auth0|abc123")
  name?: string;
  email?: string;
  email_verified?: boolean;
  picture?: string;
  nickname?: string;
  updated_at?: string;
  [key: string]: unknown; // Allow custom claims
}
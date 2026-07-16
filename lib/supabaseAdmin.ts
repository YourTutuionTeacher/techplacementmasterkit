import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

/**
 * Returns a server-side Supabase client using the service role key, or
 * `null` if Supabase env vars aren't set — callers should fall back to
 * another storage method in that case (see app/api/leads/route.ts).
 *
 * IMPORTANT: this uses the SERVICE ROLE key, which bypasses Row Level
 * Security. Never import this file in client components — it must only
 * ever run on the server (API routes, server components).
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    client = null;
    return client;
  }

  client = createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
  return client;
}

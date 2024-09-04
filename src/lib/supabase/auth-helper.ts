import "server-only";
import { SupabaseAuthHelper } from '@butttons/supabase-auth-helpers';
import { env } from "@/env";

export const supabaseAuthHelper = new SupabaseAuthHelper({
  supabaseId: env.SUPABASE_ID,
  supabaseUrl: env.NEXT_PUBLIC_SUPABASE_URL,
  jwtSecret: env.SUPABASE_JWT_SECRET
});
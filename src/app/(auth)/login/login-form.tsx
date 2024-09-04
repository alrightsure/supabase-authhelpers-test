"use client";

import { supabase } from "@/lib/supabase/client";

export function LoginForm() {
  const handleSubmit = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://localhost:3000/callback`
      }
    });
  };

  return <button onClick={handleSubmit}>Sign in With Github</button>;
}

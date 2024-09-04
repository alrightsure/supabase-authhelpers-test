import { NextRequest, NextResponse } from "next/server";
import { supabaseAuthHelper } from "@/lib/supabase/auth-helper";

export async function middleware(req: NextRequest) {
  try {
    await supabaseAuthHelper.getUser(req);
  } catch (error) {
    console.log({ error });
    if (req.url.includes("/protected")) {
      {
        return new Response("Unauthorized", {
          status: 401
        });
      }
    }
  }

  return NextResponse.next({
    request: {
      headers: req.headers
    }
  });
}

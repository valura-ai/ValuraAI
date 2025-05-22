import { NextRequest } from "next/server";
import { getSignInUrl } from "@workos-inc/authkit-nextjs";

export async function GET(request: NextRequest) {
  const signInUrl = await getSignInUrl();
  return Response.redirect(signInUrl);
}

import { NextRequest, NextResponse } from "next/server";
import { setAdminSessionCookie, verifyAdminCredentials } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (!body.email || !body.password || !verifyAdminCredentials(body.email, body.password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  await setAdminSessionCookie();
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { ADMIN_COOKIE, signAdminSession, verifyAdminPassword } from "@/lib/admin-auth";
import { absoluteUrl } from "@/lib/request-origin";

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get("password") || "").trim();

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.redirect(absoluteUrl(request, "/admin/login?error=config"));
  }

  if (!verifyAdminPassword(password)) {
    return NextResponse.redirect(absoluteUrl(request, "/admin/login?error=1"));
  }

  const response = NextResponse.redirect(absoluteUrl(request, "/admin"));
  response.cookies.set(ADMIN_COOKIE, signAdminSession(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}

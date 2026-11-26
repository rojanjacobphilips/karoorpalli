import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-auth";
import { absoluteUrl } from "@/lib/request-origin";

export async function POST(request: Request) {
  const response = NextResponse.redirect(absoluteUrl(request, "/admin/login"));
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}

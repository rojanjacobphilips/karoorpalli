import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await request.json()
    : Object.fromEntries((await request.formData()).entries());

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.email && !payload.name && !payload.phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.info("[karoorpalli form]", payload.type, {
    name: payload.name,
    email: payload.email,
  });

  return NextResponse.json({ ok: true });
}

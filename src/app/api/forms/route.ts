import { NextResponse } from "next/server";
import { Resend } from "resend";

type FormPayload = Record<string, unknown>;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/** Parish mail defaults — override with env in production. */
const MAIL = {
  from: process.env.FORM_FROM_EMAIL || "Karoor Palli <forms@karoorpalli.com>",
  office: process.env.FORM_NOTIFY_EMAIL || "office@karoorpalli.com",
  vicar: process.env.PRAYER_NOTIFY_EMAIL || "vicar@karoorpalli.com",
} as const;

function recipientFor(type: string) {
  if (type === "prayer") return MAIL.vicar;
  return MAIL.office;
}

function subjectFor(type: string, name: string) {
  if (type === "prayer") {
    return name ? `Prayer request from ${name}` : "Prayer request";
  }
  if (type === "newsletter") {
    return "Newsletter signup";
  }
  return name ? `${type || "Form"} from ${name}` : `Parish form: ${type || "message"}`;
}

function buildEmailBody(type: string, payload: FormPayload) {
  const lines = [
    `Form type: ${type || "unknown"}`,
    `Name: ${asString(payload.name) || "—"}`,
    `Email: ${asString(payload.email) || "—"}`,
    `Phone: ${asString(payload.phone) || "—"}`,
    "",
    asString(payload.message) || "(No message)",
  ];

  const skip = new Set(["type", "name", "email", "phone", "message", "company"]);
  for (const [key, value] of Object.entries(payload)) {
    if (skip.has(key) || value == null || value === "") continue;
    lines.push(`${key}: ${String(value)}`);
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const payload = (
    contentType.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries())
  ) as FormPayload;

  if (asString(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(payload.name);
  const email = asString(payload.email);
  const phone = asString(payload.phone);
  const type = asString(payload.type) || "message";

  if (!email && !name && !phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (type === "prayer" && !asString(payload.message)) {
    return NextResponse.json({ ok: false, error: "message_required" }, { status: 400 });
  }

  const to = recipientFor(type);
  const subject = subjectFor(type, name);
  const text = buildEmailBody(type, payload);

  console.info("[karoorpalli form]", type, { name, email, to });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("[karoorpalli form] RESEND_API_KEY is not set");
      return NextResponse.json({ ok: false, error: "mail_not_configured" }, { status: 503 });
    }
    // Local/dev: accept without sending so the form flow can be tested.
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: MAIL.from,
      to: [to],
      replyTo: email || undefined,
      subject,
      text,
    });

    if (error) {
      console.error("[karoorpalli form] resend error", error);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("[karoorpalli form] send failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

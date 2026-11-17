import { NextResponse } from "next/server";
import { createMailTransport, MAIL } from "@/lib/mail";
import { turnstileEnabled, verifyTurnstileToken } from "@/lib/turnstile";

type FormPayload = Record<string, unknown>;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function recipientFor(type: string) {
  if (type === "prayer" || type === "appointment") return MAIL.vicar;
  if (type === "offering") return MAIL.trustee;
  return MAIL.office;
}

function subjectFor(type: string, name: string) {
  if (type === "prayer") {
    return name ? `Prayer request from ${name}` : "Prayer request";
  }
  if (type === "appointment") {
    return name ? `Appointment request from ${name}` : "Appointment request";
  }
  if (type === "offering") {
    return name ? `Offering notification from ${name}` : "Offering notification";
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
    `Telephone: ${asString(payload.phone) || "—"}`,
    `WhatsApp: ${asString(payload.whatsapp) || "—"}`,
  ];

  if (asString(payload.particulars)) {
    lines.push("", "Particulars of the offering:", asString(payload.particulars));
  }

  lines.push(
    "",
    type === "offering" ? "Donation details and Amount:" : "Message:",
    asString(payload.message) || "(No message)",
  );

  const skip = new Set([
    "type",
    "name",
    "email",
    "phone",
    "whatsapp",
    "particulars",
    "message",
    "company",
    "captchaToken",
    "cf-turnstile-response",
  ]);
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
  const captchaToken =
    asString(payload.captchaToken) || asString(payload["cf-turnstile-response"]);

  if (!email && !name && !phone) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (type === "prayer" && !asString(payload.message)) {
    return NextResponse.json({ ok: false, error: "message_required" }, { status: 400 });
  }

  if (turnstileEnabled()) {
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const ok = await verifyTurnstileToken(captchaToken, ip);
    if (!ok) {
      return NextResponse.json({ ok: false, error: "captcha_failed" }, { status: 400 });
    }
  } else if (process.env.NODE_ENV === "production" && process.env.TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ ok: false, error: "captcha_failed" }, { status: 400 });
  }

  const to = recipientFor(type);
  const subject = subjectFor(type, name);
  const text = buildEmailBody(type, payload);

  console.info("[karoorpalli form]", type, { name, email, to });

  const transport = createMailTransport();
  if (!transport) {
    if (process.env.NODE_ENV === "production") {
      console.error("[karoorpalli form] SMTP_PASS is not set");
      return NextResponse.json({ ok: false, error: "mail_not_configured" }, { status: 503 });
    }
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    await transport.sendMail({
      from: MAIL.from,
      to,
      replyTo: email || undefined,
      subject,
      text,
    });
  } catch (err) {
    console.error("[karoorpalli form] send failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}

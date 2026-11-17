import nodemailer from "nodemailer";

/** Parish mail defaults — override with env in production. */
export const MAIL = {
  from: process.env.FORM_FROM_EMAIL || "Karoor Palli <prayers@karoorpalli.com>",
  office: process.env.FORM_NOTIFY_EMAIL || "secretary@karoorpalli.com",
  vicar:
    process.env.VICAR_NOTIFY_EMAIL ||
    process.env.PRAYER_NOTIFY_EMAIL ||
    "vicar@karoorpalli.com",
  trustee: process.env.TRUSTEE_NOTIFY_EMAIL || "trustee@karoorpalli.com",
} as const;

export function createMailTransport() {
  const user = process.env.SMTP_USER || "prayers@karoorpalli.com";
  const pass = process.env.SMTP_PASS;
  if (!pass) return null;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: { user, pass },
  });
}

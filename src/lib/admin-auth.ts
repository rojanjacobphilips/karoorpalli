import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE = "karoor_admin";

function secret() {
  return process.env.ADMIN_PASSWORD || process.env.SANITY_API_WRITE_TOKEN || "dev-admin";
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD || process.env.SANITY_API_WRITE_TOKEN);
}

export function signAdminSession() {
  return createHmac("sha256", secret()).update("karoor-admin-ok").digest("hex");
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  if (!expected) return false;
  const provided = password.trim();
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  const value = jar.get(COOKIE)?.value;
  if (!value) return false;
  const expected = signAdminSession();
  try {
    const a = Buffer.from(value);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export { COOKIE as ADMIN_COOKIE };
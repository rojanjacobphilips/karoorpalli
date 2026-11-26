/** Public site origin for redirects behind Hostinger / reverse proxies. */
export function getRequestOrigin(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  if (forwardedHost) {
    const proto = forwardedProto || (forwardedHost.includes("localhost") ? "http" : "https");
    return `${proto}://${forwardedHost}`;
  }

  const host = request.headers.get("host")?.split(",")[0]?.trim();
  if (host && !host.startsWith("0.0.0.0") && host !== "127.0.0.1") {
    const proto =
      forwardedProto || (host.includes("localhost") || host.startsWith("127.") ? "http" : "https");
    return `${proto}://${host}`;
  }

  return "https://karoorpalli.com";
}

export function absoluteUrl(request: Request, path: string) {
  return new URL(path, `${getRequestOrigin(request)}/`);
}

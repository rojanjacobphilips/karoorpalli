import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const paths = [
  "",
  "/about",
  "/about/vision",
  "/about/patron",
  "/about/feasts",
  "/about/architecture",
  "/about/cemetery",
  "/history",
  "/administration",
  "/administration/officers",
  "/administration/past-vicars",
  "/administration/reports",
  "/vicar",
  "/committee",
  "/organisations",
  "/news",
  "/events",
  "/obituary",
  "/gallery",
  "/videos",
  "/downloads",
  "/sacraments",
  "/prayer-requests",
  "/offerings",
  "/charity",
  "/parishioners",
  "/live",
  "/contact",
  "/search",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://karoorpalli.com";
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}

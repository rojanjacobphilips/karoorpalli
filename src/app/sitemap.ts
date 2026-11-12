import type { MetadataRoute } from "next";
import { galleryAlbums } from "@/content/site";
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
  "/administration/catholicos",
  "/administration/officers",
  "/administration/past-vicars",
  "/administration/reports",
  "/administration/malankara-association",
  "/administration/diocesan-council",
  "/vicar",
  "/committee",
  "/organisations",
  "/news",
  "/our-priests",
  "/events",
  "/obituary",
  "/gallery",
  ...galleryAlbums.map((album) => `/gallery/${album.slug}`),
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

import type { MetadataRoute } from "next";
import { getGalleryAlbums } from "@/content/cms";
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
  "/chapels-and-shrines",
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://karoorpalli.com";
  const albums = await getGalleryAlbums();
  const allPaths = [...paths, ...albums.map((album) => `/gallery/${album.slug}`)];
  return locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      changeFrequency: path === "" ? "daily" : "weekly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}

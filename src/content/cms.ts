import {
  events as fallbackEvents,
  galleryAlbums as fallbackGalleryAlbums,
  obituaries as fallbackObituaries,
  videos as fallbackVideos,
} from "@/content/site";
import type { Localized, Obituary, ParishEvent } from "@/content/types";
import { sanityFetch } from "@/sanity/lib/client";
import {
  eventBySlugQuery,
  eventsQuery,
  galleryAlbumBySlugQuery,
  galleryAlbumsQuery,
  obituariesQuery,
  obituaryBySlugQuery,
  videosQuery,
} from "@/sanity/lib/queries";

type SanityLocalized = Partial<Localized<string>> | null | undefined;

export type GalleryMedia = {
  type: "image" | "video";
  src: string;
  alt: Localized<string>;
};

export type GalleryAlbum = {
  slug: string;
  title: Localized<string>;
  year?: number;
  images: GalleryMedia[];
};

export type VideoItem = {
  id: string;
  title: Localized<string>;
  category: Localized<string>;
  youtube?: string;
  src?: string;
  facebook?: string;
};

function localized(value: SanityLocalized, fallback = ""): Localized<string> {
  return {
    en: value?.en?.trim() || fallback,
    ml: value?.ml?.trim() || value?.en?.trim() || fallback,
  };
}

function asDateString(value: unknown): string {
  if (typeof value !== "string" || !value) return "";
  return value.includes("T") ? value.slice(0, 10) : value;
}

function mapEvent(row: Record<string, unknown> | null): ParishEvent | null {
  if (!row?.slug || typeof row.slug !== "string") return null;
  return {
    slug: row.slug,
    title: localized(row.title as SanityLocalized),
    date: asDateString(row.date),
    time: localized(row.time as SanityLocalized),
    place: localized(row.place as SanityLocalized),
    excerpt: localized(row.excerpt as SanityLocalized),
    image: typeof row.image === "string" ? row.image : undefined,
  };
}

function mapObituary(row: Record<string, unknown> | null): Obituary | null {
  if (!row?.slug || typeof row.slug !== "string") return null;
  const name = localized(row.name as SanityLocalized);
  if (!name.en) return null;
  return {
    slug: row.slug,
    name,
    house: localized(row.house as SanityLocalized),
    age: typeof row.age === "number" ? row.age : undefined,
    date: typeof row.date === "string" ? row.date : asDateString(row.date),
    funeral: localized(row.funeral as SanityLocalized),
    burial: localized(row.burial as SanityLocalized),
    message: localized(row.message as SanityLocalized),
    photo: typeof row.photo === "string" ? row.photo : "/obituary/placeholder.jpg",
  };
}

function mapGalleryAlbum(row: Record<string, unknown> | null): GalleryAlbum | null {
  if (!row?.slug || typeof row.slug !== "string") return null;
  const title = localized(row.title as SanityLocalized);
  const images = Array.isArray(row.images)
    ? row.images
        .map((item): GalleryMedia | null => {
          if (!item || typeof item !== "object") return null;
          const media = item as Record<string, unknown>;
          if (typeof media.src !== "string" || !media.src) return null;
          return {
            type: media.type === "video" ? "video" : "image",
            src: media.src,
            alt: localized((media.alt as SanityLocalized) ?? title, title.en),
          };
        })
        .filter((item): item is GalleryMedia => Boolean(item))
    : [];
  if (!images.length && Array.isArray(row.imageUrls)) {
    for (const url of row.imageUrls) {
      if (typeof url !== "string" || !url) continue;
      images.push({
        type: url.match(/\.(mp4|webm|mov)(\?|$)/i) ? "video" : "image",
        src: url,
        alt: title,
      });
    }
  }
  return {
    slug: row.slug,
    title,
    year: typeof row.year === "number" ? row.year : undefined,
    images,
  };
}

function mapVideo(row: Record<string, unknown> | null): VideoItem | null {
  if (!row) return null;
  const id = typeof row.id === "string" ? row.id : "";
  if (!id) return null;
  return {
    id,
    title: localized(row.title as SanityLocalized),
    category: localized(row.category as SanityLocalized),
    youtube: typeof row.youtube === "string" ? row.youtube : undefined,
    src: typeof row.src === "string" ? row.src : undefined,
    facebook: typeof row.facebook === "string" ? row.facebook : undefined,
  };
}

export async function getEvents(): Promise<ParishEvent[]> {
  const rows = await sanityFetch<Record<string, unknown>[]>(eventsQuery);
  const mapped = (rows ?? []).map(mapEvent).filter((item): item is ParishEvent => Boolean(item));
  return mapped.length ? mapped : fallbackEvents;
}

export async function getEventBySlug(slug: string): Promise<ParishEvent | undefined> {
  const row = await sanityFetch<Record<string, unknown> | null>(eventBySlugQuery, { slug });
  const mapped = mapEvent(row);
  if (mapped) return mapped;
  return fallbackEvents.find((item) => item.slug === slug);
}

export async function getObituaries(): Promise<Obituary[]> {
  const rows = await sanityFetch<Record<string, unknown>[]>(obituariesQuery);
  const mapped = (rows ?? []).map(mapObituary).filter((item): item is Obituary => Boolean(item));
  return mapped.length ? mapped : fallbackObituaries;
}

export async function getObituaryBySlug(slug: string): Promise<Obituary | undefined> {
  const row = await sanityFetch<Record<string, unknown> | null>(obituaryBySlugQuery, { slug });
  const mapped = mapObituary(row);
  if (mapped) return mapped;
  return fallbackObituaries.find((item) => item.slug === slug);
}

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  const rows = await sanityFetch<Record<string, unknown>[]>(galleryAlbumsQuery);
  const mapped = (rows ?? [])
    .map(mapGalleryAlbum)
    .filter((item): item is GalleryAlbum => Boolean(item && item.images.length));
  return mapped.length ? mapped : (fallbackGalleryAlbums as GalleryAlbum[]);
}

export async function getGalleryAlbumBySlug(slug: string): Promise<GalleryAlbum | undefined> {
  const row = await sanityFetch<Record<string, unknown> | null>(galleryAlbumBySlugQuery, { slug });
  const mapped = mapGalleryAlbum(row);
  if (mapped?.images.length) return mapped;
  return (fallbackGalleryAlbums as GalleryAlbum[]).find((item) => item.slug === slug);
}

export async function getVideos(): Promise<VideoItem[]> {
  const rows = await sanityFetch<Record<string, unknown>[]>(videosQuery);
  const mapped = (rows ?? []).map(mapVideo).filter((item): item is VideoItem => Boolean(item));
  return mapped.length ? mapped : (fallbackVideos as VideoItem[]);
}

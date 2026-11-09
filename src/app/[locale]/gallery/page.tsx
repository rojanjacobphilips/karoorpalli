import Image from "next/image";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { galleryAlbums } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/gallery">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Image gallery", ml: "ചിത്രശാല" }}
      body={{
        en: "Open a folder to see its photographs.",
        ml: "ഫോൾഡർ തുറന്ന് അതിലെ ചിത്രങ്ങൾ കാണുക.",
      }}
    >
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {galleryAlbums.map((album) => {
          const cover = album.images[0];
          const videos = album.images.filter((item) => item.type === "video").length;
          const photos = album.images.length - videos;
          const countLabel = [
            photos
              ? locale === "ml"
                ? `${photos} ചിത്രങ്ങൾ`
                : `${photos} photograph${photos === 1 ? "" : "s"}`
              : "",
            videos
              ? locale === "ml"
                ? `${videos} വീഡിയോ`
                : `${videos} video${videos === 1 ? "" : "s"}`
              : "",
          ]
            .filter(Boolean)
            .join(", ");
          return (
            <Link
              key={album.slug}
              href={localizedPath(locale, `/gallery/${album.slug}`)}
              className="group block"
            >
              <div className="ml-4 h-4 w-28 rounded-t-xl bg-maroon" />
              <div className="overflow-hidden rounded-2xl rounded-tl-md bg-card shadow-[var(--shadow)]">
                {cover?.type === "video" ? (
                  <video
                    src={cover.src}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden
                    tabIndex={-1}
                    className="pointer-events-none aspect-[4/3] w-full object-cover"
                  />
                ) : cover ? (
                  <Image
                    src={cover.src}
                    alt={album.title[locale]}
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : null}
                <div className="p-4">
                  <h2 className="font-serif text-2xl text-maroon group-hover:text-gold">{album.title[locale]}</h2>
                  <p className="mt-1 text-sm text-gold">{countLabel}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </SimplePage>
  );
}

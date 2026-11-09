import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SimplePage } from "@/components/SimplePage";
import { galleryAlbums } from "@/content/site";
import { isLocale, localizedPath } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]/gallery/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const album = galleryAlbums.find((entry) => entry.slug === slug);
  if (!album) notFound();
  const videoOnly = album.images.every((item) => item.type === "video");

  return (
    <SimplePage
      locale={locale}
      title={album.title}
      kicker={{ en: "Image gallery", ml: "ചിത്രശാല" }}
      body={
        videoOnly
          ? { en: "Play the video below.", ml: "താഴെയുള്ള വീഡിയോ കാണുക." }
          : {
              en: "Tap a photograph to view it larger.",
              ml: "ചിത്രത്തിൽ ടാപ്പ് ചെയ്ത് വലുതാക്കാം.",
            }
      }
    >
      <Link
        href={localizedPath(locale, "/gallery")}
        className="mt-6 inline-flex text-sm font-semibold text-maroon"
      >
        {locale === "ml" ? "← എല്ലാ ഫോൾഡറുകളും" : "← All folders"}
      </Link>
      <GalleryGrid locale={locale} images={album.images} />
    </SimplePage>
  );
}

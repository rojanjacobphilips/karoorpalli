import { SimplePage } from "@/components/SimplePage";
import { videos } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/videos">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Video gallery", ml: "വീഡിയോ ഗാലറി" }}
      body={{
        en: "Categories: Holy Qurbana live, feasts, sermons and events. Paste YouTube IDs in the CMS — this page will embed them automatically.",
        ml: "വിഭാഗങ്ങൾ: വിശുദ്ധ കുർബാന ലൈവ്, തിരുനാളുകൾ, പ്രസംഗങ്ങൾ, പരിപാടികൾ.",
      }}
    >
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <figure key={video.id} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
            {"youtube" in video && video.youtube ? (
              <iframe
                title={video.title[locale]}
                src={`https://www.youtube.com/embed/${video.youtube}`}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : "facebook" in video && video.facebook ? (
              <div className="flex aspect-video items-center justify-center bg-maroon-deep">
                <iframe
                  title={video.title[locale]}
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.facebook)}&show_text=false&width=280`}
                  className="aspect-[9/16] h-full w-auto max-w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="grid aspect-video place-items-center bg-maroon-deep px-6 text-center text-ivory">
                <p>
                  {locale === "ml"
                    ? "യൂട്യൂബ് ഐ.ഡി. Sanity-യിൽ ചേർക്കുക"
                    : "Add a YouTube video ID in Sanity to embed this category."}
                </p>
              </div>
            )}
            <figcaption className="p-4">
              <span className="text-xs uppercase text-gold">{video.category[locale]}</span>
              <div className="font-serif text-xl text-maroon">{video.title[locale]}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SimplePage>
  );
}

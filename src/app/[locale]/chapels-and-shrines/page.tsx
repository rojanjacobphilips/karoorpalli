import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { formerChapels, pagesCopy, parishChapels, parishShrines } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

function PhotoFrame({
  src,
  alt,
  emptyLabel,
}: {
  src?: string;
  alt: string;
  emptyLabel: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ivory-deep">
      {src ? (
        <Image src={src} alt={alt} width={1200} height={800} className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full place-items-center px-6 text-center text-sm text-muted">{emptyLabel}</div>
      )}
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[locale]/chapels-and-shrines">) {
  const locale = await requireLocale(params);
  const photoSoon = locale === "ml" ? "ചിത്രം ഉടൻ ചേർക്കും" : "Photo to be added";

  return (
    <SimplePage locale={locale} {...pagesCopy.chapelsAndShrines}>
      <section className="mt-10">
        <h2 className="font-serif text-3xl text-maroon">{locale === "ml" ? "കപ്പേളകൾ" : "Chapels"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {parishChapels.map((chapel) => (
            <article key={chapel.name.en} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
              <PhotoFrame
                src={chapel.image}
                alt={chapel.imageAlt?.[locale] || chapel.name[locale]}
                emptyLabel={photoSoon}
              />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-maroon">{chapel.name[locale]}</h3>
                {chapel.place ? <p className="mt-1 text-sm text-gold">{chapel.place[locale]}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl text-maroon">
          {locale === "ml" ? "മുൻ കപ്പേള" : "Former Chapel"}
        </h2>
        <div className="mt-6 space-y-8">
          {formerChapels.map((chapel) => (
            <article key={chapel.name.en} className="rounded-3xl bg-card p-5 shadow-[var(--shadow)] sm:p-6">
              <h3 className="font-serif text-2xl text-maroon sm:text-3xl">{chapel.name[locale]}</h3>
              <p className="mt-1 text-sm text-gold">{chapel.place[locale]}</p>
              <p className="mt-3 text-muted">{chapel.note[locale]}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {locale === "ml" ? "പഴയ ചിത്രം" : "Old photo"}
                  </p>
                  <PhotoFrame
                    src={chapel.oldImage}
                    alt={chapel.oldImageAlt[locale]}
                    emptyLabel={photoSoon}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {locale === "ml" ? "ഇപ്പോഴത്തെ ചിത്രം" : "Current photo"}
                  </p>
                  <PhotoFrame
                    src={chapel.currentImage || undefined}
                    alt={chapel.currentImageAlt[locale]}
                    emptyLabel={
                      locale === "ml"
                        ? "ഇപ്പോഴത്തെ ദേവാലയ ചിത്രം ചേർക്കുക"
                        : "Add current church photo"
                    }
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl text-maroon">{locale === "ml" ? "ശ്രൈനുകൾ" : "Shrines"}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parishShrines.map((shrine, index) => (
            <article key={shrine.name.en} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
              <PhotoFrame src={shrine.image} alt={shrine.name[locale]} emptyLabel={photoSoon} />
              <div className="flex items-start gap-3 p-5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-maroon text-sm font-semibold text-ivory">
                  {index + 1}
                </span>
                <h3 className="font-serif text-xl text-maroon sm:text-2xl">{shrine.name[locale]}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SimplePage>
  );
}

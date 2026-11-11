import Image from "next/image";
import { SimplePage } from "@/components/SimplePage";
import { historyPage, metropolitan, timeline, vicar } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/history">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "History of the parish", ml: "ഇടവകയുടെ ചരിത്രം" }}
      kicker={historyPage.kicker}
    >
      <p className="font-serif text-2xl text-maroon">{historyPage.subtitle[locale]}</p>

      <section className="mt-10">
        <h2 className="font-serif text-3xl text-maroon">{historyPage.welcomeTitle[locale]}</h2>
        <p className="mt-4 text-lg text-muted">{historyPage.welcome[locale]}</p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-maroon">{historyPage.foundationsTitle[locale]}</h2>
        <ol className="relative mt-8 border-l-2 border-gold pl-8">
          {timeline.map((item) => (
            <li key={item.year + item.title.en} className="mb-10 last:mb-0">
              <span className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full bg-gold" />
              <div className={item.year === "1072 ME" ? "flex flex-col gap-6 sm:flex-row sm:items-start" : undefined}>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gold">{item.year}</p>
                  <h3 className="font-serif text-2xl text-maroon">{item.title[locale]}</h3>
                  <p className="mt-2 text-muted">{item.body[locale]}</p>
                  {item.year === "1999" ? (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                      {historyPage.metropolitans1999.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                {item.year === "1072 ME" ? (
                  <figure className="mx-auto w-full max-w-[16rem] shrink-0 sm:mx-0">
                    <Image
                      src="/people/st-gregorios.jpg"
                      alt={
                        locale === "ml"
                          ? "പരുമല വിശുദ്ധ ഗ്രീഗോറിയോസിന്റെ ഐക്കൺ"
                          : "Icon of St. Gregorios of Parumala"
                      }
                      width={660}
                      height={1024}
                      className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                    />
                    <figcaption className="mt-3 text-center text-sm text-muted">
                      {locale === "ml" ? "പരുമല വിശുദ്ധ ഗ്രീഗോറിയോസ്" : "St. Gregorios of Parumala"}
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-3xl text-maroon">{historyPage.faithTitle[locale]}</h2>
        <p className="mt-4 text-lg text-muted">{historyPage.faith[locale]}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 font-serif text-3xl text-maroon">{historyPage.leadershipTitle[locale]}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
            <p className="text-sm uppercase tracking-wide text-gold">{metropolitan.role[locale]}</p>
            <h3 className="mt-1 font-serif text-2xl text-maroon">{metropolitan.name}</h3>
          </article>
          <article className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
            <p className="text-sm uppercase tracking-wide text-gold">{vicar.role[locale]}</p>
            <h3 className="mt-1 font-serif text-2xl text-maroon">{vicar.name}</h3>
          </article>
        </div>
      </section>
    </SimplePage>
  );
}

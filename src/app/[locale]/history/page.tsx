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
          {timeline.map((item) => {
            const withImage =
              item.year === "1072 ME" ||
              item.year === "1958" ||
              item.year === "1999" ||
              item.year === "2018";
            return (
              <li key={item.year + item.title.en} className="mb-10 last:mb-0">
                <span className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full bg-gold" />
                <div
                  className={
                    withImage ? "flex flex-col gap-6 sm:flex-row sm:items-start" : undefined
                  }
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gold">{item.year}</p>
                    <h3 className="font-serif text-2xl text-maroon">{item.title[locale]}</h3>
                    {item.body[locale].split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="mt-2 text-muted">
                        {paragraph}
                      </p>
                    ))}
                    {item.year === "1999" ? (
                      <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                        {historyPage.metropolitans1999.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.year === "1958" ? (
                      <figure className="mt-4 w-full max-w-md">
                        <Image
                          src="/church/consecration-plaque.jpg"
                          alt={
                            locale === "ml"
                              ? "1958 ദേവാലയ കൂദാശയുടെ സ്മാരക ഫലകം"
                              : "Foundation and consecration plaque of St. Peter's Orthodox Church, Karoor"
                          }
                          width={1024}
                          height={768}
                          className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                        />
                        <figcaption className="mt-3 text-center text-sm text-muted">
                          {locale === "ml" ? "കൂദാശാ ഫലകം" : "Consecration plaque"}
                        </figcaption>
                      </figure>
                    ) : null}
                  </div>
                  {item.year === "1072 ME" ? (
                    <figure className="mx-auto w-full max-w-[16rem] shrink-0 sm:mx-0">
                      <Image
                        src="/church/pariyaram-puthen-palli.jpg"
                        alt={
                          locale === "ml"
                            ? "പരുമല തിരുമേനി തറക്കല്ലിടുന്ന പരിയാരം പുത്തൻപള്ളിയുടെ ആദ്യകാല ചിത്രീകരണം"
                            : "Depiction of Parumala Thirumeni founding Pariyaram Puthen Palli"
                        }
                        width={801}
                        height={1024}
                        className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                      />
                      <figcaption className="mt-3 text-center text-sm text-muted">
                        {locale === "ml"
                          ? "പരിയാരം പുത്തൻപള്ളി — റഫറൻസ് ചിത്രം"
                          : "Pariyaram Puthen Palli - Reference image"}
                      </figcaption>
                    </figure>
                  ) : null}
                  {item.year === "1958" ? (
                    <figure className="mx-auto w-full max-w-[16rem] shrink-0 sm:mx-0">
                      <Image
                        src="/church/karoor-old.jpg"
                        alt={
                          locale === "ml"
                            ? "പടികളും മണിഗോപുരവുമുള്ള കാരൂരിലെ ആദ്യകാല ദേവാലയം"
                            : "The early church at Karoor, with its steps and bell tower"
                        }
                        width={718}
                        height={1024}
                        className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                      />
                      <figcaption className="mt-3 text-center text-sm text-muted">
                        {locale === "ml" ? "ആദ്യകാല ദേവാലയം" : "The early church"}
                      </figcaption>
                    </figure>
                  ) : null}
                  {item.year === "1999" ? (
                    <figure className="mx-auto w-full max-w-sm shrink-0 sm:mx-0">
                      <Image
                        src="/church/new-sanctuary.jpg"
                        alt={
                          locale === "ml"
                            ? "താഴികക്കുടവും മണിഗോപുരവുമുള്ള കാരൂരിലെ പുതിയ ദേവാലയം"
                            : "The new sanctuary at Karoor, with its dome and bell tower"
                        }
                        width={1024}
                        height={768}
                        className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                      />
                      <figcaption className="mt-3 text-center text-sm text-muted">
                        {locale === "ml" ? "പുതിയ ദേവാലയം" : "The new sanctuary"}
                      </figcaption>
                    </figure>
                  ) : null}
                  {item.year === "2018" ? (
                    <div className="mx-auto grid w-full max-w-md shrink-0 grid-cols-2 gap-3 sm:mx-0">
                      <figure className="min-w-0">
                        <Image
                          src="/church/sanctuary-madbaha.jpg"
                          alt={
                            locale === "ml"
                              ? "നവീകരിച്ച മദ്ബഹയും ആർച്ചുകളും"
                              : "The renovated Madbaha and sanctuary arches"
                          }
                          width={768}
                          height={1024}
                          className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                        />
                        <figcaption className="mt-2 text-center text-sm text-muted">
                          {locale === "ml" ? "മദ്ബഹ" : "The Madbaha"}
                        </figcaption>
                      </figure>
                      <figure className="min-w-0">
                        <Image
                          src="/church/sanctuary-nave.jpg"
                          alt={
                            locale === "ml"
                              ? "നവീകരിച്ച ദേവാലയത്തിന്റെ ഉൾഭാഗം"
                              : "The renovated church nave and gallery"
                          }
                          width={768}
                          height={1024}
                          className="h-auto w-full rounded-2xl shadow-[var(--shadow)]"
                        />
                        <figcaption className="mt-2 text-center text-sm text-muted">
                          {locale === "ml" ? "ഉൾഭാഗം" : "The nave"}
                        </figcaption>
                      </figure>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
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

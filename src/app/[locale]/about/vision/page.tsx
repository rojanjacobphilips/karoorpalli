import { SimplePage } from "@/components/SimplePage";
import { pagesCopy, visionPage } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/about/vision">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage locale={locale} title={pagesCopy.vision.title}>
      <section className="rounded-3xl bg-card p-6 shadow-[var(--shadow)] md:p-8">
        <h2 className="font-serif text-3xl text-maroon">{visionPage.visionTitle[locale]}</h2>
        <p className="mt-4 text-lg text-muted">{visionPage.vision[locale]}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-3xl text-maroon">{visionPage.missionTitle[locale]}</h2>
        <div className="mt-6 space-y-4">
          {visionPage.missions.map((item) => (
            <article key={item.title.en} className="rounded-3xl bg-card p-5 shadow-[var(--shadow)] md:p-6">
              <h3 className="font-serif text-2xl text-maroon">{item.title[locale]}</h3>
              <p className="mt-2 text-muted">{item.body[locale]}</p>
            </article>
          ))}
        </div>
      </section>
    </SimplePage>
  );
}

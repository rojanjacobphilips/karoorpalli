import { SimplePage } from "@/components/SimplePage";
import { pagesCopy } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/about/feasts">) {
  const locale = await requireLocale(params);
  const { title, items } = pagesCopy.feasts;
  return (
    <SimplePage locale={locale} title={title}>
      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <section key={item.title.en} className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
            <h2 className="font-serif text-2xl text-maroon">{item.title[locale]}</h2>
            <p className="mt-2 text-gold">{item.subtitle[locale]}</p>
            <p className="mt-4 text-muted">{item.body[locale]}</p>
          </section>
        ))}
      </div>
    </SimplePage>
  );
}

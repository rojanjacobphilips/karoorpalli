import { SimplePage } from "@/components/SimplePage";
import { sacraments } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/sacraments">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Sacraments and services", ml: "കൂദാശകളും ശുശ്രൂഷകളും" }}
    >
      <div className="mt-8 space-y-6">
        {sacraments.map((item) => (
          <section key={item.slug} id={item.slug} className="rounded-3xl bg-card p-5 shadow-[var(--shadow)]">
            <h2 className="font-serif text-2xl text-maroon">{item.title[locale]}</h2>
            <p className="mt-2 text-muted">{item.body[locale]}</p>
          </section>
        ))}
      </div>
    </SimplePage>
  );
}

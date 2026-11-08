import Image from "next/image";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { obituaries } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/obituary">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "With homage", ml: "ആദരാഞ്ജലികൾ" }}
      body={{
        en: "The parish offers homage and keeps the family in prayer.",
        ml: "ഇടവക ആദരാഞ്ജലികൾ അർപ്പിക്കുകയും കുടുംബത്തെ പ്രാർത്ഥനയിൽ ഓർക്കുകയും ചെയ്യുന്നു.",
      }}
    >
      <div className="mt-8 space-y-6">
        {obituaries.map((item) => (
          <Link
            key={item.slug}
            href={localizedPath(locale, `/obituary/${item.slug}`)}
            className="grid gap-5 rounded-3xl bg-card p-4 shadow-[var(--shadow)] md:grid-cols-[220px_1fr] md:items-start"
          >
            <Image
              src={item.photo}
              alt={item.name[locale]}
              width={720}
              height={1024}
              className="h-auto w-full rounded-2xl"
            />
            <div>
              <h2 className="font-serif text-2xl text-maroon">{item.name[locale]}</h2>
              <p className="mt-2 text-muted">
                {item.house[locale]}
                {item.age ? ` · ${item.age}` : ""} · {item.date}
              </p>
              <p className="mt-3 text-muted">{item.funeral[locale]}</p>
              <p className="mt-2 text-muted">{item.burial[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}

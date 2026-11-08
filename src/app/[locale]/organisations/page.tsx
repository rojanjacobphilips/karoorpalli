import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { organisations } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/organisations">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Spiritual organisations", ml: "ആത്മീയ സംഘടനകൾ" }}
    >
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {organisations.map((org) => (
          <Link
            key={org.slug}
            href={localizedPath(locale, `/organisations/${org.slug}`)}
            className="rounded-3xl bg-card p-5 shadow-[var(--shadow)]"
          >
            <h2 className="font-serif text-2xl text-maroon">{org.name[locale]}</h2>
            <p className="mt-2 text-muted">{org.summary[locale]}</p>
            {org.meeting ? <p className="mt-2 text-sm text-gold">{org.meeting[locale]}</p> : null}
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}

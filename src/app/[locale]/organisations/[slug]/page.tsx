import { notFound } from "next/navigation";
import { SimplePage } from "@/components/SimplePage";
import { organisations } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function Page({
  params,
}: PageProps<"/[locale]/organisations/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const org = organisations.find((item) => item.slug === slug);
  if (!org) notFound();
  return (
    <SimplePage locale={locale} title={org.title ?? org.name} body={org.lead ?? org.summary}>
      {org.sections?.map((section) => (
        <section key={section.heading.en} className="mt-8">
          <h2 className="font-serif text-2xl text-maroon">{section.heading[locale]}</h2>
          {section.intro ? <p className="mt-3 text-lg text-muted">{section.intro[locale]}</p> : null}
          {section.points.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {section.points.map((point) => (
                <li key={`${point.label.en}-${point.text.en}`}>
                  <span className="font-semibold text-charcoal">{point.label[locale]}: </span>
                  <span className="text-muted">{point.text[locale]}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      {org.note ? (
        <p className="mt-8 rounded-3xl bg-card p-6 text-muted shadow-[var(--shadow)]">{org.note[locale]}</p>
      ) : null}
      {org.meeting ? (
        <p className="mt-6 rounded-2xl bg-ivory-deep p-4 text-maroon">{org.meeting[locale]}</p>
      ) : null}
    </SimplePage>
  );
}

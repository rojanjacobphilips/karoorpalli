import Image from "next/image";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { pagesCopy } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/about">) {
  const locale = await requireLocale(params);
  const { title, lead, sections } = pagesCopy.about;

  return (
    <SimplePage locale={locale} title={title}>
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <Image
          src="/church/karoor-front.jpg"
          alt={
            locale === "ml"
              ? "രാത്രിയിൽ പ്രകാശിതമായ കാരൂർ പള്ളിയുടെ മുൻഭാഗം"
              : "St. Peter's Orthodox Church, Karoor, illuminated at night"
          }
          width={900}
          height={1200}
          priority
          className="h-auto w-full max-w-sm shrink-0 self-center rounded-2xl shadow-[var(--shadow)] md:self-start"
        />
        <div>
          {lead[locale].split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {sections.map((section) => (
        <section key={section.heading.en} className="mt-10">
          <h2 className="font-serif text-2xl text-maroon">{section.heading[locale]}</h2>
          {section.body
            ? section.body[locale].split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-muted">
                  {paragraph}
                </p>
              ))
            : null}
          {section.points ? (
            <ul className="mt-4 space-y-4">
              {section.points.map((point) => (
                <li key={point.label.en}>
                  {point.href ? (
                    <Link
                      href={localizedPath(locale, point.href)}
                      className="font-semibold text-maroon underline-offset-2 hover:underline"
                    >
                      {point.label[locale]}
                    </Link>
                  ) : (
                    <span className="font-semibold text-charcoal">{point.label[locale]}</span>
                  )}
                  <span className="text-muted">: {point.text[locale]}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </SimplePage>
  );
}

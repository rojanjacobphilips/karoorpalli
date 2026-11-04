import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { parish } from "@/content/site";

export function SimplePage({
  locale,
  title,
  body,
  kicker,
  children,
}: {
  locale: Locale;
  title: { en: string; ml: string };
  body?: { en: string; ml: string };
  kicker?: { en: string; ml: string };
  children?: React.ReactNode;
}) {
  return (
    <main id="main">
      <PageHero locale={locale} title={title} kicker={kicker ?? parish.shortName} />
      <article className="mx-auto max-w-5xl px-4 py-12">
        {body
          ? body[locale].split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-4 text-lg text-muted first:mt-0">
                {paragraph}
              </p>
            ))
          : null}
        {children}
      </article>
    </main>
  );
}

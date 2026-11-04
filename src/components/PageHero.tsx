import type { Locale } from "@/lib/i18n";

export function PageHero({
  locale,
  title,
  kicker,
}: {
  locale: Locale;
  title: { en: string; ml: string };
  kicker?: { en: string; ml: string };
}) {
  return (
    <div className="cross-pattern border-b border-maroon/10 bg-maroon-deep px-4 py-16 text-ivory">
      <div className="mx-auto max-w-5xl">
        {kicker ? <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{kicker[locale]}</p> : null}
        <h1 className="font-serif text-4xl md:text-5xl">{title[locale]}</h1>
      </div>
    </div>
  );
}

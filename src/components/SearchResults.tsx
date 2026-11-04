"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { events, news, searchIndex } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function SearchResults({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").trim();
  const results = useMemo(() => {
    const needle = q.toLowerCase();
    if (!needle) return [];
    const pages = searchIndex.filter((item) =>
      `${item.title.en} ${item.title.ml} ${item.href}`.toLowerCase().includes(needle),
    );
    const articles = news
      .filter((item) => `${item.title.en} ${item.title.ml} ${item.excerpt.en}`.toLowerCase().includes(needle))
      .map((item) => ({ href: `/news/${item.slug}`, title: item.title }));
    const dates = events
      .filter((item) => `${item.title.en} ${item.title.ml}`.toLowerCase().includes(needle))
      .map((item) => ({ href: `/events/${item.slug}`, title: item.title }));
    return [...pages, ...articles, ...dates];
  }, [q]);

  return (
    <>
      <p className="mt-2 text-muted">
        {q
          ? locale === "ml"
            ? `“${q}” എന്നതിനുള്ള ഫലങ്ങൾ.`
            : `Results for “${q}”.`
          : locale === "ml"
            ? "ഹെഡറിലെ സെർച്ച് ഉപയോഗിക്കുക."
            : "Use the search box in the header, or type a query below."}
      </p>
      <form className="mt-6">
        <label className="sr-only" htmlFor="site-search">
          Search
        </label>
        <input
          id="site-search"
          name="q"
          defaultValue={q}
          className="w-full rounded-full border border-maroon/15 px-4 py-3"
          placeholder={locale === "ml" ? "തിരയുക" : "Search news, events and pages"}
        />
      </form>
      <ul className="mt-8 space-y-3">
        {results.map((item) => (
          <li key={item.href}>
            <Link
              href={localizedPath(locale, item.href)}
              className="block rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow)]"
            >
              {item.title[locale]}
            </Link>
          </li>
        ))}
      </ul>
      {q && results.length === 0 ? (
        <p className="mt-6 text-muted">
          {locale === "ml"
            ? "ഫലങ്ങളില്ല. വികാരി, വഴിപാട്, തിരുനാൾ എന്നിവ പരീക്ഷിക്കുക."
            : "No matches. Try “vicar”, “offerings” or “feast”."}
        </p>
      ) : null}
    </>
  );
}

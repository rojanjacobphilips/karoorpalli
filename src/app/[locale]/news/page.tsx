"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useMemo, useState } from "react";
import { SimplePage } from "@/components/SimplePage";
import { news } from "@/content/site";
import { isLocale, localizedPath } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const categories = ["all", ...new Set(news.map((item) => item.category.en))];
  const filtered = useMemo(
    () =>
      news.filter((item) => {
        const matchesCategory = category === "all" || item.category.en === category;
        const hay = `${item.title.en} ${item.title.ml} ${item.excerpt.en}`.toLowerCase();
        return matchesCategory && hay.includes(q.toLowerCase());
      }),
    [q, category],
  );

  return (
    <SimplePage locale={locale} title={{ en: "Parish news", ml: "ഇടവകാ വാർത്തകൾ" }}>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={locale === "ml" ? "തിരയുക" : "Search news"}
          className="flex-1 rounded-full border border-maroon/15 px-4 py-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-maroon/15 px-4 py-2"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={localizedPath(locale, `/news/${item.slug}`)}
            className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]"
          >
            <Image src={item.image} alt="" width={640} height={360} className="h-44 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs uppercase text-gold">{item.category[locale]}</p>
              <h2 className="font-serif text-xl text-maroon">{item.title[locale]}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{item.excerpt[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}

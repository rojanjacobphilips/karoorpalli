"use client";

import { use, useMemo, useState } from "react";
import { SimplePage } from "@/components/SimplePage";
import { downloads } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      downloads.filter((item) =>
        `${item.title.en} ${item.title.ml} ${item.category.en}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );
  return (
    <SimplePage locale={locale} title={{ en: "Downloads", ml: "ഡൗൺലോഡുകൾ" }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={locale === "ml" ? "തിരയുക" : "Search files"}
        className="mt-4 w-full rounded-full border border-maroon/15 px-4 py-2"
      />
      <ul className="mt-6 space-y-3">
        {filtered.map((item) => (
          <li key={item.title.en}>
            <a
              href={item.href}
              download
              className="flex items-center justify-between rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow)]"
            >
              <span>
                <span className="block text-xs uppercase text-gold">{item.category[locale]}</span>
                {item.title[locale]}
              </span>
              <span className="text-sm text-muted">{item.size}</span>
            </a>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}

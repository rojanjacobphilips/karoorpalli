"use client";

import { ChevronDown } from "lucide-react";
import { use, useEffect, useMemo, useState } from "react";
import { SimplePage } from "@/components/SimplePage";
import { downloadCategories, downloads } from "@/content/site";
import type { DownloadItem } from "@/content/types";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type DownloadGroup = {
  key: string;
  label: DownloadItem["category"];
  items: DownloadItem[];
};

const groups: DownloadGroup[] = downloadCategories.map((label) => ({
  key: label.en,
  label,
  items: downloads.filter((item) => item.category.en === label.en),
}));

for (const item of downloads) {
  if (downloadCategories.some((category) => category.en === item.category.en)) continue;
  const existing = groups.find((group) => group.key === item.category.en);
  if (existing) existing.items.push(item);
  else groups.push({ key: item.category.en, label: item.category, items: [item] });
}

function fileCount(locale: Locale, count: number) {
  if (count === 0) return locale === "ml" ? "ഫയലുകൾ ഇല്ല" : "No files yet";
  if (locale === "ml") return count === 1 ? "1 ഫയൽ" : `${count} ഫയലുകൾ`;
  return count === 1 ? "1 file" : `${count} files`;
}

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((group) => {
        const nameMatches = `${group.label.en} ${group.label.ml}`.toLowerCase().includes(q);
        const items = group.items.filter((item) =>
          `${item.title.en} ${item.title.ml}`.toLowerCase().includes(q),
        );
        return { ...group, items: nameMatches ? group.items : items };
      })
      .filter((group) => {
        const nameMatches = `${group.label.en} ${group.label.ml}`.toLowerCase().includes(q);
        return nameMatches || group.items.length > 0;
      });
  }, [query]);

  useEffect(() => {
    if (!query.trim()) return;
    setOpen(visible[0]?.key ?? null);
  }, [query, visible]);

  function toggle(key: string) {
    setOpen((current) => (current === key ? null : key));
  }

  return (
    <SimplePage
      locale={locale}
      title={{ en: "Downloads", ml: "ഡൗൺലോഡുകൾ" }}
      body={{
        en: "Choose a category to see the files you can download.",
        ml: "ഡൗൺലോഡ് ചെയ്യാവുന്ന ഫയലുകൾ കാണാൻ ഒരു വിഭാഗം തിരഞ്ഞെടുക്കുക.",
      }}
    >
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={locale === "ml" ? "തിരയുക" : "Search files"}
        className="mt-4 w-full rounded-full border border-maroon/15 bg-card px-4 py-2"
      />
      {visible.length === 0 ? (
        <p className="mt-6 text-muted">{locale === "ml" ? "ഫയലുകൾ കണ്ടെത്തിയില്ല." : "No files found."}</p>
      ) : (
        <div className="mt-6 space-y-3">
          {visible.map((group) => {
            const expanded = open === group.key;
            const panelId = `downloads-${group.key.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <section key={group.key} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow)]">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(group.key)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span>
                    <span className="block font-serif text-2xl text-maroon">{group.label[locale]}</span>
                    <span className="text-sm text-gold">{fileCount(locale, group.items.length)}</span>
                  </span>
                  <ChevronDown
                    aria-hidden
                    className={`h-5 w-5 shrink-0 text-maroon transition ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded ? (
                  <ul id={panelId} className="border-t border-ivory-deep">
                    {group.items.length === 0 ? (
                      <li className="px-5 py-3 text-muted">
                        {locale === "ml" ? "ഈ വിഭാഗത്തിൽ ഫയലുകൾ ഇല്ല." : "No files in this category yet."}
                      </li>
                    ) : null}
                    {group.items.map((item) => (
                      <li key={item.title.en} className="border-b border-ivory-deep last:border-b-0">
                        <a
                          href={item.href}
                          download
                          className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-ivory-deep"
                        >
                          <span className="text-charcoal">{item.title[locale]}</span>
                          <span className="shrink-0 text-sm text-muted">{item.size}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </div>
      )}
    </SimplePage>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import type { ParishEvent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function EventsBrowser({ locale, events }: { locale: Locale; events: ParishEvent[] }) {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setView("list")}
          className={`rounded-full px-4 py-2 ${view === "list" ? "bg-maroon text-ivory" : "bg-ivory-deep"}`}
        >
          {locale === "ml" ? "ലിസ്റ്റ്" : "List"}
        </button>
        <button
          type="button"
          onClick={() => setView("calendar")}
          className={`rounded-full px-4 py-2 ${view === "calendar" ? "bg-maroon text-ivory" : "bg-ivory-deep"}`}
        >
          {locale === "ml" ? "കലണ്ടർ" : "Calendar"}
        </button>
      </div>
      {view === "list" ? (
        <div className="mt-6 space-y-4">
          {events.map((item) => (
            <Link
              key={item.slug}
              href={localizedPath(locale, `/events/${item.slug}`)}
              className="block rounded-3xl bg-card p-5 shadow-[var(--shadow)]"
            >
              <div className="text-sm text-gold">
                {item.date} · {item.time[locale]}
              </div>
              <h2 className="font-serif text-2xl text-maroon">{item.title[locale]}</h2>
              <p className="text-muted">{item.place[locale]}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid gap-3 rounded-3xl bg-card p-5 shadow-[var(--shadow)] sm:grid-cols-2">
          {events.map((item) => (
            <div key={item.slug} className="rounded-2xl border border-maroon/10 p-4">
              <div className="font-semibold text-gold">{item.date}</div>
              <div>{item.title[locale]}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

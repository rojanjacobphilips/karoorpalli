"use client";

import Image from "next/image";
import { use, useState } from "react";
import { SimplePage } from "@/components/SimplePage";
import { committee } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const years = ["2025–2026", "2023–2024"];

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  if (!isLocale(locale)) notFound();
  const [year, setYear] = useState(years[0]);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Managing committee", ml: "ഭരണസമിതി" }}
      body={{
        en: "Member cards for the selected term. Previous committees can be stored in Sanity and selected here.",
        ml: "തിരഞ്ഞെടുത്ത കാലയളവിലെ അംഗങ്ങൾ.",
      }}
    >
      <label className="mt-4 block text-sm font-medium">
        {locale === "ml" ? "കാലയളവ്" : "Term"}
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="ml-2 rounded-full border border-maroon/15 bg-white px-3 py-1"
        >
          {years.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {committee.map((member) => (
          <article key={member.name} className="rounded-3xl bg-card p-4 text-center shadow-[var(--shadow)]">
            <Image src={member.photo} alt={member.name} width={280} height={280} className="mx-auto h-40 w-40 rounded-full object-cover" />
            <h2 className="mt-3 font-serif text-xl text-maroon">{member.name}</h2>
            <p className="text-sm text-gold">{member.role[locale]}</p>
            <p className="text-xs text-muted">{year}</p>
          </article>
        ))}
      </div>
    </SimplePage>
  );
}

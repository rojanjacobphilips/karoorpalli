"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "karoor-theme";

export const themes = [
  {
    id: "parish",
    swatch: "#6b1d2a",
    label: { en: "Parish", ml: "ഇടവക" },
  },
  {
    id: "grove",
    swatch: "#1e4a38",
    label: { en: "Grove", ml: "ഹരിതം" },
  },
  {
    id: "vespers",
    swatch: "#1a1513",
    label: { en: "Vespers", ml: "സന്ധ്യ" },
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

function isTheme(value: string | null): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

export function applyTheme(theme: ThemeId) {
  if (theme === "parish") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event("karoor-theme"));
}

export function ThemeSwitch({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<ThemeId>("parish");

  useEffect(() => {
    const read = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      setTheme(isTheme(stored) ? stored : "parish");
    };
    read();
    window.addEventListener("karoor-theme", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("karoor-theme", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-maroon/15 bg-card p-1"
      role="radiogroup"
      aria-label={locale === "ml" ? "നിറം" : "Colour theme"}
    >
      {themes.map((item) => {
        const selected = theme === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={item.label[locale]}
            title={item.label[locale]}
            onClick={() => applyTheme(item.id)}
            className={`h-6 w-6 rounded-full border border-black/10 ${selected ? "ring-2 ring-gold ring-offset-2 ring-offset-card" : ""}`}
            style={{ backgroundColor: item.swatch }}
          />
        );
      })}
    </div>
  );
}

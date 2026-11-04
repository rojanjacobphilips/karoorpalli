"use client";

import { useEffect, useState } from "react";
import { ui } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function CookieConsent({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("karoor-cookie");
    if (!stored) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-4 right-24 z-40 max-w-xl rounded-2xl bg-charcoal p-4 text-sm text-ivory shadow-xl">
      <p>{ui.cookie[locale]}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          className="rounded-full bg-gold px-4 py-1.5 font-semibold text-maroon-deep"
          onClick={() => {
            window.localStorage.setItem("karoor-cookie", "accepted");
            setVisible(false);
          }}
        >
          {ui.accept[locale]}
        </button>
        <button
          type="button"
          className="rounded-full border border-ivory/30 px-4 py-1.5"
          onClick={() => {
            window.localStorage.setItem("karoor-cookie", "declined");
            setVisible(false);
          }}
        >
          {ui.decline[locale]}
        </button>
      </div>
    </div>
  );
}

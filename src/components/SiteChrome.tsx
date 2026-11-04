"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Locale } from "@/lib/i18n";

export function SiteChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const pathname = usePathname() || `/${locale}`;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header locale={locale} pathname={pathname} />
      <div className="flex-1">{children}</div>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
      <CookieConsent locale={locale} />
      <Analytics />
    </>
  );
}

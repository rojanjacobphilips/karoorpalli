import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { parish } from "@/content/site";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: parish.officialName.en,
    alternateName: ["Karoor Palli", parish.officialName.ml],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elanthoor",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    telephone: parish.phone,
    email: parish.email,
    url: "https://karoorpalli.com",
    parentOrganization: parish.church.en,
  };

  return (
    <SiteChrome locale={locale as Locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </SiteChrome>
  );
}

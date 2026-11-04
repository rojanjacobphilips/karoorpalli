import Image from "next/image";
import { notFound } from "next/navigation";
import { SimplePage } from "@/components/SimplePage";
import { news, parish } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]/news/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = news.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const share = `https://wa.me/?text=${encodeURIComponent(`${item.title.en} https://karoorpalli.com/${locale}/news/${slug}`)}`;
  return (
    <SimplePage locale={locale} title={item.title} kicker={item.category}>
      <p className="text-sm text-gold">{item.date}</p>
      <Image src={item.image} alt="" width={1200} height={640} className="my-6 rounded-3xl" />
      <p className="text-lg text-muted">{item.excerpt[locale]}</p>
      <a className="mt-6 inline-flex rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white" href={share}>
        {locale === "ml" ? "വാട്സ്ആപ്പിൽ പങ്കിടുക" : "Share on WhatsApp"}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: item.title.en,
            datePublished: item.date,
            publisher: parish.officialName.en,
          }),
        }}
      />
    </SimplePage>
  );
}

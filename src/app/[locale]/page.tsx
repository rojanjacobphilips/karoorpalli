import { HeroSlider } from "@/components/home/HeroSlider";
import { HomeSections } from "@/components/home/HomeSections";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main id="main">
      <HeroSlider locale={locale} />
      <HomeSections locale={locale} />
    </main>
  );
}

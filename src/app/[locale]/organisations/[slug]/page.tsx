import { notFound } from "next/navigation";
import { SimplePage } from "@/components/SimplePage";
import { organisations } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function Page({
  params,
}: PageProps<"/[locale]/organisations/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const org = organisations.find((item) => item.slug === slug);
  if (!org) notFound();
  return (
    <SimplePage locale={locale} title={org.name} body={org.summary}>
      <p className="mt-6 rounded-2xl bg-ivory-deep p-4 text-maroon">{org.meeting[locale]}</p>
    </SimplePage>
  );
}

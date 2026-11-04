import { SimplePage } from "@/components/SimplePage";
import { pagesCopy } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/terms">) {
  const locale = await requireLocale(params);
  return <SimplePage locale={locale} {...pagesCopy.terms} />;
}

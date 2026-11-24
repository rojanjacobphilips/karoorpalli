import { ChapelsShrinesContent } from "@/components/ChapelsShrinesContent";
import { SimplePage } from "@/components/SimplePage";
import { formerChapels, pagesCopy, parishChapels, parishShrines } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/chapels-and-shrines">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage locale={locale} {...pagesCopy.chapelsAndShrines}>
      <ChapelsShrinesContent
        locale={locale}
        chapels={parishChapels}
        formerChapels={formerChapels}
        shrines={parishShrines}
      />
    </SimplePage>
  );
}

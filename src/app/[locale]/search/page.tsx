import { Suspense } from "react";
import { SimplePage } from "@/components/SimplePage";
import { SearchResults } from "@/components/SearchResults";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/search">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage locale={locale} title={{ en: "Search", ml: "തിരയുക" }}>
      <Suspense fallback={<p className="mt-6 text-muted">…</p>}>
        <SearchResults locale={locale} />
      </Suspense>
    </SimplePage>
  );
}

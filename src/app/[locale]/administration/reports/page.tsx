import { SimplePage } from "@/components/SimplePage";
import { downloads } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/administration/reports">) {
  const locale = await requireLocale(params);
  const reports = downloads.filter((item) => item.category.en === "Reports");
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Annual reports and accounts", ml: "വാർഷിക റിപ്പോർട്ടും കണക്കുകളും" }}
    >
      <ul className="mt-6 space-y-3">
        {reports.map((item) => (
          <li key={item.title.en}>
            <a className="block rounded-2xl bg-card px-4 py-3 shadow-[var(--shadow)]" href={item.href}>
              {item.title[locale]} <span className="text-sm text-muted">({item.size})</span>
            </a>
          </li>
        ))}
      </ul>
    </SimplePage>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { obituaries } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]/obituary/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const item = obituaries.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <SimplePage locale={locale} title={item.name}>
      <div className="flex flex-col items-start gap-6 md:flex-row">
        <Image
          src={item.photo}
          alt={item.name[locale]}
          width={720}
          height={1024}
          className="h-auto w-full max-w-sm rounded-2xl"
        />
        <div>
          <p>{item.house[locale]}</p>
          <p>
            {item.age ? `${locale === "ml" ? "വയസ്സ്" : "Age"} ${item.age} · ` : ""}
            {item.date}
          </p>
          <p className="mt-3">{item.funeral[locale]}</p>
          <p className="mt-2">{item.burial[locale]}</p>
          <p className="mt-4 text-muted">{item.message[locale]}</p>
        </div>
      </div>
      <div className="mt-10 rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
        <h2 className="mb-4 font-serif text-2xl text-maroon">
          {locale === "ml" ? "അനുശോചനം അറിയിക്കുക" : "Send condolences"}
        </h2>
        <ParishForm
          locale={locale}
          type="condolence"
          fields={[
            { name: "name", label: locale === "ml" ? "പേര്" : "Your name", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "message", label: locale === "ml" ? "സന്ദേശം" : "Message", textarea: true, required: true },
          ]}
        />
      </div>
    </SimplePage>
  );
}

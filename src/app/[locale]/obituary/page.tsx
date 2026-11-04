import Image from "next/image";
import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";
import { obituaries } from "@/content/site";
import { localizedPath } from "@/lib/i18n";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/obituary">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "In remembrance", ml: "അനുസ്മരണം" }}
      body={{
        en: "This page is kept simple and quiet. New notices are posted only by the Obituary Editor in the CMS.",
        ml: "ഈ താൾ ലളിതവും ശാന്തവുമായി സൂക്ഷിക്കുന്നു. അനുസ്മരണങ്ങൾ CMS-ൽ മാത്രം ചേർക്കും.",
      }}
    >
      <div className="mt-8 space-y-6">
        {obituaries.map((item) => (
          <Link
            key={item.slug}
            href={localizedPath(locale, `/obituary/${item.slug}`)}
            className="flex gap-4 rounded-3xl bg-card p-4 shadow-[var(--shadow)]"
          >
            <Image src={item.photo} alt="" width={120} height={120} className="h-24 w-24 rounded-full object-cover grayscale" />
            <div>
              <h2 className="font-serif text-2xl text-maroon">{item.name}</h2>
              <p className="text-sm text-muted">
                {item.house[locale]} · {item.age} · {item.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SimplePage>
  );
}

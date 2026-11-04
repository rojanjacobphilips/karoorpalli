import Image from "next/image";
import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { vicar } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/vicar">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage locale={locale} title={{ en: "The Vicar", ml: "വികാരി" }}>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <Image src={vicar.photo} alt={vicar.name} width={480} height={560} className="rounded-3xl object-cover" />
          <h2 className="mt-4 font-serif text-3xl text-maroon">{vicar.name}</h2>
          <p className="text-gold">{vicar.role[locale]}</p>
          <p className="mt-3 text-muted">{vicar.bio[locale]}</p>
          <p className="mt-3 text-sm">
            {vicar.email}
            <br />
            {vicar.phone}
          </p>
        </div>
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="mb-4 font-serif text-2xl text-maroon">
            {locale === "ml" ? "സന്ദർശന അപേക്ഷ" : "Request an appointment"}
          </h2>
          <ParishForm
            locale={locale}
            type="appointment"
            fields={[
              { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ml" ? "ഫോൺ" : "Phone", required: true },
              {
                name: "message",
                label: locale === "ml" ? "ആവശ്യം" : "Reason for visit",
                textarea: true,
                required: true,
              },
            ]}
          />
        </div>
      </div>
    </SimplePage>
  );
}

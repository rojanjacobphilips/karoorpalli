import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { parish } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/contact">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Contact the parish", ml: "ഇടവകയെ ബന്ധപ്പെടുക" }}
      body={{
        en: "The office is at Karoor, Elanthoor, Pathanamthitta. For sacraments, call the Vicar. For accounts and certificates, write to the Secretary or Trustee.",
        ml: "ഓഫീസ് കാരൂർ, ഇലന്തൂർ, പത്തനംതിട്ട. കൂദാശകൾക്ക് വികാരിയെ വിളിക്കുക.",
      }}
    >
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="font-serif text-2xl text-maroon">
            {locale === "ml" ? "വിലാസം" : "Address"}
          </h2>
          <address className="mt-4 not-italic leading-7 text-muted">
            {parish.addressLines[locale].map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div className="mt-3">
              <a href={`tel:${parish.phone.replace(/\s/g, "")}`}>{parish.phone}</a>
            </div>
            <div>
              <a href={`mailto:${parish.email}`}>{parish.email}</a>
            </div>
          </address>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
              href={`https://wa.me/${parish.whatsapp}`}
            >
              WhatsApp
            </a>
            <a
              className="rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-ivory"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parish.mapsQuery)}`}
            >
              {locale === "ml" ? "ദിശകൾ" : "Directions"}
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="mb-4 font-serif text-2xl text-maroon">
            {locale === "ml" ? "സന്ദേശം അയയ്ക്കുക" : "Send a message"}
          </h2>
          <ParishForm
            locale={locale}
            type="contact"
            fields={[
              { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: locale === "ml" ? "ഫോൻ" : "Phone" },
              {
                name: "message",
                label: locale === "ml" ? "സന്ദേശം" : "Message",
                textarea: true,
                required: true,
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow)]">
        <iframe
          title="Map of Karoor, Elanthoor"
          src={parish.mapsEmbed}
          className="h-96 w-full border-0"
          loading="lazy"
        />
      </div>
    </SimplePage>
  );
}

import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { bank, offeringCategories } from "@/content/site";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/offerings">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Online offerings", ml: "ഓൺലൈൻ വഴിപാട്" }}
      body={{
        en: "Bank details and UPI are placeholders until the Trustee confirms the parish account. Razorpay can be connected later without changing this layout.",
        ml: "ബാങ്ക് വിവരങ്ങൾ ട്രസ്റ്റി സ്ഥിരീകരിക്കുന്നതുവരെ പ്ലേസ്‌ഹോൾഡറാണ്.",
      }}
    >
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="font-serif text-2xl text-maroon">{bank.name[locale]}</h2>
          <p className="mt-3">A/C: {bank.account}</p>
          <p>IFSC: {bank.ifsc}</p>
          <p>UPI: {bank.upi}</p>
          <div className="mt-4 grid h-40 w-40 place-items-center rounded-2xl border border-dashed border-gold text-center text-xs text-muted">
            {locale === "ml" ? "UPI QR ഇവിടെ" : "UPI QR placeholder"}
          </div>
          <ul className="mt-4 list-disc pl-5 text-muted">
            {offeringCategories.map((item) => (
              <li key={item.en}>{item[locale]}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
          <h2 className="mb-4 font-serif text-2xl text-maroon">
            {locale === "ml" ? "വഴിപാട് അറിയിപ്പ്" : "Notify an offering"}
          </h2>
          <ParishForm
            locale={locale}
            type="offering"
            fields={[
              { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "message", label: locale === "ml" ? "വിഭാഗവും തുകയും" : "Category and amount", textarea: true, required: true },
            ]}
          />
        </div>
      </div>
    </SimplePage>
  );
}

import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/parishioners">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Parishioners corner", ml: "ഇടവകാംഗങ്ങളുടെ ഇടം" }}
      body={{
        en: "A private family directory will sit behind a login once the Managing Committee approves membership records. Until then, NRI families and matrimony notices can reach the office through the forms below.",
        ml: "കുടുംബ ഡയറക്ടറി ഭരണസമിതി അനുമതിക്ക് ശേഷം ലോഗിൻ വഴി ലഭ്യമാകും.",
      }}
    >
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-3xl bg-card p-5 shadow-[var(--shadow)]">
          <h2 className="font-serif text-2xl text-maroon">
            {locale === "ml" ? "കുടുംബ ഡയറക്ടറി" : "Family directory"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {locale === "ml"
              ? "ലോഗിൻ സംരക്ഷിതം — അംഗത്വം സ്ഥിരീകരിച്ച ശേഷം തുറക്കും."
              : "Login-protected. Opens after membership verification. No public listing of phone numbers."}
          </p>
        </section>
        <section className="rounded-3xl bg-card p-5 shadow-[var(--shadow)]">
          <h2 className="font-serif text-2xl text-maroon">
            {locale === "ml" ? "വിവാഹാലോചന" : "Matrimony notices"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {locale === "ml"
              ? "കുടുംബം അനുവദിക്കുന്ന അറിയിപ്പുകൾ മാത്രം പ്രസിദ്ധീകരിക്കും."
              : "Published only with the family’s written consent and the Vicar’s knowledge."}
          </p>
        </section>
        <section className="rounded-3xl bg-card p-5 shadow-[var(--shadow)]">
          <h2 className="font-serif text-2xl text-maroon">
            {locale === "ml" ? "എൻ.ആർ.ഐ. ഇടവകാംഗങ്ങൾ" : "NRI parishioners"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {locale === "ml"
              ? "ഗൾഫ്, യുകെ, യുഎസ്, ഓസ്ട്രേലിയ — വഴിപാട്, തിരുനാൾ, പ്രാർത്ഥനാ അപേക്ഷ."
              : "Gulf, UK, US and Australia: offerings, feast sponsorship and prayer requests stay linked to the altar at Karoor."}
          </p>
        </section>
      </div>
      <div className="mt-8 max-w-xl rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
        <h2 className="mb-4 font-serif text-2xl text-maroon">
          {locale === "ml" ? "വിദേശത്തുള്ള കുടുംബം രജിസ്റ്റർ ചെയ്യുക" : "Register an NRI household"}
        </h2>
        <ParishForm
          locale={locale}
          type="nri-register"
          fields={[
            { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "message",
              label: locale === "ml" ? "രാജ്യം, വീട്ടുപേര്, ബന്ധം" : "Country, house name, family link in Karoor",
              textarea: true,
              required: true,
            },
          ]}
        />
      </div>
    </SimplePage>
  );
}

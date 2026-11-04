import { ParishForm } from "@/components/ParishForm";
import { SimplePage } from "@/components/SimplePage";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/prayer-requests">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Prayer requests", ml: "പ്രാർത്ഥനാ അപേക്ഷ" }}
      body={{
        en: "Your request is sent privately to the Vicar. It is not published on the website.",
        ml: "അപേക്ഷ വികാരിക്ക് സ്വകാര്യമായി ലഭിക്കും. വെബ്‌സൈറ്റിൽ പ്രസിദ്ധീകരിക്കില്ല.",
      }}
    >
      <div className="mt-8 max-w-xl rounded-3xl bg-card p-6 shadow-[var(--shadow)]">
        <ParishForm
          locale={locale}
          type="prayer"
          fields={[
            { name: "name", label: locale === "ml" ? "പേര്" : "Name", required: true },
            { name: "email", label: "Email", type: "email" },
            {
              name: "message",
              label: locale === "ml" ? "പ്രാർത്ഥനാ ഉദ്ദേശ്യം" : "Prayer intention",
              textarea: true,
              required: true,
            },
          ]}
        />
      </div>
    </SimplePage>
  );
}

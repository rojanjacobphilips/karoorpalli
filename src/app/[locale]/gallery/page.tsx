import { GalleryGrid } from "@/components/GalleryGrid";
import { SimplePage } from "@/components/SimplePage";
import { requireLocale } from "@/lib/locale-page";

export default async function Page({ params }: PageProps<"/[locale]/gallery">) {
  const locale = await requireLocale(params);
  return (
    <SimplePage
      locale={locale}
      title={{ en: "Image gallery", ml: "ചിത്രശാല" }}
      body={{
        en: "Albums will be grouped by feast and year in Sanity. Images below are placeholders — tap to open a lightbox. Replace with parish photographs (WebP) before launch.",
        ml: "ആൽബങ്ങൾ തിരുനാളും വർഷവും അനുസരിച്ച് ക്രമീകരിക്കും. ചിത്രത്തിൽ ടാപ്പ് ചെയ്ത് വലുതാക്കാം.",
      }}
    >
      <GalleryGrid locale={locale} />
    </SimplePage>
  );
}

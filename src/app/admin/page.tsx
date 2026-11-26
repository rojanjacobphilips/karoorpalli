import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { heroSlides } from "@/content/site";

const cards = [
  { href: "/admin/events", title: "Events", body: "Add feast days, meetings and parish programmes." },
  { href: "/admin/obituary", title: "Obituaries", body: "Publish remembrance notices with photo and funeral details." },
  { href: "/admin/gallery", title: "Gallery", body: "Create albums and list photo/video URLs." },
  { href: "/admin/videos", title: "Videos", body: "Add YouTube IDs, Facebook reels or file paths." },
];

export default async function AdminHomePage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const writeReady = Boolean(process.env.SANITY_API_WRITE_TOKEN);
  return (
    <main>
      <h2 className="font-serif text-3xl text-maroon">Dashboard</h2>
      <p className="mt-2 text-muted">
        Changes publish to the live Events / Gallery / Videos / Obituary pages when Sanity has documents.
      </p>
      {!writeReady ? (
        <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Add <code>SANITY_API_WRITE_TOKEN</code> in <code>.env.local</code> (Sanity → API → Tokens → Editor) to save
          content.
        </p>
      ) : null}

      <section className="mt-8">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl text-maroon">Home scroll images</h3>
            <p className="text-sm text-muted">Hero banner photos currently rotating on the public homepage.</p>
          </div>
          <Link href="/en" className="text-sm font-semibold text-maroon hover:underline">
            View live site
          </Link>
        </div>
        <div className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-3">
          {heroSlides.map((slide, index) => (
            <article
              key={slide.id}
              className="w-64 shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] bg-ivory-deep">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt.en}
                  width={640}
                  height={400}
                  className="h-full w-full object-cover"
                  style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
                />
                <span className="absolute left-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-maroon text-xs font-semibold text-ivory">
                  {index + 1}
                </span>
              </div>
              <div className="p-3">
                <p className="line-clamp-2 font-serif text-lg text-maroon">{slide.title.en}</p>
                <p className="mt-1 truncate text-xs text-muted">{slide.image}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="rounded-3xl bg-white p-5 shadow-sm hover:bg-ivory">
            <h3 className="font-serif text-2xl text-maroon">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.body}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

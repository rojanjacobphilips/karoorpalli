import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

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

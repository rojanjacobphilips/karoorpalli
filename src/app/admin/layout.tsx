import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/obituary", label: "Obituaries" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/videos", label: "Videos" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const signedIn = await isAdminAuthenticated();
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#2c1810]">
      <header className="border-b border-maroon/15 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-maroon/70">Karoor Palli</p>
            <h1 className="font-serif text-2xl text-maroon">Parish admin</h1>
          </div>
          {signedIn ? (
            <form action="/api/admin/logout" method="post">
              <button type="submit" className="rounded-full border border-maroon px-4 py-2 text-sm text-maroon">
                Sign out
              </button>
            </form>
          ) : null}
        </div>
        {signedIn ? (
          <nav className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 pb-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-maroon/5 px-3 py-1.5 text-sm text-maroon hover:bg-maroon hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-3 font-serif text-4xl text-maroon">Page not found</h1>
      <p className="mt-4 text-muted">Karoor Palli — St. Peter&apos;s Orthodox Church, Karoor, Elanthoor.</p>
      <Link href="/en" className="mt-8 rounded-full bg-maroon px-6 py-3 font-semibold text-ivory">
        Go to the homepage
      </Link>
    </main>
  );
}

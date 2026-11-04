import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-3 font-serif text-4xl text-maroon">This page is not in the parish site</h1>
      <p className="mt-4 text-muted">
        The address may have changed. Return home, or use search in the header.
      </p>
      <Link href="/en" className="mt-8 rounded-full bg-maroon px-6 py-3 font-semibold text-ivory">
        Back to Karoor Palli
      </Link>
    </main>
  );
}

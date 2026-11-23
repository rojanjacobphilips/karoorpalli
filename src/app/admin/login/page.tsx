import { adminConfigured, isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdminAuthenticated()) redirect("/admin");
  const { error } = await searchParams;
  return (
    <main className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="font-serif text-3xl text-maroon">Sign in</h2>
      <p className="mt-2 text-sm text-muted">
        {adminConfigured()
          ? "Use the parish admin password from ADMIN_PASSWORD."
          : "Set ADMIN_PASSWORD in .env.local, then restart npm run dev."}
      </p>
      {error === "1" ? <p className="mt-3 text-sm text-red-700">Wrong password. Try again.</p> : null}
      {error === "config" ? (
        <p className="mt-3 text-sm text-red-700">ADMIN_PASSWORD is missing in the running server. Restart npm run dev.</p>
      ) : null}
      <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
        <label className="block text-sm">
          Password
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="mt-1 w-full rounded-xl border border-maroon/20 px-3 py-2"
          />
        </label>
        <button type="submit" className="rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory">
          Open admin
        </button>
      </form>
    </main>
  );
}

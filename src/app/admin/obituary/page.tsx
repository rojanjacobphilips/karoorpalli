import { redirect } from "next/navigation";
import { deleteObituaryAction, saveObituaryAction } from "@/app/admin/actions";
import { AdminForm } from "@/components/admin/AdminForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { sanityFetch } from "@/sanity/lib/client";
import { adminObituariesQuery } from "@/sanity/lib/queries";

type AdminObituary = {
  _id: string;
  slug?: string;
  name?: { en?: string };
  date?: string;
};

export default async function AdminObituaryPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const items = (await sanityFetch<AdminObituary[]>(adminObituariesQuery)) ?? [];

  return (
    <main>
      <h2 className="font-serif text-3xl text-maroon">Obituaries</h2>
      <p className="mt-2 text-muted">Keep notices respectful. Photo URL can be a public image link for now.</p>

      <AdminForm
        action={saveObituaryAction}
        submitLabel="Publish obituary"
        fields={[
          { name: "nameEn", label: "Name (English)", required: true },
          { name: "nameMl", label: "Name (Malayalam)" },
          { name: "slug", label: "Slug (optional)" },
          { name: "houseEn", label: "House name (English)", required: true },
          { name: "houseMl", label: "House name (Malayalam)" },
          { name: "age", label: "Age", type: "number" },
          { name: "date", label: "Date of passing (display text)", required: true },
          { name: "funeralEn", label: "Funeral schedule (English)", textarea: true, required: true },
          { name: "funeralMl", label: "Funeral schedule (Malayalam)", textarea: true },
          { name: "burialEn", label: "Burial (English)", textarea: true },
          { name: "burialMl", label: "Burial (Malayalam)", textarea: true },
          { name: "messageEn", label: "Parish message (English)", textarea: true },
          { name: "messageMl", label: "Parish message (Malayalam)", textarea: true },
          { name: "photoUrl", label: "Photo URL", type: "url", hint: "Public https image URL" },
        ]}
      />

      <section className="mt-10 space-y-3">
        <h3 className="font-serif text-2xl text-maroon">Published in Sanity</h3>
        {items.length === 0 ? <p className="text-sm text-muted">No Sanity obituaries yet.</p> : null}
        {items.map((item) => (
          <article key={item._id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
            <div>
              <p className="font-medium">{item.name?.en || item.slug}</p>
              <p className="text-sm text-muted">{item.date}</p>
            </div>
            <form action={deleteObituaryAction}>
              <input type="hidden" name="id" value={item._id} />
              <button type="submit" className="text-sm text-red-700">
                Delete
              </button>
            </form>
          </article>
        ))}
      </section>
    </main>
  );
}

import { redirect } from "next/navigation";
import { deleteEventAction, saveEventAction } from "@/app/admin/actions";
import { AdminForm } from "@/components/admin/AdminForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { sanityFetch } from "@/sanity/lib/client";
import { adminEventsQuery } from "@/sanity/lib/queries";

type AdminEvent = {
  _id: string;
  slug?: string;
  title?: { en?: string; ml?: string };
  date?: string;
};

export default async function AdminEventsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const events = (await sanityFetch<AdminEvent[]>(adminEventsQuery)) ?? [];

  return (
    <main>
      <h2 className="font-serif text-3xl text-maroon">Events</h2>
      <p className="mt-2 text-muted">Add a programme. English is required; Malayalam can match English for now.</p>

      <AdminForm
        action={saveEventAction}
        submitLabel="Publish event"
        fields={[
          { name: "titleEn", label: "Title (English)", required: true },
          { name: "titleMl", label: "Title (Malayalam)" },
          { name: "slug", label: "Slug (optional)", hint: "Leave blank to generate from English title" },
          { name: "date", label: "Date", type: "date", required: true },
          { name: "timeEn", label: "Time (English)", defaultValue: "7:00 AM" },
          { name: "timeMl", label: "Time (Malayalam)", defaultValue: "രാവിലെ 7:00" },
          { name: "placeEn", label: "Place (English)", defaultValue: "Karoor Palli" },
          { name: "placeMl", label: "Place (Malayalam)", defaultValue: "കാരൂർ പള്ളി" },
          { name: "excerptEn", label: "Summary (English)", textarea: true, required: true },
          { name: "excerptMl", label: "Summary (Malayalam)", textarea: true },
        ]}
      />

      <section className="mt-10 space-y-3">
        <h3 className="font-serif text-2xl text-maroon">Published in Sanity</h3>
        {events.length === 0 ? <p className="text-sm text-muted">No Sanity events yet — site still shows fallback list.</p> : null}
        {events.map((item) => (
          <article key={item._id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
            <div>
              <p className="font-medium">{item.title?.en || item.slug}</p>
              <p className="text-sm text-muted">
                {item.date} · /{item.slug}
              </p>
            </div>
            <form action={deleteEventAction}>
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

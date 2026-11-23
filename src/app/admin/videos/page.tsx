import { redirect } from "next/navigation";
import { deleteVideoAction, saveVideoAction } from "@/app/admin/actions";
import { AdminForm } from "@/components/admin/AdminForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { sanityFetch } from "@/sanity/lib/client";
import { adminVideosQuery } from "@/sanity/lib/queries";

type AdminVideo = {
  _id: string;
  slug?: string;
  title?: { en?: string };
  youtubeId?: string;
};

export default async function AdminVideosPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const items = (await sanityFetch<AdminVideo[]>(adminVideosQuery)) ?? [];

  return (
    <main>
      <h2 className="font-serif text-3xl text-maroon">Videos</h2>
      <p className="mt-2 text-muted">Prefer YouTube ID for long videos. Facebook reel URL also works.</p>

      <AdminForm
        action={saveVideoAction}
        submitLabel="Publish video"
        fields={[
          { name: "titleEn", label: "Title (English)", required: true },
          { name: "titleMl", label: "Title (Malayalam)" },
          { name: "slug", label: "Slug (optional)" },
          { name: "categoryEn", label: "Category (English)", defaultValue: "Church" },
          { name: "categoryMl", label: "Category (Malayalam)", defaultValue: "സഭ" },
          { name: "youtubeId", label: "YouTube video ID", hint: "Only the ID, e.g. QmSs5T-FQlE" },
          { name: "facebook", label: "Facebook video / reel URL", type: "url" },
          { name: "src", label: "Or site video path", hint: "e.g. /videos/hh-bava-at-karoor.mp4" },
        ]}
      />

      <section className="mt-10 space-y-3">
        <h3 className="font-serif text-2xl text-maroon">Published in Sanity</h3>
        {items.length === 0 ? <p className="text-sm text-muted">No Sanity videos yet.</p> : null}
        {items.map((item) => (
          <article key={item._id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
            <div>
              <p className="font-medium">{item.title?.en || item.slug}</p>
              <p className="text-sm text-muted">{item.youtubeId || item.slug}</p>
            </div>
            <form action={deleteVideoAction}>
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

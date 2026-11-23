import { redirect } from "next/navigation";
import { deleteGalleryAlbumAction, saveGalleryAlbumAction } from "@/app/admin/actions";
import { AdminForm } from "@/components/admin/AdminForm";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { sanityFetch } from "@/sanity/lib/client";
import { adminGalleryQuery } from "@/sanity/lib/queries";

type AdminAlbum = {
  _id: string;
  slug?: string;
  title?: { en?: string };
  year?: number;
};

export default async function AdminGalleryPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
  const items = (await sanityFetch<AdminAlbum[]>(adminGalleryQuery)) ?? [];

  return (
    <main>
      <h2 className="font-serif text-3xl text-maroon">Gallery albums</h2>
      <p className="mt-2 text-muted">
        Paste one image/video URL per line. Existing site albums remain until Sanity has albums.
      </p>

      <AdminForm
        action={saveGalleryAlbumAction}
        submitLabel="Publish album"
        fields={[
          { name: "titleEn", label: "Album title (English)", required: true },
          { name: "titleMl", label: "Album title (Malayalam)" },
          { name: "slug", label: "Slug (optional)" },
          { name: "year", label: "Year", type: "number" },
          {
            name: "imageUrls",
            label: "Image / video URLs (one per line)",
            textarea: true,
            required: true,
            hint: "Public https links or site paths like /gallery/onam-2026/01.jpg",
          },
        ]}
      />

      <section className="mt-10 space-y-3">
        <h3 className="font-serif text-2xl text-maroon">Published in Sanity</h3>
        {items.length === 0 ? <p className="text-sm text-muted">No Sanity albums yet.</p> : null}
        {items.map((item) => (
          <article key={item._id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
            <div>
              <p className="font-medium">{item.title?.en || item.slug}</p>
              <p className="text-sm text-muted">
                {item.year || "—"} · /{item.slug}
              </p>
            </div>
            <form action={deleteGalleryAlbumAction}>
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

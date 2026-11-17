import { projectId } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24">
      <h1 className="font-serif text-3xl text-maroon">
        {projectId ? "Sanity Studio" : "Sanity Studio is not connected yet"}
      </h1>
      <p className="mt-4 text-muted">
        {projectId
          ? "Studio UI is temporarily offline in this deployment. Parish pages continue to use content from the site."
          : "Create a free project at sanity.io, then set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in environment variables. Until then, the public website reads bilingual content from src/content/site.ts."}
      </p>
    </main>
  );
}

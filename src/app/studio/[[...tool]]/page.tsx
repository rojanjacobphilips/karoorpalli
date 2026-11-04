import { projectId } from "@/sanity/env";
import { Studio } from "./studio";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!projectId) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24">
        <h1 className="font-serif text-3xl text-maroon">Sanity Studio is not connected yet</h1>
        <p className="mt-4 text-muted">
          Create a free project at sanity.io, then set NEXT_PUBLIC_SANITY_PROJECT_ID and
          NEXT_PUBLIC_SANITY_DATASET in .env.local. Until then, the public website reads bilingual
          placeholder content from src/content/site.ts so pages can be previewed.
        </p>
      </main>
    );
  }

  return <Studio />;
}

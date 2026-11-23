import { projectId } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24">
      <h1 className="font-serif text-3xl text-maroon">Parish admin</h1>
      <p className="mt-4 text-muted">
        Content editing for Events, Gallery, Videos and Obituaries is available in the in-app admin.
      </p>
      <p className="mt-8 flex flex-wrap gap-3">
        <a
          className="inline-flex rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-ivory"
          href="/admin"
        >
          Open admin
        </a>
        {projectId ? (
          <a
            className="inline-flex rounded-full border border-maroon px-5 py-2 text-sm font-semibold text-maroon"
            href={`https://www.sanity.io/manage/project/${projectId}`}
            target="_blank"
            rel="noreferrer"
          >
            Sanity project
          </a>
        ) : null}
      </p>
    </main>
  );
}

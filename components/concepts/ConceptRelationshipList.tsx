import Link from "next/link";
import type { ConceptRecord } from "@/lib/types/content";

export function ConceptRelationshipList({
  title,
  concepts
}: {
  title: string;
  concepts: ConceptRecord[];
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {concepts.length ? (
        <ul className="mt-4 space-y-3">
          {concepts.map((concept) => (
            <li key={concept.id}>
              <Link
                href={`/explore/concepts/${concept.slug}`}
                className="block rounded-xl border border-slate-800 bg-slate-950 p-4 no-underline transition hover:border-sky-700"
              >
                <p className="text-sm uppercase tracking-wide text-sky-300">{concept.category}</p>
                <p className="mt-1 font-semibold text-white">{concept.name}</p>
                <p className="mt-2 text-sm text-slate-300">{concept.shortDefinition}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-slate-400">No related concepts have been linked yet.</p>
      )}
    </section>
  );
}

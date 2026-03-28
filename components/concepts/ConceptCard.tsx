import Link from "next/link";
import type { ConceptRecord } from "@/lib/types/content";

const categoryTone: Record<ConceptRecord["category"], string> = {
  core: "text-sky-300",
  execution: "text-emerald-300",
  context: "text-violet-300",
  automation: "text-amber-300",
  safety: "text-rose-300",
  orchestration: "text-cyan-300"
};

export function ConceptCard({ concept }: { concept: ConceptRecord }) {
  return (
    <Link
      href={`/explore/concepts/${concept.slug}`}
      className="block rounded-2xl border border-slate-800 bg-slate-900 p-5 no-underline transition hover:border-sky-700"
    >
      <p className={`text-xs uppercase tracking-wide ${categoryTone[concept.category]}`}>{concept.category}</p>
      <h2 className="mt-2 text-xl font-semibold text-white">{concept.name}</h2>
      <p className="mt-3 text-slate-300">{concept.shortDefinition}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-400">
        <span>{concept.relatedConceptIds.length} related concepts</span>
        <span>•</span>
        <span>{concept.relatedLessonIds.length} related lessons</span>
      </div>
    </Link>
  );
}

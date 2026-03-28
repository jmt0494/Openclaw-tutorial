import Link from "next/link";
import { notFound } from "next/navigation";
import { ConceptRelationshipList } from "@/components/concepts/ConceptRelationshipList";
import { WorkflowCard } from "@/components/workflows/WorkflowCard";
import {
  getConceptBySlug,
  getRelatedConcepts,
  getRelatedLessons
} from "@/lib/content-loaders/concepts";
import { getWorkflowsForConcept } from "@/lib/content-loaders/references";
import { lessonHref } from "@/lib/utils/navigation";

export default function ConceptDetailPage({ params }: { params: { conceptSlug: string } }) {
  const concept = getConceptBySlug(params.conceptSlug);
  if (!concept) notFound();

  const relatedConcepts = getRelatedConcepts(concept.relatedConceptIds);
  const relatedLessons = getRelatedLessons(concept.relatedLessonIds);
  const relatedWorkflows = getWorkflowsForConcept(concept.id);

  return (
    <div className="space-y-8">
      <nav className="text-sm text-slate-400">
        <Link href="/explore" className="no-underline">
          Explore
        </Link>{" "}
        / <span>{concept.name}</span>
      </nav>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm uppercase tracking-wide text-sky-300">{concept.category} concept</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{concept.name}</h1>
        <p className="mt-3 text-lg text-slate-300">{concept.shortDefinition}</p>
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <h2 className="text-xl font-semibold text-white">Definition</h2>
            <p className="mt-3 text-slate-300">{concept.explanation}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <h2 className="text-xl font-semibold text-white">Why it matters</h2>
            <p className="mt-3 text-slate-300">{concept.whyItMatters}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Examples</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {concept.examples.map((example) => (
            <article key={example.title} className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-semibold text-white">{example.title}</h3>
              <p className="mt-2 text-slate-300">{example.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <ConceptRelationshipList title="Related concepts" concepts={relatedConcepts} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Related lessons</h2>
          {relatedLessons.length ? (
            <ul className="mt-4 space-y-3">
              {relatedLessons.map(({ lesson, module }) => (
                <li key={lesson.id}>
                  <Link
                    href={lessonHref(module.slug, lesson.slug)}
                    className="block rounded-xl border border-slate-800 bg-slate-950 p-4 no-underline transition hover:border-sky-700"
                  >
                    <p className="text-sm uppercase tracking-wide text-sky-300">{module.shortTitle}</p>
                    <p className="mt-1 font-semibold text-white">{lesson.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{lesson.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-slate-400">No lesson links have been seeded for this concept yet.</p>
          )}
        </section>
      </div>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Related workflows</h2>
        {relatedWorkflows.length ? (
          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            {relatedWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-slate-400">No workflow links can be derived from the seeded data for this concept yet.</p>
        )}
      </section>
    </div>
  );
}

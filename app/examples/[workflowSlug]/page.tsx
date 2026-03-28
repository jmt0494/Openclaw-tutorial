import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkflowStepList } from "@/components/workflows/WorkflowStepList";
import { getWorkflowBySlug } from "@/lib/content-loaders/workflows";
import {
  resolveConceptReferences,
  resolveLessonReferences,
  resolveSimulationScenarioReferences,
  resolveWorkflowReferences
} from "@/lib/content-loaders/references";
import { lessonHref } from "@/lib/utils/navigation";

function BulletSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function TeachingPanel({
  lessonLens,
  whyItMattersNow,
  inspectChecklist
}: {
  lessonLens: string;
  whyItMattersNow: string;
  inspectChecklist: string[];
}) {
  return (
    <section className="rounded-2xl border border-sky-900 bg-sky-950/30 p-6">
      <p className="text-sm uppercase tracking-wide text-sky-300">How to study this example</p>
      <div className="mt-4 grid gap-6 xl:grid-cols-[1.1fr_1.4fr]">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Lesson lens</h2>
            <p className="mt-2 text-slate-200">{lessonLens}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Why this workflow matters</h2>
            <p className="mt-2 text-slate-200">{whyItMattersNow}</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">What to inspect first</h2>
          <ol className="mt-4 space-y-3">
            {inspectChecklist.map((item, index) => (
              <li key={item} className="rounded-xl border border-sky-900/70 bg-slate-950/70 p-4 text-slate-200">
                <p className="text-sm uppercase tracking-wide text-sky-300">Inspect {index + 1}</p>
                <p className="mt-2">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function WorkflowDetailPage({ params }: { params: { workflowSlug: string } }) {
  const workflow = getWorkflowBySlug(params.workflowSlug);
  if (!workflow) notFound();

  const relatedLessons = resolveLessonReferences(workflow.relatedLessonIds);
  const relatedConcepts = resolveConceptReferences(workflow.relatedConceptIds);
  const relatedSimulationScenarios = resolveSimulationScenarioReferences(
    workflow.relatedSimulationScenarioSlugs ?? []
  );
  const compareWorkflows = resolveWorkflowReferences(workflow.teaching.compareWorkflowSlugs ?? []).filter(
    (candidate) => candidate.slug !== workflow.slug
  );

  return (
    <div className="space-y-8">
      <nav className="text-sm text-slate-400">
        <Link href="/examples" className="no-underline">Examples</Link> / <span>{workflow.title}</span>
      </nav>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm uppercase tracking-wide text-sky-300">{workflow.triggerType} workflow</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{workflow.title}</h1>
        <p className="mt-3 text-lg text-slate-300">{workflow.summary}</p>
        <p className="mt-4 text-slate-200">{workflow.learnerScenario}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Session pattern</p>
            <p className="mt-2 text-slate-200">{workflow.sessionPattern}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Output pattern</p>
            <p className="mt-2 text-slate-200">{workflow.outputPattern}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Difficulty</p>
            <p className="mt-2 text-slate-200">{workflow.difficulty}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Autonomy</p>
            <p className="mt-2 text-slate-200">{workflow.autonomyLevel}</p>
          </div>
        </div>
      </section>

      <TeachingPanel
        lessonLens={workflow.teaching.lessonLens}
        whyItMattersNow={workflow.teaching.whyItMattersNow}
        inspectChecklist={workflow.teaching.inspectChecklist}
      />

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Execution view</h2>
            <p className="mt-2 text-slate-300">This is the learner-facing step-through for how the workflow unfolds.</p>
          </div>
          {compareWorkflows.length ? (
            <div className="max-w-xl rounded-xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-sm uppercase tracking-wide text-slate-400">Compare this against</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {compareWorkflows.map((candidate) => (
                  <Link
                    key={candidate.id}
                    href={`/examples/${candidate.slug}`}
                    className="rounded-full border border-sky-800 px-3 py-1 text-sm text-sky-200 no-underline transition hover:border-sky-600 hover:text-white"
                  >
                    {candidate.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-6">
          <WorkflowStepList workflow={workflow} />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <BulletSection title="Why this design works" items={workflow.whyThisDesign} />
        <BulletSection title="Context loaded" items={workflow.contextLoaded} />
        <BulletSection title="Tools used" items={workflow.toolsUsed} />
        <BulletSection title="Common failure modes" items={workflow.commonFailureModes} />
        <BulletSection title="Risks and guardrails" items={workflow.risks} />

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Guided next steps</h2>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-sky-300">Related lessons</p>
            <p className="mt-2 text-sm text-slate-300">
              {workflow.teaching.relatedLessonsIntro ??
                "Use these lessons to connect this example back to the design ideas it demonstrates."}
            </p>
            {relatedLessons.length ? (
              <ul className="mt-4 space-y-3">
                {relatedLessons.map(({ lesson, module }) => (
                  <li key={lesson.id}>
                    <Link
                      href={lessonHref(module.slug, lesson.slug)}
                      className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                    >
                      <p className="text-sm uppercase tracking-wide text-sky-300">{module.shortTitle}</p>
                      <p className="mt-1 font-semibold text-white">{lesson.title}</p>
                      <p className="mt-2 text-sm text-slate-300">{lesson.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">No related lessons are seeded for this workflow yet.</p>
            )}
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-sky-300">Related simulations</p>
            <p className="mt-2 text-sm text-slate-300">
              {workflow.teaching.relatedSimulationsIntro ??
                "Use the visualizer to inspect this pattern as an explicit run timeline."}
            </p>
            {relatedSimulationScenarios.length ? (
              <ul className="mt-4 space-y-3">
                {relatedSimulationScenarios.map((scenario) => (
                  <li key={scenario.id}>
                    <Link
                      href={`/simulations/run-visualizer?scenario=${scenario.slug}`}
                      className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                    >
                      <p className="text-sm uppercase tracking-wide text-sky-300">Run visualizer</p>
                      <p className="mt-1 font-semibold text-white">{scenario.title}</p>
                      <p className="mt-2 text-sm text-slate-300">{scenario.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-400">No related simulations are seeded for this workflow yet.</p>
            )}
          </div>

          <h2 className="mt-8 text-xl font-semibold text-white">Related concepts</h2>
          {relatedConcepts.length ? (
            <ul className="mt-4 space-y-3">
              {relatedConcepts.map((concept) => (
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
            <p className="mt-4 text-slate-400">No related concepts are seeded for this workflow yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import type {
  LessonRecord,
  WorkflowRecord,
  ConceptRecord,
  ModuleRecord,
  LessonSimulationExercise
} from "@/lib/types/content";
import type { SimulationScenario } from "@/lib/types/simulation";
import { lessonHref } from "@/lib/utils/navigation";

type LessonReference = {
  lesson: LessonRecord;
  module: ModuleRecord;
};

type LessonSimulationExerciseView = LessonSimulationExercise & {
  scenario: SimulationScenario;
};

function Block({ block }: { block: LessonRecord["content"][number] }) {
  switch (block.type) {
    case "rich-text":
      return <p className="leading-7 text-slate-200">{block.markdown}</p>;
    case "list":
      return (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">{block.title}</h3>
          <ul className="list-disc space-y-2 pl-5 text-slate-200">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "callout":
      return (
        <div className="rounded-xl border border-sky-900 bg-sky-950/40 p-4">
          <h3 className="font-semibold text-sky-200">{block.title}</h3>
          <p className="mt-2 text-slate-200">{block.body}</p>
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
          <h3 className="font-semibold text-white">{block.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">Scenario</p>
          <p className="text-slate-200">{block.scenario}</p>
          <p className="mt-3 text-sm uppercase tracking-wide text-slate-400">Explanation</p>
          <p className="text-slate-200">{block.explanation}</p>
        </div>
      );
    case "action-cta":
      return (
        <div className="rounded-2xl border border-sky-700 bg-gradient-to-br from-sky-950/90 to-slate-900 p-5 shadow-[0_0_0_1px_rgba(14,165,233,0.08)]">
          <p className="text-sm uppercase tracking-wide text-sky-300">{block.eyebrow ?? "Build handoff"}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{block.title}</h3>
          <p className="mt-3 text-slate-200">{block.body}</p>
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">{block.checklistTitle ?? "When you open Build"}</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-200">
              {block.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <Link
              href={block.href}
              className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2 font-medium text-slate-950 no-underline transition hover:bg-sky-400"
            >
              {block.linkLabel}
            </Link>
          </div>
        </div>
      );
    case "checkpoint":
      return (
        <div className="rounded-xl border border-emerald-900 bg-emerald-950/30 p-4">
          <h3 className="font-semibold text-emerald-200">Checkpoint</h3>
          <p className="mt-2 text-white">{block.question}</p>
          <p className="mt-2 text-slate-200">{block.answer}</p>
        </div>
      );
    default:
      return null;
  }
}

function RelatedSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function LessonRenderer({
  lesson,
  relatedConcepts,
  relatedWorkflows,
  relatedLessons,
  relatedSimulationScenarios
}: {
  lesson: LessonRecord;
  relatedConcepts: ConceptRecord[];
  relatedWorkflows: WorkflowRecord[];
  relatedLessons?: LessonReference[];
  relatedSimulationScenarios?: SimulationScenario[];
}) {
  const simulationExerciseViews: LessonSimulationExerciseView[] =
    lesson.simulationExercises
      ?.map((exercise) => {
        const scenario = relatedSimulationScenarios?.find((entry) => entry.slug === exercise.scenarioSlug);
        return scenario ? { ...exercise, scenario } : null;
      })
      .filter((exercise): exercise is LessonSimulationExerciseView => Boolean(exercise)) ?? [];

  return (
    <article className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <header>
        <p className="text-sm uppercase tracking-wide text-sky-300">{lesson.estimatedMinutes} min lesson</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{lesson.title}</h1>
        <p className="mt-3 text-lg text-slate-300">{lesson.summary}</p>
      </header>

      <section>
        <h2 className="mb-2 text-lg font-semibold text-white">Learning objectives</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-200">
          {lesson.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        {lesson.content.map((block, index) => (
          <Block key={`${block.type}-${index}`} block={block} />
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <RelatedSection title="Related concepts">
          {relatedConcepts.length ? (
            <ul className="space-y-3">
              {relatedConcepts.map((concept) => (
                <li key={concept.id}>
                  <Link
                    href={`/explore/concepts/${concept.slug}`}
                    className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                  >
                    <p className="text-sm uppercase tracking-wide text-sky-300">{concept.category}</p>
                    <p className="mt-1 font-semibold text-white">{concept.name}</p>
                    <p className="mt-2 text-sm text-slate-300">{concept.shortDefinition}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">No related concepts are seeded for this lesson yet.</p>
          )}
        </RelatedSection>

        <RelatedSection title="Related workflows">
          {relatedWorkflows.length ? (
            <ul className="space-y-3">
              {relatedWorkflows.map((workflow) => (
                <li key={workflow.id}>
                  <Link
                    href={`/examples/${workflow.slug}`}
                    className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                  >
                    <p className="text-sm uppercase tracking-wide text-sky-300">{workflow.triggerType} workflow</p>
                    <p className="mt-1 font-semibold text-white">{workflow.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{workflow.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">No related workflows are seeded for this lesson yet.</p>
          )}
        </RelatedSection>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RelatedSection title="Try this in the Run Visualizer">
          {simulationExerciseViews.length ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                Do one of these guided checks now, then come back and see whether the lesson still matches what you observed.
              </p>
              <ul className="space-y-3">
                {simulationExerciseViews.map((exercise) => (
                  <li key={`${exercise.scenario.id}-${exercise.title}`}>
                    <Link
                      href={`/simulations/run-visualizer?scenario=${exercise.scenario.slug}`}
                      className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                    >
                      <p className="text-sm uppercase tracking-wide text-sky-300">Guided visualizer exercise</p>
                      <p className="mt-1 font-semibold text-white">{exercise.title}</p>
                      <p className="mt-2 text-sm text-slate-300">{exercise.whyNow}</p>
                      <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/80 p-3">
                        <p className="text-xs uppercase tracking-wide text-slate-400">What to inspect</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-200">
                          {exercise.focusPoints.map((focusPoint) => (
                            <li key={focusPoint}>{focusPoint}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="mt-3 text-sm text-slate-400">Scenario: {exercise.scenario.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : relatedSimulationScenarios?.length ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                Open one of these scenarios now, inspect the stages described above, then come back and see whether your mental model still holds.
              </p>
              <ul className="space-y-3">
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
            </div>
          ) : (
            <p className="text-slate-400">No related simulations are seeded for this lesson yet.</p>
          )}
        </RelatedSection>

        {relatedLessons?.length ? (
          <RelatedSection title="Keep going">
            <ul className="space-y-3">
              {relatedLessons.map(({ lesson: relatedLesson, module }) => (
                <li key={relatedLesson.id}>
                  <Link
                    href={lessonHref(module.slug, relatedLesson.slug)}
                    className="block rounded-xl border border-slate-800 bg-slate-900 p-4 no-underline transition hover:border-sky-700"
                  >
                    <p className="text-sm uppercase tracking-wide text-sky-300">{module.shortTitle}</p>
                    <p className="mt-1 font-semibold text-white">{relatedLesson.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{relatedLesson.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </RelatedSection>
        ) : null}
      </div>

      <section>
        <h2 className="mb-2 text-lg font-semibold text-white">Key takeaways</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-200">
          {lesson.keyTakeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { LessonRenderer } from "@/components/lessons/LessonRenderer";
import { SidebarCourseMap } from "@/components/layout/SidebarCourseMap";
import { LessonProgressControls } from "@/components/progress/LessonProgressControls";
import { getAdjacentLessons, getLessonBySlugs } from "@/lib/content-loaders/lessons";
import {
  getWorkflowsForLesson,
  resolveConceptReferences,
  resolveLessonReferences,
  resolveSimulationScenarioReferences
} from "@/lib/content-loaders/references";
import { moduleHref } from "@/lib/utils/navigation";
import { modules } from "@/content/course/modules";

export default function LessonPage({ params }: { params: { moduleSlug: string; lessonSlug: string } }) {
  const result = getLessonBySlugs(params.moduleSlug, params.lessonSlug);
  if (!result) notFound();

  const { module, lesson } = result;
  const adjacent = getAdjacentLessons(lesson.id);
  const relatedConcepts = resolveConceptReferences(lesson.relatedConceptIds);
  const relatedWorkflows = getWorkflowsForLesson(lesson.id);
  const relatedSimulationScenarios = resolveSimulationScenarioReferences(
    lesson.relatedSimulationScenarioSlugs ?? []
  );
  const relatedLessonIds = [lesson.previousLessonId, lesson.nextLessonId].filter(
    (lessonId): lessonId is string => Boolean(lessonId)
  );
  const relatedLessons = resolveLessonReferences(relatedLessonIds);

  const previousHref = adjacent.previous
    ? (() => {
        const previousModule = modules.find((entry) => entry.id === adjacent.previous?.moduleId);
        return previousModule ? `/learn/${previousModule.slug}/${adjacent.previous.slug}` : null;
      })()
    : null;

  const nextHref = adjacent.next
    ? (() => {
        const nextModule = modules.find((entry) => entry.id === adjacent.next?.moduleId);
        return nextModule ? `/learn/${nextModule.slug}/${adjacent.next.slug}` : null;
      })()
    : null;

  const lessonRoute = `/learn/${module.slug}/${lesson.slug}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <SidebarCourseMap activeLessonId={lesson.id} />
      <div className="space-y-6">
        <nav className="text-sm text-slate-400">
          <Link href="/learn" className="no-underline">Learn</Link> / <Link href={moduleHref(module.slug)} className="no-underline">{module.title}</Link> / <span>{lesson.title}</span>
        </nav>
        <LessonRenderer
          lesson={lesson}
          relatedConcepts={relatedConcepts}
          relatedWorkflows={relatedWorkflows}
          relatedLessons={relatedLessons}
          relatedSimulationScenarios={relatedSimulationScenarios}
        />
        <LessonProgressControls lessonId={lesson.id} lessonRoute={lessonRoute} nextHref={nextHref} />
        <div className="flex flex-wrap justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div>
            {previousHref ? <Link href={previousHref} className="no-underline text-sky-300">← Previous lesson</Link> : <span className="text-slate-500">Start of course path</span>}
          </div>
          <div>
            {nextHref ? <Link href={nextHref} className="no-underline text-sky-300">Next lesson →</Link> : <span className="text-slate-500">End of current seeded path</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

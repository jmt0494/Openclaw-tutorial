import Link from "next/link";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { HomeProgressCard } from "@/components/progress/HomeProgressCard";
import { WorkflowCard } from "@/components/workflows/WorkflowCard";
import { getCourse, getModules } from "@/lib/content-loaders/course";
import { getLessonsForModule } from "@/lib/content-loaders/lessons";
import { getFeaturedConcepts, getFeaturedWorkflows } from "@/lib/content-loaders/references";
import { lessonHref, moduleHref } from "@/lib/utils/navigation";

export default function HomePage() {
  const course = getCourse();
  const modules = getModules();
  const firstModule = modules[0];
  const firstLesson = firstModule ? getLessonsForModule(firstModule.id)[0] : null;
  const featuredConcepts = getFeaturedConcepts();
  const featuredWorkflows = getFeaturedWorkflows();
  const totalLessons = modules.reduce((sum, module) => sum + module.lessonIds.length, 0);
  const firstLessonHref = firstLesson ? lessonHref(firstModule.slug, firstLesson.slug) : "/learn";

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">MVP scaffold</p>
        <h1 className="mt-3 text-4xl font-bold text-white">{course.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{course.tagline}</p>
        <p className="mt-3 max-w-3xl text-slate-400">{course.description}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {firstLesson ? (
            <Link href={lessonHref(firstModule.slug, firstLesson.slug)} className="rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 no-underline hover:bg-sky-300">
              Start learning
            </Link>
          ) : null}
          <Link href="/learn" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-white no-underline hover:border-slate-500">
            View modules
          </Link>
        </div>
      </section>

      <HomeProgressCard totalLessons={totalLessons} startedLessonHref={firstLessonHref} />

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured concepts</h2>
            <p className="mt-2 text-slate-400">Start with the core ideas that shape the rest of the tutorial.</p>
          </div>
          <Link href="/explore" className="text-sm font-medium text-sky-300 no-underline">
            Explore all concepts →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredConcepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured workflows</h2>
            <p className="mt-2 text-slate-400">See how the concepts turn into real run shapes.</p>
          </div>
          <Link href="/examples" className="text-sm font-medium text-sky-300 no-underline">
            View workflow examples →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          {featuredWorkflows.map((workflow) => (
            <WorkflowCard key={workflow.id} workflow={workflow} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white">Learning journey</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link key={module.id} href={moduleHref(module.slug)} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 no-underline transition hover:border-sky-700 hover:bg-slate-900/80">
              <p className="text-sm text-sky-300">Module {module.order}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-slate-300">{module.description}</p>
              <p className="mt-4 text-sm text-slate-400">{module.lessonIds.length} lessons • {module.estimatedMinutes} min</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

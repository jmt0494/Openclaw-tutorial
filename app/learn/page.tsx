import Link from "next/link";
import { LearnProgressSummary } from "@/components/progress/LearnProgressSummary";
import { getCourse, getModules } from "@/lib/content-loaders/course";
import { moduleHref } from "@/lib/utils/navigation";

export default function LearnIndexPage() {
  const course = getCourse();
  const modules = getModules();

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-wide text-sky-300">Learn</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{course.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{course.description}</p>
      </section>

      <LearnProgressSummary modules={modules} />

      <div className="grid gap-5 md:grid-cols-2">
        {modules.map((module) => (
          <Link key={module.id} href={moduleHref(module.slug)} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 no-underline hover:border-sky-700">
            <p className="text-sm text-sky-300">Module {module.order}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{module.title}</h2>
            <p className="mt-3 text-slate-300">{module.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-400">
              {module.learningGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

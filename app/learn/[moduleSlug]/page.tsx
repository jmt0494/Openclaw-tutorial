import { notFound } from "next/navigation";
import { ModuleLessonList } from "@/components/progress/ModuleLessonList";
import { getModuleBySlug } from "@/lib/content-loaders/course";
import { getLessonsForModule } from "@/lib/content-loaders/lessons";

export default function ModulePage({ params }: { params: { moduleSlug: string } }) {
  const module = getModuleBySlug(params.moduleSlug);
  if (!module) notFound();

  const lessons = getLessonsForModule(module.id);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-sky-300">Module {module.order}</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{module.title}</h1>
        <p className="mt-3 text-slate-300">{module.description}</p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-200">
          {module.learningGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </section>

      <ModuleLessonList moduleSlug={module.slug} lessons={lessons} />
    </div>
  );
}

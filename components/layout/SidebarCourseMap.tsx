import { SidebarLessonStatus } from "@/components/progress/SidebarLessonStatus";
import { getModules } from "@/lib/content-loaders/course";
import { getLessonsForModule } from "@/lib/content-loaders/lessons";

export function SidebarCourseMap({ activeLessonId }: { activeLessonId?: string }) {
  const moduleData = getModules().map((module) => ({
    module,
    lessons: getLessonsForModule(module.id)
  }));

  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Course map</h2>
      <SidebarLessonStatus modules={moduleData} activeLessonId={activeLessonId} />
    </aside>
  );
}

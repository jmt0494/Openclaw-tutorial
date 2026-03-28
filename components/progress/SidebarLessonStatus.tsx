"use client";

import Link from "next/link";
import type { ModuleRecord, LessonRecord } from "@/lib/types/content";
import { lessonHref, moduleHref } from "@/lib/utils/navigation";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";

type SidebarLessonStatusProps = {
  modules: Array<{
    module: ModuleRecord;
    lessons: LessonRecord[];
  }>;
  activeLessonId?: string;
};

export function SidebarLessonStatus({ modules, activeLessonId }: SidebarLessonStatusProps) {
  const { progress } = useLearnerProgress();

  return (
    <div className="space-y-5">
      {modules.map(({ module, lessons }) => (
        <section key={module.id}>
          <Link href={moduleHref(module.slug)} className="text-sm font-semibold text-white no-underline hover:text-sky-300">
            {module.order}. {module.title}
          </Link>
          <ul className="mt-2 space-y-2 pl-1 text-sm text-slate-300">
            {lessons.map((lesson) => {
              const isCompleted = progress.completedLessonIds.includes(lesson.id);

              return (
                <li key={lesson.id}>
                  <Link
                    href={lessonHref(module.slug, lesson.slug)}
                    className={`flex items-start gap-2 no-underline ${lesson.id === activeLessonId ? "text-sky-300" : "text-slate-300 hover:text-white"}`}
                  >
                    <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${isCompleted ? "bg-emerald-400" : "bg-slate-700"}`} />
                    <span>{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import type { LessonRecord } from "@/lib/types/content";
import { lessonHref } from "@/lib/utils/navigation";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";

type ModuleLessonListProps = {
  moduleSlug: string;
  lessons: LessonRecord[];
};

export function ModuleLessonList({ moduleSlug, lessons }: ModuleLessonListProps) {
  const { progress } = useLearnerProgress();

  return (
    <section className="space-y-4">
      {lessons.map((lesson) => {
        const isCompleted = progress.completedLessonIds.includes(lesson.id);

        return (
          <Link
            key={lesson.id}
            href={lessonHref(moduleSlug, lesson.slug)}
            className="block rounded-2xl border border-slate-800 bg-slate-900 p-5 no-underline hover:border-sky-700"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm text-sky-300">Lesson {lesson.orderInModule}</p>
                <h2 className="mt-1 text-xl font-semibold text-white">{lesson.title}</h2>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  isCompleted ? "bg-emerald-950 text-emerald-300" : "bg-slate-800 text-slate-400"
                }`}
              >
                {isCompleted ? "Complete" : "Not started"}
              </span>
            </div>
            <p className="mt-2 text-slate-300">{lesson.summary}</p>
            <p className="mt-3 text-sm text-slate-400">{lesson.estimatedMinutes} min</p>
          </Link>
        );
      })}
    </section>
  );
}

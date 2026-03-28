"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";

type LessonProgressControlsProps = {
  lessonId: string;
  lessonRoute: string;
  nextHref?: string | null;
};

export function LessonProgressControls({
  lessonId,
  lessonRoute,
  nextHref
}: LessonProgressControlsProps) {
  const { progress, isReady, toggleCompleted, completeLesson, rememberLessonRoute } = useLearnerProgress();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    rememberLessonRoute(lessonRoute);
  }, [isReady, lessonRoute, rememberLessonRoute]);

  const isCompleted = progress.completedLessonIds.includes(lessonId);

  return (
    <section className="rounded-2xl border border-emerald-800/60 bg-emerald-950/20 p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-300">Lesson progress</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            {isCompleted ? "Lesson marked complete" : "Mark this lesson when you finish"}
          </h2>
          <p className="mt-2 text-slate-300">
            Completion is stored locally in this browser only. No account or backend is involved.
          </p>
        </div>
        <button
          type="button"
          onClick={() => toggleCompleted(lessonId)}
          className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-300"
        >
          {isCompleted ? "Mark incomplete" : "Mark complete"}
        </button>
      </div>

      {nextHref ? (
        <div className="mt-5 border-t border-emerald-900/60 pt-5">
          <Link
            href={nextHref}
            onClick={() => completeLesson(lessonId)}
            className="inline-flex rounded-full border border-slate-700 px-5 py-3 font-semibold text-white no-underline hover:border-slate-500"
          >
            Complete and continue →
          </Link>
        </div>
      ) : null}
    </section>
  );
}

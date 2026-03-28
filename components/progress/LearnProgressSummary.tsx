"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { ModuleRecord } from "@/lib/types/content";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";
import { getResumeRoute } from "@/lib/progress";

type LearnProgressSummaryProps = {
  modules: ModuleRecord[];
};

export function LearnProgressSummary({ modules }: LearnProgressSummaryProps) {
  const { progress, isReady } = useLearnerProgress();

  const totalLessons = modules.reduce((sum, module) => sum + module.lessonIds.length, 0);
  const completedCount = progress.completedLessonIds.length;
  const resumeHref = useMemo(() => getResumeRoute(progress), [progress]);

  const moduleBreakdown = modules.map((module) => {
    const completedInModule = module.lessonIds.filter((lessonId) => progress.completedLessonIds.includes(lessonId)).length;
    return {
      id: module.id,
      title: module.title,
      completedInModule,
      lessonCount: module.lessonIds.length
    };
  });

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-sky-300">Course progress</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Continue learning</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            {isReady
              ? `${completedCount} of ${totalLessons} lessons marked complete in this browser.`
              : "Local lesson progress and resume state load after hydration."}
          </p>
        </div>
        <Link href={resumeHref} className="rounded-full bg-sky-400 px-5 py-3 font-semibold text-slate-950 no-underline hover:bg-sky-300">
          {completedCount > 0 ? "Resume where you stopped" : "Start the course"}
        </Link>
      </div>

      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-sky-400 transition-all"
          style={{ width: `${totalLessons ? (completedCount / totalLessons) * 100 : 0}%` }}
        />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {moduleBreakdown.map((module) => (
          <div key={module.id} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="font-medium text-white">{module.title}</p>
            <p className="mt-2 text-sm text-slate-400">
              {module.completedInModule} / {module.lessonCount} lessons complete
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

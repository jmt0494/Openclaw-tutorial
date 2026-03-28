"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLearnerProgress } from "@/components/progress/useLearnerProgress";
import { getResumeRoute } from "@/lib/progress";

type HomeProgressCardProps = {
  totalLessons: number;
  startedLessonHref?: string;
};

export function HomeProgressCard({ totalLessons, startedLessonHref = "/learn" }: HomeProgressCardProps) {
  const { progress, isReady } = useLearnerProgress();

  const completedCount = progress.completedLessonIds.length;
  const percent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const resumeHref = useMemo(() => {
    if (!isReady) {
      return startedLessonHref;
    }

    return getResumeRoute(progress);
  }, [isReady, progress, startedLessonHref]);

  return (
    <section className="rounded-3xl border border-emerald-800/70 bg-emerald-950/30 p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Progress & resume</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">
        {isReady && completedCount > 0 ? "Pick up where you left off" : "Start the course cleanly"}
      </h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        {isReady
          ? `${completedCount} of ${totalLessons} lessons marked complete${completedCount ? ` (${percent}%)` : " so far"}.`
          : `Local progress loads in the browser so learners can resume without accounts or backend state.`}
      </p>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={resumeHref} className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950 no-underline hover:bg-emerald-300">
          {isReady && completedCount > 0 ? "Resume learning" : "Start lesson 1"}
        </Link>
        <Link href="/learn" className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-white no-underline hover:border-slate-500">
          Browse course map
        </Link>
      </div>
    </section>
  );
}

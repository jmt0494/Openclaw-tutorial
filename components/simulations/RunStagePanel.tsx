import type { SimulationStage } from "@/lib/types/simulation";

export function RunStagePanel({ stage, activeStageIndex, totalStages }: { stage: SimulationStage; activeStageIndex: number; totalStages: number }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm uppercase tracking-wide text-sky-300">
        Stage {activeStageIndex + 1} of {totalStages}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{stage.title}</h2>
      <p className="mt-4 text-slate-300">{stage.explanation}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm uppercase tracking-wide text-slate-400">Why this stage matters</p>
          <p className="mt-2 text-slate-200">{stage.learnerTakeaway}</p>
        </div>
        {stage.teachingNotes ? (
          <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
            <p className="text-sm uppercase tracking-wide text-sky-300">What to notice now</p>
            <p className="mt-2 text-slate-100">{stage.teachingNotes.noticeFirst}</p>
            <p className="mt-4 text-sm uppercase tracking-wide text-slate-400">Diagnostic question</p>
            <p className="mt-2 text-slate-200">{stage.teachingNotes.diagnosticQuestion}</p>
          </div>
        ) : null}
      </div>
      {stage.teachingNotes?.commonMisconceptions?.length ? (
        <div className="mt-4 rounded-2xl border border-amber-500/25 bg-amber-500/5 p-4">
          <p className="text-sm uppercase tracking-wide text-amber-200">Common misconceptions</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
            {stage.teachingNotes.commonMisconceptions.map((misconception) => (
              <li key={misconception}>{misconception}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

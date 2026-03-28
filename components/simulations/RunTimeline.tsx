"use client";

import type { SimulationStage } from "@/lib/types/simulation";

interface RunTimelineProps {
  stages: SimulationStage[];
  activeStageIndex: number;
  onSelectStage: (stageIndex: number) => void;
}

export function RunTimeline({ stages, activeStageIndex, onSelectStage }: RunTimelineProps) {
  return (
    <ol className="space-y-3">
      {stages.map((stage, index) => {
        const state = index < activeStageIndex ? "complete" : index === activeStageIndex ? "active" : "upcoming";

        return (
          <li key={stage.id}>
            <button
              type="button"
              onClick={() => onSelectStage(index)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                state === "active"
                  ? "border-sky-400 bg-sky-500/10"
                  : state === "complete"
                    ? "border-emerald-700 bg-emerald-500/10"
                    : "border-slate-800 bg-slate-900 hover:border-slate-700"
              }`}
            >
              <div
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  state === "active"
                    ? "bg-sky-400 text-slate-950"
                    : state === "complete"
                      ? "bg-emerald-400 text-slate-950"
                      : "bg-slate-800 text-slate-300"
                }`}
              >
                {index + 1}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{stage.kind}</p>
                <h3 className="mt-1 font-semibold text-white">{stage.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{stage.explanation}</p>
              </div>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

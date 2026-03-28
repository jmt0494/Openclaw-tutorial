"use client";

import { useEffect, useMemo, useState } from "react";
import { ArtifactList } from "@/components/simulations/ArtifactList";
import { RunStagePanel } from "@/components/simulations/RunStagePanel";
import { RunTimeline } from "@/components/simulations/RunTimeline";
import { ScenarioPicker } from "@/components/simulations/ScenarioPicker";
import type { SimulationScenario } from "@/lib/types/simulation";

export function RunVisualizer({
  scenarios,
  initialScenarioId
}: {
  scenarios: SimulationScenario[];
  initialScenarioId?: string;
}) {
  const fallbackScenarioId = scenarios[0]?.id ?? "";
  const initialSelection =
    initialScenarioId && scenarios.some((scenario) => scenario.id === initialScenarioId)
      ? initialScenarioId
      : fallbackScenarioId;

  const [selectedScenarioId, setSelectedScenarioId] = useState(initialSelection);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const selectedScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === selectedScenarioId) ?? scenarios[0],
    [scenarios, selectedScenarioId]
  );

  useEffect(() => {
    if (!initialScenarioId) return;
    if (!scenarios.some((scenario) => scenario.id === initialScenarioId)) return;

    setSelectedScenarioId(initialScenarioId);
  }, [initialScenarioId, scenarios]);

  useEffect(() => {
    setActiveStageIndex(0);
  }, [selectedScenarioId]);

  if (!selectedScenario) {
    return <p className="text-slate-400">No simulation scenarios are available yet.</p>;
  }

  const stageCount = selectedScenario.stages.length;
  const activeStage = selectedScenario.stages[activeStageIndex];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm uppercase tracking-wide text-sky-300">Run Visualizer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Step through an OpenClaw run</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          This MVP surface is intentionally plain. The important thing is that the data plumbing is real: scenarios,
          stages, artifacts, and final outputs all come from typed local content.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Choose a deterministic scenario</h2>
          <p className="mt-2 text-slate-300">Switching scenarios resets the stage pointer so each walkthrough starts from the beginning.</p>
        </div>
        <ScenarioPicker
          scenarios={scenarios}
          selectedScenarioId={selectedScenario.id}
          onSelect={setSelectedScenarioId}
        />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">Scenario prompt</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{selectedScenario.title}</h2>
            <p className="mt-3 text-slate-300">{selectedScenario.summary}</p>
            {selectedScenario.teachingPrompt ? (
              <section className="mt-4 rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
                <p className="text-sm uppercase tracking-wide text-sky-300">How to read this scenario</p>
                <div className="mt-3 space-y-3 text-sm text-slate-200">
                  <PromptRow label="What this is for" value={selectedScenario.teachingPrompt.scenarioPurpose} />
                  <PromptRow label="Inspect first" value={selectedScenario.teachingPrompt.inspectFirst} />
                  <PromptRow label="Compare next" value={selectedScenario.teachingPrompt.compareNext} />
                </div>
              </section>
            ) : null}
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-sm uppercase tracking-wide text-slate-400">Trigger input</p>
              <p className="mt-2 text-slate-200">{selectedScenario.userMessage}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContextPanel title="System pieces" items={selectedScenario.initialContext.systemPieces} />
            <ContextPanel title="Workspace files" items={selectedScenario.initialContext.workspaceFiles} />
            <ContextPanel title="Memory" items={selectedScenario.initialContext.memoryItems} />
            <ContextPanel title="Session history" items={selectedScenario.initialContext.sessionHistoryItems} />
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveStageIndex((current) => Math.max(current - 1, 0))}
          disabled={activeStageIndex === 0}
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
        >
          ← Previous stage
        </button>
        <button
          type="button"
          onClick={() => setActiveStageIndex((current) => Math.min(current + 1, stageCount - 1))}
          disabled={activeStageIndex === stageCount - 1}
          className="rounded-xl border border-sky-500 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-500/20 disabled:cursor-not-allowed disabled:border-slate-800 disabled:bg-slate-900 disabled:text-slate-500"
        >
          Next stage →
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <RunTimeline
          stages={selectedScenario.stages}
          activeStageIndex={activeStageIndex}
          onSelectStage={setActiveStageIndex}
        />
        <div className="space-y-6">
          <RunStagePanel stage={activeStage} activeStageIndex={activeStageIndex} totalStages={stageCount} />
          <ArtifactList artifacts={activeStage.visibleArtifacts} />
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-wide text-sky-300">Final output</p>
            <p className="mt-3 text-slate-200">{selectedScenario.finalOutput.assistantReply}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm uppercase tracking-wide text-slate-400">Persisted to session</p>
                <p className="mt-2 text-slate-200">{selectedScenario.finalOutput.persistedToSession ? "Yes" : "No"}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm uppercase tracking-wide text-slate-400">Persisted to memory</p>
                <p className="mt-2 text-slate-200">{selectedScenario.finalOutput.persistedToMemory ? "Yes" : "No"}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              {selectedScenario.finalOutput.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function PromptRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-medium text-white">{label}</p>
      <p className="mt-1 text-slate-300">{value}</p>
    </div>
  );
}

function ContextPanel({ title, items }: { title: string; items: { id: string; label: string; detail: string }[] }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <h3 className="text-sm uppercase tracking-wide text-slate-400">{title}</h3>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <div key={item.id}>
            <p className="font-medium text-white">{item.label}</p>
            <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

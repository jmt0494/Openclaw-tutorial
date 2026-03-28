"use client";

import type { SimulationScenario } from "@/lib/types/simulation";

interface ScenarioPickerProps {
  scenarios: SimulationScenario[];
  selectedScenarioId: string;
  onSelect: (scenarioId: string) => void;
}

export function ScenarioPicker({ scenarios, selectedScenarioId, onSelect }: ScenarioPickerProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {scenarios.map((scenario) => {
        const isActive = scenario.id === selectedScenarioId;

        return (
          <button
            key={scenario.id}
            type="button"
            onClick={() => onSelect(scenario.id)}
            className={`rounded-2xl border p-4 text-left transition ${
              isActive
                ? "border-sky-400 bg-sky-500/10"
                : "border-slate-800 bg-slate-900 hover:border-slate-700 hover:bg-slate-900/80"
            }`}
          >
            <p className="text-sm uppercase tracking-wide text-sky-300">{scenario.promptLabel}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{scenario.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{scenario.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {scenario.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}

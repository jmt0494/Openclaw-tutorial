import type { WorkflowRecord } from "@/lib/types/content";

export function WorkflowStepList({ workflow }: { workflow: WorkflowRecord }) {
  return (
    <ol className="space-y-4">
      {workflow.steps.map((step, index) => (
        <li key={step.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm uppercase tracking-wide text-sky-300">Step {index + 1}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-slate-300">{step.summary}</p>
          {step.hiddenBehavior ? (
            <div className="mt-4 rounded-xl border border-sky-900 bg-sky-950/30 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">Hidden system behavior</p>
              <p className="mt-2 text-slate-200">{step.hiddenBehavior}</p>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

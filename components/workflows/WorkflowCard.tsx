import Link from "next/link";
import type { WorkflowRecord } from "@/lib/types/content";

const triggerLabel: Record<WorkflowRecord["triggerType"], string> = {
  message: "Message",
  schedule: "Schedule",
  event: "Event",
  manual: "Manual"
};

export function WorkflowCard({ workflow }: { workflow: WorkflowRecord }) {
  return (
    <Link
      href={`/examples/${workflow.slug}`}
      className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 no-underline transition hover:border-sky-700"
    >
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-sky-300">
        <span>{triggerLabel[workflow.triggerType]}</span>
        <span>•</span>
        <span>{workflow.difficulty}</span>
        <span>•</span>
        <span>{workflow.autonomyLevel} autonomy</span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold text-white">{workflow.title}</h2>
      <p className="mt-3 text-slate-300">{workflow.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {workflow.toolsUsed.map((tool) => (
          <span key={tool} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
            {tool}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-400">{workflow.learnerScenario}</p>
    </Link>
  );
}

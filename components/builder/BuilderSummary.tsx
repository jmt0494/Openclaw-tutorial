import type { BuilderOptionGroup, WorkflowBuilderDraft } from "@/lib/types/builder";

interface BuilderSummaryProps {
  draft: WorkflowBuilderDraft;
  groups: BuilderOptionGroup[];
}

function getLabel(groups: BuilderOptionGroup[], optionId?: string) {
  if (!optionId) return "Not chosen yet";

  for (const group of groups) {
    const option = group.options.find((entry) => entry.id === optionId);
    if (option) return option.label;
  }

  return optionId;
}

export function BuilderSummary({ draft, groups }: BuilderSummaryProps) {
  const rows = [
    { label: "Goal", value: getLabel(groups, draft.goal) },
    { label: "Trigger", value: getLabel(groups, draft.trigger) },
    {
      label: "Context",
      value: draft.context.length ? draft.context.map((item) => getLabel(groups, item)).join(", ") : "Nothing chosen yet"
    },
    {
      label: "Tools",
      value: draft.tools.length ? draft.tools.map((item) => getLabel(groups, item)).join(", ") : "Nothing chosen yet"
    },
    { label: "Memory", value: getLabel(groups, draft.memory) },
    { label: "Output", value: getLabel(groups, draft.output) },
    { label: "Approval", value: getLabel(groups, draft.approval) }
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">Workflow summary</h2>
      <p className="mt-2 text-slate-300">This is the plain-language draft generated from your current selections.</p>
      <dl className="mt-5 space-y-4">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <dt className="text-sm uppercase tracking-wide text-slate-400">{row.label}</dt>
            <dd className="mt-2 text-slate-200">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

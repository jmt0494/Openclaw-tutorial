import type { BuilderOptionGroup, WorkflowBuilderDraft } from "@/lib/types/builder";

interface BuilderStepProps {
  group: BuilderOptionGroup;
  draft: WorkflowBuilderDraft;
  onToggle: (groupId: BuilderOptionGroup["id"], optionId: string) => void;
}

export function BuilderStep({ group, draft, onToggle }: BuilderStepProps) {
  const selectedValues: string[] = (() => {
    if (group.id === "context") return draft.context;
    if (group.id === "tools") return draft.tools;

    const selectedValue = draft[group.id];
    return selectedValue ? [selectedValue] : [];
  })();

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">{group.title}</h2>
      <p className="mt-2 text-slate-300">{group.description}</p>
      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        {group.options.map((option) => {
          const selected = selectedValues.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onToggle(group.id, option.id)}
              className={`rounded-xl border p-4 text-left transition ${
                selected
                  ? "border-sky-500 bg-sky-500/10 text-white"
                  : "border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-700"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">{option.label}</p>
                  <p className="mt-2 text-sm text-slate-300">{option.description}</p>
                </div>
                <span className="rounded-full border border-slate-700 px-2 py-1 text-xs uppercase tracking-wide text-slate-300">
                  {selected ? "Selected" : group.selectionMode}
                </span>
              </div>
              {option.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {option.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

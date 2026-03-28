import { BuilderForm } from "@/components/builder/BuilderForm";
import { getBuilderOptionGroups } from "@/lib/content-loaders/builder";
import { getWorkflows } from "@/lib/content-loaders/workflows";

export default function BuildPage() {
  const groups = getBuilderOptionGroups();
  const workflows = getWorkflows();

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-wide text-sky-300">Build</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Design a workflow with guided choices</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Think of this as Module 6 in action. Start with the workflow trigger, then narrow the context, tools, memory, output, and approval posture until the design feels honest. After the builder gives you a recommendation, compare it against the three seeded workflow examples on this page and notice where your choices align or drift.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="font-semibold text-white">1. Start with trigger</h2>
          <p className="mt-2 text-sm text-slate-300">Decide first whether the workflow should begin from a user message or a schedule. That choice sets the tone for the rest of the design.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="font-semibold text-white">2. Keep tools and memory narrow</h2>
          <p className="mt-2 text-sm text-slate-300">Choose the smallest viable toolset and the lightest memory option that still prevents repetition or preserves needed history.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="font-semibold text-white">3. Gate the risky edge</h2>
          <p className="mt-2 text-sm text-slate-300">Let harmless preparation and observation run automatically, then gate the consequential action and compare the recommendation against the morning briefing, research assistant, and maintenance examples.</p>
        </div>
      </section>

      <BuilderForm groups={groups} workflows={workflows} />
    </div>
  );
}

import { WorkflowCard } from "@/components/workflows/WorkflowCard";
import { getWorkflows } from "@/lib/content-loaders/workflows";

export default function ExamplesPage() {
  const workflows = getWorkflows();

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-wide text-sky-300">Examples</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Inspect complete workflow patterns</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          These MVP examples show how OpenClaw workflows differ by trigger, tools, session shape, and safety boundary.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-3">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </div>
  );
}

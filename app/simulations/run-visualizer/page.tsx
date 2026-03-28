import Link from "next/link";
import { RunVisualizer } from "@/components/simulations/RunVisualizer";
import { getRunScenarios, getRunScenarioBySlug } from "@/lib/content-loaders/simulations";

export default function RunVisualizerPage({
  searchParams
}: {
  searchParams?: { scenario?: string };
}) {
  const scenarios = getRunScenarios();
  const initialScenarioId = searchParams?.scenario
    ? getRunScenarioBySlug(searchParams.scenario)?.id
    : undefined;

  return (
    <div className="space-y-6">
      <nav className="text-sm text-slate-400">
        <Link href="/" className="no-underline">
          Home
        </Link>{" "}
        / <span>Run Visualizer</span>
      </nav>
      <RunVisualizer scenarios={scenarios} initialScenarioId={initialScenarioId} />
    </div>
  );
}

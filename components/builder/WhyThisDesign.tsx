import Link from "next/link";
import type { WorkflowRecord } from "@/lib/types/content";
import type { WorkflowBuilderResult } from "@/lib/types/builder";

interface WhyThisDesignProps {
  result: WorkflowBuilderResult;
  relatedExamples: WorkflowRecord[];
}

export function WhyThisDesign({ result, relatedExamples }: WhyThisDesignProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm uppercase tracking-wide text-sky-300">Recommendation</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{result.title}</h2>
      <p className="mt-3 text-slate-200">{result.summary}</p>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">Recommended pattern</p>
            <p className="mt-2 text-white">{result.recommendedPattern}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h3 className="font-semibold text-white">Why this design fits</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
              {result.designRationale.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h3 className="font-semibold text-white">Suggested workflow outline</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-200">
              {result.workflowOutline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h3 className="font-semibold text-white">Warnings and tradeoffs</h3>
            {result.warnings.length ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-200">
                {result.warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-slate-300">No major contradictions showed up in this draft. The workflow shape looks coherent for an MVP pattern.</p>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <h3 className="font-semibold text-white">Related examples</h3>
          <p className="mt-2 text-sm text-slate-300">These seeded examples are the closest matches for the pattern you assembled.</p>
          <div className="mt-4 space-y-3">
            {relatedExamples.length ? (
              relatedExamples.map((workflow) => (
                <Link
                  key={workflow.id}
                  href={`/examples/${workflow.slug}`}
                  className="block rounded-xl border border-slate-800 p-4 no-underline transition hover:border-sky-700"
                >
                  <p className="font-semibold text-white">{workflow.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{workflow.summary}</p>
                </Link>
              ))
            ) : (
              <p className="text-slate-300">No close example match yet. The draft still teaches a valid mixed pattern.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

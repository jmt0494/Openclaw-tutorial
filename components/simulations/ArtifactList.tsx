import type { SimulationArtifact } from "@/lib/types/simulation";

function artifactMeta(artifact: SimulationArtifact) {
  switch (artifact.type) {
    case "tool-call":
      return {
        eyebrow: `Tool · ${artifact.toolName}`,
        detail: `Input: ${artifact.inputPreview}`,
        preview: artifact.outputPreview
      };
    case "file":
      return {
        eyebrow: `File · ${artifact.action}`,
        detail: artifact.path,
        preview: artifact.preview
      };
    case "message":
      return {
        eyebrow: `Message · ${artifact.role}`,
        detail: artifact.label,
        preview: artifact.preview
      };
    case "memory-write":
      return {
        eyebrow: "Memory write",
        detail: artifact.target,
        preview: artifact.preview
      };
  }
}

export function ArtifactList({ artifacts }: { artifacts: SimulationArtifact[] }) {
  if (artifacts.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Visible artifacts</h2>
        <p className="mt-3 text-slate-400">This stage does not expose any learner-facing artifacts yet.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold text-white">Visible artifacts</h2>
      <div className="mt-4 space-y-4">
        {artifacts.map((artifact) => {
          const meta = artifactMeta(artifact);

          return (
            <article key={`${artifact.type}-${artifact.label}`} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <p className="text-xs uppercase tracking-wide text-sky-300">{meta.eyebrow}</p>
              <h3 className="mt-2 font-semibold text-white">{artifact.label}</h3>
              <p className="mt-2 text-sm text-slate-400">{meta.detail}</p>
              <p className="mt-3 text-sm text-slate-200">{meta.preview}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

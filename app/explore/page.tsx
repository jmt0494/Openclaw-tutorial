import { ConceptGrid } from "@/components/concepts/ConceptGrid";
import { ConceptMapPlaceholder } from "@/components/concepts/ConceptMapPlaceholder";
import { getConcepts } from "@/lib/content-loaders/concepts";

const categoryDescriptions = [
  "Core pieces explain what the system is.",
  "Context pieces explain what the model sees.",
  "Execution pieces explain how the agent acts.",
  "Automation and orchestration pieces explain how runs begin and get routed.",
  "Safety pieces explain how risk stays bounded."
];

export default function ExplorePage() {
  const concepts = getConcepts();
  const categories = Array.from(new Set(concepts.map((concept) => concept.category)));

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-wide text-sky-300">Explore</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Browse the OpenClaw mental model</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          This surface is the non-linear companion to the lesson flow. Use it when you want to inspect a concept, follow relationships, and jump into the lessons that explain a piece more deeply.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">What you can browse right now</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {categoryDescriptions.map((description) => (
            <div key={description} className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
              {description}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-slate-700 px-3 py-1 capitalize">
              {category}
            </span>
          ))}
        </div>
      </section>

      <ConceptMapPlaceholder />

      <section>
        <h2 className="text-2xl font-semibold text-white">Seeded concepts</h2>
        <p className="mt-2 text-slate-300">
          The cards below are backed by local typed content and cross-linked into lessons and related concepts.
        </p>
        <div className="mt-6">
          <ConceptGrid concepts={concepts} />
        </div>
      </section>
    </div>
  );
}

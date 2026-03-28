export function ConceptMapPlaceholder() {
  return (
    <section className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/70 p-6">
      <p className="text-sm uppercase tracking-wide text-slate-400">Relationship map</p>
      <h2 className="mt-2 text-xl font-semibold text-white">Map view comes later</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        For the MVP scaffold, the Explore area is driven by real concept data and cross-links. A richer graph view can be layered on later without changing the underlying concept model.
      </p>
    </section>
  );
}

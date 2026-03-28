import type { ConceptRecord } from "@/lib/types/content";
import { ConceptCard } from "./ConceptCard";

export function ConceptGrid({ concepts }: { concepts: ConceptRecord[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {concepts.map((concept) => (
        <ConceptCard key={concept.id} concept={concept} />
      ))}
    </div>
  );
}

import { concepts } from "@/content/concepts/concepts";
import { lessons } from "@/content/lessons/lessons";
import { modules } from "@/content/course/modules";

export function getConcepts() {
  return [...concepts].sort((a, b) => a.name.localeCompare(b.name));
}

export function getConceptBySlug(conceptSlug: string) {
  return concepts.find((concept) => concept.slug === conceptSlug) ?? null;
}

export function getConceptById(conceptId: string) {
  return concepts.find((concept) => concept.id === conceptId) ?? null;
}

export function getRelatedConcepts(conceptIds: string[]) {
  return conceptIds
    .map((conceptId) => getConceptById(conceptId))
    .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept));
}

export function getRelatedLessons(lessonIds: string[]) {
  return lessonIds
    .map((lessonId) => {
      const lesson = lessons.find((entry) => entry.id === lessonId);
      if (!lesson) return null;

      const module = modules.find((entry) => entry.id === lesson.moduleId);
      if (!module) return null;

      return { lesson, module };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
}

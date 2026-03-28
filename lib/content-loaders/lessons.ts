import { lessons } from "@/content/lessons/lessons";
import { modules } from "@/content/course/modules";

export function getLessonsForModule(moduleId: string) {
  return lessons
    .filter((lesson) => lesson.moduleId === moduleId)
    .sort((a, b) => a.orderInModule - b.orderInModule);
}

export function getLessonBySlugs(moduleSlug: string, lessonSlug: string) {
  const module = modules.find((entry) => entry.slug === moduleSlug);
  if (!module) return null;

  const lesson = lessons.find(
    (entry) => entry.moduleId === module.id && entry.slug === lessonSlug
  );

  return lesson ? { module, lesson } : null;
}

export function getAdjacentLessons(lessonId: string) {
  const lesson = lessons.find((entry) => entry.id === lessonId);
  if (!lesson) return { previous: null, next: null };

  return {
    previous: lesson.previousLessonId ? lessons.find((entry) => entry.id === lesson.previousLessonId) ?? null : null,
    next: lesson.nextLessonId ? lessons.find((entry) => entry.id === lesson.nextLessonId) ?? null : null
  };
}

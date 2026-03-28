import { course } from "@/content/course/course";
import { modules } from "@/content/course/modules";
import { lessons } from "@/content/lessons/lessons";
import { concepts } from "@/content/concepts/concepts";
import { workflows } from "@/content/workflows/workflows";
import { runScenarios } from "@/content/simulations/run-scenarios";

export type ResolvedLessonReference = {
  lesson: (typeof lessons)[number];
  module: (typeof modules)[number];
};

export function resolveConceptReferences(conceptIds: string[]) {
  return conceptIds
    .map((conceptId) => concepts.find((concept) => concept.id === conceptId) ?? null)
    .filter((concept): concept is (typeof concepts)[number] => Boolean(concept));
}

export function resolveWorkflowReferences(workflowIds: string[]) {
  return workflowIds
    .map((workflowId) => workflows.find((workflow) => workflow.slug === workflowId || workflow.id === workflowId) ?? null)
    .filter((workflow): workflow is (typeof workflows)[number] => Boolean(workflow));
}

export function resolveLessonReferences(lessonIds: string[]) {
  return lessonIds
    .map((lessonId) => {
      const lesson = lessons.find((entry) => entry.id === lessonId);
      if (!lesson) return null;

      const module = modules.find((entry) => entry.id === lesson.moduleId);
      if (!module) return null;

      return { lesson, module } satisfies ResolvedLessonReference;
    })
    .filter((entry): entry is ResolvedLessonReference => Boolean(entry));
}

export function resolveSimulationScenarioReferences(scenarioSlugs: string[]) {
  return scenarioSlugs
    .map((scenarioSlug) => runScenarios.find((scenario) => scenario.slug === scenarioSlug) ?? null)
    .filter((scenario): scenario is (typeof runScenarios)[number] => Boolean(scenario));
}

export function getFeaturedConcepts() {
  return resolveConceptReferences(course.featuredConceptIds);
}

export function getFeaturedWorkflows() {
  return resolveWorkflowReferences(course.featuredWorkflowIds);
}

export function getWorkflowsForLesson(lessonId: string) {
  return workflows.filter((workflow) => workflow.relatedLessonIds.includes(lessonId));
}

export function getWorkflowsForConcept(conceptId: string) {
  return workflows.filter((workflow) => workflow.relatedConceptIds.includes(conceptId));
}

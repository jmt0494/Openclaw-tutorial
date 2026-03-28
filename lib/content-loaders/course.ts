import { course } from "@/content/course/course";
import { modules } from "@/content/course/modules";

export function getCourse() {
  return course;
}

export function getModules() {
  return [...modules].sort((a, b) => a.order - b.order);
}

export function getModuleBySlug(moduleSlug: string) {
  return modules.find((module) => module.slug === moduleSlug);
}

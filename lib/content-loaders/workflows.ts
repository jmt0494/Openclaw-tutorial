import { workflows } from "@/content/workflows/workflows";

export function getWorkflows() {
  return [...workflows];
}

export function getWorkflowBySlug(workflowSlug: string) {
  return workflows.find((workflow) => workflow.slug === workflowSlug) ?? null;
}

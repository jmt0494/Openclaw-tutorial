import { builderOptionGroups } from "@/content/builder/builder-options";
import { buildWorkflowRecommendation, createEmptyBuilderDraft, isBuilderDraftComplete } from "@/content/builder/builder-rules";

export function getBuilderOptionGroups() {
  return builderOptionGroups;
}

export { buildWorkflowRecommendation, createEmptyBuilderDraft, isBuilderDraftComplete };

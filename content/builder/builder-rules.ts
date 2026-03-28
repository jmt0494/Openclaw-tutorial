import { builderOptionGroups } from "@/content/builder/builder-options";
import type { BuilderOption, BuilderOptionGroupId, WorkflowBuilderDraft, WorkflowBuilderResult } from "@/lib/types/builder";

const optionLookup = new Map<string, BuilderOption>(
  builderOptionGroups.flatMap((group) => group.options.map((option) => [option.id, option] as const))
);

function labelFor(optionId?: string) {
  return optionId ? optionLookup.get(optionId)?.label ?? optionId : "Not chosen yet";
}

function labelsFor(optionIds: string[]) {
  return optionIds.map((optionId) => labelFor(optionId));
}

function hasSelection(draft: WorkflowBuilderDraft, groupId: BuilderOptionGroupId) {
  if (groupId === "context" || groupId === "tools") {
    return draft[groupId].length > 0;
  }

  return Boolean(draft[groupId]);
}

export function isBuilderDraftComplete(draft: WorkflowBuilderDraft) {
  return builderOptionGroups.every((group) => hasSelection(draft, group.id));
}

export function createEmptyBuilderDraft(): WorkflowBuilderDraft {
  return {
    context: [],
    tools: []
  };
}

export function buildWorkflowRecommendation(draft: WorkflowBuilderDraft): WorkflowBuilderResult {
  const goal = draft.goal;
  const trigger = draft.trigger;
  const memory = draft.memory;
  const output = draft.output;
  const approval = draft.approval;
  const tools = draft.tools;
  const context = draft.context;

  let title = "Workflow draft";
  let recommendedPattern = "Mixed workflow pattern";
  let relatedExampleWorkflowIds: string[] = [];

  if (goal === "goal-briefing") {
    title = "Scheduled briefing workflow";
    recommendedPattern = "Narrow recurring summary pattern";
    relatedExampleWorkflowIds = ["workflow-1"];
  } else if (goal === "goal-research") {
    title = "Interactive research workflow";
    recommendedPattern = "User-triggered search and synthesis pattern";
    relatedExampleWorkflowIds = ["workflow-2"];
  } else if (goal === "goal-maintenance") {
    title = "Recurring maintenance workflow";
    recommendedPattern = "Scheduled inspection and audit pattern";
    relatedExampleWorkflowIds = ["workflow-3"];
  }

  if (goal === "goal-briefing" && trigger === "trigger-message") {
    recommendedPattern = "Manual briefing pattern";
  }

  if (goal === "goal-research" && trigger === "trigger-schedule") {
    recommendedPattern = "Scheduled research digest pattern";
  }

  const summary = `${labelFor(goal)} started by ${labelFor(trigger).toLowerCase()} that loads ${labelsFor(context)
    .join(", ")
    .toLowerCase()}, uses ${labelsFor(tools).join(", ").toLowerCase()}, keeps ${labelFor(memory).toLowerCase()}, and produces ${labelFor(output).toLowerCase()}.`;

  const designRationale = [
    `The primary job is ${labelFor(goal).toLowerCase()}, so the workflow should stay optimized for that outcome instead of becoming a generic agent run.`,
    `A ${labelFor(trigger).toLowerCase()} fits this design because it matches how the work naturally begins.`,
    `${labelsFor(context).join(" and ")} give the run durable context before it starts composing output.`,
    `${labelsFor(tools).join(" and ")} are enough to complete the job without widening the action surface too far.`,
    `${labelFor(output)} keeps the final deliverable clear for the learner and for future workflow refinement.`
  ];

  const workflowOutline = [
    `Start from ${labelFor(trigger).toLowerCase()}.`,
    `Load ${labelsFor(context).join(", ").toLowerCase()} before taking action.`,
    `Use ${labelsFor(tools).join(" and ").toLowerCase()} to gather or produce the required material.`,
    `Apply ${labelFor(memory).toLowerCase()} so future runs stay coherent.`,
    `Finish with ${labelFor(output).toLowerCase()} and respect the chosen approval posture.`
  ];

  const warnings: string[] = [];

  if (goal === "goal-briefing" && trigger === "trigger-message") {
    warnings.push("A recurring briefing usually works better on a schedule than as a manual message-only workflow.");
  }

  if (goal === "goal-research" && trigger === "trigger-schedule") {
    warnings.push("Research is often clarifying and collaborative, so a schedule can feel awkward unless the digest scope is already fixed.");
  }

  if (tools.includes("tool-exec") && approval !== "approval-gated") {
    warnings.push("Bounded commands usually deserve a gated approval posture even if the workflow is mostly observational.");
  }

  if (tools.includes("tool-web-search") && !context.includes("context-external-signals")) {
    warnings.push("If you want web-backed synthesis, model the outside sources explicitly as part of the workflow context.");
  }

  if (memory === "memory-none" && trigger === "trigger-schedule") {
    warnings.push("Scheduled workflows often benefit from lightweight state so they can avoid repetition and compare recent outputs.");
  }

  if (output === "output-report-only" && !tools.includes("tool-write")) {
    warnings.push("A saved-report workflow should include write capability or it cannot produce the durable artifact it promises.");
  }

  if (goal === "goal-maintenance" && !tools.includes("tool-exec")) {
    warnings.push("A maintenance workflow usually needs bounded command execution or another real inspection source to avoid becoming hand-wavy.");
  }

  if (goal === "goal-research" && !tools.includes("tool-web-search")) {
    warnings.push("Research workflows are much stronger when they can gather evidence instead of relying on memory alone.");
  }

  return {
    title,
    summary,
    recommendedPattern,
    designRationale,
    workflowOutline,
    warnings,
    relatedExampleWorkflowIds
  };
}

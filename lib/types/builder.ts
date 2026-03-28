export type BuilderOptionGroupId = "goal" | "trigger" | "context" | "tools" | "memory" | "output" | "approval";

export interface BuilderOption {
  id: string;
  label: string;
  description: string;
  effects?: string[];
  tags?: string[];
}

export interface BuilderOptionGroup {
  id: BuilderOptionGroupId;
  title: string;
  description: string;
  selectionMode: "single" | "multiple";
  options: BuilderOption[];
}

export interface WorkflowBuilderDraft {
  goal?: string;
  trigger?: string;
  context: string[];
  tools: string[];
  memory?: string;
  output?: string;
  approval?: string;
}

export interface WorkflowBuilderResult {
  title: string;
  summary: string;
  recommendedPattern: string;
  designRationale: string[];
  workflowOutline: string[];
  warnings: string[];
  relatedExampleWorkflowIds: string[];
}

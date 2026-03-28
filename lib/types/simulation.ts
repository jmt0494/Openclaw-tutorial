export type SimulationContextItemKind = "system" | "file" | "memory" | "history" | "tool-policy";

export interface SimulationContextItem {
  id: string;
  label: string;
  detail: string;
  kind: SimulationContextItemKind;
}

export interface SimulationContextSnapshot {
  systemPieces: SimulationContextItem[];
  workspaceFiles: SimulationContextItem[];
  memoryItems: SimulationContextItem[];
  sessionHistoryItems: SimulationContextItem[];
}

export type SimulationStageKind =
  | "intake"
  | "routing"
  | "context-assembly"
  | "model-inference"
  | "tool-calls"
  | "final-reply"
  | "persistence";

export type SimulationArtifact =
  | {
      type: "tool-call";
      label: string;
      toolName: string;
      inputPreview: string;
      outputPreview: string;
    }
  | {
      type: "file";
      label: string;
      path: string;
      action: "read" | "write" | "edit";
      preview: string;
    }
  | {
      type: "message";
      label: string;
      role: "user" | "assistant" | "system";
      preview: string;
    }
  | {
      type: "memory-write";
      label: string;
      target: string;
      preview: string;
    };

export interface SimulationStageTeachingNotes {
  noticeFirst: string;
  diagnosticQuestion: string;
  commonMisconceptions: string[];
}

export interface SimulationStage {
  id: string;
  kind: SimulationStageKind;
  title: string;
  explanation: string;
  learnerTakeaway: string;
  teachingNotes?: SimulationStageTeachingNotes;
  visibleArtifacts: SimulationArtifact[];
}

export interface SimulationFinalOutput {
  assistantReply: string;
  persistedToSession: boolean;
  persistedToMemory: boolean;
  notes: string[];
}

export interface SimulationTeachingPrompt {
  scenarioPurpose: string;
  inspectFirst: string;
  compareNext: string;
}

export interface SimulationScenario {
  id: string;
  slug: string;
  title: string;
  promptLabel: string;
  userMessage: string;
  summary: string;
  tags: string[];
  teachingPrompt?: SimulationTeachingPrompt;
  initialContext: SimulationContextSnapshot;
  stages: SimulationStage[];
  finalOutput: SimulationFinalOutput;
}

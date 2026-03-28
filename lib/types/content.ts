export type LessonContentBlock =
  | { type: "rich-text"; markdown: string }
  | { type: "list"; title: string; items: string[] }
  | { type: "callout"; tone: "mental-model" | "insight" | "warning"; title: string; body: string }
  | { type: "example"; title: string; scenario: string; explanation: string }
  | {
      type: "action-cta";
      title: string;
      body: string;
      href: string;
      linkLabel: string;
      checklist: string[];
      eyebrow?: string;
      checklistTitle?: string;
    }
  | { type: "checkpoint"; question: string; answer: string };

export interface ModuleRecord {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  order: number;
  lessonIds: string[];
  estimatedMinutes: number;
  learningGoals: string[];
}

export interface LessonSimulationExercise {
  scenarioSlug: string;
  title: string;
  whyNow: string;
  focusPoints: string[];
}

export interface LessonRecord {
  id: string;
  slug: string;
  moduleId: string;
  orderInModule: number;
  orderGlobal: number;
  title: string;
  summary: string;
  estimatedMinutes: number;
  learningObjectives: string[];
  keyTakeaways: string[];
  relatedConceptIds: string[];
  relatedSimulationScenarioSlugs?: string[];
  simulationExercises?: LessonSimulationExercise[];
  content: LessonContentBlock[];
  previousLessonId?: string;
  nextLessonId?: string;
}

export interface CourseRecord {
  id: string;
  title: string;
  tagline: string;
  description: string;
  version: string;
  featuredConceptIds: string[];
  featuredWorkflowIds: string[];
}

export interface ConceptExampleRecord {
  title: string;
  description: string;
}

export interface ConceptRecord {
  id: string;
  slug: string;
  name: string;
  category: "core" | "execution" | "context" | "automation" | "safety" | "orchestration";
  shortDefinition: string;
  explanation: string;
  whyItMatters: string;
  examples: ConceptExampleRecord[];
  relatedConceptIds: string[];
  relatedLessonIds: string[];
}

export interface WorkflowStepRecord {
  id: string;
  title: string;
  summary: string;
  hiddenBehavior?: string;
}

export interface WorkflowTeachingMetadata {
  lessonLens: string;
  whyItMattersNow: string;
  inspectChecklist: string[];
  compareWorkflowSlugs?: string[];
  relatedLessonsIntro?: string;
  relatedSimulationsIntro?: string;
}

export interface WorkflowRecord {
  id: string;
  slug: string;
  title: string;
  summary: string;
  learnerScenario: string;
  triggerType: "message" | "schedule" | "event" | "manual";
  difficulty: "beginner" | "intermediate";
  autonomyLevel: "low" | "moderate" | "high";
  toolsUsed: string[];
  contextLoaded: string[];
  outputPattern: string;
  sessionPattern: string;
  whyThisDesign: string[];
  risks: string[];
  commonFailureModes: string[];
  relatedLessonIds: string[];
  relatedConceptIds: string[];
  relatedSimulationScenarioSlugs?: string[];
  teaching: WorkflowTeachingMetadata;
  steps: WorkflowStepRecord[];
}

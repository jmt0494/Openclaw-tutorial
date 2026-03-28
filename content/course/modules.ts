import type { ModuleRecord } from "@/lib/types/content";

export const modules: ModuleRecord[] = [
  {
    id: "module-1",
    slug: "what-openclaw-is",
    title: "What OpenClaw Is",
    shortTitle: "What It Is",
    description: "Build the basic mental model before touching workflow design.",
    order: 1,
    lessonIds: ["m1-1", "m1-2", "m1-4"],
    estimatedMinutes: 27,
    learningGoals: [
      "Understand what problem OpenClaw solves",
      "Name the core pieces of the mental model",
      "Distinguish chatting, automating, and orchestrating"
    ]
  },
  {
    id: "module-2",
    slug: "how-a-run-works",
    title: "How a Run Works",
    shortTitle: "Runs",
    description: "Follow an OpenClaw run from input to persistence.",
    order: 2,
    lessonIds: ["m2-1", "m2-2", "m2-3", "m2-5"],
    estimatedMinutes: 40,
    learningGoals: [
      "Understand intake and routing",
      "Understand context assembly",
      "Understand how direct responses, tool calls, and common failure symptoms fit into a run"
    ]
  },
  {
    id: "module-3",
    slug: "core-building-blocks",
    title: "The Core Building Blocks",
    shortTitle: "Building Blocks",
    description: "Learn how files, sessions, memory, tools, and subagents shape behavior.",
    order: 3,
    lessonIds: ["m3-1", "m3-2", "m3-3", "m3-4", "m3-5", "m3-9"],
    estimatedMinutes: 56,
    learningGoals: [
      "Understand bootstrap files and durable context",
      "Distinguish memory from session history",
      "Know where tools and isolated delegated work fit in the system"
    ]
  },
  {
    id: "module-4",
    slug: "safety-control-and-boundaries",
    title: "Safety, Control, and Boundaries",
    shortTitle: "Safety",
    description: "Teach trust boundaries, approval decisions, and durable guardrails before giving workflows more autonomy.",
    order: 4,
    lessonIds: ["m4-1", "m4-3", "m4-5"],
    estimatedMinutes: 28,
    learningGoals: [
      "Recognize trust boundaries between private, shared, and external contexts",
      "Decide which actions should stay automatic and which should require approval",
      "Turn vague preferences into enforceable guardrails"
    ]
  },
  {
    id: "module-5",
    slug: "workflow-patterns-that-actually-work",
    title: "Workflow Patterns That Actually Work",
    shortTitle: "Patterns",
    description: "Teach reusable workflow shapes that map directly to the live example workflows and execution patterns.",
    order: 5,
    lessonIds: ["m5-1", "m5-2", "m5-4", "m5-6"],
    estimatedMinutes: 38,
    learningGoals: [
      "Recognize common workflow patterns and when to use them",
      "Connect trigger, context, tools, and output into a repeatable design",
      "Know when isolation or delegation improves focus and reliability"
    ]
  },
  {
    id: "module-6",
    slug: "design-your-own-workflow",
    title: "Design Your Own Workflow",
    shortTitle: "Design",
    description: "Turn understanding into workflow choices.",
    order: 6,
    lessonIds: ["m6-1", "m6-2", "m6-4", "m6-5", "m6-6", "m6-7"],
    estimatedMinutes: 49,
    learningGoals: [
      "Choose the right trigger",
      "Choose where memory should live",
      "Translate goals into workflow structure"
    ]
  }
];

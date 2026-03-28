import type { CourseRecord } from "@/lib/types/content";

export const course: CourseRecord = {
  id: "openclaw-interactive-tutorial",
  title: "OpenClaw Interactive Tutorial",
  tagline: "Learn how OpenClaw works by seeing runs, exploring concepts, and designing workflows.",
  description:
    "A guided simulator-style tutorial that helps learners build a practical mental model of OpenClaw.",
  version: "mvp",
  featuredConceptIds: ["agent", "session", "memory", "schedule"],
  featuredWorkflowIds: ["morning-briefing", "research-assistant", "recurring-maintenance-check"]
};

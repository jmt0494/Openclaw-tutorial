import type { BuilderOptionGroup } from "@/lib/types/builder";

export const builderOptionGroups: BuilderOptionGroup[] = [
  {
    id: "goal",
    title: "1. What kind of job are you designing?",
    description: "Start with the learner-facing purpose. This shapes the rest of the workflow more than any single tool choice.",
    selectionMode: "single",
    options: [
      {
        id: "goal-briefing",
        label: "Recurring briefing",
        description: "Collect a few signals on a schedule and deliver one concise summary.",
        tags: ["scheduled", "summary", "low-noise"]
      },
      {
        id: "goal-research",
        label: "On-demand research",
        description: "Search, fetch, compare, and synthesize information for a specific request.",
        tags: ["interactive", "evidence", "memo"]
      },
      {
        id: "goal-maintenance",
        label: "Recurring maintenance check",
        description: "Inspect a machine or service, categorize findings, and write an audit-style report.",
        tags: ["scheduled", "ops", "bounded"]
      }
    ]
  },
  {
    id: "trigger",
    title: "2. How should the workflow start?",
    description: "The trigger is the start of the workflow contract, so choose how the run should begin before fine-tuning the rest.",
    selectionMode: "single",
    options: [
      {
        id: "trigger-message",
        label: "User message",
        description: "Best for ad hoc, interactive jobs where the user starts the run."
      },
      {
        id: "trigger-schedule",
        label: "Scheduled run",
        description: "Best for recurring checks, briefings, and routine maintenance."
      }
    ]
  },
  {
    id: "context",
    title: "3. What context should be loaded?",
    description: "Pick the durable inputs this workflow should rely on before it acts.",
    selectionMode: "multiple",
    options: [
      {
        id: "context-user-request",
        label: "Current user request",
        description: "Use the latest prompt as the main task definition.",
        tags: ["interactive"]
      },
      {
        id: "context-policy-file",
        label: "Workflow instructions or policy file",
        description: "Read standing rules so the run behaves consistently.",
        tags: ["durable", "structured"]
      },
      {
        id: "context-previous-report",
        label: "Previous report or prior state",
        description: "Compare against earlier outputs so the workflow can detect change.",
        tags: ["durable", "trend"]
      },
      {
        id: "context-external-signals",
        label: "External signals",
        description: "Use sources like search results, fetched pages, or weather/calendar snapshots.",
        tags: ["external", "tool-backed"]
      }
    ]
  },
  {
    id: "tools",
    title: "4. Which tools should the workflow use?",
    description: "Choose the minimum viable toolset so the workflow stays legible, safe, and easy to justify.",
    selectionMode: "multiple",
    options: [
      {
        id: "tool-read",
        label: "Read files",
        description: "Load project docs, instructions, prior reports, or saved notes."
      },
      {
        id: "tool-write",
        label: "Write files",
        description: "Save a durable report, memo, or status artifact."
      },
      {
        id: "tool-web-search",
        label: "Web search + fetch",
        description: "Gather outside information and inspect source material."
      },
      {
        id: "tool-exec",
        label: "Run bounded commands",
        description: "Inspect system state through predefined shell commands."
      }
    ]
  },
  {
    id: "memory",
    title: "5. How much memory should it keep?",
    description: "Choose the lightest durable memory that still prevents repetition or preserves the history this workflow actually needs.",
    selectionMode: "single",
    options: [
      {
        id: "memory-none",
        label: "Minimal memory",
        description: "Rely mostly on the current run and avoid extra durable state."
      },
      {
        id: "memory-state",
        label: "Lightweight workflow state",
        description: "Track prior outputs or sent items so recurring runs avoid repetition."
      },
      {
        id: "memory-report-history",
        label: "Report history",
        description: "Keep prior reports so the workflow can compare trends over time."
      }
    ]
  },
  {
    id: "output",
    title: "6. What should the workflow produce?",
    description: "Define the main deliverable the learner should expect from the run.",
    selectionMode: "single",
    options: [
      {
        id: "output-chat-summary",
        label: "Short chat summary",
        description: "Return a concise answer or briefing directly in chat."
      },
      {
        id: "output-chat-plus-file",
        label: "Chat summary + saved file",
        description: "Send the short version in chat and persist the durable version in the workspace."
      },
      {
        id: "output-report-only",
        label: "Saved report with selective notification",
        description: "Always write a report and only alert when something important changed."
      }
    ]
  },
  {
    id: "approval",
    title: "7. What approval posture fits this workflow?",
    description: "Set approval at the consequential edge: let harmless prep run, then gate the risky action.",
    selectionMode: "single",
    options: [
      {
        id: "approval-low",
        label: "Low risk / mostly observation",
        description: "Good for read-heavy or research-heavy runs that stay away from sensitive actions."
      },
      {
        id: "approval-gated",
        label: "Gated higher-risk actions",
        description: "Allow observation, but require approval before commands or sensitive writes."
      }
    ]
  }
];

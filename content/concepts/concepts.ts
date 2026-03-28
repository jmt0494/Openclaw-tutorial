import type { ConceptRecord } from "@/lib/types/content";

export const concepts: ConceptRecord[] = [
  {
    id: "agent",
    slug: "agent",
    name: "Agent",
    category: "core",
    shortDefinition: "The assistant identity and instruction layer that does the work.",
    explanation:
      "In OpenClaw, the agent is not just a model outputting text. It is the configured assistant shaped by system instructions, developer rules, workspace context, and available tools.",
    whyItMatters:
      "If you misunderstand the agent as a free-floating chatbot, the rest of the system will feel mysterious. The agent only makes sense as part of an environment with rules, files, and execution boundaries.",
    examples: [
      {
        title: "Project helper",
        description: "An agent reads project docs, edits code, and reports what changed."
      },
      {
        title: "Personal assistant",
        description: "An agent checks files, calendars, and notes to produce a useful briefing."
      }
    ],
    relatedConceptIds: ["workspace", "session", "tools", "memory"],
    relatedLessonIds: ["m1-1", "m1-2", "m3-2", "m3-9"]
  },
  {
    id: "workspace",
    slug: "workspace",
    name: "Workspace",
    category: "context",
    shortDefinition: "The file and folder environment where the agent can read, write, and organize durable context.",
    explanation:
      "The workspace is where project docs, bootstrap files, notes, outputs, and structured artifacts live. It gives the agent a place to operate that is richer and more durable than a chat window.",
    whyItMatters:
      "A lot of OpenClaw usefulness comes from keeping important context in files that can be revisited, edited, and shared across runs.",
    examples: [
      {
        title: "Bootstrap files",
        description: "AGENTS.md, SOUL.md, and USER.md shape behavior before the current chat even begins."
      },
      {
        title: "Research artifacts",
        description: "A report written to the workspace survives after the live chat ends."
      }
    ],
    relatedConceptIds: ["agent", "context", "memory", "tools", "workflow"],
    relatedLessonIds: ["m1-1", "m1-2", "m2-2", "m3-1", "m3-2", "m3-4", "m6-5"]
  },
  {
    id: "session",
    slug: "session",
    name: "Session",
    category: "execution",
    shortDefinition: "The live conversational or execution thread that holds short-term continuity for a run or series of runs.",
    explanation:
      "A session is the immediate working thread where messages, recent tool activity, and local continuity accumulate. Different routes, triggers, or delegated runs may use different sessions.",
    whyItMatters:
      "Many beginner confusions come from assuming all context lives in one universal conversation. Session boundaries affect what history is available and how the run behaves.",
    examples: [
      {
        title: "Main chat",
        description: "A user asks follow-up questions and the assistant can rely on recent exchanges in that thread."
      },
      {
        title: "Scheduled run",
        description: "A briefing workflow runs in an isolated recurring session instead of piggybacking on random chat history."
      }
    ],
    relatedConceptIds: ["agent", "channels", "routing", "memory", "workflow", "subagents"],
    relatedLessonIds: ["m1-2", "m2-1", "m2-2", "m2-5", "m3-3", "m3-4", "m3-9", "m6-2", "m6-6"]
  },
  {
    id: "tools",
    slug: "tools",
    name: "Tools",
    category: "execution",
    shortDefinition: "The concrete actions the agent can take beyond producing text.",
    explanation:
      "Tools are the interface between language and action. Reading files, editing code, searching the web, fetching pages, or running commands all happen through explicit tool calls rather than magical hidden powers.",
    whyItMatters:
      "Without tools, the assistant can only speculate. With tools, it can inspect reality, produce artifacts, and operate inside bounded workflows.",
    examples: [
      {
        title: "File work",
        description: "The agent reads docs before answering or writes a report after finishing a task."
      },
      {
        title: "Research flow",
        description: "The agent searches and fetches sources before synthesizing an answer."
      }
    ],
    relatedConceptIds: ["agent", "workspace", "approval", "guardrails", "workflow"],
    relatedLessonIds: ["m1-2", "m2-2", "m2-3", "m3-5", "m4-3", "m5-4", "m6-4", "m6-5"]
  },
  {
    id: "channels",
    slug: "channels",
    name: "Channels",
    category: "orchestration",
    shortDefinition: "The surfaces where messages or triggers enter and where outputs are delivered.",
    explanation:
      "A channel is the path into or out of the system: a web chat, a group chat bridge, a scheduled reporting surface, or another connected input/output path.",
    whyItMatters:
      "Channels help explain why the same assistant may behave differently in different places. The surface affects routing, expectations, and sometimes the surrounding context.",
    examples: [
      {
        title: "Direct chat",
        description: "A user speaks to the assistant in a dedicated chat window."
      },
      {
        title: "Scheduled delivery",
        description: "A recurring workflow sends a summary into a reporting channel without a live prompt."
      }
    ],
    relatedConceptIds: ["session", "routing", "trigger", "workflow"],
    relatedLessonIds: ["m1-2", "m2-1", "m5-1", "m6-2"]
  },
  {
    id: "routing",
    slug: "routing",
    name: "Routing",
    category: "orchestration",
    shortDefinition: "The decision about where an incoming message or trigger should run.",
    explanation:
      "Routing determines which execution path, session, or handler will own a run. It happens before the model answers and often decides what context will be available.",
    whyItMatters:
      "If routing is wrong, the rest of the run may look random. The agent may land in the wrong session, lack needed context, or miss the intended workflow entirely.",
    examples: [
      {
        title: "Message vs scheduled run",
        description: "A user request and a cron wakeup may need different session shapes and different rule paths."
      }
    ],
    relatedConceptIds: ["channels", "session", "trigger", "workflow", "subagents"],
    relatedLessonIds: ["m2-1", "m2-5", "m6-2", "m6-6"]
  },
  {
    id: "context",
    slug: "context",
    name: "Context",
    category: "context",
    shortDefinition: "The bundle of instructions, files, memory, and history assembled before the model responds.",
    explanation:
      "Context is not just the latest user line. It includes instructions, selected files, memory notes, recent session history, and tool constraints that shape the assistant's response.",
    whyItMatters:
      "Most apparent intelligence or forgetfulness is really context quality. Better context design usually produces better runs.",
    examples: [
      {
        title: "Assembled run input",
        description: "A run can include AGENTS.md, project docs, recent messages, and tool policy all at once."
      }
    ],
    relatedConceptIds: ["workspace", "memory", "session", "tools"],
    relatedLessonIds: ["m2-2", "m2-3", "m2-5", "m3-1", "m3-2", "m3-4", "m6-4"]
  },
  {
    id: "memory",
    slug: "memory",
    name: "Memory",
    category: "context",
    shortDefinition: "Durable notes and continuity that survive beyond the current live chat window.",
    explanation:
      "Memory in OpenClaw usually means files or structured notes that the assistant can reload later. It is different from whatever happens to still be visible in recent session history.",
    whyItMatters:
      "If you want continuity across restarts and future runs, memory has to live somewhere durable. Otherwise you are trusting short-lived context to do long-term work.",
    examples: [
      {
        title: "User preferences",
        description: "Standing preferences written to files survive better than repeated ad hoc chat reminders."
      },
      {
        title: "Workflow state",
        description: "A morning briefing can avoid duplicates by recording what was already sent."
      }
    ],
    relatedConceptIds: ["workspace", "session", "context", "workflow"],
    relatedLessonIds: ["m1-2", "m2-2", "m2-5", "m3-2", "m3-4", "m6-5"]
  },
  {
    id: "subagents",
    slug: "subagents",
    name: "Subagents",
    category: "orchestration",
    shortDefinition: "Focused worker runs delegated from a main agent for bounded tasks.",
    explanation:
      "Subagents let a coordinating agent assign scoped work to temporary workers. They are useful for implementation, review, or research tasks that should stay isolated and focused.",
    whyItMatters:
      "Subagents make orchestration legible. Instead of one giant run trying to do everything, work can be split into narrower lanes with cleaner boundaries.",
    examples: [
      {
        title: "Builder and reviewer lanes",
        description: "One subagent can implement a feature while another reviews it against project docs."
      }
    ],
    relatedConceptIds: ["agent", "session", "routing", "workflow"],
    relatedLessonIds: ["m2-1", "m3-9", "m5-6", "m6-6"]
  },
  {
    id: "trigger",
    slug: "trigger",
    name: "Trigger",
    category: "automation",
    shortDefinition: "The event that starts a workflow or run.",
    explanation:
      "A trigger can be a message, schedule, manual action, or event from another system. It defines how the run begins and sets expectations for interaction and autonomy.",
    whyItMatters:
      "Choosing the wrong trigger often creates awkward workflows. A periodic task should not depend on a human remembering to ask, and an interactive task should not be buried in an unattended schedule.",
    examples: [
      {
        title: "Morning briefing",
        description: "A schedule trigger makes a recurring report happen predictably."
      },
      {
        title: "Research assistant",
        description: "A message trigger works better for ad hoc, collaborative tasks."
      }
    ],
    relatedConceptIds: ["channels", "routing", "workflow", "session", "schedule"],
    relatedLessonIds: ["m1-4", "m2-5", "m5-2", "m6-2"]
  },
  {
    id: "schedule",
    slug: "schedule",
    name: "Schedule",
    category: "automation",
    shortDefinition: "A time-based trigger that starts a run without waiting for a fresh human message.",
    explanation:
      "Schedules are the recurring automation layer behind things like morning briefings, nightly summaries, and weekly maintenance checks. In practice, they are often implemented with cron-like configuration, but the learner-facing idea is simpler: the run wakes up because the clock says it should.",
    whyItMatters:
      "This concept helps learners separate trigger design from chat behavior. A scheduled workflow should not depend on random conversational history, and it usually needs durable state so it can avoid repeating itself.",
    examples: [
      {
        title: "Morning briefing",
        description: "The assistant wakes up every morning, gathers signals, and sends one short briefing."
      },
      {
        title: "Maintenance check",
        description: "A weekly health check runs on a fixed cadence and records a dated report."
      }
    ],
    relatedConceptIds: ["trigger", "workflow", "session", "memory"],
    relatedLessonIds: ["m2-1", "m6-2"]
  },
  {
    id: "workflow",
    slug: "workflow",
    name: "Workflow",
    category: "automation",
    shortDefinition: "A repeatable pattern that connects trigger, context, tools, decisions, and output into one designed run shape.",
    explanation:
      "A workflow is the higher-level pattern that says how a job should start, what context it should load, what tools it may use, what output it should produce, and where safety boundaries sit.",
    whyItMatters:
      "Thinking in workflows turns isolated prompts into repeatable systems. It helps you design for reliability, clarity, and bounded autonomy.",
    examples: [
      {
        title: "Recurring maintenance check",
        description: "A schedule-driven observation workflow writes a report and escalates only when needed."
      },
      {
        title: "Research assistant",
        description: "A message-triggered workflow searches, fetches, synthesizes, and saves a memo."
      }
    ],
    relatedConceptIds: ["trigger", "routing", "session", "tools", "approval", "guardrails"],
    relatedLessonIds: ["m1-1", "m1-4", "m2-1", "m2-3", "m2-5", "m3-9", "m4-1", "m4-3", "m4-5", "m5-1", "m5-2", "m5-4", "m5-6", "m6-1", "m6-2", "m6-5", "m6-6", "m6-7"]
  },
  {
    id: "approval",
    slug: "approval",
    name: "Approval",
    category: "safety",
    shortDefinition: "The human checkpoint that gates higher-risk actions.",
    explanation:
      "Approval is how a workflow distinguishes safe observation from actions that deserve human oversight. It can gate shell commands, external writes, or other sensitive operations.",
    whyItMatters:
      "A lot of trust comes from making risky actions explicit. Approval boundaries let workflows stay useful without quietly overreaching.",
    examples: [
      {
        title: "Command approval",
        description: "A maintenance workflow can inspect by default but request approval before making changes."
      }
    ],
    relatedConceptIds: ["tools", "guardrails", "workflow"],
    relatedLessonIds: ["m4-1", "m4-3", "m4-5", "m6-1", "m6-4"]
  },
  {
    id: "guardrails",
    slug: "guardrails",
    name: "Guardrails",
    category: "safety",
    shortDefinition: "The rules and boundaries that keep the agent useful without becoming reckless.",
    explanation:
      "Guardrails include system instructions, tool policies, approval requirements, and workflow constraints. They shape what the assistant should avoid, escalate, or handle carefully.",
    whyItMatters:
      "Strong guardrails are what make autonomy survivable. They keep the system aligned with the user’s risk tolerance and working norms.",
    examples: [
      {
        title: "External action boundary",
        description: "The assistant may freely read local files but must ask before sending an external message."
      }
    ],
    relatedConceptIds: ["approval", "tools", "workflow", "agent"],
    relatedLessonIds: ["m4-1", "m4-3", "m4-5", "m6-7"]
  }
];

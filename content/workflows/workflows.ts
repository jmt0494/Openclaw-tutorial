import type { WorkflowRecord } from "@/lib/types/content";

export const workflows: WorkflowRecord[] = [
  {
    id: "workflow-1",
    slug: "morning-briefing",
    title: "Morning Briefing",
    summary: "A scheduled workflow that gathers a few signals, filters for relevance, and delivers one concise briefing.",
    learnerScenario: "Every morning at 7:30 AM, the assistant checks the calendar, weather, and urgent items, then sends a short briefing.",
    triggerType: "schedule",
    difficulty: "beginner",
    autonomyLevel: "low",
    toolsUsed: ["read", "web_fetch", "write"],
    contextLoaded: ["USER.md", "HEARTBEAT.md or briefing instructions", "briefing state file", "mocked calendar summary", "mocked weather snapshot"],
    outputPattern: "One concise status message with only the most useful items.",
    sessionPattern: "Isolated recurring run or a dedicated briefing session that does not depend on random chat history.",
    whyThisDesign: [
      "A schedule is cleaner than waiting for the user to ask every morning.",
      "Lightweight state tracking prevents repeated reminders and alert spam without turning the workflow into a giant history archive.",
      "A narrow tool set keeps the workflow understandable and low-risk."
    ],
    risks: [
      "Sending too much detail instead of a filtered briefing.",
      "Repeating stale reminders when state is not updated.",
      "Over-notifying when nothing meaningful changed."
    ],
    commonFailureModes: [
      "The workflow reads inputs but fails to prioritize them.",
      "Yesterday's reminder is sent again because the workflow lacks good lightweight state or that state is stale.",
      "The final message turns into a rambling essay instead of a briefing."
    ],
    relatedLessonIds: ["m1-4", "m2-1", "m2-2", "m2-5", "m5-2", "m6-2", "m6-5"],
    relatedConceptIds: ["schedule", "memory", "workflow", "session"],
    relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
    teaching: {
      lessonLens: "Use this workflow to study how a recurring job becomes dependable instead of spammy.",
      whyItMattersNow:
        "This is the clearest example of the scheduled-pattern lesson from Module 5: stable trigger, bounded sources, compressed output, and a tiny bit of persistence so the next run behaves better.",
      inspectChecklist: [
        "Notice that the trigger is a schedule, not a live user message, so the workflow needs durable instructions up front.",
        "Track how the workflow gathers only a few signals, then filters them instead of dumping raw inputs into the final message.",
        "Look for the state-recording step near the end; that persistence step is what keeps recurring runs from repeating themselves."
      ],
      compareWorkflowSlugs: ["research-assistant", "recurring-maintenance-check"],
      relatedLessonsIntro:
        "Read these lessons as design lenses for recurring automation: one explains the pattern, and the others explain the trigger, context, and persistence choices that make it work.",
      relatedSimulationsIntro:
        "Open the visualizer after this page if you want to see the same pattern as an actual run timeline with visible context, tool calls, and persistence."
    },
    steps: [
      {
        id: "scheduler-wake",
        title: "Scheduler wakes the workflow",
        summary: "A cron-like trigger starts the run without a human message.",
        hiddenBehavior: "Routing is determined by the scheduled job configuration, not by a chat surface."
      },
      {
        id: "load-instructions",
        title: "Load briefing instructions and preferences",
        summary: "The agent reads standing guidance so the briefing stays concise and user-shaped.",
        hiddenBehavior: "Durable files matter more here than transient chat context."
      },
      {
        id: "gather-signals",
        title: "Gather calendar, weather, and urgent items",
        summary: "The run assembles a small set of relevant sources before composing anything."
      },
      {
        id: "filter-and-compose",
        title: "Filter for what matters and compose the briefing",
        summary: "The agent chooses what is worth surfacing and drafts a short update."
      },
      {
        id: "record-state",
        title: "Record what was already sent",
        summary: "The workflow updates lightweight state so future runs avoid repetition."
      }
    ]
  },
  {
    id: "workflow-2",
    slug: "research-assistant",
    title: "Research Assistant",
    summary: "A user-triggered research pipeline that searches, fetches, synthesizes, and saves a durable report.",
    learnerScenario: "I need a quick comparison of two options. Find reliable sources, summarize them, and save a short report in the workspace.",
    triggerType: "message",
    difficulty: "beginner",
    autonomyLevel: "low",
    toolsUsed: ["web_search", "web_fetch", "read", "write"],
    contextLoaded: ["current user request", "optional existing notes", "research instructions or source-quality rubric"],
    outputPattern: "A concise answer in chat plus an optional saved markdown memo.",
    sessionPattern: "Task-focused interactive session that may include one clarification step if the goal is underspecified.",
    whyThisDesign: [
      "A direct user message is the right trigger because the task is ad hoc and interactive.",
      "Fetching source pages turns search results into inspectable evidence instead of guesswork.",
      "Writing a report preserves useful work beyond the live chat window without requiring recurring workflow memory."
    ],
    risks: [
      "Weak query interpretation can poison the rest of the workflow.",
      "Over-collection slows the run and muddies the summary.",
      "Unsourced synthesis makes the result hard to trust."
    ],
    commonFailureModes: [
      "The agent searches well but never saves the durable artifact.",
      "Too many sources create a bloated, low-signal summary.",
      "The output answers loosely instead of matching the requested format."
    ],
    relatedLessonIds: ["m1-4", "m2-2", "m2-3", "m2-5", "m3-4", "m5-4", "m6-2", "m6-4"],
    relatedConceptIds: ["tools", "workspace", "session", "workflow"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
    teaching: {
      lessonLens: "Use this workflow to study the research-pipeline pattern: gather evidence, then turn it into a durable artifact.",
      whyItMattersNow:
        "This page is the concrete destination for the Module 5 research-pattern lesson. It shows that a useful pipeline is not just search plus summary; it is trigger choice, selective evidence gathering, and an output that survives chat.",
      inspectChecklist: [
        "Watch the handoff from interpreting the task to searching and fetching; that transition shows when the workflow leaves pure reasoning and starts gathering evidence.",
        "Check whether each tool step narrows the task or just adds noise. A good research workflow stays selective.",
        "Notice that the final step writes a report before replying; the saved artifact is part of the design, not an optional afterthought."
      ],
      compareWorkflowSlugs: ["morning-briefing", "recurring-maintenance-check"],
      relatedLessonsIntro:
        "These lessons explain the underlying design choices behind this example: context assembly, tool use, durable workspace output, and the pipeline pattern itself.",
      relatedSimulationsIntro:
        "If you want to see the same pattern in motion, jump into the visualizer and inspect the message-triggered tool-use scenario stage by stage."
    },
    steps: [
      {
        id: "interpret-task",
        title: "Interpret the research task",
        summary: "The run decides what question is being answered and what artifact should be produced."
      },
      {
        id: "search",
        title: "Search for candidate sources",
        summary: "The agent gathers several possible sources instead of relying on the model alone.",
        hiddenBehavior: "Tool outputs become part of the active run context for later synthesis."
      },
      {
        id: "fetch",
        title: "Fetch the best sources",
        summary: "Relevant pages are pulled in so the run has actual material to summarize."
      },
      {
        id: "synthesize",
        title: "Synthesize findings",
        summary: "The agent extracts the useful points, compares them, and drafts the answer."
      },
      {
        id: "write-report",
        title: "Write the report and respond",
        summary: "A markdown artifact is saved to the workspace, then the user gets the short version in chat."
      }
    ]
  },
  {
    id: "workflow-3",
    slug: "recurring-maintenance-check",
    title: "Recurring Maintenance Check",
    summary: "A bounded operational workflow that inspects system state, writes a report, and escalates only when something deserves attention.",
    learnerScenario: "Every week, run a lightweight health check on my machine or service, summarize anything risky, and save the result.",
    triggerType: "schedule",
    difficulty: "intermediate",
    autonomyLevel: "moderate",
    toolsUsed: ["read", "exec", "write"],
    contextLoaded: ["maintenance policy file", "previous report", "mocked status outputs or inspection command results"],
    outputPattern: "A dated markdown report plus a short summary when something changed or crossed a threshold.",
    sessionPattern: "Predictable isolated maintenance session with a clear audit trail.",
    whyThisDesign: [
      "Recurring checks are strongest when observation is automated and remediation stays gated.",
      "A policy file makes severity thresholds explicit instead of vague.",
      "Writing reports creates history so later runs can compare trends, while approval stays focused on consequential changes rather than harmless inspection."
    ],
    risks: [
      "Using exec too broadly or unsafely.",
      "Dumping raw command output without synthesis.",
      "Treating every finding as urgent because thresholds are unclear."
    ],
    commonFailureModes: [
      "The workflow collects data but never categorizes severity.",
      "Unsafe commands or ungated remediation expand the run past bounded observation.",
      "No prior reports are consulted, so trend changes are missed."
    ],
    relatedLessonIds: ["m2-2", "m2-5", "m3-2", "m4-3", "m6-4", "m6-5", "m6-7"],
    relatedConceptIds: ["workflow", "approval", "memory", "tools"],
    relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
    teaching: {
      lessonLens: "Use this workflow to study a safer delegated pattern: automate observation, but keep thresholds and approval boundaries explicit.",
      whyItMattersNow:
        "This example makes the Module 5 delegate-pattern lesson more concrete. It shows how a workflow can do real recurring work without drifting into unsafe autonomy: bounded inspection, explicit policy, durable reports, and escalation only when warranted.",
      inspectChecklist: [
        "Notice the split between observation and action: the workflow inspects and categorizes, but it does not silently remediate.",
        "Track where the policy file and prior report shape the run; those inputs are what make severity judgments explainable instead of arbitrary.",
        "Look at the final report step as an audit trail, not just an output. The saved history is part of how future runs stay trustworthy."
      ],
      compareWorkflowSlugs: ["morning-briefing", "research-assistant"],
      relatedLessonsIntro:
        "These lessons frame the operational logic behind this example: context selection, safe bootstrap files, approval boundaries, and build choices around reporting and escalation.",
      relatedSimulationsIntro:
        "The seeded visualizer scenario is not this exact workflow, but it is still the best nearby comparison for seeing how scheduled runs differ from chat-driven runs."
    },
    steps: [
      {
        id: "start-check",
        title: "Start the scheduled check",
        summary: "The maintenance run begins on its recurring schedule."
      },
      {
        id: "load-policy",
        title: "Load maintenance policy and previous report",
        summary: "The agent learns what counts as healthy and what changed since the last run."
      },
      {
        id: "inspect",
        title: "Run bounded inspection commands",
        summary: "The workflow gathers operational data through predefined checks.",
        hiddenBehavior: "Exec provides raw observations; the workflow still has to interpret them safely."
      },
      {
        id: "categorize",
        title: "Categorize findings by severity",
        summary: "The results are compared to thresholds or previous state so the summary is meaningful."
      },
      {
        id: "report",
        title: "Write the report and notify if warranted",
        summary: "A durable report is saved, and only notable changes are surfaced in the final summary."
      }
    ]
  }
];

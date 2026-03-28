import type { SimulationScenario } from "@/lib/types/simulation";

const baseRunScenarios: SimulationScenario[] = [
  {
    id: "scenario-simple-answer",
    slug: "simple-answer-no-tool-calls",
    title: "Simple answer with no tool calls",
    promptLabel: "User asks a conceptual question",
    userMessage:
      "In one short paragraph, explain what a session is in OpenClaw and why it matters.",
    summary:
      "A direct chat-triggered run where the answer can be produced from already-loaded instructions and recent context, without reading files or calling tools.",
    tags: ["message", "conceptual", "no-tools", "deterministic"],
    teachingPrompt: {
      scenarioPurpose:
        "Show the honest baseline case: sometimes a useful run is mostly model reasoning plus existing context, with no tool calls at all.",
      inspectFirst:
        "Inspect the stage list and artifact panel for the missing tool-calls moment. Notice how the run moves from context assembly straight into model inference and final reply.",
      compareNext:
        "Compare it next with Direct user message with tool use so you can see exactly what changes once a file read/write step becomes necessary."
    },
    initialContext: {
      systemPieces: [
        {
          id: "system-0",
          label: "System + developer instructions",
          detail: "Answer clearly, stay concise, and use tools only when they are actually needed.",
          kind: "system"
        },
        {
          id: "policy-0",
          label: "Tool policy",
          detail: "Tools are available, but unnecessary if the question can be answered from existing context and product knowledge.",
          kind: "tool-policy"
        }
      ],
      workspaceFiles: [
        {
          id: "file-0",
          label: "No project file required",
          detail: "This answer does not depend on a specific workspace file lookup.",
          kind: "file"
        }
      ],
      memoryItems: [
        {
          id: "memory-0",
          label: "Stable OpenClaw mental model",
          detail: "The assistant already has enough product-context framing to answer a basic conceptual question accurately.",
          kind: "memory"
        }
      ],
      sessionHistoryItems: [
        {
          id: "history-0",
          label: "Current user question",
          detail: "Explain what a session is and why it matters.",
          kind: "history"
        }
      ]
    },
    stages: [
      {
        id: "simple-intake",
        kind: "intake",
        title: "Receive the user question",
        explanation:
          "The run begins from a normal chat message asking for a short conceptual explanation.",
        learnerTakeaway:
          "Some runs are simple: the trigger is just a user asking for understanding, not requesting external work.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Incoming user message",
            role: "user",
            preview: "In one short paragraph, explain what a session is in OpenClaw and why it matters."
          }
        ]
      },
      {
        id: "simple-routing",
        kind: "routing",
        title: "Stay in the current conversation",
        explanation:
          "Because this is a lightweight conceptual question, the run stays in the current session and does not branch into a special workflow.",
        learnerTakeaway:
          "Routing is sometimes boring on purpose. The system often just keeps the run in the active conversation.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Routing note",
            role: "system",
            preview: "Use the current chat session; no separate workflow or subagent is needed."
          }
        ]
      },
      {
        id: "simple-context",
        kind: "context-assembly",
        title: "Use already-available context",
        explanation:
          "The system relies on standing instructions and the current message rather than pulling in extra files or fresh tool output.",
        learnerTakeaway:
          "Context assembly does not always mean adding more stuff. Sometimes the right move is to keep context minimal.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Active context snapshot",
            role: "system",
            preview: "Use existing OpenClaw mental-model knowledge and the current user request only."
          }
        ]
      },
      {
        id: "simple-model",
        kind: "model-inference",
        title: "Compose the explanation",
        explanation:
          "The model turns the available context into a short explanation focused on continuity, context, and why the concept matters to users.",
        learnerTakeaway:
          "Model inference can be the main event when no tools are necessary.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Draft explanation",
            role: "assistant",
            preview: "A session is the ongoing conversational/work context where requests, tool results, and relevant history accumulate."
          }
        ]
      },
      {
        id: "simple-final",
        kind: "final-reply",
        title: "Send the answer directly",
        explanation:
          "The assistant replies immediately because there is nothing to fetch, write, or persist beyond the normal conversation record.",
        learnerTakeaway:
          "Not every run has a tool-calls stage. Sometimes the final answer comes straight from the model step.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Assistant reply",
            role: "assistant",
            preview:
              "A session is the ongoing context for a thread of work, which matters because it lets OpenClaw carry relevant history and state forward instead of treating every request like a fresh start."
          }
        ]
      }
    ],
    finalOutput: {
      assistantReply:
        "A session is the ongoing context for a thread of work in OpenClaw. It matters because the system can keep relevant instructions, history, and state together, so each new request does not have to start from zero.",
      persistedToSession: true,
      persistedToMemory: false,
      notes: [
        "This is the missing contrast case for the visualizer: a run with no tool calls at all.",
        "It teaches that a valid OpenClaw run can still be useful even when nothing is read, written, or fetched."
      ]
    }
  },
  {
    id: "scenario-direct-tool-use",
    slug: "direct-user-message-with-tool-use",
    title: "Direct user message with tool use",
    promptLabel: "User asks for a saved project summary",
    userMessage:
      "Summarize the current tutorial project status from the milestone file and save a short handoff note in the workspace.",
    summary:
      "A direct chat-triggered run that reads project files, composes a concise answer, and writes a durable handoff note.",
    tags: ["message", "tools", "workspace", "deterministic"],
    teachingPrompt: {
      scenarioPurpose:
        "Show the common project-work pattern where a user message is still the trigger, but the run needs tools to gather evidence and create a durable artifact.",
      inspectFirst:
        "Inspect the context-assembly and tool-calls stages first. Watch which files get read, then see how the write step turns a chat answer into saved workspace output.",
      compareNext:
        "Compare it next with Simple answer with no tool calls to see which parts are shared across both runs and which parts only appear when tools are required."
    },
    initialContext: {
      systemPieces: [
        {
          id: "system-1",
          label: "System + developer instructions",
          detail: "Answer the user honestly, use tools when needed, and stay within the project folder.",
          kind: "system"
        },
        {
          id: "policy-1",
          label: "Tool policy",
          detail: "read and write are available; external network calls are unnecessary for this run.",
          kind: "tool-policy"
        }
      ],
      workspaceFiles: [
        {
          id: "file-1",
          label: "MILESTONE_1_PROGRESS.md",
          detail: "Current implementation progress and likely next bottleneck.",
          kind: "file"
        },
        {
          id: "file-2",
          label: "NEXT_ACTIONS.md",
          detail: "Build sequence and immediate implementation priorities.",
          kind: "file"
        }
      ],
      memoryItems: [
        {
          id: "memory-1",
          label: "No durable memory needed",
          detail: "This run depends mostly on project files, not long-term personal memory.",
          kind: "memory"
        }
      ],
      sessionHistoryItems: [
        {
          id: "history-1",
          label: "Current user request",
          detail: "Summarize status and save a short handoff note.",
          kind: "history"
        }
      ]
    },
    stages: [
      {
        id: "direct-intake",
        kind: "intake",
        title: "Intake the user message",
        explanation:
          "The run starts from a direct chat message, so the latest request becomes the active task framing.",
        learnerTakeaway:
          "A run always begins with some trigger. Here, the trigger is a human message, not a schedule.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Incoming user message",
            role: "user",
            preview:
              "Summarize the current tutorial project status from the milestone file and save a short handoff note in the workspace."
          }
        ]
      },
      {
        id: "direct-routing",
        kind: "routing",
        title: "Route into the active project session",
        explanation:
          "Because the message is about the current coding task, the run stays in the active project session rather than opening an isolated scheduled workflow.",
        learnerTakeaway:
          "Routing decides which session and context window the model will use.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Routing note",
            role: "system",
            preview: "Use the existing project session and workspace. No subagent handoff required."
          }
        ]
      },
      {
        id: "direct-context",
        kind: "context-assembly",
        title: "Assemble project context",
        explanation:
          "The system loads standing instructions plus the few files most likely to answer the request accurately.",
        learnerTakeaway:
          "Good runs use selective context assembly instead of dumping every file into the prompt.",
        visibleArtifacts: [
          {
            type: "file",
            label: "Read milestone progress",
            path: "openclaw-tutorial/MILESTONE_1_PROGRESS.md",
            action: "read",
            preview: "Recent scaffold passes, shipped surfaces, and the next bottleneck."
          },
          {
            type: "file",
            label: "Read next actions",
            path: "openclaw-tutorial/NEXT_ACTIONS.md",
            action: "read",
            preview: "Run Visualizer is the next interactive MVP surface to build."
          }
        ]
      },
      {
        id: "direct-model",
        kind: "model-inference",
        title: "Plan the response and artifact",
        explanation:
          "With the request and file evidence in context, the model plans a concise summary and a short handoff note.",
        learnerTakeaway:
          "The model is acting over assembled evidence, not guessing from the user message alone.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Draft answer plan",
            role: "assistant",
            preview: "Summarize shipped work, note the next bottleneck, then write a handoff note file."
          }
        ]
      },
      {
        id: "direct-tools",
        kind: "tool-calls",
        title: "Use tools to create the durable note",
        explanation:
          "The run calls a file-writing tool so the project handoff exists outside the transient chat window.",
        learnerTakeaway:
          "Tool use is what turns a conversational answer into durable work.",
        visibleArtifacts: [
          {
            type: "tool-call",
            label: "Write handoff note",
            toolName: "write",
            inputPreview: "Create openclaw-tutorial/HANDOFF_NOTE.md with a short status summary.",
            outputPreview: "Successfully wrote the handoff note file."
          },
          {
            type: "file",
            label: "Created handoff artifact",
            path: "openclaw-tutorial/HANDOFF_NOTE.md",
            action: "write",
            preview: "Learn flow and examples are scaffolded; Run Visualizer is now the active bottleneck."
          }
        ]
      },
      {
        id: "direct-final",
        kind: "final-reply",
        title: "Deliver the user-facing summary",
        explanation:
          "The assistant returns a short answer that reports the status and confirms the file artifact was created.",
        learnerTakeaway:
          "Final replies often describe both the reasoning result and any externalized artifacts.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Assistant reply",
            role: "assistant",
            preview:
              "The app already has the Learn and Examples surfaces scaffolded. I also saved a short handoff note in the workspace."
          }
        ]
      }
    ],
    finalOutput: {
      assistantReply:
        "Current status: the tutorial app already has a working learn flow and example workflow viewer. The next bottleneck is the Run Visualizer scaffold so learners can step through a deterministic run with visible context and artifacts. I also saved a short handoff note in the workspace.",
      persistedToSession: true,
      persistedToMemory: false,
      notes: [
        "This run writes to the workspace but does not need long-term personal memory.",
        "The output stays grounded in the files that were actually read."
      ]
    }
  },
  {
    id: "scenario-scheduled-briefing",
    slug: "scheduled-briefing-run",
    title: "Scheduled briefing run",
    promptLabel: "Morning briefing trigger fires at 7:30 AM",
    userMessage:
      "Scheduled trigger: produce the morning briefing using the saved instructions and the latest daily inputs.",
    summary:
      "A scheduled recurring run that assembles standing briefing context, gathers a few bounded inputs, and records lightweight state after sending the briefing.",
    tags: ["schedule", "briefing", "persistence", "deterministic"],
    teachingPrompt: {
      scenarioPurpose:
        "Show how a recurring workflow differs from chat-driven work: the run starts from a schedule, leans on durable instructions/state, and records what it already sent.",
      inspectFirst:
        "Inspect the intake and persistence stages first. They show the biggest difference from chat runs: a scheduler starts the run, and a state write helps future runs avoid repetition.",
      compareNext:
        "Compare it next with either chat-driven scenario, especially the direct tool-use run, to see how trigger type and persistence rules change the workflow contract."
    },
    initialContext: {
      systemPieces: [
        {
          id: "system-2",
          label: "Scheduled run instructions",
          detail: "Runs on a schedule and should stay concise, useful, and non-spammy.",
          kind: "system"
        },
        {
          id: "policy-2",
          label: "Allowed tools",
          detail: "read, web_fetch, and write for bounded information gathering and state updates.",
          kind: "tool-policy"
        }
      ],
      workspaceFiles: [
        {
          id: "file-3",
          label: "HEARTBEAT.md / briefing instructions",
          detail: "Defines what gets checked and when to stay quiet.",
          kind: "file"
        },
        {
          id: "file-4",
          label: "briefing-state.json",
          detail: "Tracks the last time each source was reported so the run avoids repetition.",
          kind: "file"
        }
      ],
      memoryItems: [
        {
          id: "memory-2",
          label: "User preferences",
          detail: "Prefers concise practical briefings without fluff.",
          kind: "memory"
        }
      ],
      sessionHistoryItems: [
        {
          id: "history-2",
          label: "No direct chat request",
          detail: "This run begins from a scheduler, so chat history is not the primary context source.",
          kind: "history"
        }
      ]
    },
    stages: [
      {
        id: "briefing-intake",
        kind: "intake",
        title: "Wake on schedule",
        explanation:
          "A cron-like trigger starts the run at the configured time without waiting for a human message.",
        learnerTakeaway:
          "Not every run begins in chat. Scheduled triggers are first-class workflow starters.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Scheduler event",
            role: "system",
            preview: "07:30 America/Chicago morning briefing job fired."
          }
        ]
      },
      {
        id: "briefing-routing",
        kind: "routing",
        title: "Route into the recurring briefing workflow",
        explanation:
          "The scheduler routes the run into a dedicated briefing path with its own context contract and output expectations.",
        learnerTakeaway:
          "Routing can be driven by job configuration rather than conversational intent alone.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Workflow selection",
            role: "system",
            preview: "Use the morning briefing workflow and keep the session isolated from unrelated chat threads."
          }
        ]
      },
      {
        id: "briefing-context",
        kind: "context-assembly",
        title: "Load instructions, state, and bounded sources",
        explanation:
          "The run reads standing briefing instructions, prior state, and a small set of current inputs before composing anything.",
        learnerTakeaway:
          "Scheduled workflows rely heavily on durable files because there may be no useful live chat context.",
        visibleArtifacts: [
          {
            type: "file",
            label: "Read briefing instructions",
            path: "HEARTBEAT.md",
            action: "read",
            preview: "Check calendar, email, mentions, and weather a few times per day."
          },
          {
            type: "file",
            label: "Read briefing state",
            path: "memory/briefing-state.json",
            action: "read",
            preview: "Tracks last delivered items so repeated alerts can be suppressed."
          }
        ]
      },
      {
        id: "briefing-tools",
        kind: "tool-calls",
        title: "Gather current signals",
        explanation:
          "Bounded tool calls fetch the latest calendar/weather snapshots and any other compact inputs the briefing needs.",
        learnerTakeaway:
          "Tools gather fresh evidence, but the workflow still needs rules for what is worth surfacing.",
        visibleArtifacts: [
          {
            type: "tool-call",
            label: "Fetch weather snapshot",
            toolName: "web_fetch",
            inputPreview: "Fetch morning weather snapshot for the local area.",
            outputPreview: "Weather summary returned: cool morning, rain chance after noon."
          },
          {
            type: "tool-call",
            label: "Read daily agenda",
            toolName: "read",
            inputPreview: "Read the compact agenda summary file for today's scheduled events.",
            outputPreview: "Two meetings before noon, one family event in the evening."
          }
        ]
      },
      {
        id: "briefing-model",
        kind: "model-inference",
        title: "Filter and compose the briefing",
        explanation:
          "The model decides what matters enough to mention now and compresses the result into one practical update.",
        learnerTakeaway:
          "The hard part is not collecting everything. It is prioritizing and compressing it.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Briefing draft",
            role: "assistant",
            preview: "Morning briefing: two meetings before noon, umbrella wise later, no urgent overnight items."
          }
        ]
      },
      {
        id: "briefing-persistence",
        kind: "persistence",
        title: "Record what was sent",
        explanation:
          "After composing the briefing, the run updates lightweight state so future scheduled runs know what was already surfaced.",
        learnerTakeaway:
          "Persistence is how recurring workflows avoid feeling forgetful or spammy.",
        visibleArtifacts: [
          {
            type: "memory-write",
            label: "Update briefing state",
            target: "memory/briefing-state.json",
            preview: "lastBriefed.weather=2026-03-28T07:30:00-05:00; lastBriefed.agenda=2026-03-28T07:30:00-05:00"
          },
          {
            type: "file",
            label: "Write state file",
            path: "memory/briefing-state.json",
            action: "write",
            preview: "Stored the latest sent markers so duplicates can be suppressed later."
          }
        ]
      },
      {
        id: "briefing-final",
        kind: "final-reply",
        title: "Send the morning briefing",
        explanation:
          "The final output is a short message, not an audit dump, because the workflow is meant to be useful at a glance.",
        learnerTakeaway:
          "Final outputs should match the workflow contract. Briefing workflows need compression, not exhaustiveness.",
        visibleArtifacts: [
          {
            type: "message",
            label: "Delivered briefing",
            role: "assistant",
            preview: "Morning briefing: two meetings before noon, likely rain later, no urgent overnight items."
          }
        ]
      }
    ],
    finalOutput: {
      assistantReply:
        "Morning briefing: you have two meetings before noon, the afternoon may turn rainy, and there are no urgent overnight items worth interrupting you for right now.",
      persistedToSession: true,
      persistedToMemory: true,
      notes: [
        "This scenario shows why scheduled workflows lean on files and state instead of recent chat history.",
        "The persistence step is part of the teaching surface because it explains how future runs stay consistent."
      ]
    }
  }
];


const stageTeachingNotesByScenario: Record<string, Record<string, { noticeFirst: string; diagnosticQuestion: string; commonMisconceptions: string[] }>> = {
  "scenario-simple-answer": {
    "simple-intake": {
      noticeFirst: "The trigger is just a plain user question. Nothing about the run is automated or delegated yet.",
      diagnosticQuestion: "If this run later feels overcomplicated, did the trigger ever justify anything more than a normal chat turn?",
      commonMisconceptions: [
        "Every meaningful run must start with a special workflow trigger.",
        "If the task is small, there is no real run anatomy to inspect."
      ]
    },
    "simple-routing": {
      noticeFirst: "Routing does something small but important here: it keeps the run in the current conversation instead of inventing a separate lane.",
      diagnosticQuestion: "Would opening a new session or worker actually improve this task, or just add ceremony?",
      commonMisconceptions: [
        "Routing only matters for fancy automated jobs.",
        "A system is more agentic if it routes simple work away from the active chat."
      ]
    },
    "simple-context": {
      noticeFirst: "The key signal is restraint. The run does not load extra files because the current request is already answerable from standing context.",
      diagnosticQuestion: "What useful evidence is missing here that would actually require a file read or tool call?",
      commonMisconceptions: [
        "Good context assembly means loading as much material as possible.",
        "A short context bundle is automatically a weak one."
      ]
    },
    "simple-model": {
      noticeFirst: "This is the main work step. The model is composing the answer directly from the assembled context rather than planning external actions.",
      diagnosticQuestion: "Could a careful assistant finish the job from the current context alone?",
      commonMisconceptions: [
        "If the model does most of the work, the run is somehow less real.",
        "Model inference and final reply are the same thing."
      ]
    },
    "simple-final": {
      noticeFirst: "The timeline ends cleanly without a tool stage. That absence is itself the teaching point.",
      diagnosticQuestion: "What external action, if any, was still missing before the answer could be sent?",
      commonMisconceptions: [
        "A no-tool run is a sign the agent failed to do enough.",
        "Every run should produce a saved artifact."
      ]
    }
  },
  "scenario-direct-tool-use": {
    "direct-intake": {
      noticeFirst: "The user is asking for both understanding and an artifact. That combination is the clue that the run may need tools later.",
      diagnosticQuestion: "Does the requested outcome live only in chat, or does the user want something durable created?",
      commonMisconceptions: [
        "A user message can only ask for an answer, not a saved output.",
        "Tool use is decided before the task is understood."
      ]
    },
    "direct-routing": {
      noticeFirst: "The run stays in the active project session because the task depends on the current workspace and thread of work.",
      diagnosticQuestion: "What would be lost if this request were routed into an isolated lane instead of the live project session?",
      commonMisconceptions: [
        "Any run with tools should automatically become a separate workflow.",
        "Current-session routing is sloppy by default."
      ]
    },
    "direct-context": {
      noticeFirst: "Only a few files are loaded. The teaching move here is selectivity, not exhaustive file ingestion.",
      diagnosticQuestion: "Which files actually answer the request, and which ones would only bloat the prompt?",
      commonMisconceptions: [
        "Context assembly is better when it reads the whole repo.",
        "If files are loaded, memory and session history no longer matter."
      ]
    },
    "direct-model": {
      noticeFirst: "The model is planning before acting. It turns evidence from the read stage into a response plan and an artifact plan.",
      diagnosticQuestion: "What parts of the job can be reasoned about now, and what still requires an external action?",
      commonMisconceptions: [
        "Tool-using runs skip reasoning and just execute commands.",
        "Planning means the answer is already complete."
      ]
    },
    "direct-tools": {
      noticeFirst: "This is the fork point. The write tool turns a conversational request into a durable workspace result.",
      diagnosticQuestion: "What changed in the world or workspace because this tool call happened?",
      commonMisconceptions: [
        "Tool calls are a separate mini-run unrelated to the main timeline.",
        "Using one tool means the model is no longer involved in the run."
      ]
    },
    "direct-final": {
      noticeFirst: "The final answer reports both the status summary and the newly created artifact. The reply is grounded in work that actually happened.",
      diagnosticQuestion: "Does the final message account for the artifact the run created, or is it pretending the tool result does not matter?",
      commonMisconceptions: [
        "The final reply should ignore tool results and only summarize reasoning.",
        "Once a file is written, the user-facing answer becomes optional."
      ]
    }
  },
  "scenario-scheduled-briefing": {
    "briefing-intake": {
      noticeFirst: "The run starts from a scheduler event, not from live chat. That changes the whole contract immediately.",
      diagnosticQuestion: "If no human asked right now, what durable rules tell this run why it exists?",
      commonMisconceptions: [
        "All useful runs begin from a fresh human prompt.",
        "Scheduled work is just chat without a visible user line."
      ]
    },
    "briefing-routing": {
      noticeFirst: "Routing selects a recurring workflow lane with its own boundaries and expectations instead of inheriting unrelated conversation history.",
      diagnosticQuestion: "Why would reusing the main chat session make this briefing less predictable?",
      commonMisconceptions: [
        "Isolation is unnecessary if the assistant is smart enough.",
        "Routing only changes location, not workflow rules."
      ]
    },
    "briefing-context": {
      noticeFirst: "Durable instructions and state dominate this context bundle because there may be little or no relevant live chat context.",
      diagnosticQuestion: "What durable files keep this recurring run from feeling forgetful or arbitrary?",
      commonMisconceptions: [
        "Scheduled workflows should rely mostly on whatever was said recently in chat.",
        "If memory exists, state files are redundant."
      ]
    },
    "briefing-tools": {
      noticeFirst: "The tool calls gather fresh signals, but they are intentionally bounded. This workflow is not trying to collect everything in sight.",
      diagnosticQuestion: "Which fetched inputs actually help the briefing, and which ones would just create noise?",
      commonMisconceptions: [
        "A richer briefing always comes from gathering more sources.",
        "Tool use alone determines whether a workflow is useful."
      ]
    },
    "briefing-model": {
      noticeFirst: "The model's real job is filtering. It compresses multiple inputs into one practical update instead of dumping raw findings.",
      diagnosticQuestion: "What deserves to survive compression into the final briefing, and what should be dropped?",
      commonMisconceptions: [
        "A thorough workflow should expose every signal it collected.",
        "Compression is less accurate than listing everything."
      ]
    },
    "briefing-persistence": {
      noticeFirst: "Persistence is part of the workflow contract here. Recording what was sent is how the next scheduled run avoids repetition.",
      diagnosticQuestion: "What future inconsistency or spam problem would appear if this state write never happened?",
      commonMisconceptions: [
        "Persistence only matters for long reports, not short recurring updates.",
        "If the message was sent successfully, the workflow no longer needs any durable state."
      ]
    },
    "briefing-final": {
      noticeFirst: "The output is intentionally compressed because the workflow is meant to be glanceable, not exhaustive.",
      diagnosticQuestion: "Does this final message match the contract of a briefing, or has it drifted into an audit log?",
      commonMisconceptions: [
        "A useful automated briefing should include every underlying detail.",
        "Short outputs mean the workflow did less meaningful work."
      ]
    }
  }
};

export const runScenarios: SimulationScenario[] = baseRunScenarios.map((scenario) => ({
  ...scenario,
  stages: scenario.stages.map((stage) => ({
    ...stage,
    teachingNotes: stageTeachingNotesByScenario[scenario.id]?.[stage.id]
  }))
}));

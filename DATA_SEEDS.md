# Data Seeds for MVP Scaffold

This file turns the planning docs into concrete seed records that a first app scaffold can render.

The goal is not final polished curriculum. The goal is to give the future app stable, believable mock data for:
- course navigation
- lesson pages
- concept explorer
- workflow examples
- run visualizer scenarios
- workflow builder output

If implementation begins now, these records are enough to scaffold most MVP screens with static TypeScript or JSON data.

---

## 1. Course seed

```ts
export const course = {
  id: "openclaw-interactive-tutorial",
  title: "OpenClaw Interactive Tutorial",
  tagline: "Learn how OpenClaw works by seeing runs, exploring concepts, and designing workflows.",
  description:
    "A guided simulator-style tutorial that helps learners build a practical mental model of OpenClaw.",
  version: "mvp",
  featuredConceptIds: ["agent", "session", "memory", "cron"],
  featuredWorkflowIds: [
    "morning-briefing",
    "research-assistant",
    "recurring-maintenance-check"
  ],
  modules: [
    {
      id: "module-1",
      slug: "what-openclaw-is",
      title: "What OpenClaw Is",
      shortTitle: "What It Is",
      description: "Build the basic mental model before touching workflow design.",
      order: 1,
      lessonIds: ["m1-1", "m1-2"],
      status: "draft",
      estimatedMinutes: 18,
      learningGoals: [
        "Understand what problem OpenClaw solves",
        "Name the core pieces of the mental model",
        "See why OpenClaw is more than a chatbot"
      ]
    },
    {
      id: "module-2",
      slug: "how-a-run-works",
      title: "How a Run Works",
      shortTitle: "Runs",
      description: "Follow an OpenClaw run from input to persistence.",
      order: 2,
      lessonIds: ["m2-1", "m2-2"],
      status: "draft",
      estimatedMinutes: 20,
      learningGoals: [
        "Understand intake and routing",
        "Understand context assembly",
        "Understand where tool calls fit"
      ]
    },
    {
      id: "module-3",
      slug: "core-building-blocks",
      title: "The Core Building Blocks",
      shortTitle: "Building Blocks",
      description: "Learn how files, sessions, memory, and tools shape behavior.",
      order: 3,
      lessonIds: ["m3-2", "m3-4"],
      status: "draft",
      estimatedMinutes: 22,
      learningGoals: [
        "Understand bootstrap files and durable context",
        "Distinguish memory from session history",
        "Know where tools fit in the system"
      ]
    },
    {
      id: "module-6",
      slug: "design-your-own-workflow",
      title: "Design Your Own Workflow",
      shortTitle: "Design",
      description: "Turn understanding into workflow choices.",
      order: 4,
      lessonIds: ["m6-2", "m6-5"],
      status: "draft",
      estimatedMinutes: 18,
      learningGoals: [
        "Choose the right trigger",
        "Choose where memory should live",
        "Translate goals into workflow structure"
      ]
    }
  ]
};
```

---

## 2. Lesson seeds

These six lesson records are the minimum recommended set from `CONTENT_MODEL.md`, plus two extra design lessons to make the builder feel grounded.

```ts
export const lessons = [
  {
    id: "m1-1",
    slug: "what-problem-openclaw-solves",
    moduleId: "module-1",
    orderInModule: 1,
    orderGlobal: 1,
    title: "What Problem OpenClaw Solves",
    summary:
      "OpenClaw helps you move from one-off chat replies to assistants that can operate within files, tools, sessions, and workflows.",
    estimatedMinutes: 8,
    difficulty: "intro",
    status: "draft",
    learningObjectives: [
      "Explain the gap between chatbots and workflow-capable agents",
      "Describe why context and tools matter",
      "Recognize the kinds of jobs OpenClaw is good at"
    ],
    keyTakeaways: [
      "OpenClaw is built for doing work in context, not just answering prompts.",
      "Its value comes from combining conversation, files, tools, and automation.",
      "The mental model matters more than memorizing commands."
    ],
    relatedConceptIds: ["agent", "workspace", "workflow"],
    relatedWorkflowIds: ["morning-briefing", "research-assistant"],
    heroVisual: {
      type: "diagram",
      id: "chatbot-vs-openclaw",
      title: "From chat replies to workflow-capable agents"
    },
    interactive: {
      type: "comparison-card",
      id: "chatbot-vs-openclaw-cards",
      prompt: "Compare a normal chatbot response loop with an OpenClaw workflow loop."
    },
    content: [
      {
        type: "rich-text",
        markdown:
          "Most people understand a chatbot as something that reads a message and replies with text. OpenClaw can do that, but the important jump is that it can also work inside a workspace, read durable files, use tools, keep session context, and participate in scheduled or orchestrated workflows."
      },
      {
        type: "example",
        title: "Simple contrast",
        scenario: "A chatbot answers: 'What should I do this morning?'",
        explanation:
          "An OpenClaw assistant can read notes, inspect a calendar, check the weather, and produce a briefing shaped by durable context."
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "Think system, not prompt",
        body:
          "The real unit of design is not the message alone. It is the message plus files, memory, tools, session state, and rules."
      },
      {
        type: "checkpoint",
        question: "What is the main difference between a normal chatbot and OpenClaw?",
        answer:
          "OpenClaw is designed to operate inside a larger working system: workspace files, tools, sessions, automation, and structured workflows."
      }
    ],
    nextLessonId: "m1-2"
  },
  {
    id: "m1-2",
    slug: "core-mental-model",
    moduleId: "module-1",
    orderInModule: 2,
    orderGlobal: 2,
    title: "The Core Mental Model",
    summary:
      "Meet the core pieces: agent, workspace, session, tools, channels, and memory.",
    estimatedMinutes: 10,
    difficulty: "intro",
    status: "draft",
    learningObjectives: [
      "Name the main OpenClaw building blocks",
      "Understand how the parts relate",
      "Build a durable beginner mental model"
    ],
    keyTakeaways: [
      "The agent is not floating in empty space; it lives inside a working environment.",
      "Sessions hold conversational continuity, while files and memory provide durable context.",
      "Tools let the agent act rather than only talk."
    ],
    relatedConceptIds: ["agent", "workspace", "session", "tools", "memory", "channels"],
    heroVisual: {
      type: "stack",
      id: "openclaw-system-stack",
      title: "How the core pieces fit together"
    },
    interactive: {
      type: "concept-map-focus",
      id: "mental-model-map",
      prompt: "Select a concept to see how it connects to the rest of the system."
    },
    content: [
      {
        type: "rich-text",
        markdown:
          "A useful beginner model is this: the **agent** responds inside a **session**, draws context from the **workspace** and **memory**, uses **tools** when needed, and may be reached through different **channels**."
      },
      {
        type: "list",
        title: "Core pieces",
        items: [
          "Agent: the assistant persona and instructions",
          "Workspace: the files and folder the agent can use",
          "Session: the conversation thread and continuity",
          "Tools: the actions the agent can take",
          "Memory: durable notes beyond the live chat window",
          "Channels: where messages come from and go to"
        ]
      },
      {
        type: "checkpoint",
        question: "If an agent forgets something after a restart, which part of the system should you inspect first?",
        answer:
          "Durable files and memory, because live chat context alone may not survive or be reloaded the way you expect."
      }
    ],
    previousLessonId: "m1-1",
    nextLessonId: "m2-1"
  },
  {
    id: "m2-1",
    slug: "message-intake-and-routing",
    moduleId: "module-2",
    orderInModule: 1,
    orderGlobal: 3,
    title: "A Message Comes In: Intake and Routing",
    summary:
      "See how an incoming message becomes a run in the right place with the right rules.",
    estimatedMinutes: 9,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Understand intake as the start of a run",
      "See why routing matters",
      "Recognize how different surfaces lead to different context"
    ],
    keyTakeaways: [
      "A run begins with an input arriving through some channel or trigger.",
      "Routing determines which session or execution path handles it.",
      "Getting routing wrong can make behavior look random or inconsistent."
    ],
    relatedConceptIds: ["channels", "session", "workflow"],
    heroVisual: {
      type: "timeline",
      id: "run-lifecycle-overview",
      title: "From message to persisted result"
    },
    interactive: {
      type: "run-visualizer-scene",
      id: "scenario-direct-chat",
      prompt: "Step through what happens when a user sends a simple message."
    },
    content: [
      {
        type: "rich-text",
        markdown:
          "Before the model ever answers, the system has to decide what kind of input this is and where it belongs. A direct chat message, a cron trigger, and a delegated subagent run may all enter the system differently."
      },
      {
        type: "callout",
        tone: "insight",
        title: "Routing changes the run",
        body:
          "The same request can behave differently depending on whether it lands in the main session, an isolated run, or another bound session."
      },
      {
        type: "checkpoint",
        question: "Why does routing matter before any answer is generated?",
        answer:
          "Because routing determines the execution path, which session is used, and what context and rules will be available to the run."
      }
    ],
    previousLessonId: "m1-2",
    nextLessonId: "m2-2"
  },
  {
    id: "m2-2",
    slug: "context-assembly",
    moduleId: "module-2",
    orderInModule: 2,
    orderGlobal: 4,
    title: "Context Assembly",
    summary:
      "Learn how system instructions, files, memory, and session history combine before the model responds.",
    estimatedMinutes: 11,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Explain what context assembly is",
      "Distinguish durable and transient context sources",
      "See why missing context produces bad output"
    ],
    keyTakeaways: [
      "The model responds to assembled context, not just the latest user line.",
      "Files, memory, and session history serve different roles.",
      "A lot of 'agent weirdness' is really context design failure."
    ],
    relatedConceptIds: ["workspace", "memory", "session", "tools"],
    heroVisual: {
      type: "stack",
      id: "context-assembly-stack",
      title: "The layers of context before inference"
    },
    interactive: {
      type: "mini-simulation",
      id: "context-layer-toggle",
      prompt: "Toggle context sources on and off to see how the run changes."
    },
    content: [
      {
        type: "rich-text",
        markdown:
          "When people say 'the agent knew' or 'the agent forgot,' they are usually talking about context assembly. The system gathers instructions, relevant files, memory, recent messages, and tool policies, then the model sees that bundle and responds."
      },
      {
        type: "list",
        title: "Common context sources",
        items: [
          "System and developer instructions",
          "Workspace files like AGENTS.md or project docs",
          "Long-term memory files",
          "Recent session history",
          "Tool policies and execution constraints"
        ]
      },
      {
        type: "checkpoint",
        question: "Why can a run look inconsistent even when the same prompt is used twice?",
        answer:
          "Because the assembled context may differ between runs: different files loaded, different history available, or different routing and policies."
      }
    ],
    previousLessonId: "m2-1",
    nextLessonId: "m3-2"
  },
  {
    id: "m3-2",
    slug: "bootstrap-context-files",
    moduleId: "module-3",
    orderInModule: 1,
    orderGlobal: 5,
    title: "AGENTS.md, SOUL.md, USER.md, and Bootstrap Context",
    summary:
      "Learn how bootstrap files shape the assistant before it even starts working.",
    estimatedMinutes: 10,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Understand the role of foundational context files",
      "See why persona and user guidance belong in files",
      "Recognize durable instructions versus situational prompts"
    ],
    keyTakeaways: [
      "Bootstrap files create continuity and boundaries.",
      "They make the agent more stable across sessions.",
      "They are often a better home for standing guidance than repeated chat instructions."
    ],
    relatedConceptIds: ["workspace", "agent", "memory"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A large part of OpenClaw behavior comes from files that shape identity, expectations, and continuity. These files reduce the need to repeat the same instructions every time a new session starts."
      },
      {
        type: "example",
        title: "Practical effect",
        scenario: "A user wants the assistant to be concise, non-flattering, and proactive.",
        explanation:
          "Putting that guidance in durable files means those preferences can be reloaded reliably, rather than depending on the current chat window alone."
      }
    ],
    previousLessonId: "m2-2",
    nextLessonId: "m3-4"
  },
  {
    id: "m3-4",
    slug: "memory-files-vs-chat-history",
    moduleId: "module-3",
    orderInModule: 2,
    orderGlobal: 6,
    title: "Memory Files Versus Chat History",
    summary:
      "Separate live conversational continuity from durable memory that survives beyond a single run or window.",
    estimatedMinutes: 12,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Distinguish session history from memory files",
      "Know when to write to durable memory",
      "Avoid over-trusting the live chat context"
    ],
    keyTakeaways: [
      "Session history is not the same thing as long-term memory.",
      "If you want something remembered later, write it down.",
      "Good memory hygiene improves stability and usefulness."
    ],
    relatedConceptIds: ["memory", "session", "workspace"],
    interactive: {
      type: "comparison-card",
      id: "memory-vs-history",
      prompt: "Sort examples into session history, durable memory, or workspace documentation."
    },
    content: [
      {
        type: "rich-text",
        markdown:
          "One of the easiest beginner mistakes is assuming that because something was said in chat once, it will remain reliably available later. In practice, durable files are the safer place for facts, decisions, and standing preferences that matter across sessions."
      },
      {
        type: "callout",
        tone: "warning",
        title: "No such thing as a reliable mental note",
        body:
          "If a fact matters later, it should usually exist in a file. Otherwise, you are trusting transient context."
      },
      {
        type: "checkpoint",
        question: "Where should a long-term user preference usually live?",
        answer:
          "In durable memory or workspace documentation, not only in the live chat history."
      }
    ],
    previousLessonId: "m3-2",
    nextLessonId: "m6-2"
  },
  {
    id: "m6-2",
    slug: "defining-the-trigger",
    moduleId: "module-6",
    orderInModule: 1,
    orderGlobal: 7,
    title: "Defining the Trigger",
    summary:
      "Choose whether a workflow should start from a message, schedule, event, or manual action.",
    estimatedMinutes: 8,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Choose triggers that match the job",
      "Understand tradeoffs between schedules and messages",
      "Connect trigger choice to session design"
    ],
    keyTakeaways: [
      "The trigger is the beginning of the workflow contract.",
      "A bad trigger creates noise, brittleness, or missed work.",
      "Trigger choice affects routing, context, and user expectations."
    ],
    relatedConceptIds: ["workflow", "cron", "session", "channels"],
    relatedWorkflowIds: ["morning-briefing", "recurring-maintenance-check"],
    content: [
      {
        type: "rich-text",
        markdown:
          "Many workflow design problems start with the wrong trigger. If the job is periodic, a schedule may be cleaner than waiting for a user prompt. If it needs judgment or collaboration, a message-triggered flow may be better."
      },
      {
        type: "list",
        title: "Common trigger types",
        items: [
          "Message: best for interactive help",
          "Schedule: best for regular check-ins or reports",
          "Event: best when another system emits a signal",
          "Manual: best when the user wants explicit control"
        ]
      }
    ],
    previousLessonId: "m3-4",
    nextLessonId: "m6-5"
  },
  {
    id: "m6-5",
    slug: "deciding-where-memory-should-live",
    moduleId: "module-6",
    orderInModule: 2,
    orderGlobal: 8,
    title: "Deciding Where Memory Should Live",
    summary:
      "Choose whether knowledge belongs in files, session history, or structured project docs.",
    estimatedMinutes: 9,
    difficulty: "core",
    status: "draft",
    learningObjectives: [
      "Match information to the right storage location",
      "Avoid accidental dependence on short-lived context",
      "Design workflows with durable continuity"
    ],
    keyTakeaways: [
      "Not all memory belongs in the same place.",
      "Project decisions often belong in project docs.",
      "User preferences and important continuity details usually belong in durable memory."
    ],
    relatedConceptIds: ["memory", "workspace", "workflow"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A strong workflow is not just about the right trigger and tools. It also depends on putting the right information in the right place so future runs can recover it predictably."
      },
      {
        type: "checkpoint",
        question: "Where should a project-specific implementation decision usually be stored?",
        answer:
          "In a project file inside the workspace, so later runs and collaborators can find it predictably."
      }
    ],
    previousLessonId: "m6-2"
  }
];
```

---

## 3. Concept seeds

```ts
export const concepts = [
  {
    id: "agent",
    slug: "agent",
    name: "Agent",
    category: "core",
    shortDefinition: "The assistant identity and behavior running inside OpenClaw.",
    explanation:
      "The agent is the acting intelligence shaped by instructions, files, tool policies, and execution context.",
    whyItMatters:
      "People often over-focus on prompts. In practice, agent behavior is a product of a larger configured system.",
    examples: [
      {
        title: "Personal assistant",
        description: "An agent shaped by user preferences, durable files, and trusted workspace context."
      }
    ],
    relatedConceptIds: ["workspace", "session", "tools", "memory"],
    relatedLessonIds: ["m1-1", "m1-2", "m3-2"],
    visual: { nodeGroup: "core", emphasis: "high" }
  },
  {
    id: "workspace",
    slug: "workspace",
    name: "Workspace",
    category: "context",
    shortDefinition: "The file environment where the agent reads, writes, and organizes durable context.",
    explanation:
      "The workspace is where instructions, project files, notes, and artifacts live. It gives the agent a place to work rather than only a chat box.",
    whyItMatters:
      "Without a workspace, workflows lose durability and structure.",
    examples: [
      {
        title: "Project folder",
        description: "A tutorial project with specs, plans, seed data, and generated artifacts."
      }
    ],
    relatedConceptIds: ["agent", "memory", "tools", "workflow"],
    relatedLessonIds: ["m1-2", "m2-2", "m3-2", "m3-4"],
    visual: { nodeGroup: "context", emphasis: "high" }
  },
  {
    id: "session",
    slug: "session",
    name: "Session",
    category: "execution",
    shortDefinition: "A conversation or execution thread with its own continuity and history.",
    explanation:
      "Sessions provide local continuity. A run occurs somewhere, and that somewhere matters because history and routing shape the result.",
    whyItMatters:
      "A lot of confusion comes from not knowing which session is active or what history is available.",
    examples: [
      {
        title: "Main session",
        description: "The direct chat with the user where long-running continuity may matter."
      },
      {
        title: "Isolated run",
        description: "A contained execution used for a focused task with separate history."
      }
    ],
    relatedConceptIds: ["agent", "channels", "cron", "subagents", "memory"],
    relatedLessonIds: ["m1-2", "m2-1", "m2-2", "m3-4"],
    visual: { nodeGroup: "execution", emphasis: "high" }
  },
  {
    id: "tools",
    slug: "tools",
    name: "Tools",
    category: "execution",
    shortDefinition: "The actions the agent can take beyond text generation.",
    explanation:
      "Tools let the agent inspect files, fetch data, run commands, spawn sessions, schedule jobs, and more.",
    whyItMatters:
      "Without tools, an agent can explain a workflow but cannot really participate in one.",
    examples: [
      {
        title: "read and write",
        description: "Inspect or create files in the workspace."
      },
      {
        title: "cron",
        description: "Schedule future work or reminders."
      }
    ],
    relatedConceptIds: ["agent", "workspace", "workflow", "subagents"],
    relatedLessonIds: ["m1-2", "m2-2"],
    visual: { nodeGroup: "execution", emphasis: "high" }
  },
  {
    id: "memory",
    slug: "memory",
    name: "Memory",
    category: "context",
    shortDefinition: "Durable information stored outside the immediate chat window.",
    explanation:
      "Memory in OpenClaw often lives in files, curated notes, or documented project context that can be reloaded later.",
    whyItMatters:
      "Durable memory is how useful preferences, facts, and decisions survive beyond a single live exchange.",
    examples: [
      {
        title: "User preferences",
        description: "Tone, boundaries, and recurring personal context stored in durable files."
      }
    ],
    relatedConceptIds: ["workspace", "session", "workflow", "agent"],
    relatedLessonIds: ["m1-2", "m2-2", "m3-2", "m3-4", "m6-5"],
    visual: { nodeGroup: "context", emphasis: "high" }
  },
  {
    id: "channels",
    slug: "channels",
    name: "Channels",
    category: "core",
    shortDefinition: "The surfaces where messages arrive from and replies go to.",
    explanation:
      "Different channels can imply different expectations, audiences, and safety boundaries.",
    whyItMatters:
      "A helpful reply in a private session may be inappropriate in a shared group context.",
    examples: [
      {
        title: "Direct chat vs shared chat",
        description: "Same agent, different trust and disclosure expectations."
      }
    ],
    relatedConceptIds: ["session", "workflow", "agent"],
    relatedLessonIds: ["m1-2", "m2-1", "m6-2"],
    visual: { nodeGroup: "core", emphasis: "medium" }
  },
  {
    id: "cron",
    slug: "cron",
    name: "Cron",
    category: "automation",
    shortDefinition: "Scheduled execution that lets work happen at a chosen time or interval.",
    explanation:
      "Cron is how OpenClaw can perform reminders, periodic checks, or recurring isolated tasks without waiting for a fresh user prompt.",
    whyItMatters:
      "Schedules turn an assistant into an operator, but they also introduce risks like spam or poor timing.",
    examples: [
      {
        title: "Morning briefing",
        description: "A daily scheduled run that gathers context and posts a report."
      }
    ],
    relatedConceptIds: ["workflow", "session", "subagents"],
    relatedLessonIds: ["m6-2"],
    visual: { nodeGroup: "automation", emphasis: "high" }
  },
  {
    id: "skills",
    slug: "skills",
    name: "Skills",
    category: "orchestration",
    shortDefinition: "Reusable task-specific instructions that tell the agent how to handle certain kinds of work.",
    explanation:
      "Skills help the agent switch into a specialized operating mode for recurring task categories.",
    whyItMatters:
      "They reduce reinvention and make behavior more consistent across similar jobs.",
    examples: [
      {
        title: "Weather skill",
        description: "A specialized guide for answering weather requests correctly and efficiently."
      }
    ],
    relatedConceptIds: ["agent", "workflow", "tools"],
    relatedLessonIds: [],
    visual: { nodeGroup: "orchestration", emphasis: "medium" }
  },
  {
    id: "subagents",
    slug: "subagents",
    name: "Subagents",
    category: "orchestration",
    shortDefinition: "Isolated helper runs or sessions used for focused delegated work.",
    explanation:
      "Subagents let the system split work into separate contexts rather than forcing everything through one running thread.",
    whyItMatters:
      "Isolation can reduce confusion and make longer or more complex jobs easier to manage.",
    examples: [
      {
        title: "Focused research task",
        description: "Spawn a helper to research one topic and return results without cluttering the main thread."
      }
    ],
    relatedConceptIds: ["session", "workflow", "tools", "cron"],
    relatedLessonIds: [],
    visual: { nodeGroup: "orchestration", emphasis: "medium" }
  },
  {
    id: "workflow",
    slug: "workflow",
    name: "Workflow",
    category: "core",
    shortDefinition: "A structured pattern combining trigger, context, tools, memory, and output.",
    explanation:
      "A workflow is the practical design unit for getting recurring useful results from OpenClaw.",
    whyItMatters:
      "It is how isolated capabilities become repeatable value.",
    examples: [
      {
        title: "Scheduled maintenance check",
        description: "A periodic job that inspects state and writes a report."
      }
    ],
    relatedConceptIds: ["agent", "workspace", "tools", "memory", "cron", "subagents"],
    relatedLessonIds: ["m1-1", "m2-1", "m6-2", "m6-5"],
    visual: { nodeGroup: "core", emphasis: "high" }
  }
];
```

---

## 4. Workflow example seeds

```ts
export const workflows = [
  {
    id: "morning-briefing",
    slug: "morning-briefing",
    title: "Morning Briefing",
    summary:
      "A scheduled daily summary that gathers important context and delivers a concise report.",
    difficulty: "intro",
    status: "draft",
    userGoal:
      "Receive a useful morning summary without manually checking multiple sources.",
    trigger: {
      type: "schedule",
      label: "Every weekday at 7:00 AM",
      details: "A cron-triggered run starts in a predictable time window."
    },
    contextSources: [
      {
        type: "memory",
        label: "User preferences",
        details: "Tone and formatting preferences for the daily summary."
      },
      {
        type: "external-source",
        label: "Weather and calendar",
        details: "Fresh morning inputs used to build the briefing."
      }
    ],
    toolsUsed: ["cron", "web_fetch", "calendar-adapter"],
    memoryPattern: "Read durable preferences; usually do not write long-term memory every run.",
    sessionPattern: "Usually isolated or scheduled execution with direct delivery.",
    outputPattern: "A concise summary message.",
    approvalMode: "Autonomous on schedule, within bounded scope.",
    whyThisDesign: [
      "A schedule matches the recurring need.",
      "The workflow gathers context from several sources automatically.",
      "The output is structured and repeatable."
    ],
    steps: [
      {
        id: "step-1",
        title: "Cron fires",
        description: "The scheduled job starts the workflow.",
        kind: "trigger",
        artifacts: [{ type: "schedule", label: "Weekday 7:00 AM", value: "cron" }]
      },
      {
        id: "step-2",
        title: "Load preferences",
        description: "The run reads durable user preferences and briefing rules.",
        kind: "context",
        artifacts: [{ type: "file", label: "USER.md", value: "tone and user context" }]
      },
      {
        id: "step-3",
        title: "Gather fresh info",
        description: "The workflow fetches current weather and time-sensitive events.",
        kind: "tool-call",
        artifacts: [{ type: "tool", label: "web/weather/calendar", value: "fresh inputs" }]
      },
      {
        id: "step-4",
        title: "Compose summary",
        description: "The system formats the final report around relevance and brevity.",
        kind: "output"
      }
    ],
    relatedConceptIds: ["cron", "workflow", "memory", "session"],
    relatedLessonIds: ["m1-1", "m6-2"]
  },
  {
    id: "research-assistant",
    slug: "research-assistant",
    title: "Research Assistant",
    summary:
      "A user-triggered workflow that gathers sources, synthesizes findings, and produces a useful summary.",
    difficulty: "core",
    status: "draft",
    userGoal:
      "Quickly investigate a topic with sourced notes instead of doing all the searching manually.",
    trigger: {
      type: "message",
      label: "User asks a research question",
      details: "The workflow begins interactively from chat."
    },
    contextSources: [
      {
        type: "user-input",
        label: "Research question",
        details: "The goal and constraints for the task."
      },
      {
        type: "workspace-file",
        label: "Project notes",
        details: "Optional local context to bias the research."
      }
    ],
    toolsUsed: ["web_search", "web_fetch", "write"],
    memoryPattern: "Usually writes results to a project file rather than personal long-term memory.",
    sessionPattern: "Main session or delegated subagent depending on scope.",
    outputPattern: "Chat summary plus optional saved notes.",
    approvalMode: "Semi-autonomous within the requested research scope.",
    whyThisDesign: [
      "Interactive triggering fits ad hoc research.",
      "Web tools gather external information while workspace files hold durable output.",
      "Delegation remains optional depending on complexity."
    ],
    steps: [
      {
        id: "step-1",
        title: "Receive the question",
        description: "The user states the topic, depth, and output expectations.",
        kind: "trigger"
      },
      {
        id: "step-2",
        title: "Search and fetch",
        description: "The workflow gathers candidate sources and extracts readable content.",
        kind: "tool-call",
        artifacts: [{ type: "tool", label: "web_search + web_fetch", value: "source collection" }]
      },
      {
        id: "step-3",
        title: "Synthesize",
        description: "The system compares the sources and produces an explanation.",
        kind: "reasoning"
      },
      {
        id: "step-4",
        title: "Save notes",
        description: "Optional durable notes are written into the workspace for later reuse.",
        kind: "persistence",
        artifacts: [{ type: "file", label: "research-notes.md", value: "saved summary" }]
      }
    ],
    relatedConceptIds: ["workflow", "tools", "workspace", "subagents"],
    relatedLessonIds: ["m1-1", "m2-2"]
  },
  {
    id: "recurring-maintenance-check",
    slug: "recurring-maintenance-check",
    title: "Recurring Maintenance Check",
    summary:
      "A bounded recurring workflow that inspects a system or project and writes a status artifact.",
    difficulty: "core",
    status: "draft",
    userGoal:
      "Catch issues early with a scheduled inspection instead of only reacting after a failure.",
    trigger: {
      type: "schedule",
      label: "Nightly or weekly scheduled run",
      details: "A cron-triggered maintenance pass runs on a repeatable interval."
    },
    contextSources: [
      {
        type: "workspace-file",
        label: "Check rules",
        details: "A documented list of what the maintenance pass should inspect."
      },
      {
        type: "session-history",
        label: "Prior run notes",
        details: "Recent results help identify drift or repeated failures."
      }
    ],
    toolsUsed: ["cron", "exec", "write"],
    memoryPattern: "Important trends may be summarized in durable memory, but most output belongs in reports.",
    sessionPattern: "Usually isolated scheduled execution.",
    outputPattern: "A report file plus optional alert when something important changed.",
    approvalMode: "Autonomous inspection; user review for consequential actions.",
    whyThisDesign: [
      "Periodic checks fit scheduling well.",
      "Writing a report creates an inspectable artifact.",
      "Bounded autonomy reduces risk while still saving time."
    ],
    steps: [
      {
        id: "step-1",
        title: "Scheduled start",
        description: "Cron launches the maintenance run.",
        kind: "trigger"
      },
      {
        id: "step-2",
        title: "Load check rules",
        description: "The workflow reads the checklist and any thresholds.",
        kind: "context"
      },
      {
        id: "step-3",
        title: "Inspect current state",
        description: "The system runs bounded checks and captures findings.",
        kind: "tool-call",
        artifacts: [{ type: "tool", label: "exec", value: "local inspection commands" }]
      },
      {
        id: "step-4",
        title: "Write report",
        description: "The workflow stores a durable report and may send an alert if needed.",
        kind: "persistence",
        artifacts: [{ type: "file", label: "maintenance-report.md", value: "latest status" }]
      }
    ],
    relatedConceptIds: ["cron", "workflow", "tools", "session", "memory"],
    relatedLessonIds: ["m2-1", "m6-2", "m6-5"]
  }
];
```

---

## 5. Run visualizer scenario seeds

```ts
export const runScenarios = [
  {
    id: "simple-chat-reply",
    title: "Simple Chat Reply",
    promptLabel: "Basic question, no tool use",
    userMessage: "What is the difference between a session and memory?",
    summary:
      "A straightforward reply where the agent can answer from already loaded context.",
    tags: ["basic", "no-tools"],
    initialContext: {
      systemPieces: [
        { id: "sys-1", label: "Core instructions", detail: "Behavior and tool policy", kind: "system" }
      ],
      workspaceFiles: [
        { id: "file-1", label: "Lesson docs", detail: "Tutorial content files", kind: "file" }
      ],
      memoryItems: [
        { id: "mem-1", label: "OpenClaw concepts", detail: "High-level mental model notes", kind: "memory" }
      ],
      sessionHistoryItems: [
        { id: "hist-1", label: "Recent lesson navigation", detail: "Learner just viewed concept pages", kind: "history" }
      ]
    },
    stages: [
      { id: "s1", kind: "intake", title: "Intake", explanation: "The user message arrives.", state: "complete" },
      { id: "s2", kind: "routing", title: "Routing", explanation: "The request is handled in the current session.", state: "complete" },
      { id: "s3", kind: "context-assembly", title: "Context assembly", explanation: "Relevant instructions and context are gathered.", state: "complete" },
      { id: "s4", kind: "model-inference", title: "Model inference", explanation: "The model composes the answer without external actions.", state: "complete" },
      { id: "s5", kind: "final-reply", title: "Final reply", explanation: "The answer is returned to the user.", state: "complete" },
      { id: "s6", kind: "persistence", title: "Persistence", explanation: "The exchange becomes part of session history.", state: "complete" }
    ],
    finalOutput: {
      assistantReply:
        "Session is the live conversation thread and its continuity. Memory is durable information stored so later runs can recover it more reliably.",
      persistedToSession: true,
      persistedToMemory: false,
      notes: ["Good scenario for teaching that not every run needs a tool call."]
    }
  },
  {
    id: "workspace-tool-answer",
    title: "Answer Using Files and Tools",
    promptLabel: "Project-aware answer",
    userMessage: "Read the project docs and tell me the next MVP bottleneck.",
    summary:
      "A run that needs file reads before it can answer well.",
    tags: ["files", "tools", "project"],
    initialContext: {
      systemPieces: [
        { id: "sys-1", label: "Core instructions", detail: "Use tools when needed", kind: "system" }
      ],
      workspaceFiles: [
        { id: "file-1", label: "BUILD_LOOP.md", detail: "Project workflow guidance", kind: "file" }
      ],
      memoryItems: [],
      sessionHistoryItems: []
    },
    stages: [
      { id: "s1", kind: "intake", title: "Intake", explanation: "The project question arrives.", state: "complete" },
      { id: "s2", kind: "routing", title: "Routing", explanation: "The run stays in the working session.", state: "complete" },
      {
        id: "s3",
        kind: "context-assembly",
        title: "Context assembly",
        explanation: "The system notices that project files are needed.",
        state: "complete",
        visibleArtifacts: [
          { type: "file", path: "openclaw-tutorial/BUILD_LOOP.md", action: "read", preview: "Create the content model and route map." }
        ]
      },
      {
        id: "s4",
        kind: "tool-calls",
        title: "Tool calls",
        explanation: "The agent reads additional docs to answer accurately.",
        state: "complete",
        visibleArtifacts: [
          { type: "tool-call", toolName: "read", inputPreview: "PRODUCT_SPEC.md", outputPreview: "MVP teaching goals and constraints" },
          { type: "tool-call", toolName: "read", inputPreview: "CONTENT_MODEL.md", outputPreview: "Data schemas already defined" }
        ]
      },
      { id: "s5", kind: "final-reply", title: "Final reply", explanation: "The agent answers with a concrete bottleneck.", state: "complete" },
      { id: "s6", kind: "persistence", title: "Persistence", explanation: "The run becomes part of session history.", state: "complete" }
    ],
    finalOutput: {
      assistantReply:
        "The next bottleneck is missing seed data. The app has structure but not enough concrete records to scaffold realistic screens.",
      persistedToSession: true,
      persistedToMemory: false
    }
  },
  {
    id: "scheduled-maintenance-report",
    title: "Scheduled Maintenance Report",
    promptLabel: "Cron-triggered report generation",
    userMessage: "Nightly maintenance check fires.",
    summary:
      "A scheduled run that uses tools and writes a report artifact.",
    tags: ["cron", "persistence", "report"],
    initialContext: {
      systemPieces: [
        { id: "sys-1", label: "Scheduled task instructions", detail: "Run bounded checks and write a report", kind: "system" }
      ],
      workspaceFiles: [
        { id: "file-1", label: "maintenance-rules.md", detail: "What the check should inspect", kind: "file" }
      ],
      memoryItems: [
        { id: "mem-1", label: "Prior issue summary", detail: "Recent recurring failures to watch", kind: "memory" }
      ],
      sessionHistoryItems: []
    },
    stages: [
      { id: "s1", kind: "intake", title: "Trigger intake", explanation: "Cron starts the run.", state: "complete" },
      { id: "s2", kind: "routing", title: "Routing", explanation: "The job runs in an isolated scheduled context.", state: "complete" },
      { id: "s3", kind: "context-assembly", title: "Context assembly", explanation: "Rules and prior notes are loaded.", state: "complete" },
      {
        id: "s4",
        kind: "tool-calls",
        title: "Tool calls",
        explanation: "The workflow executes bounded checks and gathers results.",
        state: "complete",
        visibleArtifacts: [
          { type: "tool-call", toolName: "exec", inputPreview: "check service status", outputPreview: "all services healthy" }
        ]
      },
      {
        id: "s5",
        kind: "final-reply",
        title: "Generate report",
        explanation: "The system drafts the summary artifact.",
        state: "complete"
      },
      {
        id: "s6",
        kind: "persistence",
        title: "Persistence",
        explanation: "The report is written and an alert may be sent if needed.",
        state: "complete",
        visibleArtifacts: [
          { type: "file", path: "reports/nightly-maintenance.md", action: "write", preview: "Nightly maintenance summary" },
          { type: "memory-write", target: "memory/maintenance-summary.md", preview: "Only major trend updates, not every raw result" }
        ]
      }
    ],
    finalOutput: {
      assistantReply: "Nightly maintenance completed. Report written. No urgent issues detected.",
      persistedToSession: true,
      persistedToMemory: true,
      notes: ["Useful for teaching that some runs create artifacts instead of just a chat reply."]
    }
  }
];
```

---

## 6. Workflow builder option seeds

```ts
export const builderOptionGroups = [
  {
    id: "goal",
    title: "What are you trying to do?",
    description: "Start with the job, not the tools.",
    selectionMode: "single",
    options: [
      { id: "goal-brief", label: "Send a recurring summary", description: "A periodic digest or briefing." },
      { id: "goal-research", label: "Investigate a topic", description: "Gather information and summarize it." },
      { id: "goal-monitor", label: "Watch for issues", description: "Inspect a system or project repeatedly." },
      { id: "goal-helper", label: "Help interactively in chat", description: "Respond when the user asks." }
    ]
  },
  {
    id: "trigger",
    title: "What starts the workflow?",
    description: "Pick the event that should begin the run.",
    selectionMode: "single",
    options: [
      { id: "trigger-message", label: "Message", description: "Start when the user asks." },
      { id: "trigger-schedule", label: "Schedule", description: "Start at specific times or intervals." },
      { id: "trigger-event", label: "External event", description: "Start when another system emits a signal." },
      { id: "trigger-manual", label: "Manual action", description: "Start only when explicitly launched." }
    ]
  },
  {
    id: "context",
    title: "What context does it need?",
    description: "Choose the inputs required to do the job well.",
    selectionMode: "multiple",
    options: [
      { id: "context-files", label: "Workspace files", description: "Project docs, instructions, notes." },
      { id: "context-memory", label: "Durable memory", description: "Longer-term preferences or recurring facts." },
      { id: "context-history", label: "Session history", description: "Recent conversational continuity." },
      { id: "context-external", label: "External sources", description: "Web, APIs, calendars, or other live data." }
    ]
  },
  {
    id: "tools",
    title: "What tools should it use?",
    description: "Pick the main kinds of actions the workflow will need.",
    selectionMode: "multiple",
    options: [
      { id: "tools-files", label: "Read/write files", description: "Inspect or save workspace artifacts." },
      { id: "tools-web", label: "Web tools", description: "Search or fetch information." },
      { id: "tools-exec", label: "Local commands", description: "Inspect or operate on the machine." },
      { id: "tools-sessions", label: "Sessions/subagents", description: "Delegate or isolate parts of the work." },
      { id: "tools-cron", label: "Scheduling", description: "Create recurring or delayed execution." }
    ]
  },
  {
    id: "memory",
    title: "Where should memory live?",
    description: "Decide how the workflow should remember useful things.",
    selectionMode: "single",
    options: [
      { id: "memory-none", label: "No durable memory", description: "Keep everything in the current interaction." },
      { id: "memory-user", label: "User memory", description: "Store stable user preferences or durable personal context." },
      { id: "memory-project", label: "Project files", description: "Write project-specific notes or artifacts into the workspace." },
      { id: "memory-summary", label: "Summarized history", description: "Store only important recurring findings." }
    ]
  },
  {
    id: "output",
    title: "What should it produce?",
    description: "Choose the main result the workflow should create.",
    selectionMode: "single",
    options: [
      { id: "output-reply", label: "Reply", description: "A chat response or posted summary." },
      { id: "output-file", label: "File/report", description: "A durable written artifact." },
      { id: "output-both", label: "Reply + file", description: "Immediate output plus a saved record." }
    ]
  },
  {
    id: "approval",
    title: "How autonomous should it be?",
    description: "Choose how much the workflow may do without user confirmation.",
    selectionMode: "single",
    options: [
      { id: "approval-low", label: "Ask before acting", description: "Good for risky or user-visible actions." },
      { id: "approval-medium", label: "Bounded autonomy", description: "Act inside clear limits, escalate when needed." },
      { id: "approval-high", label: "Autonomous routine work", description: "Safe for recurring low-risk tasks." }
    ]
  }
];
```

---

## 7. Deterministic builder result examples

These examples are enough to implement the MVP builder without AI generation.

```ts
export const builderResultExamples = {
  briefingPattern: {
    title: "Scheduled Briefing Workflow",
    summary:
      "Use a schedule-triggered workflow that gathers a few trusted context sources and posts a concise summary.",
    designRationale: [
      "A recurring summary is best started by a schedule.",
      "Bounded autonomy is appropriate when the output format is predictable.",
      "Durable user preferences help keep the briefing consistent."
    ],
    recommendedPattern: "cron + bounded context gathering + concise message output",
    warnings: ["Avoid sending too often or at bad times."],
    relatedExampleWorkflowIds: ["morning-briefing"]
  },
  researchPattern: {
    title: "Interactive Research Workflow",
    summary:
      "Use a message-triggered workflow with web tools and optional note writing into the workspace.",
    designRationale: [
      "Research usually starts from an ad hoc question.",
      "Workspace files are a better place for saved findings than personal memory.",
      "Delegation is optional for larger research jobs."
    ],
    recommendedPattern: "message trigger + web tools + optional project note artifact",
    relatedExampleWorkflowIds: ["research-assistant"]
  },
  maintenancePattern: {
    title: "Recurring Maintenance Workflow",
    summary:
      "Use a scheduled isolated run that performs bounded checks and writes a durable report.",
    designRationale: [
      "Monitoring work is repetitive and time-based.",
      "A report file makes inspection and debugging easier.",
      "Consequential actions should still require approval."
    ],
    recommendedPattern: "cron + isolated run + report output + alert on exceptions",
    warnings: ["Do not give destructive autonomy unless Joshua explicitly wants it."],
    relatedExampleWorkflowIds: ["recurring-maintenance-check"]
  }
};
```

---

## 8. Suggested implementation mapping

If the app is scaffolded in Next.js or React, the fastest useful mapping is:

- `content/course.ts`
- `content/lessons.ts`
- `content/concepts.ts`
- `content/workflows.ts`
- `content/simulations.ts`
- `content/builder-options.ts`

The records in this file can be copied almost directly into those modules.

---

## 9. Why this artifact matters

This removes the current MVP bottleneck.

Before this file:
- the project had structure, but not enough actual content objects to render realistic screens
- app scaffolding would still require inventing seed data during implementation
- the interactive surfaces had no concrete scenarios to plug into UI components

After this file:
- the app has enough stable mock data to scaffold pages immediately
- lesson pages, concept detail pages, example workflow pages, and the run visualizer all have real seed content
- the builder can be implemented deterministically without waiting on more planning

---

## 10. Recommended next build step

Now that route architecture and seed data both exist, the next best artifact is one of these:

1. `APP_SCAFFOLD_PLAN.md` — concrete component tree, route file plan, and initial stack choice
2. `WIREFRAMES.md` — low-fidelity screen structure for the MVP pages
3. actual app scaffold in a frontend project

My recommendation: move into `APP_SCAFFOLD_PLAN.md` next, then scaffold the frontend immediately after.

# Module 4 + 5 Lesson Pack

Build-facing seed pack aligned to the current live code model in:
- `content/course/modules.ts`
- `content/lessons/lessons.ts`
- `lib/types/content.ts`

This pack stays within the **live** `ModuleRecord`, `LessonRecord`, and `LessonContentBlock` shapes.

---

## Reuse these exact live IDs

### Concept IDs already present
- `agent`
- `workspace`
- `session`
- `tools`
- `channels`
- `routing`
- `context`
- `memory`
- `subagents`
- `trigger`
- `schedule`
- `workflow`
- `approval`
- `guardrails`

### Workflow IDs already present
- `workflow-1` = `morning-briefing`
- `workflow-2` = `research-assistant`
- `workflow-3` = `recurring-maintenance-check`

### Simulation slugs already present
- `simple-answer-no-tool-calls`
- `direct-user-message-with-tool-use`
- `scheduled-briefing-run`

Note: the live `LessonRecord` supports `relatedSimulationScenarioSlugs`, but **not** first-class `relatedWorkflowIds`. Where workflow links are useful below, they are called out as suggested references for future UI wiring or can be mentioned in lesson body copy.

---

## Recommended new module records

### Module 4 record
```ts
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
}
```

### Module 5 record
```ts
{
  id: "module-5",
  slug: "workflow-patterns-that-actually-work",
  title: "Workflow Patterns That Actually Work",
  shortTitle: "Patterns",
  description: "Teach reusable workflow shapes that map directly to the live example workflows and execution patterns.",
  order: 5,
  lessonIds: ["m5-2", "m5-4", "m5-6"],
  estimatedMinutes: 30,
  learningGoals: [
    "Recognize common workflow patterns and when to use them",
    "Connect trigger, context, tools, and output into a repeatable design",
    "Know when isolation or delegation improves focus and reliability"
  ]
}
```

### Recommended module ordering update
Keep existing module IDs/titles intact, but insert the missing modules before Module 6:
1. `module-1`
2. `module-2`
3. `module-3`
4. `module-4`
5. `module-5`
6. `module-6`

That implies updating current `module-6.order` from `4` to `6`.

---

## Lesson seed specs

## 4.1 Trust boundaries

Suggested workflow references: `workflow-1`, `workflow-3`

```ts
{
  id: "m4-1",
  slug: "trust-boundaries",
  moduleId: "module-4",
  orderInModule: 1,
  orderGlobal: 7,
  title: "Trust Boundaries",
  summary: "Learn why a personal assistant, a shared agent, and an externally connected workflow need different boundaries even when the tools look similar.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Distinguish private, shared, and externally visible operating contexts",
    "Explain why access level should change tone, disclosure, and allowed actions",
    "Spot when a workflow crosses a boundary and needs tighter controls"
  ],
  keyTakeaways: [
    "The same capability is not equally safe in every context.",
    "Trust boundaries are about exposure, audience, and consequences, not just tool lists.",
    "Shared or external contexts should behave more conservatively than a private workspace assistant."
  ],
  relatedConceptIds: ["agent", "channels", "workflow", "approval", "guardrails"],
  content: [
    {
      type: "rich-text",
      markdown: "A personal assistant working in its owner's private workspace can often read more context and act with a different tone than an agent speaking in a shared room or delivering messages outward. The question is not only what the agent can do, but who might be affected if it guesses wrong, reveals too much, or speaks in the wrong place."
    },
    {
      type: "example",
      title: "Same assistant, different boundary",
      scenario: "Reading local notes to prepare a private morning briefing is low-risk. Posting those same notes into a shared channel is not.",
      explanation: "The tools may be identical, but the exposure changes the acceptable behavior. Boundary design is about consequences and audience."
    },
    {
      type: "list",
      title: "Ask these boundary questions",
      items: [
        "Is the context private, shared, or externally visible?",
        "Who could see the output if the run is wrong or overly detailed?",
        "Would a cautious human do this automatically, or only after review?"
      ]
    },
    {
      type: "checkpoint",
      question: "Why is a shared agent usually designed more conservatively than a private personal assistant?",
      answer: "Because mistakes, oversharing, and tone failures affect more people and can expose information outside the user's private context."
    }
  ],
  previousLessonId: "m3-4",
  nextLessonId: "m4-3"
}
```

## 4.3 What should require approval

Suggested workflow references: `workflow-3`
Suggested simulation slug: `scheduled-briefing-run`

```ts
{
  id: "m4-3",
  slug: "what-should-require-approval",
  moduleId: "module-4",
  orderInModule: 2,
  orderGlobal: 8,
  title: "What Should Require Approval",
  summary: "Use consequence and reversibility, not vibes, to decide where a workflow should stop and ask a human first.",
  estimatedMinutes: 10,
  learningObjectives: [
    "Identify actions that deserve explicit human approval",
    "Distinguish low-risk observation from higher-risk external or state-changing actions",
    "Place approval checkpoints at the right step of a workflow"
  ],
  keyTakeaways: [
    "Observation is often safe to automate; external writes and meaningful changes usually deserve review.",
    "Approval should gate the risky step, not every harmless preparation step before it.",
    "A workflow becomes more trustworthy when the human can see exactly what action is being approved."
  ],
  relatedConceptIds: ["approval", "tools", "workflow", "guardrails"],
  content: [
    {
      type: "rich-text",
      markdown: "A good approval rule is usually based on consequence: could this action change the system, publish something externally, spend resources, or create a mess that is annoying to undo? If yes, approval is often appropriate. If the step is only gathering information or drafting a proposed result, it can often run automatically."
    },
    {
      type: "list",
      title: "Often approval-worthy",
      items: [
        "External messages, posts, or emails",
        "Commands that change system state rather than inspect it",
        "File edits or deletions with meaningful downstream impact",
        "Anything costly, irreversible, or hard to audit later"
      ]
    },
    {
      type: "callout",
      tone: "insight",
      title: "Approve the risky edge, not the whole workflow",
      body: "Let the agent inspect, summarize, and prepare. Ask for approval right before the externally visible or state-changing action."
    },
    {
      type: "checkpoint",
      question: "In a maintenance workflow, which step is more likely to need approval: collecting status data or applying a change?",
      answer: "Applying the change. Data collection is usually bounded observation, while remediation alters system state and has higher consequences."
    }
  ],
  previousLessonId: "m4-1",
  nextLessonId: "m4-5"
}
```

## 4.5 Designing standing orders and guardrails

Suggested workflow references: `workflow-1`, `workflow-3`

```ts
{
  id: "m4-5",
  slug: "designing-standing-orders-and-guardrails",
  moduleId: "module-4",
  orderInModule: 3,
  orderGlobal: 9,
  title: "Designing Standing Orders and Guardrails",
  summary: "Turn repeated preferences and safety boundaries into durable instructions the agent can actually follow.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Explain the difference between a vague preference and an actionable guardrail",
    "Write standing instructions that shape behavior across future runs",
    "Use guardrails to reduce spam, overreach, and noisy automation"
  ],
  keyTakeaways: [
    "Good guardrails are concrete, durable, and tied to observable behavior.",
    "Standing orders belong in files or policy-like instructions, not only in one chat turn.",
    "The best guardrails narrow the workflow contract instead of hoping the model guesses restraint."
  ],
  relatedConceptIds: ["guardrails", "approval", "memory", "workflow"],
  content: [
    {
      type: "rich-text",
      markdown: "'Be careful' is not a useful guardrail. 'Do not send external messages without approval' is. Standing orders work when they tell the agent what to do, what to avoid, and when to escalate. The more recurring the workflow, the more those rules should live in durable files rather than in temporary chat wording."
    },
    {
      type: "example",
      title: "Weak vs strong guardrail",
      scenario: "Weak: 'Don't be annoying.' Strong: 'For scheduled briefings, send one concise update and stay quiet when nothing important changed.'",
      explanation: "The stronger version defines the output style and the condition for not sending anything."
    },
    {
      type: "list",
      title: "Useful guardrails often specify",
      items: [
        "What the workflow is allowed to do automatically",
        "What always requires approval",
        "How brief or noisy the output should be",
        "What to record so future runs stay consistent"
      ]
    },
    {
      type: "checkpoint",
      question: "Why are durable files a better home for standing orders than repeating the same chat instruction every time?",
      answer: "Because durable files can be reloaded across runs and sessions, making the behavior more stable and less dependent on transient chat context."
    }
  ],
  previousLessonId: "m4-3",
  nextLessonId: "m5-2"
}
```

## 5.2 The scheduled briefing pattern

Suggested workflow reference: `workflow-1`
Suggested simulation slug: `scheduled-briefing-run`

```ts
{
  id: "m5-2",
  slug: "scheduled-briefing-pattern",
  moduleId: "module-5",
  orderInModule: 1,
  orderGlobal: 10,
  title: "The Scheduled Briefing Pattern",
  summary: "A scheduled briefing gathers a few bounded signals, filters for relevance, and delivers one compact update without depending on a fresh prompt.",
  estimatedMinutes: 10,
  learningObjectives: [
    "Explain the anatomy of a scheduled briefing workflow",
    "Understand why schedules, durable state, and concise outputs belong together",
    "Recognize where approval usually is and is not needed in a briefing flow"
  ],
  keyTakeaways: [
    "Scheduled briefings are strongest when they gather a small set of signals and compress them hard.",
    "State matters because recurring workflows should avoid repeating the same alert over and over.",
    "Most briefing workflows can run automatically as long as they stay observational and bounded."
  ],
  relatedConceptIds: ["schedule", "trigger", "memory", "workflow", "session"],
  relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown: "The scheduled briefing pattern is one of the clearest examples of bounded automation. The run wakes on a schedule, loads standing instructions and lightweight state, gathers a few current signals, then produces one short update. It should feel like a useful briefing, not like an audit log dumped into chat."
    },
    {
      type: "list",
      title: "Pattern anatomy",
      items: [
        "Schedule trigger",
        "Dedicated recurring session or isolated run",
        "Small set of trusted inputs",
        "Compressed final update plus state recording"
      ]
    },
    {
      type: "callout",
      tone: "mental-model",
      title: "The hard part is filtering",
      body: "The workflow earns trust not by collecting everything, but by deciding what is worth interrupting the user for."
    },
    {
      type: "checkpoint",
      question: "Why should a scheduled briefing usually keep its own state file or memory record?",
      answer: "So future runs know what was already surfaced and can avoid duplicate reminders or stale repeated alerts."
    }
  ],
  previousLessonId: "m4-5",
  nextLessonId: "m5-4"
}
```

## 5.4 The research pipeline pattern

Suggested workflow reference: `workflow-2`
Suggested simulation slug: `direct-user-message-with-tool-use`

```ts
{
  id: "m5-4",
  slug: "research-pipeline-pattern",
  moduleId: "module-5",
  orderInModule: 2,
  orderGlobal: 11,
  title: "The Research Pipeline Pattern",
  summary: "A research pipeline turns an underspecified question into a bounded gather, inspect, synthesize, and save workflow.",
  estimatedMinutes: 10,
  learningObjectives: [
    "Describe the gather -> inspect -> synthesize -> save shape of a research workflow",
    "Understand why tool outputs improve trust compared with model-only speculation",
    "Know when saving an artifact is worth the extra step"
  ],
  keyTakeaways: [
    "Research workflows are better when they are evidence-backed instead of answer-first.",
    "Search and fetch tools gather material; the model's job is to compare and compress it.",
    "Writing a memo or report turns a one-off answer into reusable project context."
  ],
  relatedConceptIds: ["tools", "context", "workspace", "workflow", "session"],
  relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
  content: [
    {
      type: "rich-text",
      markdown: "The research pipeline pattern is what you use when a user needs more than a quick opinion. The run interprets the task, searches for sources, fetches the best material, synthesizes the findings, and often writes a durable memo. This keeps the workflow grounded in inspectable inputs rather than in whatever the model happened to remember."
    },
    {
      type: "example",
      title: "Pattern in one sentence",
      scenario: "'Compare two options, use reliable sources, then save a short recommendation memo.'",
      explanation: "That request already implies a pipeline: gather evidence, evaluate it, then produce both a chat answer and an artifact."
    },
    {
      type: "list",
      title: "Typical pipeline steps",
      items: [
        "Interpret the question and desired output",
        "Search for candidate sources",
        "Fetch the most relevant material",
        "Synthesize and write the result"
      ]
    },
    {
      type: "checkpoint",
      question: "Why is a saved memo often worth producing in a research workflow?",
      answer: "Because it preserves the useful work in the workspace so the result can be reused, checked, or extended later instead of disappearing into transient chat history."
    }
  ],
  previousLessonId: "m5-2",
  nextLessonId: "m5-6"
}
```

## 5.6 The delegate pattern

Suggested workflow references: none in live data; concept anchor is `subagents`

```ts
{
  id: "m5-6",
  slug: "delegate-pattern",
  moduleId: "module-5",
  orderInModule: 3,
  orderGlobal: 12,
  title: "The Delegate Pattern",
  summary: "Use delegation when one bounded subtask should be isolated from the main thread so the overall workflow stays cleaner and easier to reason about.",
  estimatedMinutes: 10,
  learningObjectives: [
    "Explain when delegation improves focus and when it is unnecessary overhead",
    "Describe the main-agent to worker handoff shape",
    "Connect delegation to isolation, structured outputs, and cleaner orchestration"
  ],
  keyTakeaways: [
    "Delegation is useful when a subtask is real, bounded, and benefits from isolation.",
    "A delegated worker should return a focused result, not reopen the whole problem.",
    "The main agent coordinates; the subagent executes one lane of work."
  ],
  relatedConceptIds: ["subagents", "session", "routing", "workflow", "agent"],
  content: [
    {
      type: "rich-text",
      markdown: "The delegate pattern is a way to keep complex work from turning into one giant tangled run. The main agent keeps the overall goal, then hands one bounded task to a worker. That worker runs in a narrower context, produces a result, and returns it. The point is not drama or theatrics. The point is cleaner isolation and less clutter."
    },
    {
      type: "example",
      title: "Good delegation",
      scenario: "The main agent asks a worker to review one file or research one narrow question, then bring back a short result.",
      explanation: "That is a bounded subtask. By contrast, delegating the entire original task often just adds confusion."
    },
    {
      type: "callout",
      tone: "insight",
      title: "Delegate narrow work, not responsibility",
      body: "The main agent still owns the outcome. Delegation is a tool for focus and isolation, not an excuse to stop thinking about boundaries."
    },
    {
      type: "checkpoint",
      question: "What is the clearest sign that a task is a good candidate for delegation?",
      answer: "It is a distinct, bounded subtask with a clear output that benefits from running in a narrower, isolated context."
    }
  ],
  previousLessonId: "m5-4",
  nextLessonId: "m6-2"
}
```

---

## Otto integration notes

Minimum code/file edits:

1. **Update `content/course/modules.ts`**
   - Insert `module-4` and `module-5` records from this pack.
   - Move existing `module-6.order` from `4` to `6`.
   - Update `module-6` only if the UI depends on adjacent module ordering.

2. **Update `content/lessons/lessons.ts`**
   - Add the six `LessonRecord` objects from this pack.
   - Keep the current schema exactly: use `content`, not `contentBlocks`.
   - Only include `relatedSimulationScenarioSlugs` on lessons that actually need them.

3. **Wire lesson navigation fields**
   - Set `m3-4.nextLessonId = "m4-1"`.
   - Keep the new chain:
     - `m4-1 -> m4-3 -> m4-5 -> m5-2 -> m5-4 -> m5-6 -> m6-2`
   - If desired, set `m6-2.previousLessonId = "m5-6"` instead of `"m3-4"` so prev/next feels linear again.

4. **Reuse exact concept IDs already in the app**
   - Do not invent new concept IDs for approval/guardrails/subagents/schedule/workflow.
   - The lesson seeds above already target the current live concept set.

5. **Optional but clean follow-up**
   - Add the new lesson IDs into relevant concept `relatedLessonIds` inside `content/concepts/concepts.ts`, especially for:
     - `approval`
     - `guardrails`
     - `schedule`
     - `workflow`
     - `subagents`
   - This is not required to render lesson pages, but it improves Explore cross-linking honesty.

That is enough to make Module 4 and Module 5 real in the live Learn path without changing the content type model.

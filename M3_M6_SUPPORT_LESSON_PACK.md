# Module 3 + 6 Support Lesson Pack

Build-facing seed pack aligned to the **live** app model in:
- `content/lessons/lessons.ts`
- `content/course/modules.ts`
- `content/concepts/concepts.ts`
- `lib/types/content.ts`

This pack only fills the next highest-value compact lessons still missing from the live app data.

---

## Live-shape guardrails

Use only the current `LessonRecord` fields and current `LessonContentBlock` types:
- `rich-text`
- `list`
- `callout`
- `example`
- `checkpoint`

Do **not** introduce richer planning-only schema.

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

### Simulation slugs already present
- `simple-answer-no-tool-calls`
- `direct-user-message-with-tool-use`
- `scheduled-briefing-run`

Note: live lessons support `relatedSimulationScenarioSlugs`, but not first-class workflow refs.

---

## Missing lessons this pack covers

These target lessons are not live yet:
- `3.1 Workspaces: where the agent lives`
- `3.3 Sessions and why they matter`
- `3.5 Tools: read, write, exec, web, sessions, and more`
- `6.1 Picking the right first workflow`
- `6.4 Choosing the right tools and skills`
- `6.6 When to use main session, isolated sessions, or subagents`

---

## Recommended module lessonIds updates

### Module 3
Replace:
```ts
lessonIds: ["m3-2", "m3-4"]
```

With:
```ts
lessonIds: ["m3-1", "m3-2", "m3-3", "m3-4", "m3-5"]
```

Recommended `estimatedMinutes` update:
```ts
estimatedMinutes: 41
```

### Module 6
Replace:
```ts
lessonIds: ["m6-2", "m6-5"]
```

With:
```ts
lessonIds: ["m6-1", "m6-2", "m6-4", "m6-5", "m6-6"]
```

Recommended `estimatedMinutes` update:
```ts
estimatedMinutes: 39
```

---

## Recommended global ordering after insertion

1. `m1-1`
2. `m1-2`
3. `m2-1`
4. `m2-2`
5. `m3-1`
6. `m3-2`
7. `m3-3`
8. `m3-4`
9. `m3-5`
10. `m4-1`
11. `m4-3`
12. `m4-5`
13. `m5-2`
14. `m5-4`
15. `m5-6`
16. `m6-1`
17. `m6-2`
18. `m6-4`
19. `m6-5`
20. `m6-6`

This implies updating `orderGlobal` on current live lessons from `m3-2` onward.

---

## Lesson seed specs

## 3.1 Workspaces: Where the Agent Lives

Suggested simulation slug: `direct-user-message-with-tool-use`

```ts
{
  id: "m3-1",
  slug: "workspaces-where-the-agent-lives",
  moduleId: "module-3",
  orderInModule: 1,
  orderGlobal: 5,
  title: "Workspaces: Where the Agent Lives",
  summary: "The workspace is the agent's working environment: the files, folders, notes, and outputs it can revisit instead of treating every task like a fresh chat bubble.",
  estimatedMinutes: 8,
  learningObjectives: [
    "Explain what a workspace is in practical terms",
    "See why durable files matter more than transient chat alone",
    "Recognize common things that belong in a workspace"
  ],
  keyTakeaways: [
    "A workspace is the agent's operating environment, not just a storage bucket.",
    "Files make context durable, inspectable, and reusable across future runs.",
    "If useful work should survive the current chat, the workspace is usually involved."
  ],
  relatedConceptIds: ["workspace", "agent", "memory", "context"],
  relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
  content: [
    {
      type: "rich-text",
      markdown: "OpenClaw becomes much more useful once you stop imagining the assistant as a voice floating in empty space. It works in a workspace: a file and folder environment where instructions, project docs, notes, and outputs can live. That gives the agent somewhere to read from, write to, and return to later."
    },
    {
      type: "list",
      title: "Common workspace contents",
      items: [
        "Bootstrap files like AGENTS.md, SOUL.md, or USER.md",
        "Project docs, specs, and implementation notes",
        "Memory files and recurring state records",
        "Artifacts the agent creates, like reports or summaries"
      ]
    },
    {
      type: "callout",
      tone: "mental-model",
      title: "The workspace is why the agent can feel grounded",
      body: "Without files, every run leans harder on transient context. With files, the agent can inspect reality, preserve decisions, and build on past work."
    },
    {
      type: "checkpoint",
      question: "What is the main practical advantage of giving an agent a real workspace instead of relying only on chat history?",
      answer: "The workspace gives the agent durable, inspectable context and somewhere to save useful artifacts for later runs."
    }
  ],
  previousLessonId: "m2-2",
  nextLessonId: "m3-2"
}
```

## 3.3 Sessions and Why They Matter

Suggested simulation slugs:
- `simple-answer-no-tool-calls`
- `scheduled-briefing-run`

```ts
{
  id: "m3-3",
  slug: "sessions-and-why-they-matter",
  moduleId: "module-3",
  orderInModule: 3,
  orderGlobal: 7,
  title: "Sessions and Why They Matter",
  summary: "A session is the live thread of continuity for a run or series of runs, and session boundaries explain a lot of behavior that otherwise feels random.",
  estimatedMinutes: 8,
  learningObjectives: [
    "Explain what a session holds and what it does not",
    "Understand why different workflows may need different sessions",
    "Recognize how session boundaries change behavior"
  ],
  keyTakeaways: [
    "A session carries short-term continuity, not universal permanent memory.",
    "Different session choices produce different available history and different run behavior.",
    "Many confusing outcomes are really session-design problems, not model magic."
  ],
  relatedConceptIds: ["session", "routing", "memory", "workflow"],
  relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown: "A session is the immediate working thread where recent messages, local continuity, and nearby tool activity accumulate. That sounds simple, but it matters a lot. A direct chat session, a recurring scheduled run, and a delegated worker run should not all inherit the same history by accident."
    },
    {
      type: "example",
      title: "Why the same request can behave differently",
      scenario: "A question asked in the main chat may see recent back-and-forth, while the same task in a scheduled run starts from a much narrower context.",
      explanation: "That difference is not weirdness. It is session shape. The run inherits a different continuity model depending on where it happens."
    },
    {
      type: "callout",
      tone: "insight",
      title: "Session boundaries are a feature",
      body: "Isolation is often desirable. A clean session can prevent irrelevant history from contaminating the current job."
    },
    {
      type: "checkpoint",
      question: "Why might a scheduled workflow use its own session instead of reusing the main chat session?",
      answer: "Because it should have predictable continuity and avoid depending on unrelated conversational history from the main chat."
    }
  ],
  previousLessonId: "m3-2",
  nextLessonId: "m3-4"
}
```

## 3.5 Tools: read, write, exec, web, sessions, and more

Suggested simulation slug: `direct-user-message-with-tool-use`

```ts
{
  id: "m3-5",
  slug: "tools-read-write-exec-web-sessions-and-more",
  moduleId: "module-3",
  orderInModule: 5,
  orderGlobal: 9,
  title: "Tools: read, write, exec, web, sessions, and more",
  summary: "Tools are the explicit actions that let the agent inspect reality, create artifacts, search for information, and coordinate work instead of only guessing in text.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Explain why tools matter in OpenClaw",
    "Recognize the practical job of common tool families",
    "Understand why tool access should stay explicit and bounded"
  ],
  keyTakeaways: [
    "Tools turn the assistant from a talker into an operator with bounded actions.",
    "Different tools serve different jobs: files, shell, web, and session coordination are not interchangeable.",
    "Explicit tools make the run more inspectable, safer, and easier to reason about."
  ],
  relatedConceptIds: ["tools", "workspace", "session", "approval", "workflow"],
  relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
  content: [
    {
      type: "rich-text",
      markdown: "When OpenClaw reads a file, writes a report, searches the web, fetches a page, runs a command, or manages a separate session, it does that through explicit tool calls. That matters because the system is no longer pretending the model simply 'knows' things. It inspects, acts, and leaves a more understandable trail."
    },
    {
      type: "list",
      title: "Useful beginner tool buckets",
      items: [
        "read / write / edit for durable file work",
        "exec for bounded command-line inspection or operations",
        "web_search / web_fetch for evidence-backed research",
        "session and subagent tools for isolating or delegating work"
      ]
    },
    {
      type: "callout",
      tone: "warning",
      title: "More tools is not automatically better",
      body: "A workflow becomes easier to trust when it has the smallest useful toolset, not the largest possible one."
    },
    {
      type: "checkpoint",
      question: "Why are explicit tool calls better than treating the assistant like it has vague hidden powers?",
      answer: "Because explicit tools make actions inspectable and bounded, and they let the agent gather real information instead of merely guessing."
    }
  ],
  previousLessonId: "m3-4",
  nextLessonId: "m4-1"
}
```

## 6.1 Picking the Right First Workflow

Suggested simulation slug: `scheduled-briefing-run`

```ts
{
  id: "m6-1",
  slug: "picking-the-right-first-workflow",
  moduleId: "module-6",
  orderInModule: 1,
  orderGlobal: 16,
  title: "Picking the Right First Workflow",
  summary: "Your first workflow should be narrow, repeatable, and easy to judge, not a giant 'do everything for me' design exercise.",
  estimatedMinutes: 8,
  learningObjectives: [
    "Choose a workflow that is small enough to succeed early",
    "Recognize what makes a workflow easy or hard to validate",
    "Prefer bounded recurring value over ambitious vague automation"
  ],
  keyTakeaways: [
    "The best first workflow is concrete, narrow, and easy to evaluate.",
    "Bounded observation or reporting usually beats complicated autonomous action for a first build.",
    "You gain trust faster from one reliable workflow than from a grand but messy design."
  ],
  relatedConceptIds: ["workflow", "trigger", "approval", "session"],
  relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown: "Beginners often reach for the most ambitious idea first: a workflow that monitors everything, acts everywhere, and somehow never makes mistakes. That is almost always the wrong starting point. A better first workflow is one with a clear trigger, a small set of inputs, and an output you can quickly judge as useful or noisy."
    },
    {
      type: "example",
      title: "Good first workflow shape",
      scenario: "A short morning briefing or a simple research memo request is a better first build than an all-day autonomous operator.",
      explanation: "The simpler workflow is easier to inspect, safer to bound, and much easier to improve after the first run."
    },
    {
      type: "list",
      title: "Traits of a good first workflow",
      items: [
        "Clear trigger",
        "Small, trusted inputs",
        "Easy-to-judge output",
        "Low blast radius if it is wrong"
      ]
    },
    {
      type: "checkpoint",
      question: "What makes a workflow a strong candidate for your first build?",
      answer: "It is narrow, repeatable, easy to judge, and low-risk if the result is imperfect."
    }
  ],
  previousLessonId: "m5-6",
  nextLessonId: "m6-2"
}
```

## 6.4 Choosing the Right Tools and Skills

Suggested simulation slug: `direct-user-message-with-tool-use`

```ts
{
  id: "m6-4",
  slug: "choosing-the-right-tools-and-skills",
  moduleId: "module-6",
  orderInModule: 3,
  orderGlobal: 18,
  title: "Choosing the Right Tools and Skills",
  summary: "Workflow design gets easier when you pick the smallest useful set of tools and only reach for a skill when it genuinely sharpens the job.",
  estimatedMinutes: 7,
  learningObjectives: [
    "Match tool choice to workflow needs",
    "Avoid overloading a workflow with unnecessary capabilities",
    "Understand the role of skills as reusable guidance layers"
  ],
  keyTakeaways: [
    "Pick tools based on the job, not because they are available.",
    "A smaller toolset usually makes workflows easier to trust and debug.",
    "Skills are useful when they add focused guidance for a known task shape."
  ],
  relatedConceptIds: ["tools", "workflow", "context", "approval"],
  relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
  content: [
    {
      type: "rich-text",
      markdown: "A workflow that only needs to read docs and write a summary should not automatically carry shell access and web tools. Tool choice is part of the workflow contract. The same is true for skills: use one when the task matches a reusable pattern and the extra instructions actually improve the run."
    },
    {
      type: "list",
      title: "A practical selection rule",
      items: [
        "Start with the minimum toolset that can finish the job",
        "Add web tools only if outside evidence is needed",
        "Add exec only if system inspection or operations are genuinely part of the workflow",
        "Use a skill when the task clearly matches a specialized reusable playbook"
      ]
    },
    {
      type: "callout",
      tone: "insight",
      title: "Capabilities are design choices",
      body: "Every extra tool changes the workflow's risk, complexity, and debugging surface."
    },
    {
      type: "checkpoint",
      question: "Why is the smallest useful toolset often the best design choice?",
      answer: "Because it reduces complexity and risk while making the workflow easier to understand, trust, and debug."
    }
  ],
  previousLessonId: "m6-2",
  nextLessonId: "m6-5"
}
```

## 6.6 When to Use Main Session, Isolated Sessions, or Subagents

Suggested simulation slugs:
- `simple-answer-no-tool-calls`
- `scheduled-briefing-run`

```ts
{
  id: "m6-6",
  slug: "when-to-use-main-session-isolated-sessions-or-subagents",
  moduleId: "module-6",
  orderInModule: 5,
  orderGlobal: 20,
  title: "When to Use Main Session, Isolated Sessions, or Subagents",
  summary: "Choose the execution shape that matches the job: keep interactive work in the main session, isolate clean recurring runs, and delegate only genuinely bounded subtasks.",
  estimatedMinutes: 8,
  learningObjectives: [
    "Match session style to workflow shape",
    "Recognize when isolation is helpful",
    "Know when a subagent is useful and when it is just overhead"
  ],
  keyTakeaways: [
    "The main session is best for collaborative back-and-forth work.",
    "Isolated sessions are useful when a run should not inherit random conversational baggage.",
    "Subagents are best for narrow delegated work, not for avoiding responsibility."
  ],
  relatedConceptIds: ["session", "subagents", "routing", "workflow"],
  relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown: "Execution shape is part of workflow design. If the user is actively collaborating, the main session is often the right home. If a recurring workflow should stay clean and predictable, give it an isolated session. If one bounded lane of work should be split off and returned, that is when a subagent starts to make sense."
    },
    {
      type: "example",
      title: "Three different fits",
      scenario: "A conversational research task belongs in the main session. A daily briefing belongs in an isolated recurring session. A narrow file review or focused research subtask can be delegated to a subagent.",
      explanation: "The point is to choose the shape that keeps context and responsibility legible."
    },
    {
      type: "list",
      title: "Quick chooser",
      items: [
        "Main session: interactive, collaborative, follow-up-heavy work",
        "Isolated session: repeatable or clean-slate runs with predictable context",
        "Subagent: narrow delegated subtask with a clear return artifact or result"
      ]
    },
    {
      type: "checkpoint",
      question: "When is a subagent the wrong choice?",
      answer: "When the task is not truly bounded and you are just pushing the whole original problem into another lane without gaining clarity or isolation."
    }
  ],
  previousLessonId: "m6-5"
}
```

---

## Suggested prev/next chain updates

### Existing lessons that need link updates
- `m2-2.nextLessonId` -> `m3-1`
- `m3-2.previousLessonId` -> `m3-1`
- `m3-2.nextLessonId` -> `m3-3`
- `m3-4.previousLessonId` -> `m3-3`
- `m3-4.nextLessonId` -> `m3-5`
- `m4-1.previousLessonId` -> `m3-5`
- `m5-6.nextLessonId` -> `m6-1`
- `m6-2.previousLessonId` -> `m6-1`
- `m6-2.nextLessonId` -> `m6-4`
- `m6-5.previousLessonId` -> `m6-4`
- `m6-5.nextLessonId` -> `m6-6`

### New lesson chain
- `m3-1`: prev `m2-2`, next `m3-2`
- `m3-3`: prev `m3-2`, next `m3-4`
- `m3-5`: prev `m3-4`, next `m4-1`
- `m6-1`: prev `m5-6`, next `m6-2`
- `m6-4`: prev `m6-2`, next `m6-5`
- `m6-6`: prev `m6-5`, no next

---

## Optional concept `relatedLessonIds` updates

Keep these honest and additive only.

### `workspace`
Add:
- `m3-1`

### `session`
Add:
- `m3-3`
- `m6-6`

### `tools`
Add:
- `m3-5`
- `m6-4`

### `workflow`
Add:
- `m6-1`
- `m6-6`

### `subagents`
Add:
- `m6-6`

### `context`
Add:
- `m3-1`
- `m6-4`

### `routing`
Add:
- `m6-6`

### `approval`
Add:
- `m6-1`
- `m6-4`

No new concept IDs needed.

---

## Short integration note for Otto

Recommended implementation order:
1. Add the 6 new `LessonRecord`s to `content/lessons/lessons.ts`
2. Update `module-3` and `module-6` `lessonIds` and `estimatedMinutes` in `content/course/modules.ts`
3. Re-thread `previousLessonId`, `nextLessonId`, and `orderGlobal` for the existing lessons affected by insertion
4. Add only the concept `relatedLessonIds` listed above if you want Explore to stay in sync

Small caution: because the live app uses the raw lesson array for navigation and lookups, this pack is safest if applied as one coherent content pass rather than partially inserting lessons without fixing the chain.

---

## Key cautions

- Stay with the live lesson schema only.
- Do not invent workflow refs in lesson records.
- Do not invent new concept IDs; current live concept coverage is enough.
- Update `orderGlobal` consistently or the learn flow will feel scrambled.
- The lesson titles above intentionally match the curriculum wording, but the field shapes and content density are kept compact to fit the live MVP. 

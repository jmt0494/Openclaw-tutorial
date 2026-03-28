# Foundation Gap Lesson Pack

This artifact proposes the next highest-value lesson seeds still missing from the live Learn path after the recent curriculum-density passes.

It stays aligned to the **live** `LessonRecord` schema in `lib/types/content.ts`:

- allowed lesson fields only: `id`, `slug`, `moduleId`, `orderInModule`, `orderGlobal`, `title`, `summary`, `estimatedMinutes`, `learningObjectives`, `keyTakeaways`, `relatedConceptIds`, `relatedSimulationScenarioSlugs?`, `content`, `previousLessonId?`, `nextLessonId?`
- no `status`, `difficulty`, `relatedWorkflowIds`, or other planning-only fields
- workflow linkage suggestions are listed as implementation notes, not embedded in the seed objects

---

## Why these four lessons

Comparing `MVP_LESSON_MAP.md` against the current live data in:

- `content/lessons/lessons.ts`
- `content/course/modules.ts`
- `content/concepts/concepts.ts`
- `content/workflows/workflows.ts`
- `content/simulations/run-scenarios.ts`

…the biggest remaining **core** gaps are still:

1. **1.4** The difference between chatting, automating, and orchestrating
2. **2.3** Model response and tool calls
3. **2.5** Why agents sometimes feel passive, slow, or inconsistent
4. **3.9** Subagents and isolated work

These are the strongest next additions because they close the most obvious structural holes in the current learner arc:

- Module 1 currently jumps from the mental model straight into run mechanics without teaching operating modes.
- Module 2 explains intake and context, but still skips the actual **model/tool-action branch** and the first real **debugging lens**.
- Module 3 teaches tools and sessions, but still lacks the dedicated core lesson for **subagents**, even though delegation already appears later in Module 5 and Module 6.

---

## Current live gaps by module

### Module 1 currently live
- `m1-1`
- `m1-2`

**Gap:** no explicit bridge lesson from “what OpenClaw is” to “what mode of operation you are designing.”

### Module 2 currently live
- `m2-1`
- `m2-2`

**Gaps:**
- no lesson that makes tool calls feel like part of a run rather than hidden magic
- no lesson that teaches symptom-to-cause diagnosis early

### Module 3 currently live
- `m3-1`
- `m3-2`
- `m3-3`
- `m3-4`
- `m3-5`

**Gap:** no dedicated subagent lesson, despite live concepts/workflows already depending on the learner understanding delegation and isolation.

---

## Recommended module updates

### `content/course/modules.ts`

Recommended `lessonIds` changes only:

```ts
// module-1
lessonIds: ["m1-1", "m1-2", "m1-4"]

// module-2
lessonIds: ["m2-1", "m2-2", "m2-3", "m2-5"]

// module-3
lessonIds: ["m3-1", "m3-2", "m3-3", "m3-4", "m3-5", "m3-9"]
```

### Estimated minute impact

Suggested module estimate changes if these seeds are added as-is:

- `module-1`: **18 -> 27**
- `module-2`: **20 -> 39**
- `module-3`: **41 -> 50**
- whole Learn path: **194 -> 231** minutes

That is still reasonable for a dense MVP tutorial, and these additions improve coherence more than they increase weight.

---

## Global order impact

Recommended placement keeps the current structure intact while filling the holes where learners naturally expect them.

### New global order

1. `m1-1`
2. `m1-2`
3. `m1-4` ← new
4. `m2-1`
5. `m2-2`
6. `m2-3` ← new
7. `m2-5` ← new
8. `m3-1`
9. `m3-2`
10. `m3-3`
11. `m3-4`
12. `m3-5`
13. `m3-9` ← new
14. `m4-1`
15. `m4-3`
16. `m4-5`
17. `m5-1`
18. `m5-2`
19. `m5-4`
20. `m5-6`
21. `m6-1`
22. `m6-2`
23. `m6-4`
24. `m6-5`
25. `m6-6`
26. `m6-7`

### Existing lessons whose `orderGlobal` would shift

- `m2-1`: 3 -> 4
- `m2-2`: 4 -> 5
- `m3-1`: 5 -> 8
- `m3-2`: 6 -> 9
- `m3-3`: 7 -> 10
- `m3-4`: 8 -> 11
- `m3-5`: 9 -> 12
- `m4-1`: 10 -> 14
- `m4-3`: 11 -> 15
- `m4-5`: 12 -> 16
- `m5-1`: 13 -> 17
- `m5-2`: 14 -> 18
- `m5-4`: 15 -> 19
- `m5-6`: 16 -> 20
- `m6-1`: 17 -> 21
- `m6-2`: 18 -> 22
- `m6-4`: 19 -> 23
- `m6-5`: 20 -> 24
- `m6-6`: 21 -> 25
- `m6-7`: 22 -> 26

---

## Prev/next rewiring notes

### Required rewires

```ts
// existing
m1-2.nextLessonId = "m1-4"      // currently "m2-1"
m2-2.nextLessonId = "m2-3"      // currently "m3-1"
m3-5.nextLessonId = "m3-9"      // currently "m4-1"
m4-1.previousLessonId = "m3-9"  // currently "m3-5"

// new
m1-4.previousLessonId = "m1-2"
m1-4.nextLessonId = "m2-1"

m2-3.previousLessonId = "m2-2"
m2-3.nextLessonId = "m2-5"

m2-5.previousLessonId = "m2-3"
m2-5.nextLessonId = "m3-1"

m3-9.previousLessonId = "m3-5"
m3-9.nextLessonId = "m4-1"
```

### Why this rewiring works

- `m1-4` becomes the proper bridge from orientation into run mechanics.
- `m2-3` completes the causal explanation of a run before the learner gets the “why it feels weird” debugging lesson.
- `m2-5` gives learners a systems explanation before they enter the building-block catalog.
- `m3-9` lands before Module 4 so delegation/isolation exists as a core concept before the pattern library starts using it.

---

## Exact lesson seed objects

These objects are intentionally compact and copy-ready for `content/lessons/lessons.ts`.

### 1) `m1-4`

```ts
{
  id: "m1-4",
  slug: "chatting-vs-automating-vs-orchestrating",
  moduleId: "module-1",
  orderInModule: 3,
  orderGlobal: 3,
  title: "Chatting, Automating, and Orchestrating",
  summary: "Learn the difference between a one-off chat exchange, a repeated automated task, and a designed workflow that coordinates context, tools, triggers, and boundaries.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Distinguish chat assistance from automation and orchestration",
    "Recognize when a task needs a workflow instead of a single prompt",
    "Understand that more autonomy requires more design discipline"
  ],
  keyTakeaways: [
    "Chatting is reactive and human-led.",
    "Automation repeats a bounded action on a trigger.",
    "Orchestration connects trigger, context, tools, decisions, and boundaries into a designed system."
  ],
  relatedConceptIds: ["workflow", "trigger", "schedule", "session", "tools"],
  relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown:
        "A useful way to understand OpenClaw is to separate three operating modes. In chat mode, the user asks and the assistant responds. In automation mode, a bounded task runs on a trigger like a schedule. In orchestration mode, the system coordinates multiple moving parts: context loading, tool use, state, output rules, and approval boundaries."
    },
    {
      type: "example",
      title: "Same goal, three levels",
      scenario: "Answer a question now, send a morning briefing every day, or run a maintenance workflow that inspects, summarizes, and escalates only when needed.",
      explanation:
        "These are not just bigger prompts. They are different operating shapes with different design needs."
    },
    {
      type: "list",
      title: "Quick operating-mode test",
      items: [
        "If a human is actively steering it, you are usually in chat mode.",
        "If the same bounded action repeats on a trigger, you are usually in automation mode.",
        "If multiple steps, tools, or decisions must stay coordinated, you are usually in orchestration mode."
      ]
    },
    {
      type: "callout",
      tone: "mental-model",
      title: "More power means more design",
      body: "The move from chat to orchestration is not just about capability. It is about choosing triggers, state, tools, and boundaries on purpose."
    },
    {
      type: "checkpoint",
      question: "What makes orchestration different from simple automation?",
      answer: "Orchestration coordinates multiple parts of a workflow such as context, tools, decisions, state, and approval boundaries, rather than just repeating one bounded action."
    }
  ],
  previousLessonId: "m1-2",
  nextLessonId: "m2-1"
}
```

**Concept linkage notes:** uses only live concept ids.

**Workflow linkage suggestions:**
- strong cross-link to workflow slug `morning-briefing`
- secondary cross-link to `recurring-maintenance-check`

---

### 2) `m2-3`

```ts
{
  id: "m2-3",
  slug: "model-response-and-tool-calls",
  moduleId: "module-2",
  orderInModule: 3,
  orderGlobal: 6,
  title: "Model Response and Tool Calls",
  summary: "See where the model decides to answer directly, call a tool, or chain multiple actions as part of one run.",
  estimatedMinutes: 10,
  learningObjectives: [
    "Explain the difference between generating a reply and taking action through tools",
    "Understand that tool calls are part of the run lifecycle, not hidden side magic",
    "Recognize when a run can answer directly and when evidence-gathering tools are needed"
  ],
  keyTakeaways: [
    "The model does not just talk; it can decide to act through explicit tools.",
    "Some runs need no tools at all, while others depend on them heavily.",
    "Tool use makes a run more inspectable because the evidence and actions become visible artifacts."
  ],
  relatedConceptIds: ["tools", "context", "workflow", "workspace", "session"],
  relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "direct-user-message-with-tool-use"],
  content: [
    {
      type: "rich-text",
      markdown:
        "After context is assembled, the run reaches a fork: answer directly from the available context, or call one or more tools to gather evidence or create an artifact. That decision is a normal part of the run. OpenClaw is not switching to a different universe when tools appear. It is still one workflow, now with visible actions inside it."
    },
    {
      type: "example",
      title: "Two valid runs",
      scenario: "A conceptual question may be answered directly, while a project-status request may require reading files and writing a handoff note.",
      explanation:
        "Both are normal runs. The difference is whether the task can be completed from current context alone or requires outside inspection or artifact creation."
    },
    {
      type: "list",
      title: "Common branches after context assembly",
      items: [
        "Direct reply with no tool calls",
        "Single tool call to inspect or fetch something",
        "Multiple tool calls that gather evidence before the final reply",
        "Tool call plus artifact creation, such as writing a file"
      ]
    },
    {
      type: "callout",
      tone: "insight",
      title: "Tool calls make the run legible",
      body: "When the assistant reads, writes, fetches, or executes through tools, you can inspect what happened instead of pretending the model simply knew everything already."
    },
    {
      type: "checkpoint",
      question: "Why is it important to teach tool calls as part of the run instead of as separate magic?",
      answer: "Because tool calls are one of the main ways the run gathers evidence or takes bounded action, and understanding them makes the system easier to trust and debug."
    }
  ],
  previousLessonId: "m2-2",
  nextLessonId: "m2-5"
}
```

**Concept linkage notes:** centers `tools`, but keeps it connected to `context` and `session` so the learner sees tool choice as part of the same run.

**Workflow linkage suggestions:**
- strong cross-link to workflow slug `research-assistant`
- secondary cross-link to `morning-briefing`

---

### 3) `m2-5`

```ts
{
  id: "m2-5",
  slug: "why-agents-feel-passive-slow-or-inconsistent",
  moduleId: "module-2",
  orderInModule: 4,
  orderGlobal: 7,
  title: "Why Agents Feel Passive, Slow, or Inconsistent",
  summary: "Build an early debugging lens by connecting confusing behavior back to routing, context, tool use, session shape, or workflow design instead of blaming vague AI randomness.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Name common reasons an agent can feel passive, slow, or inconsistent",
    "Connect those symptoms back to concrete parts of the system",
    "Adopt a systems view of agent behavior before learning more advanced patterns"
  ],
  keyTakeaways: [
    "A confusing run usually has a structural cause, not just mysterious randomness.",
    "Weak routing, poor context, over-broad tools, and bad session choices often explain odd behavior.",
    "Debugging gets easier when you ask what the run saw, where it ran, and what it was allowed to do."
  ],
  relatedConceptIds: ["routing", "context", "session", "tools", "workflow"],
  relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "direct-user-message-with-tool-use", "scheduled-briefing-run"],
  content: [
    {
      type: "rich-text",
      markdown:
        "When an agent feels passive, it may not have enough context or the right tools. When it feels slow, it may be gathering evidence, calling multiple tools, or dragging too much context into the run. When it feels inconsistent, the session, routing path, or loaded files may differ from one run to the next. The fix is usually architectural before it is mystical."
    },
    {
      type: "list",
      title: "Symptom to likely cause",
      items: [
        "Passive: not enough context, weak instructions, or missing tools",
        "Slow: too many tool calls, too much context, or an overcomplicated workflow",
        "Inconsistent: different routing, different session history, or different files loaded"
      ]
    },
    {
      type: "callout",
      tone: "warning",
      title: "Do not diagnose from vibes alone",
      body: "Before saying the model was random, inspect the run shape: where it landed, what context it saw, and whether tool use was actually required."
    },
    {
      type: "example",
      title: "Same prompt, different run",
      scenario: "A request in the main chat behaves differently from the same request in a scheduled workflow.",
      explanation:
        "That difference may come from session shape, routing, and missing live chat history, not from the system forgetting how to do the task."
    },
    {
      type: "checkpoint",
      question: "What is the first useful question to ask when a run feels inconsistent?",
      answer: "Ask what changed in the run shape: routing, session, loaded context, or required tool path."
    }
  ],
  previousLessonId: "m2-3",
  nextLessonId: "m3-1"
}
```

**Concept linkage notes:** this is the best place to tighten the learner's causal model before they enter Modules 3 through 6.

**Workflow linkage suggestions:**
- primary cross-link to `recurring-maintenance-check`
- secondary cross-link to `morning-briefing` and `research-assistant`

---

### 4) `m3-9`

```ts
{
  id: "m3-9",
  slug: "subagents-and-isolated-work",
  moduleId: "module-3",
  orderInModule: 6,
  orderGlobal: 13,
  title: "Subagents and Isolated Work",
  summary: "Learn why a main agent sometimes delegates a bounded task to a focused worker instead of doing everything in one cluttered run.",
  estimatedMinutes: 9,
  learningObjectives: [
    "Explain why subagents exist and what problem they solve",
    "Understand isolation, delegation, and focused execution",
    "Recognize when delegation is useful versus when it is just unnecessary overhead"
  ],
  keyTakeaways: [
    "A subagent is a focused worker for a bounded task.",
    "Isolation helps keep context narrow and outputs cleaner.",
    "Delegation works best when the subtask is real, scoped, and has a clear return result."
  ],
  relatedConceptIds: ["subagents", "session", "routing", "workflow", "agent"],
  content: [
    {
      type: "rich-text",
      markdown:
        "Subagents exist so the main agent does not have to carry every part of a complex job in one overloaded thread. A main agent can keep the broader goal, delegate one bounded task to a worker, then receive a focused result. That makes the workflow easier to reason about because the delegated lane has a narrower purpose and cleaner context."
    },
    {
      type: "example",
      title: "Good delegation shape",
      scenario: "The main agent asks a worker to review one file, research one narrow question, or draft one artifact, then return a concise result.",
      explanation:
        "The important point is scope. Delegating a bounded lane improves focus. Delegating the whole problem usually just adds ceremony."
    },
    {
      type: "list",
      title: "When a subagent is usually worth it",
      items: [
        "A subtask is distinct and bounded",
        "The worker benefits from narrower context",
        "The result can be returned in a compact structured form",
        "Isolation reduces clutter in the main session"
      ]
    },
    {
      type: "callout",
      tone: "mental-model",
      title: "Delegation is a workflow choice",
      body: "Subagents are not there to make the system look fancy. They exist to isolate work, preserve focus, and keep the main run legible."
    },
    {
      type: "checkpoint",
      question: "What is the clearest sign that a task is a good candidate for a subagent?",
      answer: "It is a distinct, bounded subtask with a clear output that benefits from narrower context and cleaner isolation."
    }
  ],
  previousLessonId: "m3-5",
  nextLessonId: "m4-1"
}
```

**Concept linkage notes:** uses only live concept ids and intentionally matches the later `m5-6` delegate pattern and `m6-6` execution-shape lesson.

**Workflow linkage suggestions:**
- strong cross-link to workflow slug `research-assistant` as a “can expand into delegation later” case
- strong cross-link to `m5-6` lesson slug `delegate-pattern`
- secondary cross-link to `m6-6` lesson slug `when-to-use-main-session-isolated-sessions-or-subagents`

---

## Recommended concept record updates

These are not required for the markdown pack itself, but they would keep Explore in sync once the lessons are added.

### `content/concepts/concepts.ts`

Append these lesson ids to the relevant concept records:

- `workflow.relatedLessonIds += ["m1-4", "m2-3", "m2-5", "m3-9"]`
- `trigger.relatedLessonIds += ["m1-4"]`
- `schedule.relatedLessonIds += ["m1-4"]`
- `tools.relatedLessonIds += ["m2-3", "m2-5"]`
- `context.relatedLessonIds += ["m2-3", "m2-5"]`
- `routing.relatedLessonIds += ["m2-5", "m3-9"]`
- `session.relatedLessonIds += ["m1-4", "m2-5", "m3-9"]`
- `subagents.relatedLessonIds += ["m3-9"]`
- `agent.relatedLessonIds += ["m3-9"]`

---

## Recommended workflow linkage additions

The live `LessonRecord` schema does **not** support `relatedWorkflowIds`, so keep workflow linkage at the content/presentation layer for now.

### Suggested lesson -> workflow mappings

- `m1-4` -> `morning-briefing`, `recurring-maintenance-check`
- `m2-3` -> `research-assistant`, `morning-briefing`
- `m2-5` -> `recurring-maintenance-check`, `morning-briefing`, `research-assistant`
- `m3-9` -> `research-assistant` (future delegation extension), plus forward-link into lesson `m5-6`

### Suggested workflow -> lesson back-links

If workflow records are expanded later, these would be the most useful additions:

- `morning-briefing.relatedLessonIds += ["m1-4", "m2-3", "m2-5"]`
- `research-assistant.relatedLessonIds += ["m2-3", "m2-5", "m3-9"]`
- `recurring-maintenance-check.relatedLessonIds += ["m1-4", "m2-5"]`

---

## Simulation linkage suggestions

These use only live scenario slugs from `content/simulations/run-scenarios.ts`.

### Best-fit scenario mapping

- `m1-4`
  - `simple-answer-no-tool-calls`
  - `scheduled-briefing-run`
- `m2-3`
  - `simple-answer-no-tool-calls`
  - `direct-user-message-with-tool-use`
- `m2-5`
  - `simple-answer-no-tool-calls`
  - `direct-user-message-with-tool-use`
  - `scheduled-briefing-run`
- `m3-9`
  - no perfect dedicated subagent sim exists yet
  - leave `relatedSimulationScenarioSlugs` absent for now, or add a future scenario later rather than forcing a weak fit

### One useful future sim gap

If a fourth scenario is ever added, the cleanest next one is:
- **delegated-worker-run**: main agent delegates one bounded task, worker returns result, main agent integrates it

That would support `m3-9`, `m5-6`, and `m6-6` at once.

---

## Recommended implementation order

If only one or two lessons get added next, I would do them in this order:

1. **`m2-3`** — biggest gap in run comprehension
2. **`m1-4`** — best structural bridge near the front of the course
3. **`m3-9`** — closes a building-block hole before pattern lessons lean on delegation
4. **`m2-5`** — strongest early debugging lesson and worth adding as soon as possible

If the team wants the most balanced pack, ship all four together.

---

## Bottom line

The live Learn path is already much denser than before, but these four missing lessons are still the most obvious **core-model gaps**:

- **1.4** teaches operating modes
- **2.3** teaches tool-call branching inside a run
- **2.5** teaches the first debugging lens
- **3.9** teaches delegation and isolated work before later modules depend on it

Adding these four would materially improve the coherence of the MVP curriculum without requiring any schema changes or new content-domain structures.

# Content Model

This file defines the MVP content structures for the OpenClaw Interactive Tutorial.

The goal is not to create a perfect long-term CMS. The goal is to make the MVP buildable with stable mock data, clear page contracts, and content objects that map directly to the planned screens.

## Design principles

- Prefer simple structured data over rich custom rendering
- Keep content portable between markdown, JSON, or TypeScript objects
- Separate educational content from simulation state where possible
- Give each screen a clear data contract
- Support progressive expansion beyond MVP without rewriting the model

---

## MVP content domains

The MVP needs five main content domains:

1. Course structure
2. Lessons
3. Concepts
4. Example workflows
5. Simulations

These can live as:
- JSON files
- TypeScript data modules
- markdown files with frontmatter

For MVP implementation speed, a hybrid approach is reasonable:
- metadata in JSON or TS
- longer lesson copy in markdown
- simulation/example data in JSON or TS

---

## 1. Course structure model

The course structure powers:
- home page overview
- module sidebar
- previous/next lesson navigation
- progress tracking

### Course object

```ts
interface Course {
  id: string;                    // "openclaw-interactive-tutorial"
  title: string;
  tagline: string;
  description: string;
  version: string;               // "mvp"
  modules: ModuleSummary[];
  featuredConceptIds: string[];
  featuredWorkflowIds: string[];
}
```

### Module summary object

```ts
interface ModuleSummary {
  id: string;                    // "module-1"
  slug: string;                  // "what-openclaw-is"
  title: string;
  shortTitle?: string;
  description: string;
  order: number;
  lessonIds: string[];
  status: "planned" | "draft" | "ready";
  estimatedMinutes?: number;
  learningGoals: string[];
}
```

### Navigation assumptions

- Each module contains an ordered list of lesson IDs.
- Global lesson navigation is linear, even though modules group lessons.
- Progress can be stored as completed lesson IDs in local storage.

### MVP recommendation

Represent the full course tree in one `course.ts` or `course.json` file so layouts can be scaffolded immediately.

---

## 2. Lesson model

The lesson model powers:
- lesson pages
- sidebars and breadcrumbs
- module progress
- key takeaways
- attached interactive element selection

Each lesson should be understandable on its own, but still connected to the broader course sequence.

### Lesson object

```ts
interface Lesson {
  id: string;                    // "m1-mental-model"
  slug: string;                  // "core-mental-model"
  moduleId: string;              // "module-1"
  orderInModule: number;
  orderGlobal: number;

  title: string;
  summary: string;
  estimatedMinutes: number;
  difficulty: "intro" | "core" | "advanced";
  status: "planned" | "draft" | "ready";

  learningObjectives: string[];
  keyTakeaways: string[];
  prerequisiteLessonIds?: string[];
  relatedConceptIds: string[];
  relatedWorkflowIds?: string[];

  heroVisual?: LessonVisualRef;
  interactive?: LessonInteractiveRef;

  content: LessonContentBlock[];

  nextLessonId?: string;
  previousLessonId?: string;
}
```

### Lesson visual reference

```ts
interface LessonVisualRef {
  type: "diagram" | "callout" | "timeline" | "stack" | "image";
  id: string;
  title?: string;
  caption?: string;
}
```

### Lesson interactive reference

```ts
interface LessonInteractiveRef {
  type:
    | "mini-simulation"
    | "concept-map-focus"
    | "workflow-builder-step"
    | "run-visualizer-scene"
    | "comparison-card";
  id: string;
  prompt?: string;
}
```

### Lesson content blocks

Use a small block set rather than raw HTML so the UI remains consistent.

```ts
type LessonContentBlock =
  | RichTextBlock
  | ListBlock
  | CalloutBlock
  | ExampleBlock
  | ConceptLinksBlock
  | CheckpointBlock;

interface RichTextBlock {
  type: "rich-text";
  markdown: string;
}

interface ListBlock {
  type: "list";
  title?: string;
  items: string[];
}

interface CalloutBlock {
  type: "callout";
  tone: "info" | "warning" | "insight" | "mental-model";
  title: string;
  body: string;
}

interface ExampleBlock {
  type: "example";
  title: string;
  scenario: string;
  explanation: string;
}

interface ConceptLinksBlock {
  type: "concept-links";
  title?: string;
  conceptIds: string[];
}

interface CheckpointBlock {
  type: "checkpoint";
  question: string;
  answer: string;
}
```

### Why this is enough for MVP

This structure supports:
- lesson rendering
- callouts and key takeaways
- short exercises/checkpoints
- attached visuals and interactives

without requiring a complex rich-content editor.

---

## 3. Concept model

The concept model powers:
- concept explorer
- concept cards
- relationship map
- lesson cross-links

### Concept object

```ts
interface Concept {
  id: string;                    // "session"
  slug: string;                  // "sessions"
  name: string;
  category:
    | "core"
    | "execution"
    | "context"
    | "automation"
    | "safety"
    | "orchestration";

  shortDefinition: string;
  explanation: string;
  whyItMatters: string;

  examples: ConceptExample[];
  relatedConceptIds: string[];
  relatedLessonIds: string[];

  visual?: {
    nodeGroup?: string;
    icon?: string;
    emphasis?: "low" | "medium" | "high";
  };
}

interface ConceptExample {
  title: string;
  description: string;
}
```

### Required MVP concept set

At minimum:
- agent
- workspace
- session
- tools
- memory
- channels
- cron
- skills
- subagents
- workflow

### Concept map relationship rule

Use `relatedConceptIds` as the single source of truth for graph edges in the MVP.

That keeps the concept explorer simple:
- nodes = concepts
- edges = related concepts
- side panel = selected concept content

---

## 4. Example workflow model

The example workflow model powers:
- example workflow viewer
- workflow cards on home page
- references from lessons
- step-through walkthroughs

### Workflow example object

```ts
interface WorkflowExample {
  id: string;                    // "morning-briefing"
  slug: string;
  title: string;
  summary: string;
  difficulty: "intro" | "core" | "advanced";
  status: "planned" | "draft" | "ready";

  userGoal: string;
  trigger: WorkflowTrigger;
  contextSources: WorkflowContextSource[];
  toolsUsed: string[];
  memoryPattern: string;
  sessionPattern: string;
  outputPattern: string;
  approvalMode: string;

  whyThisDesign: string[];
  steps: WorkflowStep[];
  relatedConceptIds: string[];
  relatedLessonIds?: string[];
}
```

### Workflow subtypes

```ts
interface WorkflowTrigger {
  type: "message" | "schedule" | "event" | "manual";
  label: string;
  details: string;
}

interface WorkflowContextSource {
  type:
    | "workspace-file"
    | "memory"
    | "session-history"
    | "external-source"
    | "user-input";
  label: string;
  details: string;
}

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  kind:
    | "trigger"
    | "context"
    | "reasoning"
    | "tool-call"
    | "decision"
    | "output"
    | "persistence";
  artifacts?: WorkflowArtifactRef[];
}

interface WorkflowArtifactRef {
  type: "file" | "tool" | "message" | "schedule" | "session";
  label: string;
  value: string;
}
```

### Required MVP example workflows

The MVP spec already names three examples. Those should be the first three workflow records:
- morning briefing
- research assistant
- recurring maintenance check

A fourth optional example is useful later:
- coding helper

---

## 5. Run visualizer simulation model

The run visualizer is the most simulation-heavy screen in the MVP.

It needs to explain hidden system behavior without depending on a real backend.

### Run scenario object

```ts
interface RunScenario {
  id: string;                    // "simple-chat-reply"
  title: string;
  promptLabel: string;
  userMessage: string;
  summary: string;
  tags: string[];

  initialContext: RunContextSnapshot;
  stages: RunStage[];
  finalOutput: RunFinalOutput;
}
```

### Run context snapshot

```ts
interface RunContextSnapshot {
  systemPieces: ContextItem[];
  workspaceFiles: ContextItem[];
  memoryItems: ContextItem[];
  sessionHistoryItems: ContextItem[];
}

interface ContextItem {
  id: string;
  label: string;
  detail: string;
  kind: "system" | "file" | "memory" | "history" | "tool-policy";
}
```

### Run stage object

```ts
interface RunStage {
  id: string;
  kind:
    | "intake"
    | "routing"
    | "context-assembly"
    | "model-inference"
    | "tool-calls"
    | "final-reply"
    | "persistence";
  title: string;
  explanation: string;
  state: "idle" | "active" | "complete";
  visibleArtifacts?: RunArtifact[];
}
```

### Run artifacts

```ts
type RunArtifact =
  | ToolCallArtifact
  | FileArtifact
  | MessageArtifact
  | MemoryWriteArtifact;

interface ToolCallArtifact {
  type: "tool-call";
  toolName: string;
  inputPreview: string;
  outputPreview: string;
}

interface FileArtifact {
  type: "file";
  path: string;
  action: "read" | "write" | "edit";
  preview: string;
}

interface MessageArtifact {
  type: "message";
  role: "user" | "assistant" | "system";
  preview: string;
}

interface MemoryWriteArtifact {
  type: "memory-write";
  target: string;
  preview: string;
}
```

### Final output object

```ts
interface RunFinalOutput {
  assistantReply: string;
  persistedToSession: boolean;
  persistedToMemory: boolean;
  notes?: string[];
}
```

### MVP scenario requirements

Create at least 3 run scenarios:
1. simple answer with no tool calls
2. answer with file/tool usage
3. scheduled or workflow-style run with persistence effects

This gives enough variety to teach the run lifecycle.

---

## 6. Workflow builder model

The workflow builder is not a freeform engine in the MVP. It is a guided configurator.

So its model should be choice-based, not code-based.

### Builder option group model

```ts
interface BuilderOptionGroup {
  id:
    | "goal"
    | "trigger"
    | "context"
    | "tools"
    | "memory"
    | "output"
    | "approval";
  title: string;
  description: string;
  selectionMode: "single" | "multiple";
  options: BuilderOption[];
}

interface BuilderOption {
  id: string;
  label: string;
  description: string;
  effects?: string[];
  tags?: string[];
}
```

### Builder draft state

```ts
interface WorkflowBuilderDraft {
  goal?: string;
  trigger?: string;
  context: string[];
  tools: string[];
  memory?: string;
  output?: string;
  approval?: string;
}
```

### Builder result model

```ts
interface WorkflowBuilderResult {
  title: string;
  summary: string;
  designRationale: string[];
  recommendedPattern: string;
  warnings?: string[];
  relatedExampleWorkflowIds?: string[];
}
```

### MVP implementation note

The builder can use deterministic rules:
- selected options in
- recommendation template out

No AI generation is needed for MVP.

---

## 7. Progress and state model

This is application state rather than authored content, but it should be planned now because the content model depends on it.

### Learner progress

```ts
interface LearnerProgress {
  completedLessonIds: string[];
  lastVisitedRoute?: string;
  bookmarkedConceptIds?: string[];
  viewedWorkflowIds?: string[];
}
```

### MVP storage recommendation

Use browser local storage only.

No account system is needed for MVP.

---

## 8. File organization recommendation

One practical MVP structure:

```text
openclaw-tutorial/
  app/ or src/
  content/
    course.ts
    lessons/
      m1-what-problem-openclaw-solves.md
      m1-core-mental-model.md
      ...
    lesson-index.ts
    concepts.ts
    workflows.ts
    simulations.ts
    builder-options.ts
  docs/
    CONTENT_MODEL.md
    ROUTES.md
```

If markdown handling slows the build, use TypeScript objects first and migrate later.

For speed, the simplest initial version is:
- `course.ts`
- `lessons.ts`
- `concepts.ts`
- `workflows.ts`
- `simulations.ts`
- `builder-options.ts`

---

## 9. Minimum authored content needed to start scaffolding

To begin app implementation, the project does not need all lessons completed.

It only needs:

### Required immediately

- full course/module metadata
- at least 6 lesson records with partial content
- all core concept records
- 3 workflow example records
- 3 run scenarios
- builder option sets

### Can remain partial at scaffold stage

- full prose for all lessons
- advanced modules beyond the MVP navigation shell
- final polish copy
- extra diagrams

This is important because it lets the app shell begin before the curriculum is fully written.

---

## 10. Suggested first data seeds

These are the best first content objects to draft next.

### First lesson seeds

- M1.1 What problem OpenClaw solves
- M1.2 The core mental model
- M2.1 A message comes in: intake and routing
- M2.2 Context assembly
- M3.4 Memory files versus chat history
- M6.2 Defining the trigger

### First concept seeds

- agent
- workspace
- session
- tool
- memory
- cron
- skill
- subagent

### First workflow seeds

- morning briefing
- research assistant
- recurring maintenance check

### First run scenarios

- direct chat answer
- answer using workspace files and tool calls
- scheduled maintenance run that writes a report

---

## 11. Open questions intentionally deferred

These do not need to block MVP scaffolding:

- whether lesson bodies are ultimately markdown or MDX
- whether diagrams are SVG, React components, or static images
- whether progress tracking includes checkpoints or only lesson completion
- whether the builder later exports JSON/templates
- whether advanced debugging labs become a separate route family

---

## 12. Recommended next artifact

Now that the content shape is defined, the next most useful artifact is:

- `ROUTES.md`

That should translate the course and screen model into concrete application routes, layout regions, and page responsibilities.

# Routes and Page Architecture

This file translates the product docs and content model into a concrete MVP route map.

The goal is to make the app scaffoldable now.

It defines:
- the route structure
- what each page is responsible for
- the layout regions each page needs
- which content objects power each page
- what can be mocked in the MVP

---

## 1. Routing principles

The MVP should optimize for clarity, not cleverness.

That means:
- keep top-level navigation simple
- use stable, human-readable slugs
- let learners move linearly through lessons
- allow non-linear exploration through concepts and examples
- avoid deep nested routing unless it improves orientation

Primary navigation in the product spec becomes four route families:
- Learn
- Explore
- Build
- Examples

A lightweight home route anchors the experience.

---

## 2. Recommended MVP route map

```text
/
/learn
/learn/[moduleSlug]
/learn/[moduleSlug]/[lessonSlug]
/explore
/explore/concepts/[conceptSlug]
/build
/examples
/examples/[workflowSlug]
/simulations/run-visualizer
```

Optional aliases can be added later, but the above is enough to build the MVP.

---

## 3. Top-level route responsibilities

### `/`

Purpose:
- explain what the tutorial is
- orient the learner
- provide clear entry points into learning, exploring, and building

Primary UI regions:
- hero/introduction
- course overview
- featured modules
- featured concepts
- featured workflows
- progress/resume card
- CTA row

Primary data dependencies:
- `Course`
- `ModuleSummary[]`
- featured concept summaries
- featured workflow summaries
- learner progress from local storage

MVP interaction level:
- low
- mostly content and navigation

Mocking notes:
- everything can be driven from static content and browser local storage

---

### `/learn`

Purpose:
- act as the learning hub
- show the full module tree and lesson progression
- help users resume where they left off

Primary UI regions:
- page intro
- module cards or vertical module list
- lesson counts / estimated time
- progress summary
- continue learning CTA

Primary data dependencies:
- `Course`
- `ModuleSummary[]`
- lesson index metadata
- learner progress

MVP interaction level:
- low to medium

Why this route exists separately from `/`:
- the home page can stay concise and product-oriented
- `/learn` can become the dedicated course index

---

### `/learn/[moduleSlug]`

Purpose:
- provide module-level orientation before a learner enters a lesson
- summarize what this module teaches
- show ordered lessons in the module

Primary UI regions:
- module header
- learning goals
- lesson list
- estimated time
- start / resume module CTA
- optional related concepts panel

Primary data dependencies:
- `ModuleSummary`
- lessons filtered by `moduleId`
- optional related concept summaries
- learner progress

MVP interaction level:
- low

Notes:
- this page is useful for orientation even if learners often jump directly into lessons
- if implementation time gets tight, the module page can remain simple while still preserving route stability

---

### `/learn/[moduleSlug]/[lessonSlug]`

Purpose:
- deliver the core educational experience
- combine explanation, one visual/interactive aid, and structured navigation

Primary UI regions:
- breadcrumb
- lesson header
- main content column
- teaching aid panel
- takeaway box
- previous / next navigation
- sidebar course map

Primary data dependencies:
- `Lesson`
- `Course` or lesson index for navigation
- referenced concepts from `relatedConceptIds`
- referenced workflows from `relatedWorkflowIds`
- visual and interactive refs
- learner progress

MVP interaction level:
- medium

Rendering responsibilities:
- render `LessonContentBlock[]`
- render one lesson visual or one mini interactive
- mark lesson complete
- support previous/next navigation

Important MVP rule:
- every lesson page should be buildable from structured mock data with no backend

---

### `/explore`

Purpose:
- provide a non-linear way to understand the OpenClaw mental model
- act as the concept explorer landing page

Primary UI regions:
- concept explorer intro
- concept map canvas or node list
- concept category filters
- concept cards grid
- entry point into specific concept detail pages

Primary data dependencies:
- all `Concept[]`
- graph edges derived from `relatedConceptIds`

MVP interaction level:
- medium

Notes:
- this route can either show a concept map plus side panel, or a map plus card grid
- the simplest first version can be a selectable card grid with a lightweight relationship visualization later

---

### `/explore/concepts/[conceptSlug]`

Purpose:
- show one concept in detail
- make cross-links between lessons and concepts explicit

Primary UI regions:
- concept header
- short definition
- deeper explanation
- why it matters
- examples
- related concepts
- related lessons

Primary data dependencies:
- one `Concept`
- related concept lookups
- related lesson summaries

MVP interaction level:
- low to medium

Why use a dedicated detail route:
- concepts become linkable from lessons and examples
- detail pages reduce complexity versus forcing all detail into one large explorer panel

---

### `/build`

Purpose:
- host the Workflow Builder experience
- help the learner design a workflow by choosing structured options

Primary UI regions:
- builder introduction
- step-by-step option panels
- current draft summary
- generated recommendation/result panel
- related example workflow suggestions

Primary data dependencies:
- `BuilderOptionGroup[]`
- `WorkflowBuilderDraft`
- deterministic rules that produce `WorkflowBuilderResult`
- optional workflow examples for recommendation links

MVP interaction level:
- high

MVP rule:
- builder output should be deterministic and pre-modeled
- no AI generation required

---

### `/examples`

Purpose:
- show all example workflows in one browsable gallery
- let learners compare patterns and difficulty levels

Primary UI regions:
- page intro
- workflow cards
- difficulty/status filters
- workflow pattern highlights

Primary data dependencies:
- all `WorkflowExample[]`

MVP interaction level:
- low

---

### `/examples/[workflowSlug]`

Purpose:
- let the learner inspect one workflow end-to-end
- connect abstract workflow design choices to concrete behavior

Primary UI regions:
- workflow header
- user goal and trigger
- context/tool/memory/session summary
- execution step timeline
- why this design panel
- related concepts
- related lessons

Primary data dependencies:
- one `WorkflowExample`
- optional related concepts and lesson summaries

MVP interaction level:
- medium

This page is a strong candidate for a reusable step-timeline component shared with the run visualizer.

---

### `/simulations/run-visualizer`

Purpose:
- show the hidden lifecycle of an OpenClaw run
- make context loading, tool use, and persistence visible in sequence

Primary UI regions:
- intro and scenario selector
- preset prompt list or fake input box
- stage timeline
- active stage detail panel
- visible artifacts panel
- final output panel

Primary data dependencies:
- `RunScenario[]`
- selected `RunScenario`
- scenario stage state in client UI

MVP interaction level:
- high

Notes:
- this route is placed outside `/learn` so it can serve both as a lesson-linked teaching surface and as a standalone interactive lab
- lessons can deep-link into this route with a preset scenario id later

---

## 4. Navigation model

### Primary navigation

Recommended top nav labels:
- Home
- Learn
- Explore
- Build
- Examples

Secondary utilities:
- Resume
- Progress

Optional direct link:
- Run Visualizer

Why the visualizer is not top-level in MVP nav by default:
- it is important, but conceptually it fits as a teaching surface referenced by lessons
- keeping the top nav short helps reduce choice overload

---

## 5. Route-to-content contract

This section shows the minimum content contracts needed for scaffolding.

### Home
Needs:
- `Course`
- `ModuleSummary[]`
- featured concept and workflow lookups

### Learn index
Needs:
- `Course`
- lesson metadata index

### Module page
Needs:
- `ModuleSummary`
- module lesson summaries

### Lesson page
Needs:
- `Lesson`
- concept summary lookup
- workflow summary lookup
- navigation index

### Explore index
Needs:
- `Concept[]`

### Concept detail
Needs:
- one `Concept`
- related concepts and lessons

### Build
Needs:
- `BuilderOptionGroup[]`
- builder rules
- example workflow summaries

### Examples index
Needs:
- `WorkflowExample[]`

### Example detail
Needs:
- one `WorkflowExample`
- related concepts and lessons

### Run visualizer
Needs:
- `RunScenario[]`

---

## 6. Suggested layout architecture

The MVP can be built with three reusable layout shells.

### A. Marketing/course shell
Used by:
- `/`
- `/learn`
- `/explore`
- `/build`
- `/examples`

Shared elements:
- top nav
- page header region
- centered content container
- optional footer/progress strip

### B. Lesson shell
Used by:
- `/learn/[moduleSlug]/[lessonSlug]`

Shared elements:
- breadcrumb
- left sidebar course map
- main lesson content column
- right-side teaching aid or sticky panel
- previous/next footer nav

### C. Detail/interactive shell
Used by:
- `/explore/concepts/[conceptSlug]`
- `/examples/[workflowSlug]`
- `/simulations/run-visualizer`

Shared elements:
- compact breadcrumb
- title and summary header
- left content / right inspector pattern or stacked mobile layout

This structure reduces design churn and helps the scaffold happen fast.

---

## 7. URL and slug recommendations

Keep slugs educational and human-readable.

### Module slug examples
- `what-openclaw-is`
- `how-a-run-works`
- `core-building-blocks`
- `safety-control-boundaries`
- `workflow-patterns`
- `design-your-own-workflow`

### Lesson slug examples
- `what-problem-openclaw-solves`
- `core-mental-model`
- `message-intake-and-routing`
- `context-assembly`
- `memory-files-vs-chat-history`
- `defining-the-trigger`

### Concept slug examples
- `agent`
- `workspace`
- `session`
- `tools`
- `memory`
- `cron`
- `skills`
- `subagents`

### Workflow slug examples
- `morning-briefing`
- `research-assistant`
- `recurring-maintenance-check`

---

## 8. Deep-linking recommendations

The MVP should support simple cross-linking rules.

### From lessons
Lessons should be able to link to:
- related concepts
- related workflows
- run visualizer scenarios

### From concepts
Concepts should be able to link to:
- related lessons
- workflows that use the concept heavily

### From examples
Workflow examples should be able to link to:
- lessons that explain the pattern
- concepts that explain the parts

### From the builder
The builder result should link to:
- the closest matching example workflow
- relevant lessons on trigger, memory, or session design

These links make the app feel like a learning system rather than a pile of screens.

---

## 9. Progressive implementation path

This route map also suggests the build order.

### Stage 1: Scaffoldable immediately
- `/`
- `/learn`
- `/learn/[moduleSlug]`
- `/learn/[moduleSlug]/[lessonSlug]`
- `/examples`
- `/examples/[workflowSlug]`

These routes mostly depend on content structures already defined in `CONTENT_MODEL.md`.

### Stage 2: First interactivity
- `/build`
- `/simulations/run-visualizer`
- `/explore`

These need more client-side state and interaction logic.

### Stage 3: Detail polish
- `/explore/concepts/[conceptSlug]`
- deep-link presets into simulations and builder recommendations

This staging lets the app become navigable before every interactive surface is finished.

---

## 10. Bottlenecks this route map removes

Creating this route map resolves several planning blockers:

1. It clarifies that the MVP does not need a backend route strategy.
2. It gives the future scaffold a stable page inventory.
3. It shows which pages can ship with mostly static content first.
4. It isolates the high-complexity interactive surfaces.
5. It defines reusable layout shells early, which should reduce implementation churn.

---

## 11. Recommended next artifact

Now that both the content model and route architecture exist, the next most useful artifact is:

- `DATA_SEEDS.md`

That file should define the actual first seed records needed to scaffold the app:
- course metadata
- module summaries
- 6 lesson records
- concept records
- workflow examples
- run scenarios
- builder option groups

That would make the project ready to move from planning docs into actual app scaffolding.

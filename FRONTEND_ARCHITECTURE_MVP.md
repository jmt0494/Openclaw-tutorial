# Frontend Architecture Proposal for MVP

This document turns the product, MVP, content-model, and route docs into a buildable frontend architecture.

The goal is not a perfect long-term platform. The goal is to make the MVP fast to scaffold, easy to reason about, and flexible enough to support lessons, simulations, examples, and a workflow builder without needing a backend.

---

## 1. Recommended stack

### Chosen direction

Use:
- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **Static/local data modules for MVP**
- **Local storage for progress only**

### Why this stack fits

- The product is mostly content + guided interactivity
- The MVP does not need a backend
- Route-based learning flows map cleanly to Next.js
- Static generation is enough for lessons, concepts, and examples
- TypeScript helps keep the content model, simulations, and page contracts aligned
- Tailwind is fast for educational UI scaffolding

### Deliberate non-goals for MVP

Do **not** add yet:
- authentication
- database
- CMS
- server actions for content editing
- live OpenClaw integration
- complicated global state libraries

Those can be added later if the tutorial proves useful.

---

## 2. Architecture principles

1. **Content-first**
   - Lessons, concepts, workflows, and simulation scenes should be represented as data, not hardcoded inside pages.

2. **Route-driven UI**
   - Each major product surface gets a stable route and a dedicated page entry.

3. **Small interactive islands**
   - Keep most pages server-renderable/static.
   - Use client components only for progress, simulations, stepper controls, filters, and builder state.

4. **Clear separation of concerns**
   - `content/` for educational data
   - `components/` for reusable UI
   - `features/` for product-specific logic
   - `lib/` for data access, helpers, and derived selectors

5. **Mock now, swap later**
   - Data access should go through thin loader functions so static TS/JSON can later become markdown, CMS, or API data without page rewrites.

---

## 3. Rendering strategy

### Static by default

These routes should be statically generated from local content:
- `/`
- `/learn`
- `/learn/[moduleSlug]`
- `/learn/[moduleSlug]/[lessonSlug]`
- `/explore`
- `/explore/concepts/[conceptSlug]`
- `/examples`
- `/examples/[workflowSlug]`

### Client-interactive routes/components

These need client-side state:
- `/build`
- `/simulations/run-visualizer`
- progress indicators on any page
- lesson completion toggles
- concept filters/map selection
- step-through workflow views

### Why this split works

- Most of the app is educational content and should be fast, simple, and indexable
- Only a few surfaces actually need user-driven state machines
- This keeps complexity down without sacrificing interactivity

---

## 4. Proposed app structure

```text
openclaw-tutorial/
  app/
    layout.tsx
    globals.css
    page.tsx

    learn/
      page.tsx
      [moduleSlug]/
        page.tsx
        [lessonSlug]/
          page.tsx

    explore/
      page.tsx
      concepts/
        [conceptSlug]/
          page.tsx

    build/
      page.tsx

    examples/
      page.tsx
      [workflowSlug]/
        page.tsx

    simulations/
      run-visualizer/
        page.tsx

  components/
    layout/
      AppShell.tsx
      TopNav.tsx
      PageHeader.tsx
      Breadcrumbs.tsx
      SidebarCourseMap.tsx
      FooterNav.tsx

    ui/
      Button.tsx
      Card.tsx
      Badge.tsx
      Tabs.tsx
      Accordion.tsx
      ProgressBar.tsx
      EmptyState.tsx
      Callout.tsx

    lessons/
      LessonRenderer.tsx
      LessonContentBlockRenderer.tsx
      LessonHeader.tsx
      TakeawayBox.tsx
      LessonCheckpoint.tsx
      LessonVisualSlot.tsx

    concepts/
      ConceptCard.tsx
      ConceptGrid.tsx
      ConceptRelationshipList.tsx
      ConceptMapPlaceholder.tsx

    workflows/
      WorkflowCard.tsx
      WorkflowSummary.tsx
      WorkflowStepList.tsx
      WorkflowExecutionStepper.tsx

    simulations/
      RunTimeline.tsx
      RunStagePanel.tsx
      ArtifactList.tsx
      MessagePresetPicker.tsx

    builder/
      BuilderForm.tsx
      BuilderStep.tsx
      BuilderSummary.tsx
      WhyThisDesign.tsx

    progress/
      ContinueLearningCard.tsx
      LessonCompleteButton.tsx
      ModuleProgress.tsx
      CourseProgress.tsx

  content/
    course/
      course.ts
      modules.ts

    lessons/
      lesson-index.ts
      module-1/
        m1-what-openclaw-is.ts
        m1-core-mental-model.ts
      module-2/
        ...

    concepts/
      concepts.ts

    workflows/
      workflows.ts

    simulations/
      run-visualizer-scenes.ts
      workflow-execution-scenes.ts

    builder/
      builder-options.ts
      builder-rules.ts

  features/
    learn/
      selectors.ts
      navigation.ts

    explore/
      graph.ts
      filters.ts

    examples/
      selectors.ts

    run-visualizer/
      engine.ts
      presenters.ts

    workflow-builder/
      reducer.ts
      summary.ts
      recommendations.ts

    progress/
      storage.ts
      hooks.ts
      progress-model.ts

  lib/
    content-loaders/
      course.ts
      lessons.ts
      concepts.ts
      workflows.ts
      simulations.ts

    types/
      content.ts
      simulation.ts
      progress.ts
      builder.ts

    utils/
      slug.ts
      arrays.ts
      text.ts
      assertions.ts

  public/
    diagrams/
    illustrations/

  docs/
    optional exported architecture notes later
```

---

## 5. Folder responsibility guide

### `app/`
Contains route entries, layout wiring, and page composition.

Each page should:
- load the needed content
- derive view models
- hand off rendering to components

Pages should **not** become giant content-processing files.

### `components/`
Reusable presentation components.

Rules:
- keep them mostly dumb
- avoid direct filesystem/content imports when possible
- accept typed props
- split reusable UI from domain-specific teaching components

### `content/`
The source of truth for MVP educational data.

This is where the app’s lessons, concepts, examples, and simulations live.

For MVP speed, prefer TypeScript object exports over markdown parsing unless long-form writing becomes painful.

### `features/`
Holds behavior and domain logic for each major product surface.

Examples:
- converting builder choices into a workflow summary
- stepping through run visualizer stages
- building previous/next lesson relationships
- filtering concept graphs

This prevents `components/` or `app/` files from absorbing all business logic.

### `lib/`
Generic support code.

Use this for:
- content loaders
- shared types
- utility functions
- cross-feature helpers

---

## 6. Suggested content implementation approach

### MVP recommendation

Use **TypeScript content modules** first.

Why:
- fastest to ship
- strong typing
- easy imports
- easy derived selectors
- no markdown parser setup needed initially

### Recommended pattern

- `lib/types/content.ts` defines interfaces
- `content/...` exports typed objects
- `lib/content-loaders/...` exposes getter functions
- routes/features consume getters, not raw files

Example:

```ts
// content/lessons/module-1/m1-core-mental-model.ts
export const lesson = {
  id: "m1-core-mental-model",
  slug: "core-mental-model",
  ...
} satisfies Lesson;
```

```ts
// lib/content-loaders/lessons.ts
import { lessons } from "@/content/lessons/lesson-index";

export function getLessonBySlugs(moduleSlug: string, lessonSlug: string) {
  return lessons.find(
    (lesson) => lesson.moduleSlug === moduleSlug && lesson.slug === lessonSlug
  );
}
```

### Later migration path

If authoring becomes copy-heavy:
- keep metadata in TS
- move long lesson bodies to markdown/MDX
- continue using the same loader layer

That lets the architecture evolve without route churn.

---

## 7. State model by product surface

The MVP does not need one app-wide global store.

Use the smallest state mechanism that fits each area.

### A. Progress state

Use:
- local storage
- React hooks/context only where needed

Tracks:
- completed lesson IDs
- last visited lesson
- started modules
- maybe dismissed tips later

Recommended files:
- `features/progress/storage.ts`
- `features/progress/hooks.ts`
- `features/progress/progress-model.ts`

### B. Run Visualizer state

Use:
- local component state or `useReducer`

Tracks:
- selected preset or prompt
- current stage index
- expanded stage panels
- selected artifact

Recommended files:
- `features/run-visualizer/engine.ts`
- `features/run-visualizer/presenters.ts`

### C. Workflow Builder state

Use:
- `useReducer`

Tracks:
- selected goal
- trigger
- context sources
- tools
- memory strategy
- output pattern
- approval/autonomy level

The reducer should produce a structured builder state that can be converted into:
- summary text
- design rationale
- recommended workflow pattern

Recommended files:
- `features/workflow-builder/reducer.ts`
- `features/workflow-builder/summary.ts`
- `features/workflow-builder/recommendations.ts`

### D. Concept Explorer state

Use:
- local state in page/client component

Tracks:
- selected concept
- filters
- hover/focus in graph or card list

No heavy store needed.

---

## 8. Data flow per page type

### Home

**Input:** course + featured content + progress  
**Output:** oriented landing page with resume/start CTAs

### Learn index

**Input:** course, modules, lesson metadata, progress  
**Output:** course map and resume path

### Module page

**Input:** module summary, lessons in module, progress  
**Output:** module orientation + lesson list

### Lesson page

**Input:** lesson, navigation context, related concepts/workflows, progress  
**Output:** full lesson screen + one teaching aid + completion controls

### Explore page

**Input:** concept summaries + relationship graph  
**Output:** filterable concept explorer

### Concept detail

**Input:** concept + related lessons + related concepts  
**Output:** deep concept explanation and cross-links

### Workflow builder

**Input:** builder options + rules + local builder state  
**Output:** interactive design surface + generated explanation

### Examples index/detail

**Input:** workflow metadata + execution scenes  
**Output:** inspectable example workflows

### Run visualizer

**Input:** prebuilt scenario scene  
**Output:** step-by-step explanation of a run

---

## 9. Component layering

Use a three-layer mental model.

### Layer 1: base UI
Reusable, style-oriented pieces.

Examples:
- `Card`
- `Button`
- `Accordion`
- `Badge`
- `ProgressBar`

### Layer 2: domain presentation
Components that understand tutorial entities.

Examples:
- `LessonHeader`
- `ConceptCard`
- `WorkflowSummary`
- `RunStagePanel`

### Layer 3: feature containers
Components that orchestrate behavior/state.

Examples:
- `BuilderForm`
- `RunTimeline`
- `SidebarCourseMap`
- `WorkflowExecutionStepper`

This makes refactoring easier and keeps business logic out of atom-level UI.

---

## 10. Recommended type boundaries

At minimum, create these shared types early:

```ts
// lib/types/content.ts
Course
ModuleSummary
Lesson
LessonContentBlock
Concept
ExampleWorkflow
RunVisualizationScene
WorkflowExecutionScene
BuilderOptionSet
```

```ts
// lib/types/progress.ts
LearnerProgress
ModuleProgressState
```

```ts
// lib/types/builder.ts
WorkflowBuilderState
WorkflowSummaryResult
DesignRecommendation
```

```ts
// lib/types/simulation.ts
RunStage
RunArtifact
RunStageType
SimulationStep
```

Why this matters:
- the same objects will appear across pages, builder summaries, and visualizers
- typed boundaries reduce drift between content docs and implementation

---

## 11. MVP layout system

### Global shell

All pages should share:
- top navigation
- consistent page max-width
- spacing scale
- visual language for callouts/cards

### Learning layout

Lesson pages need a specialized layout with:
- breadcrumb
- content column
- sticky sidebar course map on desktop
- bottom previous/next navigation

### Interactive layout

Visualizer, builder, and examples should use a two-panel pattern when possible:
- left: controls / step list
- right: explanation / artifacts / details

This supports the product principle of making hidden system behavior visible.

---

## 12. Mobile and responsiveness guidance

MVP should be desktop-first but not desktop-only.

Rules:
- top-level nav collapses simply
- course sidebar becomes drawer or below-content section on mobile
- timelines become stacked cards
- two-panel interactive screens collapse into vertical sections
- no interaction should depend on hover alone

Do not over-engineer responsiveness in phase 1, but keep layouts adaptable.

---

## 13. Accessibility baseline

MVP should include:
- semantic headings
- keyboard-accessible step controls
- visible focus states
- sufficient color contrast
- expandable sections with proper button semantics
- reduced-motion-friendly timeline transitions

Educational software especially benefits from clarity and accessible structure.

---

## 14. Suggested implementation order inside the frontend

### Step 1: foundation
- scaffold Next.js app
- add Tailwind
- define shared types
- implement top nav and app shell

### Step 2: content plumbing
- create `content/` and loader files
- add course, modules, a few lessons, concepts, and workflows
- wire static routes

### Step 3: learning surfaces
- build home
- build learn index
- build module page
- build lesson page renderer

### Step 4: interactive surfaces
- run visualizer
- workflow builder
- example workflow detail stepper

### Step 5: progress layer
- local storage progress
- continue learning card
- lesson completion state

This sequence gets a convincing MVP visible early without waiting for all advanced interactions.

---

## 15. Risks and mitigation

### Risk: content model gets too abstract
Mitigation:
- keep lesson blocks small and practical
- avoid inventing a generic CMS

### Risk: simulations become bespoke and hard to maintain
Mitigation:
- model them as scenes with ordered stages and typed artifacts
- render with reusable stage components

### Risk: builder logic sprawls across UI files
Mitigation:
- centralize summary/recommendation logic under `features/workflow-builder/`

### Risk: long-form content is awkward in TS files
Mitigation:
- start in TS for speed, then migrate only lesson bodies to markdown/MDX if needed

### Risk: too many route-specific one-off components
Mitigation:
- use shared educational presentation components from the start

---

## 16. MVP readiness checklist for this architecture

This frontend architecture is sufficient if the project can now:
- scaffold the route tree directly
- create typed mock content for lessons, concepts, workflows, and simulations
- render static learning pages without backend work
- add interactivity only where needed
- support future migration to richer content sources without page rewrites

---

## 17. Recommendation summary

For the MVP, build the tutorial as a **static-content-first Next.js app with typed local data, route-driven pages, and isolated client-side interactive modules**.

That gives the project:
- fast implementation speed
- low operational complexity
- a clean match to the existing specs
- enough structure to support lessons, exploration, simulations, and builder logic without painting the project into a corner

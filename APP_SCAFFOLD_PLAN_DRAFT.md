# App Scaffold Plan Draft

This draft is the practical bridge between the existing docs and the current codebase.

It is **not** a greenfield scaffold plan anymore.
The project already has:
- a running Next.js + TypeScript + Tailwind foundation
- the home route
- the learn index
- module pages
- lesson pages
- typed course and lesson content

So this document focuses on the **next scaffold pass**:
- exact file and folder creation order from the current state
- route scaffolding order for the remaining MVP surfaces
- component scaffolding order
- what can stay placeholder first
- the first local-run milestone that matters

---

## 1. Current starting point

Already present in the repo:
- framework bootstrap files
- `app/layout.tsx`
- `app/page.tsx`
- `app/learn/page.tsx`
- `app/learn/[moduleSlug]/page.tsx`
- lesson route family under `app/learn/[moduleSlug]/[lessonSlug]/`
- `components/layout/AppShell.tsx`
- `components/layout/SidebarCourseMap.tsx`
- `components/lessons/LessonRenderer.tsx`
- typed course and lesson content
- basic content loaders

This means the scaffold priority is **not** foundation anymore.
The priority is expanding the app from the first learn vertical slice into the full MVP route shell.

---

## 2. Locked objective for this scaffold pass

Deliver a navigable MVP shell that adds the remaining route families after Learn:
1. `Examples`
2. `Explore`
3. `Run Visualizer`
4. `Build`

The order matters.
The app should keep growing from low-risk static pages into higher-interaction screens.

---

## 3. Exact folder and file creation order

This order assumes the current learn flow stays intact and we only add what is still missing.

### Phase A — fill the missing content and loader foundation

Create folders first:

```text
content/concepts/
content/workflows/
content/simulations/
content/builder/
components/concepts/
components/workflows/
components/simulations/
components/builder/
components/ui/
lib/content-loaders/
```

Then create files in this order:

1. `content/concepts/concepts.ts`
2. `content/workflows/workflows.ts`
3. `content/simulations/run-scenarios.ts`
4. `content/builder/builder-options.ts`
5. `content/builder/builder-rules.ts`
6. `lib/content-loaders/concepts.ts`
7. `lib/content-loaders/workflows.ts`
8. `lib/content-loaders/simulations.ts`
9. `lib/content-loaders/builder.ts`

Why this first:
- route files should be thin
- remaining pages should render from data immediately
- examples/explore/build/simulations should not hardcode their content in page files

### Phase B — add missing shared UI primitives

Create these next:

1. `components/ui/Card.tsx`
2. `components/ui/Badge.tsx`
3. `components/ui/Button.tsx`
4. `components/ui/Callout.tsx`
5. `components/ui/EmptyState.tsx`

These should stay small.
Do not invent a full design system yet.
They only need to remove repeated markup across the new route families.

### Phase C — scaffold workflow presentation components

Create these next:

1. `components/workflows/WorkflowCard.tsx`
2. `components/workflows/WorkflowSummary.tsx`
3. `components/workflows/WorkflowStepList.tsx`
4. `components/workflows/WorkflowExecutionStepper.tsx`

Why before routes:
- `/examples` and `/examples/[workflowSlug]` are the next safest route family
- the same step/timeline ideas will later help the run visualizer

### Phase D — scaffold concept presentation components

Create these next:

1. `components/concepts/ConceptCard.tsx`
2. `components/concepts/ConceptGrid.tsx`
3. `components/concepts/ConceptRelationshipList.tsx`
4. `components/concepts/ConceptMapPlaceholder.tsx`

Note:
The placeholder component is intentional.
Do not block Explore on a real graph implementation.

### Phase E — scaffold simulation components

Create these next:

1. `components/simulations/RunTimeline.tsx`
2. `components/simulations/RunStagePanel.tsx`
3. `components/simulations/ArtifactList.tsx`
4. `components/simulations/MessagePresetPicker.tsx`

Keep these deterministic and scenario-driven.
No freeform input engine is needed for the first pass.

### Phase F — scaffold builder components

Create these next:

1. `components/builder/BuilderForm.tsx`
2. `components/builder/BuilderStep.tsx`
3. `components/builder/BuilderSummary.tsx`
4. `components/builder/WhyThisDesign.tsx`

Keep the builder simple:
- options in
- deterministic summary out
- similar workflow links below

### Phase G — add route files last

Create route folders/files in this exact order:

1. `app/examples/page.tsx`
2. `app/examples/[workflowSlug]/page.tsx`
3. `app/explore/page.tsx`
4. `app/explore/concepts/[conceptSlug]/page.tsx`
5. `app/simulations/run-visualizer/page.tsx`
6. `app/build/page.tsx`

This preserves the safest delivery sequence:
- static examples first
- mostly static explore second
- interaction-heavy simulation third
- builder last

---

## 4. Route scaffolding order

This is the order the remaining routes should actually be built and verified.

## Route 1 — `/examples`

Ship first because it is mostly static and content-driven.

Must render:
- page intro
- 3 workflow cards
- summary/difficulty/trigger labels
- links to detail routes

Definition of scaffold-complete:
- index route builds
- all seeded workflows appear
- each card links correctly

## Route 2 — `/examples/[workflowSlug]`

Ship second.

Must render:
- workflow header
- snapshot summary
- step list or stepper
- why-this-design section
- related concepts and lessons

Definition of scaffold-complete:
- at least one workflow detail page renders all sections from typed data
- timeline/step list works without advanced animation

## Route 3 — `/explore`

Ship third.

Must render:
- concept intro
- concept grid or list
- category/group labels if available
- selected featured concept area or simple cards

Definition of scaffold-complete:
- learner can browse all seeded concepts
- route does not depend on a graph library

## Route 4 — `/explore/concepts/[conceptSlug]`

Ship fourth.

Must render:
- concept definition
- why it matters
- related concepts
- related lessons

Definition of scaffold-complete:
- detail pages resolve from slug
- related navigation works

## Route 5 — `/simulations/run-visualizer`

Ship fifth.

Must render:
- scenario selector
- stage timeline
- active stage panel
- visible artifacts list
- final output section

Definition of scaffold-complete:
- switching scenarios resets state cleanly
- learner can step forward/backward deterministically

## Route 6 — `/build`

Ship sixth.

Must render:
- guided option groups
- draft summary
- final recommendation area
- related example suggestions

Definition of scaffold-complete:
- a valid workflow summary can be generated from seeded rules
- no AI calls or backend required

---

## 5. Component scaffolding order

Build components in this sequence, because it minimizes rework.

### Group 1 — basic reusable pieces
- `Card`
- `Badge`
- `Button`
- `Callout`
- `EmptyState`

### Group 2 — examples/workflows
- `WorkflowCard`
- `WorkflowSummary`
- `WorkflowStepList`
- `WorkflowExecutionStepper`

### Group 3 — concepts
- `ConceptCard`
- `ConceptGrid`
- `ConceptRelationshipList`
- `ConceptMapPlaceholder`

### Group 4 — simulations
- `MessagePresetPicker`
- `RunTimeline`
- `RunStagePanel`
- `ArtifactList`

### Group 5 — builder
- `BuilderStep`
- `BuilderForm`
- `BuilderSummary`
- `WhyThisDesign`

Reason for this order:
- workflow components unlock examples quickly
- concept components unlock explore with minimal complexity
- simulation and builder components are more stateful, so they come later

---

## 6. What can use placeholders first

These pages do **not** need full polish in the first scaffold pass.

## Safe placeholder pages/components

### `/explore`
Can start with:
- concept cards only
- a static note where the future relationship map will go

### `ConceptMapPlaceholder.tsx`
Should literally explain:
- the graph view is planned
- current MVP uses a readable concept list/grid first

### `/simulations/run-visualizer`
Can start with:
- preset scenario buttons
- plain numbered stages
- simple artifact cards
- no animation

### `/build`
Can start with:
- radio groups / checkboxes
- plain text result panel
- one warning callout if selections clash

### `/examples/[workflowSlug]`
Can start with:
- vertical list of steps instead of a sophisticated timeline
- static artifact summaries instead of a rich inspector

### `/`
Can continue using the existing home page if needed.
Only update it later to deep-link into newly added route families.

---

## 7. What should **not** stay placeholder

These parts should be real from the first pass, because they prove architecture instead of polish.

Do not fake these:
- route existence
- slug-based content loading
- content-driven page rendering
- previous/next or related-link navigation where specified
- seeded workflow/example data
- seeded concept data
- seeded run scenario data

In other words:
placeholder UI is fine; placeholder data plumbing is not.

---

## 8. First local run milestone

The first meaningful local-run milestone for **this** scaffold pass is not just `npm run dev`.
That part already exists.

The first meaningful milestone is:

## Milestone: full MVP route shell boots locally

Definition of done:
- `npm run dev` starts cleanly
- home route still works
- learn flow still works
- `/examples` works
- `/examples/[workflowSlug]` works
- `/explore` works
- `/explore/concepts/[conceptSlug]` works
- `/simulations/run-visualizer` works
- `/build` works
- all of the above render from typed local content modules
- no remaining route returns a 404 for the planned MVP surface

That is the first milestone worth calling a real scaffold expansion.

---

## 9. Practical verification order

After scaffolding, verify in this exact order:

1. `npm run build`
2. open `/`
3. open `/learn`
4. open one module page
5. open one lesson page
6. open `/examples`
7. open one workflow detail page
8. open `/explore`
9. open one concept detail page
10. open `/simulations/run-visualizer`
11. open `/build`

Reason:
- verify regressions in the existing learn flow first
- then verify newly added static pages
- then verify the more stateful routes last

---

## 10. Recommended build sequence in plain English

If someone picks this up and starts coding, the shortest sane path is:

1. add concept/workflow/simulation/builder content files
2. add loaders for those files
3. add minimal shared UI primitives
4. scaffold workflow components
5. build examples routes end to end
6. scaffold concept components
7. build explore routes end to end
8. scaffold simulation components
9. build run visualizer route
10. scaffold builder components
11. build `/build`
12. run build and smoke-test the whole route tree

---

## 11. Recommended stopping point after this pass

Stop after the route shell is complete and stable.
Do **not** immediately chase:
- graph polish
- animation polish
- progress persistence
- drag-and-drop builder ideas
- advanced responsive refinement

The next pass after this scaffold should be about:
- improving interactivity depth
- tightening content quality
- adding progress state cleanly

---

## 12. Summary

This scaffold draft treats the project honestly:
- the learn flow already exists
- the next job is expanding the route shell in a disciplined order

The right order is:
1. content + loaders
2. examples
3. explore
4. run visualizer
5. build

That gives the project the rest of its MVP skeleton without getting stuck on polish too early.

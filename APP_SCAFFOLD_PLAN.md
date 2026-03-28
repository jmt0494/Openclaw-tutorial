# App Scaffold Plan

This document is the final build-facing scaffold plan for the OpenClaw Interactive Tutorial MVP.

It consolidates the route, component, content, and milestone guidance from the current project docs into one practical execution plan.

This is the bridge between planning and coding.

---

## 1. Goal of this scaffold pass

Deliver a **navigable MVP shell** of the tutorial that is real enough to build on.

That means:
- the app runs locally
- the primary route families exist
- content is loaded from structured local data
- the learner can move through the course skeleton
- the examples area exists
- the explore area exists
- the run visualizer exists in simplified form
- the workflow builder has a real route and a minimal structured experience

This pass is about structure and truth, not polish.

---

## 2. Assumptions

This plan assumes the project already has at least part of the Learn flow and base app setup in place.

So this is **not** a greenfield bootstrap.
It is a **next scaffold pass** that expands the app into the full MVP route shell.

---

## 3. What counts as "real" in this pass

In this scaffold phase, these things must be real:
- route files
- slug-based page resolution
- typed local content modules
- content loaders
- cross-linkable lesson/concept/workflow data
- deterministic simulation scene data

These things may remain simple or placeholder-first:
- page polish
- advanced visuals
- graph interactions
- animation
- sophisticated builder UX
- progress persistence beyond local storage

Rule of thumb:
**placeholder UI is acceptable, placeholder data plumbing is not.**

---

## 4. Build order overview

The correct order for this scaffold pass is:

1. lock stack and directory conventions
2. add missing content/data foundations
3. add shared UI primitives
4. scaffold examples routes
5. scaffold explore routes
6. scaffold run visualizer
7. scaffold build route
8. verify the whole MVP route shell locally

This order is deliberate. It moves from low-risk static surfaces to more stateful ones.

---

## 5. Locked stack for this pass

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- typed local content modules
- thin content loaders
- local storage only for progress

Do not introduce yet:
- backend/database
- auth
- CMS
- live OpenClaw integration
- heavy global state libraries

---

## 6. Exact creation order

### Phase A — content and loader foundation

Create or finalize these folders first:

```text
content/concepts/
content/workflows/
content/simulations/
content/builder/
lib/content-loaders/
lib/types/
```

Then create or finalize these files in this order:

1. `lib/types/content.ts`
2. `lib/types/simulation.ts`
3. `lib/types/builder.ts`
4. `content/concepts/concepts.ts`
5. `content/workflows/workflows.ts`
6. `content/simulations/run-scenarios.ts`
7. `content/builder/builder-options.ts`
8. `content/builder/builder-rules.ts`
9. `lib/content-loaders/concepts.ts`
10. `lib/content-loaders/workflows.ts`
11. `lib/content-loaders/simulations.ts`
12. `lib/content-loaders/builder.ts`

Why first:
All remaining route families should render from data immediately, not hardcoded page text.

---

### Phase B — minimum shared UI primitives

Create these next:

1. `components/ui/Button.tsx`
2. `components/ui/Card.tsx`
3. `components/ui/Badge.tsx`
4. `components/ui/Callout.tsx`
5. `components/ui/EmptyState.tsx`

Keep them minimal and reusable.
Do not try to build a design system.

---

### Phase C — workflow/example components

Create these next:

1. `components/workflows/WorkflowCard.tsx`
2. `components/workflows/WorkflowSummary.tsx`
3. `components/workflows/WorkflowStepList.tsx`
4. `components/workflows/WorkflowExecutionStepper.tsx`

These unlock the Examples routes first.

---

### Phase D — concept/explore components

Create these next:

1. `components/concepts/ConceptCard.tsx`
2. `components/concepts/ConceptGrid.tsx`
3. `components/concepts/ConceptRelationshipList.tsx`
4. `components/concepts/ConceptMapPlaceholder.tsx`

The placeholder map is intentional. Do not block Explore on graph polish.

---

### Phase E — simulation components

Create these next:

1. `components/simulations/MessagePresetPicker.tsx`
2. `components/simulations/RunTimeline.tsx`
3. `components/simulations/RunStagePanel.tsx`
4. `components/simulations/ArtifactList.tsx`

These should be scene-driven and deterministic.

---

### Phase F — builder components

Create these next:

1. `components/builder/BuilderStep.tsx`
2. `components/builder/BuilderForm.tsx`
3. `components/builder/BuilderSummary.tsx`
4. `components/builder/WhyThisDesign.tsx`

Keep the builder simple in this pass.
Structured options in, deterministic summary out.

---

### Phase G — remaining route files

Create or finalize route files in this order:

1. `app/examples/page.tsx`
2. `app/examples/[workflowSlug]/page.tsx`
3. `app/explore/page.tsx`
4. `app/explore/concepts/[conceptSlug]/page.tsx`
5. `app/simulations/run-visualizer/page.tsx`
6. `app/build/page.tsx`

This is the recommended route build order too.

---

## 7. Route-by-route scaffold requirements

### Route 1 — `/examples`

Must render:
- page intro
- the 3 MVP workflow cards
- summary, trigger, and difficulty/pattern labels
- links to detail pages

Scaffold-complete when:
- index route renders from typed workflow data
- all workflow cards link correctly

---

### Route 2 — `/examples/[workflowSlug]`

Must render:
- workflow header
- workflow snapshot summary
- step list or stepper
- why-this-design section
- related lessons and concepts

Scaffold-complete when:
- at least one workflow detail page fully resolves from slug
- step sequence is visible and understandable without animation

---

### Route 3 — `/explore`

Must render:
- concept intro
- concept card grid or list
- category or grouping labels if available
- readable empty/placeholder state for future map work

Scaffold-complete when:
- all seeded concepts can be browsed
- the route works without a graph library

---

### Route 4 — `/explore/concepts/[conceptSlug]`

Must render:
- concept definition
- why it matters
- related concepts
- related lessons

Scaffold-complete when:
- concept pages resolve from slug
- cross-links work

---

### Route 5 — `/simulations/run-visualizer`

Must render:
- scenario selector
- stage timeline
- active stage explanation
- stage artifacts
- final output section

Scaffold-complete when:
- at least 2 deterministic scenes exist
- switching scenarios resets state correctly
- step forward/back works cleanly

---

### Route 6 — `/build`

Must render:
- intro
- guided option groups
- draft summary
- final recommendation area
- related example suggestions

Scaffold-complete when:
- a basic workflow summary can be generated from builder selections
- no backend or AI call is required

---

## 8. Minimum content package for the scaffold pass

The app should not be built against emptiness.
These content seeds should exist early.

### Required course shell
- course record
- module summaries for Modules 1 through 6
- roughly 15 to 25 lesson metadata records

### First fully authored lessons
At minimum, fully author these lessons first:
1. `1.2` The core mental model
2. `2.2` Context assembly
3. `3.2` Bootstrap files
4. `3.4` Memory vs chat history
5. `4.3` What should require approval
6. `6.2` Defining the trigger

These are the best foundation lessons because they explain the system model and support cross-linking.

### Compact support lesson set
Seed short-form content for the other early visible lessons so the modules feel real even before the full writing pass is done.

### Required concept set
Seed at least these first:
- agent
- workspace
- session
- tools
- channels
- routing
- context
- memory
- subagents
- trigger
- workflow
- approval
- guardrails

### Required workflow set
All 3 MVP workflows should exist immediately:
- Morning Briefing
- Research Assistant
- Recurring Maintenance Check

### Required simulation set
Seed at least 2 Run Visualizer scenes:
1. direct user message with tool use
2. scheduled briefing run

---

## 9. What may stay shallow in this pass

These can stay intentionally simple without blocking Milestone 1.

### Explore
Can begin as:
- concept card grid
- related concept lists
- static placeholder for future relationship map

### Example detail pages
Can begin as:
- structured sections
- vertical step list
- artifact summaries

### Run Visualizer
Can begin as:
- scenario buttons
- plain numbered stages
- simple artifact cards
- no animation

### Build
Can begin as:
- option groups
- plain text summary panel
- one or two warning callouts

### Non-priority lessons
Can begin as:
- summary paragraph
- objectives
- related concepts
- takeaway

---

## 10. First milestone for this scaffold plan

### Milestone 1: Full MVP route shell boots locally

Definition of done:
- app starts locally
- home route works
- learn flow works
- `/examples` works
- `/examples/[workflowSlug]` works
- `/explore` works
- `/explore/concepts/[conceptSlug]` works
- `/simulations/run-visualizer` works
- `/build` works
- all of the above render from typed local content
- no planned MVP route returns a 404

This is the first scaffold milestone that actually matters.
Not just “dev server starts,” but “the full route shell is real.”

---

## 11. Practical verification order

After the scaffold pass, verify in this order:

1. `npm run build`
2. `/`
3. `/learn`
4. one module page
5. one lesson page
6. `/examples`
7. one example detail page
8. `/explore`
9. one concept detail page
10. `/simulations/run-visualizer`
11. `/build`

This catches regressions in the existing Learn flow before checking the new surfaces.

---

## 12. Immediate next coding sequence

If we start coding right after this plan, the shortest sane sequence is:

1. finalize shared content types
2. create concept/workflow/simulation/builder seed files
3. add loaders for them
4. add minimal shared UI primitives
5. build `/examples` and `/examples/[workflowSlug]`
6. build `/explore` and concept detail pages
7. build `/simulations/run-visualizer`
8. build `/build`
9. run build and smoke-test the full route tree

---

## 13. What should wait until after this pass

Do not interrupt this scaffold pass for:
- graph polish
- animation polish
- advanced progress tracking
- drag-and-drop workflow canvas
- debugging lab
- live OpenClaw integration
- authentication or user accounts

Those are later-phase concerns.

---

## 14. Subagent use during this phase

Subagents are useful here for narrow, artifact-producing tasks like:
- defining content schemas in detail
- drafting first lesson bodies
- creating simulation scene data
- drafting builder rules
- drafting a reusable component map

Do not use subagents for vague instructions like:
- build the whole app
- figure everything out
- brainstorm generally

---

## 15. Plain-English summary

We are done planning at the broad level.

Now the job is:
- make the missing content/data foundations real
- scaffold the remaining route families in the right order
- keep the UI simple but honest
- get the full MVP shell running locally

After that, we can deepen content and interactivity instead of still talking about structure.

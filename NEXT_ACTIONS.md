# Next Actions

This document turns the current project artifacts into a single practical build sequence for the OpenClaw Interactive Tutorial MVP.

It is meant to answer one question clearly:

What do we build first?

---

## 1. Current project status

The project now has enough documentation to move from planning into implementation.

We have:
- product vision and scope
- syllabus and MVP teaching priorities
- screen and interaction notes
- frontend architecture guidance
- example workflow specs
- implementation phases and build loop guidance

That means the current bottleneck is no longer "what is this product?"
It is now "how do we scaffold the app and content in the right order?"

---

## 2. Build objective right now

Build the first working MVP shell of the tutorial.

That shell should prove five things:
- the course structure works
- lessons can be rendered cleanly
- the app navigation is coherent
- at least one simulation surface works
- example workflows can be explored in a structured way

---

## 3. What gets built first

### Priority 1: App scaffold

Build the project skeleton first.

This includes:
- app framework setup
- route structure
- shared layout
- top navigation
- basic page templates
- content loading foundation

Why first:
Because everything else depends on a stable place to live.

### Priority 2: Content model wiring

Implement the content model in code.

This includes typed data structures for:
- modules
- lessons
- concepts
- workflows
- simulation scenes

Why second:
Because the tutorial is content-heavy, and the screens should be driven by structured content rather than hardcoded page text.

### Priority 3: Core learning surfaces

Build these screens first:
- Home / Course Overview
- Learn Index
- Module Overview
- Lesson Screen

Why third:
These create the visible backbone of the product and let us start populating real lesson content.

### Priority 4: First interactive teaching surface

Build the Run Visualizer first out of the interactive tools.

Why first among interactions:
It teaches the core run model, supports multiple lessons, and is one of the strongest differentiators of the product.

### Priority 5: Example Workflow Viewer

Build the example workflow browsing and detail flow next.

Why next:
The workflow specs are already concrete, and the viewer helps bridge theory and practice.

### Priority 6: Workflow Builder

Build the Workflow Builder after the viewer.

Why after:
The builder is more valuable once the learner can already inspect examples and understand the system pieces.
It also depends on stable content structures and recommendation logic.

---

## 4. Recommended implementation sequence

### Step 1
Choose and lock the MVP stack.

Recommended choice:
- Next.js App Router
- TypeScript
- Tailwind CSS
- typed local content
- local storage for progress

### Step 2
Create the app scaffold.

Deliverable:
- working app with routes and shared layout

### Step 3
Create the shared content types and seed files.

Deliverable:
- initial content model implemented in code

### Step 4
Populate enough content to render the learning flow.

Minimum seed content:
- module summaries
- a few lesson records
- concept seed data
- workflow seed data

### Step 5
Build the lesson rendering path.

Deliverable:
- Home
- Learn index
- Module page
- Lesson page

### Step 6
Build the Run Visualizer with one or two preset scenarios.

Recommended first scenarios:
- direct user message with tool use
- scheduled briefing run

### Step 7
Build the Example Workflow Viewer using the 3 MVP workflows.

Deliverable:
- Examples index
- Example detail page with step timeline and artifact panel

### Step 8
Build the Workflow Builder MVP.

Deliverable:
- guided workflow design form
- generated summary and rationale
- related example suggestions

### Step 9
Add progress tracking.

Deliverable:
- mark lesson complete
- resume state
- module/course progress indicators

---

## 5. Immediate artifacts that should exist next

These are the most useful docs/code-planning artifacts still missing or worth finalizing before coding starts in earnest.

### A. APP_SCAFFOLD_PLAN.md
Should define:
- exact route setup
- initial file creation order
- what pages/components get stubbed first
- what can stay placeholder at first

### B. CONTENT_MODEL.md
Should define:
- lesson schema
- module schema
- concept schema
- workflow schema
- simulation scene schema

### C. ROUTES.md
Should define:
- route list
- route purpose
- route inputs
- page ownership/responsibility

These may already partially exist conceptually, but they should be finalized and normalized into the project folder if they are not already there.

---

## 6. First coding milestone

The first milestone should not be "build the whole app."

It should be:

**Milestone 1: Navigable tutorial shell**

Definition of done:
- app runs locally
- top navigation works
- Home page exists
- Learn index exists
- Module page exists
- Lesson page exists
- one lesson can be fully rendered from structured content

Why this is the right first milestone:
It proves the architecture, content model, and core learning flow before we spend time on more specialized interactivity.

---

## 7. Second coding milestone

**Milestone 2: First interactive teaching experience**

Definition of done:
- Run Visualizer works with at least one scenario
- one lesson links into it cleanly
- the user can step through stages and inspect artifacts

Why this matters:
This is where the product stops looking like a content site and starts feeling like an OpenClaw tutorial.

---

## 8. Third coding milestone

**Milestone 3: Example workflow exploration**

Definition of done:
- Examples index exists
- all 3 MVP workflows are represented
- detail pages show trigger, context, tools, output, risks, and step sequence

Why this matters:
This is the bridge from concept learning to workflow reasoning.

---

## 9. Fourth coding milestone

**Milestone 4: Workflow design tool**

Definition of done:
- learner can choose goal, trigger, tools, memory, output, and approval level
- builder produces a coherent workflow summary
- builder links to similar examples

Why this matters:
This is the first true synthesis feature in the product.

---

## 10. What should wait until after the shell is working

Do not prioritize these before the app shell and first teaching surfaces are real:
- Debugging Lab
- Guardrails Editor
- full concept graph polish
- advanced animation
- live OpenClaw integration
- user accounts
- complex persistence
- drag-and-drop workflow canvas

These are good backlog items, but they are not the critical path.

---

## 11. Role of subagents going forward

Subagents are now most useful for focused artifact production, not for vague planning.

Good subagent tasks from here:
- finalize app scaffold plan
- define content schemas in detail
- draft first lesson content
- create initial workflow-viewer data
- create run-visualizer scenario data
- draft reusable component map

Bad subagent tasks from here:
- "build the whole app"
- "figure everything out"
- generic brainstorming without a required artifact

---

## 12. Recommended next move

The single best next move is:

**Create `APP_SCAFFOLD_PLAN.md`, then begin scaffolding the app.**

That gives us a final pre-build execution map and lets us move from documentation into code with minimal ambiguity.

---

## 13. Plain-English summary

We are done with broad ideation.

The right order now is:
1. lock the app scaffold plan
2. scaffold the app
3. wire the content model
4. build the learning flow
5. build the Run Visualizer
6. build the Example Workflow Viewer
7. build the Workflow Builder

That is the shortest sane path to a real MVP.

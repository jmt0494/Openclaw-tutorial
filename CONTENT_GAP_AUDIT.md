# Content Gap Audit

## Snapshot

The app shell is now real and cross-linked, but the **Learn curriculum is still too thin to feel like a real tutorial**.

Current live seed status vs the bootstrap plan:
- **Modules seeded in app data:** 4 of 6 planned MVP modules (`1, 2, 3, 6`)
- **Lessons seeded in app data:** 8 total
- **Concepts seeded:** enough for a believable MVP concept layer
- **Workflow examples seeded:** all 3 required MVP workflows
- **Run visualizer scenarios seeded:** 3, now aligned with `CONTENT_MODEL.md`

Against `CONTENT_BOOTSTRAP_PLAN.md`, the biggest remaining gap is not route shell or simulations anymore. It is **course density and instructional continuity inside Learn**.

## Current strengths

- **Route shell is complete enough for MVP navigation.** Learn, Examples, Explore, Build, and Run Visualizer all exist.
- **Cross-linking is no longer fake.** Lessons, concepts, workflows, home-page featured content, and simulation links now connect like one system.
- **Workflow/example coverage is strong for the current stage.** All 3 MVP workflows exist with practical step lists, risks, and teaching value.
- **Concept layer is good enough to support discovery.** The core concept set is present and believable.
- **Run Visualizer is no longer under-seeded.** The 3-scenario set gives useful contrast across no-tools, tool-use, and scheduled-run shapes.
- **The written lesson seeds that do exist are solid.** The current 8 lessons are practical, not fluff, and establish the product voice well.

## Most important missing / weak content areas

### 1. The Learn path is underfilled relative to the promised MVP
This is the main problem.

The bootstrap plan calls for:
- all **6 MVP modules** in seed form
- roughly **15-25 lesson records**
- **8-12 compact support lessons** plus several full lessons

The live app has:
- only **4 modules** in `content/course/modules.ts`
- only **8 lesson records** in `content/lessons/lessons.ts`
- **no Module 4 or Module 5 lesson presence at all** in live course data

Result: the app feels like a strong prototype with selected lesson pages, not yet like a complete tutorial arc.

### 2. Safety/control content is missing from the visible course path
Module 4 is absent in the app data, even though safety is positioned in the docs as core MVP material, not optional appendix material.

This matters because without lessons like:
- **4.1 Trust boundaries**
- **4.3 What should require approval**
- **4.5 Designing standing orders and guardrails**

…the learner sees capability and workflow design, but not enough of the discipline that makes OpenClaw trustworthy.

### 3. Workflow-pattern teaching is missing from Learn even though examples exist
Module 5 is absent in the live course data.

That creates a structural mismatch:
- the **Examples** area has believable workflows
- but the **Learn** path does not yet teach the reusable patterns behind them

The tutorial therefore has examples to inspect, but too little guided explanation for how to generalize them.

### 4. Module 3 and Module 6 are still skeletal compared to the lesson map
Current coverage in those modules is selective and good, but too narrow.

Important missing lessons from the lesson map/bootstrap docs include:
- **3.1 Workspaces: where the agent lives**
- **3.3 Sessions and why they matter**
- **3.5 Tools: read, write, exec, web, sessions, and more**
- **3.9 Subagents and isolated work**
- **6.1 Picking the right first workflow**
- **6.4 Choosing the right tools and skills**
- **6.6 When to use main session, isolated sessions, or subagents**
- **6.7 Designing for approval versus autonomy**

These are exactly the lessons that make the product feel practical rather than merely descriptive.

### 5. Lesson schema/content expectations still outrun the live lesson model
The docs still describe richer lesson metadata than the current code supports.

The app lesson type currently lacks several fields repeatedly expected in planning docs, including things like:
- lesson `status`
- `difficulty` / depth split beyond prose
- `prerequisites`
- `relatedWorkflowIds` / related examples as first-class data
- explicit interactive refs like `interactiveType` / `interactiveAssetId`
- richer content blocks such as concept-links, related-links, comparison blocks

This is not a blocker for authoring more lessons right now, but it is noticeable doc/code drift.

## Which exact lessons should be deepened next

If the goal is to make the app feel like a **real tutorial quickly**, these are the highest-value next lessons:

### First priority: fill the missing instructional spine
1. **4.3 What should require approval**
2. **5.2 The scheduled briefing pattern**
3. **5.4 The research pipeline pattern**
4. **6.7 Designing for approval versus autonomy**

Why these first:
- they connect directly to already-seeded workflows and builder choices
- they add badly needed safety + design judgment
- they make the tutorial feel more like workflow education and less like only a systems glossary

### Second priority: shore up core system literacy
5. **3.1 Workspaces: where the agent lives**
6. **3.3 Sessions and why they matter**
7. **3.5 Tools: read, write, exec, web, sessions, and more**
8. **3.9 Subagents and isolated work**

### Third priority: finish the Module 6 payoff path
9. **6.1 Picking the right first workflow**
10. **6.4 Choosing the right tools and skills**
11. **6.6 When to use main session, isolated sessions, or subagents**

## Recommended authoring order for the next 3-6 content tasks

## Recommended next 5 tasks

### Task 1
**Add Module 4 to live course data and author 2 compact-to-strong lessons:**
- 4.1 Trust boundaries
- 4.3 What should require approval

Reason:
This immediately closes the most serious curriculum hole and gives the builder/examples a needed safety frame.

### Task 2
**Add Module 5 to live course data and author 2 pattern-anchor lessons:**
- 5.2 The scheduled briefing pattern
- 5.4 The research pipeline pattern

Reason:
These pair cleanly with the already-built workflow examples and make the Examples area feel intentionally taught, not just browsable.

### Task 3
**Deepen Module 6 with decision-making lessons tied to the builder:**
- 6.1 Picking the right first workflow
- 6.7 Designing for approval versus autonomy

Reason:
This gives the Build route stronger instructional support and creates a real capstone arc.

### Task 4
**Expand Module 3 with operational building-block lessons:**
- 3.1 Workspaces
- 3.3 Sessions
- 3.5 Tools

Reason:
These are practical, high-frequency concepts the current app still under-teaches.

### Task 5
**Add one more advanced-but-MVP-relevant bridge lesson:**
- 3.9 Subagents and isolated work **or** 6.6 main session vs isolated session vs subagents

Reason:
This is one of the clearest “OpenClaw is more than chat” differentiators and connects well to existing examples and simulations.

## Best practical sequencing call

If only one chunk is done next, it should be:

**Module 4 + Module 5 lesson pack before anything else.**

That is the fastest way to make the tutorial feel complete enough to teach workflow judgment rather than only mechanics.

## Doc/code drift noticed

### 1. MVP module coverage drift
Planning docs consistently describe **6 MVP modules** in the live learning path.
Current code only ships:
- Module 1
- Module 2
- Module 3
- Module 6

Missing from live course/module data:
- **Module 4: Safety, Control, and Boundaries**
- **Module 5: Workflow Patterns That Actually Work**

### 2. Lesson-count drift
Bootstrap guidance expects roughly **15-25 lesson records** for Milestone 1 / stronger MVP density.
Current lesson seed file contains **8**.

### 3. Lesson-model drift
`CONTENT_BOOTSTRAP_PLAN.md` and `MVP_LESSON_MAP.md` expect lesson metadata such as:
- `depth`
- `keyTerms`
- `interactiveType`
- `interactiveAssetId`
- `prerequisites`
- `nextLessons`
- `relatedExamples`
- `takeaway`

But `lib/types/content.ts` currently uses a slimmer lesson type and does not model several of those fields.

### 4. Content-model drift on workflows/lessons
The planning docs describe richer first-class relationship fields than the live app uses. Some relationships are currently derived honestly at render time, which works, but the authored model is still thinner than the docs imply.

### 5. Mild terminology drift
The docs sometimes describe the builder as covering **skills** explicitly, while the live builder options are mostly framed as tool/context/memory/output/approval choices. Not severe, but worth keeping naming aligned when authoring `6.4 Choosing the right tools and skills`.

## Bottom line

The project no longer has a shell problem.
It now has a **content-density problem**, specifically in the Learn path.

The single highest-value bottleneck is:

**missing Module 4 and Module 5 lesson coverage, especially safety/approval and workflow-pattern lessons that connect the existing examples and builder into a believable tutorial arc.**

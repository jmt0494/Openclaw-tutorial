# Review — Module 6 / Build Polish Pass

## Verdict

**Mostly yes: this pass materially addresses the stated bottleneck, but it does not fully close it.**

The bottleneck in `CURRENT_BOTTLENECK.md` was not missing route shell or missing lesson coverage anymore; it was **lesson depth plus lesson-to-surface teaching polish**, especially for the Module 6 -> Build handoff.

This pass clearly improves the **lesson depth** side of that bottleneck and makes the Build page read much more like the practical continuation of Module 6. The scoped copy work is disciplined and file-aligned.

What it does **not** fully solve is the **handoff mechanics** side: the new Build CTAs inside lessons are stronger as teaching copy, but they are still mostly **textual guidance embedded in callouts**, not explicit navigable handoff affordances. So the pass moves the project from “thin capstone teaching” to “solid capstone teaching,” but not yet to “explicit interactive teaching system.”

---

## What the pass gets right

### 1. The four target Module 6 lessons are meaningfully deeper
In `content/lessons/lessons.ts`, the pass is not just light rewording.

#### `m6-2` — Defining the Trigger
This now does the right teaching work:
- frames trigger as the **start of the workflow contract**
- compares **message** vs **schedule** using live seeded workflows (`research-assistant` vs `morning-briefing`)
- includes a concrete **failure-mode list**
- ends with a Build-directed trigger-first CTA

That directly addresses the brief and helps the learner make the first major Build decision more deliberately.

#### `m6-4` — Choosing the Right Tools and Skills
This is probably the strongest lesson in the pass.
It now:
- teaches the **minimum viable toolset** idea clearly
- maps the builder’s live tool choices (`read`, `write`, `web search + fetch`, `exec`) into plain language
- compares those tools across the three seeded workflows
- gives a specific “smallest toolset” CTA

This is exactly the kind of depth the bottleneck description called for.

#### `m6-5` — Deciding Where Memory Should Live
This now gives a much better practical contrast between:
- minimal memory
- lightweight workflow state
- report history

It also maps those choices to live workflows in a clean way:
- `research-assistant` -> minimal memory
- `morning-briefing` -> lightweight workflow state
- `recurring-maintenance-check` -> report history

That is a real improvement over generic memory talk.

#### `m6-7` — Designing for Approval Versus Autonomy
This now feels like an actual capstone lesson.
It adds:
- a strong observation-vs-change contrast
- direct tie-in to `recurring-maintenance-check`
- a useful “approve the risky edge, not the whole run” checklist
- a final Build-directed CTA that correctly positions approval as the last design choice

This lesson now matches the intended teaching role much better.

---

### 2. `app/build/page.tsx` now reads like Module 6 in action
The Build page intro is noticeably better aligned with the curriculum.

What improved:
- it explicitly frames Build as **“Module 6 in action”**
- it names the relevant choices: **trigger, context, tools, memory, output, approval posture**
- it tells the learner to compare against the seeded workflow examples on the page
- the three explainer cards now reinforce the right teaching sequence:
  1. start with trigger
  2. keep tools and memory narrow
  3. gate the risky edge

This is a good capstone-page polish pass, and it stays within scope.

---

### 3. `content/builder/builder-options.ts` now mirrors the lesson language better
The four requested builder option descriptions were sharpened in the right direction:
- **trigger** -> now clearly described as the start of the workflow contract
- **tools** -> emphasizes minimum viable toolset
- **memory** -> emphasizes repetition prevention vs needed history
- **approval** -> emphasizes gating the consequential edge, not harmless prep

This matters because it reduces conceptual drift between the Learn route and Build route.

---

### 4. `content/workflows/workflows.ts` better supports Module 6 comparison
The seeded workflows now do a better job reinforcing the target decisions.

Most useful improvements:
- `morning-briefing` more clearly supports trigger + lightweight state lessons
- `research-assistant` more clearly supports message trigger + evidence/tool choice
- `recurring-maintenance-check` more clearly supports exec/report-history/approval posture

The updated `whyThisDesign` and `commonFailureModes` copy makes the workflows more useful as comparison anchors from the Build page.

---

## Where the pass falls short or drifts

### 1. The Build CTAs are better teaching copy, but still weak as actual handoffs
This is the main remaining weakness.

In `content/lessons/lessons.ts`, the four Module 6 lessons now contain explicit Build instructions, but those CTAs are implemented as **callout text**, not as clearly actionable navigation.

Examples:
- `m6-2`: “Open Build and pick only the trigger first...”
- `m6-4`: “Open Build and select the smallest toolset...”
- `m6-5`: “Open Build and choose the lightest memory option...”
- `m6-7`: “Open Build and set the approval posture last...”

That is better than generic related links, but it still leaves the learner to do the mental and navigational jump themselves.

**Why this matters:**
The bottleneck was specifically about **lesson-to-surface teaching polish**. This pass improves the words, but the handoff is still largely rhetorical rather than interactive.

So the pass solves the **content depth** half strongly and the **surface handoff** half only partially.

---

### 2. The improvement is concentrated in copy, not in visible lesson interaction
This is not a scope violation; it is just the limit of what was achieved.

The brief explicitly said not to redesign the renderer or broader architecture, and the pass respects that. But the result is that the lessons are still fundamentally **static reading blocks with embedded instructions**.

That means the project still has this remaining gap:
- lessons tell the learner what to do next
- but the lesson surface does not make the next move especially frictionless or explicit

This is not a regression. It is just the clearest unfinished piece.

---

### 3. Slight overreach in Build intro wording, but acceptable
The brief said to keep the page tightly focused on:
- trigger
n- tools/memory narrowness
- approval at the risky edge

`app/build/page.tsx` also mentions **context** and **output** in the main paragraph. That is not harmful, and those are real builder choices, so I would not call it a problem. But it is a mild scope-softening compared with the sharper Module 6 emphasis from the brief.

This is acceptable drift, not bad drift.

---

## Obvious regressions?

**No obvious regressions surfaced in the reviewed files.**

Specifically:
- scope stayed bounded to the four requested files
- no new lesson IDs or curriculum restructuring appeared
- the Build page is more aligned, not less
- the builder option copy is more coherent with the lessons
- workflow metadata is more useful for comparison than before

I do **not** see evidence in the reviewed files of:
- broken Module 6 sequencing
- conceptual contradiction between lessons and builder options
- accidental redesign of the builder
- broadened scope into unrelated surfaces

The remaining issue is incompleteness of the handoff, not regression.

---

## Does it address the stated bottleneck?

### Short answer
**Yes, substantially but not completely.**

### Why
The bottleneck had two parts:
1. **lesson depth**
2. **lesson-to-surface teaching polish**

This pass does very well on **(1)**.
It does moderately well on **(2)**.

If I score it against the bottleneck:
- lesson depth improvement: **strong**
- Build alignment improvement: **strong**
- interactive handoff improvement: **partial**

So the project is in a better state after this pass, but the most valuable remaining gap is now even clearer.

---

## Single best next bounded task

### Recommendation
**Add explicit clickable Build handoff support to lesson pages, then use it for the four polished Module 6 lessons.**

### Why this is the best next task
This directly targets the main unfinished part of the bottleneck:
- the content now tells the learner what to do
- the UI still does not make that next move especially explicit

A small, bounded implementation could add a dedicated lesson CTA card/button pattern that:
- links directly to `/build`
- includes decision-specific copy per lesson
- optionally carries a short “what to choose when you get there” instruction

### Best scope for that task
Keep it tight:
- add one lightweight lesson CTA renderable pattern or structured CTA block
- wire it only into:
  - `m6-2`
  - `m6-4`
  - `m6-5`
  - `m6-7`
- each CTA should point to `/build`
- each CTA should preserve the lesson-specific action:
  - pick trigger first
  - choose smallest toolset
  - choose lightest memory
  - set approval last

### Why this beats other next steps
This is better than adding more lessons or broadening other routes because:
- the Module 6 content is now good enough to support it
- the Build page is already aligned enough to receive it
- it finishes the exact teaching-system gap that this pass exposed

---

## Bottom line

This was a **good and properly scoped pass**.

It **does address the stated bottleneck** by making Module 6 feel much more like a real capstone cluster and by aligning the Build route, builder option copy, and seeded workflows around the same design decisions.

But it stops just short of fully solving the bottleneck, because the most important CTAs are still **textual instructions rather than explicit lesson-to-Build handoff UI**.

### Final judgment
**Approve the pass as successful, with one clear follow-up:**
implement a lightweight clickable Build CTA pattern for the four polished Module 6 lessons.
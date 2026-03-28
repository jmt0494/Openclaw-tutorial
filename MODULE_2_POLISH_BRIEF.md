# Module 2 Polish Brief

## Recommendation in one sentence

The best next one-sitting pass is a **Module 2 guided Run Visualizer handoff pass**: deepen lessons `m2-1`, `m2-2`, `m2-3`, and `m2-5` so they explicitly teach against the **current live scenarios** and make the learner do a concrete compare/inspect flow instead of just seeing generic related cards.

## Why this is the right next pass

Module 2 already has the right core topics and the Run Visualizer already exists as a real surface. The gap is not missing coverage anymore; it is **teaching depth and handoff quality**.

Right now the live app can honestly show run anatomy, but Module 2 still feels a bit like:
- compact explanation blocks
- then generic related links
- instead of a tightly guided "learn this -> inspect this exact scenario -> notice this exact difference" sequence

That makes the app feel thinner than it really is.

## Top weak spots in the current Module 2 experience

### 1) `m2-1` and `m2-2` are accurate but still too abstract
These lessons explain intake/routing and context assembly well enough, but they do not cash out strongly enough against the visualizer's visible stages.

What is missing:
- stronger naming of the exact scenario comparisons already available
- clearer explanation of how main-session vs scheduled-run routing changes the run
- clearer "what to look at on the visualizer screen" guidance

### 2) `m2-3` has the right idea, but the comparison is still too light
`m2-3` is the natural teaching centerpiece for Module 2, because the live app already has:
- `simple-answer-no-tool-calls`
- `direct-user-message-with-tool-use`

But the lesson still stops short of a crisp guided exercise. It says what to compare, but does not yet feel like a mini lab.

### 3) `m2-5` diagnoses symptoms, but the handoff to visible evidence is still weak
`m2-5` is supposed to help beginners stop calling everything "AI randomness." The live visualizer is perfect for that. But the lesson still reads more like explanation than diagnosis practice.

What is missing:
- tighter symptom -> stage mapping
- stronger use of `scheduled-briefing-run` to explain why "slow" often just means more stages
- stronger use of session/routing differences to explain "inconsistent"

### 4) The current lesson surface still treats simulations like related reading, not a next action
`LessonRenderer.tsx` currently presents simulations as a normal related-card section near the bottom. Honest, but weak as a teaching handoff.

The learner likely needs a more explicit cue that says, in effect:
- go open this scenario now
- compare these two stages
- then come back

## Single bounded implementation pass

## Pass name
**Module 2 Guided Visualizer Pass**

## Goal
Make Module 2 feel like the first truly interactive teaching cluster by using the existing lesson schema and the existing Run Visualizer data more deliberately.

## Exact lessons to touch
In `content/lessons/lessons.ts`:
- `m2-1`
- `m2-2`
- `m2-3`
- `m2-5`

## Exact product surfaces/files to touch

### Must touch
- `content/lessons/lessons.ts`

### Nice-to-have, only if still clearly one-sitting scoped
- `components/lessons/LessonRenderer.tsx`

## What Otto should do in that pass

### 1) Deepen the four Module 2 lessons inside the current schema
Stay within the current block types already supported by `LessonRenderer.tsx`:
- `rich-text`
- `list`
- `example`
- `callout`
- `checkpoint`

That means no schema expansion is required for the main value.

Suggested content changes:

#### `m2-1` — stronger routing contrast
Add one more block or two that explicitly contrasts:
- `simple-answer-no-tool-calls`
- `scheduled-briefing-run`

Teach the learner to notice:
- message-triggered intake vs schedule-triggered intake
- current conversation vs recurring workflow lane
- why routing changes what context is even eligible to load

#### `m2-2` — make context assembly more inspectable
Add a practical "look at these panels" lesson beat tied to the visualizer's current UI:
- System pieces
- Workspace files
- Memory
- Session history

The lesson should explicitly tell the learner that these panels are the visible explanation for why two runs can behave differently.

#### `m2-3` — turn it into a small compare exercise
This should be the strongest lesson in the pass.

Have the lesson explicitly instruct the learner to compare:
- `simple-answer-no-tool-calls`
- `direct-user-message-with-tool-use`

And notice:
- where the no-tool run goes straight from available context to answer
- where the tool-use run adds planning + tool stages
- that tool output becomes fresh context for the same run

This can be done with richer copy plus an added list/example/checkpoint set.

#### `m2-5` — sharpen symptom -> cause debugging
Use the three current scenarios more explicitly:
- passive -> often vague contract / wrong trigger / missing tools or approvals
- slow -> compare direct-answer run vs scheduled workflow with more stages
- inconsistent -> compare routing/session/context differences

This lesson should feel like "beginner debugging with evidence," not just a concept recap.

### 2) If time remains, make the simulation handoff more explicit in `LessonRenderer.tsx`
A very small renderer polish is justified if Otto still has time after the copy pass.

Keep it bounded:
- do **not** add new lesson schema
- do **not** add stateful lesson interactions
- do **not** rebuild lesson layout

Only consider a tiny UX polish such as:
- changing the related simulations section title to something more action-oriented for lessons that have simulation links
- adding one short helper line above simulation cards like "Open one of these in the Run Visualizer and compare the stages described above."

If that starts to grow, skip it and keep the pass content-only.

## Recommended implementation boundary

### Do touch
- lesson copy depth
- stronger scenario-specific examples
- stronger visualizer-oriented checkpoints
- explicit use of current scenario slugs already wired into the app
- maybe one tiny `LessonRenderer.tsx` wording polish

### Do NOT touch
To avoid scope creep, Otto should **not** do any of the following in this pass:
- do not invent new lesson block types or change the lesson schema
- do not redesign the lesson page layout
- do not rebuild the Run Visualizer UI or add complex interactivity there
- do not add new scenarios
- do not broaden beyond Module 2
- do not start a generic whole-app CTA redesign
- do not retune examples/explore/build cross-linking outside the targeted lessons

## Why this fits the current live app

This pass works because the app already has the needed teaching surfaces:
- live Module 2 lessons
- deterministic scenario slugs
- a visualizer with visible context panels, stages, artifacts, and final output
- a renderer that already supports enough block types for a much richer teaching experience

So the best next move is not more infrastructure. It is **better authored teaching against the infrastructure that already exists**.

## Small acceptance checklist

- [ ] `m2-1`, `m2-2`, `m2-3`, and `m2-5` all feel materially deeper than seed-level lessons
- [ ] each of those lessons points to at least one exact existing Run Visualizer scenario by purpose
- [ ] `m2-3` clearly teaches the no-tool vs tool-use comparison as the module's key exercise
- [ ] `m2-5` clearly maps passive / slow / inconsistent to likely run-stage causes
- [ ] no lesson schema changes were required
- [ ] any renderer tweak stayed copy-level and did not become a layout project

## Best next task for Otto

**Do a content-first "Module 2 Guided Visualizer Pass" in `content/lessons/lessons.ts` for `m2-1`, `m2-2`, `m2-3`, and `m2-5`, using the existing Run Visualizer scenarios as explicit guided compare/debug exercises.**

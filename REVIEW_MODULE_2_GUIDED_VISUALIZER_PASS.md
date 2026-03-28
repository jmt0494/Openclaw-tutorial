# Review — Module 2 Guided Visualizer Pass

## Verdict

**Mostly yes — this pass does address the stated bottleneck.**

The bottleneck in `CURRENT_BOTTLENECK.md` was not missing route shell or missing lesson coverage anymore; it was **lesson depth plus sharper lesson-to-surface teaching polish**, especially for **Module 2 / Run Visualizer teaching polish**. The changes in `content/lessons/lessons.ts` and `components/lessons/LessonRenderer.tsx` line up with that goal.

## What the pass clearly improved

- `m2-1` now teaches routing through a concrete contrast between:
  - `simple-answer-no-tool-calls`
  - `scheduled-briefing-run`
- `m2-2` now points learners explicitly at the visualizer's context panels instead of talking about context assembly only in abstract terms.
- `m2-3` now has the right core exercise: **no-tool vs tool-use** comparison.
- `m2-5` now maps the user-facing symptoms (**passive / slow / inconsistent**) back to visible run-stage causes.
- `LessonRenderer.tsx` improves the CTA from generic related links to a more action-oriented guided section:
  - title changed to **"Try this in the Run Visualizer"**
  - helper copy now tells the learner what to do and come back to compare against the lesson
  - exercise cards now include **why now** and **what to inspect**, which is the most important teaching upgrade in this pass

That is a real instructional improvement, not just copy churn.

## Why I think it addresses the bottleneck

The stated problem was that lessons still felt compact and their interactive handoff was too generic. This pass improves both of those exact points:

1. **Depth:** the Module 2 lessons are no longer just short seed summaries; they now teach through comparison and inspection tasks.
2. **CTA quality:** the lesson-to-visualizer handoff is now explicit enough that a beginner can do something concrete instead of merely clicking a related card.
3. **Honesty to live surfaces:** all exercises point to existing scenarios/slugs rather than inventing nonexistent interactions.

So the pass is directionally correct and materially useful.

## Obvious regressions or drift

### 1. The renderer now promises a little more than the product fully delivers
The helper copy says:

> "Do one of these guided checks now, then come back and see whether the lesson still matches what you observed."

That is good copy, but the app still does not appear to track completion, preserve a lesson-side checklist state, or otherwise support a true structured return loop. This is not a bug, but it is a small **expectation drift**: the UX language is now more guided than the lesson surface itself.

### 2. Module 2 got noticeably richer than adjacent modules
That was intentional, but it does create a mild content-balance issue. Module 2 now has guided exercises with stronger pedagogy while nearby lessons in other modules still read more like standard static content. Again, not a regression, but the contrast is now more visible.

### 3. The CTA polish is lesson-side only
`MODULE_2_GUIDED_VISUALIZER_PASS.md` is honest about this. The main teaching gain comes from better prompts on the lesson page, not from new affordances inside the Run Visualizer itself. That means the bottleneck is improved, but not fully closed.

## No obvious code-level regression in the reviewed files

Within the reviewed scope:

- No schema drift was introduced in the pass itself; it stays within the existing `simulationExercises` shape.
- `LessonRenderer.tsx` still has a sensible fallback path when guided exercises are absent.
- The guided cards render using scenario lookups from `relatedSimulationScenarios`, which is a reasonable non-invasive implementation.

I did **not** see an obvious teaching regression in the reviewed files.

## Single best next bounded task

**Add lightweight in-visualizer lesson prompts for the same Module 2 scenarios, keyed by scenario slug.**

Why this is the best next step:

- It completes the handoff that this pass started.
- It stays bounded: only a few Module 2 scenarios need small teaching callouts.
- It improves the learning loop more than adding more lesson prose would.
- It reduces the current drift where lessons feel guided but the visualizer itself remains purely inspectable.

### Suggested task shape
For these scenarios:
- `simple-answer-no-tool-calls`
- `direct-user-message-with-tool-use`
- `scheduled-briefing-run`

Add a small visualizer-side teaching panel such as:
- **What this scenario is for**
- **What to inspect first**
- **What contrast to compare next**

That would turn the current lesson CTA from "good guided link" into an actual two-way teaching path.

## Bottom line

This was a good bounded pass. It **does** address the stated bottleneck, especially on the lesson-depth and CTA-guidance side. The main remaining gap is that the guidance now lives mostly on the lesson page; the Run Visualizer itself still needs a small amount of instructional scaffolding to finish the teaching loop.
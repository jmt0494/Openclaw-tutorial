# Module 2 Guided Exercises Pass

## What changed

Implemented a bounded MVP polish pass that turns Module 2 lesson-to-visualizer links into guided exercises instead of generic related cards.

### Added lesson data support
- Extended `LessonRecord` with optional `simulationExercises`
- Each exercise includes:
  - `scenarioSlug`
  - `title`
  - `whyNow`
  - `focusPoints`

### Seeded guided exercises for Module 2
Added explicit Run Visualizer exercises to:
- `m2-1` Intake and Routing
- `m2-2` Context Assembly
- `m2-3` Model Response and Tool Calls
- `m2-5` Why Agents Sometimes Feel Passive, Slow, or Inconsistent

These now tell the learner exactly what to inspect in each scenario instead of only offering a generic click-through.

### Renderer update
- Updated `components/lessons/LessonRenderer.tsx`
- The visualizer section now prefers guided exercise cards when a lesson provides them
- Existing plain related-simulation behavior remains as a fallback for lessons that do not yet have exercise data

## Why this matters

This directly addresses the current bottleneck identified in project notes:
- the Learn spine existed
- the Run Visualizer existed
- but the handoff between them still felt too generic

The lesson page now behaves more like a teaching surface and less like a link hub.

## Files touched
- `lib/types/content.ts`
- `content/lessons/lessons.ts`
- `components/lessons/LessonRenderer.tsx`
- `MODULE_2_GUIDED_EXERCISES_PASS.md`

## Verification
- `npm run build` ✅ passed

## Likely next bottleneck

If this pattern works, the next highest-value follow-up is probably one of:
1. apply the same guided-exercise pattern to Module 6 / Build handoffs
2. deepen lesson-to-example workflow handoffs in Modules 5 and 6
3. add lightweight in-visualizer prompts so the simulation surface itself feels more explicitly guided

# Module 2 Guided Visualizer Pass

## What changed

Completed one bounded Module 2 teaching-depth pass focused on guided handoff into the existing Run Visualizer.

### Lesson updates
- Deepened `m2-1` so intake/routing now explicitly contrasts:
  - `simple-answer-no-tool-calls`
  - `scheduled-briefing-run`
- Deepened `m2-2` so context assembly now points learners directly at the visualizer's current top panels:
  - System pieces
  - Workspace files
  - Memory
  - Session history
- Deepened `m2-3` into a clearer compare exercise between:
  - `simple-answer-no-tool-calls`
  - `direct-user-message-with-tool-use`
- Deepened `m2-5` so passive / slow / inconsistent symptoms map more directly to likely run-stage causes using the three live scenarios.

### Renderer copy polish
- Changed the simulations section title from a passive related-links label to a more action-oriented prompt:
  - `Try this in the Run Visualizer`
- Added one short helper sentence encouraging learners to open a scenario, inspect the stages, then return to the lesson.

## Acceptance checklist
- [x] `m2-1`, `m2-2`, `m2-3`, and `m2-5` feel materially deeper than seed-level lessons
- [x] each targeted lesson points to exact existing Run Visualizer scenarios by purpose
- [x] `m2-3` now teaches the no-tool vs tool-use comparison as the key exercise
- [x] `m2-5` now maps passive / slow / inconsistent to likely run-stage causes more explicitly
- [x] no lesson schema changes were required
- [x] renderer tweak stayed copy-level and did not become a layout project
- [x] `npm run build` passed

## Files touched
- `content/lessons/lessons.ts`
- `components/lessons/LessonRenderer.tsx`
- `MODULE_2_GUIDED_VISUALIZER_PASS.md`

## Limitations
- This pass stayed within the existing lesson schema and static lesson surface; it does not add interactive in-lesson state or new block types.
- The Run Visualizer itself was not redesigned or expanded.
- The CTA polish is copy-only, not a broader lesson-page UX overhaul.

# Module 6 Build CTA pass note

## What changed
- Added one minimal `action-cta` lesson content block type for explicit lesson-to-Build handoffs.
- Rendered that CTA as a clickable Build card with a short checklist in `LessonRenderer`.
- Replaced the old prose-only Build callouts in Module 6 lessons `m6-2`, `m6-4`, `m6-5`, and `m6-7` with explicit `/build` CTAs that preserve the lesson-specific instruction.

## Files touched
- `lib/types/content.ts`
- `components/lessons/LessonRenderer.tsx`
- `content/lessons/lessons.ts`

## Notes
- Scope stayed tight: no route changes, no builder logic changes, no curriculum restructuring.
- `CURRENT_BOTTLENECK.md` was left unchanged in this pass.

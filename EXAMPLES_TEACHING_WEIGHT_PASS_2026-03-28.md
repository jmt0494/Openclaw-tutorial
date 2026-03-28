# Examples Teaching Weight Pass — 2026-03-28

## What changed

Implemented one bounded teaching-weight pass for `/examples/[workflowSlug]` so the workflow detail pages act more like instructional destinations and less like static reference pages.

### Added structured teaching metadata for the three seeded workflows
Added per-workflow teaching fields to the workflow content model and seeded them for:
- `morning-briefing`
- `research-assistant`
- `recurring-maintenance-check`

New teaching metadata includes:
- `lessonLens`
- `whyItMattersNow`
- `inspectChecklist`
- `compareWorkflowSlugs`
- `relatedLessonsIntro`
- `relatedSimulationsIntro`

### Strengthened the workflow detail page
Updated `/examples/[workflowSlug]` to render:
- a compact **How to study this example** panel near the top
- a **Lesson lens** explanation
- a **Why this workflow matters** explanation
- a **What to inspect first** checklist
- **Compare this against** workflow links in the execution section
- a reframed **Guided next steps** area so related lessons and related simulations feel like instructional follow-through instead of generic backlinks

### Scope discipline
- No new route families
- No app-wide architecture redesign
- Changes stayed grounded in the three seeded workflows only
- Buildability preserved

## Files touched

- `lib/types/content.ts`
- `content/workflows/workflows.ts`
- `app/examples/[workflowSlug]/page.tsx`

## Verification

Ran:
- `npm run build`

Result:
- Build passed successfully

## Next likely bottleneck

The examples detail pages now carry more teaching load, but the next likely bottleneck is **making the strongest remaining lesson clusters outside Modules 2, 5, and 6 land with equally explicit guided handoffs**.

Best bounded follow-up:
- add the same explicit handoff quality to the strongest Module 3 lessons, especially where learners should jump from core mechanics into Examples, Explore, or Build with a concrete inspection task

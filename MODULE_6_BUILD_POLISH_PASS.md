# Module 6 / Build Polish Pass

## What changed

Completed one bounded Module 6 -> Build integration polish pass focused on lesson depth, clearer capstone handoff, and tighter copy alignment with the live builder.

### Lesson deepening
Expanded these lessons in `content/lessons/lessons.ts`:
- `m6-2` — deepened trigger teaching with a message-vs-schedule compare, failure-mode list, and explicit Build-first trigger CTA
- `m6-4` — deepened minimum-viable-toolset teaching with concrete mapping to the live builder tools and the three seeded workflows, plus a smallest-toolset Build CTA
- `m6-5` — deepened memory teaching with a contrast between minimal memory, lightweight workflow state, and report history, plus a memory-selection Build CTA
- `m6-7` — deepened approval teaching with an observation-vs-change contrast tied to the maintenance workflow, a risky-edge checklist, and a final capstone Build CTA

### Build route copy polish
Updated `app/build/page.tsx` so the top-of-page copy reads as Module 6 in action and the three explainer cards now reinforce:
1. start with trigger
2. keep tools and memory narrow
3. gate the consequential action

### Builder option copy polish
Updated `content/builder/builder-options.ts` descriptions for:
- trigger
- tools
- memory
- approval

These now mirror the lesson language more closely.

### Workflow metadata/copy polish
Updated `content/workflows/workflows.ts` to strengthen lesson adjacency and comparison value for:
- `morning-briefing`
- `research-assistant`
- `recurring-maintenance-check`

This included tighter wording around trigger fit, state/history use, evidence/tool choice, and approval posture.

## Files touched
- `content/lessons/lessons.ts`
- `app/build/page.tsx`
- `content/builder/builder-options.ts`
- `content/workflows/workflows.ts`

## Build verification
- Ran `npm run build`
- Result: passed successfully

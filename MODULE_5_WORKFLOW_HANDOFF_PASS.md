# Module 5 Workflow Handoff Pass

## What changed

Completed a bounded lesson-to-Examples integration pass for the Module 5 workflow-pattern cluster.

### Renderer support
Generalized the existing `action-cta` lesson block very slightly so it can support handoffs beyond `/build` without introducing a new block family.

Added optional fields:
- `eyebrow`
- `checklistTitle`

This preserves the existing Module 6 Build CTA behavior while allowing lesson-specific CTA framing for other surfaces.

### Seeded explicit Examples handoffs for Module 5
Added concrete example-driven CTAs to these lessons in `content/lessons/lessons.ts`:
- `m5-1` Chat Assistant Pattern -> `Research Assistant`
- `m5-2` Scheduled Briefing Pattern -> `Morning Briefing`
- `m5-4` Research Pipeline Pattern -> `Research Assistant`
- `m5-6` Delegate Pattern -> `Recurring Maintenance Check`

Each CTA now gives the learner:
- a live destination route
- a reason that example fits the lesson
- a short inspection checklist so the click feels like the next teaching step rather than a generic related link

## Why this matters

This addresses the current bottleneck described in `CURRENT_BOTTLENECK.md`:
- Module 5 contained strong conceptual lessons
- the app already had a real Examples surface
- but the handoff between them was still weaker than the guided patterns added earlier in Module 2 and Module 6

After this pass, the workflow-pattern cluster behaves more like a guided curriculum path and less like an informational set of pages with adjacent links.

## Files touched

- `lib/types/content.ts`
- `components/lessons/LessonRenderer.tsx`
- `content/lessons/lessons.ts`
- `MODULE_5_WORKFLOW_HANDOFF_PASS.md`

## Verification

- Ran `npm run build`
- Result: passed successfully

## Likely next bottleneck

Now that Module 2, Module 5, and Module 6 each have stronger guided handoffs, the next likely bottleneck is consistency across the remaining high-value lessons and surfaces.

Best bounded follow-up options:
1. add guided Example/Build handoffs to the strongest Module 3 lessons (`tools`, `sessions`, `subagents`) so the core-building-block lessons also end in explicit next actions
2. tighten the Examples detail pages with short lesson-aware prompts or "what to inspect" cards so the destination surface carries more of the teaching load after the click
3. strengthen the Explore surface with clearer lesson-to-concept-to-example loops, especially where concepts already have good seeded relationships

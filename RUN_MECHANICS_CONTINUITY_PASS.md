# Run Mechanics + Continuity Pass

Date: 2026-03-28

## Bottleneck addressed

The highest-value bottleneck was the gap between the live Learn path and the already-built interactive surfaces.

The app had a working Run Visualizer, Examples, and Builder, but the curriculum still skipped several core lessons needed to explain:
- when work is chat vs automation vs orchestration
- where tool calls fit in a run
- why runs can feel passive, slow, or inconsistent
- when subagents and isolated work are the right design choice

## Concrete artifact shipped

Implemented the missing live lessons directly in the typed lesson schema:
- `m1-4` The Difference Between Chatting, Automating, and Orchestrating
- `m2-3` Model Response and Tool Calls
- `m2-5` Why Agents Sometimes Feel Passive, Slow, or Inconsistent
- `m3-9` Subagents and Isolated Work

## Supporting wiring completed

- Updated module lesson lists and module estimates in `content/course/modules.ts`
- Re-threaded lesson navigation so the Learn spine now flows through the added lessons cleanly
- Extended related concept/workflow references so the new lessons connect to existing surfaces

## Why this moves the MVP forward

This closes an instructional gap in the app's core teaching spine.

Before this pass:
- the app could demonstrate run mechanics and workflow shapes
- but the curriculum did not fully explain them in sequence

After this pass:
- Module 1 now bridges into workflow thinking earlier
- Module 2 now matches the Run Visualizer more closely
- Module 3 now includes explicit delegation/subagent teaching
- the Learn path is a more coherent MVP teaching journey

## Verification

Build check completed successfully:
- `npm run build` ✅

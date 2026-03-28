# Run Visualizer Teaching Panel Pass

## What changed

Added a small scenario-level teaching prompt panel to the existing Run Visualizer.

The panel is keyed by live scenario content and answers three questions for learners:
- what this scenario is for
- what to inspect first
- what to compare it against next

## Implementation shape

- Added a typed optional `teachingPrompt` field to `SimulationScenario`
- Seeded teaching prompts for exactly these live scenarios:
  - `simple-answer-no-tool-calls`
  - `direct-user-message-with-tool-use`
  - `scheduled-briefing-run`
- Rendered a compact "How to read this scenario" panel near the scenario header in `RunVisualizer`

## Why this helps

This keeps the visualizer honest and inspectable, but makes it less inert for first-time learners.
It tells them where to look without redesigning the surface or adding more routes/content types.

## Acceptance notes

- bounded MVP scope preserved
- no new scenarios or routes
- content stays local and typed
- build should remain the source of truth for final verification

## Likely next bounded follow-up

Either:
- extend the same guided-teaching pattern to another strong interactive surface such as Module 6 / Build
- or add a similarly small comparison helper for more lessons/surfaces without turning the visualizer into a heavy tutorial UI

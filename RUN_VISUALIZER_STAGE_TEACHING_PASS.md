# Run Visualizer Stage Teaching Pass

## Bottleneck addressed
The Run Visualizer already had scenario-level teaching prompts, but the active stage view was still too thin. It explained each stage, but it did not coach the learner on what to inspect right now or correct likely misconceptions.

## What changed
- Extended the simulation model with optional `teachingNotes` on each stage.
- Added stage-level guided teaching data for all live Run Visualizer scenarios.
- Updated `RunStagePanel` to render:
  - what to notice now
  - a diagnostic question
  - common misconceptions

## Why this helps the MVP
This turns the visualizer into more of a teaching surface and less of a passive stage browser. It especially strengthens Module 2 lessons, which depend on learners understanding:
- intake and routing
- selective context assembly
- model inference versus tool calls
- why runs can feel passive, slow, or inconsistent

## Files touched
- `lib/types/simulation.ts`
- `components/simulations/RunStagePanel.tsx`
- `content/simulations/run-scenarios.ts`

## Expected learner payoff
A learner can now pause on any active stage and answer three better questions:
1. What should I notice here?
2. What system question should I ask?
3. What beginner misunderstanding should I avoid?

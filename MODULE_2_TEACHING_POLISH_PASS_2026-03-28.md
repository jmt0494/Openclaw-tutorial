# Module 2 Teaching Polish Pass — 2026-03-28

## Why this pass happened

Per `CURRENT_BOTTLENECK.md`, the current MVP bottleneck is no longer route shell or basic lesson coverage.
It is lesson depth and sharper handoffs from lesson pages into the strongest interactive surface: the Run Visualizer.

## Bottleneck targeted

The thinnest high-value cluster was Module 2, especially:
- `m2-3` — Model Response and Tool Calls
- `m2-5` — Why Agents Sometimes Feel Passive, Slow, or Inconsistent

These lessons already covered the right topics, but they still read more like compact seed lessons than stronger instructional pages.

## Concrete artifact produced

Updated `content/lessons/lessons.ts` to deepen both lessons.

### Changes made

#### `m2-3` — Model Response and Tool Calls
- Increased estimated depth from 10 to 12 minutes
- Added a new teaching list: **"A better way to read the fork"**
- Added a new insight callout clarifying that **no-tool runs are often the correct shorter path**, not a lesser form of agency
- Preserved the existing scenario comparison so the lesson still points directly into the Run Visualizer

#### `m2-5` — Why Agents Sometimes Feel Passive, Slow, or Inconsistent
- Increased estimated depth from 10 to 12 minutes
- Added a new diagnostic list: **"Use this three-question diagnosis loop"**
- Added a new example translating vague complaints into visible visualizer checks
- Added an insight callout that frames diagnosis as a way to improve workflow design, not excuse poor behavior

## Why this helps the MVP

This pass improves the strongest existing teaching surface without expanding scope:
- richer lesson pages
- more explicit symptom -> cause framing
- clearer learner instructions for how to use the Run Visualizer
- better continuity between concept lessons and interactive inspection

## Recommended next bounded follow-up

If the next pass stays in this same bottleneck, the best move is:
- apply the same depth + CTA polish pattern to the Module 6 Build cluster
- or make lesson CTA cards even more explicit about what to compare inside the visualizer/builder surfaces

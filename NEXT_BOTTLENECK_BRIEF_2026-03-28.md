# Next Bottleneck Brief — 2026-03-28

## Assumption
Treat the Module 6 / Build polish pass as complete.

## Next highest-value bottleneck
The next bottleneck is now **Module 2 / Run Visualizer teaching depth**, not route coverage and not more lesson breadth.

The MVP shell is already complete, and Module 6 now has a stronger capstone handoff into Build. The weaker spot is that the Run Visualizer still behaves more like a deterministic scenario viewer than a guided instructional surface.

That matters because Module 2 is supposed to do heavy explanatory work for the whole tutorial:
- intake and routing
- context assembly
- direct response vs tool use
- why runs can feel passive, slow, or inconsistent

Those lessons now exist in the live Learn spine, but the interactive surface they depend on is still relatively thin. If we keep adding more lessons before improving this teaching surface, the tutorial risks becoming broader without becoming more teachable.

## Why this is the right next bottleneck
After the Module 6 pass, the product already has:
- full MVP route shell
- cross-linked Learn / Explore / Examples / Build / Run Visualizer surfaces
- stronger Module 6 lesson-to-builder cohesion
- believable workflow-design coverage

What still has the highest leverage is making the hidden mechanics of a run easier to inspect and understand.

Improving that pays off across the whole tutorial because it strengthens:
- Module 2 core comprehension
- later lessons on sessions, tools, memory, and subagents
- learner trust in why the system behaves the way it does

## Recommended bounded artifact-producing task for Otto
Do a **single scoped Module 2 / Run Visualizer guided-teaching pass**.

### Otto task
Upgrade the Run Visualizer from a generic stage browser into a clearer teaching surface for the Module 2 lessons by adding **scenario-specific guided annotations and lesson-aligned inspection prompts**.

### Scope target
Keep this pass bounded. Do not redesign the simulator.

Focus on these live lessons:
- `m2-1` — A Message Comes In: Intake and Routing
- `m2-2` — Context Assembly
- `m2-3` — Model Response and Tool Calls
- `m2-5` — Why Agents Sometimes Feel Passive, Slow, or Inconsistent

### What Otto should produce
1. Add lightweight guided teaching metadata to the run scenarios so each scenario can surface:
   - what to notice first
   - why this stage matters
   - one or two likely learner misconceptions
2. Update the Run Visualizer UI to render that guidance near the active stage without changing the core navigation model.
3. Add or sharpen lesson-to-visualizer prompts for the four Module 2 lessons so they tell the learner exactly which scenario/stage to inspect and what question to answer.
4. Keep all changes local to content/copy and light UI presentation if possible.

### Good constraints
- No new route families
- No animation overhaul
- No new simulation engine behavior
- No app-wide architecture rewrite
- No new lesson ids or curriculum restructuring

## Suggested files Otto will likely touch
- `content/simulations/run-scenarios.ts`
- `components/simulations/RunVisualizer.tsx`
- `components/simulations/RunStagePanel.tsx`
- `content/lessons/lessons.ts`
- possibly `app/simulations/run-visualizer/page.tsx` if a tiny presentation tweak is needed

## Acceptance shape
This pass is successful if:
- the Run Visualizer teaches, not just displays
- the three existing scenarios more clearly illustrate no-tool, tool-use, and scheduled/persistent run differences
- Module 2 lessons point learners into the visualizer with explicit inspection tasks instead of generic related links
- `npm run build` still passes

## Bottom line
With Module 6 / Build polished, the highest-value next move is to deepen the **Module 2 -> Run Visualizer** teaching loop so the app’s strongest hidden-mechanics lessons are supported by an equally clear interactive surface.
# Review: Run Visualizer scaffold

## What is solid

- The implementation matches the intended MVP shape well: deterministic local scenario data, a thin loader, a dedicated route, and reusable simulation components.
- The main user interactions required by the scaffold plan are present and working in a simple, honest way:
  - scenario selection
  - stage timeline
  - active stage explanation
  - visible artifacts
  - final output section
  - previous/next stage controls
- Scenario switching correctly resets the stage pointer, which is one of the explicit route requirements.
- The simulation type layer is clean and readable. The separation between scenario, context snapshot, stage, artifact, and final output is strong and should support later expansion without rework.
- The content loader stays appropriately thin, which is consistent with the scaffold docs.
- The component split is sensible for this phase. `RunVisualizer` owns state, while timeline/stage/artifact/scenario selection are kept separate.
- The seeded scenarios do a good job teaching two distinct run patterns:
  - direct chat-triggered run with file/tool use
  - scheduled recurring run with persistence behavior

## Issues / inconsistencies

### 1. Mild doc drift on scenario count

- `APP_SCAFFOLD_PLAN.md` requires at least 2 deterministic scenes for scaffold completion, and this implementation satisfies that.
- `CONTENT_MODEL.md` is a little stricter and says the MVP should create at least 3 run scenarios.
- Current implementation has 2 scenarios.

This is not a blocker for the current scaffold milestone, but it is a real cross-doc inconsistency worth tracking.

### 2. Component naming drift from scaffold plan

- The scaffold plan names `MessagePresetPicker.tsx` as the intended scenario-selection component.
- The implementation uses `ScenarioPicker.tsx` instead.

This is not a correctness issue, but it is a small naming drift from the documented build plan.

### 3. The route currently has no deep-link support for preset scenarios

- `ROUTES.md` explicitly mentions lessons eventually deep-linking into this route with a preset scenario id.
- That is clearly optional for now and not required for this pass.
- Still, the current route is fixed to internal state only, so there is no URL-based selection yet.

Not an MVP blocker for Milestone 1, just something to keep in mind for the next layer of integration.

## Recommendations, prioritized

1. **Add one third scenario when this surface gets its next pass.**
   - This would bring the implementation into full alignment with `CONTENT_MODEL.md`.
   - Best candidate: a simple-answer/no-tool-call run, since that is the missing contrast case.

2. **Decide whether to align component naming with the scaffold plan.**
   - Either rename `ScenarioPicker` to `MessagePresetPicker`, or accept the updated name and leave a doc update for later.
   - Low priority, but worth keeping docs and code in sync.

3. **Add URL-driven scenario selection later, not now.**
   - Useful once lessons or examples start linking directly into a specific visualizer scenario.
   - Not needed for this scaffold milestone.

## Small fix applied

- Corrected the breadcrumb in `app/simulations/run-visualizer/page.tsx` from `Learn / Run Visualizer` to `Home / Run Visualizer`.
- Reason: the route plan defines this as its own standalone surface, not a child route under `/learn`.

## MVP verdict

Yes — this is acceptable for MVP scaffold purposes as-is.

Reasoning:
- It satisfies the route-level scaffold requirements from `APP_SCAFFOLD_PLAN.md`.
- It stays appropriately simple without faking the data plumbing.
- The remaining issues are mostly doc-alignment and next-pass enhancement items, not milestone-breaking defects.

## Verification

- Ran `npm run build` after the breadcrumb fix.
- Build passed successfully.

# Module 6 / Build Integration Polish Brief

## Recommended bounded pass

Do a **single-sitting Module 6 lesson-depth + Build handoff polish pass** centered on the choices the live builder already exposes:
- trigger
- tools
- memory
- approval posture

This fits the current app because the Build route is already a deterministic guided form backed by `builder-options.ts` and seeded workflows, and Module 6 already teaches those same decisions. The gap is not missing functionality; it is that the capstone lessons still feel lighter than the builder they are supposed to hand into.

## Lesson ids to deepen

Prioritize exactly these Module 6 lessons:

1. **`m6-2` — Defining the Trigger**
   - Add one richer compare section: message vs schedule using the two live workflow shapes already in data (`research-assistant` and `morning-briefing` / maintenance).
   - Add one explicit “when this choice goes wrong” list so learners can see bad trigger fit, not just definitions.
   - Add one CTA that tells the learner to open Build and choose the trigger first before touching other options.

2. **`m6-4` — Choosing the Right Tools and Skills**
   - Deepen this into the strongest builder-alignment lesson.
   - Add a concrete minimum-toolset compare using the live builder tools: `read`, `write`, `web search + fetch`, `exec`.
   - Add one short example cluster mapping those tools to the three seeded workflows.
   - Add one CTA that tells the learner to open Build and intentionally choose the smallest viable toolset.

3. **`m6-5` — Deciding Where Memory Should Live**
   - Add a practical contrast between minimal memory, lightweight workflow state, and report history using only live builder memory options and existing workflow examples.
   - Make the “what belongs in files vs state vs report history” teaching more explicit.
   - Add one CTA that sends the learner into Build to choose memory based on repetition/noise/trend needs.

4. **`m6-7` — Designing for Approval Versus Autonomy**
   - This should become the strongest final handoff lesson.
   - Add a concrete observation-vs-change contrast tied to the existing maintenance workflow and the builder’s two approval choices.
   - Add one “approve the risky edge, not the whole run” mini-checklist.
   - End with a capstone CTA pointing straight to Build as the place to assemble a first workflow shape.

## Lesson-to-Build CTA improvements

Add or sharpen **explicit Build CTAs inside the four lessons above**. They should not be generic “see Build” links. They should tell the learner what to do in Build now.

Recommended CTA shape by lesson:

- **`m6-2`**
  - CTA: “Open Build and pick only the trigger first. Decide whether your workflow starts from a user message or a schedule before choosing anything else.”

- **`m6-4`**
  - CTA: “Open Build and select the smallest toolset that can actually finish the job. If you cannot justify a tool, leave it out.”

- **`m6-5`**
  - CTA: “Open Build and choose the lightest memory option that still prevents repetition or preserves needed history.”

- **`m6-7`**
  - CTA: “Open Build and set the approval posture last. Let the workflow prepare and observe automatically, then gate only the consequential step.”

If the lesson system supports related links/cards already, point them specifically to **`/build`** and secondarily let the builder page itself direct learners to matching workflows.

## Builder-page polish to support the handoff

Keep this tight. Do not redesign the builder.

### In `app/build/page.tsx`
Make the intro copy more explicitly capstone-oriented:
- Frame Build as **Module 6 in action**.
- Name the exact choices it helps finalize: trigger, context, tools, memory, output, approval.
- Tell learners to compare their recommendation against the seeded workflow examples already loaded on the page.

Recommended polish targets on the page:
- Replace the current top paragraph with copy that sounds like a continuation of Module 6, not a detached feature page.
- Tighten the three explainer cards so they reinforce:
  1. start with trigger,
  2. keep tools/memory narrow,
  3. use approval at the risky edge.

### In `content/builder/builder-options.ts`
Do only light copy polish so the builder language mirrors the deepened lessons:
- **trigger group description**: stress that trigger is the start of the workflow contract.
- **tools group description**: stress minimum viable toolset.
- **memory group description**: stress repetition prevention vs history.
- **approval group description**: stress approving consequential actions, not harmless prep.

No schema changes needed.

### In `content/workflows/workflows.ts`
Only expand metadata/copy where it strengthens lesson adjacency:
- Ensure the seeded workflows most relevant to Module 6 stay visibly tied to the four target lessons:
  - `morning-briefing` -> strong tie to `m6-2`, `m6-5`
  - `research-assistant` -> strong tie to `m6-2`, `m6-4`
  - `recurring-maintenance-check` -> strong tie to `m6-4`, `m6-5`, `m6-7`
- If needed, lightly improve `whyThisDesign` or `commonFailureModes` wording so the trigger/tool/memory/approval choices are easier to compare from the Build route.

## Files Otto should touch

Touch only these files for this pass:
- `/home/tier/.openclaw/workspace/openclaw-tutorial/content/lessons/lessons.ts`
- `/home/tier/.openclaw/workspace/openclaw-tutorial/app/build/page.tsx`
- `/home/tier/.openclaw/workspace/openclaw-tutorial/content/builder/builder-options.ts`
- `/home/tier/.openclaw/workspace/openclaw-tutorial/content/workflows/workflows.ts`

## Files Otto should not touch

Do **not** touch during this pass:
- route structure / navigation code outside the existing lesson content flow
- component architecture for the lesson renderer
- builder logic, recommendation engine, or form behavior
- type definitions unless a tiny text-only content edit somehow forces it
- simulation data / Run Visualizer files
- examples/explore route shells
- any new lesson ids, module ordering, or broad curriculum restructuring

## Acceptance checklist

A pass is done when all of the following are true:

- `m6-2`, `m6-4`, `m6-5`, and `m6-7` each feel meaningfully deeper than seed lessons, not just slightly reworded.
- Each of those lessons includes a **specific Build-directed CTA** telling the learner what decision to make there.
- The Build page intro clearly reads as the practical continuation of Module 6.
- Builder option descriptions for trigger, tools, memory, and approval now echo the lesson language more clearly.
- Seeded workflow metadata/copy gives cleaner support for comparing trigger/tool/memory/approval choices.
- Scope stayed bounded: no new surfaces, no redesign, no new builder mechanics.
- `npm run build` should still pass after the content/copy edits.

## Bottom line

The best next polish pass is **not** a bigger builder. It is a tighter teaching-to-builder handoff: deepen the four Module 6 decision lessons, then make the Build page and seeded workflow copy feel like the honest capstone continuation of those exact choices.
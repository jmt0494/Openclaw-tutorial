# Milestone 1 Progress

## 2026-03-27 late-night scaffold pass

Current bottleneck addressed:
- The project had planning docs, route plans, and seed content notes, but no executable app shell.

Concrete artifact produced in this pass:
- A real Next.js + TypeScript + Tailwind scaffold was created in this project folder.
- The first complete vertical slice implemented is the **learn flow**:
  - `/`
  - `/learn`
  - `/learn/[moduleSlug]`
  - `/learn/[moduleSlug]/[lessonSlug]`
- Typed content modules and content loaders were added.
- Eight seeded lessons now render through reusable lesson components instead of living only in markdown planning docs.

Files added:
- framework bootstrap: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `next-env.d.ts`
- app shell: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- learn routes: `app/learn/page.tsx`, `app/learn/[moduleSlug]/page.tsx`, `app/learn/[moduleSlug]/[lessonSlug]/page.tsx`
- reusable components: `components/layout/AppShell.tsx`, `components/layout/SidebarCourseMap.tsx`, `components/lessons/LessonRenderer.tsx`
- typed content: `lib/types/content.ts`, `content/course/*`, `content/lessons/lessons.ts`, `lib/content-loaders/*`, `lib/utils/navigation.ts`

What this means:
- The project is no longer only in planning mode.
- The MVP now has a concrete app foundation and a real seeded learning experience.

Most likely next bottleneck:
- dependency installation and compile verification
- then extending the scaffold to `/examples`, `/explore`, `/build`, and `/simulations/run-visualizer`

Recommended next build move:
1. scaffold the examples routes next
2. add run visualizer after examples so the product starts feeling interactive
3. follow with explore so concept cross-linking becomes real

## 2026-03-28 early-morning examples scaffold pass

Current bottleneck addressed:
- The app had a real Learn vertical slice, but the Examples area still existed only in planning docs.
- That meant the MVP lacked the first non-lesson workflow surface learners could inspect.

Concrete artifact produced in this pass:
- Added a typed workflow data model to the app content layer.
- Created concrete local data seeds for the 3 MVP example workflows:
  - Morning Briefing
  - Research Assistant
  - Recurring Maintenance Check
- Added a workflow content loader.
- Scaffolded the Examples route family:
  - `/examples`
  - `/examples/[workflowSlug]`
- Added reusable workflow UI components for cards and execution step lists.
- Verified the app still builds successfully with `npm run build`.

Files added:
- `content/workflows/workflows.ts`
- `lib/content-loaders/workflows.ts`
- `components/workflows/WorkflowCard.tsx`
- `components/workflows/WorkflowStepList.tsx`
- `app/examples/page.tsx`
- `app/examples/[workflowSlug]/page.tsx`

Files updated:
- `lib/types/content.ts`

What this means:
- The MVP now has a second real route family beyond Learn.
- Example workflows are no longer trapped in markdown specs; they render from typed app data.
- Learners can now browse workflow cards and inspect step-by-step workflow detail pages.

Most likely next bottleneck:
- The app still lacks the other major MVP surfaces: Explore, Build, and Run Visualizer.
- Of those, Run Visualizer is probably the best next move because it teaches hidden system behavior directly and raises perceived interactivity fast.

## 2026-03-28 overnight run visualizer scaffold pass

Current bottleneck addressed:
- The app still needed its first explicit simulation surface so learners could inspect how a run unfolds stage by stage.
- The project docs already named Run Visualizer as the next interactive MVP surface, but the app had no typed simulation layer or executable route yet.

Concrete artifact produced in this pass:
- Added a dedicated typed simulation model for deterministic run visualizer scenarios, context snapshots, stages, artifacts, and final outputs.
- Added local seed data for 2 deterministic scenarios:
  - direct user message with tool use
  - scheduled briefing run
- Added a thin simulations content loader.
- Added minimal reusable simulation UI components for:
  - scenario selection
  - stage timeline
  - active stage detail
  - visible artifact list
  - client-side scenario/state orchestration
- Implemented `/simulations/run-visualizer` with clean scenario reset behavior and step forward/back controls.
- Verified the app builds successfully with `npm run build`.

Files added:
- `lib/types/simulation.ts`
- `content/simulations/run-scenarios.ts`
- `lib/content-loaders/simulations.ts`
- `components/simulations/ScenarioPicker.tsx`
- `components/simulations/RunTimeline.tsx`
- `components/simulations/RunStagePanel.tsx`
- `components/simulations/ArtifactList.tsx`
- `components/simulations/RunVisualizer.tsx`
- `app/simulations/run-visualizer/page.tsx`

What this means:
- The MVP now has a real deterministic simulation route instead of only lesson and workflow browsing surfaces.
- Run behavior is now represented as typed local content rather than ad hoc page copy.
- Learners can switch scenarios, inspect stage-specific artifacts, and see persistence differences between a direct chat run and a scheduled workflow run.

Most likely next bottleneck:
- The route shell is still incomplete until `/explore` and `/build` are scaffolded.
- Explore is probably the next best move because it unlocks concept cross-linking already implied by the lesson and workflow data.

## 2026-03-28 explore scaffold pass

Current bottleneck addressed:
- The app already had Learn, Examples, and Run Visualizer, but the Explore surface still existed only in the route plan and content notes.
- That meant concept cross-linking was implied in lesson/workflow data but not yet visible anywhere in the product.

Concrete artifact produced in this pass:
- Added a typed concept data model to the shared content type layer.
- Seeded a believable local concept set covering the required MVP concepts, with related-concept and related-lesson links.
- Added a thin concepts content loader for browse/detail lookups plus lesson resolution.
- Added minimal reusable concept UI components for concept cards, concept grids, related concept lists, and an honest map placeholder.
- Implemented the Explore route family:
  - `/explore`
  - `/explore/concepts/[conceptSlug]`
- Verified the app builds successfully with `npm run build`.

Files added:
- `content/concepts/concepts.ts`
- `lib/content-loaders/concepts.ts`
- `components/concepts/ConceptCard.tsx`
- `components/concepts/ConceptGrid.tsx`
- `components/concepts/ConceptRelationshipList.tsx`
- `components/concepts/ConceptMapPlaceholder.tsx`
- `app/explore/page.tsx`
- `app/explore/concepts/[conceptSlug]/page.tsx`

Files updated:
- `lib/types/content.ts`

What this means:
- The MVP now has a real Explore surface driven by typed local content instead of placeholder page copy.
- Concepts can now be browsed directly, resolved by slug, and cross-linked back into seeded lessons.
- The route shell is closer to Milestone 1 completion, with `/build` now standing out as the main missing MVP surface.

Most likely next bottleneck:
- `/build` is now the clearest remaining missing route family for the Milestone 1 shell.
- There is also some follow-up cleanup value in upgrading workflow detail pages to resolve related lesson/concept links through the new concept layer instead of showing raw ids.

## 2026-03-28 build route scaffold pass

Current bottleneck addressed:
- The route shell was almost complete, but the `/build` workflow-builder surface still existed only in planning docs.
- That left Milestone 1 incomplete even though Learn, Examples, Explore, and Run Visualizer were already real.

Concrete artifact produced in this pass:
- Added a dedicated typed builder model for option groups, draft state, and deterministic recommendation results.
- Seeded local builder option groups covering:
  - goal
  - trigger
  - context
  - tools
  - memory
  - output
  - approval
- Added deterministic builder rules so structured selections generate:
  - a workflow summary
  - a recommended pattern
  - a workflow outline
  - warnings/tradeoffs
  - related example suggestions when a seeded example matches
- Added a thin builder content loader.
- Added minimal reusable builder UI components for guided steps, draft summary, and final recommendation rendering.
- Implemented `/build` as a real client-driven guided builder with no backend and no AI calls.
- Verified the app builds successfully with `npm run build`.

Files added:
- `lib/types/builder.ts`
- `content/builder/builder-options.ts`
- `content/builder/builder-rules.ts`
- `lib/content-loaders/builder.ts`
- `components/builder/BuilderStep.tsx`
- `components/builder/BuilderSummary.tsx`
- `components/builder/WhyThisDesign.tsx`
- `components/builder/BuilderForm.tsx`
- `app/build/page.tsx`

What this means:
- The full planned Milestone 1 MVP route shell now exists and boots locally:
  - `/`
  - `/learn`
  - `/learn/[moduleSlug]`
  - `/learn/[moduleSlug]/[lessonSlug]`
  - `/examples`
  - `/examples/[workflowSlug]`
  - `/explore`
  - `/explore/concepts/[conceptSlug]`
  - `/simulations/run-visualizer`
  - `/build`
- From a route-shell standpoint, Milestone 1 is now effectively complete.

Most likely next bottleneck:
- The app now needs depth and cleanup more than missing shell routes.
- Highest-value follow-up items are probably:
  - improving cross-linked related lesson/concept rendering on workflow detail pages
  - adding one third run visualizer scenario to align fully with the content model doc
  - deepening lesson content and integration between lessons and the interactive surfaces

## 2026-03-28 overnight run visualizer depth pass

Current bottleneck addressed:
- The run visualizer had become the clearest small doc-to-code gap.
- `CONTENT_MODEL.md` requires 3 MVP run scenarios, but the app only exposed 2.

Concrete artifact produced in this pass:
- Added a third deterministic run visualizer scenario for the missing contrast case:
  - simple answer with no tool calls
- The new scenario teaches a lightweight conceptual chat run that:
  - begins from a user question
  - stays in the current session
  - keeps context minimal
  - answers directly without reading files or calling tools
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `content/simulations/run-scenarios.ts`
- `MILESTONE_1_PROGRESS.md`

What this means:
- The run visualizer now matches the 3-scenario expectation documented in the content model.
- Learners can now compare three distinct run shapes:
  - simple answer with no tools
  - answer with file/tool usage
  - scheduled run with persistence behavior
- The simulation surface now teaches the important idea that not every useful OpenClaw run requires tool calls.

Most likely next bottleneck:
- The MVP shell is now broadly complete and better aligned with its docs.
- The next highest-value work is probably one of:
  - deeper lesson-content polish and stronger links into interactive surfaces
  - workflow detail cleanup so related concepts/lessons resolve through shared loaders instead of showing raw ids
  - URL/deep-link support into specific run visualizer scenarios from lessons/examples

## 2026-03-28 relationship resolution and featured content pass

Current bottleneck addressed:
- The MVP shell existed, but key relationship surfaces were still half-real.
- Home ignored featured concept/workflow seeds, workflow detail pages exposed raw ids, and a broken `cron` concept reference was still drifting through seeded content.

Concrete artifact produced in this pass:
- Repaired the broken concept drift by replacing the missing `cron` references used in the live app data with a seeded `schedule` concept and aligning affected course, lesson, and workflow records.
- Added a small shared reference-resolution layer for:
  - featured concepts/workflows
  - lesson references
  - concept references
  - workflows related to a lesson via seeded workflow metadata
- Updated the home page to render featured concepts and featured workflows from course data.
- Updated workflow detail pages so related lessons and related concepts render as real linked cards instead of raw ids.
- Updated the lesson surface so it now renders related concepts and honestly derived related workflows, with simple continuation links for adjacent lessons.
- Verified the app still builds successfully with `npm run build`.

Files added:
- `lib/content-loaders/references.ts`

Files updated:
- `app/page.tsx`
- `app/examples/[workflowSlug]/page.tsx`
- `app/learn/[moduleSlug]/[lessonSlug]/page.tsx`
- `components/lessons/LessonRenderer.tsx`
- `content/course/course.ts`
- `content/concepts/concepts.ts`
- `content/workflows/workflows.ts`
- `content/lessons/lessons.ts`
- `MILESTONE_1_PROGRESS.md`

What this means:
- The tutorial shell now feels more like one connected learning system instead of separate route islands.
- Featured content on home is now driven by the actual course record.
- The live app no longer depends on a missing concept id for this pass.

Most likely next bottleneck:
- Some planning/spec docs still mention `cron`, but the live app data and rendered surfaces are now internally consistent for Milestone 1.
- Relationship depth is improving, but the next likely cleanup target is broader shared-card reuse or deeper lesson/explore linking polish if we want tighter symmetry across all detail surfaces.

## 2026-03-28 concept workflow linking pass

Current bottleneck addressed:
- Concept detail pages still lagged behind lesson and workflow pages in relationship depth.
- Related workflows existed implicitly in seeded workflow metadata, but concept pages did not resolve or render them.

Concrete artifact produced in this pass:
- Added a small shared reference helper for resolving workflows related to a concept through live `relatedConceptIds` metadata on seeded workflows.
- Updated concept detail pages to render related workflows as real linked workflow cards when any seeded relationships exist.
- Kept the relationship logic honest by deriving it from workflow data already in the app instead of inventing new concept-side linkage.
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `lib/content-loaders/references.ts`
- `app/explore/concepts/[conceptSlug]/page.tsx`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Explore concept detail pages now participate more fully in the same cross-linked content system as lessons and workflow examples.
- Learners can move from a concept into concrete workflow examples without relying only on lesson links.

## 2026-03-28 run visualizer deep-link integration pass

Current bottleneck addressed:
- The app had a real Run Visualizer, but lessons and workflow examples still could not link into a specific simulation scenario.
- That made the product feel like adjacent route families rather than one connected teaching system.

Concrete artifact produced in this pass:
- Extended the lesson and workflow content model with optional seeded simulation references.
- Seeded related run-visualizer scenario links into the most relevant lessons and workflow examples.
- Added shared simulation reference resolution alongside the existing lesson/concept/workflow reference helpers.
- Updated lesson detail pages to render a new Related simulations section with real links into the visualizer.
- Updated workflow detail pages to render related simulation links as well.
- Added URL-driven scenario selection on `/simulations/run-visualizer` so links can open the visualizer with the intended deterministic scenario already selected.

Files updated:
- `lib/types/content.ts`
- `content/lessons/lessons.ts`
- `content/workflows/workflows.ts`
- `lib/content-loaders/references.ts`
- `components/lessons/LessonRenderer.tsx`
- `app/learn/[moduleSlug]/[lessonSlug]/page.tsx`
- `app/examples/[workflowSlug]/page.tsx`
- `app/simulations/run-visualizer/page.tsx`
- `components/simulations/RunVisualizer.tsx`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Learners can now move from explanation surfaces into a concrete deterministic run without manually reselecting the scenario.
- The run visualizer is now better integrated into the rest of the tutorial and behaves more like a reusable teaching surface.
- The MVP feels less like separate route islands and more like one cross-linked learning product.

## 2026-03-28 local progress and resume pass

Current bottleneck addressed:
- The app had a real route shell and cross-linking, but the learner had no honest sense of progress and no resume behavior.
- That left `/`, `/learn`, and lesson pages feeling stateless even though the docs explicitly call for local progress tracking.

Concrete artifact produced in this pass:
- Added a minimal browser-local progress model for:
  - completed lesson ids
  - last visited route
  - last visited lesson route for resume-first learning CTAs
- Added shared client progress helpers/hooks around local storage with no backend or auth.
- Wired progress into the home page via a real progress/resume card.
- Wired progress into `/learn` via a summary panel and continue-learning CTA.
- Wired lesson pages with mark-complete / mark-incomplete behavior plus a `Complete and continue` action.
- Added lightweight completion visibility to module lesson lists and the lesson sidebar so previous/next continuity feels more grounded.
- Verified the app still builds successfully with `npm run build`.

Files added:
- `lib/progress.ts`
- `components/progress/useLearnerProgress.ts`
- `components/progress/RouteProgressTracker.tsx`
- `components/progress/HomeProgressCard.tsx`
- `components/progress/LearnProgressSummary.tsx`
- `components/progress/LessonProgressControls.tsx`
- `components/progress/ModuleLessonList.tsx`
- `components/progress/SidebarLessonStatus.tsx`

Files updated:
- `components/layout/AppShell.tsx`
- `components/layout/SidebarCourseMap.tsx`
- `app/page.tsx`
- `app/learn/page.tsx`
- `app/learn/[moduleSlug]/page.tsx`
- `app/learn/[moduleSlug]/[lessonSlug]/page.tsx`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Learners can now mark lessons complete and come back to a believable resume point without any backend.
- The key doc-called surfaces now expose actual progress state instead of only static navigation.
- The implementation stays honest to MVP scope: browser local storage only.

Most likely next bottleneck:
- Progress is browser-local and lesson-level only, so it will not sync across devices or capture richer states like partial lesson progress.
- The next likely polish target is making more non-lesson routes aware of the learner's resume context without turning this into a heavier state-management project.

## 2026-03-28 curriculum density pass: Module 4 and 5 live lesson expansion

Current bottleneck addressed:
- The route shell and cross-linking were in good shape, but the Learn path was still too thin to feel like a believable tutorial.
- The biggest gap was missing live course coverage for Module 4 (safety/control) and Module 5 (workflow patterns), even though those topics were already called for in the curriculum docs and supported by existing examples/builder flows.

Concrete artifact produced in this pass:
- Added missing live module records for:
  - `module-4` Safety, Control, and Boundaries
  - `module-5` Workflow Patterns That Actually Work
- Expanded the live lesson seed file from 8 lessons to 14 lessons by adding 6 new lessons:
  - `m4-1` Trust Boundaries
  - `m4-3` What Should Require Approval
  - `m4-5` Designing Standing Orders and Guardrails
  - `m5-2` The Scheduled Briefing Pattern
  - `m5-4` The Research Pipeline Pattern
  - `m5-6` The Delegate Pattern
- Re-threaded lesson navigation so the Learn path now flows linearly from Module 3 into Module 4, then Module 5, then Module 6.
- Updated selected concept records so Explore surfaces now point back to the newly added lessons for:
  - tools
  - subagents
  - schedule
  - workflow
  - approval
  - guardrails
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `content/course/modules.ts`
- `content/lessons/lessons.ts`
- `content/concepts/concepts.ts`
- `MILESTONE_1_PROGRESS.md`

What this means:
- The Learn route now covers all 6 planned MVP modules in live app data instead of only 4.
- The tutorial has a much stronger instructional spine around safety, approval, guardrails, and reusable workflow patterns.
- Existing surfaces now reinforce one another better: Module 4 supports builder/autonomy thinking, and Module 5 connects directly to the already-seeded examples and run-visualizer scenarios.

Most likely next bottleneck:
- The shell is now denser and more believable, but Module 3 and Module 6 still remain lighter than the curriculum docs intend.
- The next highest-value pass is probably adding one more cluster of practical lessons around workspaces/sessions/tools or workflow design decisions so the Learn path better matches the strongest parts of the docs.

## 2026-03-28 pre-dawn curriculum density pass: pattern and autonomy gap fill

Current bottleneck addressed:
- The live Learn path had stronger breadth than before, but it still skipped two important pieces named in the lesson map:
  - the basic chat-assistant pattern in Module 5
  - the approval-vs-autonomy design payoff in Module 6
- That left the course slightly lopsided: examples and builder choices existed, but the curriculum did not yet fully bridge from simple chat help into bounded autonomy decisions.

Concrete artifact produced in this pass:
- Added two new live lesson records to the app content layer:
  - `m5-1` The Chat Assistant Pattern
  - `m6-7` Designing for Approval Versus Autonomy
- Re-threaded the lesson chain so Module 5 now starts with the simplest workflow pattern before scheduled, research, and delegate patterns.
- Extended Module 6 so the learning path now ends with a clearer capstone lesson on balancing automation with human checkpoints.
- Updated module lesson lists and estimated times to reflect the denser path.
- Updated relevant concept cross-links so Explore can point back to the new lessons.
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `content/lessons/lessons.ts`
- `content/course/modules.ts`
- `content/concepts/concepts.ts`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Module 5 now has a clearer instructional on-ramp from simplest interactive assistance to more structured patterns.
- Module 6 now has a more honest design payoff, since approval and autonomy are no longer implied only by the builder UI and safety lessons.
- The Learn route aligns more closely with `MVP_LESSON_MAP.md` and better supports the existing workflow builder and example surfaces.

Most likely next bottleneck:
- The curriculum is broader, but several lighter-support lessons from the lesson map still remain unseeded, especially around Module 2 run mechanics and a few lighter workflow-design topics.
- The next best move is probably either:
  - adding one more compact lesson cluster around run mechanics (`2.3`, `2.5`) so Module 2 better matches the run visualizer surface, or
  - tightening lesson-to-builder/example linking so each major pattern and design lesson points into the strongest interactive surface.

## 2026-03-28 content-density pass: Module 3 and 6 support lessons

Current bottleneck addressed:
- After the Module 4 and 5 expansion, the Learn path was still visibly uneven.
- Module 3 and Module 6 were the thinnest parts of the live curriculum, which made the middle and final design sections feel under-supported relative to the rest of the app.

Concrete artifact produced in this pass:
- Added 6 new compact live lesson seeds:
  - `m3-1` Workspaces: Where the Agent Lives
  - `m3-3` Sessions and Why They Matter
  - `m3-5` Tools: read, write, exec, web, sessions, and more
  - `m6-1` Picking the Right First Workflow
  - `m6-4` Choosing the Right Tools and Skills
  - `m6-6` When to Use Main Session, Isolated Sessions, or Subagents
- Updated `module-3` and `module-6` lesson lists and estimated minutes to reflect the denser live curriculum.
- Re-threaded `orderInModule`, `orderGlobal`, and previous/next lesson navigation so the Learn flow now runs cleanly across 20 lessons.
- Added the honest concept-to-lesson backlinks needed to keep Explore aligned for workspace, session, tools, context, subagents, workflow, routing, and approval.
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `content/lessons/lessons.ts`
- `content/course/modules.ts`
- `content/concepts/concepts.ts`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Module 3 now teaches the full workspace/session/tools cluster instead of skipping straight from bootstrap files to memory.
- Module 6 now feels more like a real workflow-design sequence instead of only a trigger/memory stub.
- The live Learn spine is noticeably more balanced against the existing Explore, Examples, Build, and Run Visualizer surfaces.

Most likely next bottleneck:
- The shell is now structurally denser, but several lessons are still compact seed-form rather than fully authored instructional pages.
- The next likely high-value pass is deeper lesson writing and tighter links from those lessons into the most relevant examples, builder decisions, and simulation scenarios.

## 2026-03-28 pre-dawn run mechanics and continuity pass

Current bottleneck addressed:
- The app already had strong supporting surfaces, but the Learn path still skipped a few core lessons that explained how those surfaces fit together.
- The biggest remaining continuity gap was the missing run-mechanics and delegation cluster called out in `MVP_LESSON_MAP.md`.

Concrete artifact produced in this pass:
- Added 4 new live lesson records to the app content layer:
  - `m1-4` The Difference Between Chatting, Automating, and Orchestrating
  - `m2-3` Model Response and Tool Calls
  - `m2-5` Why Agents Sometimes Feel Passive, Slow, or Inconsistent
  - `m3-9` Subagents and Isolated Work
- Re-threaded module lesson lists, `orderInModule`, `orderGlobal`, and previous/next lesson navigation so the Learn flow now runs coherently across 26 lessons.
- Wired the new lessons honestly into existing live surfaces:
  - `m1-4` now pulls in workflow examples that reinforce chat vs automation vs orchestration
  - `m2-3` and `m2-5` now link into the Run Visualizer scenarios that contrast no-tool, tool-use, and scheduled/persistent runs
  - `m3-9` now links forward into the delegate-pattern workflow ideas already present in the app
- Broadened relevant workflow and concept backlinks so the new lesson pages surface stronger related cards without inventing new route types or schema.
- Verified the app still builds successfully with `npm run build`.

Files updated:
- `content/lessons/lessons.ts`
- `content/course/modules.ts`
- `content/workflows/workflows.ts`
- `content/concepts/concepts.ts`
- `CURRENT_BOTTLENECK.md`
- `MILESTONE_1_PROGRESS.md`

What this means:
- Module 1 now has the missing bridge from basic framing into workflow thinking.
- Module 2 now better matches the Run Visualizer and gives learners an explicit explanation for direct-response runs, tool-using runs, and common failure symptoms.
- Module 3 now includes the missing subagent/isolation lesson needed to support the delegate pattern and later session-choice design lessons.
- The live Learn spine now much more honestly matches the strongest interactive surfaces already in the app.

Most likely next bottleneck:
- Core lesson coverage is much healthier now, so the next highest-value work is less about missing seeds and more about depth.
- The best next pass is probably deeper lesson-authoring and sharper lesson-to-surface teaching handoffs, especially around Module 2 / Run Visualizer and Module 6 / Build.

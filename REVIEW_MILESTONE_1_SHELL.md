# Review: Milestone 1 Shell

## 1) What I reviewed

Build-facing docs:
- `APP_SCAFFOLD_PLAN.md`
- `MILESTONE_1_PROGRESS.md`
- `CONTENT_MODEL.md`
- `ROUTES.md`

Current implementation surfaces and data plumbing:
- routes: `app/page.tsx`, `app/learn/[moduleSlug]/[lessonSlug]/page.tsx`, `app/examples/page.tsx`, `app/examples/[workflowSlug]/page.tsx`, `app/explore/page.tsx`, `app/explore/concepts/[conceptSlug]/page.tsx`, `app/build/page.tsx`, `app/simulations/run-visualizer/page.tsx`
- content/types/loaders: `lib/types/content.ts`, `lib/content-loaders/*.ts`, `content/course/*`, `content/lessons/lessons.ts`, `content/concepts/concepts.ts`, `content/workflows/workflows.ts`, `content/simulations/run-scenarios.ts`, `content/builder/*`
- key renderers/layout: `components/lessons/LessonRenderer.tsx`, `components/layout/AppShell.tsx`, `components/builder/BuilderForm.tsx`

## 2) Top findings ranked by severity/value

### 1. Highest-value defect cluster: the app has typed relationship data, but the shell still does not resolve and render those relationships honestly

This is now the main bottleneck.

The scaffold plan says the MVP should be driven by typed local content and should feel cross-linkable across lessons, concepts, workflows, and simulations. The route shell exists, but the relationship layer is only half-real.

Concrete examples:
- `app/examples/[workflowSlug]/page.tsx` still renders `workflow.relatedLessonIds` and `workflow.relatedConceptIds` as raw IDs instead of resolved links.
- `components/lessons/LessonRenderer.tsx` renders lesson body/objectives/takeaways only; it does not expose lesson-related concepts, related workflows, or any route-outs into Explore / Examples / Run Visualizer.
- `app/page.tsx` does not use `course.featuredConceptIds` or `course.featuredWorkflowIds`, even though `ROUTES.md` says home should orient with featured concepts/workflows.
- `ROUTES.md` says lessons should be able to link to related concepts, related workflows, and run visualizer scenarios, but that contract is not implemented in the lesson surface.

Why this matters now:
- Milestone 1 is supposed to be a truthful shell, not just a set of URLs.
- Right now the product feels more like separate islands than one learning system.
- The docs promise cross-linking as a core value, but the current UI still hides or degrades those connections.

### 2. Reference integrity is inconsistent enough to make the typed content layer look less trustworthy

There are already broken or drifting IDs in seeded data:
- `content/course/course.ts` includes featured concept id `cron`, but there is no `cron` concept in `content/concepts/concepts.ts`.
- `content/workflows/workflows.ts` uses `cron` in `workflow-1.relatedConceptIds`.
- `content/lessons/lessons.ts` uses `cron` in `m6-2.relatedConceptIds`.

Because the app currently does not aggressively resolve these references in most surfaces, the breakage is partially hidden. But as soon as the shell starts rendering the cross-links it promises, these inconsistencies will become user-visible.

This is a data-honesty problem, not just a copy issue.

### 3. The implemented content types have been simplified past the doc contract in ways that now matter

`lib/types/content.ts` is much thinner than `CONTENT_MODEL.md`:
- `LessonRecord` omits status/difficulty/prerequisites/related workflows/interactive refs/visual refs.
- `WorkflowRecord` is custom-shaped rather than matching the documented workflow object closely.
- `ConceptRecord` does not include any visual metadata.

Some simplification is fine for scaffolding, but it now blocks doc-promised behaviors:
- lessons cannot truthfully expose related workflows because the type does not carry them
- lessons cannot deep-link to a run visualizer scene because there is no interactive/reference field
- the home/lesson/detail surfaces cannot consistently reuse the richer content contracts described in the docs

This is less urgent than the relationship/rendering gap, but it is the structural reason that gap keeps showing up.

### 4. Route completeness is basically there, but the home route under-delivers against the route spec

The route inventory from `APP_SCAFFOLD_PLAN.md` / `ROUTES.md` is present. No major Milestone 1 route family appears missing.

But `app/page.tsx` is materially thinner than the route contract:
- no featured concepts section
- no featured workflows section
- no progress/resume card
- only module cards and start/view CTAs

This does not block the shell from existing, but it makes the home page feel less like the intended tutorial hub and more like a temporary landing page.

## 3) The single best next implementation task

**Implement a shared reference-resolution and cross-link rendering pass across Home, Lesson, and Workflow detail surfaces.**

Concretely, that means:
1. add/reference loaders that resolve concept IDs, lesson IDs, workflow IDs, and later simulation IDs into display-ready objects
2. fix the currently invalid seeded references first (notably the `cron` drift)
3. update:
   - `app/page.tsx` to render featured concepts/workflows from `course.ts`
   - `components/lessons/LessonRenderer.tsx` or the lesson page shell to render related concepts/workflows with real links
   - `app/examples/[workflowSlug]/page.tsx` to render related lessons/concepts as resolved linked cards, not raw ids
4. keep the implementation typed and local-content-driven so the shell becomes honest about its graph

Why this is the best next task:
- it addresses the biggest current mismatch between docs and product feel
- it turns the existing shell into an actual connected learning experience
- it will flush out bad IDs and weak seeds immediately, which is healthy now
- it improves multiple route families at once without requiring a large new feature

## 4) Quick wins that should wait until after that task

- Add the third run visualizer scenario so implementation matches the `CONTENT_MODEL.md` recommendation of 3 scenarios.
- Expand `app/page.tsx` with a lightweight resume/progress card from local storage.
- Restore a few high-value lesson fields from the doc model, especially `relatedWorkflowIds` and a simple interactive/deep-link reference.
- Add “related workflows” to concept detail pages once workflow resolution is shared.
- Tighten home-page orientation copy and featured sections after the reference layer is real.

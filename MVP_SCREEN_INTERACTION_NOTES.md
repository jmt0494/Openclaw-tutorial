# MVP Screen Interaction Notes

This document turns the product spec, MVP spec, route map, and content model into concrete interaction guidance for the first build.

It is intentionally practical.

The goal is to answer:
- what each MVP screen must help the learner do
- what the main interaction pattern is
- what UI states are needed
- what should happen when the learner clicks something
- what can stay simple in the first implementation

This should reduce guesswork during app scaffolding and component design.

---

## 1. UX principles for the MVP

These principles apply across all screens.

### 1.1 Always answer "Where am I?"
The learner should always be able to tell:
- which mode they are in: Learn, Explore, Build, or Examples
- which lesson, concept, or workflow they are viewing
- what to do next

### 1.2 One primary action per screen
Each screen can have supporting actions, but the main path should be obvious.

### 1.3 Show internals progressively
OpenClaw concepts can get dense quickly. The interface should reveal complexity in layers:
- first the summary
- then the labeled parts
- then expandable detail

### 1.4 Keep interaction causal, not decorative
If something animates or changes state, it should teach cause and effect:
- what loaded
- what changed
- what triggered the next step

### 1.5 Reward progress without gamifying it too hard
Progress should feel steady and useful, not childish.
Use:
- completion checks
- resume state
- module progress
- "next best step" prompts

Avoid noisy badges and fake achievement systems in MVP.

---

## 2. Shared interaction patterns

These patterns should be reused so the product feels coherent.

### 2.1 Progress pattern
Used in:
- Home
- Learn index
- Module page
- Lesson page

Behavior:
- completed lessons show a check state
- the current lesson shows an active state
- incomplete lessons show default state
- a "Resume" CTA should send the learner to the most recent incomplete or last visited lesson

MVP storage:
- browser local storage only

### 2.2 Related content pattern
Used in:
- Lesson page
- Concept detail
- Example workflow detail
- Builder result

Behavior:
- show small cards or links for related lessons, concepts, or workflows
- these should feel like "learn more" connections, not required blockers
- keep them visually secondary to the main content

### 2.3 Inspector panel pattern
Used in:
- Run Visualizer
- Workflow Builder
- Example Workflow detail
- some Lesson screens with teaching aids

Behavior:
- left/main area = current step or narrative
- right panel = details, artifacts, explanation, or generated summary
- on mobile, stack vertically with the inspector below the main content

### 2.4 Step timeline pattern
Used in:
- Run Visualizer
- Example Workflow detail

Behavior:
- vertical or horizontal sequence of steps
- selecting a step reveals details and artifacts
- completed/current/upcoming states should be visually distinct
- the learner can move forward and backward freely

---

## 3. Screen-by-screen notes

---

## 3.1 Home / Course Overview

**Route:** `/`

### Learner job
Understand what this product teaches and choose a starting path.

### Primary action
Start learning.

### Secondary actions
- Resume progress
- Explore concepts
- Try workflow builder
- Open example workflows

### Core content blocks
1. Hero section
2. "What you will learn" summary
3. Learning journey overview
4. Featured modules
5. Featured concepts
6. Featured workflows
7. Resume/progress panel

### Recommended interaction model
The home page should work like a launchpad, not a landing page full of marketing fluff.

Suggested CTA hierarchy:
1. **Start learning** if no progress exists
2. **Resume course** if progress exists
3. text links or secondary buttons for Explore / Build / Examples

### Important states

#### First-time state
- Show a simple intro to the tutorial
- Emphasize the guided path
- CTA: Start with Module 1

#### Returning learner state
- Show resume card near the top
- Include:
  - last lesson visited
  - percent complete or lessons completed
  - CTA: Continue where you left off

#### No content-polish-ready state
If some lesson content is still partial, the home page should still be usable.
Use labels like:
- Ready now
- In progress
- Coming soon

### Micro-interactions
- Hover/focus on module cards should preview what the module teaches
- Clicking a featured concept goes to concept detail, not just Explore index
- Clicking a workflow card goes directly to that example detail page

### Do not overbuild in MVP
- No carousel
- No autoplay animation
- No account/signup prompts

---

## 3.2 Learn Index

**Route:** `/learn`

### Learner job
See the full course structure and pick a module or resume the main path.

### Primary action
Resume the recommended next lesson.

### Core content blocks
1. Page intro
2. Course progress summary
3. Module list
4. Optional "recommended next" card

### Interaction model
The main interaction here is browsing the course map.
Each module card/list item should show:
- module title
- short description
- lesson count
- estimated time
- completion status
- CTA: Start / Continue / Review

### Important states

#### New learner
- modules all shown as not started
- top CTA starts Module 1

#### Partially completed learner
- one module may show in-progress state
- top CTA takes them to first incomplete lesson

#### Fully completed learner
- CTA changes to Review course or Revisit examples

### Design note
The Learn index should feel calmer and more structured than the home page.
Think syllabus dashboard, not marketing overview.

---

## 3.3 Module Overview

**Route:** `/learn/[moduleSlug]`

### Learner job
Understand what this module covers before entering a lesson.

### Primary action
Start or continue the module.

### Core content blocks
1. Module header
2. Learning goals
3. Ordered lesson list
4. Estimated time
5. Optional related concepts section

### Interaction model
Lesson list is the dominant element.
Each lesson row should show:
- order number
- lesson title
- short summary
- duration
- completion state
- lock-free access in MVP

### Important states

#### Fresh module
- CTA: Start module
- first lesson emphasized

#### In-progress module
- CTA: Continue module
- next incomplete lesson emphasized

#### Completed module
- CTA: Review lessons
- suggest next module

### Interaction detail
If the learner clicks a completed lesson, take them straight in. Do not block or warn.
Reviewing is part of learning.

---

## 3.4 Lesson Screen

**Route:** `/learn/[moduleSlug]/[lessonSlug]`

### Learner job
Learn one concept clearly, with one supporting visual or interaction.

### Primary action
Complete the lesson and move to the next one.

### Secondary actions
- open related concept
- inspect related workflow
- launch linked simulation
- move previous/next

### Core layout
1. Breadcrumb
2. Lesson header
3. Main lesson content
4. Key takeaway box
5. Teaching aid panel
6. Related links
7. Previous/next controls
8. Sidebar module map

### Interaction model
This screen should balance reading and seeing.

Recommended behavior:
- content scrolls naturally in the main column
- teaching aid stays visible in a sticky side panel on desktop when possible
- when the learner reaches the takeaway or bottom of the content, a completion CTA becomes prominent

### Completion interaction
MVP pattern:
- button: **Mark lesson complete**
- after click:
  - store completion locally
  - update sidebar state
  - reveal or emphasize **Next lesson** CTA

Optional enhancement:
- auto-mark complete when the learner reaches the bottom and spends enough time
- but manual marking is clearer for MVP

### Teaching aid behavior by type

#### Diagram / stack visual
- static visual with labeled callouts
- hover or tap can highlight one part at a time

#### Mini simulation
- 2-4 state interaction max
- one clear prompt, one visible outcome
- reset button should always exist

#### Run visualizer deep-link
- if lesson links to a run scenario, open the visualizer with the scenario preselected

#### Concept map focus
- show selected concept and immediate neighbors only
- do not dump the whole graph into a lesson sidebar

### Important states

#### Reading state
Main content and aid both visible.

#### Completed state
- completion indicator appears
- next lesson button becomes visually strongest

#### Partial content state
If a lesson is only partly authored:
- keep the structure intact
- show honest placeholder copy like "Expanded examples coming in a later pass"
- never leave blank sections with no explanation

### Lesson UX rule
Each lesson should teach exactly one central idea well.
If a page is trying to explain five concepts at once, it should be split.

---

## 3.5 Concept Explorer Index

**Route:** `/explore`

### Learner job
Browse key OpenClaw concepts non-linearly and see how they connect.

### Primary action
Open a concept.

### Core content blocks
1. Intro to concept explorer
2. Concept map or relationship view
3. Filter controls
4. Concept card grid/list
5. Quick explanation panel for selected concept

### Recommended MVP interaction model
Start simpler than a full free-pan graph.

Best MVP pattern:
- concept cards or node list on the left/main area
- selecting a concept updates a side panel or summary area
- detail link opens the concept route

This gives the "explore relationships" feeling without making the UI fragile.

### Filters
Useful simple filters:
- Core
- Execution
- Context
- Automation
- Safety
- Orchestration

### Important states

#### No concept selected
- show instruction: Select a concept to inspect it
- optionally feature 3-4 important concepts

#### Concept selected
- highlight related concepts
- show short definition, why it matters, and related lessons

### Do not overbuild in MVP
- no physics-heavy draggable graph required
- no dense network chart if it hurts readability

The concept explorer is for understanding, not showing off a graph library.

---

## 3.6 Concept Detail

**Route:** `/explore/concepts/[conceptSlug]`

### Learner job
Understand one concept deeply enough to connect it to the rest of the system.

### Primary action
Continue to related lessons or concepts.

### Core content blocks
1. Concept header
2. Short definition
3. Explanation
4. Why it matters
5. Examples
6. Related concepts
7. Related lessons

### Interaction model
This page should be compact, legible, and highly linkable.

Recommended behavior:
- related concepts shown as chips or cards
- related lessons shown as stronger CTAs because they move the learner back into the course flow
- examples can use collapsible cards if needed, but plain display is fine for MVP

### Important states

#### Standalone visit state
If a learner lands here directly from home or search-like navigation, the page should still explain the concept without assuming prior lesson context.

#### Cross-link state
If the learner came from a lesson, consider a small back-link to the lesson route.

---

## 3.7 Workflow Builder

**Route:** `/build`

### Learner job
Assemble a sensible OpenClaw workflow from guided choices and understand why it makes sense.

### Primary action
Generate a workflow recommendation.

### Core content blocks
1. Builder intro
2. Step-by-step option groups
3. Draft summary
4. Result panel
5. Related example suggestions

### Recommended interaction model
The builder should feel like structured design, not a blank form.

Use a stepper or stacked sections in this order:
1. Goal
2. Trigger
3. Context
4. Tools
5. Memory
6. Output
7. Approval/autonomy

For MVP, each section can be a radio or checkbox group with plain-language descriptions.

### Core behavior
As the learner makes selections:
- the draft summary updates immediately
- incomplete sections are visibly marked
- the final result can either update live or on a deliberate "Generate workflow" click

Best MVP choice:
- live-updating draft summary
- explicit **Generate workflow** for the final rationale panel

That preserves a sense of progression and avoids premature result churn.

### Result panel requirements
The result panel should include:
- recommended workflow title
- one-paragraph summary
- design rationale bullets
- warnings if the configuration is risky or mismatched
- links to similar examples

### Important states

#### Empty state
- no selections yet
- show a simple prompt like "Choose a goal to begin shaping your workflow"

#### Partial state
- draft summary reflects only chosen pieces
- generate button can remain disabled until minimum required sections are completed

#### Complete state
- result panel appears or refreshes
- strongest next CTA: View similar example workflow

### UX guardrails
- never output a fake highly specific workflow if the learner has only made vague selections
- if there is tension in choices, explain it clearly

Example:
"You selected high autonomy plus external actions. In practice, this usually needs tighter approval boundaries."

### Do not overbuild in MVP
- no drag-and-drop canvas
- no freeform node editor
- no code export required

---

## 3.8 Example Workflows Index

**Route:** `/examples`

### Learner job
Browse complete workflow patterns and pick one to inspect.

### Primary action
Open an example workflow.

### Core content blocks
1. Page intro
2. Workflow cards
3. Filter or sort controls

### Workflow card content
Each card should show:
- title
- summary
- difficulty
- trigger type
- 2-3 highlighted concepts
- CTA: Inspect workflow

### Recommended filters
Keep it simple:
- difficulty
- trigger type
- maybe "best for beginners"

### Important states

#### Small content set state
If there are only 3 workflows at first, do not force complex filtering UI.
Simple chips or segmented controls are enough.

---

## 3.9 Example Workflow Detail

**Route:** `/examples/[workflowSlug]`

### Learner job
Inspect a workflow end-to-end and understand how the design choices fit together.

### Primary action
Step through the workflow.

### Secondary actions
- open related concepts
- open related lessons
- compare with builder ideas mentally

### Core content blocks
1. Workflow header
2. Workflow summary snapshot
3. Why this design section
4. Step timeline
5. Artifacts / details panel
6. Related concepts and lessons

### Interaction model
This screen should behave like a guided teardown.

Top summary snapshot should include:
- user goal
- trigger
- context sources
- tools used
- memory pattern
- session pattern
- output pattern
- approval mode

Then the step timeline becomes the main interactive area.

### Timeline behavior
- learner clicks a step
- selected step becomes active
- details panel shows explanation and any artifacts
- previous/next step buttons can supplement direct clicking

### Artifact examples
Useful artifact cards:
- schedule trigger card
- file read card
- tool call card
- session note card
- output report card

### Important states

#### Overview-first state
When the page loads, show the workflow summary before forcing interaction with the timeline.
The learner should understand the pattern before the execution details.

#### Step-selected state
Once a step is selected, the page should make the step feel concrete, not abstract.
Use labels like:
- What happened
- Why it happened
- What artifact became visible

---

## 3.10 Run Visualizer

**Route:** `/simulations/run-visualizer`

### Learner job
See what happens during an OpenClaw run, including hidden internal stages.

### Primary action
Play through a scenario step by step.

### Core content blocks
1. Intro and scenario selector
2. Prompt or scenario input area
3. Stage timeline
4. Active stage explanation
5. Visible artifacts panel
6. Final output panel

### Recommended interaction model
The run visualizer should be the clearest interactive teaching surface in the MVP.

Use preset scenarios first.
A fake input box can exist for framing, but the actual behavior should be driven by scenario data.

### Scenario selection behavior
When the learner selects a scenario:
- reset timeline state
- show scenario summary
- highlight stage 1
- keep a clear CTA: Step through run

### Playback controls
Best MVP controls:
- Next step
- Previous step
- Jump to stage by clicking stage timeline
- Reset

Optional later:
- autoplay
- show internals toggle

### Stage behavior
Each stage should answer three things:
1. what is happening now
2. what became visible at this stage
3. why it matters

### Artifact behavior
Artifacts should appear at the stage where they become relevant.
Examples:
- context assembly reveals loaded files and memory items
- tool call stage reveals tool input/output previews
- persistence stage reveals what was written or remembered

### Important states

#### Not started state
- scenario chosen
- timeline visible but inactive
- CTA: Start run

#### In progress state
- current stage highlighted
- completed stages remain clickable
- active explanation panel updates with each step

#### Completed state
- final output shown clearly
- persistence summary shown
- CTA: Try another scenario
- CTA: View related lesson or concept

### Teaching warning
Do not imply false precision.
This screen should explain representative OpenClaw behavior, not pretend to be a packet capture of the real runtime.
That distinction can be stated lightly in helper copy.

---

## 4. Cross-screen journey notes

These flows matter more than any one page in isolation.

### 4.1 First-time learner flow
1. Land on Home
2. Click Start learning
3. Enter Module 1 or first lesson
4. Complete a lesson
5. Continue to next lesson
6. At appropriate lesson links, branch into Run Visualizer or Concept Explorer
7. Return to course path

The product should feel like guided learning with optional side paths, not a maze.

### 4.2 Non-linear explorer flow
1. Land on Home or Explore
2. Open a concept
3. Follow related concepts
4. Jump into a lesson when ready

This flow matters for users who already know they want definitions and structure before doing the course linearly.

### 4.3 Builder-led flow
1. Open Build
2. Make workflow selections
3. Generate result
4. Jump to a related example workflow
5. Follow links back to lessons explaining weak spots

This is important because some users learn best by trying to build first and backfilling theory afterward.

---

## 5. MVP component candidates implied by these screens

This is not a full component architecture, but these reusable UI pieces are clearly justified.

### Navigation and orientation
- TopNav
- Breadcrumbs
- ProgressBadge / ProgressSummary
- ResumeCard

### Learning structure
- ModuleCard
- LessonList
- LessonSidebarMap
- CompletionButton
- RelatedContentCards

### Teaching surfaces
- ConceptCard
- ConceptRelationshipList or MiniGraph
- Timeline
- ArtifactCard
- InspectorPanel
- CalloutBox
- TakeawayBox

### Builder pieces
- OptionGroupSection
- SelectionChip / RadioCard / CheckboxCard
- DraftSummaryPanel
- WorkflowResultPanel
- WarningCallout

These components should be enough to build the MVP without inventing a huge design system.

---

## 6. What can intentionally stay simple in v1

The MVP does not need:
- user accounts
- server persistence
- true live OpenClaw integration
- drag-and-drop workflow editing
- complex graph physics
- rich animation for its own sake
- quiz scoring systems

The app will already feel interactive if these are done well:
- lesson progression
- concept selection
- step timelines
- builder choices
- visible artifacts

---

## 7. Recommended next artifact

The next practical UX/implementation artifact should be one of these:

1. `MVP_COMPONENT_MAP.md`
   - maps these interaction notes to reusable React components and props

2. `APP_SCAFFOLD_PLAN.md`
   - defines the actual project structure, routes, content files, and initial build order

3. `LESSON_SCREEN_WIREFRAMES.md`
   - if Joshua wants more concrete screen composition before coding

My recommendation: create `APP_SCAFFOLD_PLAN.md` next, because the route map, content model, data seeds, and interaction notes are now detailed enough to scaffold the app with low ambiguity.

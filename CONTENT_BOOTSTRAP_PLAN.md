# Content Bootstrap Plan

This document defines the minimum content package needed to scaffold the OpenClaw Interactive Tutorial MVP.

It is not a full curriculum-writing plan.
It is a build plan for content so the frontend can render real screens early, while simulations and advanced teaching assets stay intentionally shallow or mocked.

---

## 1. Purpose

This artifact answers five implementation questions:

1. What content must exist to scaffold the app?
2. Which lessons/concepts/workflows should be seeded first?
3. Which simulations should be mocked first?
4. What can stay stubbed in the first pass?
5. What content is required to make Milestone 1 feel real?

The goal is to let engineering build against stable, practical seed data instead of waiting for the full course to be authored.

---

## 2. Guiding principle

For MVP bootstrapping, content should be created in **layers**:

### Layer 1: Navigation content
Enough structured content to render:
- Home
- Learn index
- Module overview pages
- At least one complete lesson page

### Layer 2: Teaching seed content
Enough real educational content to prove:
- the product has a coherent learning arc
- the lesson schema works
- lessons can link to concepts and examples

### Layer 3: Mocked interaction content
Enough scenario/workflow/simulation data to let the interactive surfaces exist before they are fully deep.

### Layer 4: Stubbed expansion points
Everything else can remain placeholder until the shell and first learning loop are working.

---

## 3. Minimum seed content needed to scaffold the app

The frontend should not start with empty routes.
The minimum content set should support all primary page types in the architecture doc.

## 3.1 Course-level seed content

Create:
- `course` record
- module summaries for Modules 1 through 6
- featured lesson list
- featured workflow list
- short onboarding copy for the home page

Minimum fields needed:
- course title
- course summary
- module order
- module title
- module slug
- module summary
- module status or availability label

This is enough to render:
- landing page hero
- course map
- module cards
- navigation shell

## 3.2 Module-level seed content

Each MVP module should have:
- title
- slug
- 1-paragraph summary
- module goal
- estimated lesson count
- lesson ID list
- featured concepts
- featured interactive asset

Modules that should exist immediately:
- Module 1: What OpenClaw Is
- Module 2: How a Run Actually Works
- Module 3: The Core Building Blocks
- Module 4: Safety, Control, and Boundaries
- Module 5: Workflow Patterns That Actually Work
- Module 6: Designing Your Own Workflow

Even if not all lessons are fully written, these six modules should exist in seed form so the Learn index feels complete.

## 3.3 Lesson-level seed content

A practical first-pass lesson dataset should include two groups:

### Group A: fully seeded lessons
These should have enough real body content to render as believable lesson pages.

### Group B: placeholder lessons
These should exist in metadata form, with compact summary content and a "coming next" or short-form lesson body.

Minimum fields for every lesson record:
- `id`
- `moduleSlug`
- `slug`
- `title`
- `depth` (`core`, `light`, `integrated`)
- `summary`
- `learningObjectives`
- `keyTerms`
- `interactiveType`
- `interactiveAssetId` or `null`
- `relatedConcepts`
- `relatedExamples`
- `prerequisites`
- `nextLessons`
- `contentBlocks`
- `takeaway`

Minimum content blocks supported initially:
- intro paragraph
- key points list
- callout
- simple comparison block
- checkpoint/question block
- related links block

Do **not** require rich custom block types in phase 1.

## 3.4 Concept seed content

Create a small concept set, not a full ontology.

Minimum concept records should exist for:
- agent
- workspace
- session
- tools
- channels
- routing
- context
- memory
- subagents
- guardrails
- approval
- trigger
- workflow

Each concept only needs:
- title
- slug
- short definition
- why it matters
- related lessons
- related concepts

This is enough to support:
- concept chips on lesson pages
- a simple Explore page
- basic cross-linking

## 3.5 Workflow seed content

All three MVP workflows should exist immediately as content records, even if their viewer experience is initially simple.

Required workflows:
- Morning Briefing
- Research Assistant
- Recurring Maintenance Check

Minimum fields:
- `id`
- `slug`
- `title`
- `pattern`
- `triggerType`
- `summary`
- `goal`
- `tools`
- `contextSources`
- `sessionStyle`
- `outputType`
- `risks`
- `steps`
- `commonFailureModes`
- `relatedLessons`

This is enough for:
- examples index cards
- basic workflow detail pages
- builder presets later

---

## 4. Which lessons should exist first

The lesson map identifies many strong candidates, but not all of them need full body content on day one.

## 4.1 First lessons that should be fully real

These should be authored first because they unlock the architecture, learning flow, and cross-linking model.

### Tier 1: first fully written lessons
1. **1.2 The core mental model: agent, workspace, session, tools, channels**
2. **2.2 Context assembly: system prompt, files, memory, session history**
3. **3.2 AGENTS.md, SOUL.md, USER.md, and bootstrap context**
4. **3.4 Memory files versus chat history**
5. **4.3 What should require approval**
6. **6.2 Defining the trigger: message, schedule, event, or file**

Why these first:
- they explain the product’s key differentiators
- they create reusable cross-links into concepts and workflows
- they support later examples and builder logic
- they are some of the highest-value lessons from the lesson map priorities

## 4.2 First lessons that should at least exist as compact lessons

These should exist in metadata + short-body form early so modules do not feel empty.

Recommended compact lesson seed set:
- 1.1 What problem OpenClaw solves
- 1.4 The difference between chatting, automating, and orchestrating
- 2.1 A message comes in: intake and routing
- 2.3 Model response and tool calls
- 2.5 Why agents sometimes feel passive, slow, or inconsistent
- 3.1 Workspaces: where the agent lives
- 3.3 Sessions and why they matter
- 3.5 Tools: read, write, exec, web, sessions, and more
- 3.9 Subagents and isolated work
- 4.1 Trust boundaries
- 4.5 Designing standing orders and guardrails
- 5.2 The scheduled briefing pattern
- 5.4 The research pipeline pattern
- 5.6 The delegate pattern
- 6.1 Picking the right first workflow
- 6.4 Choosing the right tools and skills
- 6.5 Deciding where memory should live
- 6.6 When to use main session, isolated sessions, or subagents
- 6.7 Designing for approval versus autonomy

These can be shorter than the Tier 1 set, but they should still be renderable and linkable.

## 4.3 Lessons that can stay integrated or deferred initially

These do not need full lesson treatment in Milestone 1:
- 1.3 What makes OpenClaw different from a normal chatbot
- 2.4 Streaming, final replies, and session persistence
- 3.6 Channels and routing
- 3.7 Skills and reusable capabilities
- 3.8 Cron jobs, heartbeats, and wakeups
- 4.2 What the agent should do automatically
- 4.4 Sandboxing, tool restrictions, and limiting blast radius
- 4.6 Preventing spam, overreach, and weird autonomous behavior
- 5.1 The chat assistant pattern
- 5.3 The monitor-and-alert pattern
- 5.5 The coding/operator pattern
- 5.7 The multi-agent team pattern
- 6.3 Defining the output

These can be represented as:
- concept cards
- short lesson stubs
- related-reading blocks
- workflow annotations

---

## 5. Which concepts should exist first

The concept layer should support both learning pages and future exploration UI.

## 5.1 Required first concept set

These should be authored first because they appear repeatedly across the first lessons and workflows:

### Core system concepts
- agent
- workspace
- session
- tools
- channels
- routing
- context
- memory

### Workflow/control concepts
- trigger
- workflow
- approval
- guardrails
- autonomy
- subagents

## 5.2 Nice-to-have but deferrable concepts

These can wait or stay shallow at first:
- heartbeats
- cron
- sandboxing
- blast radius
- skills
- persistence
- audit trail
- thresholds
- artifact

## 5.3 Minimum authoring depth per concept

Each seed concept only needs:
- 1-sentence definition
- short practical explanation
- 2 to 4 related lessons
- 1 to 3 related concepts

Do not try to write encyclopedia entries up front.
The job of early concept content is navigation and clarity, not exhaustiveness.

---

## 6. Which workflows should exist first

The three MVP workflows should all exist from the start because they structure the examples area and become reusable teaching anchors.

## 6.1 Workflow creation order

### First workflow to fully seed
**Morning Briefing**

Why first:
- easiest to understand
- strongest example of bounded automation
- supports teaching triggers, context, memory, and anti-spam guardrails
- can be used in both the Example Viewer and Run Visualizer-adjacent teaching

### Second workflow to fully seed
**Research Assistant**

Why second:
- demonstrates user-triggered tool orchestration
- clearly shows search/fetch/synthesis/report flow
- reinforces that OpenClaw is more than a chatbot

### Third workflow to seed
**Recurring Maintenance Check**

Why third:
- important for safety and operator patterns
- best place to introduce `exec`
- can start as a simpler report-focused example before deeper operational nuance is built

## 6.2 Minimum workflow detail needed at bootstrap

Each workflow should include:
- plain-language scenario
- trigger
- context loaded
- tools used
- step list
- output produced
- risk/boundary notes
- one bad version or failure mode

That is enough for a practical detail page even before advanced visuals are built.

---

## 7. Which simulations should be mocked first

The architecture and lesson map both point to interactivity being important, but not all simulations need to be real immediately.

## 7.1 First simulation to mock

### Run Visualizer
This is the first interactive teaching surface that should exist, even in simplified form.

Create at least **two deterministic mocked scenes**:
1. **Direct user message with tool use**
2. **Scheduled briefing run**

These were already identified as the recommended first scenarios in the next-actions doc.

## 7.2 What each Run Visualizer scene needs

Each scene only needs:
- title
- short scenario description
- trigger type
- ordered stages
- stage explanation copy
- mock artifacts per stage
- selected concept tags

Recommended first stage model:
1. trigger received
2. routing/intake
3. context assembled
4. model/tool decision
5. tool activity
6. response composition
7. final output / persistence

Recommended first artifact types:
- incoming message or scheduler event
- loaded files list
- memory snippet
- tool call record
- mock search/weather/result data
- final reply preview

## 7.3 Mocking priority order for simulations

### Priority A
Run Visualizer scene: direct user message with tool use
- supports lessons 2.1, 2.2, 2.3
- easiest explanation path
- teaches the general run anatomy

### Priority B
Run Visualizer scene: scheduled briefing run
- supports triggers, recurring runs, state, and proactive behavior
- ties well into Morning Briefing workflow

### Priority C
Workflow execution stepper scenes for example workflows
- can be lightweight wrappers around workflow step data at first
- do not need a distinct simulation engine in phase 1

## 7.4 Simulations that can wait

These should not block Milestone 1:
- debugging lab
- guardrails editor with live feedback
- advanced concept graph interactions
- drag-and-drop workflow canvas
- live OpenClaw-backed execution
- branching remediation simulator for maintenance workflows

---

## 8. What can stay stubbed initially

A strong scaffold does not require every content area to be deep.
The following can remain intentionally stubbed without hurting the MVP shell.

## 8.1 Stub-friendly surfaces

### Explore page
Can start as:
- searchable concept card grid
- simple related-concepts list

Does not need:
- polished graph visualization
- animated relationship map

### Examples index
Can start as:
- three cards with summary, trigger, and tools

Does not need:
- advanced filters
- comparison mode

### Workflow detail pages
Can start as:
- structured sections + step list + risk notes

Does not need:
- timeline animation
- dual-pane artifact inspector

### Build / Workflow Builder page
Can start as:
- stub route with intro copy and a minimal preset chooser
- or a static placeholder if Milestone 1 is strictly navigation-focused

Does not need:
- full reducer-driven build experience yet

## 8.2 Stub-friendly lesson content

For non-priority lessons, acceptable initial state is:
- summary paragraph
- 2 to 3 objectives
- related concepts
- related workflow/example links
- short takeaway

This is better than an empty route and keeps the course map coherent.

## 8.3 Stub-friendly concept content

Concept detail pages can initially render:
- short definition
- why it matters
- related lessons

They do not need long-form prose at first.

---

## 9. What content is needed to make Milestone 1 real

Per the current project docs, Milestone 1 is the **navigable tutorial shell**.

For that milestone to feel real rather than empty, the following content should exist.

## 9.1 Absolute minimum Milestone 1 content package

### Course shell
- course record
- 6 module summaries
- 15 to 25 lesson metadata records across Modules 1 through 6

### Real lesson content
At least **3 fully believable lessons**, preferably:
- 1.2 Core mental model
- 2.2 Context assembly
- 3.2 Bootstrap files

Why these three:
- together they explain what OpenClaw is, how runs get shaped, and why files matter
- they validate cross-linking to concepts
- they prove the lesson renderer against actual explanatory content

### Supporting lesson content
At least **8 to 12 compact lessons** with short content blocks so module pages are not mostly empty.

### Concept content
At least **8 concept records**, preferably:
- agent
- workspace
- session
- tools
- context
- memory
- approval
- trigger

### Workflow content
All **3 example workflow records** should exist so examples can already appear in nav/cards, even if their detail UIs are basic.

## 9.2 Recommended Milestone 1 content package

A stronger Milestone 1 package would include:
- 6 module summaries
- 18 to 22 lesson records total
- 6 fully authored lessons
- 10 to 14 concept records
- 3 workflow records with complete step lists
- 2 run-visualizer mock scenes

This gives the app enough density to feel intentionally designed rather than skeletal.

## 9.3 Milestone 1 definition of "content complete enough"

Milestone 1 content is complete enough when:
- every MVP module renders with a purpose and lesson list
- the Learn index shows a coherent path through the course
- at least one lesson-to-concept-to-example linkage is visible
- at least one lesson page feels genuinely instructional, not placeholder-only
- the examples area can show all three workflow cards
- the simulation route can be stubbed or lightly mocked without broken data dependencies

---

## 10. Recommended bootstrap deliverables

The following content artifacts should be created next in implementation order.

## Deliverable 1: content type-ready seed set
Create seed data for:
- course
- modules 1 through 6
- first lesson index
- first concept index
- workflow index

Goal:
make all primary routes render with typed data.

## Deliverable 2: first fully authored lesson pack
Author full bodies for:
- 1.2 Core mental model
- 2.2 Context assembly
- 3.2 Bootstrap files
- 3.4 Memory vs chat history
- 4.3 What should require approval
- 6.2 Defining the trigger

Goal:
prove the lesson renderer and key educational voice.

## Deliverable 3: compact support lesson pack
Add short-form content for the rest of the initial visible lessons.

Goal:
fill out module pages and next/previous navigation without blocking on long-form writing.

## Deliverable 4: example workflow seed pack
Create complete metadata + step lists for:
- Morning Briefing
- Research Assistant
- Recurring Maintenance Check

Goal:
unlock examples index/detail scaffolding and future builder presets.

## Deliverable 5: run-visualizer mock scene pack
Create scene data for:
- direct user message with tool use
- scheduled briefing run

Goal:
unlock Milestone 2 without rethinking the data model later.

---

## 11. Practical recommendation on authoring depth

To keep momentum high:

### Write deeply now
- foundational lessons that explain the system model
- workflow examples that act as reusable anchors
- concept definitions that appear everywhere

### Write shallowly now
- satellite lessons
- concept details beyond the core set
- advanced pattern pages
- polish prose and visual storytelling

### Mock now
- simulation artifacts
- workflow execution timelines
- operational command outputs
- weather/calendar/inbox data

### Delay now
- exhaustive syllabus coverage
- advanced branching simulations
- long concept essays
- polished graph-heavy exploration features

---

## 12. Plain-English summary

To bootstrap the tutorial, the project does **not** need all content written.
It needs a **small but intentional seed set** that makes the app navigable, teachable, and structurally honest.

The minimum practical content package is:
- all 6 MVP modules in summary form
- roughly 15 to 25 lesson records
- 3 to 6 fully written key lessons
- a small reusable concept set
- all 3 MVP workflow examples
- 2 mocked Run Visualizer scenes

Build these first, and the app can become a real tutorial shell.
Everything else can expand after the structure is proven.

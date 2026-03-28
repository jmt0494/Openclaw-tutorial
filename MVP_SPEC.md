# MVP Specification

## MVP goal

Create a first version of the tutorial that teaches the OpenClaw mental model clearly and interactively, without requiring live connection to a real OpenClaw instance.

## MVP screen list

### 1. Home / Course Overview
Purpose:
- Explain what the product is
- Show the learning journey
- Let the learner start or jump to a module

Key elements:
- Product intro
- Module list
- Progress indicator
- "Start learning" CTA
- "Explore concepts" CTA
- "Try workflow builder" CTA

### 2. Lesson Screen
Purpose:
- Deliver one lesson at a time
- Pair explanation with one visual or interactive teaching aid

Key elements:
- Lesson title
- Lesson summary
- Main content area
- Key takeaway box
- Visual diagram or mini simulation
- Previous/next navigation
- Sidebar course map

### 3. Run Visualizer
Purpose:
- Show how an OpenClaw run unfolds step by step

Key elements:
- User message input or preset prompts
- Step timeline:
  - intake
  - routing
  - context assembly
  - model inference
  - tool calls
  - final reply
  - persistence
- Expandable panels for each stage
- Visible artifacts such as loaded files, tool calls, and final output

### 4. Concept Explorer
Purpose:
- Let learners inspect major OpenClaw concepts outside the linear lesson flow

Key elements:
- Clickable concept map
- Cards for sessions, memory, tools, channels, cron, skills, subagents
- Visual explanations and short examples

### 5. Workflow Builder
Purpose:
- Help learners design a workflow from structured choices

Key elements:
- Goal input
- Trigger selector
- Context selector
- Tool selector
- Memory selector
- Output selector
- Approval/autonomy selector
- Generated workflow summary
- "Why this design" explanation

### 6. Example Workflow Viewer
Purpose:
- Show complete example workflows in a step-by-step format

Initial examples:
- Morning briefing
- Research assistant
- Recurring maintenance check

Key elements:
- Workflow overview
- Trigger
- Files used
- Tools used
- Session pattern
- Output pattern
- Step-through execution view

## MVP navigation

Primary nav:
- Learn
- Explore
- Build
- Examples

Secondary nav:
- Sidebar module tree inside learning mode
- Previous / next lesson controls
- Breadcrumbs for current location

## MVP interactivity requirements

1. Every major module should include at least one interactive teaching element.
2. The Run Visualizer must show hidden system behavior in sequence.
3. The Workflow Builder must produce an understandable workflow summary.
4. Example workflows must be inspectable, not just described.
5. The app should feel useful without requiring real OpenClaw execution.

## MVP content requirements

- Modules 1 through 6 should be represented in the first release, even if not every lesson is fully expanded.
- At least 3 complete example workflows should exist.
- The explanations should stay consistent with real OpenClaw concepts and terminology.

## MVP UX requirements

- Beginner-friendly language
- Visual clarity over density
- The learner should always know what they are looking at
- Strong sense of progress and structure

## Technical suggestion for MVP

- Frontend: React or Next.js
- Styling: Tailwind or similarly fast utility-based system
- Content source: markdown or structured JSON
- Simulations: mocked state machines and prebuilt example data
- No backend required for first prototype unless needed for content management

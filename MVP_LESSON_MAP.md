# MVP Lesson Map

This document translates the current product spec, syllabus, and MVP scope into a concrete curriculum plan for the first release.

It focuses on Modules 1 through 6, since those are required for the MVP.

## Purpose

Use this artifact to:
- decide which lessons need full lesson screens first
- align lessons with interactive UI features
- identify which concepts can be taught lightly vs deeply in MVP
- sequence the learner from mental model to workflow design

## Design assumptions for MVP

- Modules 1 through 6 are included in the course map
- Not every syllabus item needs a full long-form lesson in v1
- Each module should include at least one meaningful interactive element
- The Run Visualizer, Concept Explorer, and Workflow Builder should carry real teaching weight, not just act as side features
- Example workflows live outside the core Learn path, but should be referenced from it

---

# 1. MVP curriculum structure

## Recommended lesson depth labels

Use these labels when planning implementation:

- **Core lesson**: full lesson screen with strong explanation and an interactive element
- **Light lesson**: shorter lesson screen or compact concept page
- **Integrated concept**: taught mainly inside another lesson, visualizer, or explorer rather than as a full standalone lesson

## Recommended MVP lesson count

A practical MVP target is:
- **12 core lessons**
- **8 to 12 light lessons**
- remaining syllabus items represented as integrated concepts

This keeps the course complete without requiring every subtopic to become a large content asset.

---

# 2. Module-by-module lesson map

## Module 1: What OpenClaw Is

### Module goal
Give the learner the basic frame: OpenClaw is not just a chatbot, but an agent system that operates inside a workspace, across sessions, with tools and channels.

### Why this module comes first
Without this frame, later lessons on runs, memory, cron, and subagents will feel like disconnected mechanics.

### Lessons

#### 1.1 What problem OpenClaw solves
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain why plain chat is insufficient for many recurring or operational tasks
  - describe the kinds of work OpenClaw is meant to handle
  - distinguish information answering from ongoing assistance and workflow execution
- **Teaching pattern**:
  - contrast 3 modes: chatbot, assistant with tools, orchestrated workflow system
  - show a before/after scenario: "ask once" vs "set up a useful ongoing behavior"
- **Interactive element**:
  - simple scenario sorter: "Is this better handled as chat, automation, or orchestration?"
- **Notes**:
  - this is the best course entry point for beginners

#### 1.2 The core mental model: agent, workspace, session, tools, channels
- **Depth**: Core lesson
- **Learner should be able to**:
  - define each of the five core concepts at a basic level
  - explain how they relate during a normal interaction
  - identify which parts are persistent vs per-run
- **Teaching pattern**:
  - one visual system map with click-to-highlight relationships
  - repeat the same five nouns throughout the lesson
- **Interactive element**:
  - mini concept map tied to hover/click definitions
- **Notes**:
  - this should likely be the anchor lesson for Module 1
  - it can also feed the Concept Explorer content model

#### 1.3 What makes OpenClaw different from a normal chatbot
- **Depth**: Light lesson
- **Learner should be able to**:
  - name at least three differences between a normal chatbot and OpenClaw
  - explain why files, tools, memory, and routing matter
- **Teaching pattern**:
  - side-by-side comparison card stack
- **Interactive element**:
  - comparison toggle: chatbot response vs OpenClaw run anatomy
- **Notes**:
  - keep this practical, not philosophical

#### 1.4 The difference between chatting, automating, and orchestrating
- **Depth**: Core lesson
- **Learner should be able to**:
  - distinguish reactive chat from scheduled or event-driven behavior
  - recognize when a workflow needs orchestration rather than a single prompt
  - understand that more autonomy requires more design discipline
- **Teaching pattern**:
  - ladder of complexity: one-off request -> repeated task -> multi-step workflow
- **Interactive element**:
  - learner classifies example use cases by operating mode
- **Notes**:
  - this is a bridge into Modules 4, 5, and 6

### Module 1 MVP recommendation
- Build **1.1, 1.2, 1.4** as full lessons
- Keep **1.3** compact
- Reuse the concept map in both Learn and Explore

---

## Module 2: How a Run Actually Works

### Module goal
Show the learner the hidden sequence of an OpenClaw run so the system stops feeling magical.

### Why this module matters
This module supports nearly every later debugging and workflow-design lesson.

### Lessons

#### 2.1 A message comes in: intake and routing
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain what starts a run
  - describe the role of routing before the model responds
  - understand that different channels or agent types may produce different handling
- **Teaching pattern**:
  - start with a single incoming message and trace its first steps
- **Interactive element**:
  - first step in Run Visualizer timeline
- **Notes**:
  - keep terminology stable: intake, routing, selected context

#### 2.2 Context assembly: system prompt, files, memory, session history
- **Depth**: Core lesson
- **Learner should be able to**:
  - identify the major sources of context loaded into a run
  - understand why different sessions can behave differently
  - explain why changing files can change future behavior
- **Teaching pattern**:
  - visible "context packing" animation or staged panel view
- **Interactive element**:
  - learner toggles context sources on/off and sees predicted behavior differences
- **Notes**:
  - this should be one of the most carefully taught lessons in the MVP

#### 2.3 Model response and tool calls
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain the difference between thinking/responding and acting through tools
  - recognize that tool calls are part of the run, not separate magic
  - understand that some runs require no tools while others rely on them heavily
- **Teaching pattern**:
  - branch diagram: answer directly vs call tool vs call multiple tools
- **Interactive element**:
  - tool-call playback inside Run Visualizer
- **Notes**:
  - include one example with a file read and one without tool use

#### 2.4 Streaming, final replies, and session persistence
- **Depth**: Light lesson
- **Learner should be able to**:
  - describe what the user sees during and after the run
  - understand that outcomes persist into session state/history
- **Teaching pattern**:
  - timeline finish state
- **Interactive element**:
  - expand final stage and persistence artifact

#### 2.5 Why agents sometimes feel passive, slow, or inconsistent
- **Depth**: Core lesson
- **Learner should be able to**:
  - name common reasons for confusing behavior
  - connect those reasons back to routing, context, tools, or memory
  - adopt a systems view instead of blaming "AI randomness" for everything
- **Teaching pattern**:
  - symptom -> likely cause mapping
- **Interactive element**:
  - diagnosis exercise using short failure cases
- **Notes**:
  - this lesson sets up Module 8 later, but belongs in MVP because it reduces frustration early

### Module 2 MVP recommendation
- Build **2.1, 2.2, 2.3, 2.5** as full lessons
- Treat **2.4** as lighter support content
- Make the **Run Visualizer** the centerpiece of this module

---

## Module 3: The Core Building Blocks

### Module goal
Introduce the system pieces one by one, now that the learner understands the run sequence.

### Important scope note
This module is broad. In MVP, it should not become a wall of encyclopedia pages. The best approach is to teach the most important objects fully, then use the Concept Explorer for the rest.

### Lessons

#### 3.1 Workspaces: where the agent lives
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain what a workspace is
  - understand why files in the workspace matter
  - distinguish workspace state from one-off chat text
- **Teaching pattern**:
  - "home of the agent" metaphor tied to concrete files and folders
- **Interactive element**:
  - clickable workspace diagram

#### 3.2 AGENTS.md, SOUL.md, USER.md, and bootstrap context
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain the role of each major bootstrap file at a high level
  - understand that these files shape behavior before a specific user message is answered
  - identify when file edits are a better fix than prompt repetition
- **Teaching pattern**:
  - layered context stack from general instructions to personal/user-specific context
- **Interactive element**:
  - inspect-a-file-card activity with "what behavior would this influence?"
- **Notes**:
  - this is a likely "aha" lesson for users new to workspace-driven agents

#### 3.3 Sessions and why they matter
- **Depth**: Core lesson
- **Learner should be able to**:
  - define a session in practical terms
  - explain why session continuity changes behavior
  - compare persistent conversational context vs isolated work
- **Teaching pattern**:
  - two parallel runs: same request in same session vs new session
- **Interactive element**:
  - session comparison slider

#### 3.4 Memory files versus chat history
- **Depth**: Core lesson
- **Learner should be able to**:
  - distinguish durable written memory from model-visible recent chat history
  - understand why "remember this" often means writing to a file, not hoping
  - decide what belongs in memory vs in transient conversation
- **Teaching pattern**:
  - persistence ladder: ephemeral message -> session history -> written memory
- **Interactive element**:
  - place-example-items exercise: where should this information live?

#### 3.5 Tools: read, write, exec, web, sessions, and more
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain what tools are and why they matter
  - distinguish information tools from action tools
  - understand why tool access changes capability and risk
- **Teaching pattern**:
  - capability gallery with risk labels
- **Interactive element**:
  - tool selection exercise based on task goals

#### 3.6 Channels and routing
- **Depth**: Light lesson
- **Learner should be able to**:
  - explain that the same agent may behave differently across channels or entry points
  - understand why routing rules matter
- **Teaching pattern**:
  - message origin diagram

#### 3.7 Skills and reusable capabilities
- **Depth**: Light lesson
- **Learner should be able to**:
  - describe skills as packaged instructions for recurring task types
  - understand that skills help reuse specialized behavior
- **Teaching pattern**:
  - compare ad hoc prompting vs reusable skill

#### 3.8 Cron jobs, heartbeats, and wakeups
- **Depth**: Light lesson for MVP, likely expandable later
- **Learner should be able to**:
  - explain the difference between waiting for a message and being triggered on a schedule/poll
  - understand why timing and cadence matter
- **Teaching pattern**:
  - trigger type chart
- **Notes**:
  - keep shallow here; workflow examples can do the heavier teaching

#### 3.9 Subagents and isolated work
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain why subagents exist
  - understand isolation, delegation, and focused task execution
  - identify when a subagent is useful vs unnecessary overhead
- **Teaching pattern**:
  - main agent delegates one bounded task and receives result
- **Interactive element**:
  - simple delegation flow diagram or simulation

### Module 3 MVP recommendation
Build as full lessons:
- **3.1 Workspaces**
- **3.2 Bootstrap files**
- **3.3 Sessions**
- **3.4 Memory vs chat history**
- **3.5 Tools**
- **3.9 Subagents**

Keep lighter or Concept Explorer-led:
- **3.6 Channels**
- **3.7 Skills**
- **3.8 Cron/heartbeats**

---

## Module 4: Safety, Control, and Boundaries

### Module goal
Teach that a useful agent is not just capable, but well-bounded.

### Why this belongs in MVP
Safety is not an advanced appendix. It directly shapes workflow design, approval patterns, and trust.

### Lessons

#### 4.1 Trust boundaries: personal assistant versus shared agent
- **Depth**: Core lesson
- **Learner should be able to**:
  - distinguish private personal-assistant contexts from shared or public contexts
  - explain why access level should change behavior
  - reason about information exposure and tone boundaries
- **Teaching pattern**:
  - compare two agent roles with different acceptable behaviors
- **Interactive element**:
  - boundary judgment scenarios

#### 4.2 What the agent should do automatically
- **Depth**: Light lesson
- **Learner should be able to**:
  - identify low-risk actions suitable for autonomy
  - understand that repetition and predictability help justify automation
- **Teaching pattern**:
  - autonomy ladder

#### 4.3 What should require approval
- **Depth**: Core lesson
- **Learner should be able to**:
  - identify high-risk or externally visible actions
  - explain why explicit approval is needed for some workflows
  - design approval checkpoints into a workflow
- **Teaching pattern**:
  - consequence-based risk sorting
- **Interactive element**:
  - choose approval-required steps in example workflows

#### 4.4 Sandboxing, tool restrictions, and limiting blast radius
- **Depth**: Light lesson
- **Learner should be able to**:
  - explain how limiting tools or environments reduces risk
  - understand that not every agent needs every capability
- **Teaching pattern**:
  - smallest-safe-capability principle

#### 4.5 Designing standing orders and guardrails
- **Depth**: Core lesson
- **Learner should be able to**:
  - write or evaluate a useful guardrail in plain language
  - understand the role of standing instructions in behavior shaping
  - distinguish vague preferences from enforceable boundaries
- **Teaching pattern**:
  - rewrite weak guardrails into stronger ones
- **Interactive element**:
  - guardrail editor exercise

#### 4.6 Preventing spam, overreach, and weird autonomous behavior
- **Depth**: Light lesson
- **Learner should be able to**:
  - recognize bad failure modes of over-eager agents
  - connect those failures to poor trigger design or missing limits
- **Teaching pattern**:
  - anti-pattern gallery

### Module 4 MVP recommendation
- Build **4.1, 4.3, 4.5** as full lessons
- Keep **4.2, 4.4, 4.6** concise but visible
- Tie the lessons directly into Workflow Builder choices around approval and autonomy

---

## Module 5: Workflow Patterns That Actually Work

### Module goal
Move from concepts to repeatable design patterns.

### Important scope note
In MVP, this module should function as a pattern library. It does not need every pattern to have a full lecture-length lesson.

### Lessons

#### 5.1 The chat assistant pattern
- **Depth**: Core lesson
- **Learner should be able to**:
  - describe the simplest useful OpenClaw operating pattern
  - identify its trigger, context, tool use, and output style
- **Teaching pattern**:
  - pattern card with anatomy breakdown

#### 5.2 The scheduled briefing pattern
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain how scheduled triggers combine with information gathering and summarization
  - identify where approval usually is and is not needed
- **Teaching pattern**:
  - recurring morning briefing walkthrough
- **Interactive element**:
  - linked example workflow preview

#### 5.3 The monitor-and-alert pattern
- **Depth**: Light lesson
- **Learner should be able to**:
  - describe threshold-based checking and alerting
  - understand that signal quality matters more than constant chatter
- **Teaching pattern**:
  - event threshold example

#### 5.4 The research pipeline pattern
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain a multi-step gather -> analyze -> summarize workflow
  - recognize where subagents or isolated sessions may help
- **Teaching pattern**:
  - step chain with source gathering and report output

#### 5.5 The coding/operator pattern
- **Depth**: Light lesson
- **Learner should be able to**:
  - understand the mix of file tools, shell tools, and caution needed for coding/operator tasks
  - identify why this pattern carries higher risk and more approvals
- **Teaching pattern**:
  - capability/risk overlay

#### 5.6 The delegate pattern
- **Depth**: Core lesson
- **Learner should be able to**:
  - explain when the main agent should delegate a bounded task
  - understand how delegation reduces clutter and increases focus
- **Teaching pattern**:
  - delegate one subtask, return structured result

#### 5.7 The multi-agent team pattern
- **Depth**: Integrated concept for MVP
- **Learner should be able to**:
  - understand the high-level idea of role separation across agents
- **Teaching pattern**:
  - short advanced concept card
- **Notes**:
  - likely too advanced for deep MVP treatment; save full depth for later expansion

### Module 5 MVP recommendation
Build as full pattern lessons:
- **5.1 Chat assistant**
- **5.2 Scheduled briefing**
- **5.4 Research pipeline**
- **5.6 Delegate pattern**

Treat as lighter:
- **5.3 Monitor-and-alert**
- **5.5 Coding/operator**

Treat as advanced preview:
- **5.7 Multi-agent team**

---

## Module 6: Designing Your Own Workflow

### Module goal
Help the learner synthesize everything into a workable design process.

### Why this is the payoff module
This is where the learner stops merely recognizing concepts and starts making design decisions.

### Lessons

#### 6.1 Picking the right first workflow
- **Depth**: Core lesson
- **Learner should be able to**:
  - choose a realistic first workflow with good signal and bounded scope
  - avoid overly ambitious first builds
- **Teaching pattern**:
  - good-first-project rubric

#### 6.2 Defining the trigger: message, schedule, event, or file
- **Depth**: Core lesson
- **Learner should be able to**:
  - choose an appropriate trigger for a given workflow goal
  - explain how trigger choice shapes the rest of the design
- **Teaching pattern**:
  - trigger-first design tree
- **Interactive element**:
  - Workflow Builder trigger step

#### 6.3 Defining the output: reply, file, report, or action
- **Depth**: Light lesson
- **Learner should be able to**:
  - identify what good output looks like for different workflow types
  - avoid vague outcomes like "just be helpful"
- **Teaching pattern**:
  - output form chooser

#### 6.4 Choosing the right tools and skills
- **Depth**: Core lesson
- **Learner should be able to**:
  - select the minimum viable capability set for a workflow
  - understand how tools and skills change both power and risk
- **Teaching pattern**:
  - capability selection matrix
- **Interactive element**:
  - Workflow Builder tool/skill step

#### 6.5 Deciding where memory should live
- **Depth**: Core lesson
- **Learner should be able to**:
  - choose between transient session context and written memory
  - reason about what should persist across runs
- **Teaching pattern**:
  - persistence decision tree
- **Interactive element**:
  - Workflow Builder memory step

#### 6.6 When to use main session, isolated sessions, or subagents
- **Depth**: Core lesson
- **Learner should be able to**:
  - choose the right execution context for a task
  - understand isolation tradeoffs and continuity benefits
- **Teaching pattern**:
  - compare three execution shapes using the same task

#### 6.7 Designing for approval versus autonomy
- **Depth**: Core lesson
- **Learner should be able to**:
  - design a workflow that balances usefulness with oversight
  - justify where approvals belong and where they do not
- **Teaching pattern**:
  - approval checkpoint design
- **Interactive element**:
  - Workflow Builder autonomy step with feedback

### Module 6 MVP recommendation
- Build **6.1, 6.2, 6.4, 6.5, 6.6, 6.7** as strong workflow-design lessons
- Keep **6.3** lighter
- Make the **Workflow Builder** the practical capstone for this module

---

# 3. Recommended teaching sequence across the MVP

## Phase A: Orientation
1. **1.1 What problem OpenClaw solves**
2. **1.2 Core mental model**
3. **1.4 Chatting vs automating vs orchestrating**

Goal: learner knows what kind of system this is.

## Phase B: Invisible mechanics
4. **2.1 Intake and routing**
5. **2.2 Context assembly**
6. **2.3 Model response and tool calls**
7. **2.5 Why behavior feels passive, slow, or inconsistent**

Goal: learner understands what happens in a run.

## Phase C: System parts
8. **3.1 Workspaces**
9. **3.2 Bootstrap files**
10. **3.3 Sessions**
11. **3.4 Memory vs chat history**
12. **3.5 Tools**
13. **3.9 Subagents**

Goal: learner can name and reason about the major building blocks.

## Phase D: Control and safety
14. **4.1 Trust boundaries**
15. **4.3 Approval design**
16. **4.5 Guardrails**

Goal: learner understands that workflow design includes boundaries.

## Phase E: Patterns and synthesis
17. **5.1 Chat assistant pattern**
18. **5.2 Scheduled briefing pattern**
19. **5.4 Research pipeline pattern**
20. **5.6 Delegate pattern**
21. **6.1 Picking the right first workflow**
22. **6.2 Trigger design**
23. **6.4 Choosing tools and skills**
24. **6.5 Memory design**
25. **6.6 Session/subagent choice**
26. **6.7 Approval vs autonomy**

Goal: learner can design a simple but coherent workflow.

---

# 4. Recommended interactive coverage by module

## Module 1
Primary interactive asset:
- **Concept map / scenario sorter**

Best use:
- establish vocabulary and operating modes

## Module 2
Primary interactive asset:
- **Run Visualizer**

Best use:
- show sequence, context loading, tool use, and persistence

## Module 3
Primary interactive asset:
- **Concept Explorer + focused mini-interactions**

Best use:
- inspect system components without bloating lesson pages

## Module 4
Primary interactive asset:
- **Risk and boundary exercises**

Best use:
- force judgment calls instead of passive reading

## Module 5
Primary interactive asset:
- **Pattern anatomy cards linked to Example Workflow Viewer**

Best use:
- teach reusable workflow shapes through examples

## Module 6
Primary interactive asset:
- **Workflow Builder**

Best use:
- convert concepts into decisions and produce a workflow summary

---

# 5. Minimum viable "fully built" lesson set

If implementation capacity is tight, the following set gives the strongest MVP learning arc:

## Essential core lessons
- 1.1 What problem OpenClaw solves
- 1.2 The core mental model
- 1.4 Chatting vs automating vs orchestrating
- 2.1 Intake and routing
- 2.2 Context assembly
- 2.3 Model response and tool calls
- 2.5 Why behavior feels inconsistent
- 3.1 Workspaces
- 3.2 Bootstrap files
- 3.3 Sessions
- 3.4 Memory files versus chat history
- 3.5 Tools
- 3.9 Subagents
- 4.1 Trust boundaries
- 4.3 What should require approval
- 4.5 Guardrails
- 5.2 Scheduled briefing pattern
- 5.4 Research pipeline pattern
- 5.6 Delegate pattern
- 6.1 Picking the right first workflow
- 6.2 Trigger design
- 6.4 Choosing tools and skills
- 6.5 Memory design
- 6.6 Session vs subagent choice
- 6.7 Approval vs autonomy

## Why this set works
This set gives the learner:
- a mental model
- a run model
- the major building blocks
- safety framing
- a few reusable patterns
- a design process

That is enough for the MVP objective even before every syllabus item gets full treatment.

---

# 6. Content production priorities

## Priority 1: Write first
These lessons likely unlock the most clarity per hour of writing:
- 1.2 The core mental model
- 2.2 Context assembly
- 3.2 AGENTS.md, SOUL.md, USER.md, and bootstrap context
- 3.4 Memory files versus chat history
- 4.3 What should require approval
- 6.2 Defining the trigger
- 6.7 Designing for approval versus autonomy

## Priority 2: Build interactive logic first
These interactions should be prototyped early because multiple lessons depend on them:
- Run Visualizer timeline state model
- Concept map / explorer data model
- Workflow Builder decision schema
- Example workflow anatomy schema

## Priority 3: Link lessons to examples
As soon as the example workflow viewer exists, connect these lessons to it:
- 5.2 Scheduled briefing -> Morning briefing example
- 5.4 Research pipeline -> Research assistant example
- 3.8 Cron jobs / heartbeats -> Recurring maintenance check example
- 5.6 Delegate pattern -> workflow using subagents

---

# 7. Suggested metadata fields for lesson content files

If lessons are stored as markdown or JSON, use a structure like:

- `id`
- `module`
- `title`
- `slug`
- `depth` (`core`, `light`, `integrated`)
- `summary`
- `learningObjectives`
- `keyTerms`
- `interactiveType`
- `interactiveAssetId`
- `prerequisites`
- `nextLessons`
- `relatedConcepts`
- `relatedExamples`
- `takeaway`

This will make it easier to drive navigation, progress, and cross-linking from one content model.

---

# 8. Open questions this artifact resolves vs leaves open

## Resolved by this document
- Which syllabus areas matter most for MVP depth
- Which lessons should be core vs light
- How to sequence the learner from fundamentals to workflow design
- Which interactive surfaces should teach which concepts

## Still open
- exact route structure and URL map
- exact content schema implementation format
- whether lessons are authored in markdown, MDX, or JSON-backed content objects
- visual style of diagrams and simulations

---

# 9. Recommended next curriculum artifact

The best follow-up artifact would be either:
1. **lesson metadata/content schema** for implementation, or
2. **full learning objectives file** for the essential core lessons only

If the next need is build-facing rather than curriculum-facing, the best next artifact is a **route map plus content model** aligned to this lesson plan.

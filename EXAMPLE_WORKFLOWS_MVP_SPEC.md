# MVP Example Workflows Spec

## Purpose

Define the three example workflows that should ship in the MVP of the OpenClaw Interactive Tutorial. These examples are chosen to:

- match the MVP spec's initial examples
- cover the most important OpenClaw building blocks
- give learners progressively richer mental models
- work well in a mocked or simulated teaching environment

## Selection criteria

A strong MVP example workflow should:

1. Teach a distinct workflow pattern
2. Introduce core OpenClaw concepts without overwhelming the learner
3. Be understandable without a live OpenClaw instance
4. Be easy to visualize step by step
5. Include realistic boundaries, failure modes, and design tradeoffs
6. Prepare the learner to design their own workflow in the builder

## Chosen MVP examples

1. Morning Briefing
2. Research Assistant
3. Recurring Maintenance Check

This set is strong because it spans:

- **trigger types:** scheduled, message-driven, recurring automation
- **output types:** chat summary, written artifact, health/report output
- **tool patterns:** read, web, exec, write
- **session patterns:** routine session, focused task session, operational check session
- **autonomy levels:** low-risk autonomous briefing, semi-guided research, bounded maintenance automation

---

# 1. Morning Briefing

## Why this belongs in the MVP

This is the best first example because it is easy to understand, broadly useful, and naturally demonstrates how OpenClaw can combine multiple information sources into a single helpful output. It also introduces cron, heartbeats, context files, and notification boundaries without needing complex tooling.

## Workflow pattern taught

**Scheduled briefing pattern**

A recurring run wakes up, checks a few sources, synthesizes the result, and sends a concise report.

## Teaching goals

The learner should understand:

- the difference between a normal chat message and a scheduled wake-up
- how a run gathers context from files and recent state
- how one agent can combine multiple small checks into one output
- why guardrails matter for proactive behavior
- why briefing workflows should be concise, not noisy

## Core concepts covered

- cron jobs or heartbeats
- workspace context
- memory/state tracking
- tools for reading local files or external sources
- final reply generation
- notification boundaries and anti-spam design

## Learner-facing scenario

"Every morning at 7:30 AM, the assistant checks the calendar, weather, and any urgent items, then sends one short briefing."

## Suggested simulation inputs

- calendar events for the day
- simple unread email/notification summary
- weather snapshot
- a small memory file indicating what was already mentioned recently

## Suggested workflow design

### Trigger
- schedule-based trigger
- example: weekday morning cron

### Inputs/context
- `USER.md` for preferences
- `HEARTBEAT.md` or briefing instructions
- recent memory/state file to avoid repeated alerts
- mocked calendar data
- mocked weather data
- mocked inbox summary

### Tools used
- `read`
- `web` or mocked external fetch
- optional `write` for updating last-briefed state

### Session pattern
- isolated recurring run or dedicated persistent briefing session
- should not rely on random chat history

### Output pattern
- one concise briefing
- sections like: today, urgent, weather, reminders
- no message if nothing meaningful changed, depending on design

## Step-by-step execution for the Example Workflow Viewer

1. Scheduler wakes the workflow
2. Agent loads briefing instructions and user preferences
3. Agent gathers calendar, weather, and inbox summaries
4. Agent checks whether anything is urgent or new
5. Agent composes a short briefing
6. Agent records what it already sent
7. Briefing is delivered

## Hidden system behavior worth visualizing

- the scheduler is the trigger, not a human message
- context files influence tone and selection criteria
- the agent performs lightweight synthesis rather than deep reasoning
- memory/state prevents repeated spam

## Key design choices to teach

- **Heartbeat vs cron:** heartbeat is flexible and batch-friendly; cron is precise
- **State tracking:** needed so the assistant does not repeat the same reminder every run
- **Conciseness:** briefing quality depends more on filtering than on completeness
- **Safety boundary:** proactive summaries are okay; proactive external actions are usually not

## Common failure modes to simulate

- too noisy: sends every minor detail every morning
- too passive: skips an actually important event
- stale state: repeats yesterday's reminder
- unclear prompt: produces a rambling essay instead of a briefing

## Why it is pedagogically valuable

This is the clearest example of OpenClaw as a personal operator with bounded autonomy. It helps learners grasp proactive behavior early without jumping into dangerous or overly technical territory.

---

# 2. Research Assistant

## Why this belongs in the MVP

This workflow demonstrates message-triggered work, evidence gathering, synthesis, and writing outputs. It shows the difference between "chatting" and "doing a structured task," which is central to the tutorial's mental model.

## Workflow pattern taught

**Research pipeline pattern**

A user asks a question, the agent gathers sources, extracts useful information, and returns either a response or a written artifact.

## Teaching goals

The learner should understand:

- how a task-oriented run differs from a conversational reply
- when to use web tools versus local files
- how output format changes workflow design
- why source handling and synthesis matter
- how to save work products into the workspace

## Core concepts covered

- user-triggered runs
- tool calls for search and fetch
- structured note-taking or report writing
- workspace artifacts
- approval and external-boundary considerations
- inspectable chain from question to answer

## Learner-facing scenario

"I need a quick comparison of two options. Find reliable sources, summarize them, and save a short report in the workspace."

## Suggested simulation inputs

- a user query
- 3 to 5 mocked search results
- extracted source snippets
- a requested output format like bullet summary or markdown memo

## Suggested workflow design

### Trigger
- direct user message

### Inputs/context
- task request from chat
- optional existing notes in workspace
- source quality rubric or research instructions file

### Tools used
- `web_search`
- `web_fetch`
- `read`
- `write`

### Session pattern
- task-focused interactive session
- may include a clarification step before research begins

### Output pattern
- concise answer in chat
- optional saved markdown report in workspace
- citations or source links in the final output

## Step-by-step execution for the Example Workflow Viewer

1. User asks a research question
2. Agent interprets the task and desired output
3. Agent searches for sources
4. Agent fetches the most relevant pages
5. Agent extracts the useful points
6. Agent synthesizes the findings
7. Agent writes a report file
8. Agent replies with a summary and points to the artifact

## Hidden system behavior worth visualizing

- search results are not knowledge until fetched and synthesized
- tool outputs become part of the active run context
- the agent can create durable artifacts in the workspace
- the same workflow could produce a chat reply, a file, or both

## Key design choices to teach

- **Clarify first or not:** if the task is underspecified, asking one question may improve the whole run
- **Save or only reply:** durable outputs are useful for larger tasks
- **Source count:** too few sources is brittle; too many slows the workflow and muddies synthesis
- **Citation style:** transparent sourcing builds trust and debuggability

## Common failure modes to simulate

- weak query interpretation leads to bad search results
- over-collection creates a bloated summary
- missing artifact means useful work disappears into chat history
- no sourcing makes the answer hard to verify

## Why it is pedagogically valuable

This workflow is the most direct demonstration that OpenClaw is more than a chatbot. It shows a full mini-pipeline: trigger, tool use, synthesis, artifact creation, and final delivery.

---

# 3. Recurring Maintenance Check

## Why this belongs in the MVP

This example teaches operational workflows, bounded automation, and safety-first design. It introduces `exec`, health checks, logs, and approval boundaries in a realistic but controllable way.

## Workflow pattern taught

**Monitor-and-report / maintenance-check pattern**

A scheduled workflow inspects system or service state, summarizes risks, and either reports findings or proposes actions.

## Teaching goals

The learner should understand:

- how operational workflows differ from simple briefing workflows
- why `exec` is powerful and risky
- how to separate observation from action
- how recurring checks create useful longitudinal visibility
- why approval boundaries matter more in operator workflows

## Core concepts covered

- recurring automation
- `exec` for local inspection
- logs and status outputs
- report generation
- approval gates for corrective action
- durable history via written files

## Learner-facing scenario

"Every week, run a lightweight health check on my machine or service, summarize anything risky, and save the result."

## Suggested simulation inputs

- mocked command outputs for disk usage, service status, updates available, or backup freshness
- a maintenance policy file describing what counts as healthy
- prior report files for comparison

## Suggested workflow design

### Trigger
- schedule-based trigger
- example: weekly cron

### Inputs/context
- maintenance instructions file
- prior report or trend data
- mocked system status command outputs

### Tools used
- `read`
- `exec`
- `write`

### Session pattern
- isolated maintenance session
- should be predictable and auditable

### Output pattern
- markdown report file with findings
- short summary message if something noteworthy changed
- optional proposed next actions, but not automatic fixes in MVP

## Step-by-step execution for the Example Workflow Viewer

1. Scheduler starts the maintenance run
2. Agent loads maintenance policy and previous report
3. Agent runs inspection commands
4. Agent compares results to healthy thresholds or previous state
5. Agent categorizes findings by severity
6. Agent writes a dated report to the workspace
7. Agent sends a short summary or alert if needed

## Hidden system behavior worth visualizing

- `exec` returns raw operational data, not polished conclusions
- the prompt/policy determines what counts as important
- writing reports creates an audit trail
- observation can be automated more safely than remediation

## Key design choices to teach

- **Inspect vs repair:** the tutorial should show why automatic repair is a separate, higher-risk workflow
- **Thresholds:** operational workflows need explicit rules for urgency
- **Report history:** recurring checks become more valuable when trends are visible over time
- **Approval boundary:** "report and recommend" is often the right first workflow

## Common failure modes to simulate

- agent runs broad or unsafe commands
- report contains raw command dumps with no synthesis
- no thresholds means everything looks urgent or nothing does
- auto-remediation is attempted without approval boundaries

## Why it is pedagogically valuable

This example teaches the discipline behind useful automation. It makes safety, tools, state, and boundaries concrete, which is essential for learners who want to move beyond passive chat use.

---

# Comparison matrix

| Workflow | Main pattern | Trigger type | Main tools | Output type | Autonomy level | Best concepts taught |
| --- | --- | --- | --- | --- | --- | --- |
| Morning Briefing | Scheduled briefing | Cron/heartbeat | read, web/fetch, write | concise message | Low to moderate | scheduling, context loading, state, anti-spam guardrails |
| Research Assistant | Research pipeline | User message | web_search, web_fetch, read, write | answer + report | Low | tool orchestration, synthesis, artifact creation, task framing |
| Recurring Maintenance Check | Monitor/report | Cron | read, exec, write | report + alert summary | Moderate but bounded | operational workflows, exec safety, thresholds, approval boundaries |

---

# Why these three are the right MVP set

## Coverage across the syllabus

These examples map well onto the teaching goals in Modules 3 through 7:

- **Morning Briefing** reinforces cron, heartbeats, memory, and proactive behavior
- **Research Assistant** reinforces sessions, tools, workspace artifacts, and structured output
- **Recurring Maintenance Check** reinforces exec, safety, approval boundaries, and robust workflow design

## Coverage across product pillars

- **Learn:** each example introduces a distinct mental model
- **See:** each has a clear stepwise execution that fits the Run Visualizer and Example Viewer
- **Build:** each can be reconstructed in the Workflow Builder
- **Debug:** each has obvious failure modes the learner can inspect and fix

## Progression of difficulty

1. **Morning Briefing** — easiest and most familiar
2. **Research Assistant** — more tool orchestration and artifact logic
3. **Recurring Maintenance Check** — most nuanced because it adds operational risk and boundaries

This progression teaches confidence first, then complexity.

---

# Recommendations for implementation

## For the Example Workflow Viewer

Each example should expose the same teaching frame:

1. Goal
2. Trigger
3. Context loaded
4. Tools used
5. Session style
6. Output produced
7. Risks / boundaries
8. Common failure mode
9. Improved version

## For the Workflow Builder

These three examples should also serve as presets learners can remix. The builder should let users modify:

- trigger
- context files
- tools
- memory/state handling
- output type
- approval setting

## For MVP simulation design

Use deterministic mocked data for each example so learners can:

- replay the same run repeatedly
- compare good and bad versions
- inspect how changes in prompt, files, or policy change the outcome

## For future expansion after MVP

Natural next examples after these three:

- coding helper
- cron plus subagent pipeline
- delegate or multi-agent pattern
- personal operator with explicit approval routing

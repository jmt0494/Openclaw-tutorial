# Project Loop

## Objective

Advance the OpenClaw Interactive Tutorial toward a working MVP without waiting for Joshua to manually prompt every next step.

## Loop cadence

Primary orchestration loop: every 30 minutes.
Daily progress report: 7:00 AM America/Chicago.

## Harold's loop behavior

On each orchestration wakeup:
1. Read the current project docs in `openclaw-tutorial/`.
2. Identify the current bottleneck.
3. Check whether meaningful work is already in flight.
4. If a task is already in flight, do not duplicate it.
5. If another independent task can be advanced safely, spawn the appropriate focused worker.
6. If no meaningful action is available, exit quietly.
7. Record concrete progress in project files when useful.

## Worker selection

Use:
- Otto for coding/build implementation
- Konrad for review and quality control
- Walter for research, lesson/content drafting, simulation data, and supporting artifacts

## Coordination rules

- Do not spawn vague tasks.
- Do not spawn duplicate workers for the same bottleneck.
- Prefer one bounded artifact-producing task at a time per worker lane.
- Use Konrad especially after meaningful Otto output.
- Use Walter when implementation is blocked by missing content, concept clarity, or simulation data.

## When to message Joshua immediately

Message Joshua right away if:
- a product or implementation decision is required
- a blocker prevents further progress
- a significant problem or risk appears
- an external account/action is required from him

Do not wait for the morning report if one of those happens.

## Morning report

The 7:00 AM report should summarize:
- what was accomplished
- what is currently being worked on
- what the next planned step is
- any blockers or decisions needed

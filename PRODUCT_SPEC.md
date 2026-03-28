# Product Specification

## Product name

OpenClaw Interactive Tutorial

## Product summary

A web app that teaches OpenClaw through explanation, visualization, and simulation. It starts with the core mental model and progresses to designing and understanding real workflows.

## Problem

OpenClaw is powerful, but hard to understand at first. New users struggle to build a mental model of how sessions, workspaces, tools, cron jobs, memory, skills, and subagents fit together. Existing docs are useful, but many learners need a guided, interactive experience before the concepts really click.

## Product goal

Help a beginner or intermediate user go from "I do not understand how this works" to "I can confidently design and reason about OpenClaw workflows."

## Primary audience

- New OpenClaw users
- Technical users who want a stronger mental model
- People who want to build useful workflows but do not know where to start
- People evaluating whether OpenClaw fits their needs

## Secondary audience

- Current OpenClaw users who want to understand advanced concepts
- People who learn better from guided simulations than from reference docs

## Teaching philosophy

- Teach mental models before commands
- Show cause and effect visually
- Prefer interactive simulation over passive reading
- Build from simple concepts to real workflows
- Teach safety and boundaries as part of workflow design, not as an afterthought

## Success criteria

A learner should be able to:
- explain the core OpenClaw mental model
- describe what happens during an agent run
- distinguish sessions, memory, tools, cron, skills, and subagents
- understand common workflow patterns
- design a simple workflow of their own
- inspect and reason about a workflow when it fails

## Core product pillars

1. Learn
   Structured lessons with progressive explanation.

2. See
   Visualize hidden system behavior like context loading, tool calls, and session flow.

3. Build
   Let the learner assemble workflows from pieces.

4. Debug
   Teach the learner how to understand and improve behavior.

## Product principles

- Do not just restate docs
- Do not assume the learner already understands agent systems
- Keep terminology consistent
- Prefer concrete examples over abstraction
- Make invisible concepts visible
- Make the app useful even without a running OpenClaw instance

## Non-goals for MVP

- Full live integration with a real OpenClaw instance
- Full authentication or multi-user platform features
- Full-blown WYSIWYG workflow engine
- Replacing the official reference docs

## Constraints

- The MVP should teach well even if all simulations are mocked or pre-modeled
- The UI should prioritize clarity over flashy visuals
- The content should remain accurate to real OpenClaw behavior

## MVP objective

Ship a first version that teaches the core mental model, shows how runs work, and helps users design a few example workflows through guided simulation.

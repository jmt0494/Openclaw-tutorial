# Syllabus

## Module 1: What OpenClaw Is
- 1.1 What problem OpenClaw solves
- 1.2 The core mental model: agent, workspace, session, tools, channels
- 1.3 What makes OpenClaw different from a normal chatbot
- 1.4 The difference between chatting, automating, and orchestrating

## Module 2: How a Run Actually Works
- 2.1 A message comes in: intake and routing
- 2.2 Context assembly: system prompt, files, memory, session history
- 2.3 Model response and tool calls
- 2.4 Streaming, final replies, and session persistence
- 2.5 Why agents sometimes feel passive, slow, or inconsistent

## Module 3: The Core Building Blocks
- 3.1 Workspaces: where the agent lives
- 3.2 AGENTS.md, SOUL.md, USER.md, and bootstrap context
- 3.3 Sessions and why they matter
- 3.4 Memory files versus chat history
- 3.5 Tools: read, write, exec, web, sessions, and more
- 3.6 Channels and routing
- 3.7 Skills and reusable capabilities
- 3.8 Cron jobs, heartbeats, and wakeups
- 3.9 Subagents and isolated work

## Module 4: Safety, Control, and Boundaries
- 4.1 Trust boundaries: personal assistant versus shared agent
- 4.2 What the agent should do automatically
- 4.3 What should require approval
- 4.4 Sandboxing, tool restrictions, and limiting blast radius
- 4.5 Designing standing orders and guardrails
- 4.6 Preventing spam, overreach, and weird autonomous behavior

## Module 5: Workflow Patterns That Actually Work
- 5.1 The chat assistant pattern
- 5.2 The scheduled briefing pattern
- 5.3 The monitor-and-alert pattern
- 5.4 The research pipeline pattern
- 5.5 The coding/operator pattern
- 5.6 The delegate pattern
- 5.7 The multi-agent team pattern

## Module 6: Designing Your Own Workflow
- 6.1 Picking the right first workflow
- 6.2 Defining the trigger: message, schedule, event, or file
- 6.3 Defining the output: reply, file, report, or action
- 6.4 Choosing the right tools and skills
- 6.5 Deciding where memory should live
- 6.6 When to use main session, isolated sessions, or subagents
- 6.7 Designing for approval versus autonomy

## Module 7: Guided Example Builds
- 7.1 Build a morning briefing workflow
- 7.2 Build a research assistant workflow
- 7.3 Build a recurring maintenance/checkup workflow
- 7.4 Build a coding helper workflow
- 7.5 Build a workflow with cron plus subagents
- 7.6 Build a personal operator workflow with clear boundaries

## Module 8: Debugging and Improving
- 8.1 Why did my agent do nothing?
- 8.2 Why is my agent too noisy?
- 8.3 Why is my agent forgetting things?
- 8.4 Why is my workflow brittle?
- 8.5 How to inspect sessions, logs, and cron runs
- 8.6 How to iterate on prompts, files, and workflow design

## Module 9: Advanced Design
- 9.1 Multi-agent routing and separate personas
- 9.2 Delegate-style agents for organizations
- 9.3 Tool policy and per-agent restrictions
- 9.4 Persistent sessions versus isolated runs
- 9.5 Building custom skills
- 9.6 Designing robust agent systems instead of clever demos

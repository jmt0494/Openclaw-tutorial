import type { LessonRecord } from "@/lib/types/content";

export const lessons: LessonRecord[] = [
  {
    id: "m1-1",
    slug: "what-problem-openclaw-solves",
    moduleId: "module-1",
    orderInModule: 1,
    orderGlobal: 1,
    title: "What Problem OpenClaw Solves",
    summary: "OpenClaw helps you move from one-off chat replies to assistants that can operate within files, tools, sessions, and workflows.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Explain the gap between chatbots and workflow-capable agents",
      "Describe why context and tools matter",
      "Recognize the kinds of jobs OpenClaw is good at"
    ],
    keyTakeaways: [
      "OpenClaw is built for doing work in context, not just answering prompts.",
      "Its value comes from combining conversation, files, tools, and automation.",
      "The mental model matters more than memorizing commands."
    ],
    relatedConceptIds: ["agent", "workspace", "workflow"],
    content: [
      {
        type: "rich-text",
        markdown:
          "Most people understand a chatbot as something that reads a message and replies with text. OpenClaw can do that, but the important jump is that it can also work inside a workspace, read durable files, use tools, keep session context, and participate in scheduled or orchestrated workflows."
      },
      {
        type: "example",
        title: "Simple contrast",
        scenario: "A chatbot answers: 'What should I do this morning?'",
        explanation:
          "An OpenClaw assistant can read notes, inspect a calendar, check the weather, and produce a briefing shaped by durable context."
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "Think system, not prompt",
        body: "The real unit of design is not the message alone. It is the message plus files, memory, tools, session state, and rules."
      },
      {
        type: "checkpoint",
        question: "What is the main difference between a normal chatbot and OpenClaw?",
        answer: "OpenClaw is designed to operate inside a larger working system: workspace files, tools, sessions, automation, and structured workflows."
      }
    ],
    nextLessonId: "m1-2"
  },
  {
    id: "m1-2",
    slug: "core-mental-model",
    moduleId: "module-1",
    orderInModule: 2,
    orderGlobal: 2,
    title: "The Core Mental Model",
    summary: "Meet the core pieces: agent, workspace, session, tools, channels, and memory.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Name the main OpenClaw building blocks",
      "Understand how the parts relate",
      "Build a durable beginner mental model"
    ],
    keyTakeaways: [
      "The agent is not floating in empty space; it lives inside a working environment.",
      "Sessions hold conversational continuity, while files and memory provide durable context.",
      "Tools let the agent act rather than only talk."
    ],
    relatedConceptIds: ["agent", "workspace", "session", "tools", "memory", "channels"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A useful beginner model is this: the agent responds inside a session, draws context from the workspace and memory, uses tools when needed, and may be reached through different channels."
      },
      {
        type: "list",
        title: "Core pieces",
        items: [
          "Agent: the assistant persona and instructions",
          "Workspace: the files and folder the agent can use",
          "Session: the conversation thread and continuity",
          "Tools: the actions the agent can take",
          "Memory: durable notes beyond the live chat window",
          "Channels: where messages come from and go to"
        ]
      },
      {
        type: "checkpoint",
        question: "If an agent forgets something after a restart, which part of the system should you inspect first?",
        answer: "Durable files and memory, because live chat context alone may not survive or be reloaded the way you expect."
      }
    ],
    previousLessonId: "m1-1",
    nextLessonId: "m1-4"
  },
  {
    id: "m1-4",
    slug: "chatting-automating-and-orchestrating",
    moduleId: "module-1",
    orderInModule: 3,
    orderGlobal: 3,
    title: "The Difference Between Chatting, Automating, and Orchestrating",
    summary: "A one-off reply, a repeatable automated task, and a multi-step orchestrated workflow are different operating modes, and each needs a different design mindset.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Distinguish reactive chat from bounded automation and broader orchestration",
      "Recognize when a task has outgrown a single prompt",
      "See why more autonomy demands more structure and boundaries"
    ],
    keyTakeaways: [
      "Chatting is reactive, automation is repeatable, and orchestration coordinates multiple moving parts.",
      "The right operating mode depends on trigger shape, context needs, and desired output.",
      "As workflows become more autonomous, design discipline matters more than clever prompting."
    ],
    relatedConceptIds: ["workflow", "trigger", "session", "tools"],
    content: [
      {
        type: "rich-text",
        markdown:
          "These modes are easy to blur together, but they are not the same. Chatting is a human-led exchange in the current session. Automation means a repeatable task can run with a stable trigger and a narrow contract. Orchestration goes one step further: it coordinates multiple stages, tools, sessions, or workers so the system can carry a larger job cleanly."
      },
      {
        type: "list",
        title: "A simple ladder",
        items: [
          "Chatting: answer or help in the current conversation",
          "Automating: repeat a bounded task on demand, on a schedule, or from a clean trigger",
          "Orchestrating: coordinate several steps, tools, or worker lanes toward one result"
        ]
      },
      {
        type: "example",
        title: "How the same goal can change shape",
        scenario: "'Help me think through today's priorities' is chat. 'Send me a concise morning briefing every weekday' is automation. 'Gather signals, delegate one research subtask, then prepare a draft for review' is orchestration.",
        explanation: "The difference is not only complexity. It is whether the work depends on one exchange, a repeatable trigger, or coordinated multi-step execution."
      },
      {
        type: "callout",
        tone: "insight",
        title: "This is where the other app surfaces start making sense",
        body: "Examples show reusable workflow shapes, and Build helps you choose trigger, tools, memory, and approval. Those surfaces matter because orchestration is designed, not improvised."
      },
      {
        type: "checkpoint",
        question: "What is the clearest sign that a task has moved beyond simple chat into orchestration?",
        answer: "The task now needs coordinated steps, stable triggers, or separate execution lanes instead of one conversational answer in the current session."
      }
    ],
    previousLessonId: "m1-2",
    nextLessonId: "m2-1"
  },
  {
    id: "m2-1",
    slug: "message-intake-and-routing",
    moduleId: "module-2",
    orderInModule: 1,
    orderGlobal: 4,
    title: "A Message Comes In: Intake and Routing",
    summary: "See how an incoming message becomes a run in the right place with the right rules.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Understand intake as the start of a run",
      "See why routing matters",
      "Recognize how different surfaces lead to different context"
    ],
    keyTakeaways: [
      "A run begins with an input arriving through some channel or trigger.",
      "Routing determines which session or execution path handles it.",
      "Getting routing wrong can make behavior look random or inconsistent."
    ],
    relatedConceptIds: ["channels", "session", "workflow"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
    simulationExercises: [
      {
        scenarioSlug: "simple-answer-no-tool-calls",
        title: "Trace the plain chat path",
        whyNow: "Use this first to see the most boring correct routing case: a message comes in and simply stays in the current conversation.",
        focusPoints: [
          "Notice that intake starts from a direct user message rather than a scheduler event",
          "Confirm that routing explicitly says to stay in the current chat session",
          "Check how that routing choice keeps the rest of the run lightweight"
        ]
      },
      {
        scenarioSlug: "scheduled-briefing-run",
        title: "Contrast it with a scheduled lane",
        whyNow: "Then switch to the briefing scenario so the routing difference feels structural instead of cosmetic.",
        focusPoints: [
          "Notice that intake begins from a scheduler event, not a human message",
          "Look for the routing note that selects a dedicated recurring workflow lane",
          "Compare how that choice changes what context the run expects to load next"
        ]
      }
    ],
    content: [
      {
        type: "rich-text",
        markdown:
          "Before the model ever answers, the system has to decide what kind of input this is and where it belongs. A direct chat message, a scheduled trigger, and a delegated subagent run may all enter the system differently. Intake is the moment the system recognizes the incoming thing. Routing is the moment it decides which run shape should own it."
      },
      {
        type: "list",
        title: "Compare these two live routing paths in the Run Visualizer",
        items: [
          "`simple-answer-no-tool-calls`: intake begins with a direct user message and routing stays in the current conversation",
          "`scheduled-briefing-run`: intake begins with a scheduler event and routing moves into a recurring workflow lane with its own expectations",
          "The visible routing stage is your clue that the system is deciding session shape before any answer is written"
        ]
      },
      {
        type: "example",
        title: "Direct message versus scheduled wake-up",
        scenario: "Open the simple-answer scenario first, then open the scheduled-briefing scenario. In the first, the trigger input is a user question and the routing note says to stay in the current chat session. In the second, the trigger input is a scheduler event and the routing note says to use the morning briefing workflow in an isolated recurring session.",
        explanation: "That is the routing contrast beginners need to feel. The system is not only answering different content. It is deciding that these inputs belong to different execution lanes before context assembly even begins."
      },
      {
        type: "callout",
        tone: "insight",
        title: "Routing changes what context is even eligible to load",
        body: "A direct user message naturally leans on the active session and nearby conversation. A scheduled briefing run leans on workflow instructions, saved state, and bounded recurring inputs. Different routing means different context contracts."
      },
      {
        type: "checkpoint",
        question: "Why does routing matter before any answer is generated?",
        answer: "Because routing decides which execution lane and session own the run, which changes what context sources and rules are available before the model starts composing anything."
      }
    ],
    previousLessonId: "m1-4",
    nextLessonId: "m2-2"
  },
  {
    id: "m2-2",
    slug: "context-assembly",
    moduleId: "module-2",
    orderInModule: 2,
    orderGlobal: 5,
    title: "Context Assembly",
    summary: "Learn how system instructions, files, memory, and session history combine before the model responds.",
    estimatedMinutes: 11,
    learningObjectives: [
      "Explain what context assembly is",
      "Distinguish durable and transient context sources",
      "See why missing context produces bad output"
    ],
    keyTakeaways: [
      "The model responds to assembled context, not just the latest user line.",
      "Files, memory, and session history serve different roles.",
      "A lot of agent weirdness is really context design failure."
    ],
    relatedConceptIds: ["workspace", "memory", "session", "tools"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use", "scheduled-briefing-run"],
    simulationExercises: [
      {
        scenarioSlug: "direct-user-message-with-tool-use",
        title: "Inspect a message-triggered context bundle",
        whyNow: "This scenario makes the context panels concrete instead of abstract: you can see files, system pieces, and session history side by side.",
        focusPoints: [
          "Open the top context panels and distinguish system pieces from workspace files",
          "Notice that session history carries the active user request in this run",
          "Check that the file reads are selective rather than a giant dump of the whole workspace"
        ]
      },
      {
        scenarioSlug: "scheduled-briefing-run",
        title: "Compare against a scheduled context bundle",
        whyNow: "The scheduled scenario is the clean contrast because it depends much more on durable files and much less on live chat history.",
        focusPoints: [
          "Compare the memory and workspace-file panels with the direct-message scenario",
          "Notice the explicit note that there is no direct chat request driving this run",
          "Use the contrast to explain why the same wording can behave differently in two different run shapes"
        ]
      }
    ],
    content: [
      {
        type: "rich-text",
        markdown:
          "When people say 'the agent knew' or 'the agent forgot,' they are usually talking about context assembly. The system gathers instructions, relevant files, memory, recent messages, and tool policies, then the model sees that bundle and responds. The Run Visualizer makes that bundle inspectable instead of invisible."
      },
      {
        type: "list",
        title: "Use the visualizer's context panels as a checklist",
        items: [
          "System pieces: standing instructions and tool-policy framing that shape the run before any reply",
          "Workspace files: durable files the run can read, like milestone docs, HEARTBEAT.md, or a state file",
          "Memory: reusable long-lived preferences or notes that survive beyond one message",
          "Session history: the nearby conversational or execution thread that gives the run short-term continuity"
        ]
      },
      {
        type: "example",
        title: "Inspect two runs panel by panel",
        scenario: "Open `direct-user-message-with-tool-use` and `scheduled-briefing-run`, then compare the four context panels at the top of the visualizer. The direct user message scenario shows project files and current user request in session history. The scheduled briefing scenario shows briefing instructions, a state file, user preferences in memory, and a note that there is no direct chat request.",
        explanation: "That top panel area is the visible explanation for why two runs can feel different even before you look at later stages. Different system pieces, files, memory, and history produce different runs."
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "Context assembly is why the same wording can behave differently",
        body: "If two runs start in different sessions or load different files, they are not actually starting from the same situation. The visualizer panels help you prove that difference instead of guessing about it."
      },
      {
        type: "checkpoint",
        question: "Why can a run look inconsistent even when the same prompt is used twice?",
        answer: "Because the assembled context may differ between runs: different system pieces, workspace files, memory items, or session history may have been loaded before the model responds."
      }
    ],
    previousLessonId: "m2-1",
    nextLessonId: "m2-3"
  },
  {
    id: "m2-3",
    slug: "model-response-and-tool-calls",
    moduleId: "module-2",
    orderInModule: 3,
    orderGlobal: 6,
    title: "Model Response and Tool Calls",
    summary: "A run can answer directly from assembled context or pause to use tools, and the Run Visualizer makes that fork visible instead of mystical.",
    estimatedMinutes: 12,
    learningObjectives: [
      "Explain the difference between model inference and external tool actions",
      "Recognize that some runs need no tools while others depend on them",
      "See how tool output becomes part of the same run rather than a separate magic layer"
    ],
    keyTakeaways: [
      "The model decides whether to answer directly or call tools based on the task and available context.",
      "Tool calls are part of the run timeline, not a different hidden system.",
      "Comparing no-tool and tool-use runs is one of the fastest ways to understand OpenClaw mechanics."
    ],
    relatedConceptIds: ["tools", "context", "workflow", "session"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "direct-user-message-with-tool-use"],
    simulationExercises: [
      {
        scenarioSlug: "simple-answer-no-tool-calls",
        title: "Find the no-tool fork",
        whyNow: "Start with the shortest path so you can see what a legitimate no-tool run actually looks like.",
        focusPoints: [
          "Watch the timeline go from model inference straight to final reply",
          "Confirm that no tool-calls stage appears at all",
          "Use that absence to explain why some requests do not need extra action"
        ]
      },
      {
        scenarioSlug: "direct-user-message-with-tool-use",
        title: "Then inspect the tool-use fork",
        whyNow: "This second scenario makes the extra stage visible and shows how tool output becomes part of the same run.",
        focusPoints: [
          "Look for the inserted tool-calls stage between model planning and the final reply",
          "Inspect the write tool call and the created handoff artifact",
          "Notice that the final answer reports the artifact as part of one continuous run"
        ]
      }
    ],
    content: [
      {
        type: "rich-text",
        markdown:
          "Once context is assembled, the model has a practical fork: answer now, or use a tool first. If the question is already answerable, a direct response may be correct. If the task requires evidence, file access, or creating an artifact, the run needs tool calls. The important point is that both shapes are still one run, and the visualizer lets you compare them stage by stage."
      },
      {
        type: "list",
        title: "Do this compare exercise in the Run Visualizer",
        items: [
          "Open `simple-answer-no-tool-calls` and note that after context assembly the run goes into model inference and then straight to final reply",
          "Open `direct-user-message-with-tool-use` and note that after model planning the run adds an explicit tool-calls stage before the final reply",
          "Watch how the tool-use scenario creates a new file artifact, then uses that fresh result as part of the same run rather than starting over"
        ]
      },
      {
        type: "example",
        title: "The clearest no-tool versus tool-use contrast",
        scenario: "In the simple-answer scenario, the timeline is intake -> routing -> context assembly -> model inference -> final reply. In the direct-tool-use scenario, the timeline is intake -> routing -> context assembly -> model inference -> tool calls -> final reply.",
        explanation: "That one extra stage is the whole lesson. The model is still doing the thinking in both cases. The difference is whether the task requires external action before the answer is complete."
      },
      {
        type: "list",
        title: "A better way to read the fork",
        items: [
          "Ask first: could a careful human answer this from the already-loaded context, or would they need to go fetch or create something?",
          "If the job needs evidence, file inspection, writing an artifact, or changing state, expect a tool stage to appear",
          "If the job is already answerable from context, a direct final reply is usually a sign of good restraint rather than missing ambition",
          "When learners expect tools but do not see them, the right debugging question is 'what external action was actually required here?'"
        ]
      },
      {
        type: "callout",
        tone: "insight",
        title: "The visualizer comparison should change your intuition",
        body: "Beginners often assume that a 'real agent' always uses tools. The better mental model is narrower: a real run uses tools when the task actually needs external action. The no-tool path is not a lesser mode. It is the correct shorter path when context already contains enough to answer."
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "Tool output becomes fresh context inside the same run",
        body: "In the direct-tool-use scenario, the write tool creates a durable handoff note. The model then finishes the reply with knowledge that the artifact now exists. Tools extend the run with evidence or actions; they do not replace the model with a separate magic layer."
      },
      {
        type: "checkpoint",
        question: "What should you notice when comparing the no-tool and tool-use scenarios?",
        answer: "The no-tool run can go directly from model inference to final reply, while the tool-use run inserts an explicit tool stage whose output becomes fresh context before the answer is finalized."
      }
    ],
    previousLessonId: "m2-2",
    nextLessonId: "m2-5"
  },
  {
    id: "m2-5",
    slug: "why-agents-feel-passive-slow-or-inconsistent",
    moduleId: "module-2",
    orderInModule: 4,
    orderGlobal: 7,
    title: "Why Agents Sometimes Feel Passive, Slow, or Inconsistent",
    summary: "A lot of frustrating behavior is explainable once you map the symptom back to routing, context, tool use, or workflow shape instead of blaming randomness alone.",
    estimatedMinutes: 12,
    learningObjectives: [
      "Map common frustrating symptoms to likely system causes",
      "Use run mechanics to diagnose behavior instead of treating everything as AI magic",
      "Recognize when the problem is route, context, or tool design rather than the final wording"
    ],
    keyTakeaways: [
      "Passive often means the run lacked the right trigger, tools, or explicit contract.",
      "Slow often means the task genuinely required extra context assembly or tool work.",
      "Inconsistent often points to different routing, session state, or loaded files across runs."
    ],
    relatedConceptIds: ["routing", "context", "tools", "session", "workflow"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "direct-user-message-with-tool-use", "scheduled-briefing-run"],
    simulationExercises: [
      {
        scenarioSlug: "simple-answer-no-tool-calls",
        title: "Use the shortest run as your baseline",
        whyNow: "A clean baseline helps you separate 'slow because the workflow is bigger' from 'slow for no reason.'",
        focusPoints: [
          "Notice how few stages exist when the task needs no tools or persistence",
          "Use this as your comparison point for later symptoms",
          "Ask whether a supposedly slow run is simply doing more visible work"
        ]
      },
      {
        scenarioSlug: "direct-user-message-with-tool-use",
        title: "Map passive versus tool-capable behavior",
        whyNow: "This scenario helps explain the difference between a run that only talks and one that has a real artifact-producing path.",
        focusPoints: [
          "Check whether the run had an actual tool path available for the requested job",
          "Notice how file reads and a write step lengthen the run for understandable reasons",
          "Use this to test whether a complaint about passivity is really a contract or tool-design problem"
        ]
      },
      {
        scenarioSlug: "scheduled-briefing-run",
        title: "Inspect the recurring workflow path",
        whyNow: "This is the best contrast for inconsistency and perceived slowness because routing, context, and persistence all change at once.",
        focusPoints: [
          "Compare routing and context panels before blaming final wording differences",
          "Notice the persistence step that does not exist in the simpler runs",
          "Use the full stage list to explain why recurring workflows often feel slower but more structured"
        ]
      }
    ],
    content: [
      {
        type: "rich-text",
        markdown:
          "Users often describe an agent as passive, slow, or inconsistent as if those were mysterious personality flaws. Usually they are systems clues. A passive run may not have had permission, tools, or a concrete enough job. A slow run may have needed to read files, fetch evidence, or update state. An inconsistent run may have started in a different session or loaded different context than the last one. The Run Visualizer is useful here because it lets you map a complaint back to a visible stage."
      },
      {
        type: "list",
        title: "Symptom -> likely run-stage cause",
        items: [
          "Passive: the run never got a strong enough contract, trigger, or tool path to do more than answer cautiously",
          "Slow: compare the short no-tool path with the longer scheduled or tool-using paths and notice the extra context, tool, and persistence work",
          "Inconsistent: compare routing, context panels, and session shape before blaming the final wording"
        ]
      },
      {
        type: "example",
        title: "Debug with the three live scenarios",
        scenario: "Use `simple-answer-no-tool-calls` as the shortest baseline, `direct-user-message-with-tool-use` as the evidence-and-artifact path, and `scheduled-briefing-run` as the recurring workflow path with persistence. If the scheduled briefing feels slower, that is often because it has more visible stages. If two message runs feel different, inspect routing and context first. If a run feels passive, ask whether it ever had the trigger, tools, or permissions needed to do more than talk.",
        explanation: "This turns vague frustration into a concrete debugging move: identify the symptom, then inspect the stage where that symptom would be created."
      },
      {
        type: "list",
        title: "Use this three-question diagnosis loop",
        items: [
          "What changed at the start? Check intake, routing, and session shape before judging the final wording",
          "What extra work happened in the middle? Compare context assembly, tool calls, and persistence steps to explain slowness or caution",
          "What was the run actually allowed to do? If the contract, trigger, or tool path was weak, 'passive' may simply mean the workflow was underspecified"
        ]
      },
      {
        type: "example",
        title: "Translate vague complaints into visible checks",
        scenario: "'It was passive' means check whether the run had a tool path, write path, or explicit permission to act. 'It was slow' means count the extra stages and inspect whether file reads, scheduling, or persistence were involved. 'It was inconsistent' means compare routing, loaded files, memory, and session history across the two runs before blaming model personality.",
        explanation: "This is the heart of the lesson-to-surface handoff: the complaint becomes a concrete inspection plan inside the visualizer instead of a vague feeling about AI behavior."
      },
      {
        type: "callout",
        tone: "insight",
        title: "The point is not to defend the system. It is to make it legible.",
        body: "A good diagnosis loop does not excuse bad workflow design. It helps the learner identify which part of the design to improve: routing, context, tools, approvals, or persistence. Once the system is legible, improvement becomes much easier."
      },
      {
        type: "callout",
        tone: "warning",
        title: "Do not over-explain everything as randomness",
        body: "Model variation exists, but many beginner frustrations are better explained by routing differences, missing context, or a workflow that was never fully specified. Beginner debugging starts by checking the run anatomy you can actually see."
      },
      {
        type: "checkpoint",
        question: "If the same request behaves differently in two runs, what should you inspect before blaming pure randomness?",
        answer: "Inspect the routing stage, the context panels, the session shape, and whether the run used extra tools or persistence steps. Those visible differences usually explain the symptom better than pure randomness does."
      }
    ],
    previousLessonId: "m2-3",
    nextLessonId: "m3-1"
  },
  {
    id: "m3-1",
    slug: "workspaces-where-the-agent-lives",
    moduleId: "module-3",
    orderInModule: 1,
    orderGlobal: 8,
    title: "Workspaces: Where the Agent Lives",
    summary: "The workspace is the agent's working environment: the files, folders, notes, and outputs it can revisit instead of treating every task like a fresh chat bubble.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Explain what a workspace is in practical terms",
      "See why durable files matter more than transient chat alone",
      "Recognize common things that belong in a workspace"
    ],
    keyTakeaways: [
      "A workspace is the agent's operating environment, not just a storage bucket.",
      "Files make context durable, inspectable, and reusable across future runs.",
      "If useful work should survive the current chat, the workspace is usually involved."
    ],
    relatedConceptIds: ["workspace", "agent", "memory", "context"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "OpenClaw becomes much more useful once you stop imagining the assistant as a voice floating in empty space. It works in a workspace: a file and folder environment where instructions, project docs, notes, and outputs can live. That gives the agent somewhere to read from, write to, and return to later."
      },
      {
        type: "list",
        title: "Common workspace contents",
        items: [
          "Bootstrap files like AGENTS.md, SOUL.md, or USER.md",
          "Project docs, specs, and implementation notes",
          "Memory files and recurring state records",
          "Artifacts the agent creates, like reports or summaries"
        ]
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "The workspace is why the agent can feel grounded",
        body: "Without files, every run leans harder on transient context. With files, the agent can inspect reality, preserve decisions, and build on past work."
      },
      {
        type: "action-cta",
        eyebrow: "Explore handoff",
        checklistTitle: "When you open these live surfaces",
        title: "Take this into the app: inspect where durable workspace context actually lives",
        body: "Open the Workspace concept first so the idea becomes concrete, then open the Research Assistant example and look for the durable artifact it leaves behind. The lesson point is not just that files exist. It is that useful work survives because it lands somewhere inspectable in the workspace.",
        href: "/explore/concepts/workspace",
        linkLabel: "Open Workspace concept",
        checklist: [
          "Read the Workspace concept and notice that files are treated as operating context, not just storage",
          "Then open the Research Assistant example and look for the write-report step as the durable workspace payoff",
          "Ask which parts of that workflow would disappear if everything had to stay inside transient chat"
        ]
      },
      {
        type: "checkpoint",
        question: "What is the main practical advantage of giving an agent a real workspace instead of relying only on chat history?",
        answer: "The workspace gives the agent durable, inspectable context and somewhere to save useful artifacts for later runs."
      }
    ],
    previousLessonId: "m2-5",
    nextLessonId: "m3-2"
  },
  {
    id: "m3-2",
    slug: "bootstrap-context-files",
    moduleId: "module-3",
    orderInModule: 2,
    orderGlobal: 9,
    title: "AGENTS.md, SOUL.md, USER.md, and Bootstrap Context",
    summary: "Learn how bootstrap files shape the assistant before it even starts working.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Understand the role of foundational context files",
      "See why persona and user guidance belong in files",
      "Recognize durable instructions versus situational prompts"
    ],
    keyTakeaways: [
      "Bootstrap files create continuity and boundaries.",
      "They make the agent more stable across sessions.",
      "They are often a better home for standing guidance than repeated chat instructions."
    ],
    relatedConceptIds: ["workspace", "agent", "memory"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A large part of OpenClaw behavior comes from files that shape identity, expectations, and continuity. These files reduce the need to repeat the same instructions every time a new session starts."
      },
      {
        type: "example",
        title: "Practical effect",
        scenario: "A user wants the assistant to be concise, non-flattering, and proactive.",
        explanation:
          "Putting that guidance in durable files means those preferences can be reloaded reliably, rather than depending on the current chat window alone."
      }
    ],
    previousLessonId: "m3-1",
    nextLessonId: "m3-3"
  },
  {
    id: "m3-3",
    slug: "sessions-and-why-they-matter",
    moduleId: "module-3",
    orderInModule: 3,
    orderGlobal: 10,
    title: "Sessions and Why They Matter",
    summary: "A session is the live thread of continuity for a run or series of runs, and session boundaries explain a lot of behavior that otherwise feels random.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Explain what a session holds and what it does not",
      "Understand why different workflows may need different sessions",
      "Recognize how session boundaries change behavior"
    ],
    keyTakeaways: [
      "A session carries short-term continuity, not universal permanent memory.",
      "Different session choices produce different available history and different run behavior.",
      "Many confusing outcomes are really session-design problems, not model magic."
    ],
    relatedConceptIds: ["session", "routing", "memory", "workflow"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A session is the immediate working thread where recent messages, local continuity, and nearby tool activity accumulate. That sounds simple, but it matters a lot. A direct chat session, a recurring scheduled run, and a delegated worker run should not all inherit the same history by accident."
      },
      {
        type: "example",
        title: "Why the same request can behave differently",
        scenario: "A question asked in the main chat may see recent back-and-forth, while the same task in a scheduled run starts from a much narrower context.",
        explanation: "That difference is not weirdness. It is session shape. The run inherits a different continuity model depending on where it happens."
      },
      {
        type: "callout",
        tone: "insight",
        title: "Session boundaries are a feature",
        body: "Isolation is often desirable. A clean session can prevent irrelevant history from contaminating the current job."
      },
      {
        type: "action-cta",
        eyebrow: "Run Visualizer handoff",
        checklistTitle: "When you compare the two runs",
        title: "Take this into the Run Visualizer: compare two session shapes back to back",
        body: "Open the plain chat scenario first, then switch to the scheduled briefing run. Read them as two different session contracts: one inherits live conversational continuity, and the other protects itself with a narrower recurring lane.",
        href: "/simulations/run-visualizer?scenario=simple-answer-no-tool-calls",
        linkLabel: "Open simple-answer scenario",
        checklist: [
          "In the simple-answer run, confirm that routing keeps the work in the current conversation",
          "Then open the scheduled-briefing run and inspect how routing moves into an isolated recurring lane",
          "Use the difference in context panels and stage flow to explain why session boundaries change behavior before the model ever answers"
        ]
      },
      {
        type: "checkpoint",
        question: "Why might a scheduled workflow use its own session instead of reusing the main chat session?",
        answer: "Because it should have predictable continuity and avoid depending on unrelated conversational history from the main chat."
      }
    ],
    previousLessonId: "m3-2",
    nextLessonId: "m3-4"
  },
  {
    id: "m3-4",
    slug: "memory-files-vs-chat-history",
    moduleId: "module-3",
    orderInModule: 4,
    orderGlobal: 11,
    title: "Memory Files Versus Chat History",
    summary: "Separate live conversational continuity from durable memory that survives beyond a single run or window.",
    estimatedMinutes: 12,
    learningObjectives: [
      "Distinguish session history from memory files",
      "Know when to write to durable memory",
      "Avoid over-trusting the live chat context"
    ],
    keyTakeaways: [
      "Session history is not the same thing as long-term memory.",
      "If you want something remembered later, write it down.",
      "Good memory hygiene improves stability and usefulness."
    ],
    relatedConceptIds: ["memory", "session", "workspace"],
    content: [
      {
        type: "rich-text",
        markdown:
          "One of the easiest beginner mistakes is assuming that because something was said in chat once, it will remain reliably available later. In practice, durable files are the safer place for facts, decisions, and standing preferences that matter across sessions."
      },
      {
        type: "callout",
        tone: "warning",
        title: "No such thing as a reliable mental note",
        body: "If a fact matters later, it should usually exist in a file. Otherwise, you are trusting transient context."
      },
      {
        type: "checkpoint",
        question: "Where should a long-term user preference usually live?",
        answer: "In durable memory or workspace documentation, not only in the live chat history."
      }
    ],
    previousLessonId: "m3-3",
    nextLessonId: "m3-5"
  },
  {
    id: "m3-5",
    slug: "tools-read-write-exec-web-sessions-and-more",
    moduleId: "module-3",
    orderInModule: 5,
    orderGlobal: 12,
    title: "Tools: read, write, exec, web, sessions, and more",
    summary: "Tools are the explicit actions that let the agent inspect reality, create artifacts, search for information, and coordinate work instead of only guessing in text.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Explain why tools matter in OpenClaw",
      "Recognize the practical job of common tool families",
      "Understand why tool access should stay explicit and bounded"
    ],
    keyTakeaways: [
      "Tools turn the assistant from a talker into an operator with bounded actions.",
      "Different tools serve different jobs: files, shell, web, and session coordination are not interchangeable.",
      "Explicit tools make the run more inspectable, safer, and easier to reason about."
    ],
    relatedConceptIds: ["tools", "workspace", "session", "approval", "workflow"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "When OpenClaw reads a file, writes a report, searches the web, fetches a page, runs a command, or manages a separate session, it does that through explicit tool calls. That matters because the system is no longer pretending the model simply 'knows' things. It inspects, acts, and leaves a more understandable trail."
      },
      {
        type: "list",
        title: "Useful beginner tool buckets",
        items: [
          "read / write / edit for durable file work",
          "exec for bounded command-line inspection or operations",
          "web_search / web_fetch for evidence-backed research",
          "session and subagent tools for isolating or delegating work"
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "More tools is not automatically better",
        body: "A workflow becomes easier to trust when it has the smallest useful toolset, not the largest possible one."
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you inspect this workflow",
        title: "Take this into Examples: map each tool family to a real job",
        body: "Open the Research Assistant example and use it as a live tool-reading exercise. The goal is to stop thinking about tools as a giant capability list and start seeing them as a specific bundle chosen to finish one honest workflow shape.",
        href: "/examples/research-assistant",
        linkLabel: "Open Research Assistant example",
        checklist: [
          "Match read and write to the workflow's durable file work before and after synthesis",
          "Match web search and fetch to evidence gathering rather than model guesswork",
          "Ask which tool families are absent on purpose and why the workflow stays cleaner because of that"
        ]
      },
      {
        type: "checkpoint",
        question: "Why are explicit tool calls better than treating the assistant like it has vague hidden powers?",
        answer: "Because explicit tools make actions inspectable and bounded, and they let the agent gather real information instead of merely guessing."
      }
    ],
    previousLessonId: "m3-4",
    nextLessonId: "m3-9"
  },
  {
    id: "m3-9",
    slug: "subagents-and-isolated-work",
    moduleId: "module-3",
    orderInModule: 6,
    orderGlobal: 13,
    title: "Subagents and Isolated Work",
    summary: "Subagents exist so a main agent can delegate one bounded lane of work into a cleaner context, then pull the result back without turning the whole session into a tangle.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Explain why subagents exist and what isolation buys you",
      "Recognize when a task is narrow enough to delegate honestly",
      "Connect subagents to the delegate pattern and session-shape decisions"
    ],
    keyTakeaways: [
      "Subagents are useful when a bounded subtask benefits from a narrower context than the main session.",
      "Isolation reduces clutter, keeps instructions focused, and makes results easier to review.",
      "Delegation works best when the worker returns a clear result instead of inheriting the whole original problem."
    ],
    relatedConceptIds: ["subagents", "session", "routing", "workflow", "agent"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A subagent is not just 'another assistant for fun.' It is an execution choice. The main agent keeps the overall goal and delegates one bounded job into a more isolated worker lane. That worker gets a narrower task, does focused work, then returns a result. Used well, this keeps the main session cleaner and makes orchestration easier to reason about."
      },
      {
        type: "example",
        title: "A good delegation shape",
        scenario: "The main agent keeps the broader project plan, but delegates one file review or one focused research question to a worker and waits for a concise result.",
        explanation: "That is honest delegation: bounded task, cleaner context, clear return value."
      },
      {
        type: "list",
        title: "When isolated work helps",
        items: [
          "A subtask is real, bounded, and separately evaluable",
          "The worker should not inherit all the noise of the main thread",
          "You want a concise result back instead of a sprawling combined run"
        ]
      },
      {
        type: "callout",
        tone: "insight",
        title: "Follow the delegate pattern, not delegation theater",
        body: "If you want to see this in a reusable workflow shape, the delegate-pattern lesson and example are the right continuation. Module 6 later returns to the same decision as a design question: main session, isolated session, or subagent?"
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you open this example",
        title: "Take this into Examples: inspect an isolated delegated lane",
        body: "Open the Recurring Maintenance Check example and read it as a delegation-adjacent workflow: bounded inspection, narrower execution steps, and a clear handoff back to human review at the consequential edge. Then use the delegate-pattern lesson as the next teaching continuation, not as a separate disconnected topic.",
        href: "/examples/recurring-maintenance-check",
        linkLabel: "Open Maintenance Check example",
        checklist: [
          "Inspect how the workflow isolates recurring inspection work from the main chat lane",
          "Look for the narrow step sequence and ask where a worker context helps keep the job cleaner",
          "After that, continue into the delegate-pattern lesson and Module 6 session-choice lesson as the next design layer"
        ]
      },
      {
        type: "checkpoint",
        question: "What is the best reason to use a subagent instead of keeping the work in the main session?",
        answer: "The subtask is bounded and benefits from cleaner isolation, so the main agent can coordinate while the worker returns a focused result."
      }
    ],
    previousLessonId: "m3-5",
    nextLessonId: "m4-1"
  },
  {
    id: "m4-1",
    slug: "trust-boundaries",
    moduleId: "module-4",
    orderInModule: 1,
    orderGlobal: 14,
    title: "Trust Boundaries",
    summary: "Learn why a personal assistant, a shared agent, and an externally connected workflow need different boundaries even when the tools look similar.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Distinguish private, shared, and externally visible operating contexts",
      "Explain why access level should change tone, disclosure, and allowed actions",
      "Spot when a workflow crosses a boundary and needs tighter controls"
    ],
    keyTakeaways: [
      "The same capability is not equally safe in every context.",
      "Trust boundaries are about exposure, audience, and consequences, not just tool lists.",
      "Shared or external contexts should behave more conservatively than a private workspace assistant."
    ],
    relatedConceptIds: ["agent", "channels", "workflow", "approval", "guardrails"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A personal assistant working in its owner's private workspace can often read more context and act with a different tone than an agent speaking in a shared room or delivering messages outward. The question is not only what the agent can do, but who might be affected if it guesses wrong, reveals too much, or speaks in the wrong place."
      },
      {
        type: "example",
        title: "Same assistant, different boundary",
        scenario: "Reading local notes to prepare a private morning briefing is low-risk. Posting those same notes into a shared channel is not.",
        explanation: "The tools may be identical, but the exposure changes the acceptable behavior. Boundary design is about consequences and audience."
      },
      {
        type: "list",
        title: "Ask these boundary questions",
        items: [
          "Is the context private, shared, or externally visible?",
          "Who could see the output if the run is wrong or overly detailed?",
          "Would a cautious human do this automatically, or only after review?"
        ]
      },
      {
        type: "checkpoint",
        question: "Why is a shared agent usually designed more conservatively than a private personal assistant?",
        answer: "Because mistakes, oversharing, and tone failures affect more people and can expose information outside the user's private context."
      }
    ],
    previousLessonId: "m3-9",
    nextLessonId: "m4-3"
  },
  {
    id: "m4-3",
    slug: "what-should-require-approval",
    moduleId: "module-4",
    orderInModule: 2,
    orderGlobal: 15,
    title: "What Should Require Approval",
    summary: "Use consequence and reversibility, not vibes, to decide where a workflow should stop and ask a human first.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Identify actions that deserve explicit human approval",
      "Distinguish low-risk observation from higher-risk external or state-changing actions",
      "Place approval checkpoints at the right step of a workflow"
    ],
    keyTakeaways: [
      "Observation is often safe to automate; external writes and meaningful changes usually deserve review.",
      "Approval should gate the risky step, not every harmless preparation step before it.",
      "A workflow becomes more trustworthy when the human can see exactly what action is being approved."
    ],
    relatedConceptIds: ["approval", "tools", "workflow", "guardrails"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A good approval rule is usually based on consequence: could this action change the system, publish something externally, spend resources, or create a mess that is annoying to undo? If yes, approval is often appropriate. If the step is only gathering information or drafting a proposed result, it can often run automatically."
      },
      {
        type: "list",
        title: "Often approval-worthy",
        items: [
          "External messages, posts, or emails",
          "Commands that change system state rather than inspect it",
          "File edits or deletions with meaningful downstream impact",
          "Anything costly, irreversible, or hard to audit later"
        ]
      },
      {
        type: "callout",
        tone: "insight",
        title: "Approve the risky edge, not the whole workflow",
        body: "Let the agent inspect, summarize, and prepare. Ask for approval right before the externally visible or state-changing action."
      },
      {
        type: "checkpoint",
        question: "In a maintenance workflow, which step is more likely to need approval: collecting status data or applying a change?",
        answer: "Applying the change. Data collection is usually bounded observation, while remediation alters system state and has higher consequences."
      }
    ],
    previousLessonId: "m4-1",
    nextLessonId: "m4-5"
  },
  {
    id: "m4-5",
    slug: "designing-standing-orders-and-guardrails",
    moduleId: "module-4",
    orderInModule: 3,
    orderGlobal: 16,
    title: "Designing Standing Orders and Guardrails",
    summary: "Turn repeated preferences and safety boundaries into durable instructions the agent can actually follow.",
    estimatedMinutes: 9,
    learningObjectives: [
      "Explain the difference between a vague preference and an actionable guardrail",
      "Write standing instructions that shape behavior across future runs",
      "Use guardrails to reduce spam, overreach, and noisy automation"
    ],
    keyTakeaways: [
      "Good guardrails are concrete, durable, and tied to observable behavior.",
      "Standing orders belong in files or policy-like instructions, not only in one chat turn.",
      "The best guardrails narrow the workflow contract instead of hoping the model guesses restraint."
    ],
    relatedConceptIds: ["guardrails", "approval", "memory", "workflow"],
    content: [
      {
        type: "rich-text",
        markdown:
          "'Be careful' is not a useful guardrail. 'Do not send external messages without approval' is. Standing orders work when they tell the agent what to do, what to avoid, and when to escalate. The more recurring the workflow, the more those rules should live in durable files rather than in temporary chat wording."
      },
      {
        type: "example",
        title: "Weak vs strong guardrail",
        scenario: "Weak: 'Don't be annoying.' Strong: 'For scheduled briefings, send one concise update and stay quiet when nothing important changed.'",
        explanation: "The stronger version defines the output style and the condition for not sending anything."
      },
      {
        type: "list",
        title: "Useful guardrails often specify",
        items: [
          "What the workflow is allowed to do automatically",
          "What always requires approval",
          "How brief or noisy the output should be",
          "What to record so future runs stay consistent"
        ]
      },
      {
        type: "checkpoint",
        question: "Why are durable files a better home for standing orders than repeating the same chat instruction every time?",
        answer: "Because durable files can be reloaded across runs and sessions, making the behavior more stable and less dependent on transient chat context."
      }
    ],
    previousLessonId: "m4-3",
    nextLessonId: "m5-1"
  },
  {
    id: "m5-1",
    slug: "chat-assistant-pattern",
    moduleId: "module-5",
    orderInModule: 1,
    orderGlobal: 17,
    title: "The Chat Assistant Pattern",
    summary: "The chat assistant pattern keeps the agent in the main session, responds to a human-led request, and only reaches for tools when the task genuinely needs them.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Describe the simplest useful OpenClaw workflow shape",
      "Recognize when the main session is the right home for a task",
      "Understand why chat assistance should stay collaborative rather than over-automated"
    ],
    keyTakeaways: [
      "The chat assistant pattern is message-triggered, collaborative, and usually grounded in the current session.",
      "It is often the right default when the user is actively present and follow-up questions matter.",
      "Tool use should stay purposeful: only inspect files, the web, or the shell when the job truly needs it."
    ],
    relatedConceptIds: ["agent", "session", "tools", "workflow", "trigger"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "The chat assistant pattern is the closest thing OpenClaw has to a default mode. A human asks for help in the main session, the assistant uses the current conversational context, and the run stays collaborative. Sometimes the answer is direct. Sometimes the assistant reads a file or uses another tool. The key point is that the workflow is still centered on a human-guided exchange, not on unattended automation."
      },
      {
        type: "example",
        title: "Typical fit",
        scenario: "A user asks for a summary of project docs, a recommendation based on a few files, or help interpreting an error message.",
        explanation: "Those are great chat-assistant tasks because the human is present, follow-up is likely, and the assistant can clarify or adjust quickly."
      },
      {
        type: "list",
        title: "Pattern anatomy",
        items: [
          "Message trigger from an active user",
          "Main-session continuity and recent back-and-forth",
          "Optional tool use when evidence or file access is needed",
          "Reply-first output, sometimes with a saved artifact"
        ]
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you open this example",
        title: "Take this into Examples: inspect the live chat-assistant workflow",
        body: "Open the Research Assistant example as the closest live pattern match. Read it like a chat-assistant workflow first: user-triggered, main-session friendly, collaborative, and only using tools when the task needs evidence or an artifact.",
        href: "/examples/research-assistant",
        linkLabel: "Open Research Assistant example",
        checklist: [
          "Confirm that the trigger is a direct user message rather than a schedule",
          "Check that the session pattern stays interactive and allows clarification",
          "Notice that tool use supports the request instead of replacing the collaborative chat flow"
        ]
      },
      {
        type: "checkpoint",
        question: "When is the chat assistant pattern usually better than a scheduled or isolated workflow?",
        answer: "When the user is actively collaborating, the task benefits from follow-up, and unattended automation would add more complexity than value."
      }
    ],
    previousLessonId: "m4-5",
    nextLessonId: "m5-2"
  },
  {
    id: "m5-2",
    slug: "scheduled-briefing-pattern",
    moduleId: "module-5",
    orderInModule: 2,
    orderGlobal: 18,
    title: "The Scheduled Briefing Pattern",
    summary: "A scheduled briefing gathers a few bounded signals, filters for relevance, and delivers one compact update without depending on a fresh prompt.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain the anatomy of a scheduled briefing workflow",
      "Understand why schedules, durable state, and concise outputs belong together",
      "Recognize where approval usually is and is not needed in a briefing flow"
    ],
    keyTakeaways: [
      "Scheduled briefings are strongest when they gather a small set of signals and compress them hard.",
      "State matters because recurring workflows should avoid repeating the same alert over and over.",
      "Most briefing workflows can run automatically as long as they stay observational and bounded."
    ],
    relatedConceptIds: ["schedule", "trigger", "memory", "workflow", "session"],
    relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
    content: [
      {
        type: "rich-text",
        markdown:
          "The scheduled briefing pattern is one of the clearest examples of bounded automation. The run wakes on a schedule, loads standing instructions and lightweight state, gathers a few current signals, then produces one short update. It should feel like a useful briefing, not like an audit log dumped into chat."
      },
      {
        type: "list",
        title: "Pattern anatomy",
        items: [
          "Schedule trigger",
          "Dedicated recurring session or isolated run",
          "Small set of trusted inputs",
          "Compressed final update plus state recording"
        ]
      },
      {
        type: "callout",
        tone: "mental-model",
        title: "The hard part is filtering",
        body: "The workflow earns trust not by collecting everything, but by deciding what is worth interrupting the user for."
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you open this example",
        title: "Take this into Examples: inspect the live scheduled-briefing pattern",
        body: "Open the Morning Briefing example and trace the full pattern: schedule-triggered start, dedicated recurring context, filtered inputs, and lightweight state that keeps the workflow from repeating itself noisily.",
        href: "/examples/morning-briefing",
        linkLabel: "Open Morning Briefing example",
        checklist: [
          "Confirm that the trigger is scheduled and not waiting on a fresh user message",
          "Look for the dedicated session pattern and why it avoids random chat baggage",
          "Inspect the state-recording step and connect it to repetition prevention"
        ]
      },
      {
        type: "checkpoint",
        question: "Why should a scheduled briefing usually keep its own state file or memory record?",
        answer: "So future runs know what was already surfaced and can avoid duplicate reminders or stale repeated alerts."
      }
    ],
    previousLessonId: "m5-1",
    nextLessonId: "m5-4"
  },
  {
    id: "m5-4",
    slug: "research-pipeline-pattern",
    moduleId: "module-5",
    orderInModule: 3,
    orderGlobal: 19,
    title: "The Research Pipeline Pattern",
    summary: "A research pipeline turns an underspecified question into a bounded gather, inspect, synthesize, and save workflow.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Describe the gather -> inspect -> synthesize -> save shape of a research workflow",
      "Understand why tool outputs improve trust compared with model-only speculation",
      "Know when saving an artifact is worth the extra step"
    ],
    keyTakeaways: [
      "Research workflows are better when they are evidence-backed instead of answer-first.",
      "Search and fetch tools gather material; the model's job is to compare and compress it.",
      "Writing a memo or report turns a one-off answer into reusable project context."
    ],
    relatedConceptIds: ["tools", "context", "workspace", "workflow", "session"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "The research pipeline pattern is what you use when a user needs more than a quick opinion. The run interprets the task, searches for sources, fetches the best material, synthesizes the findings, and often writes a durable memo. This keeps the workflow grounded in inspectable inputs rather than in whatever the model happened to remember."
      },
      {
        type: "example",
        title: "Pattern in one sentence",
        scenario: "'Compare two options, use reliable sources, then save a short recommendation memo.'",
        explanation: "That request already implies a pipeline: gather evidence, evaluate it, then produce both a chat answer and an artifact."
      },
      {
        type: "list",
        title: "Typical pipeline steps",
        items: [
          "Interpret the question and desired output",
          "Search for candidate sources",
          "Fetch the most relevant material",
          "Synthesize and write the result"
        ]
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you open this example",
        title: "Take this into Examples: inspect the live research pipeline",
        body: "Open the Research Assistant example and follow the pipeline as a sequence, not just a page of metadata. The point is to see how search, fetch, synthesis, and saved output work together as one bounded workflow.",
        href: "/examples/research-assistant",
        linkLabel: "Open Research Assistant example",
        checklist: [
          "Read the execution steps in order: interpret, search, fetch, synthesize, write",
          "Check which tools are doing evidence gathering versus final synthesis",
          "Notice that the saved report turns the run into reusable workspace context instead of a one-off chat answer"
        ]
      },
      {
        type: "checkpoint",
        question: "Why is a saved memo often worth producing in a research workflow?",
        answer: "Because it preserves the useful work in the workspace so the result can be reused, checked, or extended later instead of disappearing into transient chat history."
      }
    ],
    previousLessonId: "m5-2",
    nextLessonId: "m5-6"
  },
  {
    id: "m5-6",
    slug: "delegate-pattern",
    moduleId: "module-5",
    orderInModule: 4,
    orderGlobal: 20,
    title: "The Delegate Pattern",
    summary: "Use delegation when one bounded subtask should be isolated from the main thread so the overall workflow stays cleaner and easier to reason about.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Explain when delegation improves focus and when it is unnecessary overhead",
      "Describe the main-agent to worker handoff shape",
      "Connect delegation to isolation, structured outputs, and cleaner orchestration"
    ],
    keyTakeaways: [
      "Delegation is useful when a subtask is real, bounded, and benefits from isolation.",
      "A delegated worker should return a focused result, not reopen the whole problem.",
      "The main agent coordinates; the subagent executes one lane of work."
    ],
    relatedConceptIds: ["subagents", "session", "routing", "workflow", "agent"],
    content: [
      {
        type: "rich-text",
        markdown:
          "The delegate pattern is a way to keep complex work from turning into one giant tangled run. The main agent keeps the overall goal, then hands one bounded task to a worker. That worker runs in a narrower context, produces a result, and returns it. The point is not drama or theatrics. The point is cleaner isolation and less clutter."
      },
      {
        type: "example",
        title: "Good delegation",
        scenario: "The main agent asks a worker to review one file or research one narrow question, then bring back a short result.",
        explanation: "That is a bounded subtask. By contrast, delegating the entire original task often just adds confusion."
      },
      {
        type: "callout",
        tone: "insight",
        title: "Delegate narrow work, not responsibility",
        body: "The main agent still owns the outcome. Delegation is a tool for focus and isolation, not an excuse to stop thinking about boundaries."
      },
      {
        type: "action-cta",
        eyebrow: "Examples handoff",
        checklistTitle: "When you open this example",
        title: "Take this into Examples: inspect a bounded delegated lane",
        body: "Open the Recurring Maintenance Check example as the clearest live contrast for isolated workflow structure and bounded operational lanes. Read it with delegation in mind: the main value comes from cleanly separating inspection work, categorization, and the final escalation edge.",
        href: "/examples/recurring-maintenance-check",
        linkLabel: "Open Maintenance Check example",
        checklist: [
          "Inspect how the workflow isolates recurring inspection from the main chat",
          "Look for the narrow execution steps and where responsibility returns to a human reviewer",
          "Use the step list to ask which parts could stay delegated or isolated without handing off the whole problem"
        ]
      },
      {
        type: "checkpoint",
        question: "What is the clearest sign that a task is a good candidate for delegation?",
        answer: "It is a distinct, bounded subtask with a clear output that benefits from running in a narrower, isolated context."
      }
    ],
    previousLessonId: "m5-4",
    nextLessonId: "m6-1"
  },
  {
    id: "m6-1",
    slug: "picking-the-right-first-workflow",
    moduleId: "module-6",
    orderInModule: 1,
    orderGlobal: 21,
    title: "Picking the Right First Workflow",
    summary: "Your first workflow should be narrow, repeatable, and easy to judge, not a giant 'do everything for me' design exercise.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Choose a workflow that is small enough to succeed early",
      "Recognize what makes a workflow easy or hard to validate",
      "Prefer bounded recurring value over ambitious vague automation"
    ],
    keyTakeaways: [
      "The best first workflow is concrete, narrow, and easy to evaluate.",
      "Bounded observation or reporting usually beats complicated autonomous action for a first build.",
      "You gain trust faster from one reliable workflow than from a grand but messy design."
    ],
    relatedConceptIds: ["workflow", "trigger", "approval", "session"],
    relatedSimulationScenarioSlugs: ["scheduled-briefing-run"],
    content: [
      {
        type: "rich-text",
        markdown:
          "Beginners often reach for the most ambitious idea first: a workflow that monitors everything, acts everywhere, and somehow never makes mistakes. That is almost always the wrong starting point. A better first workflow is one with a clear trigger, a small set of inputs, and an output you can quickly judge as useful or noisy."
      },
      {
        type: "example",
        title: "Good first workflow shape",
        scenario: "A short morning briefing or a simple research memo request is a better first build than an all-day autonomous operator.",
        explanation: "The simpler workflow is easier to inspect, safer to bound, and much easier to improve after the first run."
      },
      {
        type: "list",
        title: "Traits of a good first workflow",
        items: [
          "Clear trigger",
          "Small, trusted inputs",
          "Easy-to-judge output",
          "Low blast radius if it is wrong"
        ]
      },
      {
        type: "checkpoint",
        question: "What makes a workflow a strong candidate for your first build?",
        answer: "It is narrow, repeatable, easy to judge, and low-risk if the result is imperfect."
      }
    ],
    previousLessonId: "m5-6",
    nextLessonId: "m6-2"
  },
  {
    id: "m6-2",
    slug: "defining-the-trigger",
    moduleId: "module-6",
    orderInModule: 2,
    orderGlobal: 22,
    title: "Defining the Trigger",
    summary: "Choose the start condition first, because the trigger is the opening contract that decides how the whole workflow should behave.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Choose triggers that match the real rhythm of the job",
      "Compare message-triggered and scheduled workflows using live seeded examples",
      "Recognize the failure modes created by a trigger that starts the workflow in the wrong way"
    ],
    keyTakeaways: [
      "The trigger is the beginning of the workflow contract, not a minor setup detail.",
      "Message-triggered and scheduled workflows feel different because they create different expectations about timing, context, and collaboration.",
      "If the trigger is wrong, the rest of the workflow often feels noisy, brittle, or strangely inconvenient."
    ],
    relatedConceptIds: ["workflow", "schedule", "session", "channels"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use", "scheduled-briefing-run"],
    content: [
      {
        type: "rich-text",
        markdown:
          "Many workflow design problems start before tools, memory, or approval ever come into play. They start with the wrong trigger. The trigger is not just what wakes the workflow up. It defines who starts the interaction, when the run should happen, and whether the user expects collaboration or routine execution. In practice, that means the trigger is the first part of the workflow contract."
      },
      {
        type: "example",
        title: "Message-triggered versus scheduled, using the live workflow shapes",
        scenario: "Compare `research-assistant` with `morning-briefing`. The research assistant starts from a user message because the question is ad hoc and often benefits from clarification. The morning briefing starts on a schedule because the whole point is that it should happen without waiting for the user to remember to ask.",
        explanation: "Those are not cosmetic differences. A message trigger says, 'this run begins when a person wants help right now.' A schedule says, 'this run should happen reliably whether or not a person is present.' Once you feel that distinction, trigger choice gets much easier."
      },
      {
        type: "list",
        title: "Common trigger types",
        items: [
          "Message: best for interactive help, changing goals, or tasks that may need clarification",
          "Schedule: best for regular briefings, maintenance checks, and other repeatable routines",
          "Event: best when another system emits a clear signal worth reacting to",
          "Manual: best when the user wants explicit one-click or one-command control"
        ]
      },
      {
        type: "list",
        title: "When this choice goes wrong",
        items: [
          "A scheduled workflow becomes noise because the task was really occasional and user-driven",
          "A message-triggered workflow gets forgotten because the value depended on reliable repetition",
          "The run starts too often because the trigger is easy to fire but the workflow is expensive or distracting",
          "The user expects collaboration, but the trigger starts an isolated routine run with no good place for follow-up"
        ]
      },
      {
        type: "action-cta",
        title: "Take this into Build: pick the trigger first",
        body: "Use Build as the continuation of this lesson, not as a blank form. Start by deciding whether the workflow should begin from a user message or from a schedule, and leave the later choices alone until that start condition feels right.",
        href: "/build",
        linkLabel: "Open Build",
        checklist: [
          "Choose the trigger before touching tools, memory, or approval",
          "If the job is ad hoc and collaborative, lean message-triggered",
          "If the value depends on reliable repetition, lean scheduled"
        ]
      },
      {
        type: "checkpoint",
        question: "Why is trigger choice best made before tools or memory?",
        answer: "Because the trigger defines the run's basic contract: who starts it, when it should happen, and whether the workflow should behave like interactive help or a repeatable routine."
      }
    ],
    previousLessonId: "m6-1",
    nextLessonId: "m6-4"
  },
  {
    id: "m6-4",
    slug: "choosing-the-right-tools-and-skills",
    moduleId: "module-6",
    orderInModule: 3,
    orderGlobal: 23,
    title: "Choosing the Right Tools and Skills",
    summary: "Workflow design gets easier when you pick the smallest viable toolset, then add only the capabilities that the job can honestly justify.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Match tool choice to real workflow needs instead of available power",
      "Compare the live builder tools across the three seeded workflow examples",
      "Use the minimum-viable-toolset rule to keep workflows safer and easier to debug"
    ],
    keyTakeaways: [
      "Pick tools based on the job, not because they are available.",
      "A smaller toolset usually makes workflows easier to trust, review, and debug.",
      "Skills and tools should sharpen the workflow contract, not make it feel more impressive."
    ],
    relatedConceptIds: ["tools", "workflow", "context", "approval"],
    relatedSimulationScenarioSlugs: ["direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A workflow that only needs to read docs and write a summary should not automatically carry shell access and web tools. Tool choice is part of the workflow contract. The cleaner design question is not 'what can I enable?' It is 'what is the smallest set of tools that can still finish this job honestly?'"
      },
      {
        type: "list",
        title: "The live builder tool groups in plain language",
        items: [
          "`read`: load local instructions, notes, prior reports, or policy files",
          "`write`: save the durable artifact the workflow is supposed to produce",
          "`web search + fetch`: gather outside evidence instead of relying on memory or guesswork",
          "`exec`: inspect live system state with bounded commands when operational checks are part of the job"
        ]
      },
      {
        type: "example",
        title: "Minimum viable toolsets across the three seeded workflows",
        scenario: "`morning-briefing` mainly needs read, limited outside signal gathering, and write for concise saved state or artifacts. `research-assistant` needs web search + fetch, read for instructions or notes, and write for the saved memo. `recurring-maintenance-check` needs read for policy, exec for inspection, and write for the dated report.",
        explanation: "That comparison is the real lesson: different workflows justify different tool bundles. The right answer is not 'give every workflow everything.' The right answer is 'enable only the tools required by this shape of work.'"
      },
      {
        type: "list",
        title: "A practical selection rule",
        items: [
          "Start with the minimum toolset that can finish the job",
          "Add web tools only if outside evidence is needed",
          "Add exec only if system inspection or operations are genuinely part of the workflow",
          "Use a skill when the task clearly matches a specialized reusable playbook"
        ]
      },
      {
        type: "action-cta",
        title: "Take this into Build: choose the smallest viable toolset",
        body: "Open Build and give the workflow only the tools the job can honestly justify. The goal is not to make it feel powerful. The goal is to make it finish the work cleanly with the smallest viable toolset.",
        href: "/build",
        linkLabel: "Open Build",
        checklist: [
          "Start with the minimum toolset that can still finish the job",
          "Add web tools only if outside evidence is truly required",
          "Add exec only if live system inspection or operations are genuinely part of the workflow"
        ]
      },
      {
        type: "checkpoint",
        question: "Why is the smallest useful toolset often the best design choice?",
        answer: "Because it reduces complexity and risk while making the workflow easier to understand, trust, and debug."
      }
    ],
    previousLessonId: "m6-2",
    nextLessonId: "m6-5"
  },
  {
    id: "m6-5",
    slug: "deciding-where-memory-should-live",
    moduleId: "module-6",
    orderInModule: 4,
    orderGlobal: 24,
    title: "Deciding Where Memory Should Live",
    summary: "Choose the lightest memory model that preserves continuity without turning the workflow into a noisy archive of everything it ever saw.",
    estimatedMinutes: 10,
    learningObjectives: [
      "Match information to the right storage pattern instead of treating all memory as one bucket",
      "Contrast minimal memory, lightweight workflow state, and report history using the live builder choices",
      "Decide what belongs in files, workflow state, and saved report history for recurring workflows"
    ],
    keyTakeaways: [
      "Not all memory belongs in the same place.",
      "The right memory choice depends on whether you need repetition prevention, durable comparison, or long-running history.",
      "Good workflow memory is selective: enough continuity to stay useful, not so much that every run drags around clutter."
    ],
    relatedConceptIds: ["memory", "workspace", "workflow"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A strong workflow is not just about the right trigger and tools. It also depends on putting the right information in the right place so future runs can recover it predictably. In Build, the live choice is not 'memory or no memory' in the abstract. It is whether this workflow needs minimal memory, lightweight workflow state, or report history. Those options exist because different jobs forget in different ways."
      },
      {
        type: "list",
        title: "Use the builder's three memory options as a design test",
        items: [
          "Minimal memory: best when the run can succeed mostly from the current request and a few durable instructions",
          "Lightweight workflow state: best when the workflow must avoid repetition, duplicate alerts, or re-sending the same item",
          "Report history: best when later runs should compare against a trail of prior outputs and detect trends over time"
        ]
      },
      {
        type: "example",
        title: "Map the live workflow examples to memory choices",
        scenario: "`research-assistant` often works with minimal memory because the current request defines the job and the saved memo is enough durable output. `morning-briefing` benefits from lightweight workflow state so it does not repeat yesterday's reminder. `recurring-maintenance-check` benefits from report history because weekly reports become the baseline for trend comparison.",
        explanation: "This is the practical contrast to keep in mind: use the lightest memory option that solves the actual continuity problem. Do not store history just because you can."
      },
      {
        type: "list",
        title: "What belongs where",
        items: [
          "Files: standing instructions, policy, rubrics, and project decisions people may need to inspect later",
          "Workflow state: compact markers like last-sent items, recent alerts, or prior status needed to avoid repetition",
          "Report history: dated outputs you want to compare across time for trend or drift"
        ]
      },
      {
        type: "action-cta",
        title: "Take this into Build: choose the lightest memory that still works",
        body: "Open Build and choose the lightest memory option that still prevents repetition or preserves the history this workflow actually needs. Keep memory selective so each run stays useful without dragging around clutter.",
        href: "/build",
        linkLabel: "Open Build",
        checklist: [
          "Use minimal memory if durable instructions plus the current request are enough",
          "Use lightweight workflow state if you mainly need to avoid repetition or duplicate alerts",
          "Use report history only when later runs need a dated trail for comparison or trend detection"
        ]
      },
      {
        type: "checkpoint",
        question: "Where should a project-specific implementation decision usually be stored?",
        answer: "In a project file inside the workspace, so later runs and collaborators can find it predictably."
      }
    ],
    previousLessonId: "m6-4",
    nextLessonId: "m6-6"
  },
  {
    id: "m6-6",
    slug: "when-to-use-main-session-isolated-sessions-or-subagents",
    moduleId: "module-6",
    orderInModule: 5,
    orderGlobal: 25,
    title: "When to Use Main Session, Isolated Sessions, or Subagents",
    summary: "Choose the execution shape that matches the job: keep interactive work in the main session, isolate clean recurring runs, and delegate only genuinely bounded subtasks.",
    estimatedMinutes: 8,
    learningObjectives: [
      "Match session style to workflow shape",
      "Recognize when isolation is helpful",
      "Know when a subagent is useful and when it is just overhead"
    ],
    keyTakeaways: [
      "The main session is best for collaborative back-and-forth work.",
      "Isolated sessions are useful when a run should not inherit random conversational baggage.",
      "Subagents are best for narrow delegated work, not for avoiding responsibility."
    ],
    relatedConceptIds: ["session", "subagents", "routing", "workflow"],
    relatedSimulationScenarioSlugs: ["simple-answer-no-tool-calls", "scheduled-briefing-run"],
    content: [
      {
        type: "rich-text",
        markdown:
          "Execution shape is part of workflow design. If the user is actively collaborating, the main session is often the right home. If a recurring workflow should stay clean and predictable, give it an isolated session. If one bounded lane of work should be split off and returned, that is when a subagent starts to make sense."
      },
      {
        type: "example",
        title: "Three different fits",
        scenario: "A conversational research task belongs in the main session. A daily briefing belongs in an isolated recurring session. A narrow file review or focused research subtask can be delegated to a subagent.",
        explanation: "The point is to choose the shape that keeps context and responsibility legible."
      },
      {
        type: "list",
        title: "Quick chooser",
        items: [
          "Main session: interactive, collaborative, follow-up-heavy work",
          "Isolated session: repeatable or clean-slate runs with predictable context",
          "Subagent: narrow delegated subtask with a clear return artifact or result"
        ]
      },
      {
        type: "checkpoint",
        question: "When is a subagent the wrong choice?",
        answer: "When the task is not truly bounded and you are just pushing the whole original problem into another lane without gaining clarity or isolation."
      }
    ],
    previousLessonId: "m6-5",
    nextLessonId: "m6-7"
  },
  {
    id: "m6-7",
    slug: "designing-for-approval-versus-autonomy",
    moduleId: "module-6",
    orderInModule: 6,
    orderGlobal: 26,
    title: "Designing for Approval Versus Autonomy",
    summary: "A good workflow does as much safe preparation and observation as it can on its own, then stops exactly where human permission or judgment starts to matter.",
    estimatedMinutes: 11,
    learningObjectives: [
      "Balance usefulness and oversight in a workflow design",
      "Place approval checkpoints at the risky edge instead of across the whole run",
      "Use the builder's two approval postures to distinguish observation from consequential change"
    ],
    keyTakeaways: [
      "Autonomy is not all-or-nothing; it is a design choice applied step by step.",
      "The best workflows automate preparation and observation, then escalate only at consequential decision points.",
      "Approval boundaries should be visible, narrow, and easy for a human to judge quickly."
    ],
    relatedConceptIds: ["approval", "guardrails", "workflow", "tools", "session"],
    relatedSimulationScenarioSlugs: ["scheduled-briefing-run", "direct-user-message-with-tool-use"],
    content: [
      {
        type: "rich-text",
        markdown:
          "A weak workflow design often swings to an extreme: either the agent asks for approval at every tiny step and becomes tedious, or it is given broad autonomy and becomes hard to trust. The better approach is to break the run into stages. Let the system gather context, inspect files, categorize findings, and draft a proposal on its own. Then require approval only when the next step would publish, change state, spend money, or otherwise cross a meaningful consequence boundary."
      },
      {
        type: "example",
        title: "Observation versus change in the live maintenance workflow",
        scenario: "In `recurring-maintenance-check`, the workflow can read policy, run bounded inspection commands, compare against previous reports, and draft a severity summary automatically. That is observation. If the next step becomes 'apply this remediation command' or 'make a system change,' the workflow should switch to a gated approval posture.",
        explanation: "That contrast is the heart of good approval design. The workflow is still useful while autonomous, but the consequential change remains human-controlled."
      },
      {
        type: "list",
        title: "Approve the risky edge, not the whole run",
        items: [
          "Let the workflow gather evidence and prepare the proposed action first",
          "Gate the state-changing, externally visible, or costly step rather than every harmless precursor",
          "Make the approval request concrete: show the exact draft, command, or change being proposed",
          "Keep the approval posture narrow enough that a human can judge it quickly"
        ]
      },
      {
        type: "list",
        title: "A practical autonomy test",
        items: [
          "Can this step be safely reversed if it goes wrong?",
          "Is the step only observation or drafting, rather than external action?",
          "Would a human reviewer benefit from seeing a prepared proposal first?",
          "Is the approval request concrete enough to judge in one glance?"
        ]
      },
      {
        type: "action-cta",
        title: "Take this into Build: set approval posture last",
        body: "Open Build and make approval the final design choice. Let the workflow gather evidence and prepare safely on its own, then gate the consequential edge instead of making the whole run ask permission for every harmless step.",
        href: "/build",
        linkLabel: "Open Build",
        checklist: [
          "Choose trigger, tools, and memory first so you know what the workflow really does",
          "Let observation, drafting, and safe preparation run automatically",
          "Gate the state-changing, externally visible, or costly step at the consequential edge"
        ]
      },
      {
        type: "checkpoint",
        question: "What is the main goal of designing for approval versus autonomy?",
        answer: "To automate the safe, useful parts of a workflow while reserving human review for the consequential step where judgment or permission really matters."
      }
    ],
    previousLessonId: "m6-6"
  }
];

---
title: Stateful agents replace stateless chat
date: 2025-09-09T09:45:13.626Z
url: https://x.com/AnandChowdhary/status/1965350724705116347
---

Skip the shiny "branches" and "new endpoint" chatter - the move is from stateless chat to stateful, tool‑grounded agent loops.  
  
Branching in [@ChatGPTapp](https://x.com/ChatGPTapp) \+ a Responses‑first SDK makes server state the default.  
  
Under the hood, Responses is a stateful primitive. You pass previousresponseid, the provider runs tools like web and file search or computer use, it can switch to background mode for long runs, and you get reasoning summaries. Code Interpreter is now just another tool on the same call.  
  
AI SDK v5 mirrors this. Distinct UIMessage and ModelMessage, agent loop controls like stopWhen and prepareStep, and first class support for provider tools.  
  
Net result: fewer homegrown orchestrators and more single call, multi step agents that stream tool output and persist by ID instead of resending full transcripts. Yes, finally.  
  
Tradeoffs are real. State buys continuity and simpler code, but you pay in portability and repeatability. Server held history makes migration, audits, and bit exact replays across providers harder. You're now trusting opaque state compaction and vendor tool behavior.  
  
Chat Completions still fits stateless message array flows, but the new toys live in Responses: search, computer use, and background tasks.  
  
On capability, GPT‑5 and GPT‑5 pro push deeper test time compute. Code looks strong on SWE‑bench Verified and Aider's polyglot runs. In Codex slow pass mode it often fixes multi file issues, but latency and variance show up. I keep hearing both "it finally closes tough PRs" and "it's slower than 4o even with minimal reasoning."  
  
My read: We're converging on agent UX where conversation is a state machine. Branching in ChatGPT maps to forkable state graphs. Responses turns that graph into an API object with background execution and provider tools.  
  
This shifts work from prompt plumbing to observability. You'll want per turn traces, tool I O logs, and frozen snapshots to satisfy incident reviews, reproducibility, and SOC2 or ISO audits.  
  
Costs also shift. Less token driven, more wall clock, tool latency, and background queueing. Knobs like reasoning\_effort and verbosity become SLO dials, not style choices.  
  
Open questions I care about:  
1) Will there be a clean stateless export (messages, tool traces, files) for exact replays across providers?  
2) How are reasoning summaries produced and can we log them safely without leaking sensitive context?  
3) Can GPT‑5 pro expose per task compute budgets to bound latency and spend?  
  
If we get crisp answers, this stateful turn can make agents reliable and portable, not just sticky. I'm optimistic, and I want escape hatches and good logs.

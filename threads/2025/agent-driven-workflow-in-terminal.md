---
title: Agent driven workflow in terminal
date: 2025-09-04T09:45:10.347Z
url: https://x.com/AnandChowdhary/status/1963538783305187417
---

Congrats [@zachlloydtweets](https://x.com/zachlloydtweets) on launching Warp Code - looks solid! The real move is changing the unit of work from manual edits to an agent run pipeline with permissions, concurrency, and steering UI inside the terminal. That is much harder to race to the bottom with tokens!  
  
Technically, Warp adds steering primitives the CLI chat pattern misses. Diff-first code review and edit panels. A lightweight file tree and editor. Projects with WARP.md that work with AGENTS.md and CLAUDE.md. Agent profiles. Org context via MCP and Drive.  
  
Under the hood, it stays single agent with a clear plan. TODOs, model choice, and a fallback chain carried over from their SWE bench work. This feels like app layer systems engineering, not just prompting.  
  
Benchmarks keep moving: In June Warp hit 52% on Terminal Bench and briefly led. Today OB 1 shows 59%.  
  
On SWE bench Verified, Warp reports 75.8% with GPT 5 and a light best at k wrapper. Promising. Fair comparisons need the same model, retries, and budget. Also 97% diff acceptance is not correctness. I want post-merge quality and security signals too!  
  
Can anyone compete with Claude Code, Gemini CLI, or Codex if labs discount compute? Maybe, but I think not. Potentially win on governance and optionality.  
  
But labs can subsidize tokens. That seems like an unfair advantage you just can't argue against.  
  
Warp's wedge is ADE level policy and permissions, zero data retention, bring your own model, and a neutral surface that centralizes context and control.

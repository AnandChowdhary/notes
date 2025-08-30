---
title: Codex unifies the workflow
date: 2025-08-29T21:15:12.930Z
url: https://x.com/AnandChowdhary/status/1961538098896204032
---

Codex is more than the model - it fuses IDE, terminal, cloud sandboxes, GitHub PRs, and your phone into one identity backed agent. A land grab across the workflow, from pair programming to CI. 👇  
  
Under the hood: Codex defaults to GPT 5 with selectable reasoning levels. The open source CLI, now mostly Rust, runs locally with approval modes: Read-only, Auto, Full. I like that it puts you in charge. It speaks MCP and ships extensions for VS Code, Cursor, and Windsurf.  
  
Cloud work runs in an isolated universal container. Internet is off by default with domain and method allowlists. Secrets are exposed only to setup scripts. Start in IDE, web, or iOS, hand off to the cloud, and trigger PR reviews by tagging @-codex on GitHub. Windows is still experimental.  
  
This feels like a complete agent surface - which is actually leapfrogging Claude Code which only works in the terminal and therefore in VMs or GitHub Actions, but has no first-class integration with GitHub PRs or Linear issues.  
  
On the scoreboard, OpenAI quotes 74.9% on SWE-bench Verified and fresh coding evals. They also note the runs used a fixed 477 task subset. The launch deck chart issues did not help trust in apples to apples comparisons.  
  
I still reach for Claude Code when I care about terminal-first ergonomics and price to performance tradeoffs, and use it as my default coding tool (which replaces Cursor a few months ago). GPT 5 likely closes autonomy gaps.  
  
What wins my day-to-day is stability and long horizon task reliability - not a single number.  
  
The novel bit is distribution and security. ChatGPT sign-in means no API keys and less setup pain. Very similar to when Claude Code allowed logging with Claude accounts, although that was for billing reasoning.  
  
GitHub PR reviews and cloud tasks can be governed by allowlists and AGENTS-md-based conventions.  
  
If this standardizes agent ready repos, IDEs and CI will need to meet the agent where it works: containers, PRs, MCP. I have been burned by flaky sandboxes, so determinism matters.  
  
The risk surface shifts from prompt quality to supply chain hygiene, sandbox determinism, and review throughput. Your tests and guardrails become the control plane.  
  
Open questions I want data on:  
\- How reproducible are cloud runs across cached containers and moving dependencies, and what variance appears under restricted internet?  
\- Does local-to-cloud context handoff stay robust at scale, and when does CLI to cloud feel without bumps?  
\- Are @-codex PR reviews precise enough to gate merges without drowning humans in diffs?  
  
Benchmarks are a start - I will call this the new default when we see lower rollback rates, cleaner failure modes, and higher PR acceptance on real repos over weeks, not demos.

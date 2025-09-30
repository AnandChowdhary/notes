---
title: AI shifts bottleneck to understanding
date: 2025-09-29T09:45:13.397Z
url: https://x.com/AnandChowdhary/status/1972598480620450101
---

AI moves the bottleneck to understanding. If we skip specs, seams, and tests, we save keystrokes and rack up comprehension debt. That bill arrives with interest.  
  
I treat current agents like zero retention, ultra fast juniors. Amazing speed, spotty judgment, no memory.  
  
So I shape the system around them:  
\- small, stable interfaces to bound context  
\- version prompts and contexts in git  
\- front load invariants with property tests and contracts  
  
Then I let the agent fill in code inside those boxes. That flips work from architecture last to implementation under constraint. That is where speed turns into throughput.  
  
Quality shows up in delivery metrics, not tokens per second. Lead time drops only when rework and change failure rate stay low.  
  
Unbounded vibe coding raises entropy. Hidden coupling, giant diffs that swamp reviewers, flaky tests, security slips.  
  
Put policy gates in the loop. Static analysis, dependency policies, secret scanners. Keep tests green before you escalate tool use. Use capability based tool access to keep the agent's blast radius small.  
  
Context is a design problem, not a window size number.  
  
Build a repo graph and retrieve module local slices. Anchor generation with ADRs and executable specs. Prefer monotonic migrations and schema evolution checks. Snapshot and contract tests preserve behavior at seams.  
  
Agents are great at reading logs. Point them at traces to spot invariant breaks and perf regressions, not only to write code.  
  
My read from Chris Loy's piece: think first, then generate under constraints. That is the sustainable path to faster delivery.  
  
<https://chrisloy.dev/post/2025/09/28/the-ai-coding-trap>

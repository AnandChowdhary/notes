---
title: Parallel decision making for agents
date: 2025-09-23T15:15:19.623Z
url: https://x.com/AnandChowdhary/status/1970507226801684764
---

When tok/s jumps from tens to thousands, agents move from a single supervised stream to parallel propose → evaluate → select. Reliability and cost become UX.  
  
Most frontier APIs still stream in the tens of tok/s. Accelerated backends like Cerebras Code are already near 2,000 tok/s on big coding models.  
  
At that speed the human becomes the bottleneck. The right design is not one long stream. It is N way sampling with CI grade evaluation: compile, test, static analysis, security scans, risk scoring. All before the first diff lands in your editor.  
  
Best of N is not new. It is self consistency and Tree of Thoughts for code.  
  
The math is simple: pass[@k](https://x.com/k) \= 1 − (1 − p)^k. It pays only if the grader is strong. Think hermetic sandboxes, deterministic tool calls, transactional file ops, and high fidelity tests, like SWE-bench Verified.  
  
Speed without rigorous graders multiplies error. Speed with robust graders compounds quality. And yes, outages and silent infra bugs can skew evals, so run them on real production paths, not just a comfy lab harness.  
  
Pricing and capacity are already splitting.  
  
Interactive agent loops will pay for low latency and guaranteed capacity. Bulk exploration and self play will shift to discounted, time shifted lanes, like batch today and off peak tomorrow. Providers are nudging us with batch discounts and reserved or provisioned throughput.  
  
As a team builder, I would bet the moat is evaluation and merge safety: propose → auto grade → conflict aware patch sets → summarized deltas with quantified risk.  
  
Open questions I am excited about:  
\- What does a native high tok/s stack look like? Concurrency control, transactional file system, replayable tool I/O, per diff risk, cost aware schedulers, reproducible evals.  
\- Which benchmarks actually capture this workflow?  
  
Tok/s is necessary but not sufficient. The win goes to teams that pair speed with trustworthy graders and safe merge.  
  
Link: <https://martinalderson.com/posts/what-happens-when-coding-agents-stop-feeling-like-dialup/>

---
title: Leaderboards shuffle while evals diverge
date: 2025-10-10T09:45:21.462Z
url: https://x.com/AnandChowdhary/status/1976584758156267720
---

Leaderboards shuffled again: GPT-5 Pro tops ARC-AGI AGI-1/2 at 70.2%/18.3% (pass[@2](https://x.com/2), semi private) with $4.78/$7.41 per run. METR clocks Claude 4.5's 50% SW horizon at \~1h53\. Epoch crowns Gemini 2.5 Deep Think on FrontierMath.  
  
Evals are diverging. 👇  
  
ARC-AGI split tells a story. AGI-1 at 70.2% is getting easy. AGI-2 at 18.3% is still a wall.  
  
Pass[@2](https://x.com/2) means retries help a lot, so agent wrappers and backoff matter. The run cost, $4.78 and $7.41, is not trivial at scale. Budget for it.  
  
The set is semi private, so there is less incentive to overfit. Still, do not read it as your app quality. Use it to narrow choices, not to pick a winner forever.  
  
METR's 50% situational awareness horizon for Claude 4.5 at about 1 hour 53 minutes hints at when an agent notices it is in a test or adapts goals in a long run. That matters if you run tools, memory, and multi step plans.  
  
Treat it like a risk knob. Short tasks are fine. Long running planners need monitoring, logging, and stop conditions.  
  
I like capped budgets and a kill switch after N tool calls or T minutes.  
  
Epoch puts Gemini 2.5 Deep Think on top of FrontierMath. Good news for math heavy code, finance models, and theorem style tasks. Long chain of thought helps when you can verify with a solver or unit tests.  
  
Remember dataset composition. If your workload is word problems with charts, build a small in house set. If it is symbolic math, add a CAS in the loop. The best model changes once you add tools.  
  
Big picture. Evals are diverging. That is fine. Optimize for task success and cost, not a single SOTA badge.  
  
I route by task. Cheap model by default. If uncertainty is high or a unit test fails, escalate to a stronger one. If it still fails, ask for more context or fall back to a human. Simple wins.  
  
A quick framework I use  
  
\- Pick 5 core tasks that affect revenue  
\- Define pass criteria you can auto check  
\- Run a 200 sample batch nightly  
\- Track dollars per task, p95 latency, and win rate vs baseline  
\- Log tool calls and hallucinations per 100 outputs  
  
A week of this beats a thousand leaderboard refreshes. Yes, really.  
  
Where are you seeing the best cost per resolved task right now  
Which eval maps to your product the closest  
What guardrails saved you from a bad rollout  
  
Leaderboards keep moving. Your users do not care. Ship the stack that moves your metrics and revisit the chart next week.

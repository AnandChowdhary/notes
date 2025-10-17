---
title: Fewer turns lower costs
date: 2025-10-16T21:15:17.452Z
url: https://x.com/AnandChowdhary/status/1978932724275765700
---

I'm seeing turns beat tokens. GPT‑5 and o3 top 4.1 on GPQA‑Diamond and τ²‑Bench Telecom, and they finish agent flows in fewer rounds.  
  
With flat pricing, net cost lands near 4.1 because fewer turns. 👇  
  
Quick decode: GPQA‑Diamond is the hard split of graduate‑level questions without easy lookup. τ²‑Bench Telecom is a Dec‑POMDP that stresses long horizon decisions under partial info (I promise it's less scary than it sounds). Great proxies for planning.  
  
In that world the bottleneck is rounds of thought and tool calls. Token count still matters, but back and forths hurt more.  
  
Stronger models reach resolution in fewer turns, which means fewer retries, less orchestration, and lower latency.  
  
Flat token pricing makes the math friendly. If a stronger model needs fewer calls to reach the same answer, your end to end tokens and wall clock drop. So the bill looks a lot like 4.1 while quality goes up. Reasoning amortizes test time compute.  
  
What I'm changing in agent design  
  
Set a turn budget per task and design prompts to resolve more in one shot.  
Ask for plan then action in one call to avoid reflexive retries.  
Batch tool use and return compact deltas, not full states.  
Use stable scratchpads and explicit checklists to guide thought.  
  
Also measure it. Track turns to resolution, tool calls per task, tokens per turn, and wall clock next to accuracy.  
  
Are you optimizing for turns yet? What turn budget works for your workflows? Where would a longer single call help more than another loop  
  
Bottom line, stronger reasoning shifts focus from token thrift to turn thrift. Design for fewer decisions and let the model think more per step.

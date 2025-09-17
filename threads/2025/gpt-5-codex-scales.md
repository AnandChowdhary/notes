---
title: GPT 5 Codex scales
date: 2025-09-16T21:15:21.293Z
url: https://x.com/AnandChowdhary/status/1968061079952732186
---

GPT‑5‑Codex feels like a real jump: task adaptive compute, smarter tool routing, 93.7% fewer tokens on easy turns, about 2x more on hard ones, over 7 hours of autonomy, seccomp seatbelt sandbox, and PR grade reviews. Now let's see it behave at scale.  
  
Task adaptive compute is the headline for me. Spend tiny compute on obvious stuff, open the taps when it gets gnarly.  
  
Users see fast answers on trivial turns and better depth on hard ones. On hard ones, it applies about 2x compute. Finance sees the 93.7% token drop where it matters for cost.  
  
Smarter tool routing means a real planner up front. It picks which function to call and when to stop.  
  
Fewer self calls, fewer toy loops. Think "router -tool -> check -> maybe next tool" instead of chain everything. Boring reliability is a feature.  
  
That over 7 hour autonomy claim is spicy. Long running sessions are where agents get weird.  
  
If this holds, the state manager is doing real work. You need recap prompts, budget checks, and a watchdog. Otherwise it will happily wander all Sunday.  
  
Seatbelt and seccomp sandboxing is the grown up move. Run code, but isolate syscalls.  
  
Lock down filesystem and network egress. Ephemeral workdirs. It unblocks real tasks while keeping your cloud bill and compliance team calm. I like this a lot.  
  
PR grade reviews are useful if they stay specific. Inline diffs, style nits, security hints, and test suggestions.  
  
Strong on SWE bench and a 51% refactor eval is nice. The bar is whether it catches the one bug your senior would catch before merge.  
  
My deployment playbook as a founder.  
  
Start with a short tool list. Hard budgets per thread and wall clock timeouts. Deterministic stop conditions. Log every route decision. Add CI only as a non blocking reviewer. Escalate to humans on low confidence.  
  
The open questions. Does the router avoid hidden loops under traffic spikes. Does token burn stay flat across thousands of concurrent sessions. Do reviews reduce rollback rate.  
  
If the answers trend yes, this is a real upgrade. I'm cautiously optimistic.

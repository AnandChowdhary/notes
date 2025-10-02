---
title: Optimize cost per task
date: 2025-10-01T15:15:12.645Z
url: https://x.com/AnandChowdhary/status/1973406301121290252
---

Sonnet 4.5: 200K context, 64K out, $3 in and $15 out per million. Adds context editing, memory, and Code v2 with a VS Code flow for real 30 hour agents. Evals beat Gemini 2.5 and Grok 4 Fast, trail GPT 5 high.  
  
Founder takeaway: optimize $ per task. 👇  
  
I care about long horizon reliability because my agents can run overnight. 200K context plus memory means fewer lost threads and more checkpoints. My old setup would sometimes wander off after hour six, then pretend nothing happened the next morning.  
  
Context editing lets you patch the active working set without a full reload. 64K out helps with big diffs, long logs, and multi file plans without cutting sentences in half.  
  
Quick math I use: cost = input tokens over a million times 3 plus output tokens over a million times 15\. Track it per task, not per call.  
  
Evals show it trails GPT 5 high but beats Gemini 2.5 and Grok 4 Fast. ARC AGI climbs when you give it a bigger thinking budget. In plain terms, more tokens to think can improve reasoning, but you pay for that thought.  
  
I set a budget per task and let the agent request more when the expected value is positive. Cap per tool call. Raise for gnarly planning or proofs. Keep it lean for CRUD. Smarter budgets beat bigger prompts.  
  
Code v2 plus the VS Code flow actually fits how I work. Mount a codebase memory, run tests, and apply incremental patches instead of dumping the whole repo every time.  
  
Long output means it can propose large refactors and cross file diffs. Add unit tests as guardrails and auto retry on flaky steps. My Saturday refactor buddy just got patient, yes really.  
  
Net net, Sonnet 4.5 looks like a steady long runner. Not the top score chaser, but friendly to builders who ship agents that do not quit at hour ten.  
  
What budget heuristics are you using per task? Where will context editing save you the most? Should we standardize per task cost in agent dashboards? I am updating my playbooks this week.

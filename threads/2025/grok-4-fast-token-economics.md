---
title: Grok 4 fast token economics
date: 2025-09-20T13:45:15.545Z
url: https://x.com/AnandChowdhary/status/1969397385735675998
---

Grok 4 Fast: one set of weights, prompt steered. 2M context. RL tuned tool use trims \~40% thinking tokens. $0.20 in, $0.50 out per 1M. HLE is lower than Grok 4\. The race now is tokens per second per dollar for agents and coding.  
  
I like the single weights approach. You nudge it with a prompt to switch between fast pattern matching and deep reasoning. No second model to call. Fewer hops. In my pipelines that means less glue code and fewer timeouts.  
  
2M context is big. I can stuff a whole repo, the last three PRs, and a README that still lies a little. This reduces RAG fiddling and lets agents keep long workspaces in memory. Less indexing ceremony. More get work done.  
  
RL tuned tool use that cuts about 40% thought tokens is the part I am watching. Tools first, then think, not the other way around. That drops cost and latency on multi step plans. If your agent emits 30k thought tokens today, you just saved 12k. At scale that matters.  
  
Pricing is friendly for experiments: $0.20 per 1M in and $0.50 per 1M out. Some routers even served it free for a short window, which was fun while it lasted. HLE dips versus Grok 4, so raw scores are down, but AA's price to IQ idea still holds.  
  
As founders, do we chase top evals, or do we ship agents that hit budgets and SLAs? Are you tracking tokens per second per dollar on live traffic yet?  
  
I will A B this in coding agents this week and share numbers. Feels like the bottleneck just moved.

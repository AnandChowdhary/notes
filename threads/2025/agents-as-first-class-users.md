---
title: Agents as first-class users
date: 2025-08-22T09:45:12.803Z
url: https://x.com/AnandChowdhary/status/1958827739206885690
---

Agents as first-class users is the story the brings [@Databricks](https://x.com/Databricks) to $100B reads. Lakebase brings OLTP into the lakehouse, Agent Bricks tackles agent quality. That's the bet, and it's a big one.  
  
Lakebase = serverless Postgres tied natively to your lake. Decoupled compute/storage, instant spin‑up, branching, PITR, CDC "sync tables," and online feature serving.  
  
Targets: sub‑10 ms p50 and 10k+ QPS. Public Preview.  
  
It's not one engine does HTAP - but explicit OLTP with tight OLAP coupling via Delta. If it holds at scale, a lot of custom ETL and sidecar stores for AI apps go away. My glue scripts are sweating.  
  
Agent Bricks leans into a declarative loop: describe the task, auto‑generate synthetic evals with LLM judges, then search prompts, fine‑tunes, reward models, and TAO/ALHF‑style methods for the best quality/cost curve.  
  
It ships with guardrails, Gateway, and UC logging so you can deploy without living in pilot purgatory.  
  
I like the shape, but LLM‑as‑judge drifts and is gameable. Calibrate with humans, lock eval seeds, and spot‑check. Trust, then verify.  
  
Zooming out, this is a full‑stack bid to own agent workloads end‑to‑end: data, eval, governance, and now OLTP. Snowflake answered with Postgres via Crunchy, Databricks snapped up Neon and is rolling Lakebase. The race moved from warehouse to an AI‑native data foundation.  
  
Execution risk is real. Serverless layers can balloon bills, and latency/concurrency claims need third‑party SLOs under noisy multi‑tenant traffic. As a buyer, I want receipts and caps.  
  
Things I'm still asking:  
1) Under agent storms, how well does Lakebase isolate, control noisy neighbors, replicate cross‑region, and keep CDC into Delta consistent under write skew?  
2) How resilient are Agent Bricks evals to Goodharting, judge drift, jailbreaks, and distribution shift, and what human‑in‑the‑loop cadence works in practice?  
3) From a margin lens, do serverless DB + agent tooling expand gross margin or just move infra risk to the customer?  
  
Early days, but OLTP+OLAP convergence for agents feels like the right fight. If performance and costs hold up, many enterprises delete half their data stack and ship faster.

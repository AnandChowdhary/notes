---
title: Infra choices caused model dips
date: 2025-09-18T09:45:13.306Z
url: https://x.com/AnandChowdhary/status/1968612212748242980
---

I just read Anthropic Engineering's postmortem. The headline isn't three bugs. It's how everyday infra choices like load balancers, sampler precision, and sticky sessions bent cross hardware parity and looked like model dips. Credit to the eng team.  
  
The three overlapping failures:  
  
1) Context window routing sent short Sonnet 4 requests to the 1M context pool. Session stickiness made it worse. In the worst hour it hit 16% of Sonnet 4\. About 30% of Claude Code users saw at least one misroute. Fix rollout started Sep 4 and wrapped by Sep 16\. On partner platforms the blast radius was smaller: Bedrock peak 0.18% and Vertex under 0.0004%.  
  
2) A TPU misconfig corrupted sampling for Opus 4/4.1 from Aug 25 to 28 and Sonnet 4 until Sep 2, producing spurious high prob tokens like Thai characters mid English answers (yes, really!). They rolled back on Sep 2 and added detectors.  
  
3) An XLA on TPU bug in approximate top k showed up after a sampler precision rewrite. Confirmed on Haiku 3.5, suspected on a slice of Sonnet 4 and Opus 3\. Rollbacks landed. They switched to exact top k and standardized more ops to fp32, trading a bit of efficiency for correctness.  
  
This is a systems story, not a model story.  
  
When you serve across Trainium, GPUs, and TPUs with strict equivalence, your sampler rules must hold even under distributed sort and mixed precision. If they wobble, users feel it.  
  
Canary and offline evals missed it. Agentic tasks like Claude Code magnify single step errors. I like that privacy limits were respected, which nudges us toward privacy preserving prod evals, metamorphic tests on top k and top p, and load balancer gates keyed to distribution drift.  
  
Switching to exact top k was the right call. Correctness before speed.  
  
There is a second ops lesson. Session affinity concentrates harm. Sticky should stay inside pool and version guardrails, with an auto unstick when you see anomalies.  
  
Bigger picture: in heterogeneous inference, numerical determinism and per hardware differential tests need to be first class SRE artifacts, not best effort checks.  
  
Open questions I'm curious about:  
\- What is the p95 and p99 latency and capacity impact from exact top k and fp32 paths?  
\- Will there be an upstream XLA reproducer and a cross hardware equivalence harness?  
\- How will LB changes avoid sticky pockets next time?  
  
Candid post. Worth a read if you ship LLMs in prod: <https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues>

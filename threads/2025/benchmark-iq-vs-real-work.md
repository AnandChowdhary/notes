---
title: Benchmark IQ vs real work
date: 2025-09-04T15:15:14.587Z
url: https://x.com/AnandChowdhary/status/1963621836065050837
---

I'm seeing agentic evals split "benchmark IQ" from actually getting work done. On real tools and long tasks, top models still faceplant. Headline scores don't map to reliability, and bolting on more tools can even make policies worse.  
  
The new evals bite where it hurts: execution and coordination. τ²-Bench models dual control as a Dec-POMDP with user-agent co-actions and pass^k reliability curves that reveal how inconsistent runs get when you try again. And again.  
  
Terminal-Bench runs end-to-end CLI tasks in a sandbox. Compile, deploy, debug. Binary pass or fail. Great for reproducibility. Brutal on partial credit.  
  
MCP-Universe goes bigger: 231 tasks across 11 live MCP servers from finance to browser automation to 3D and repo ops. Execution-based graders and domain skew included. Even with "thinking" modes, frontier models sit around 20-45% success and inflate context every step. Planning slips, schema confusion, and weak recovery are the main footguns.  
  
What changed is the error surface. We are moving from token plausibility to action correctness. Bigger tool spaces raise the branching factor, so mis-selection spikes. Add more tools without better routing or schema induction and your success rate can drop.  
  
Single-pass scores can lie. Sycophancy and simulator alignment can fake gains unless you track pass^k and final world-state diffs. Rankings wobble once you add agentic tracks. Delib-heavy models that crush math or code do not magically gain strong tool control without scaffolds, verification loops, and recovery.  
  
Big picture, eval is shifting from static QA to grounded control. Training leans toward tool-grounded traces, schema understanding, and budgeted planning. Reasoning tokens become a resource you spend, not an all-you-can-eat buffet.  
  
Standards like MCP can speed cross-tool generalization, but only if we reward trajectory quality: right tool, faithful parameters, rollback ability, plus latency and cost. If I were shipping an agent product this quarter, my checklist is typed tool schemas, planning caches, retry and rollback policies, and a reliability dashboard. On the research side, I want compositional task generators and dual-control sims to stress coordination, not just deeper chains of thought.  
  
Open questions:  
1) How do we measure the tradeoff between reliability and reasoning budget across toolset size, and get SR vs latency vs cost curves we can act on?  
2) Can we separate sycophancy-driven wins from real tool use in dual-control sims?  
3) Which architectures best amortize schema induction: router-augmented planners, program-synthesis loops, or RL on tool graphs?  
  
Until we crack these, "smart" will not mean "operational." The upside is clear. Better evals plus some unglamorous engineering can turn headline IQ into dependable agents, and I'm betting we get there faster than we think.

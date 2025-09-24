---
title: Reality check on code benchmarks
date: 2025-09-23T21:15:12.456Z
url: https://x.com/AnandChowdhary/status/1970597794584068438
---

Today I got a reality check. On SWE Bench Pro (contamination resistant, \~107 LOC across 4 files), top agents sit near 23% solved. Microsoft's repo graphs in RPG to ZeroRepo show 3.9x LOC vs baselines. Planning beats the party tricks 👇  
  
Quick benchmarks.  
  
SWE Bench Pro caps fixes at about 107 lines across 4 files and resists training data contamination. GPT-5 lands at 23.3%. Opus 4.1 at 22.7%. Humbling after those one shot repo demo videos.  
  
RPG to ZeroRepo takes a boring but smarter path.  
  
Build an explicit graph of the repo and plan against it. Let the agent navigate files, symbols, and deps, then execute a step by step change list. That lifts output to 3.9x LOC over baselines.  
  
What this signals for founders shipping AI dev tools.  
  
Invest in:  
1\. A repo map as a first class artifact: files, symbols, tests, owners  
2\. Planners that write change plans before code  
3\. Tools for safe multi file edits, traceable diffs, and fast local tests  
4\. Evals on SWE Bench Pro by default  
  
Pragmatically, more code is not the goal. Touching the right places with confidence is.  
  
Where are your agents failing today: planning, context, or tooling? How are you scoring multi file change quality in prod?  
  
My bet is simple: plan well, tool well, then code. I'll take boring systems that ship over flashy demos any day.

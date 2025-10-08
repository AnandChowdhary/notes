---
title: Bringing guardrails into agents
date: 2025-10-07T21:15:17.553Z
url: https://x.com/AnandChowdhary/status/1975671234043265390
---

Eval to ops just got real. Petri scenario audits with an auditor target judge loop, plus DeepMind CodeMender with 72 accepted OSS security fixes, push guardrails from red team docs into agents that run in CI and governance.  
  
Quick take on Petri's scenario audits. You define real risk stories, not vague prompts. An auditor agent probes, a target agent acts like your system, and a judge scores outcomes. That loop runs until it finds a safe plan or a fail you can measure.  
  
This lives in AISI Inspect so you get run logs, scores, and reproducible cases. Think of it as unit tests for AI behavior that security and compliance can read without a 30 minute monologue.  
  
DeepMind's CodeMender closed the loop on the code side. Gemini Deep Think reviewed repos, proposed patches, ran tests, and maintainers merged 72 security fixes. Not toy repos. Accepted PRs.  
  
Founder lens. CI can host an agent that reads an advisory, localizes the call site, patches, writes a test, and opens a PR with a risk note. You track merge rate and time to fix as KPIs. If acceptance drops, you slow the bot.  
  
Here is a simple path from eval to ops.  
  
Start with a scenario set that maps to your policies. Add a score rubric that you can defend in an audit. Wire CI to block on high risk scores. Let agents suggest remediations but require human approval for P0\. Log every decision and artifact.  
  
Target basic metrics. Percentage of scenarios passing on main. Mean time from red to green after a model update. False block rate on legit changes. Send weekly reports to Slack and your board packet.  
  
Two practical notes.  
  
Roll out in dry run first. I once shipped a policy bot that approved its own PR yes really. Shadow the agent next to a human reviewer for a week, compare diffs, then raise the bar. Also keep a kill switch in case latency spikes.  
  
Store prompts, responses, model versions, and hashes of files. Auditors love reproducibility. Future you will too when a model upgrade flips a decision.  
  
Where will you start. Security fixes with PR bots or product guardrails with scenario audits. Which metric will you tie to a bonus so this does not become shelfware. How will you prevent quiet degradation when the model drifts.  
  
Feels like the moment AI safety work graduates from slides to CI. Small steps, measurable wins, real accountability. I am excited to build this with you.

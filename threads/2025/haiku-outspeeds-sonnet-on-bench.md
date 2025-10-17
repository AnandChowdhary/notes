---
title: Haiku outspeeds Sonnet on bench
date: 2025-10-16T15:15:14.507Z
url: https://x.com/AnandChowdhary/status/1978842126894223395
---

Haiku 4.5 just nuked the frontier tax: Sonnet‑tier coding on SWE‑bench‑V (\~73%) at $1/$5 per MTok and 2-4x faster. Augment pegs it at \~90% of Sonnet 4.5.  
  
My playbook: Sonnet plans, Haiku executes.  
  
Your burn rate will thank you. 👇  
  
Quick math: Haiku is 1/5 the price and 2-4x faster for codegen. On SWE‑bench‑V it lands \~73%. Augment puts capability at \~90% of Sonnet 4.5\. For day‑to‑day repo work, that gap shrinks once you add tools and tests.  
  
So I'm moving to a Sonnet‑plans, Haiku‑exec stack. Pay Sonnet to think. Pay Haiku to type. The planner runs once, the executor loops fast with tools.  
  
Early evals say Haiku over‑explains and writes chatty code. I saw the same on our repos (yes, really!).  
  
My fixes:  
Ask for unified diffs only.  
Strip comments unless the change touches public APIs.  
Set hard token caps and stream patches.  
Run tests first and ask for minimal edits.  
Use AST edit tools over raw text.  
  
Pattern that's working:  
1) Build a repo map and surface failing tests.  
2) Sonnet writes a plan and a checklist with acceptance criteria.  
3) Haiku executes step by step with tools. It edits files, runs tests, and retries with patches.  
4) A small critic pass enforces the checklist and terseness.  
5) Cache function summaries, tool outputs, and pass IDs to cut tokens.  
  
When do I still reach for Sonnet end‑to‑end? Cross‑repo refactors, hairy migrations, and security‑sensitive code. Everything else goes to Haiku with guardrails.  
  
Would you keep Sonnet on the hot path or only as planner? Where would you still pay the frontier tax?  
  
Bottom line: Haiku 4.5 makes frontier‑grade coding affordable. I'm shipping with this stack this week.

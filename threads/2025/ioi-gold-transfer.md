---
title: IOI gold transfer
date: 2025-08-14T21:15:09.815Z
url: https://x.com/AnandChowdhary/status/1956102280496996616
---

The headline is IOI gold - the story is transfer. The same general reasoning stack that hit IMO gold, with zero IOI training, then landed roughly 6th against humans under normal rules. Proofs to programs with the same brain. That is the wow. 🥇👇  
  
Technical shape I like: Five hours per day, 50 submissions, no internet or RAG, basic terminal (yes, really). They used an ensemble of general reasoning models with light submission selection, and ran under parity with humans.  
  
Over last year the jump is big. From 49th to about the 98th percentile, reportedly on the same IMO gold model without domain finetuning. Matches earlier o3 numbers too. 395.64 on IOI 2024 under strict 50 submissions, and about 2724 Elo on Codeforces, which is around 99.8 percent.  
  
What is new to me is the move away from hand made test time tricks. Last year o1 IOI leaned on AlphaCode style 10k sample clustering. The newer o3 era stacks use RL plus long test time to learn their own checks, like brute force cross checks. Less bespoke scaffolding.  
  
The IMO thread also shows long horizon thinking for hours. It starts to look like search and self verification emerge if you let the model think longer.  
  
One caveat. Cost and reproducibility are still a bit fuzzy.  
  
The bigger signal for me: Inference time compute is becoming a main scaling lever for reasoning models, and the learned search and verification loop seems to carry over from natural language proofs to executable code.  
  
IOI makes this extra convincing. You cannot fudge the judge. There are hidden tests and strict runtime and submit caps. Top humans still edge out frontier models in some live contests, so there is room left.  
  
Three things I would love to see next:  
1) What was the exact test time budget, like wall clock, samples per task, and ensemble size, and where is the bend in the compute to score curve?  
2) How well do these behaviors hold up off contest on messy real world code and vague specs?  
3) Can third parties audit logs to rule out leakage or overfitting to judge behavior, and to measure how much the scaffolding really mattered?  
  
As a founder, this feels like the shift from more data to more thinking at runtime. I am excited, and I still want simpler, cheaper, and reproducible ways to get there.

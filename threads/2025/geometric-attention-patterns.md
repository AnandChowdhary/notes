---
title: Geometric attention patterns
date: 2025-10-22T23:15:11.258Z
url: https://x.com/AnandChowdhary/status/1981137248700825967
---

Anthropic poked Claude 3.5 Haiku and found clean geometric transforms and cross layer, head heavy attention circuits. If these patterns are stable, we can write unit tests and add regularizers like real code.  
  
The catch is faithfulness with frozen attention and model swaps. 👇  
  
CLT + attribution graphs is basically trace the path of influence and draw the circuit. You nudge inputs, track which heads and layers move the needle, and sketch the graph.  
  
On a simple perceptual task, the paths looked crisp instead of mushy.  
  
They saw geometric transforms emerge. Think rotate, scale, translate in vector space. Attention heads carry the load across layers, cooperating rather than a single magic neuron.  
  
That smells like a small algorithm embedded in the model, spread out but testable.  
  
As a founder I love this because it turns vibes into tests. If a circuit is stable across prompts and seeds, you can:  
  
\- add unit tests for that behavior  
\- fail builds on regressions  
\- regularize during training to keep the circuit intact  
  
Feels like CI for attention heads!  
  
Big caveat. Faithfulness is tricky. Freeze attention and the model might route differently. Swap in a replacement model for interventions and you change the thing you measure.  
  
We need ablations that preserve behavior, plus replication across prompts, tasks, and random seeds.  
  
What I would try this week:  
\- build a small CLT and attribution pipeline on one task  
\- log per head contribution over time in a dashboard  
\- write one unit test per circuit and run it in nightly evals  
\- if stable, add a mild regularizer to keep those paths alive  
  
Are these circuits stable under fine tuning and RL? Do they transfer to nearby tasks? Can we regularize without losing capability?  
  
If the answer is yes, we get a path to product grade reliability. Models you can reason about, test, and ship with more confidence.

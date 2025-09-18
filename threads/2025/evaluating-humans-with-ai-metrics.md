---
title: Evaluating humans with AI metrics
date: 2025-09-17T23:15:12.803Z
url: https://x.com/AnandChowdhary/status/1968453666454872267
---

What clicked for me in [@slatestarcodex](https://x.com/slatestarcodex)'s piece isn't the jokes. It's flipping our AI eval lens onto humans. See us as "BIs" with context limits, RLHF, and jailbreaks, and the snag shows up fast: the metric choices, not raw ability.  
  
As someone who lives by a scratchpad, the "7±2" bit hit home. No scratchpad, lots of dumb mistakes. Turn on "Thinking Mode," and the error profile shifts.  
  
That's CoT/self-consistency/ReAct by another name. Externalized state expands usable context and helps multi-step credit assignment. It also changes what breaks and how you should test. New power, new failure modes.  
  
The alignment riff lands. "Divine commandments" feels like RLHF/RLAIF, and you can see the safety vs helpfulness Pareto in the wild when over-refusals spike after a new policy pass.  
  
Persona and persuasion jailbreaks, like authority role prompts, are not party tricks. They are a real threat model. And sycophancy is objective mis-spec. When you optimize for agreement, you get agreement. Yes, really.  
  
The "lines become sigmoids" jab matters. Kaplan and Chinchilla talk about cross-entropy under specific data and compute regimes. That says little about persuasion robustness or compositional generalization.  
  
If your dashboard says "AUC up," name the distribution shift and the adversary. I have been burned by pretty curves before.  
  
Three things I want next:  
\- Benchmarks for persona and persuasion robustness that are multi-turn.  
\- Refusal ROC reported across threat models, not single points.  
\- A clear line where scratchpads and tools move from heuristic to stable world-model update.  
  
Smart piece: <https://www.astralcodexten.com/p/what-is-man-that-thou-art-mindful>

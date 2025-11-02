---
title: Devanagari conjuncts are not ligatures
date: 2025-11-01T22:15:13.693Z
url: https://x.com/AnandChowdhary/status/1984746026214047792
---

Quick note from my archive: calling Devanagari forms "ligatures" is misleading. Latin "ffl" is styling. Devanagari द्य, क्ष, त्र are conjuncts - structure, not ornament. They compact clusters and cue rhythm. 🔤👇  
  
I wrote this on Sep 15, 2017 while poking at Hindi text on the web. In 2025 I added: "Ligatures in Hindi are awesome, like 'dya'." Back then we talked up "ffl" a lot and ignored Devanagari, shaping was uneven, and fonts were patchy. The take felt spicy. Today it's closer to obvious.  
  
Technical distinction in one breath:  
\- Latin: fi/ffl live in OpenType liga/dlig. You can toggle them and the text still means the same.  
\- Devanagari: clusters come from consonant + virama U+094D + consonant. Repha, rakar, ya‑phala, half forms. ZWJ/ZWNJ to nudge joins. These are orthographic defaults.  
  
What changed from 2017 to 2025:  
\- Shaping engines converged and matured (HarfBuzz, Core Text), and type families got solid (Noto, etc.), including variable fonts.  
\- Rendering is more consistent across web and OS, and high‑DPI makes small conjuncts clearer.  
\- Pain points linger: fallback gaps, PDF/OCR loss, search tokenization, screen reader behavior, and learner accessibility.  
  
What holds: conjuncts carry pacing and structure. Turning them off hurts readability and learning. What surprised me: font tech moved fast, UX coherence lagged.  
Open questions:  
\- How should UIs expose ZWJ/ZWNJ?  
\- Better search and normalization across rendered forms?  
\- Tools that teach cluster anatomy for learners?  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/hindi-ligature.md>

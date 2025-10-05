---
title: Own the localization pipeline
date: 2025-10-04T13:45:12.442Z
url: https://x.com/AnandChowdhary/status/1974470814717325457
---

My 2017 mantra that still holds up: translate via an API and publish real localized pages. Not a client-side widget repainting the DOM. If you own the pipeline, you win on SEO, accessibility, and control. Stop outsourcing semantics to an overlay. 🌐👇  
  
Found this in my notes from May 22, 2017 (yes, I keep everything): "Translate API instead of widget." Back then lots of sites dropped in JS widgets for quick multilingual wins. Neural MT was getting better, but most teams didn't have end to end i18n wired up.  
  
Three patterns I saw then and still see now:  
Widget overlay  
• Fast install  
• Poor crawlability and a11y  
• Layout and RTL bugs, privacy gray areas  
  
API-powered pages  
• Real URLs with hreflang and canonicals  
• Glossaries, translation memory, review, tests  
• Faster than DOM swaps and cacheable  
  
Proxy mirror  
• Pragmatic for legacy stacks  
• Crawlable, feels like real pages  
• Can be brittle with JS and forms, plus vendor lock-in  
  
What changed from 2017 to 2025:  
• Quality: NMT matured, LLMs add nuance if you add guardrails  
• Architecture: Pretranslate at build, route at the edge, on demand for UGC and chat  
• Control: Custom dictionaries, segment locks, COMET and human QA  
• Discipline: Versioned strings, locale tests, rollbacks in CI  
  
Principles that endure:  
• Pre-render when you can, measure, cache, and test  
• Keep a glossary, audit data flows, and review critical surfaces  
• Let humans handle brand voice, machines handle breadth  
  
Where it bends: widgets can be fine for UGC, internal tools, or long tail locales.  
  
Open questions:  
1) When do we prefer domain-adapted MT vs LLM transcreation for voice at scale?  
2) Can we get deterministic, glossary-faithful LLM output without losing nuance?  
3) When is a proxy the pragmatic middle ground?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/translate-api-instead.md>

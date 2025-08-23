---
title: Small core big empathy
date: 2025-08-18T13:45:08.137Z
url: https://x.com/AnandChowdhary/status/1957438589610119557
---

Small core, big empathy: ship a tiny bootstrap, then load accessibility modules only when someone switches them on. You keep the first hit light and still give folks real controls when they ask, this is how we built our web accessibility plugin in 2017 at [@OswaldLabs](https://x.com/OswaldLabs) ♿👇  
  
I found a note from Jan 16 2017 while digging through my notes repo. I was building Agastya at Oswald Labs, our web accessibility plugin. The idea was simple: minimal script first, then lazy-load user picks like font size or a dyslexia-friendly preset. In 2025, that reads like code splitting with intent.  
  
2017 vs 2025 changed the delivery story.  
  
Then: we had early webpack splitting, HTTP/2 multiplexing, service workers just landing, and no native dynamic import. Many prefs needed JS toggles.  
  
Now: import() is everywhere, modulepreload and import maps help you steer, Priority Hints and Speculation Rules prefetch likely paths, and Vite or esbuild make small chunks cheap. We also get CSS signals like prefers-reduced-motion, prefers-contrast, and color-scheme, so some "settings" ship as CSS, not JS.  
  
Tradeoffs got clearer:  
\- Split by feature, not tiny functions. Too many micro-chunks add overhead even on HTTP/2 or HTTP/3.  
\- Apply saved prefs before paint with a tiny inline settings snippet or data-attributes to avoid a flash of the default.  
\- Cache chosen modules with a service worker and long max-age. Version them cleanly.  
\- Prefer CSS and media queries for motion and contrast. Use JS for things like reading mode or text spacing.  
\- Be thoughtful with "dyslexia mode": offer presets for font, spacing, and line height, keep it explicit, respect privacy, never infer.  
\- And do not paper over missing semantics. Solid HTML and ARIA first, plugins second.  
  
Principles I still like: start fast, personalize later, remember respectfully, and default to platform signals. Questions I still have:  
1) What is the right chunking heuristic for "add-on" features given LCP and INP budgets? This applies to "plugins" of all sorts, like live chat.  
2) Where do we draw the line between OS or browser prefs and site-level personalization? Why do we still have dark/light toggles on websites, shouldn't that be OS or browser level?  
3) Can we agree on a portable a11y settings manifest that works across sites, or even broader - a portable settings schema including for instance EU cookie law preferences?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/agastya-load-features.md>

---
title: Inline Wikipedia style tooltips
date: 2025-12-30T10:46:05.134Z
url: https://x.com/AnandChowdhary/status/2005953516645298246
---

Back in late 2018 I hacked together a tiny Wikipedia tooltip library because I was tired of sending readers away from my articles just to explain a term. I wanted inline Wikipedia-style context on hover, no heavy dependencies, just a sprinkle of UX sugar on top of plain links 🖱️👇 Under the hood, Hovercard is pretty opinionated for such a small library. There's a single floating card element that gets reused and repositioned, a simple selector-based scan for targets, and a thin fetch layer that talks to Wikipedia. The fun parts were the hacks: localStorage caching to avoid hammering the API, pluggable endpoints so you can swap Wikipedia for your own dictionary, and tiny event hooks so you can listen for show/hide or plug in analytics. If I rebuilt this today, I'd lean into Web Components, better touch support, and edge caching. But the main pattern holds up well: keep the UI tiny, and make the integration points - APIs, storage, templates - swappable. Repo: https://github.com/AnandChowdhary/hovercard

---
title: Read aloud accessibility gaps
date: 2026-01-31T22:18:10.434Z
url: https://x.com/AnandChowdhary/status/2017724075255468421
---

When I first started looking at "read aloud" on the web, what bothered me wasn't the voice quality, it was how clueless most tools were about what to read. Screen readers just walked the DOM from header to footer while modern pages turned into ad farms and tracking jungles 📣👇 With Agastya's Read Aloud, we treated this as a long-term accessibility problem, not a one-off feature. The core question was always "what is this page really about?" so we leaned on HTML5 semantics like main and article when present, then layered heuristics over layout and structure, and only as a last resort read the entire body. Authors could still use data-read-aloud as an explicit override. On the speech side, we deliberately skipped the shiny Web Speech API and streamed audio from our EU CDN instead, so the same experience worked on IE9, Firefox mobile, Opera, and friends. To me, that is inclusive design in practice: progressive enhancement, but for both markup and capabilities. Full post: https://anandchowdhary.com/blog/2018/agastya-screen-reader

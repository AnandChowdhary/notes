---
title: RSS feeds for reading mode
date: 2025-09-19T05:45:12.558Z
url: https://x.com/AnandChowdhary/status/1968914200396448242
---

Reader mode tries to reconstruct a story from messy HTML. Feeds already ship the story in a clean wrapper. In 2017 I wrote a tiny note, "RSS Feeds for Reading Mode," asking: what if the browser preferred the site's feed as the canonical clean version? 📡👇  
  
Found it while combing my old notes from April 15, 2017\. Context then: Safari/Firefox reader views were mainstream, AMP was rising, Google Reader was gone, and JSON Feed was days away. The question I scribbled: could reader view defer to the site's feed?  
  
Why it felt promising: many RSS/Atom feeds include full text (content:encoded), stable permalinks, and metadata. Flow: discover rel=alternate, fetch, match by URL/guid, render in a standard template. Fewer DOM heuristics (Readability, Mercury). The catch: plenty of feeds are summaries, HTML can be broken, paywalls and canonicals drift, pagination/media vary, and some publishers throttle or kill feeds.  
  
2017→2025: Feeds persisted (and JSON Feed 1.1 landed). Chrome reintroduced Follow/Web Feed. Reader views kept improving with summary layers. Extraction still dominates because it's universal when feeds are absent or wrong. Pragmatic path: hybrid - prefer verified full‑text feeds when confidence is high, otherwise fall back to parser extraction, with summaries as hints, not substitutes.  
  
My takeaways: favor publisher structure but verify, treat feeds as transport, not design, respect canonicals and policies, always keep a parser fallback. Open questions:  
1) A standard reader endpoint or feed extension for sanitized article DOM?  
2) Can feeds carry typography/media/ads policy that reader modes honor?  
3) Does AI reduce the need for standards or increase it?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/rss-feeds-for.md>

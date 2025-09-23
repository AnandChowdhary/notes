---
title: Webpage crawler search evolution
date: 2025-09-22T05:45:15.662Z
url: https://x.com/AnandChowdhary/status/1970001365436186802
---

I'm revisiting a tiny note from Apr 18, 2017: "Webpage crawler + search." The core split still holds up: get the content, then find the answer. The stack morphed from curl/Scrapy and BM25 to headless rendering and hybrid vectors. 🔎👇  
  
Back then felt messy. PhantomJS was fading, Headless Chrome had just shipped, and SPAs made crawling unreliable. We leaned on sitemaps, polite delays, and way too many prerender hacks to get JS to cooperate (yes, really). Rights and cadence lived in <robots.txt> folklore.  
  
Then vs now, acquisition:  
2017: Scrapy + HTML parsing, sitemaps, and brittle prerendering for JS.  
2018-2020: Headless Chrome with Puppeteer, then Playwright, made rendering consistent.  
2025: SSR and SSG are the default in Next, Nuxt, Astro. Dynamic rendering is discouraged.  
  
Then vs now, retrieval:  
2017: Elasticsearch BM25 with analyzers, synonyms, and careful indexing.  
2022→: ANN lands in Elastic and OpenSearch k‑NN matures. Hybrid retrieval wins by fusing BM25 + vectors with RRF. Rerankers got cheap and good. Embeddings quality jumped a lot.  
  
Standards and ecosystem shifts:  
\- <robots.txt> is now an RFC (9309)  
\- Google retired Sitemap "ping," push discovery grew via IndexNow  
\- AI crawler controls emerged via User‑Agents like GPTBot and CCBot, with formal guidance still in progress  
  
What aged well: keep crawl and search as separate, composable systems, be polite with crawl controls, measure relevance.  
What didn't: fragile JS rendering and lexical‑only ranking.  
Questions:  
1) Should sites ship richer, signed feeds for RAG?  
2) How should REP adapt for AI agents?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/webpage-crawler.md>

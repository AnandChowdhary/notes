---
title: Opinionated news summarizer racing clock
date: 2025-09-17T13:45:16.708Z
url: https://x.com/AnandChowdhary/status/1968310238182068335
---

Compression is the easy part. A news summarizer makes calls on sources, context, and trust while racing a clock. The text is short. The system is opinionated by design. 🗞️👇  
  
I found this note from Apr 15, 2017 while cleaning my old notes. I hacked "Quickie News" in Python (yes, really!) to do what Inshorts did with humans. Today, it looks a lot like what Perplexity does with LLMs. Here's how it aged.  
  
2017 reality in plain text:  
\- Most production was extractive: TextRank/LexRank.  
\- Early abstractive seq2seq showed promise, pointer generator with coverage cut repetition.  
\- Training data was CNN/DailyMail and Gigaword, ROUGE drove tuning.  
\- Pipeline: crawl RSS, cluster near duplicates, pick a centroid, write a tight blurb, attach 2 to 3 links.  
It worked, but discourse was brittle, entities drifted, and blurbs felt shallow.  
  
2025 reality I use and see:  
\- LLMs do multi-document synthesis with retrieval, re-ranking, and citations.  
\- You can steer style and length, and add critique loops for self-checks.  
\- Tradeoffs shifted: faithfulness and attribution matter more than raw brevity, latency and cost vs deeper verification, personalization vs a steady editorial voice.  
What held up from 2017: treat the summary as an interface to explore.  
What changed: synthesis quality, real-time grounding, and user expectations for transparency.  
  
Open questions I'm still asking:  
1) Should summaries declare a lens and be opinionated, or start neutral with sliders for viewpoint?  
2) How do we audit bias and factuality at scale without blowing the budget or the latency?  
3) What licensing and attribution model actually pays upstream publishers and journalists?  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/news-summarizer.md>

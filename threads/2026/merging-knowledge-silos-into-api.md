---
title: Merging knowledge silos into api
date: 2026-02-01T10:48:13.259Z
url: https://x.com/AnandChowdhary/status/2017912819187057100
---

I found this tiny line in my 2018 notes: "StackOverflow + Quora + Wikipedia + etc. = knowledge QA Api." Back then it felt like a simple product idea: merge the internet's Q&A silos and ship a clean API on top 🤓👇 In my head, the hard part was aggregation. Plug into Stack Overflow, Quora, Wikipedia, maybe a few "Stack Overflow for X" clones, then do some ranking, deduplication, and source weighting. Basically meta‑search, but tuned for "answers" instead of documents. Looking back from today, the real missing piece was modeling instead of the plumbing. We ended up with something one layer higher: large language models as probabilistic interfaces over all that content, plus retrieval‑augmented generation instead of handwritten glue code. Now the interesting questions are institutional. If the QA layer is model‑shaped, how do we keep provenance, community norms, and credit for places like Wikipedia and Stack Overflow? In 2018, I was thinking about endpoints. Today, it is about ecosystems and incentives. Here's the original note from 2018: https://github.com/AnandChowdhary/notes/blob/main/notes/2018/stackoverflow-quora.md

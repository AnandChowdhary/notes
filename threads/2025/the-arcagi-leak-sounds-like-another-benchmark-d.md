---
title: The ARCAGI leak sounds like another benchmark d
date: 2025-12-16T10:48:02.247Z
url: https://x.com/AnandChowdhary/status/2000880590401442198
---

The ARC‑AGI "leak" sounds like another benchmark drama, but it is really a boring infrastructure story dressed up as AGI discourse. If ARC‑AGI‑1 tasks quietly sneak into training data for models later bragging about ARC‑AGI‑2 scores, your "AGI progress" chart is basically just a contamination graph. You are not measuring general intelligence. You are measuring how good everyone is at losing track of their data. As a technical founder, imagine shipping a product where: - Your test suite is in your training set - Your CI logs are not reproducible - No one can tell you exactly which data produced which metric You would not trust those numbers for a second. Yet that is roughly the current state of a lot of public AI benchmarks. The fix is boring but important: - Freeze public evals out of training datasets - Treat data lineage like you treat money flows, with hard traceability - Publish eval pipelines that other people can actually audit and rerun Until this is standard, every shiny new SOTA on a public benchmark is less "wow, it is smarter now" and more "hmm, what leaked this time?"

---
title: Summarization as a platform primitive
date: 2025-08-23T13:45:12.732Z
url: https://x.com/AnandChowdhary/status/1959250524655726773
---

Hot take from my 2017 notes that aged well: summarization should be a platform primitive with a clean Summarizer API. Not a bolt‑on feature, a thing apps compose like storage or auth. Eight years later, this still feels right. 📝👇  
  
Feb 4, 2017 I was thinking about building a Summarizer API.  
  
Abstractive was just landing. Pointer‑generator on CNN DailyMail was the hot paper. ROUGE ruled eval. Short inputs, slow inference. An API felt premature, unless you think old-school Python with most-common words.  
  
What would a Summarizer API standardize?  
\- Scope: extractive, abstractive, hybrid. Single or multi doc. Batch or streaming.  
\- Contracts: latency targets, token budgets, faithfulness checks, privacy and retention.  
\- Outputs: structured bullets, quoted spans with citations, and confidence.  
  
What changed since:  
  
Pretraining made summarization general purpose (BART, PEGASUS).  
  
Long context made multi thousand token inputs routine (Longformer, LED).  
  
Eval moved beyond ROUGE to factual consistency, e.g., QAFactEval.  
  
Today, gpt-5-nano is extremely affordable and gemini-2.5-nano runs on device.  
  
Summaries now ship by default in products like Zoom AI Companion and the one thing that actually shipped in Apple Intelligence.  
  
What held vs shifted:  
\- Still hard: faithfulness in open domain, domain adaptation, privacy.  
\- Now feasible: API contracts with provenance and spend controls. Product‑default summaries.  
  
Open questions: what guarantees should the API expose, like provenance, confidence, editability? How should long‑context compute be priced and capped?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/summarizer-api.md>

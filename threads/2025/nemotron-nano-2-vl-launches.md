---
title: Nemotron nano 2 vl launches
date: 2025-10-30T00:15:21.765Z
url: https://x.com/AnandChowdhary/status/1983689060263796823
---

Nemotron Nano 2 VL: 12B Mamba‑Transformer VLM, 128k ctx, 4 imgs or 1 video. Trained on 11M samples incl. 8M CC‑BY. EVS ≈2.5x video throughput. With HF, Replicate, Baseten, Nebius, OCR and video RAG are edging into on‑prem commodity.  
  
I like the hybrid Mamba‑Transformer choice. Mamba style state space layers handle long sequences with friendly memory use, while attention keeps the reasoning sharp.  
  
Net result: long videos and docs without your GPUs sounding like they want to lift off.  
  
128k context with 4 images or a single video means fewer hacks. Instead of sharding frames and praying your indexer guesses context, you can pass a long transcript, OCR blocks, and timeline hints in one go.  
  
Less glue code, more signal.  
  
Training mix matters. 8M CC‑BY‑4.0 samples inside an 11M set is friendly for businesses as long as you handle attribution.  
  
If you ship this, bake in an attribution ledger from day one. Your compliance team will actually smile. Rare, I know.  
  
EVS claims about 2.5x video throughput. For founders, that reads like fewer GPUs for the same workload.  
  
Back‑of‑the‑napkin example: at 1k hours per day, a 2.5x bump can cut fleet size by a big chunk or bring latency down enough for live alerting.  
  
The ecosystem is catching up too. 650+ models and 250 datasets on HF plus availability on Replicate, Baseten, and Nebius means less platform risk.  
  
Ship on‑prem for privacy, burst to managed when you need scale, keep weights consistent across both.  
  
If I were shipping video RAG or OCR today, I would:  
\- sample frames to text with OCR or ASR  
\- chunk with layout and time tags  
\- index into a vector store  
\- use the VLM for retrieval and grounding  
\- push summaries back into 128k ctx for end to end answers  
  
Simple, shippable.  
  
Where would you plug this in first: security cams, doc QA, or support? Are you comfortable with CC‑BY attribution at scale? Do you actually need 128k ctx or is 32k plenty for now?  
  
Feels like video RAG and OCR are moving from demo to boring, reliable infra. I like boring.

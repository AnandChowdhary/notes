---
title: Decoders read embeddings directly
date: 2025-10-12T15:15:14.120Z
url: https://x.com/AnandChowdhary/status/1977392573443637481
---

Meta Superintelligence’s new paper shows how they teach the decoder to read embeddings directly, then uses tokens only when it must. No more tokenize, compress, reembed ping pong. That's the interesting part. 👇  
  
How it works in plain terms: you chunk retrieved text to about 16 tokens, run a small encoder, then project those vectors to the decoder's token space. They act like macro tokens. A tiny RL policy spends a budget to expand a few spans into real tokens when accuracy matters, like numbers or rare names.  
  
This shortens prefill, shrinks the KV cache, and makes attention scale with chunk count rather than raw tokens. They align encoder and decoder with continual pretraining and a reconstruction task with a curriculum, then do SFT for RAG and multi turn chat. You keep autoregressive decoding and can place compressed chunks anywhere.  
  
Results look strong on paper. About 30x faster time to first token and 16x effective context on LLaMA‑2‑7B against CEPE and plain LLaMA.  
  
The key difference from CEPE matters. CEPE cross attends over encoder outputs. REFRAG collapses many tokens into single vectors, which directly cuts sequence length. Tradeoffs are real though. Extra training to align things, a non trivial RL policy, and failure modes if the policy misses spans that need verbatim accuracy. I still want to see code and full end to end latency, including retrieval, rerank, and network hops under load.  
  
Why now? Long context costs dominate both UX and unit economics. Wins that cut sequence length pay back today, not in three years.  
  
There is also an IR angle. Embedding retrieval has a dimensional recall ceiling. Compression does not fix that, but it lets you score more candidates in the same time. That pairs well with hybrid retrievers and rerankers. I expect pressure on vector databases and retrieval stacks to double down on precompute, caching, and policies that know when to expand.  
  
Open questions I am curious about:  
\- Can we go embedding native on write so the model can emit vectors for memory and tools and get end to end gains?  
\- How robust is the expansion policy to domain shift and distractors?  
\- What budgets are safe for legal or medical work?  
  
Either way, this is worth piloting, with guardrails. Good read by Rudy and Charles: <https://paddedinputs.substack.com/p/meta-superintelligences-surprising>

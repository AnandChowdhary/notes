---
title: Inputs cheaper than outputs
date: 2025-08-29T13:45:07.890Z
url: https://x.com/AnandChowdhary/status/1961424854936424663
---

Reading [@martinald](https://x.com/martinald) on inference costs and the instinct is right: inputs are cheaper than outputs. The 1,000x spread hangs on a memory bound prefill though. On real H100 or H200 MoE stacks I see closer to 2 to 5x. Good piece, just needs a tighter bottleneck model.  
  
Sanity check with R1: about 50k input tokens per second and about 20k output tokens per second on roughly 100 H100 has been shown. Scale that to 72 H100 and you get about 39k in and 17k out per second.  
  
At $2-$3/H100 hour, that lands roughly $1-1.5/million input tokens and $2.4-3.6/million output tokens. So input is not free, and output is still the pricier side.  
  
Takeaway for margins: Serving design decides your unit economics.  
  
Do prefill decode disaggregation, chunked prefill, lean precisions like FP4 or FP8, stay inside NVLink domains, and cache like your life depends on it. Goodput goes up and dollars per token come down. Long context still grows fast with length, which is why 200k plus context carries a surcharge.  
  
Reader heavy dev tools can work if you cache prompts and keep responses short.  
  
The gap is real but smaller, and the profits sit in serving discipline, not wishful math: <https://martinalderson.com/posts/are-openai-and-anthropic-really-losing-money-on-inference/>

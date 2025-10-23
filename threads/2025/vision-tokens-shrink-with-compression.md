---
title: Vision tokens shrink with compression
date: 2025-10-22T15:15:14.386Z
url: https://x.com/AnandChowdhary/status/1981016465223594488
---

Vision tokens are going on a diet. DeepSeek-OCR's render→encode→decode slashes KV cache, and Zhipu's Glyph gets 3-4x compression with similar quality and faster prefill. Vision as a learned lossy codec points to continuous tokenizers. 👀👇  
  
We've been stuffing vision into discrete tokens like pixels as words. It works, but you pay in long sequences.  
  
Long sequences mean big KV caches and slow prefill. On my infra, KV memory was often 60%+ of VRAM (yes, really!). Your bill feels it.  
  
DeepSeek-OCR slips in a render then encode then decode path so the transformer sees a compact latent stream instead of a pile of patches.  
  
Same task quality in their demos, but far fewer positions. Shorter KV length. Lower memory. Faster wall clock prefill.  
  
Zhipu's Glyph learns a continuous code for vision features. They report 3-4x sequence compression with similar quality and faster prefill.  
  
Fewer tokens means fewer keys and values to store and attend. That is a very direct speedup during prefill.  
  
What this buys founders:  
Bigger batches on the same GPU.  
Longer multi image context without blowing VRAM.  
Lower token costs on hosted APIs if pricing tracks tokens.  
A path to on device multimodal since memory drops.  
  
Builder notes:  
Cache compressed vision latents across calls.  
Expose an images\_in field for pre encoded latents so power users skip the codec step.  
Add a fallback path to a high fidelity mode when the model flags tiny glyphs or diacritics.  
  
Open questions: do we keep any discrete vision tokens around for auditability. Do we push to fully continuous tokenizers across text and vision. Where should the codec live, in the model or as a reusable service.  
  
Either way, the trend is clear. Vision gets a learned lossy codec, tokens get lean, and multimodal stacks get simpler and cheaper.

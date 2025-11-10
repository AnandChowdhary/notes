---
title: What is GPT OSS
date: 2025-10-06T05:45:12.271Z
url: https://x.com/AnandChowdhary/status/1975074794090664160
---

What’s in GPT OSS? Open weights + o200k turn embedding norms into a window on the training stack. That long right tail reads like a leaky audit log. 👇

On GPT‑oss, the L2 histogram splits: a tiny low‑norm lump (likely unused or reserved bytes) and a heavy right tail.

High norm English tokens look like reasoning and code scaffolding. Think discourse markers and little code bits. Post‑training or RL can pump up those rows. A plain frequency story also fits.

My takeaway: the norm tail carries process signals!

Outside ASCII, the highest norms lean Chinese spam, adult, and lottery phrases, with a few oddballs from Abkhaz, Armenian, Thai, and Kannada.

Probe those "glitch tokens" across GPT‑5 and oss and you often get partial translation or recognition. That is weak membership inference, not a smoking gun.

Caveats matter. Models can infer meaning from characters without seeing the exact phrase. And the GitHub link is a moderate ρ≈0.45 on about 50 tokens, so interesting but not proof.

What this means if you ship models: open weights plus a shared o200k tokenizer create a new fingerprint surface. Tokenizer quirks leak hints about data pipelines. Old‑school glitch tokens can still cause weird loops. Brand and safety now start at tokenizer curation.

Things I'd test:  
\- Build the tokenizer on a curated corpus  
\- Keep a banlist for uncommon multi‑char merges  
\- Periodically re‑init rare merges during training  
\- Clip or equalize extreme embedding norms  
\- Run a detokenization audit pass before release

Open questions I'd love to see answered:  
\- Do these hot tokens come from tokenizer training sets, safety lists on GitHub, or late RL tasks?  
\- If you remove the merges and fine‑tune, does the behavior fade?  
\- Are norm tails stable across checkpoints?

Thoughtful write‑up by Lennart Finke. Worth a read: <https://fi-le.net/oss/>

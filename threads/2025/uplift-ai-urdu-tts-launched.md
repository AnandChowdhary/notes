---
title: Uplift AI Urdu TTS launched
date: 2025-08-20T05:45:07.041Z
url: https://x.com/AnandChowdhary/status/1958042565846180270
---

Uplift AI launched on HN yesterday and I'm a fan! It's more than just Urdu TTS: it's full-stack so it's about owning the data, fixing orthography and code switching, and shipping a real time voice UX where the big players still feel clunky.  
  
On the tech side, they expose WebSocket TTS with chunked streaming and a LiveKit plugin. Goal is conversational latency and getting the first audio out quickly. There is a phrase replacement API to normalize brand names and transliterations.  
  
Docs read like a product: Cancel semantics, multi stream synthesis, 22.05 kHz, MP3 or OGG or PCM; these are the small details I look for when shipping voice agents.  
  
Reality check: Google and Azure already ship Urdu TTS, ElevenLabs lists Urdu and Sindhi, Meta MMS has a Balochi checkpoint, and AI4Bharat has open models too.  
  
What feels new is "product fit". Voices tuned for news and education, tighter control of data distributions, and making Balochi usable beyond a research demo.  
  
Why now: Multilingual TTS backbones are good enough. The moat moves to curated speech and text, diacritization and lexicon tooling, and a low latency stack that works over LiveKit, WhatsApp, and even telco hotlines.  
  
If they ship offline inference with a small vocoder like LPCNet or tiny HiFi GAN, and handle code switching well, this becomes a practical interface for people who are online off and on and who are text averse. Technology for the next billion users!  
  
This is a welcome push for Urdu, Sindhi, and Balochi voice tech:   
<https://upliftai.org>

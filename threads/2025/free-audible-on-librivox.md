---
title: Free Audible on LibriVox
date: 2025-10-24T05:45:13.921Z
url: https://x.com/AnandChowdhary/status/1981597782394945772
---

I had a silly but stubborn idea: a free Audible on top of LibriVox. I wasn't trying to outsmart distribution. I was betting that open catalogs plus great UX can compete when discovery, metadata, and listening ergonomics are excellent. The product is how it feels to listen, not the MP3s. 🎧👇  
  
Found this in my notes from Aug 16, 2017\. Audible was the default, React Native was finally usable for real apps, and I'd just shipped Saga Music with youtube-dl (yes, really). The thought was simple: same playbook, different source - LibriVox's public‑domain books with Saga‑style polish.  
  
Tech reality check: LibriVox is public domain and mostly lives on Internet Archive. Legally clean, practically messy - variable audio quality, uneven metadata, inconsistent chaptering, and multiple editions per title.  
  
A 2025 build starts as a data project:  
\- Ingest LibriVox/Archive feeds  
\- Hash/fingerprint and dedupe editions  
\- Normalize into chaptered manifests (m4b-like)  
\- Enrich with Wikidata/ISNI, subjects, languages  
\- Index for search/browse  
  
Backend: worker queue to fetch/transform, Postgres for manifests, Meilisearch for search, CDN with range requests, optional edge cache (R2/Backblaze). App: React Native + TrackPlayer (ExoPlayer/AVAudioSession), offline-first caching, precise chapter progress, speed/eq/trim-silence, bookmarks, and solid resume across devices.  
  
What changed since 2017: audiobooks aren't a single-store world anymore. Spotify and Apple sell them, Libby normalized "free," and neural TTS made decent narration cheap. The bar moved from availability to taste - curation, narrator quality, and personalization.  
  
Saga-style scraping for music was gray. Here the PD base is clean, but the hard parts are metadata ops, duplicate-version moderation, rehost vs link policy, and the ethics of synthetic voices. The viable business is service value - discovery, queues, annotations, and community - not exclusives.  
  
Open questions I'm still chewing on:  
1) Can a PD-first app win on discovery and ergonomics alone?  
2) Should synthetic narration be allowed, and how do we label and rank it next to human reads?  
3) Rehost for reliability or respect source hosting and cache at the edge?  
4) What's a fair way to fund bandwidth/metadata work and also support LibriVox and Internet Archive?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/libri-vox-material.md>

---
title: Clean metadata unlocks discovery
date: 2025-11-03T14:45:17.354Z
url: https://x.com/AnandChowdhary/status/1985357559113662844
---

I grew up on Limewire and Bearshare. By 2016 the web had rippers, ad farms, and broken links. The hard part of music apps was not the player. It was messy catalogs, rights, and metadata. I built Saga to test a simple idea: clean metadata can unlock discovery in a fragmented world. 🎵👇  
  
In Jan 2016 I launched Saga with a companion API, RhythmSaga. Web and Android, yes even Gingerbread 2.3\. Open source on GitHub. The plan was to clean artist, album, and track data, fetch artwork, and make streaming and downloading actually usable. Reality was more nuanced.  
  
Architecture: thin clients over a REST JSON API. RhythmSaga aggregated public APIs, normalized artists, albums, and tracks, and attached artwork. The clients handled search, lightweight recommendations, playlists, and sharing. Streaming used HTTP range. Downloads wrote ID3 with cover art.  
  
Tradeoffs I made: heuristic dedup based on title and artist instead of acoustic fingerprints like Chromaprint or AcoustID. Faster and cheaper, but collisions happened. Recommendations leaned on co‑occurrence and popularity. Collaborative filtering was tempting but broke on sparse data and cold start.  
  
What aged well: separating metadata from clients. Designing for low end Android forced performance discipline. Open sourcing brought quick feedback. What did not: assuming free distribution would stay stable. API limits, DMCA, and content ID tightened. Unsanctioned sources got brittle. Spotify, Apple, and YouTube pulled ahead on embeddings, catalog depth, and offline.  
  
Open questions for 2025:  
1) Is there space for a lawful, neutral metadata service that interops across closed ecosystems  
2) Can on device models build a personal index from owned audio without breaking terms  
3) What governance keeps an open catalog healthy at scale  
Original post: <https://anandchowdhary.com/blog/2016/saga-music>

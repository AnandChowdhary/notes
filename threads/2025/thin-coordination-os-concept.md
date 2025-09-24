---
title: Thin coordination OS concept
date: 2025-09-23T09:45:13.004Z
url: https://x.com/AnandChowdhary/status/1970424152327889056
---

My current take: the ideal OS is a thin coordination layer that splits identity, storage, input, and render across device, browser, and cloud. The UI steps back. The job is to route intent to capability and to fail well when the network hiccups. ☁️👇  
  
In 2014 I wrote that the perfect OS might feel like no OS at all. Just a wallpaper until you type or speak, with apps and even compute streamed from the cloud (yes, really!). I called it Rain. The goal was simple: people want to do, not manage. Design should get out of the way.  
  
How it maps to real tech: WebRTC over QUIC and AV1 for remote UI. WASM and WebGPU for local work. Service Workers and IndexedDB for caches. CRDTs for sync. WebAuthn passkeys with OIDC for login. End to end encryption with MLS or Matrix for private data. That stack gets you most of the way.  
  
Reality check, 2014 to 2025\. Chromebooks won schools but did not replace desktops. Windows 365 made Cloud PCs normal in IT. Firefox OS and Windows Phone shut down. Fuchsia stayed quiet. Cloud gaming had mixed results. Stadia closed. Xbox and GeForce NOW kept going. Apple went hybrid with Private Cloud Compute. Hybrids beat purism.  
  
Design and ops tradeoffs:  
\- Latency: keep tight loops on device, stream bursty compute  
\- Security: default end to end encryption and clear trust boundaries  
\- Form factor: search or command first beats an app maze on phones, TVs, and wearables  
  
Principles I still back: small surface, stateless clients, identity and sync as core APIs.  
Open questions: where should the intent router live, OS, browser, or assistant. How do we keep portability across clouds under real bandwidth, energy, and privacy limits.  
Context from 2014: <https://anandchowdhary.com/blog/2014/on-operating-systems>

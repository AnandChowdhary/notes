---
title: StableAvatar for avatar videos
date: 2025-08-18T21:15:01.110Z
url: https://x.com/AnandChowdhary/status/1957551831393136778
---

Been tinkering with avatar agents lately, and this project is pretty neat. StableAvatar is an end to end video diffusion transformer that makes infinite length audio driven avatar videos from a single reference image and audio - no post processing. The identity stays intact.  
  
The clever bit is a time step-aware audio adapter. It modulates the denoiser at every diffusion step so the audio control stays stable across segments, which stops the usual drift you get when you pipe in off the shelf audio embeddings through cross attention.  
  
During inference, they add Audio Native Guidance to tighten lip sync and prosody. No face swap or face restore tricks here (FaceFusion, GFP GAN, CodeFormer).  
  
End result: long, stable, high quality, ID consistent renders for lectures, dubbing, and agents. And, open source!  
  
If you are building realistic avatar or video agents, start here: <https://github.com/Francis-Rings/StableAvatar>

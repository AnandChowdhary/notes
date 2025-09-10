---
title: Veo 3 API and pricing
date: 2025-09-09T21:15:14.796Z
url: https://x.com/AnandChowdhary/status/1965524373449949437
---

Veo 3 is GA: $0.40/s main and $0.15/s Fast, 1080p, native 9:16 on Veo 3, single pass audio plus video, and an API.  
  
Translation: cheaper programmatic ads and social at scale.  
  
With Sora still no API, Veo just grabbed developer mindshare.  
  
Quick math:  
  
15 s spot  
Veo 3: $6.00  
Fast: $2.25  
  
30 s  
Veo 3: $12.00  
Fast: $4.50  
  
Now imagine 10k variants for a catalog, yes really. That is $22,500 on Fast vs $60,000 on Veo 3 to generate. Your CAC tab just got friendlier.  
  
I like simpler pipelines. Single pass audio and video trims steps. One render, no sync dance, fewer hops.  
  
A basic loop  
prompt with seed, duration, 9:16 or 16:9  
submit via API  
wait on completion and run QC  
push to ads or social  
log results for learning  
  
Fewer moving parts means fewer on-call surprises.  
  
Format quirks matter.  
  
Veo 3 has native 9:16 so TikTok and Reels ready. Fast stays 16:9 so you either crop or pillarbox. Test both because attention curves change a lot between formats. 1080p output keeps render times sane without chasing 4k.  
  
Strategy time.  
  
If Sora keeps no API for a while, do you bet your pipeline on Veo and ship now or hedge with an abstraction layer!  
  
Is Fast good enough for brand work or only for UGC and discovery?  
  
Feels like programmatic video just moved from lab to production. I am excited to see what you build.

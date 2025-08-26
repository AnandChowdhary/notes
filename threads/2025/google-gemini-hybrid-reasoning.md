---
title: Google Gemini hybrid reasoning
date: 2025-08-25T09:45:12.643Z
url: https://x.com/AnandChowdhary/status/1959914901998371262
---

Skip the "5 drops of water" bit, Google just shared production per-prompt telemetry for Gemini and claims 33x energy and 44x carbon cuts in 12 months. Sounds like a full stack push and a new knob I like: hybrid reasoning. 🌳👇  
  
The meter covers active TPU power, host CPU and DRAM, idle capacity, and data center overhead via PUE. Median lands near 0.24 Wh per text prompt, about 0.26 mL water, and roughly 0.03 gCO2e. It leaves out user devices, external networking, storage, training, and non-text modes, the latter of which presumably use a lot of energy.  
  
Where the gains come from: MoE routing and hybrid reasoning with a toggle for "thinking", AQT quantization, speculative decoding, distilling into Flash and Flash Lite, bigger batches without breaking latency SLOs, plus better PUE on Ironwood TPUs. This feels like the first production-grade way to turn tokens into joules, then dollars, then environmental cost. I probably didn't know it but I possibly wanted this framing for a while.  
  
Let's keep our founder hat on: Reporting a median hides heavy tails when prompts are long or the model reasons a lot. Carbon is market-based and not location-based. Water skips indirect cooling at power plants. And this is text only. Images, video, tools, and explicit thinking budgets can blow up compute.  
  
Still, counting idling and overhead beats most back of envelope takes. My read is the 33x and 44x deltas mix serving wins like routing, quantization, and scheduling with a cleaner grid in the same period. That matters, though it isn't pure intrinsic model efficiency.  
  
Bigger picture for me: Hybrid reasoning turns intelligence into something you can schedule. Gate long chains of thought and route most traffic to distilled or cascaded experts. You drop average joules per answer and keep headroom for the hard stuff.  
  
I expect APIs to expose quality, latency, and energy budgets as first class knobs. Infra teams can co schedule reasoning spikes in low carbon regions or hours. Sustainability reports move to location based CO2 and fuller water scopes. Also, watch the Jevons curve. Per prompt kWh can crash while total MWh climbs as usage spreads across Search, Workspace, and phones.  
  
Open questions I'm tracking:  
1) What does the full distribution look like, not just the median, especially with reasoning and RAG chains?  
2) Can we agree on boundaries and third party audits so cross vendor numbers match, including location based CO2 and indirect water?  
3) How do we bake energy and CO2 into decoding and routing without hurting quality?  
  
Publishing concrete per prompt footprints is the right move. Now let's push for transparent scopes, standard methods, and energy aware model and serving design so these gains stick at scale.

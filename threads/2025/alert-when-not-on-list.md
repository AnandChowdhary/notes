---
title: Alert when not on list
date: 2025-11-04T16:15:18.288Z
url: https://x.com/AnandChowdhary/status/1985742599622443235
---

Found a 2017 note titled "Security inolenentation" (typo and all). The idea was simple on paper: notify me if a person isn't on the list. That maps to open set face verification, with a mobile-first demo. Prove the tech, then show the UI. 🛡️👇  
  
I remember the week. September 2017\. iPhone X and Face ID were fresh news, cloud vision APIs from Google, Azure, and Rekognition were everywhere, and "familiar face alerts" mostly lived server-side. My note said: demo the core capability first on a phone, then the app flow. Keep it scrappy.  
  
Decoded, the flow looked like this: keep a whitelist of embeddings, run detection, align the face, embed, then nearest-neighbor. Decide unknown if the best match sits below a similarity threshold. This is open set verification, not closed set classification. The tricky parts: threshold tuning (FAR and FRR), liveness checks, lighting and domain shift, and demographic bias. Also the human side: alert fatigue and scary UX if you get it wrong.  
  
What changed since 2017: phones and cams got NPUs, models got smaller and better, and on-device embeddings are now normal. Think Core ML, NNAPI, Private Compute Core, and good mobile backbones like MobileFaceNet and ArcFace-era training. Norms shifted too. GDPR arrived in 2018, consent banners stopped being a nice-to-have, and people expect local processing by default, with clear data controls and logs.  
  
How I'd ship it in 2025: edge-first pipeline with person detection, face verification, risk scoring, and only then an "unknown" alert. Add liveness checks, a short temporal window to smooth out blips, and a light second factor like presence of a household device or schedule context. Keep only salted, revocable templates. Store a short encrypted video buffer. Blur faces in notifications unless the user opts in. In the UI, make enrollment and consent obvious, show data retention, keep an audit trail, and offer presets for the threshold tradeoff like "fewer false alarms" or "catch more unknowns," with simple guidance.  
  
What aged well: the sequence. Prove the capability, then productize the UX. What improved: edge inference, clearer consent norms, and higher expectations for transparency. Open questions I still have:  
\- How do we make threshold tuning legible without turning it into a math lesson?  
\- Can we get liveness that holds up without extra depth or IR sensors?  
\- What's the cleanest path to revocable, privacy-preserving templates?  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/security-inolenentation.md>

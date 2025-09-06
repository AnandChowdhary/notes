---
title: Read aloud UX and timing
date: 2025-09-05T09:45:12.992Z
url: https://x.com/AnandChowdhary/status/1963901170348626306
---

Read‑aloud UX lives in the link between stable sentence breaks and the highlight you see. Breaks go off, you lose context. Timing goes off, the highlight lies. That simple idea drove a lot of my work on follow‑along reading. 📖👇  
  
Found this from March 12, 2017: "For read aloud, explode from period. Sentence by sentence highlight and read aloud." At Oswald Labs we shipped exactly that so people could follow along. Context then: VoiceOver and TalkBack were solid, Web Speech API was new, SSML was patchy, and we had to run on low‑end Androids, offline if possible.  
  
Why "explode from period" was naive but useful: abbreviations (Dr., U.S.), decimals (3.14), ellipses, quotes, emojis, and scripts that don't use Latin punctuation all break naive splitting. The workable path was a hybrid:  
\- Unicode or ICU sentence breaks or Punkt style models  
\- domain heuristics like honorific lists and numeric contexts  
\- language hints and user locale  
Goal: deterministic spans that match how a human would chunk the text.  
  
Once spans are trustworthy, timing rules. TTS boundary events and SSML marks let us map audio to DOM ranges, auto‑scroll, and highlight without stealing focus from assistive tech. In 2017 we sometimes estimated timings from character counts when events were missing. In 2025 we can tap neural TTS word timings and better events, but you trade accuracy for determinism, and cloud power for privacy. We still keep processing on device when we can, respect reduced motion and high contrast, and let users pick sentence or word highlights.  
  
What I'm still curious about:  
1) Best fallback when boundary events are late or absent. Predict from WPM or pause on punctuation.  
2) How to expose and fix bad splits inline without breaking flow.  
3) Can LLMs improve multilingual boundaries while staying deterministic and fast on device.  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/for-read-aloud.md>

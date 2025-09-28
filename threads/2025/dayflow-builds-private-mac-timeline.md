---
title: Dayflow builds private Mac timeline
date: 2025-09-27T13:45:01.465Z
url: https://x.com/AnandChowdhary/status/1971934101243560376
---

Been playing with Dayflow on my Mac. It turns everyday screen activity into an automatic timeline with AI summaries and distraction highlights. Feels like a quiet assistant that respects privacy. You control the data. Use Gemini or keep everything local.  
  
It records at 1 FPS and analyzes every 15 minutes to make clean timeline cards and timelapses. Built with SwiftUI. About 25 MB, \~100 MB RAM, under 1% CPU on my machine (fans stay quiet). It auto cleans after 3 days and updates with Sparkle.  
  
The AI pipeline is neat. In Gemini mode there are two calls: upload plus transcribe, then generate cards. Local mode with Ollama or LM Studio samples \~30 frames and makes 33+ calls to describe, merge, and title. Fully offline if you want. Bring your own API key.  
  
Why I like it: a calm, honest log of how I actually worked, with distraction highlights now and a customizable dashboard and daily journal coming soon. MIT licensed and macOS 13+  
  
GitHub: <https://github.com/JerryZLiu/Dayflow>

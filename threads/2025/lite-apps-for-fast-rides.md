---
title: Lite apps for fast rides
date: 2025-10-25T21:15:19.725Z
url: https://x.com/AnandChowdhary/status/1982194211824046351
---

Lite can mean a thin native shell with a rich web core.  
  
Back in 2017 my note was blunt: run <m.uber>\\.com in a web view with Material navigation and ship fast on low-end phones and slow networks.  
  
Goal: shortest time to first ride. 🚕👇  
  
Found this one-liner from August 19, 2017 while sifting through my notes.  
  
Context then: PWAs were finally usable, Android Instant Apps were new, lots of riders were still on 2G or 3G, and Material v1 patterns like the drawer and bottom nav set expectations for simple one-thumb flows (yes, 2G was real).  
  
Why a web view shell in 2017 made sense: tiny install, shared code, fast iteration.  
  
The catch was real too. Service workers were uneven in web views, background location from the web was basically off limits, and iOS had no web push.  
  
<m.uber>\\.com still proved the web could be very fast on bad networks by shrinking JS and flattening the request waterfall.  
  
What changed by 2025: Android Trusted Web Activity runs your PWA with full Chrome and shared storage via Digital Asset Links. iOS added Web Push in 2023\. Payment Request, WebAuthn and passkeys matured. WebGL maps got good. Material evolved into Material You with clearer motion and shape. Android tightened background limits, which pushed more location work into native modules.  
  
What aged well: performance first design, a web first critical path, native chrome only where it clearly helps. What did not: assuming a web view can replace OS grade background location, precise sensors, or tight driver and rider lifecycle hooks.  
  
The 2025 stack I like is layered. Use a high performance PWA or TWA for discovery, auth, and booking. Add thin native modules for precise location, reliable notifications, and deep offline. Use Instant Apps or App Clips to cut first run friction. Upgrade to full native only when the capability truly needs it.  
  
Open questions for today:  
\- Where is the switch point from web to native in mobility flows?  
\- Will upcoming browser capabilities close background and location gaps, or do we design around them?  
\- What defines lite now: APK size, median LCP and interaction latency, or energy per trip?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/uber-lite-m-uber-in.md>

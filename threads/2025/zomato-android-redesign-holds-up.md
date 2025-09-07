---
title: Zomato Android redesign holds up
date: 2025-09-06T13:45:16.433Z
url: https://x.com/AnandChowdhary/status/1964323971077414941
---

I opened an old Zomato for Android redesign I did in 2016\. The pixels aged, sure, but the assumptions are the real story. The interesting bit is which ones still hold up in 2025\. 🍽️👇  
  
Found a note dated Mar 25, 2017 in my messy notes folder that just said "Publish Zomato Medium article". I wrote the piece in 2016 and hit publish a year later. Context then: Material Design 1.0, Android 5 to 7, Jio's 4G wave taking off, and Zomato mostly about restaurant discovery.  
  
2016 core bet and constraints I designed around:  
\- Core bet: help me decide where to eat nearby in under a minute  
\- Navigation: move from drawer to bottom nav, keep search one tap away, map visible but list is the fastest path  
\- Performance: skeletons over spinners, cache hard for flaky networks, keep time to first result low  
\- Permissions: location as a clear value exchange, ask with runtime prompts and context  
  
What aged well vs poorly:  
\- Aged well: bottom navigation, skeleton loading, offline-friendly caching  
\- Mixed: photo-first cards vs info density for quick decisions  
\- Aged poorly: heavy custom UI across OEM variants, growth nudges around location and notifications during rising privacy fatigue  
  
2025 reality that reframes the work:  
\- Platform: Material You and Material 3, dynamic color, predictive back, Compose by default, notifications gated, background location tighter, Compose changes the cost of custom components  
\- Product: high-frequency delivery and logistics, trust and safety, ETA clarity, and reliability matter more than "delight"  
\- Payments and flows: UPI rails and one-tap reviews shift conversion math, server-driven UI and feature flags move faster than static IA  
  
If I did it today:  
\- Start with a system: tokens, theming, motion  
\- Spend custom UI only where it truly differentiates  
\- Budget cold-start latency like a feature  
\- Make ranking and personalization explainable  
\- Treat permissions as long-term trust contracts  
  
Open questions I'm still chewing on:  
\- How should discovery UIs expose ranking logic without hurting conversion  
\- Where do LLMs help most - query rewrite, venue summaries, or intent modeling - and how do we keep user agency  
\- Can Compose plus server-driven UI slow design drift at scale  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/publish-zomato-medium.md>

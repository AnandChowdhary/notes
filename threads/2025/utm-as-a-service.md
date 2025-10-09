---
title: UTM as a service
date: 2025-10-08T05:45:14.026Z
url: https://x.com/AnandChowdhary/status/1975799577031942477
---

I wrote a tiny note in 2017: "UTM as a Service." The idea: treat campaign tagging like infrastructure - a shared taxonomy, guardrails, and an API every tool can hit. The missing middleware between creative and attribution. Small concept, big downstream impact. 🏷️👇  
  
Context in 2017: most teams lived in Universal Analytics, used spreadsheets + link shorteners, and kept breaking reports with case sensitivity and taxonomy drift. My intent was simple: centralize UTMs, enforce naming, and expose an API so ads, emails, and short links stayed on‑script.  
  
What aged well: governance matters more now. Apple LTP kills gclid/fbclid in Mail and Private Safari but keeps utm\_source/medium/campaign. GA4 added utm\_id and utmsourceplatform. A service that lint‑checks, normalizes, and blocks PII is overdue.  
  
Shift since then: tagging moved server‑side. GTM sGTM on Cloud Run lets you validate and redact before dispatch. So UTM as a Service looks like policy + enforcement with an API, not a builder UI. Tradeoffs: manual, brittle, and blind to view‑through/cross‑device.  
  
Lesson: treat tagging like infra and life gets easier. Questions: 1) sGTM or separate service? 2) Can briefs auto‑generate compliant UTMs? Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/utm-as-a.md>

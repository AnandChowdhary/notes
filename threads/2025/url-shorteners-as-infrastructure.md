---
title: URL shorteners as infrastructure
date: 2025-10-11T21:15:13.862Z
url: https://x.com/AnandChowdhary/status/1977120781760184382
---

The core insight from an old note of mine: a URL shortener is the control plane for links - routing, observability, compliance, resilience - disguised as a 301\. Treat it like infrastructure, not cosmetics. 🔗👇  
  
I wrote "URL shortener as a service..." on June 26, 2017\. Different world. <goo.gl> alive, Bitly everywhere, <t.co> universal. Serverless and the edge were just arriving. GDPR existed on paper, not in enforcement. I was building link-heavy products and kept running into the same need: control.  
  
Back then "as a service" meant an abstraction layer: stable IDs pointing to changeable targets, 301 vs 302 vs 307 shaping caching and client behavior, branded short domains for trust and deliverability, deep links into apps via Firebase Dynamic Links or Branch without handing platforms the keys. Since then, edge runtimes got fast by default, and shorteners grew into link ops: rules, A/B, geo or device targeting, QR at scale, and security wrap-and-scan. More power, more responsibility.  
  
What aged well: a shortener is a control plane. It decouples identifiers from destinations, enables instant failover, supports brand trust with custom domains, and makes experiments safe to run. What changed: the extra hop hurts less with modern TLS and HTTP, but cacheability and status codes still matter. Platforms now auto-wrap and scan links, which reduces the value of generic shorteners and raises the value of branded, transparent ones. Privacy pressure moved analytics from user-level to aggregated, with retention as a first-class setting. Also, QR went from niche to default.  
  
Open questions I'm still chewing on:  
1) Can we standardize privacy-preserving redirect metrics (on-device aggregation, k-anon, transparency logs)?  
2) Should resolvers publish signed manifests to prevent quiet retargeting?  
3) Where should the control plane live - edge CDN, email/security gateway, or the app runtime?  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/url-shortener-as.md>

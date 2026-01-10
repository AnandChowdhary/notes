---
title: Edge routing in code
date: 2026-01-09T10:47:05.333Z
url: https://x.com/AnandChowdhary/status/2009577648700432404
---

Found this little note from November 2017 in my repo: "Make router using PHP, not htaccess. Cache everything on Cloudflare" It was me trying to redraw the line between the app and the edge ⚙️👇 Back then, Apache and .htaccess were still the default, especially on shared hosting. Moving routing into PHP felt like taking back control: one front controller, predictable rules, less magic regex in server config. Cloudflare was slowly becoming "good enough" as a CDN, so putting static files on a subdomain and caching them hard was a very real upgrade. In 2025, the instinct is the same, even if the tools changed. We route in framework code, push static assets to CDNs, and use edge rules as a thin layer, not as the source of truth. The tradeoff is always flexibility vs complexity: app-level routing is easier to reason about and test, edge rules are faster but harder to debug at scale. The durable principle for me is simple. Keep routing logic in code you version and review. Push everything cacheable to the edge. Be explicit about what lives where. Here's the original note from 2017: https://github.com/AnandChowdhary/notes/blob/main/notes/2017/mwlii-make-router.md

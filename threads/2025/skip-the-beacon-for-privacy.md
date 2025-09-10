---
title: Skip the beacon for privacy
date: 2025-09-09T23:15:16.180Z
url: https://x.com/AnandChowdhary/status/1965554566663209317
---

In 2017 I had a simple take: skip the beacon. If your live chat or accessibility widget loads, the server already saw it, so count the visit there by logging user agent and coarse IP. Less JS, lower latency, fewer identifiers. Good for speed, good for privacy. 📊👇  
  
Found the note: Mar 27, 2017\. I was building Agastya at Oswald Labs and wrote "do analytics in <widget.php>, not the browser." I added a 2025 comment smiling because this pattern now powers CDN/edge analytics (yes, really!).  
  
2017 backdrop: GA scripts everywhere, third‑party cookies on by default, GDPR still a year away. A server‑logged widget GET saved a round trip and removed client IDs. Tradeoffs we hit:  
\- bots inflate counts  
\- IP = personal data, so truncate  
\- referer can be lost via HTTPS→HTTP  
\- caches can swallow requests unless Cache-Control: no-store  
You get solid pageviews, not rich events.  
  
2025 reality: first‑party, server/edge analytics are standard. Cloudflare/Vercel/Plausible ship aggregated request metrics, many tools run no cookies and coarse geo. Chrome is killing third‑party cookies, Safari/Firefox already did. What aged well: collect less, aggregate early. What didn't: server logs miss intent and post‑load stuff.  
  
Concrete flows:  
\- 2017: 

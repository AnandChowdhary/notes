---
title: Tight constraints shaped Precis
date: 2025-09-30T15:15:16.684Z
url: https://x.com/AnandChowdhary/status/1973043918704177178
---

In 2016 I built Precis, a self-hosted URL shortener you could deploy on $5 shared hosting by uploading a folder and an .htaccess file (yes, really!). The fun bit wasn't the UI. Tight constraints quietly shaped the whole thing. 🔗👇  
  
Created Dec 2, 2016\. Back then lots of teams wanted branded links but lived on shared PHP/Apache. Trust and ownership beat lock-in. Alternatives existed (like Mathias Bynens' tiny PHP shortener), but I wanted drop-in, pretty, zero infra - upload-and-go.  
  
Architecture from constraints: static <index.html> \+ jQuery, one <link.php> behind Apache RewriteRule in .htaccess. No root, no daemons, no cron - just a form and 301s. Assets built via Prepros (<prepros.cfg>) because that's what my laptop shipped with. Primary path: FTP.  
  
What this bought: instant deploys on cheap hosts, predictable behavior, no migrations. Costs and hacks: brittle rewrite rules, rewrite-centric routing that confused teams, a single-file backend, minimal logging, shared-host PHP version bumps, and "later" security chores... stayed later.  
  
How I'd solve it in 2025: run redirects at the edge with a KV store for slugs, do optimistic writes with collision retries, rate-limit at the edge, add a tiny audit trail, and default-deny validation. Keep HTML server-rendered, skip jQuery and the build step.  
  
Reusable principles: ship to the platform users already have, even if it's boring, small tools need threat models and an upgrade path, prefer boring primitives first and add escape hatches later. Here's the project: <https://github.com/AnandChowdhary/precis>

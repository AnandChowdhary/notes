---
title: Boring is a strategy
date: 2025-08-26T09:45:13.460Z
url: https://x.com/AnandChowdhary/status/1960277294439940545
---

I literally read [@sjgoedecke](https://x.com/sjgoedecke)'s API design post and kept nodding. The big takeaway for me: boring is a strategy. Ship stable, familiar shapes so users think less and do more. The hard work is change management, not REST vs GraphQL...  
  
Versioning is a safety tool, not a default. Treat stability as a promise.  
  
If you must break, run both for a while, publish timelines with Deprecation and Sunset, and pin versions per account by date. Upgrades become small steps, not flag days.  
  
Reliability beats clever shapes.  
  
Use idempotency keys for every write. Store them long enough for real retries and compare inputs before reusing a result.  
  
Prefer keyset pagination so you avoid offset drift and big skips. Return 429 with Retry-After and show per tenant limits and a kill switch.  
  
Most teams can get the good parts of GraphQL with plain REST.  
  
Expose includes and sparse fields so clients can pull expensive joins when they need them. Add rate limit headers and a clear compatibility policy.  
  
You end up with a simple API that scales from scripts to platforms.  
  
Great read. Thanks for writing this, [@sjgoedecke](https://x.com/sjgoedecke).  
  
Curious about two things. Do you publish a compatibility contract and webhook versioning plan? And do you surface client-facing usage telemetry for self throttling?  
  
<https://www.seangoedecke.com/good-api-design/>

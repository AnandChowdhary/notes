---
title: Owning state in system design
date: 2025-08-18T23:15:06.927Z
url: https://x.com/AnandChowdhary/status/1957582030767837330
---

Reading Sean Goedecke on system design is such a great experience. It is all about owning state. Fancy setups often hide unclear write ownership. The boring win.  
  
Pick a single writer, then grow only where hot paths demand it. The single writer pattern scales when consistency is explicit. One service owns every mutation. Everyone else calls it or consumes its events.  
  
Close the dual write problem with a transactional outbox and idempotent consumers. Without that, events only move the mess.  
  
Database pragmatics I keep coming back to. Push work into SQL to kill N plus 1\. Add indexes that match hot queries. Split a monster query only when the planner gives up.  
  
Read replicas help, but read your writes breaks. Use stickiness windows or RYW tokens in critical flows.  
  
Watch p95 and p99, not averages. Overload multiplies across hops.  
  
Queues and caches are state. Treat them with care. Backpressure and dead letter queues for jobs. Idempotency keys with unique constraints for at least once.  
  
Cache last. Fix algorithms and indexes first. If you must cache, coalesce requests, jitter TTLs, and keep big artifacts in object storage.  
  
Bottom line: Grow complexity only where the hot path needs it. Keep invariants owned and observable. What thresholds have worked for you in production?  
  
<https://www.seangoedecke.com/good-system-design/>

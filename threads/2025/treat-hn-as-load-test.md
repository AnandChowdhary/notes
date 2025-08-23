---
title: Treat HN as load test
date: 2025-08-20T13:45:10.788Z
url: https://x.com/AnandChowdhary/status/1958163364489887944
---

Reading [@mooreds](https://x.com/mooreds)’s take on making to the HN front page: The traffic spike is fun, but the real value sits in the comments and the follow on links. Having been featured a few times myself, I agree - treat HN as a one day load test and peer review, not a growth channel.  
  
Engineering posture matters more than spike size. As sways, stay safe kids: Prerender and push to the edge with long TTLs on immutable assets. Shield your origin. Put writes behind queues with idempotency keys and sane rate limits. If things melt, flip to CDN read-only mode instead of throwing 500s.  
  
Observability is the multiplier. Break out the HN cohort in analytics, watch p95 and p99 under burst, and log comment-driven issues as first class signals. Sessions are vanity if they do not lead to fixes or updates on your end.  
  
This traffic is low intent by design, so optimize for insight extraction: Jump into the HN thread early, ask clarifying questions, and triage assumptions, UX footguns, and threat models. Ideally stay online as much as possible, in turns with your cofounder, reply to everyone ASAP. A launch HN even gets a little boost thru YC so make the most of it.  
  
Measure deltas, not just signups: Issues opened, PRs, stars, doc fixes, reproducible bug reports. Compare day 0 vs the next 7 to 14 days. Also, HN is fickle. The same link can sink or fly based on timing and early votes. I posted a project to a quick death and the week after it was [#1](https://x.com/hashtag/1) when someone else posted it again. Use it as a probe, not a plan.  
  
The durable value is second order. Newsletters pick it up, blogs link back, communities embed it. Track referrer chains, keep a simple post HN outreach list, and ship a fast follow addressing top comments. Then circle back to those referrers with the update. You are turning critique into credibility.  
  
I am curious about baselines by category, the halflife of engagement, and a simple HN playbook KPI set like comment to change rate, 7 day retention, and backlinks gained.  
  
Good read by Dan Moore, and worth bookmarking for your next spike: <https://www.mooreds.com/wordpress/archives/3530>

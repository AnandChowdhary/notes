---
title: Skope pricing cross tenant verification
date: 2025-08-24T09:45:09.766Z
url: https://x.com/AnandChowdhary/status/1959552514258538516
---

This week I enjoyed [@imbensmith](https://x.com/imbensmith) and team's launch of Skope (YC S25). The non-obvious part of pricing is treating billing as cross-tenant verification. Outcome pricing works when you can prove results by joining seller events with the buyer's system of record. 💳👇  
  
I think outcome-based pricing will be the equivalent of B2B SaaS seat-based pricing in the AI era.  
  
That means a few boring but important blocks:  
\- Identity reconciliation  
\- Idempotent event ingestion  
\- Deterministic rating  
\- A buyer facing ledger with per outcome receipts  
  
For outcomes you need read-only taps into CRMs, helpdesks, commerce, and sales tools like [@FirstQuadrant](https://x.com/FirstQuadrant). Aggregate usage is not enough.  
  
Add signed webhooks, replay protection, and an append only audit log. Without these, you get disputes all day.  
  
Context from the trenches: Stripe, Orb, and Metronome can meter anything you emit as events. The gap is native cross party verification and buyer visible evidence.  
  
Support already prices per resolution with Intercom and Zendesk. Salesforce moved from per conversation to per action credits. The new idea here is making verification a first class product - not a guarantee in sales.  
  
Hard edges:  
\- Attribution when multiple agents and humans touch the work  
\- Reopen and latency semantics  
\- Privacy and PII minimization  
\- ASC 606 variable consideration and evidence for recognition  
  
Expect hybrid designs with floors, caps, and shared risk bands. Enterprises still need a budget. Vendors with real performance can share upside.  
  
Website: <https://www.useskope.com>  
Launch HN: <https://news.ycombinator.com/item?id=44973758>

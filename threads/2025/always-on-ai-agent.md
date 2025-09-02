---
title: Always on AI agent
date: 2025-09-01T09:45:16.024Z
url: https://x.com/AnandChowdhary/status/1962451644358230354
---

I keep coming back to this: the UX of AI is invisible. Not a chat box, but an always on-agent that responds to the world. Chat or voice is pull. Triggers are push. When mail, calendar, or CRM change, it acts - that shift is what we're building at [@firstquadrant](https://x.com/firstquadrant) 🤖👇  
  
Tech frame: event-driven AI. Sources emit signals via webhooks and CDC. The agent subscribes, builds context with RAG across mail, calendar, and CRM, applies policies, then acts. Reliability needs idempotency keys, retries, rate limits, OAuth scopes, signed webhooks.  
  
UX flips: from typing for help to help at the right moment. Preview then apply, one tap approvals, audit trails, rollbacks. Tradeoffs: trust, control, privacy, reliability. Latency budgets: sub second for nudges, minutes for deeper flows. Success = fewer prompts.  
  
Open questions:  
1) How invisible can we go without losing trust and agency?  
2) Which standards will emerge for event schemas and capability scopes across tools?  
3) What should we measure: interrupts avoided, task closure, or safe autonomy with low rollback rates?

---
title: The race for LLM standards
date: 2026-01-04T10:48:02.027Z
url: https://x.com/AnandChowdhary/status/2007765958925152633
---

Everyone's talking about "Stripe for LLM APIs" but the focus should be on the protocol war. Whoever nails a de facto standard for: - auth, - streaming, - tools / function calling, - batching, across OpenAI, Anthropic, Gemini, etc. will become the control plane of AI apps. If one layer can sit in front of all models and decide: - which provider to route to, - what guardrails and policies to apply, - how to optimize spend and latency, then that layer becomes your API gateway, feature flag system, and FinOps dashboard for LLMs rolled into one. For founders, that has two implications: 1\. If you build it, you're not just an adapter. You're potentially the policy and governance brain of multi-model infra. 2\. If you depend on it, you're centralizing a lot of power and lock-in in one place. Great for speed today, interesting for risk tomorrow. So yes, "Stripe for LLMs" sounds cute. In practice, it is closer to "Kubernetes for prompts." Whoever wins this layer decides how AI apps are actually wired.

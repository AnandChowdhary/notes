---
title: Googles new Interactions API tries to change how
date: 2025-12-17T06:41:02.288Z
url: https://x.com/AnandChowdhary/status/2001180818883153947
---

Google's new Interactions API tries to change how we should think about LLMs. Instead of "send a prompt, get a completion, stateless forever," you now get long‑lived, server‑side agents that keep state over time, can run things in the background, and plug into tools via MCP. In human terms, it is less "one‑shot autocomplete" and more "remote worker that never forgets your Notion doc." The interesting bit is that these agents can amortize heavy work. Multi‑minute deep search or multi‑step workflows no longer need to fit inside a single request. You have an interaction ID, the agent keeps chipping away in the background, and you just come back for updates. Feels more like a mini backend process than a typical chat session. This blurs the line between "model" and "orchestrator." The orchestration layer is now part of the platform, not just your glue code. As a founder, the bottleneck shifts from "which model has more params" to "how do I design agentic compute, state, and tooling around it." It's what the Responses API should have been. So now you don't have to think about system design, state management, and scheduling for these always‑on agents. So we're back to building distributed systems, just with LLMs stapled to them.

---
title: If Anthropics Skills model keeps improving at thi
date: 2025-12-29T10:41:02.020Z
url: https://x.com/AnandChowdhary/status/2005589870069367059
---

If Anthropic's Skills model keeps improving at this pace, agents might quietly get demoted from The Future™ to just another runtime detail. The interesting abstraction boundary shifts to something like SKILL\\.md-style bundles. Think of them as small, composable units that combine: - a contract / spec in natural language - a bit of code - and a prompt that knows how to progressively reveal context Instead of orchestrating giant agent graphs, you ship skills. Each skill declares what it can do, what it needs, and how it should talk to other skills. The model then stitches them together on demand. This looks a lot like npm for AI behavior. Your app no longer hardcodes flows like "call agent A, then B, then C." You give the model a toolbox of skills and let it route intelligently based on user intent and current state. In this world: - Agent frameworks start to feel like build tooling - Skills feel like the real product surface - And prompt engineering evolves into designing good skill interfaces So AI apps might end up shipping a lockfile of skills the way web apps ship a package-lock.json. The runtime is an implementation detail. The skill graph is your architecture.

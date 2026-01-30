---
title: The new middle tier reality
date: 2026-01-29T10:47:02.188Z
url: https://x.com/AnandChowdhary/status/2016825404569600342
---

We are quietly watching the classic 3‑tier app architecture get roasted in real time. In a lot of AI‑native products I'm seeing, the business logic layer isn't really code anymore in the usual sense. It is: - Prompt templates and context packs - Agent routers deciding "who" handles what - Tool registries and function schemas - Config files that look suspiciously like your new core logic So instead of neat CRUD services and fat domain layers, you get a thin API surface on top, a bunch of LLM orchestration in the middle, and tools + data at the bottom. The middle tier is less "if/else" and more "nudge the probabilistic beast in the right direction". This shifts a bunch of founder decisions: - Repo design: from services and controllers to flows, tools, and contexts - Testing: from unit tests on pure functions to eval suites on model behavior - Hiring: less "strong REST API designer" and more "can turn messy ops into controllable LLM workflows" We are basically moving from writing business logic to engineering constraints and incentives for a stochastic runtime. It is weird. It is also probably the new normal.

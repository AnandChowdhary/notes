---
title: Skills as software assets
date: 2026-01-08T22:18:02.586Z
url: https://x.com/AnandChowdhary/status/2009389156821283089
---

Anthropic turning Claude Skills into a vendor‑neutral Agent Skills spec + org‑level admin and a public directory, is basically Dockerfiles for LLM workflows. You get a portable unit that says: - here's the procedure, - here are the tools, - here's how to wire them up, and you can drag that whole thing across IDEs, agent runtimes, and model vendors without rewriting the same glue code for the 17th time. The skill becomes the artifact, not the surrounding platform. This is sneaky important. It means you can: - Standardize how your team defines AI workflows - Swap underlying models or infra without blowing up your "agent logic" - Publish or consume a marketplace of reusable skills, like npm for procedures We might finally stop encoding business processes inside one-off prompt chains tied to one vendor's UI. Skills become versioned, reviewable, testable units you can treat like real software assets. Of course, this only works if enough of us treat the spec as a baseline instead of a marketing feature. But if that happens, "which LLM are you using?" becomes less critical than "which skills are you running?", which is a much more interesting question.

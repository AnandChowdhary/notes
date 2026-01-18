---
title: Latency enables rapid loops
date: 2026-01-17T22:14:01.931Z
url: https://x.com/AnandChowdhary/status/2012649638134943918
---

If very fast Codex actually makes code and agent responses feel instant, the big shift is control loops. Right now most stacks treat LLM calls like expensive RPCs. You do a few big, blocking calls in the IDE, CI, or your agents, then wait. That pushes you to design around smart one-shot guesses. If latency drops into the near‑interactive range, you can flip the architecture. You stop caring about squeezing out a few more benchmark points and start caring about how many tight feedback cycles you can run per second. Things that become natural: - IDEs that continuously "micro-diff" your intent and code as you type, not just on demand - CI that probes and repairs instead of doing one huge, sacred pipeline run - Agents that take dozens of tiny, cheap steps instead of three dramatic ones that you pray are right Wall‑clock latency starts to dominate model quality at the margin. If you can run 20 small loops in the time your competitor runs 2, you win even with a dumber model.

---
title: Fast AI development workflows
date: 2026-02-13T10:48:02.703Z
url: https://x.com/AnandChowdhary/status/2022261476300558645
---

GPT‑5.3 Codex‑Spark on Cerebras is fast! At 1k+ tokens per second and roughly half the TTFB, the slowest part of the loop is... me? Or more precisely, my ability to review, diff, and validate code fast enough before the next batch is ready. This changes the research question for technical founders. Model quality and speed are starting to look like solved infra problems you can rent. The hard part moves up the stack: - How do you design diffs that make a 500‑line edit reviewable in seconds, not minutes? - How do you integrate tests so that every generation ships with a confidence score, not just vibes? - How do you orchestrate agents across repos, services, and environments without creating an un-deboggable Rube Goldberg machine? Wafer‑scale inference means the backend is now absurdly fast. The competitive edge is going to be UX, workflow design, and developer ergonomics.

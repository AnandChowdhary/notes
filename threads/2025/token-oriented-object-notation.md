---
title: Token oriented object notation
date: 2025-10-27T10:45:03.592Z
url: https://x.com/AnandChowdhary/status/1982760447817482385
---

Found a neat format for LLM prompts: TOON - Token‑Oriented Object Notation. Compact, human‑readable, and designed to cut structured‑data tokens by \~30-60%. I keep bumping into context limits, so this is right up my alley.  
  
Think YAML‑style indentation meets CSV‑like rows. Declare the schema once (users\[3\]{id,name,role}) and stream values without repeating keys. Minimal punctuation and very readable. My kind of minimalism.  
  
Nice guardrails for models too. Explicit counts and field lists make outputs easier to validate. Benchmarks in the repo show big wins: 50 records goes 2,159 → 762 tokens (64.7%). Across examples, \~60.9% fewer with o200k\_base. Your mileage will vary.  
  
Feels handy for tool calling, RAG, or any prompt with large arrays. There's a TypeScript package ([@byjohann](https://x.com/byjohann)/toon) with a simple encode(json) entrypoint. Install via npm/pnpm/yarn and start saving tokens.  
  
Repo: <https://github.com/johannschopplich/toon>

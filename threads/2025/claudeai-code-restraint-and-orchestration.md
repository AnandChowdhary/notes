---
title: ClaudeAI code restraint and orchestration
date: 2025-08-25T21:15:13.195Z
url: https://x.com/AnandChowdhary/status/1960088547740000500
---

The clever bit in [@ClaudeAI](https://x.com/ClaudeAI) Code is restraint. One loop, stateless sub agents, and an explicit todo let interleaved thinking handle orchestration between tool calls. That alignment is the UX win. 👇  
  
Under the hood, Task spins up a one shot helper and folds the result back into a flat trace.  
  
Tools stay low to medium level. Grep, Glob, Read, Edit, MultiEdit, Write. The model can batch ripgrep style searches, make atomic edits, and keep policy in the prompt. WebFetch even routes to a small, fast model. Opinionated tooling, not a tangled graph.  
  
Skipping RAG is a choice. Fewer hidden knobs to tune and easier to debug. You can even learn from tool traces.  
  
The cost is IO. Big repos can thrash unless you lean on include filters, batching, and caching. In practice the agentic search flow fits a terminal first workflow.  
  
Steerability is mostly text. CLAUDE-md for durable context, lots of examples, bold IMPORTANT and NEVER guardrails, and explicit TodoRead or TodoWrite so long sessions do not drift. Kinda inelegant, very effective.  
  
Editor signals flow in via MCP tools like diagnostics. It feels simple on paper and it works day to day.  
  
What I want next: Ablations for LLM search vs RAG with both retrieval quality and cost, a clear model mix by task so Haiku handles IO and Sonnet or Opus handle hard reasoning, and stress tests on giant monorepos under weekly caps.  
  
Questions: Do we have a cost breakdown by model tier per-task? How much does caching change repo scale limits?  
  
Strong piece by [@nuwandavek](https://x.com/nuwandavek). Feels like agentic coding is now shaped by inference economics as much as IQ. Link: <https://minusx.ai/blog/decoding-claude-code/>

---
title: OpenAI stateful responses bet
date: 2025-08-27T15:15:14.586Z
url: https://x.com/AnandChowdhary/status/1960722732301348971
---

Folding Assistants into a stateful Responses API by [@OpenAI](https://x.com/OpenAI) feels less like cleanup and more like a bet: Agent loops want durable, tool-aware state and standard I/O. The cheaper search moves the cost line for retrieval heavy agents. I'm here for it. 👇  
  
Responses is now the core primitive I reach for. Built-in web and file search, Code Interpreter, computer use, and remote MCP servers live in one place.  
  
It adds background mode, reasoning summaries, and encrypted reasoning items. Reasoning items persist across turns via previousresponseid and can be ZDR encrypted, so o‑series models can reuse their thinking across multi tool chains.  
  
GPT‑5 lands on Responses with built in tools. This gives you agentic, multi step workflows without stitching together custom orchestration.  
  
Novel vs incremental, the meaningful bit for me is preserving reasoning tokens across tool calls. That helps latency, cost, and reliability. Background mode formalizes long running work. MCP support keeps tool connectivity open.  
  
Gaps remain: Domain-level scoping for web search isn't first class yet, so folks still do site: hacks, even though source links ship as standard. And search drops toward $10 per 1k calls from about $25 in previews, which changes the RAG and search by default math.  
  
Context: OpenAI signaled Assistants → Responses in March. Deprecation targets mid 2026 with 12 months' notice, so start migrations. Map threads to previousresponseid, re-inject instructions, and keep eval and tracing tight.  
  
From early reports and my own tests, Responses feels cleaner but not a speed cure all. You still need to mind vector stores and long context. With cheaper search plus stateful reasoning, stacks will likely unify tool calling in Responses instead of custom routers (and fewer 2 am pages).  
  
Open questions I'm tracking:  
1) Will we get official include/exclude domain filters for search and any ranking controls?  
2) How far does "reasoning item" persistence go across GPT‑5 variants and enterprise ZDR at scale?  
3) What migration tooling ships, like automated thread → response graphs and telemetry parity?  
  
If these land well, Responses becomes the default agent runtime, not just another chat API. Cleaner mental model, happier teams. A step in the right direction, even if it's just to skip the <response.choices>\[0\].<message.content> mess...

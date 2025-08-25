---
title: OpenAI platform plumbing
date: 2025-08-24T15:15:12.801Z
url: https://x.com/AnandChowdhary/status/1959635561112830447
---

Our friends at [@OpenAI](https://x.com/OpenAI) just collapsed two hard problems - third party data access and state - into platform features. Connectors + Conversations push agent logic from your app's logic into the Responses API. Ship UI and policy, let the platform do the plumbing. 👇  
  
Connectors ride on MCP backed tools inside Responses (tools: \[{type: "mcp", server\_url, allowed\_tools, ...}\]). One <responses.create> can coordinate Gmail, Calendar, Drive or Dropbox, Teams or GitHub, plus web or file search and a code interpreter. Yes, one call.  
  
On state, Conversations makes threads first class. Chain turns with previousresponseid, and retrieve gives you the full itemized history: messages, tool calls, functioncalloutput, and reasoning items. Reasoning items persist across turns, can be encrypted via <reasoning.encrypted>\_content, background mode handles long jobs, and reasoning summaries help you debug.  
  
Net effect: plan, fan out to connectors, merge results, and commit the trace to a durable thread. No chat DB. My inner platform engineer is smiling.  
  
Call it incremental if you want, but lifting connectors to first class tools in Responses plus a durable conversation store is a platform play. Fewer moving parts for you, more opinionated orchestration in the API.  
  
Trade offs: token bloat from verbose MCP schemas (use allowed\_tools to trim), lock in risk around server side state, regional gaps for some connectors in EEA or UK, and a bigger attack surface since OAuth scopes multiply prompt injection blast radius.  
  
Versus DIY stacks with LangChain or LlamaIndex and your vector DB or Google's Workspace native actions, this is tighter. Fewer hops, stronger tool use priors. The flip side is you accept OpenAI as both data and state plane.  
  
What this means for founders: you can ship thin agents. Your app becomes UX and policy. The platform handles retrieval, tool routing, persistence, and traces. Less glue code, faster cycles. More time for product, fewer late night cron jobs.  
  
RAG gets simpler because file search plus connectors unify private and web retrieval. Persisted reasoning and server side tool traces should stabilize multi turn tool use, especially when chaining function calls.  
  
On governance, the API keeps "no training on business data by default," but ChatGPT and API connector access differ. Expect procurement to ask about retention, export, and regional compliance for server stored threads. Have answers ready.  
  
Open questions I'm tracking:  
1) Conversations: retention and SLA, export formats, and can we do item level PII redaction or default per turn encryption  
2) Connectors: common auth scopes, least privilege prompts, and real defenses against cross source prompt injection  
3) Scale: practical limits on thread size, item count, and fan out before latency and cost spike  
  
If these land well, "agent = one Responses call plus policies" becomes the default architecture. Thin apps, thick platform. I'm here for it.

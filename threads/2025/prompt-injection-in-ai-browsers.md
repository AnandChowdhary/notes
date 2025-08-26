---
title: Prompt injection in AI browsers
date: 2025-08-25T23:15:13.178Z
url: https://x.com/AnandChowdhary/status/1960118746825273560
---

I just read [@zack\_overflow](https://x.com/zack%5Foverflow)'s thread and Brave's write‑up about prompt injecting AI browsers. The scary bit: an AI browser that collapses SOP so any page becomes a control plane for cross‑origin actions with your cookies. That's a confused deputy sitting in your tab. ⁉️👇  
  
Brave's PoC reads like a heist script.  
  
A hidden instruction in a Reddit comment. You click "Summarize." The agent treats page text as commands, uses a trailing‑dot domain trick (<perplexity.ai.> vs <perplexity.ai>), grabs a Gmail OTP, then exfiltrates via a Reddit reply.  
  
SOP/CORS don't help when the deputy is acting as you.  
  
I keep saying this to teams: you can't vibes your way out of this with better prompts.  
  
OWASP calls it LLM01 + LLM08\. Untrusted content plus cross‑site powers equals account takeover.  
  
Notice how OpenAI's Agent/Operator and Anthropic's Computer Use run in sandboxed browsers and pause for sensitive steps. They isolate the agent from your real tabs. [@PerplexityComet](https://x.com/PerplexityComet) didn't, and Brave's timeline still mentions residual issues as of last week.  
  
If we want agentic browsing to work, treat the model as untrusted and gate everything.  
  
Use per‑task ephemeral profiles and per‑origin capabilities. Default‑deny tool calls. Require human attestations for email or money. Add strict egress policies and a deterministic policy layer between model and tools. Normalize and verify URLs (trailing‑dot bugs are a thing, yes, really). And never mix page content and user intent in the same channel. And from the model's perspective, system/developer/user message separation is stricter.  
  
What safety invariant should be non‑negotiable? Mine: no cross‑origin actuation without an explicit per‑origin grant and a clear user gesture.  
  
We can build this, but it needs boring, layered engineering and honest limits.

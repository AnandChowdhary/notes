---
title: Agent integration as protocol
date: 2025-09-03T23:15:12.895Z
url: https://x.com/AnandChowdhary/status/1963380236814618660
---

It's fantastic that we got Claude Code in [@zeddotdev](https://x.com/zeddotdev), which is treating agent integration as a protocol:  
\- LSP split language brains from IDEs  
\- MCP split external data and tools from hardwiring  
\- ACP will split agent UX from model and tool lock-in  
  
In plain English: ACP runs your agent as a subprocess and speaks JSON RPC over stdio. It starts with a capability handshake, then streams updates.  
  
It reuses MCP types and forwards editor configured MCP servers, so the agent can call your tools with editor side permissions.  
  
Zed wraps the [@ClaudeAI](https://x.com/ClaudeAI) Code SDK behind this bridge. The adapter is open source and refreshingly small, which I like. I downloaded Zed again for the first time in forever, and it feels as fast as Sublime Text used to back in the day. And with Claude Code superpowers, you don't compromise on the AI experience anymore.  
  
ACP is more than glue. You get real-time multi-file edit visualization, multi buffer diff review, a live task list in the sidebar, and slash command workflows. The UX lives in the editor, not a terminal (we already knew this when Claude Code launched inside Cursor and became the best way to use Cursor).  
  
Still early. SSH projects are not supported yet. Plan mode and hooks are catching up to the SDK. Some first-party Zed agent perks like editing past messages, resume from history, and checkpointing are not there for external agents.  
  
Why I care: Protocols push teams toward real interoperability.  
  
Put ACP at editor to agent and MCP at agent to tools and you can swap agents without switching IDEs.  
  
That turns the UI surface into a commodity.  
  
The race shifts to agent quality, toolchains, and ops reliability.  
  
Good for devs. Good for teams.  
  
Will other editors adopt ACP or a compatible spec? This feels like a step in the right direction: <https://zed.dev/blog/claude-code-via-acp>

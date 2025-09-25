---
title: Strata enables cross app routing
date: 2025-09-24T13:45:10.226Z
url: https://x.com/AnandChowdhary/status/1970846938443718782
---

Been poking around [@Klavis\_AI](https://x.com/Klavis%5FAI) lately: It's an MCP layer that lets agents use thousands of tools reliably (App Store moment for MCPs?). The part I like is Strata. One MCP server that helps a single agent discover and route across many apps without melting its brain.  
  
What makes it click for me is progressive discovery. It gets past the 40 to 50 tool ceiling by going intent → capability → action. One front door, many backends. The agent stays focused while Klavis handles lookup, auth, and routing.  
  
Integrations look real. 50+ MCP servers with enterprise OAuth and Docker. Self host or use their managed option. GitHub, Gmail, Slack, Salesforce, and friends. Fewer brittle function calls to babysit.  
  
If you are building LLM agents, this feels like a solid base. Python, MCP first, stdio friendly. Quick start with pipx strata-mcp or pull ghcr Docker images. Backed by YC X25.  
  
Worth a look: <https://github.com/Klavis-AI/klavis>

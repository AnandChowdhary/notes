---
title: MCP graduation and interop updates
date: 2025-09-11T09:45:18.421Z
url: https://x.com/AnandChowdhary/status/1966075497072439503
---

MCP just graduated. OpenAI agents can call remote MCP tools with write actions, Anthropic launched an MCP Registry (preview), and Claude added constrained web\_fetch. Interop drops N^2 integrations to N+M with scopes and approvals.  
  
For founders, this means you implement your tool server once using MCP and every major model client can use it. No more one-off adapters for each provider and each team.  
  
It feels like moving from ad hoc webhooks to OAuth plus scopes. Clear contracts, standard IO, cheaper maintenance.  
  
Write actions turn agents from read-only copilots into systems that can change state. Gate them with scopes and human approvals and you get real automation without losing sleep.  
  
Think deploy, invoice, or ticket updates. Each action has a scope. You can require review, log every call, and keep least privilege by default.  
  
Anthropic's MCP Registry in preview is the missing discovery layer. A place to find, publish, and manage MCP servers instead of passing JSON manifests in Slack threads.  
  
Expect easier discovery across teams and better governance. Version pinning and allowlists are the next obvious asks on my list.  
  
Claude's constrained web\_fetch is the other half of the safety story. Fetch the web under tighter rules so your agent reads what you allow and nothing surprise-y.  
  
Useful for citations, price checks, and docs lookup. Bounded IO plus logs makes audits boring again, which is the dream.  
  
How to start this week:  
  
\- Wrap one internal service as an MCP server. Keep it small.  
\- Define scopes that map to real permissions you use today.  
\- Add an approval check for any write action.  
\- Test with OpenAI's agent runtime and Claude. One server, two clients.  
  
Are you going MCP-first for new tools? What is your policy for write actions in prod? Who owns the registry inside your org?  
  
Feels like the boring plumbing just arrived. Ship once, use everywhere, and keep security as a first-class citizen.

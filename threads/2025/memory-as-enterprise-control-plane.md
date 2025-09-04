---
title: Memory as enterprise control plane
date: 2025-09-03T15:15:13.788Z
url: https://x.com/AnandChowdhary/status/1963259444990746774
---

What caught my eye in Le Chat is the bet on MCP + user-governed, persistent Memory as the enterprise control plane. The race moves from model QoS to policy, observability, and trust across SaaS actions.  
  
Under the hood, Le Chat now speaks remote MCP with a directory and bring your own connectors. OAuth2.1 with dynamic client registration, bearer or basic auth, per function "Always Allow" prompts, and org level RBAC give teams real gates on tool calls.  
  
Admins can switch connectors on or off centrally, and audit logs live in the Enterprise tier. The directory covers GitHub, Atlassian, Linear, Notion, and Stripe today, with Snowflake and Databricks coming. You can point at any remote MCP server too.  
  
Their custom MCP skips dynamic tool discovery, resources, and prompt templates for now. That trims surface area but limits auto adaptivity. Memory shows up as a visible, user editable store: off switch, incognito, import from ChatGPT, and clear recall events. Mistral hints at a graph backed design. You can run it in Mistral Cloud or self hosted, so IT stays in the loop.  
  
MCP is not new, but choosing the open spec instead of inventing another plugin layer is a smart call. You get ecosystem gravity and cleaner interoperability out of the box.  
  
The real edge is governance. Per tool approvals, RBAC, and auditable on behalf actions make agent workflows something IT can say yes to. The risk is composition. "Always Allow," prompt template injection, and cross connector chains can turn a harmless read into a high impact write.  
  
Skipping dynamic discovery feels like a safety first maturity model. Versus ChatGPT Enterprise and Claude's MCP workbenches, Le Chat leans into portability, self host, and an EU friendly data story. The trade today is fewer deep vertical connectors, with more openness to third party MCP servers tomorrow.  
  
If MCP becomes the standard, connectors get commoditized. Differentiation moves to policy engines, signed tool definitions, capability scoping, and runtime isolation. Memory plus connectors nudges assistants toward stateful agents.  
  
That makes governance the hard problem: who can call what, when, and with what provenance. Expect a new stack tier around agent policy and observability with per call attestations, approval thresholds, tool namespacing, least privilege scopes, and kill switches.  
  
If Snowflake and Databricks arrive with fine grained ACL mapping and query tagging, Le Chat turns into a credible surface for data producing actions, not just RAG.  
  
Open questions I care about:  
1) Memory: what are precision, recall, and misattribution rates at scale, and how is PII or ephemeral data suppressed in the graph?  
2) MCP: how are remote servers vetted, version pinned, and namespaced to avoid tool squatting and consent fatigue?  
3) Governance: can admins enforce per connector caps like read only, rate limits, row level policies, and require a human in the loop for multi tool write chains?  
  
If Mistral lands these, Le Chat graduates from "chat with plugins" to an agent surface IT can actually manage. I'm optimistic, and I'll take fewer connectors today for a cleaner control plane tomorrow.

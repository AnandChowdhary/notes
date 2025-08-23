---
title: GitHub MCP server in navbar
date: 2025-08-15T05:45:07.910Z
url: https://x.com/AnandChowdhary/status/1956230629638668476
---

GitHub added their MCP server in the navbar, so I was curious about how they built it. It plugs real GitHub context into AI agents. Read code, search repos, manage issues and PRs, and trigger workflows with plain English.   
👨‍💻👇  
  
This feels like the missing link for my helper bots (less copy paste, more shipping). Setup was easy on my machine. One click install in VS Code 1.101 or newer, then toggle Agent mode next to Copilot Chat. You can also run it local. OAuth or a PAT both work. Runs in Claude Desktop, Cursor, and Windsurf too. The remote server is in Public Preview.  
  
Why I care: I want a bot to triage bugs, nudge reviews, and watch Actions runs. I want code insights from security and Dependabot alerts. I want quick repo search and commit history answers. This fits that list. Great for release copilots and multistep agent flows.  
  
Built in Go and follows MCP. Agents that speak MCP can call GitHub features under your org policies. Star count when I hit the button was 20,789 (yes, really). If you're wiring AI into your DevOps loop, take it for a spin: <https://github.com/github/github-mcp-server>

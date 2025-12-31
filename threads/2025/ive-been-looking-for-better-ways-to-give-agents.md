---
title: Ive been looking for better ways to give agents
date: 2025-12-16T22:15:03.240Z
url: https://x.com/AnandChowdhary/status/2001053483412431323
---

I've been looking for better ways to give agents "real" context from the tools we actually use, and @airweave\_ai is one of the more thoughtful takes on this I've seen. I hung out with the founding team last week and learned that the idea is simple but powerful. Instead of wiring your agent into every app separately (Notion, GitHub, Airtable, Postgres, Dropbox, and friends), you plug those apps into Airweave. It turns everything into a searchable knowledge base that agents can access over a standard interface. What I like is that it is not just a thin wrapper around a vector database. It handles auth, pulling data from third party tools, embedding, chunking, back-syncs, custom conditions, real time... the works, and then serving it via REST or as an MCP server. If you are building MCP based agents, Airweave basically becomes the backend that lets them "search any app". You can run it via Docker, get a dashboard, and use the Python or TypeScript SDKs to query your data like one big graph. For anyone building support copilots, internal agent tools, or workflow bots, this feels like the kind of boring-but-important infra you want to reuse instead of rebuilding every time.

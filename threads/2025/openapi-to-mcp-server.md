---
title: OpenAPI to MCP server
date: 2025-09-05T21:15:09.803Z
url: https://x.com/AnandChowdhary/status/1964074813292745016
---

I've been tinkering with MCP tooling lately, and this is neat. openapi-mcp-generator turns any OpenAPI 3.0+ spec into an MCP server. My favorite bit is that it generates a typed Node proxy so agents can call your existing REST API safely.  
  
The goodies: Zod validation from your schemas, auth via env vars for API keys, Bearer, Basic, OAuth2, and multiple transports like stdio, SSE with Hono, or StreamableHTTP. It even scaffolds a full project and adds browser test clients (yes, really).  
  
The flow is simple. Point it at a JSON or YAML spec and it emits TypeScript with clean MCP tool definitions. Prefer code over CLI? There's a tiny API too, getToolsFromOpenApi. Handy for wrapping internal services or a public SaaS.  
  
Why I like it: less glue code, strong runtime types, and a practical stack I already use, TypeScript plus Zod plus Hono plus SSE. Install globally, generate in minutes, drop into your agent setup. <https://github.com/harsha-iiiv/openapi-mcp-generator>

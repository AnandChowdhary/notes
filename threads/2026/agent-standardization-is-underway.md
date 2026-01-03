---
title: Agent standardization is underway
date: 2026-01-02T22:16:02.334Z
url: https://x.com/AnandChowdhary/status/2007214325321150779
---

It's funny how quietly the agent world is standardizing itself. AGENTS, CLAUDE, GEMINI .md etc. are basically becoming an accidental agent API. Not an OpenAPI spec, not a protobuf schema. Just… docs. But written in a way machines can reliably parse. You describe: - Goals and roles - Available tools and how to call them - Test commands and success criteria Turns out that is enough for agents to plug in and start doing useful work without a custom integration layer every single time. If this keeps going, every serious repo will ship "context primitives" by default. Not just README and CONTRIBUTING, but a contract for how autonomous collaborators should behave in this codebase. At that point, your repo is no longer only for humans with git installed, it becomes a negotiation space between: - Humans - House agents (your own automation) - Guest agents (external tools, vendors, copilots) This is the part where supporting AI stops meaning "we added a chatbot" and starts meaning "our product, infra, and repos are agent-readable by design". Your API docs taught humans how to integrate. Your AGENTS .md will teach everyone else.

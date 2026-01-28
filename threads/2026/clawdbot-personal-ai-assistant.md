---
title: Clawdbot personal ai assistant
date: 2026-01-27T10:43:03.820Z
url: https://x.com/AnandChowdhary/status/2016099629012811838
---

Clawdbot feels like one of the first personal AI assistant projects that actually means personal. Something you run yourself that shows up where you already are: WhatsApp, Telegram, Signal, iMessage, Slack, Discord, Teams, Matrix, and a bunch more. One always‑on assistant, your devices, your accounts, your data. What I really like is how opinionated it is about being an assistant instead of a toy. There's a local Gateway daemon that runs as a user service and a very CLI‑first flow: run clawdbot onboard, walk through setup, connect channels, pick models, define skills, done. The wizard even handles Anthropic auth and installs the background service so it just stays up. Under the hood it's modern Node 22+ and TypeScript, with npm/pnpm/bun support and proper multi‑model configs and failover. You can get started with a single global install, or go full dev mode with pnpm gateway:watch and TypeScript hot‑reloading. If "lives on my machine, answers everywhere" is your mental model for AI, Clawdbot is pretty close to that ideal.

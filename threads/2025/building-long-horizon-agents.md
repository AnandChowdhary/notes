---
title: Building long horizon agents
date: 2025-12-29T22:12:02.272Z
url: https://x.com/AnandChowdhary/status/2005763766898786484
---

We're slowly crawling out of chat into long-horizon agents that are supposed to do real work. Everyone built on the Lambda-style function per request model because it was easy. You send a prompt, you get a response, you glue it together with retries and queues and call it an agent. That works until you want something that lives for hours or days, keeps context, and doesn't forget what it was doing every 30 seconds. Now infra teams are rediscovering some very old ideas with new branding: - Durable execution so work survives crashes and deploys - Workflow semantics so you can actually model multi-step, branching tasks - Long-lived, actor-like processes that hold state and identity over time

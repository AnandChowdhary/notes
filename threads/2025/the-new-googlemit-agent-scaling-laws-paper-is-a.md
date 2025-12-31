---
title: The new GoogleMIT agent scaling laws paper is a
date: 2025-12-17T00:17:02.361Z
url: https://x.com/AnandChowdhary/status/2001084182370652664
---

The new Google/MIT "agent scaling laws" paper is a nice reality check for multi-agent hype. If you're a technical founder thinking "we'll just throw more agents at it", the data is… not on your side. Once a single agent gets past roughly 45% accuracy on a task, adding more agents mostly adds two things: - Coordination tax - A lovely 17.2× error amplification effect In other words, if your base agent is mid, your swarm will be extremely mid. Just more expensively. The interesting bit is where the real gains came from. They saw +80.9% performance not by cranking up the number of agents, but by changing how the task was structured and decomposed. Architecture and task design beat agent-count bravado. So if you're building an AI product, the takeaway is pretty familiar from engineering in general: - Fix the core loop before scaling - Spend more time on decomposition and interfaces - Treat "multi-agent" as an architectural tool, not a growth hack "Just add more agents" is the new "we'll just microservice it later."

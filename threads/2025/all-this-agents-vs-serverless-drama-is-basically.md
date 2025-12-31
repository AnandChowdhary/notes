---
title: All this agents vs serverless drama is basically
date: 2025-12-23T00:11:02.601Z
url: https://x.com/AnandChowdhary/status/2003257000302363038
---

All this "agents vs serverless" drama is basically us trying to cosplay long-running systems on top of 15 minute stateless functions. We took Lambda, said "what if this was a workflow engine," and then duct-taped retries, step functions, queues, and a JSON graveyard of state. It kinda worked. Until it really didn't. Tools like Temporal made the underlying truth very obvious. The real primitive you want is replayable, stateful execution. Code that looks like a normal function, but can survive deploys, crashes, and weeks of waiting on some external event, then pick up exactly where it left off. Not a 27-node Step Functions diagram that no one wants to touch after the original author leaves. Now Lambda Durable Functions is basically AWS saying, "yeah, okay, you weren't wrong." The question is: where does your durable state and execution model live? Everything else is just choreography around that choice.

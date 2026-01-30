---
title: Chunking is dead in rag
date: 2026-01-29T22:16:02.415Z
url: https://x.com/AnandChowdhary/status/2016998797822550133
---

Everyone yelling "chunking is dead" in RAG isn't saying "stop doing retrieval". They're saying maybe slicing your codebase into 512‑token meat cubes and praying to cosine similarity was a bad idea for most real projects. The solution? an agent that knows how to treat files like files: - open specific files - grep across the repo - roam the graph of imports, symbols, and references - expand context only when needed In that world, the vector DB stops being the main character and becomes what it should have been all along: a scalability tool. Use it when your corpus is too big, your latency budget is tight, or you need semantic recall across millions of artifacts. Not because that's what everyone does in RAG. If you're building an AI IDE or knowledge tool, this is the direction things are clearly moving toward. Agentic, file-centric workflows on top of your actual filesystem / repo structure, with vectors on the side. So yes, chunking is dead in the same way global variables are dead. You can still use them. But you probably don't want to build your whole product on them.

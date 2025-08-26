---
title: Memory as a git repo
date: 2025-08-25T05:45:09.926Z
url: https://x.com/AnandChowdhary/status/1959854505203540185
---

Found DiffMem by Growth-Kinetics on GitHub and I really like the idea: memory as a git repo. Current knowledge in markdown (I'm a sucker for plain text), history in commits, so an agent works off the now and can jump into diffs when it needs the backstory.  
  
As someone known for misusing git, what I like: Only current state files are indexed, which keeps BM25 fast and your context small. When time matters, it pulls targeted git logs or diffs to answer how this changed, instead of hauling a big vector store or scanning full history.  
  
Under the hood: Writer commits atomic updates, Context Manager builds basic or wide or deep or temporal context, and Searcher runs BM25 for explainable retrieval. Clean API with DiffM<emory.get>\_context and processand\_commitsession. Python 3.11+, no server.  
  
Prototype, but already useful.  
  
My own projects with the idea of "git as database" like:  
\- Upptime (16k+ stars) uses git for web response times  
\- stethoscope-js & AnandChowdhary/life stores life data in git  
\- And of course, all my work, blog posts, notes, ideas, events, this very tweet . . . everything lives in a git repo  
  
Feels right for long horizon agents, personal knowledge bases, and auditable workflows where you can branch, prune, and reconstruct past states.  
  
If you want durable, human readable, versioned memory without a database, this is worth a look: <https://github.com/Growth-Kinetics/DiffMem>

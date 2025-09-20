---
title: Postgres in the browser
date: 2025-09-19T09:45:13.990Z
url: https://x.com/AnandChowdhary/status/1968974617315590380
---

Sharing a neat project I'm excited about: PGlite by ElectricSQL. Real Postgres compiled to WebAssembly with a tiny TypeScript client. Runs in the browser, Node, Bun, and Deno with no VM. Postgres in the browser (yes, really) with reactive bindings.  
  
What I like: around 3 MB gzipped, persistence via IndexedDB in the browser or the filesystem on Node or Bun or Deno, and support for extensions like pgvector. Also spins up in memory for quick tests and demos.  
  
The clever bit. Postgres usually forks per connection, which is off limits in WASM. PGlite uses single user mode plus a JS I/O bridge to run in one process. The tradeoff is a single connection, but you keep real Postgres semantics.  
  
Use it with a clean TS API like <db.query>(...). Handy for offline and local first UX, edge friendly setups, and rapid prototyping. It's alpha, so expect a few gotchas. I'm trying it in a weekend project. Repo: <https://github.com/electric-sql/pglite>

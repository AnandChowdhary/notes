---
title: TypeScript type stripping by default
date: 2025-08-19T09:45:07.287Z
url: https://x.com/AnandChowdhary/status/1957740576574697702
---

Skimming [@nodejs](https://x.com/nodejs) v22.18 LTS notes and I'm so excited about TypeScript type stripping on by default. Erase-only, position-preserving, no tsconfig or source maps. Small runtime surface. Big DX win for TS devs!  
  
Under the hood, Node uses Amaro to strip types by replacing them with whitespace. Offsets stay intact, so stack traces line up. No type checking at runtime. You can opt out with --no-experimental-strip-types.  
  
If your TS needs code generation like enums or namespaces, use --experimental-transform-types. Node doesn't read tsconfig, doesn't honor path aliases, and refuses TS in node\_modules by default. Type imports should be import type. Predictable runtime over magic.  
  
I like the philosophy. Compared to runtimes that transpile TS, this is a conservative erasable-syntax-only path. Zero build for simple scripts. Stable semantics.  
  
There are tradeoffs. TS in REPL or inspector isn't supported. Decorators and using aren't polyfilled. If you rely on more than syntax erasure, you still want a build step and your type checks in CI.  
  
Also in this LTS:  
\- <import.meta.main> for ESM entry detection, the nice counterpart to <require.main> \=== module.  
\- Worker is AsyncDisposable, so you can do await using for clean teardown.  
\- Permission model flags now carry over to spawn and fork, plus <permission.has>('addon').  
\- url adds fileURLToPathBuffer to keep non‑UTF‑8 bytes.  
fs events iterator handles bursts better.  
  
🔗 <https://nodejs.org/en/blog/release/v22.18.0>

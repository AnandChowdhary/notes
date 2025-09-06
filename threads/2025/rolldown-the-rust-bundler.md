---
title: Rolldown the Rust bundler
date: 2025-09-05T13:45:10.178Z
url: https://x.com/AnandChowdhary/status/1963961568775057697
---

Rolldown caught my eye today. It's a Rust-powered bundler for JavaScript and TypeScript with a Rollup-compatible API, aiming to be Vite's future bundler. Familiar ergonomics with a scope closer to esbuild. Fast where it matters, familiar where you want it. I like that combo.  
  
The bit that stands out to me: you keep your Rollup config and plugins, but the core is lean and performance-first in Rust. It focuses on bundling, not a dev server. Smaller surface area, tighter pipeline. Feels pragmatic.  
  
Under the hood: Node-API bindings via napi-rs. Parsing, resolution, and sourcemaps by oxc. Prebuilt binaries for macOS, Linux, Windows, and even a wasm32-wasi target (yes, wasm!). It's in beta, and built-in minification is still alpha, so expect some edges.  
  
If you're on Vite or moving from Rollup, this looks like a solid path to faster production builds with familiar APIs. Rust core, clean interfaces, and thoughtful docs. Worth a look. 11.8k⭐ and growing. Repo: <https://github.com/rolldown/rolldown>

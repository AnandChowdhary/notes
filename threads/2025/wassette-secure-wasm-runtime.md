---
title: Wassette secure wasm runtime
date: 2025-09-18T21:15:09.774Z
url: https://x.com/AnandChowdhary/status/1968785855520407787
---

Been playing with a neat project from Microsoft called Wassette. It is a security first runtime that lets AI agents run WebAssembly components via MCP. The bit that hooked me is you can add tools right from chat, and they run inside a Wasmtime sandbox with an explicit permission model.  
  
Components are just Wasm, so they are reusable. You can load from OCI registries or from disk. It ships handy built in tools to load or unload, list or search, and grant storage, network, or env access. Everything is explicit and easy to audit. My kind of boring security.  
  
Setup took a couple of minutes on my Mac. One line install works, or brew or nix, and there is winget on Windows. Then register it as an MCP server with serve --stdio. Works with Copilot in VS Code, Cursor, Claude Code, and the Gemini CLI. I tried the time component from oci:<//ghcr.io/yoshuawuyts/time:latest> and asked for the current time in chat. It just worked.  
  
Why I am excited about this: Rust with Wasmtime isolation, OCI distribution, and MCP gives a portable least privilege tool layer for agents. Safe I/O and networking without giving the model the keys to my machine. Worth a look: <https://github.com/microsoft/wassette>

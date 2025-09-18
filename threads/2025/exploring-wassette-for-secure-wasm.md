---
title: Exploring Wassette for secure Wasm
date: 2025-09-17T15:15:10.592Z
url: https://x.com/AnandChowdhary/status/1968332873607643326
---

Been exploring Wassette from Microsoft. A security oriented runtime for WebAssembly components via MCP. The neat bit: you add new sandboxed tools to an AI agent from inside the chat window (yes, really). Rust based, with a focus on reuse and safety.  
  
Runs on Wasmtime. Each component lives in a browser grade sandbox with explicit permissions for network, storage, and env vars. You can load and unload at runtime, search known components, and pull from OCI like oci:<//ghcr.io/yoshuawuyts/time:latest.> Components stay generic, not MCP specific.  
  
Plays nice with Copilot in VS Code, Cursor, Claude Code, and Gemini CLI. Install is simple: curl pipe bash if that's your thing, or Homebrew, WinGet, or Nix. Add it as an MCP server with code --add-mcp and start loading components as tools.  
  
Why this is interesting to me: strong isolation, clear capability grants, and portable Wasm components make agent tooling feel safer and composable.  
  
Clean stack too: Rust, Wasmtime, MCP, OCI.  
  
Repo: <https://github.com/microsoft/wassette>

---
title: Codex cli offers coding buddy
date: 2025-09-28T09:45:09.542Z
url: https://x.com/AnandChowdhary/status/1972236089130955222
---

Been trying Codex CLI from OpenAI and it's a neat one: a lightweight coding agent that runs locally in your terminal. Install with npm i -g [@openai](https://x.com/openai)/codex or brew install codex, then sign in with your ChatGPT plan or use an API key. Feels like having an on-call dev buddy in the shell.  
  
I like the safety model a lot. It sandboxes changes and asks for approvals before touching files. You can give it memory with AGENTS.md. The CLI is clean, and it can run one-off prompts non interactively. Great for refactors, tests, scaffolding, and quick bug fixes from the terminal.  
  
Under the hood it's a Rust CLI with rich config at \~/.codex/<config.toml>, a Zero Data Retention option, verbose tracing, and Model Context Protocol support to plug in custom tool servers. There's CI mode too, plus headless login for remote machines.  
  
If you live in tmux or just want a fast agent loop without leaving the terminal, this clicks. Editor grade capabilities, sensible guardrails, and cross platform releases. Worth a look: <https://github.com/openai/codex>

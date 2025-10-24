---
title: Diny the commit message assistant
date: 2025-10-23T09:45:03.846Z
url: https://x.com/AnandChowdhary/status/1981295797900841463
---

I've been trying to make my commit messages less "wip" this year, so this caught my eye: diny, a tiny Go CLI that looks at your staged diff and writes clean, conventional-friendly messages. No API key, runs local via Ollama, and drops into a normal git flow.  
  
What I like: it only reads staged changes, filters lockfiles and binaries, proposes concise messages, and has an interactive loop that learns from your feedback. You can edit before committing, use draft mode, or stash the message for later when your brain has already moved on.  
  
Thoughtful touches: a git alias so you can run "git auto", LazyGit integration, a timeline that summarizes your commit history, and 10 plus themes. Built with Cobra in Go and uses Ollama locally for speed and privacy. Piping works too: diny commit --print | git commit -F -  
  
If you want consistent commits without context switching, diny is worth a look. Local LLM, fast CLI, smart diff parsing, easy installs with brew or scoop. Repo: <https://github.com/dinoDanic/diny>

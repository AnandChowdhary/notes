---
title: Blaming prompts instead of commits
date: 2026-05-14T09:43:03.110Z
url: https://x.com/AnandChowdhary/status/2054860028172218774
---

Git is the wrong unit of history for coding agents. A commit is the thing you decided to keep. An agent run is the messy search path: prompts, tool calls, deleted files, failed attempts, weird rewrites. I want blame and undo before that mess gets squashed into a clean PR. re\_gent is a good stab at this for Claude Code: log, blame, checkout, and replay around agent actions. Less "who changed this line". More "which prompt caused this mess, and can I rewind it?" https://github.com/regent-vcs/re\_gent

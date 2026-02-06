---
title: Autosave meets Git history
date: 2026-02-05T22:18:05.375Z
url: https://x.com/AnandChowdhary/status/2019536016890347554
---

When autosave in web editors started feeling smarter than my muscle memory of hitting Cmd+S in Vim, it raised a fun question: if Google Docs can quietly save everything, why can't I get that same comfort but with git's clean history and diffs for my writing? 📝👇 In 2019 I tried to answer that with GitWriter. It was a tiny experiment: a frontend-only Vue + TypeScript PWA on Netlify that talked directly to the GitHub API with a personal access token. You picked a repo and file, wrote in Markdown, and it turned your typing into a stream of commits. GitWriter assumed one author, no live collaboration, and git as the single source of truth. In hindsight, you can see the same "Google Docs in git" idea show up in Obsidian sync, Git-based CMSs, and docs-as-code pipelines. The open question is still the same: when does prose want to behave like code, and when do you actually want comments, suggestions, and all the messy shared state of cloud docs? Full post: https://anandchowdhary.com/blog/2019/google-docs-github

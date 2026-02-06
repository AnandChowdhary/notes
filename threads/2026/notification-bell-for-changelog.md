---
title: Notification bell for changelog
date: 2026-02-05T10:44:17.817Z
url: https://x.com/AnandChowdhary/status/2019361406341292072
---

Looking back at Changebar, a tiny widget I hacked together in early 2019, I was chasing a very specific itch: every product already has a changelog sitting quietly in GitHub, but almost nobody pipes that story into the actual UI. I wanted a "notification bell for your CHANGELOG” that you could drop into any frontend without spinning up a backend 🔔👇 The constraint was fun: treat GitHub as the database and Staticaly as a read-only file system. On init, Changebar grabs the latest commit via the GitHub API, hits a CDN URL for that exact CHANGELOG\\.md, parses semantic headings into "notifications," and uses localStorage to remember what you've already seen. The UI glue is just CSS classes and attributes like \`changebar-has-unread\` and \`data-unread-count\`. Some parts aged badly: a brittle dependency on a third-party CDN, no tests, and an imperative API that never grew events or GitHub Releases support. But the core idea still holds up in 2026: ship your product narrative from the same place you ship code. If I rebuilt it now, I'd lean on GitHub Releases, edge functions, typed events, and more graceful failure modes. Repo: https://github.com/AnandChowdhary/changebar

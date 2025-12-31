---
title: Stumbled on ReadyKit and its the exact same idea
date: 2025-12-10T00:12:02.424Z
url: https://x.com/AnandChowdhary/status/1998546209267659069
---

Stumbled on ReadyKit and it’s the exact same idea I’ve had for years. Every time I start a SaaS, I end up rebuilding the same pile of stuff again and again. Workspaces, permissions, billing, OAuth, background jobs, Docker. You know, all the “boring but if you mess it up, everything breaks” parts. I built Staart around 7 years ago to solve this problem but never took it forward. ReadyKit is basically a serious Flask SaaS starter that actually leans into that problem. Out of the box you get multi-tenant workspaces, Stripe billing, Google/GitHub login, teams with roles, and a modern stack with Flask 3.1, Vue 3, Vuetify, Postgres, Redis, Celery, and Nginx. My favorite idea in here is how multi-tenancy is handled. Solo users never have to think about workspaces, they just sign in and use the app. Teams appear only when you need them, but the tenant boundaries are still there in the data model. Very indie-maker friendly. If you like Flask and want to skip infrastructure yak-shaving, this looks like a pretty solid base to start from: https://github.com/level09/readykit

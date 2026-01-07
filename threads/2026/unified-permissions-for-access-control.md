---
title: Unified permissions for access control
date: 2026-01-06T22:14:04.993Z
url: https://x.com/AnandChowdhary/status/2008663372804563238
---

Found this in my notes from November 2017: "Have permissions as a flow. if (hasPermission("admin", STARTUPID)) then let her do things; is\_su, is\_founder, is\_owner, etc. Can also add permission manager." I had this idea of building a unified RBAC layer; today several startups do this." 🔐👇 Back then, most products had ad-hoc checks scattered across the codebase. Identity was centralized with OAuth, but authorization was copy paste glue. This tiny note was basically make permissions a single flow instead of a hundred if-statements. What aged well is the instinct to centralize one question: "Can this user do X on Y right now?" Contextual roles like admin, founder, owner hinted at org-level, time-bound access, which is exactly what modern permissions infra startups now package as policy engines, dashboards, and audit logs. What we all underestimated is how gnarly this gets when you try to make it generic: tenants, row-level access, attributes vs roles, and performance when every request becomes a policy eval. Here's the original note from 2017: https://github.com/AnandChowdhary/notes/blob/main/notes/2017/have-permissions-as.md

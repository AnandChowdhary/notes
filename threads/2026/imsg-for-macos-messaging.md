---
title: Imsg for macOS messaging
date: 2026-01-30T22:11:05.064Z
url: https://x.com/AnandChowdhary/status/2017359926730101160
---

Every once in a while I stumble on a project that solves a very specific itch in a surprisingly elegant way. imsg is one of those. It is a small Swift CLI that gives you programmatic access to iMessage and SMS on macOS, backed by the Messages app database. You can list chats, pull message history, or even "watch" conversations in real time, and then emit everything as JSON. That last bit is what makes it really interesting to me, because it means you can plug Messages straight into your own tooling, scripts, or agents without weird hacks. I like how respectful it is of the system. Reads are done in read‑only mode from \`chat.db\`, sending uses AppleScript instead of private APIs, and it still manages to handle all the boring details like E.164 phone normalization and attachment metadata. There is also a core Swift library, IMsgCore, behind the CLI. So you can either use the binary in shell workflows, or pull the library into your own macOS app or background helper and treat Messages as just another data source: https://github.com/moltbot/imsg

---
title: Sandboxing AI agents safely
date: 2026-01-29T00:19:04.976Z
url: https://x.com/AnandChowdhary/status/2016667362934870092
---

Found a really clever little project for anyone playing with AI coding agents: yolo-cage by @borenstein. What I like about it is that it doesn't try to solve AI safety with more pop-up prompts. It assumes the real problem is you, at 11:30 p.m., mindlessly hitting "yes" on everything. So instead of asking for permission every time, it just locks the agent into a sandbox and limits how much damage it can do. Under the hood it spins up a VM, runs your agent in a pod, and routes everything through two chokepoints: a dispatcher for git / GitHub commands and an HTTP(S) proxy for outbound traffic. It can't merge PRs, can't touch other branches, can't spray your API keys to pastebin. The nicest touch for me is the honesty in the README. It reduces risk, it doesn't pretend to eliminate it. For anyone who wants to run agents in "YOLO mode" without actually yolo-ing their whole GitHub, this is worth a look: https://github.com/borenstein/yolo-cage

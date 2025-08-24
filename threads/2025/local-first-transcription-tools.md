---
title: Local first transcription tools
date: 2025-08-19T23:15:01.732Z
url: https://x.com/AnandChowdhary/status/1957944420369920195
---

Been thinking about moving more of my workflow to local-first tools this year, and [@epicenter\_so](https://x.com/epicenter%5Fso) from YC S25 seems like it may hit the sweet spot for me. Press shortcut → speak → get text, and everything lands in one shared memory folder, plain text plus SQLite. You own the data, can use any model, and it is open source. Fast and simple.  
  
Whispering is the headliner: Desktop transcription that lives on your machine is great. Hit a hotkey, talk, get text. Bring your own API key, keep files local, and it runs on macOS, Windows, and Linux in a Tauri plus Rust shell. No web round trip.  
  
Since it is just text and SQLite, you can grep it, open it in Obsidian, or sync it however you like. No silos.  
  
Why devs might enjoy this: unified open storage instead of app silos, model agnostic by design, and a modern stack with Svelte 5 and SvelteKit, TypeScript, Tauri and Rust, Tailwind, TanStack Query: <https://github.com/epicenter-so/epicenter>

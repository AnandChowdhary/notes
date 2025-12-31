---
title: Looking back at Uppload in 2018 add an image upl
date: 2025-12-15T14:44:02.815Z
url: https://x.com/AnandChowdhary/status/2000577595948294304
---

Looking back at Uppload in 2018, "add an image uploader" sounded trivial, but in practice it was chaos. Every app wanted the same thing: pick a photo from anywhere, tweak it a bit, send it to yet another custom backend. The options were clunky jQuery widgets tied to one service or hand-rolled hacks around file inputs and canvas. 📁👇 Uppload's idea was to turn this into a front-end pipeline. "Services" handled where images came from (local files, camera, Unsplash, Instagram). "Effects" handled what you did to them (crop, rotate, filters). "Uploaders" handled where they went (XHR, Firebase, custom endpoints). No backend assumptions, just a last-mile hook you controlled. The TypeScript rewrite, plugin system, and a‑la‑carte bundling aged pretty well. The mental model still makes sense, and tree-shaking plugins is now standard practice. The rougher bits were wide browser support and maintaining lots of third-party integrations, which is a full-time job on its own. If I built it today, I'd ship headless primitives and framework-first components, add a thin modal on top, lean on modern browser APIs, and keep "import from X" as community extensions. Uppload on GitHub: https://github.com/elninotech/uppload

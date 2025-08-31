---
title: Constraints shape the architecture
date: 2025-08-30T13:45:09.641Z
url: https://x.com/AnandChowdhary/status/1961787239169683563
---

Pre- Flexbox and CSS Grid, equal height cards in a responsive grid meant floats, clearfix, and a bit of JS. On Dec 25, 2015 I shipped One Grid, under 1 KB, for fixed-height infinite blocks. Christmas day hack, yes really. The quiet lesson: constraints pick the architecture. 📐👇  
  
How it worked:  
• Layout: floats plus a micro clearfix. Gutters with negative container margins and child padding using border box.  
• Height: tiny JS grouped cards by visual row via offsetTop and set the max height inline.  
• Behavior: debounced resize and reflow. No deps.  
  
Tradeoffs:  
• Source order controlled layout  
• Forced reflow on measure, thrash on long lists  
• Late images and webfonts needed another pass  
  
What aged well vs not:  
• Well: a strict bytes budget under 1 KB forced clarity. Zero tooling kept adoption simple.  
• Not: floats, clearfix, and JS equalization. Today I would reach for Grid or Flex with gap, align items stretch, grid auto rows, aspect ratio, and object fit. Less jank and better a11y. Bigger lesson: pick primitives that are converging and design to delete code later.  
  
If I built it today I would use grid template columns repeat auto fill with minmax, gap for gutters, aspect ratio for tiles, and maybe container queries instead of page wide breakpoints.  
  
Here's the project: <https://github.com/AnandChowdhary/one-grid>

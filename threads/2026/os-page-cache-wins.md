---
title: OS page cache wins
date: 2026-03-23T10:42:03.503Z
url: https://x.com/AnandChowdhary/status/2036030708456825192
---

Someone built a pure C/Metal inference engine that runs a 397B parameter MoE model on a MacBook with 48GB RAM at 4.4 tokens/sec. The entire 209GB model streams from SSD, loading only the 4 active experts per layer on demand (\~6.75MB each). The best part? They tried every fancy caching strategy (custom LRU, compressed cache, Metal LRU) and the winner was... just letting the OS page cache handle it. 71% hit rate, zero complexity. Sometimes the most sophisticated engineering decision is choosing not to engineer something. https://github.com/danveloper/flash-moe

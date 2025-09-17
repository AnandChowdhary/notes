---
title: Tiny lazy loader for images
date: 2025-09-16T09:45:15.602Z
url: https://x.com/AnandChowdhary/status/1967887435481972994
---

In 2016 I shipped a 555 byte JavaScript lazy loader to stop image jank on long scroll pages. Half a kilobyte, yes really. The goal was simple: load images only when you were about to see them, save bandwidth, keep the main thread calm. 🖼️ 👇  
  
Built on March 12, 2016\. No native lazy loading. IntersectionObserver was not reliable across browsers. Most people were on HTTP/1.1 and 3G. There were plugins like lazysizes and many jQuery add ons, but I wanted zero deps and under 1 KB. Drop it in and move on.  
  
Core loop: one scroll, resize, and orientation listener, throttled with requestAnimationFrame. For each tracked image, read getBoundingClientRect. If it was inside the viewport plus a small threshold, copy data-src to src, then stop tracking it. I ran a pass on DOMContentLoaded and on load for the first sweep.  
  
To stay tiny I skipped MutationObserver and any srcset or picture parsing. That saved bytes, but dynamic content needed a manual re init and responsive images could pick poor candidates. Transforms and overflow scrollers sometimes lied about bounds, so a few images popped late. Simple API, hidden footguns.  
  
Today you can use loading="lazy" for images and iframes. Set fetchpriority="high" on your LCP image and reserve space to avoid CLS. Use IntersectionObserver when you need custom thresholds or non image content. Small libraries should follow the platform, not fight it. Bonus lesson: delete code when the spec lands.  
  
Open questions: where do we still need custom lazy strategies, like canvas heavy UIs, virtualized lists, or video. What heuristic keeps LCP safe while saving bandwidth. If I wrote this now, I would wrap the platform and add telemetry hooks to learn from real pages. Here's the project: <https://github.com/AnandChowdhary/555-lazy-load>

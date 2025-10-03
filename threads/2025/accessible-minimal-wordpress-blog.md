---
title: Accessible minimal WordPress blog
date: 2025-10-02T09:45:09.387Z
url: https://x.com/AnandChowdhary/status/1973685640517804495
---

Back in 2017 I kept asking myself: how minimal can a WordPress blog be and still be a joy to read and accessible? I built Access to find out. Writing first, no fluff, based on \_s, accessibility baked in. Constraint was the feature. It aged better than I expected. ✍️👇  
  
I shipped it on April 2, 2017\. Pre Gutenberg. Classic templates ruled. Page builders were heavy. Jekyll and Hugo were tempting, but I wanted WordPress with a disciplined reading experience. The brief was simple: elegant defaults and zero configuration. Install and write.  
  
Architecture: I started from \_s to inherit clean markup, skip links, focus styles, and the WordPress template hierarchy. Keep PHP tiny. Enqueue one stylesheet and a small nav script. Register menus, thumbnails, and a custom logo. Nothing else.  
  
Design: System fonts for instant paint, a conservative rem type scale, generous measure and line height, strict color contrast. No sliders, no shortcodes, no options page. Just a couple of Customizer toggles to avoid settings creep.  
  
Tradeoffs: easy to fork but harder to brand, skipping webfonts killed layout shift but muted personality, leaning on core hooks kept code small and later clashed with block era habits.  
  
Maintenance reality: small user base, few issues. Most work was tracking WordPress changes and fixing CSS regressions. PHP 7 was fine. PHP 8 and the Block Editor showed where classic templates leak assumptions.  
  
If I rebuilt today I'd ship a block theme with <theme.json> and CSS variables, no jQuery, or go static with MDX and Next when a CMS is overkill.  
  
What survived: typography is product, keep the surface area tiny, let the platform do the heavy lifting.  
  
Open questions I still think about: should opinionated minimalism live in <theme.json> or in blocks? How far can no settings go before adoption drops? What metrics capture reading comfort beyond Lighthouse and bundle size?  
  
Here's the project: <https://github.com/AnandChowdhary/access>

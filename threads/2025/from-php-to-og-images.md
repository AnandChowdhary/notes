---
title: From PHP to OG images
date: 2025-12-31T00:19:13.314Z
url: https://x.com/AnandChowdhary/status/2006158113704141195
---

Found this in my notes from November 2017: "SEO image generator using PHP, text on background image generation." Back then it was literally "take title text, render it on a background, save a JPG for social." Today, that sounds a lot like Vercel's og-image and friends 🖼️👇 In 2017, Twitter Cards and Open Graph were everywhere, but most previews were static. Maybe a logo, a blog cover, rarely anything dynamic. A SEO image generator felt like a tiny DX improvement, not a product category. Just a PHP script, GD or ImageMagick, and some cron glue. Fast forward. Now we treat these as link preview surfaces. They are branded, dynamic, sometimes even show live data. The stack moved from PHP scripts to headless browsers, serverless functions, and edge runtimes, but the core idea is the same: turn metadata into a visual. The interesting shift is where this logic lives. I imagined it as per-project utility. Today it is closer to shared infra you plug any URL into. Makes me wonder which "just a script" ideas from today will quietly become tomorrow's primitives. Here's the original note from 2017: https://github.com/AnandChowdhary/notes/blob/main/notes/2017/mwlii-seo-image.md

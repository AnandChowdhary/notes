---
title: In 2017 I was about to start Creative Technology
date: 2025-12-30T22:14:07.860Z
url: https://x.com/AnandChowdhary/status/2006126657413996752
---

In 2017, I was about to start Creative Technology at the University of Twente and just wanted one professor's contact details. Then I opened DevTools and realized the "search staff" box was just a public JSON API with full profiles. 📇👇 A single GET to /search?query=a returned names, emails, phones, offices, even GPS coordinates, with no authentication or rate limiting. So I did what any curious student would do: used Bash brace expansion to hit aa–zz with wget, deleted empty 43-byte JSON files with find -size 43c, concatenated everything, and cleaned it up into a CSV. A few shell commands later, my phone had thousands of staff contacts. None of this was "hacking" in a technical sense. It was a reminder that open, unauthenticated REST APIs plus weak assumptions about CORS basically invite bulk scraping. The university later locked things down, which was the right move. The bigger question that still sticks with me is where we draw the line between "public directory" and "too easy to harvest." Full post: https://anandchowdhary.com/blog/2017/utwente-peoplepages

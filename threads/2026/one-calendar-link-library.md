---
title: One calendar link library
date: 2026-01-20T00:11:05.044Z
url: https://x.com/AnandChowdhary/status/2013403858274333071
---

In early 2019 I pulled a tiny but annoying problem out of multiple projects and turned it into calendar-link - and it now gets 150k+ weekly downloads. It solved one thing: take an event object and spit out the right "add to calendar" URL for Google, Outlook, Yahoo, or an .ics file. 📅👇 Back then, every provider had its own fragile deep link format. People were copy pasting URLs from random blog posts, dealing with broken time zones, and hoping recurring events worked. I wanted a single, TypeScript friendly API where you call google(event), outlook(event), yahoo(event), or ics(event) and forget the rest. Under the hood, it is basically "event in, URL out," with all the weirdness hidden in small pure functions. Time zones needed a "please use UTC" rule, guests only worked on some providers, rRule recurrence was supported in a few places, and mobile vs desktop Outlook behaved differently. If I did it today, I would lean more on .ics as the canonical format and treat vendor URLs as best effort. The core lesson still holds though. Small infrastructure libraries work best when the internal model is simple and boring, even if the world around them is not. https://github.com/AnandChowdhary/calendar-link

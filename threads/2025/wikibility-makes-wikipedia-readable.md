---
title: Wikibility makes Wikipedia readable
date: 2025-10-15T23:15:14.117Z
url: https://x.com/AnandChowdhary/status/1978600533331247272
---

Wikipedia's content is amazing, but in 2017 the reading flow made my brain bounce between sidebars, footnotes, and tiny type. I built Wikibility, a small AngularJS client that puts typography, contrast, and hierarchy first. Basically: make it feel like a book. 📚👇  
  
I'm revisiting old projects to see what they taught me. This one is from September 18, 2017 in my first year web design course. Single page apps were everywhere, AngularJS was still in classrooms, dark mode wasn't mainstream, and accessibility often meant ARIA sprinkles instead of getting the basics right. Mobile was slower, so every kilobyte counted.  
  
How it worked: a tiny AngularJS app with two routes, search and article, powered by the MediaWiki API. No backend. The constraint forced discipline. Keep JS small and do the heavy lifting in CSS and layout. Treat article HTML as untrusted. Intercept, sanitize, then restyle.  
  
Implementation details:  
\- Typographic scale with a 66-72ch measure to lower cognitive load  
\- Higher line height, more spacing, predictable heading hierarchy  
\- High contrast themes and larger tap targets  
\- Persistent table of contents on wide screens  
\- Dark theme as a first class variant, not an afterthought  
\- Simple controllers for state, most features lived in CSS  
  
What I learned: accessibility starts before ARIA. It's color systems, spacing, density, and headings. You can delete more JS than you think if the text is designed well.  
  
Real talk, there were hacks:  
\- MediaWiki HTML isn't a stable design system, one upstream change broke selectors  
\- Restyling infoboxes and tables was brittle, local a11y improved, maintenance cost spiked  
\- Client side skinning drifted from upstream and updates fought my CSS  
\- Anchor links needed offsets because of sticky headers  
  
If I did it today, I'd:  
\- Render on the server and transform content with a strict HTML contract, or use Wikimedia's mobile HTML  
\- Use CSS custom properties and prefers-color-scheme instead of separate theme files  
\- Add automated a11y tests with axe and visual regression to catch upstream drift  
\- Set performance budgets and a CSP from day one  
  
Lesson that stuck: reduce surface area. The more you override, the more you own.  
  
Open questions I still think about:  
\- When should we fork UX from a source site versus contribute upstream?  
\- How can clients harden against upstream HTML churn without forking content?  
\- What's the minimal CSS that makes dense knowledge feel effortless?  
  
Screenshots in the repo if you're curious. Here's the project: <https://github.com/AnandChowdhary/wikibility>

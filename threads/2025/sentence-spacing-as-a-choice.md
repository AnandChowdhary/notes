---
title: Sentence spacing as a choice
date: 2025-10-06T13:45:12.682Z
url: https://x.com/AnandChowdhary/status/1975195591404888191
---

I wrote about sentence spacing back in 2015\. The gist: two spaces started with typewriters using monospaced fonts. In proportional type, extra space usually turns into visual noise. In monospaced contexts, it was a quick way to mark sentence boundaries. Treat it as a tooling choice, not a moral code. ⌨️👇  
  
My stance then (and mostly now): the typist might like two spaces, the typographer shouldn't. Proportional fonts already encode rhythm. On the web, browsers collapse runs of spaces, so forcing doubles is brittle. A NASA friend, Robert Frost, told me two spaces make scanning easier. Fair point from a different environment.  
  
Under the hood: proportional fonts balance sidebearings and kerning to set word rhythm. Adding a literal extra space fights that. HTML collapses whitespace by default. To preserve it, you reach for nbsp, br, or CSS white-space. TeX historically widened sentence spacing unless you enable frenchspacing. Modern engines like InDesign, CSS layout, and HarfBuzz optimize spacing and justification across the line, where double spaces can create rivers, especially when fully justified. In terminals, logs, and code comments, two spaces can still be a simple delimiter.  
  
Since 2015, style guides moved to one space. APA 7 (2019) says one. Microsoft Word started flagging double spaces by default around 2020\. Slack, GitHub Markdown, and browsers still collapse extras. Studies show a small speed bump for folks who already prefer two, with tiny comprehension gains. Font quality, contrast, and line length usually matter more. Accessibility tradeoffs remain: big gaps can break justification, but consistent cues can help on constrained displays.  
  
Open questions I'm curious about: Should clarity come from punctuation design, font metrics, or author habit? Would a sentence-spacing axis in variable fonts or a CSS-level control help without breaking layouts? Any solid gains for specific readers, like low-vision or dyslexic users? Original post for context: <https://anandchowdhary.com/blog/2015/one-space-after-a-period>

---
title: Invisible translate widget
date: 2025-10-15T13:45:16.993Z
url: https://x.com/AnandChowdhary/status/1978457100423741819
---

Back in 2017 I built an "invisible" Google Translate widget. Looked like a tiny UX win, but the real pattern was simulating control over a black-box iframe and living with the tradeoffs between control, compliance, and breakage. 🌐👇  
  
Context from July 11, 2017: teams wanted brand-matched translation without Google's stock UI, budgets were thin, and i18n wasn't first-class in most stacks. So I hid the official widget and "clicked" it via my own selector to get free translation in our own style.  
  
How it worked: load the Translate element, hide its UI, mirror a custom dropdown, then dispatch events into the widget's exposed nodes inside its container. Wins were clear: on-brand UI, zero API billing, instant coverage across languages.  
  
The costs were real: brittle DOM hooks when upstream changed, a11y issues with focus and ARIA, browser quirks and CSP rules, unclear consent for sending page text out, and ToS gray areas.  
  
What changed by 2025: browsers ship native page translation prompts, frameworks ship i18n routing and pre-rendered locales, MT services improved with quality and controls, and privacy laws raised the bar on disclosure and consent.  
  
The lesson that stuck: simulated control is a maintenance and compliance tax you keep paying. Prefer stable interfaces, meet users in the browser, and be explicit about data flows.  
  
Open questions for 2025: can we offer a site-level translate affordance that defers to the browser, makes consent obvious, and still feels integrated? When is server-side MT worth it vs client capabilities? What would you ship for a public site today?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/invisible-translate-widget.md>

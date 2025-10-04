---
title: From audio to navigable text
date: 2025-10-03T09:45:12.395Z
url: https://x.com/AnandChowdhary/status/1974048028991574509
---

Treat read‑aloud like a media player: left/right to jump sentence by sentence while the current sentence stays highlighted. You go from passive audio to navigable text, and your working memory breathes easier. 🎧 👇  
  
Found this in my notes from May 22, 2017 while cleaning my notes folder. At Oswald Labs we were building read‑aloud that chunks paragraphs into sentences and highlights the active one. The hunch: map left/right to previous/next sentence for quick seeking.  
  
Under the hood, the browser already gives timing hooks. SpeechSynthesisUtterance boundary events fire at word/sentence edges, so you can sync highlight and compute prev/next targets deterministically. The hard part is keys: arrows are crowded. Screen readers claim them for character/line nav, and many expose sentence nav via modifiers. So keep arrow‑seeking scoped to a focused player, default to Space/Enter for play/pause, and offer an opt‑in combo like Ctrl+Alt+←/→ for people who need it.  
  
Then vs now. In 2017 this felt niche. Today, Edge Read Aloud and Immersive Reader show sentence/paragraph highlighting with keyboard start/stop and toolbar skip. Android Reading Mode adds sentence‑skip arrows. macOS can highlight words/sentences during Speak Selection. On the standards side, WCAG 2.2 sharpened focus visibility/appearance and keyboard operability - good guardrails for a text player that never traps focus or hides where you are.  
  
What still works: sentence‑level control + synced highlight lowers cognitive load and makes skimming possible. Durable principles:  
\- Keep structure visible and state explicit  
\- Keyboard first, never steal global keys  
\- Let users pick granularity: word/sentence/paragraph  
\- Expose "current sentence" in the accessibility tree  
Open questions:  
1) Should WAI‑ARIA define a reader/text‑player pattern with default keys?  
2) Best way to expose current sentence: aria‑current, aria‑selected, or a live region?  
3) How do we reconcile media‑style seeking with screen reader conventions without collisions?  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/read-aloud-arrow.md>

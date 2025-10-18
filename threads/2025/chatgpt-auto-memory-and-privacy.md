---
title: ChatGPT auto memory and privacy
date: 2025-10-17T05:45:16.940Z
url: https://x.com/AnandChowdhary/status/1979061067788750896
---

ChatGPT now has auto memory. Less prompt stuffing. A recency × frequency gate chooses what gets auto injected. Plus and Pro can search, sort, and reprioritize. Fewer tokens, bigger privacy surface: dual deletes and 30 day logs. 🧠👇  
  
I like the mental model: a small personal store the model curates. It keeps facts about you and your projects, ranks them by how recent and how often they matter, then injects only top of mind items into prompts.  
  
That means fewer 800 token bios and more lightweight context. The assistant does the recall, you keep chatting like a human. When it works, it feels magical. When it misfires, you notice right away.  
  
Controls matter. Plus and Pro can search and sort memory and move items up or down. You can clean up bad facts, pin good ones, or tell it to forget things.  
  
This feels like giving users a small CRM for their AI. Pin, edit, forget. Ship the verbs and the trust follows.  
  
Founder takeaways if you build with LLMs:  
  
\- Treat long system prompts as migration paths, not the final state.  
\- Separate stable facts from ephemeral session context.  
\- Add TTLs and RF style scoring to your own memory store.  
\- Show users what you remembered and why.  
  
Privacy and control need real design work. There are now two places to delete: the memory store and the chat history. Also there are 30 day logs. That is more power and more risk.  
  
Ship a visible off switch, per space scopes, an audit log, and easy export. Default to no PII in memory unless the user opts in. Make it obvious when memory changed the answer.  
  
I'm excited about fewer tokens and better personalization, but only if the controls are clear and the defaults are kind.  
  
What will you store, what will you never store, and how will users know?  
  
This is a good time to build humane memory into your product.

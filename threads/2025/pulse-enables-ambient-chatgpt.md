---
title: Pulse enables ambient ChatGPT
date: 2025-09-26T13:45:25.584Z
url: https://x.com/AnandChowdhary/status/1971571729865863300
---

Pulse makes ChatGPT ambient. Nightly runs on your memory + Gmail & Calendar drop goal-based briefs for approval. I like the flip from prompt to plan into plan to approve. Pro and mobile gates hint at high per user compute and a new extension surface. 👇  
  
Ambient agent = runs without you asking, then asks you to confirm. Think inbox triage meets weekly brief.  
  
Pulse schedules async jobs, pulls memory plus Gmail and Calendar, clusters by goals, and writes short cards. You wake up, skim, approve or tweak.  
  
That UX flip matters. Prompt to plan makes the user do the thinking. Plan to approve lowers cognitive load and pushes toward outcomes.  
  
As a founder, I want decisions not chat. A crisp brief beats a blank box. This is the manager's daily brief for your whole life.  
  
Under the hood you need a scheduler, durable memory, and connectors.  
  
Scheduler runs nightly jobs. Memory is a vector store of notes, docs, and past actions. Connectors fetch Gmail threads and Calendar events with minimal scopes. The agent then plans tasks and writes brief cards.  
  
Pro and mobile gates make sense. Nightly agents are expensive at the user level.  
  
Expect batching, caching, and narrow context windows to keep spend sane. Also expect per user quotas, backoff on API limits, and a warm model pool so cold starts do not ruin mornings.  
  
The new surface is the brief card. That is a tiny platform.  
  
Imagine third party cards that pull from GitHub issues, Linear, Notion, or Jira. Tap approve to file tasks, send emails, or book meetings. Mobile becomes the approval UI with push as the loop.  
  
Trust will decide if this sticks.  
  
You want citations for every suggestion, an audit trail, and safe actions. Gmail and Calendar scopes must be tight. Give me a dry run mode, a diff for changes, and easy undo. Then I will let it touch my calendar.  
  
Open questions for me: can they keep quality high as memory grows? Will they open a dev SDK for custom cards? How will they cap compute without neutering the agent?  
  
I like the direction. Plan to approve is the right default for agents. Ship it and learn fast.

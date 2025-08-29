---
title: OpenAI unifies assistants into workflows
date: 2025-08-28T15:15:17.252Z
url: https://x.com/AnandChowdhary/status/1961085144271671579
---

OpenAI folded Assistants into one Responses API. Less deprecation, more spring cleaning - state, tools, and reasoning are now one primitive tuned for agent style multi step work. Think workflows, not chat. 🔄👇  
  
Technically: Responses ships built-ins like web search with citations (although turns out they are apparently using [@serperapi](https://x.com/serperapi) to scrape Google - probably not cool), file search, Code Interpreter, and computer use. It also calls remote MCP tools on the same stateful surface.  
  
State carries via previousresponseid and reusable reasoning items, including encrypted ones, so tool chains do not keep rebuilding the plan.   
  
Computer use via CUA and Operator has published limits and a 38.1% OSWorld success rate, higher on web only suites. MCP lets tools live outside your app and still be first class (because your scraper wants its own repo, of course).  
  
Pricing and ergonomics moved: Web search is now $10/1k calls, down from the $25-35 preview tiers. Citations are standard, and early examples show site scoping fields starting to appear, though docs are still thin.  
  
Watch metering: One search can fan out into several tool calls under the hood, as devs have seen. Set a max tool call budget per response, and log every tool event with timing and token cost. Your finance team will thank you!  
  
Why retire Assistants now? Dev feedback was clear. Slow, complex, and two kinds of state to keep in sync.  
  
Responses keeps the simple Chat Completions feel but adds Assistants style tool orchestration, background mode, reasoning summaries, and persistent reasoning across turns for the o series. GPT 5 exposes finer control through reasoning\_effort.  
  
Net effect in my tests so far: Longer workflows with fewer restarts, lower cost, and better latency.  
  
The tradeoffs are real: Migrate threads to response graphs, persist instructions in your store, and rethink data and tracing. I like the direction, but expect a week or two of plumbing.  
  
If you build agents, now is a good time to model state as responses and reasoning items, add budgets, and wire up tracing. I am migrating my SDK calls in my side projects this week and will share notes!

---
title: Persistent agents with memory
date: 2025-10-18T13:45:13.996Z
url: https://x.com/AnandChowdhary/status/1979544251177591031
---

OpenAI just moved state up the stack. ChatGPT gets recency and frequency weighted memory with search and user reprioritization. Sora 2 adds web Storyboards and 15-25s horizons.  
  
Net effect: persistent agents and shot-level control. 👇  
  
On ChatGPT memory: this feels like a small personal memory store with time decay and a pin box. Think of each fact as a card scored by recent use and total hits. It decays over time, so stale stuff fades and your current workflow rises.  
  
At query time it pulls the top matches with a mix of semantic and keyword search. You can up or down rank to steer what sticks. I've been burned by memory full and context bloat before. This actually self-prunes and reduces prompt duct tape.  
  
Sora 2's web Storyboards plus 15-25 second horizons bring planning into the UI. Storyboards let you lay out shots, beats, and camera notes. The horizon is how far it can plan coherently before you cut to the next beat.  
  
That means shot-level control you can reason about. More consistent characters and blocking, and transitions you can line up. Not perfect, but a lot more than "make it cinematic", which we all know isn't a direction.  
  
Together this pushes state higher. Agents that remember across sessions. Video tools that behave like an editor, not a slot machine.  
  
Things I'd ship next:  
\- Support agents that remember teams, docs, and exceptions by default  
\- Code copilots that learn conventions and develop shared taste, [@MrAhmadAwais](https://x.com/MrAhmadAwais)?  
\- Creative tools with editable beats and hard constraints between shots  
  
Mind the sharp edges. Privacy and retention, memory poisoning, and stuck priors are real. Add TTLs, per-space scopes, and a user-visible memory inspector from day one.  
  
Questions I'm asking: What should be durable vs ephemeral in your product? How will users inspect, edit, or wipe memory? For Sora, what is the minimal horizon your workflow needs before you cut?  
  
I'm optimistic. Less prompt gymnastics, more real systems. This is how chat becomes software.

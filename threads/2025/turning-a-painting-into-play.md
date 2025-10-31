---
title: Turning a painting into play
date: 2025-10-30T16:15:15.945Z
url: https://x.com/AnandChowdhary/status/1983930661493993493
---

Turning a painting into play is a tight box. In 2017 I built Abendgebet, a two hour Processing side scroller (yes, really) that turns Milan Kunc's "evening prayer" into motion.  
  
What worked, what broke, and what a tiny honest game can teach. 🎮👇  
  
Architecture in miniature:  
\- One .pde sketch with a global state machine: START, PLAY, DEAD. draw() as the loop. input via keyPressed().  
\- Immediate mode rendering with image() and rect(). One background asset.  
\- Entities as PVectors for pos and vel. Arrays for obstacles. AABB checks.  
\- Camera is a worldOffset. Fake parallax by moving layers at different speeds.  
  
Shortcuts from a two hour build:  
\- No delta time, so difficulty tied to FPS. Slow laptops felt easy. Fast ones felt unfair.  
\- Magic numbers for spawn gaps, gravity, and speed ramp. I tuned by vibe.  
\- Palette quantized to keep the mood readable with primitive shapes. Fewer mechanics meant clearer verbs.  
  
Today I'd do it differently:  
\- Stack: <p5.js> or Godot for zero install. Fixed timestep with an accumulator.  
\- Design: small ECS or a scene graph, JSON tuning, collision layers, input buffering, a camera that respects composition.  
\- Lessons: preserve relationships not pixels. Pick one verb and make timing legible. Timeboxes show your defaults.  
\- Reality: classmates ran the exports. Zero issues filed, which hides usability bugs.  
  
Open questions I still ask:  
\- If you start from mood, what system gives you the most leverage today?  
\- How do you keep the composition intact while adding motion?  
\- Your go to stack for a one evening game?  
Here's the project: <https://github.com/AnandChowdhary/abendgebet>

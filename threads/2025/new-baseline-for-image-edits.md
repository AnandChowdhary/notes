---
title: New baseline for image edits
date: 2025-08-27T13:45:14.101Z
url: https://x.com/AnandChowdhary/status/1960700080861962670
---

The fun part of nano banana is that the identity preserving, instruction following, multi-image edits are finally good enough to ship as default. Google just put it in Gemini 2.5 Flash Image Preview. That feels like a new baseline. 🍌👇  
  
Technical core for builders: it is live in [@GeminiApp](https://x.com/GeminiApp) for consumers and in Gemini API, AI Studio, and Vertex for dev and enterprise as gemini-2.5-flash-image-preview.  
  
Strengths on paper: Precise natural language local edits, consistent characters across iterations, image to image fusion, and better text rendering. Pricing is $30/MM output tokens. A 1024x1024 image is about 1,290 tokens, roughly $0.04\. Early integrations are on OpenRouter and <fal.ai.>  
  
It looks like a VLM-style planner, tightly coupled to an image renderer with cross attention over one or more reference images. Identity preservation likely leans on feature space consistency and edit supervision pairs, not per subject fine tuning. If true, that explains the speed.  
  
On evals: It debuts at the top of the LMArena image editing arena under the nano banana alias, which lines up with what users have been voting for in blind pairwise tests.  
  
Caveat emptor: The Arena upweights new and top models, and that introduces selection bias. Treat Elo changes as preference evidence, not absolute capability. Google also calls out gaps in long form text, small faces, and fine details. So still run your own eval set.  
  
Bigger picture: We are moving from text to image vibes toward edit-first workflows. A reasoning model plans targeted, constraint respecting changes, and the renderer executes. Masking and conditioning UI collapse into language. That unlocks plan then edit then verify loops you can actually ship.  
  
The price point fits consumer and prosumer tools. SynthID watermarking is on by default, which helps with provenance. It is not a silver bullet for deepfakes, so pair it with policies, rate limits, and human review where it matters.  
  
What I want to learn next:  
1) What is the renderer under the hood: Latent diffusion, a consistency model, or a custom decoder tied to Gemini's scene tokens?  
2) How is multi image composition supervised and which identity loss holds it together?  
3) How robust is it for paragraph scale typography, occlusions, side profile to frontal identity, and resolutions above 1024px square?  
  
For founders, this turns high quality editing into an API primitive. That means you can rethink templated design, listing photos, avatars, ads, even product UIs. If you have a workflow today with brittle masks or lots of manual steps, this likely replaces that stack.

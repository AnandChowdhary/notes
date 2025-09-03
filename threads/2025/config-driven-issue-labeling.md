---
title: Config driven issue labeling
date: 2025-09-02T09:45:11.736Z
url: https://x.com/AnandChowdhary/status/1962814013831815424
---

Found a neat GitHub Action that auto-assesses GitHub issues with an AI model and adds clean, standardized labels. I like the approach a lot: prompt files plus a label-to-prompt mapping, so it stays configuration driven instead of more custom code.  
  
Quick flow: add a trigger label like "request ai review". It collects the issue's labels, maps them to prompt files, runs one AI call per prompt via GitHub Models, regex-grabs an "AI Assessment" header, and applies labels like ai::. It can also drop a structured comment.  
  
Prompts live as .<prompt.yml> files. There is a system message and a user message with {{input}}. You set the model as publisher/model, for example openai/gpt-4o-mini, with optional max\_tokens. You can override model or tokens in the workflow, suppress comments with a regex directive, and get a tidy job summary.  
  
Why I'm into it: faster, consistent triage. Think completeness checks, priority, area labels. It supports multiple prompts per issue and runs are idempotent since it removes the trigger label, so you can re-run. TypeScript Action. Mapping looks like "bug,<completeness.yml>|feature,<priority.yml>". <https://github.com/github/ai-assessment-comment-labeler>

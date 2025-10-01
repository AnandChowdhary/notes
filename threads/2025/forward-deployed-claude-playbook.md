---
title: Forward deployed Claude playbook
date: 2025-09-30T23:15:09.759Z
url: https://x.com/AnandChowdhary/status/1973164708728598802
---

I've been playing with an idea I call "Forward Deployed Claude". It borrows the Palantir-style FDE loop I used to see in enterprise work. Ship the product you have, embed Claude Code as the field engineer, let it build the customer's gravel road, then write down what generalizes for the next 5-10 accounts in a CLAUDE\\.md that marks invariants vs extensions. 🛠️👇  
  
Why now: the newest Claude models can stick with long, messy coding sessions and keep context for ages. I'm seeing reports near 30h of autonomy.  
  
Claude Code already reads whole repos, makes multi-file edits, and turns issues into PRs across GitHub, GitLab, and CLI. So the FDE workflow is finally practical.  
  
What goes in CLAUDE\\.md:  
\- Invariants: security posture, domain models, data contracts  
\- Extension points: modules a customer may vary, interfaces and event boundaries  
\- Generalization rules: promote to core when it repeats across ≥3 accounts, shrinks config, and keeps SLOs  
\- Guardrails: PII boundaries, approval policy, diff budget, CODEOWNERS  
\- Tests: golden fixtures per tenant plus a cross-tenant suite  
\- Telemetry: adoption, rollback rate, perf deltas the agent must log  
  
Operating loop:  
1) Agent ships a customer overlay using the extension points  
2) It proposes upstream PRs with a one pager that explains the pattern and projects the next 5-10 customers  
3) Security, data, and platform gates review, promotion ships behind a flag and the agent authors migrations  
  
This mirrors Palantir's FDE playbook: Embed, adapt, then harden the platform. The twist is an LLM doing the fieldwork. GitHub Actions can even trigger on @\\claude to file and respond on PRs.  
  
Gravel roads become on-ramps to highways.  
  
Faster, safer, and the learnings compound across customers.

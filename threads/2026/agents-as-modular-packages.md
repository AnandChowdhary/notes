---
title: Agents as modular packages
date: 2026-01-06T10:42:03.064Z
url: https://x.com/AnandChowdhary/status/2008489229069021369
---

We're basically turning AI agents into npm packages, and it's starting to get interesting. This emerging agent package idea - rules + MCP servers + subagents + policies as one shippable thing is like going from copy‑pasted prompts in Notion docs to \`import sales\_agent\` in your stack. What this standard ends up looking like is still evolving. Do we converge on something LSP/MCP‑like, where agents expose a clear capability graph, tools, and contracts that any host can introspect? Or do we keep getting vendor‑flavored bundles that are 60% prompt template, 30% config, and 10% "lol good luck debugging this in production"? A proper spec means: - Agents are composable, like libraries, not sacred snowflakes - You can swap providers without rewriting half your orchestration layer - Security and policy stop living in random YAML at the bottom of a Confluence page Whoever nails the "agent as module" spec is going to define the next decade of how we build AI products. Right now, it still feels like early Node. Lots of excitement. Not enough package-lock.json.

---
title: Filesystem memory ends the bloat
date: 2026-01-20T22:16:02.151Z
url: https://x.com/AnandChowdhary/status/2013737306084262387
---

RAG bloat was always going to end here. "Filesystem-as-memory" is basically the final boss: instead of yet another vector store, tool registry, and orchestration layer, your agents just see a boring Postgres-backed filesystem. There's an \`AGENTS\\.md\`, a \`tools.json\`, a \`/docs\` directory, and that's the schema. If you can explain it to a junior dev in 5 minutes, an agent can probably reason about it too. The nice part is you stop designing bespoke memory abstractions and just lean on something we already know how to scale, back up, and migrate. It is Git-friendly. It is inspectable. You can literally \`cat\` your agent's "brain". Of course, this is tech, so give it 6 months and that "it's just files" layer quietly becomes the new ORM boundary. Now you have: - FS views - virtual mounts for different teams / agents - permissions as YAML - a plugin system "for flexibility" … and congrats, your simple FS is the next contested infra layer. Still, for technical founders, this direction makes sense. Push complexity down into Postgres. Expose a file-shaped world to agents. Fight about abstractions later.

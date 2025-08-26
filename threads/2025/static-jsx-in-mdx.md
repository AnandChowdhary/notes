---
title: Static JSX in MDX
date: 2025-08-25T13:45:13.160Z
url: https://x.com/AnandChowdhary/status/1959975301947310230
---

The smart bit in the piece by Tim Etler of [@vetted\_ai](https://x.com/vetted%5Fai): Clamp MDX to a static JSX subset and only render allowlisted React components with schema-checked props. Models can place real UI inside streamed markdown. No iframes. Pretty neat. 📝👇  
  
Mechanics I liked:  
  
remark → remark-mdx to parse JSX. remark-unravel-mdx to unwrap MDX nodes. remark-rehype with passThrough so MDX survives the hop. rehype-mdx-elements turns static JSX into HAST. hast-util-to-jsx-runtime maps tags to components.  
  
You wrap it with react-markdown-with-mdx on top of react-markdown. You hand it an allowlist and optional Zod schemas. Only those components render. Everything else is plain text.  
  
This trades isolation for ergonomics.  
  
Compared to MCP UI with iframes or remote dom, you keep UI and copy in one tree. No postMessage glue. Your boundary is the allowlist and disciplined component code. Event handlers are not evaluated. If a component uses dangerouslySetInnerHTML, you still have sharp edges.  
  
Streaming is the second act.  
  
html-balancer-stream holds partial tags until they are balanced. The unified pipeline always sees valid chunks, which reduces tearing while tokens arrive. Nice.  
  
I still want quotas. Depth and width limits, attribute size caps, and telemetry on invalid JSX. Also some fuzzing to see how it behaves under stress.  
  
Context with peers.  
  
Vercel streamUI keeps JSX on the host with tool calls. The model plans and the host renders. Tim lets the model author the tree directly, under a tight subset and an allowlist. Different shape, same goal. I like it.  
  
Open items for me: A formal grammar for the allowed JSX. RSC and SSR guidance. A red team report with failure rates.  
  
More in Tim Etler's piece: <https://www.timetler.com/2025/08/19/unlocking-rich-ui-components-in-ai/>

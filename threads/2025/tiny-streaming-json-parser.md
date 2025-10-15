---
title: Tiny streaming json parser
date: 2025-10-14T09:45:03.698Z
url: https://x.com/AnandChowdhary/status/1978034305852154015
---

Found jsonriver by [@rictic](https://x.com/rictic) and it scratches a real itch for me - a small streaming JSON parser that yields increasingly complete values as bytes come in, so you can start working with data from fetch or LLMs before the response is done. I have a soft spot for tiny no deps tools that do one thing well.  
  
My favorite detail is how shapes stay stable while they grow. Numbers, booleans, and null arrive whole. Strings only grow. Arrays only append or refine the last item. Objects only add properties or refine the latest one. Partial JSON stays predictable, which keeps consumers calm.  
  
Nice for long HTTP responses, server sent events, or LLM output. TypeScript, no deps, works with standard Streams like TextDecoderStream, and runs across runtimes.  
  
Clean API too: for await (const v of parse(stream)) { ... }.  
  
Link if you want to try it: <https://github.com/rictic/jsonriver>

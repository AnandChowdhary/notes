---
title: FilterQL for structured data
date: 2025-08-28T21:15:01.144Z
url: https://x.com/AnandChowdhary/status/1961175710149873795
---

Been playing with FilterQL, a tiny TypeScript query language for structured data. I like when filtering reads like plain logic. This works: (genre == Action || genre == Comedy) && rating >= 8.5 | SORT rating desc. One expression, no if-else soup.  
  
Details I enjoy: schema defines allowed fields and aliases, logical ops () ! && ||, comparisons == != >= <= plus \*= ^= $= \~= for strings and regex, boolean shorthand like monitored, and a built in SORT field asc or desc. Thoughtful and practical.  
  
Setup is simple. Define a schema, new FilterQL({ schema }), then filter(data, query). Great for CLIs, dashboards, and APIs where users type filters. Fewer hand rolled predicates scattered around. Future me says thanks.  
  
Small and focused with a clear language spec and a clean API. If you want user friendly filtering without going full database query language, this hits a sweet spot: <https://github.com/adamhl8/filterql>

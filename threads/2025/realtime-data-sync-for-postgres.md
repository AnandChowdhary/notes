---
title: Realtime data sync for Postgres
date: 2025-08-27T23:15:01.159Z
url: https://x.com/AnandChowdhary/status/1960843521252012345
---

Sharing a neat one for folks who live in Postgres land: [@ElectricSQL](https://x.com/ElectricSQL) is a real time sync engine that pushes data out over plain HTTP. Postgres stays the source of truth while Electric handles partial replication and fan out. I have built this glue before. I would rather not again.  
  
Instead of wiring changefeeds and socket servers, you describe the data you need and it fans out to browsers, mobile, and edge stores.  
  
Great fit for local first UIs, realtime dashboards, multi region apps, and AI agents on live data.  
  
What sold me: Clean HTTP and OpenAPI surface, quick Docker Compose start, Elixir and Erlang reliability, and a 1.0 release in March. Also 9k stars is a nice signal.  
  
If Postgres is your source of truth and you want realtime without bespoke plumbing, start here: <https://github.com/electric-sql/electric>

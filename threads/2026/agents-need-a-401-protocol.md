---
title: Agents need a 401 protocol
date: 2026-06-16T21:17:03.543Z
url: https://x.com/AnandChowdhary/status/2066993468426399879
---

Agents need a boring 401 path. Right now an agent hits an API, gets rejected, and punts to the user: create an account, mint a key, paste it back. That is fine for demos. It is awful as infrastructure. The better shape is service metadata that says: how to register, how to claim the user, what scopes are allowed, when the credential expires, and what to do on the next 401\. OAuth assumed a browser tab. Agents need the error path as protocol. Good write-up from WorkOS on auth.md: https://workos.com/blog/agent-registration-with-auth-md

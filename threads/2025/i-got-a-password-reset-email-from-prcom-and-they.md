---
title: I got a password reset email from PRcom and they
date: 2025-12-09T22:15:03.328Z
url: https://x.com/AnandChowdhary/status/1998516768902726109
---

I got a password reset email from @PRcom and they literally sent my password back to me in plain text, even MD5 almost looked “secure by comparison” 🔐👇 So I wrote a blog post in 2017\. My original point was simple: Storing cleartext passwords is terrible. Even a flawed hash like MD5 is better than nothing, especially if you use long, non‑dictionary passwords and add a salt so attackers cannot rely on rainbow tables. MD5 has collisions and should never be used for things like TLS or signatures, but for basic password storage it still beats plain text. That logic still holds in a narrow sense, but in 2025 it is not enough. Modern attackers use GPUs and cheap cloud compute to try billions of MD5 guesses per second. This is why the default today is slow, memory‑hard algorithms like bcrypt, scrypt, Argon2, or at least PBKDF2\. So yes, MD5 is better than plaintext, but it is no longer a responsible default. Original post: https://anandchowdhary.com/blog/2017/md5

---
title: Password storage needs cost
date: 2025-08-26T23:15:18.508Z
url: https://x.com/AnandChowdhary/status/1960481133793325559
---

Using algorithms like MD5 is similar to storing plain text passwords because they both make the same mistake: They treat secrets like static strings. Password storage needs cost, not a checksum. Fast hashes let GPUs eat your lunch. 🔐👇  
  
Feb 25, 2017 I left myself a note to catalog bad practices and my own blind spots. That same week SHAttered landed. SHA1 collisions were real. Bcrypt was common. Argon2 had just won PHC. Yet MD5 lingered - somehow.  
  
The model I wish I had taped to my desk then: salt, pepper, and a password KDF. Salts are unique per-user and stored with the hash. They kill rainbow tables and force fresh work per guess. Peppers live outside the database, in KMS or an env, so a DB dump is not the whole story.  
  
KDFs give you a dial. Bcrypt has a cost and years of use, but it truncates inputs at 72 bytes. PBKDF2 is everywhere but only uses CPU. Scrypt adds memory. Argon2id is my default in 2025 with memory, time, and parallelism controls. Always use a unique salt and plan to raise settings over time.  
  
I also shared my MD5 password publicly. I would probably not do that today. An unsalted MD5 of a live account is basically plaintext against commodity GPUs and public breach dictionaries.  
  
What changed since 2017: attacker throughput and defender consensus. GPUs got faster and cheaper, clouds rent them by the hour, breach corpora exploded. Guidance converged on Argon2id with clear profiles, unique salts stored with the hash, peppers in KMS or HSM. Passkeys and WebAuthn move risk off the server. Where passwords stay, use a strong KDF plus rate limits, stuffing detection, and phishing resistant second factors. Rehash on login when parameters go up.  
  
Durable principles: design for cost on the attacker, avoid single points of failure, and make upgrades routine.  
  
Open questions for 2025: how aggressive should rehash on login be on low end mobile, what Argon2id settings balance latency and safety, and how to stage a migration from bcrypt or PBKDF2 to passkeys without user pain?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/write-post-on.md>

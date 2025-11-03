---
title: A private writing tool
date: 2025-11-02T10:45:13.531Z
url: https://x.com/AnandChowdhary/status/1984934768602194292
---

Back in 2018 I hacked together Words, a tiny writing API for two people. The point was simple: type, hit save, no friction, and keep our notes private without spinning up a database. It mattered to me because these were personal messages to my partner, and I wanted control over my data more than features. ✍️👇  
  
Context and constraints, 2018-style: I created it on March 5, 2018, with "zero infra" in mind. PHP on any shared host, OpenSSL for crypto, JWT for sessions. Storage was JSON files on disk. One <meta.json> held the files path, a bcrypt password hash, a symmetric key, an IV, and a token lifetime of 25 hours. Scope was tiny by design: two humans, calm writing.  
  
API sketch: POST / gave you a JWT, GET /posts listed titles and dates, PUT /posts created, and GET/PUT/DELETE worked by ID. Each post lived as a timestamp-prefixed JSON file. Title and body were encrypted then base64'd, date stayed plaintext for sorting. Upside: rsync-able backups, no migrations, two dependencies (OpenSSL + firebase/php-jwt), and a 10-minute install on any cheap PHP host.  
  
What I learned the hard way:  
\- Not end-to-end: the server held the key and IV, so this was privacy at rest, not zero-knowledge.  
\- Reused IV across posts, which weakens semantic security and leaks patterns (short titles make this worse).  
\- Metadata leaked: filenames and dates in clear show activity rhythms even if content is encrypted.  
\- Long-lived JWTs, no refresh or revocation, rotation killed all sessions at once.  
\- Assumed a single writer, no filesystem locking meant possible race conditions.  
\- Search and tags needed decrypting everything, listing stayed O(n). Fine for two users, brittle beyond that.  
  
If I built it today, I'd go client-side encryption with per-post random nonces (XChaCha20-Poly1305) and keys derived via Argon2id. Server stores opaque blobs. Secrets live in env with rotation. Sessions get short access tokens plus refresh, or plain server-side sessions, consider WebAuthn. Storage wise, a tiny SQLite with full-text search, or go local-first with CRDTs and encrypted sync.  
Principles that still hold:  
\- State your threat model in the README.  
\- Minimize metadata, treat filenames and timestamps as sensitive.  
\- Per-item randomness is non-negotiable, rotate keys on a schedule.  
\- Keep tokens short-lived and revocable.  
\- Test backup-and-restore, not just backup.  
\- Be honest about "database-free" ergonomics before you commit.  
Here's the project: <https://github.com/AnandChowdhary/words>

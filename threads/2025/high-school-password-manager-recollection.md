---
title: High school password manager recollection
date: 2025-09-01T21:15:13.074Z
url: https://x.com/AnandChowdhary/status/1962625262413324692
---

In 2016, for my high school CS project, I wrote a tiny C++ CLI password manager. One binary file, strings only encoded (not encrypted), and a "master password" that mostly gated the UI. Looking back is equal parts cringe and useful. 🔑👇  
  
Context and constraints: I shipped it on Jan 20, 2016\. Needed to run on lab PCs with no admin rights, live in a single file on a USB stick, be fast offline, and be easy to demo. C++ felt great for file I/O. Real crypto felt scary, so I went with ad hoc encoding and a master password prompt (I know, I know).  
  
Architecture, in hindsight:  
\- Single binary blob with custom serialization. No schema, no versioning, no integrity checks, shaky portability.  
\- The "master password" controlled the flow. It never derived a key. Data was only encoded, so you could reverse it without any secret.  
\- No KDF (Argon2/PBKDF2/scrypt), no AEAD (AES-GCM or ChaCha20-Poly1305), no tamper checks, no secure memory.  
Little bit aged well: tiny footprint, fast iteration, simple CLI.  
Lots aged poorly: fuzzy threat model, totally implied encryption (oops), and unsafe storage for real secrets.  
  
How I'd approach it today:  
\- Start with a written threat model and pick proven libs. Use OS keychains or libsodium. Derive keys with Argon2id. Encrypt with AEAD and per-record nonces. Authenticate metadata.  
\- Version the on-disk format, use deterministic serialization, ship migrations.  
\- Secure by default UX: clear warnings, test vectors, fuzzing, and an explicit "toy vs production" label.  
DIY encoding isn't an MVP when security is the premise. It is a liability.  
  
Open questions I still think about:  
\- How do we help beginners ship learning projects without baking in unsafe habits?  
\- Where is "thin wrapper over the platform keychain" enough for personal use?  
\- What's the lightest way to teach threat modeling early so the architecture does not make one up on its own?  
Here's the project: <https://github.com/AnandChowdhary/keeep>

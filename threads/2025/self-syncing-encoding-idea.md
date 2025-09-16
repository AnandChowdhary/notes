---
title: Self syncing encoding idea
date: 2025-09-15T09:45:12.893Z
url: https://x.com/AnandChowdhary/status/1967525049113723255
---

Read [@vishnuhx](https://x.com/vishnuhx)'s piece and nodded a lot. The clever bit of UTF-8 is the self syncing, prefix free layout on top of ASCII. You can back up a few bytes and land on a code point. Simple idea. Big win.  
  
Modern UTF-8 covers U+0000 to U+10FFFF in 1 to 4 bytes. Only shortest form is valid. Continuation bytes start with 10xxxxxx. That bans overlong forms and UTF-16 surrogate halves. You can resync by backing up at most 3 bytes.  
  
Small nit I keep seeing: calling UTF-8 32 bit. That label fits UTF-32, the fixed width one. UTF-8 is variable width. The prefix code also means ASCII bytes 0x00 to 0x7F never appear inside multi byte sequences. Old byte tools keep working.  
  
Where things break in practice: decoders that accept overlongs like C0 80 for NUL, treat surrogates as valid, or label CESU-8 or Modified UTF-8 as plain UTF-8\. Strict decoders must reject these. Leniency has shipped real bugs.  
  
Operationally, pick a clear policy. Replace on error with logs of the bad octets. Use a well known validator like the Hoehrmann DFA or the WHATWG maximal subpart behavior. Treat CESU-8 as legacy boundary data only.  
  
Why this design won long term: ASCII transparency, great streaming behavior, and binary sort order that matches code point order like UTF-32\. You get safety and speed without throwing old tooling away.  
  
On the web, UTF-8 is basically the default now. Around 98.8 percent of sites serve it. The rest are legacy pockets and special cases.  
  
Team checklist I like to ask:  
Are your decoders shortest form only and surrogate rejecting?  
Do you normalize before security checks when needed?  
Any CESU-8 or Modified UTF-8 at your boundaries?  
  
If you want a crisp refresher with byte by byte traces, Vishnu's write up is a good read: <https://iamvishnu.com/posts/utf8-is-brilliant-design>

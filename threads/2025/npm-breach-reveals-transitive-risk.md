---
title: Npm breach reveals transitive risk
date: 2025-09-10T05:45:12.826Z
url: https://x.com/AnandChowdhary/status/1965652711128601026
---

Reading Xe Iaso's write-up on the npm compromise. A maintainer ATO on "harmless" transitive libs like chalk/debug, which I've used in almost every CLI I've shipped, could have become an API key vacuum. The browser-only payload kept the blast small. We got lucky. 👇  
  
Here's the shape of it.  
  
Phish from [@npmjs](support<a href=).help">support[@npmjs](https://x.com/npmjs).help led to a maintainer account takeover. Malicious releases went out: chalk 5.6.1, debug 4.4.2, ansi-styles 6.2.2, supports-color 10.2.1, strip-ansi 7.1.1, and friends (2B+ weekly downloads, yes, really).  
  
The payload hooks fetch and XMLHttpRequest plus wallet APIs like <window.ethereum> and Solana methods. It rewrites recipients with lookalike addresses and even proxies signer calls. A typeof window guard keeps it from running in pure Node.  
  
The counterfactual is worse.  
  
July's eslint-config-prettier incident used postinstall and DLL loaders to steal tokens. That family goes after .npmrc, browser data, SSH keys, cloud creds, the works.  
  
If this campaign had aimed at Node/CI postinstall or runtime exfil, we'd be talking about widespread secret theft today. Instead, they shipped a browser skimmer on libs that are mostly used in CLIs. Strategy mismatch limited damage. Luck isn't a control.  
  
What I'd change for high-impact packages:  
\- WebAuthn-only for maintainer login. TOTP is still phishable.  
\- Require provenance and verify in CI. Block un-attested publishes by policy.  
\- Disallow tokens for publish on critical scopes by default.  
\- Keep dev-only deps out of browser bundles. Use allowlists and pin versions.  
  
Open questions:  
\- How often do these libs end up in production browser bundles?  
\- Should registries default critical packages to WebAuthn-only and provenance-required publishing?  
\- What telemetry will confirm installs or on-chain redirections?  
  
Good write-up by Xe: <https://xeiaso.net/notes/2025/we-dodged-a-bullet/>

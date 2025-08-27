---
title: Short lived tokens for CI
date: 2025-08-26T15:15:01.737Z
url: https://x.com/AnandChowdhary/status/1960360339780071737
---

I've been moving more of my CI to GitHub Apps instead of PATs, and this GitHub Actions workflow tool by [@qoomon1](https://x.com/qoomon1) that mindset: It mints temporary tokens in workflows with least privilege by default. No more forever secrets, about time!  
  
Highlights: Short lived tokens scoped to an installation. Granular permissions from your App. Works on GitHub hosted and self hosted runners. Great for cross repo and org automation without handing out PATs.  
  
How it works: It uses the GitHub App flow. Create a JWT, exchange it for an installation access token, then the action exposes it to your steps. You add App credentials as secrets and rotate them when needed. Nothing long lived baked into the repo or runners.  
  
Why I'm into it: Fewer long-lived secrets, tighter scopes, quick revoke and audit. TypeScript, \~138 stars, focused scope.  
  
If you're modernizing CI security, this is an easy drop in (my security brain is happy): <https://github.com/qoomon/actions--access-token>

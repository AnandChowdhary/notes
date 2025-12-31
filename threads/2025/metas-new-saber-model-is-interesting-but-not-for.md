---
title: Metas new Saber model is interesting but not for
date: 2025-12-16T00:14:02.191Z
url: https://x.com/AnandChowdhary/status/2000721038821536002
---

Meta's new Saber model is interesting, but not for the flashy demos you're seeing on X. The clever bit is the training signal. Instead of needing clean reference clips of a person, Saber treats masked frames inside regular internet video as "pseudo reference images". It then learns how to go from "reference" to full video using plain old video plus text pairs. So if you scale data, you automatically scale the model's ability to do likeness transfer. You do not need special labeled datasets, extra identity heads, or a separate "personalization" mode. That behavior just quietly emerges as a side effect of training. Translated to founder-speak: - Any large text-to-video model that uses this recipe will likely get deepfake-level identity control "for free" - Personalization stops being a premium feature and starts becoming a default property of big video models - The line between "general video generation" and "high‑fidelity face swap" gets very, very thin Great for product ideas. Slightly terrifying for abuse surfaces, policy, and infra you will now have to build whether you want to or not.

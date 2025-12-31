---
title: NVIDIA buying SchedMDs a pretty big move CUDA wa
date: 2025-12-18T00:17:05.134Z
url: https://x.com/AnandChowdhary/status/2001446569938502005
---

NVIDIA buying SchedMD's a pretty big move. CUDA was already the default how-you-talk-to-GPUs layer, now NVIDIA owns the thing that decides which job runs where and when on a ton of HPC/AI clusters. They don't just own the accelerator API, they now own the default control plane 👇 Will NVIDIA optimize Slurm for their GPUs? Of course they will. But the real question is how neutral Slurm can stay when the same company controls: - The GPUs (CUDA, libraries, firmware) - The scheduler (Slurm) - Increasingly, the fabric story If you are running mixed clusters with AMD, Intel, or custom ASICs, this starts to look like the perfect setup for soft lock‑in. Not the obvious Apple kind, but more the Google kind: "sorry, that feature only ships first on NVIDIA hardware". If I were designing infra for a new AI startup today, I would watch: - How fast NVIDIA starts shipping NVIDIA‑only scheduling optimizations - Whether the plugin and API surface for non‑NVIDIA hardware gets more "creative friction" - If any serious alternatives to Slurm start to emerge Why? Because "own the control plane" has turned into "own the stack" more than once in tech history.

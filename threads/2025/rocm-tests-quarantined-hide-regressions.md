---
title: ROCm tests quarantined hide regressions
date: 2025-09-08T09:45:14.050Z
url: https://x.com/AnandChowdhary/status/1964988338689216696
---

Headline isn't "ROCm flaked." It's skip debt. PyTorch's ROCm path quarantined core tests across kernels and compilers, so CI stays green while regressions pile up. Fresh paint, cracked wall. That's an ecosystem trust leak.  
  
Concrete signals I'm seeing: SDPA and FlashAttention tests sat disabled on ROCm for long stretches. Even TestSDPACudaOnlyCUDA variants and transformer SDPA grads were skipped. Inductor hit SDPA meta mismatches around logsumexp shape, so ROCm needed custom meta registration.  
  
AOTriton 0.7b brought massive failures in test\_transformers, followed by targeted skipping. Dynamo and Inductor dynamic‑shapes suites went to quarantine. This spans kernels, Triton and AOTriton, Inductor, and nn. And it's sticky.  
  
I don't care about a single failing kernel. I care about the maintenance pattern. I've shipped flaky tests before (guilty), but hiding them to keep dashboards green just defers correctness debt and chips away at user confidence. Been there as a founder. Green can lie.  
  
Attention paths drive LLM training and inference, so this hurts twice. Add lighter dogfooding on MI300X and distributed fragility vs NCCL baselines, and teams hesitate to treat AMD as drop in.  
  
AMD says it's re‑prioritizing, and ROCm 6.4 calls out faster FlexAttention, TopK, and SDPA in the PyTorch container. Good energy.  
  
Trust returns when skip debt drops and previously quarantined suites go truly green - SDPA grads, Inductor patterns, dynamic shapes - without backend‑specific meta hacks. Measure net re‑enables over months, not one release. Ship the boring thing: delete skips.  
  
Open questions:  
1) What's the plan to drive the ROCm "skipped" curve down quarter over quarter and keep it down?  
2) When do MI300X‑class nodes become first class in PyTorch CI for SDPA and fused attention, Inductor, and RCCL scaling?  
3) Can Triton and AOTriton plus Inductor numerics converge so attention paths stop needing ROCm‑specific meta workarounds?  
  
As a founder, my bar is reproducible training runs and drop in inference, not pretty dashboards. Turn quarantines into passing tests on real hardware and confidence follows. Until then, plan for heterogeneity.

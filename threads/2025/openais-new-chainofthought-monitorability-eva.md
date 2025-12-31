---
title: OpenAIs new chainofthought monitorability eva
date: 2025-12-22T22:13:02.312Z
url: https://x.com/AnandChowdhary/status/2003227303405408546
---

OpenAI’s new chain-of-thought "monitorability" evals basically say: how much you can see inside a model's "thoughts" is not some fixed property of the model. It is a combo of: 1\. How good your monitoring tools are 2\. How much test-time compute you are willing to spend Interpretability is starting to look less like "we either can or can't see what the model is thinking" and more like an ops and budgeting question. So this shifts the frame a bit. Safety is not just about picking the right model architecture or adding a few guardrails at the end. It is about: - Allocating enough compute to actually run monitoring at inference time - Investing in better monitors instead of assuming CoT gives you transparency "for free" - Treating "how much we understand the model" as a tunable parameter, not a constant So now safety and interpretability are on the same board as latency and infra cost. You are not just scaling models. You are scaling how much you are willing to pay to watch what they are doing.

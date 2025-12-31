---
title: In 2016 I wrote Machine Learning in 6 Lines abou
date: 2025-12-08T14:44:04.258Z
url: https://x.com/AnandChowdhary/status/1998040887037923422
---

In 2016 I wrote “Machine Learning in 6 Lines” about a blind-friendly phone UI that guessed who you wanted to call using a tiny decision tree on call times. It was delightfully naive and very direct: six lines of Python, a few timestamps, and suddenly your phone felt a bit smarter 📞👇 Back then, the mental model was simple. Your history holds patterns like “Doctor at noon, Mom at night,” and even a tiny supervised model can surface them. For accessibility, this matters a lot. One big “Call Doctor” button at the right moment can remove serious friction. Looking at it from 2025, the skeleton still makes sense. Tabular features, a DecisionTreeClassifier, and plans to plug in location or date. What I didn’t think about enough was everything around it. Noisy labels. Changing routines. Overfitting to last week. Sensitive relationship patterns on shared devices. Today I’d think about on-device learning, privacy, evaluation, and probably use boosted trees. But the core idea holds up. You don’t need deep learning to make an interface kinder. The real question now is: what’s the smallest, safest model that actually improves someone’s day? https://anandchowdhary.com/blog/2016/machine-learning-in-6-lines

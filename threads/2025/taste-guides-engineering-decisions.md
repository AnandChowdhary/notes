---
title: Taste guides engineering decisions
date: 2025-09-29T13:45:04.588Z
url: https://x.com/AnandChowdhary/status/1972658877847179481
---

Treat taste as a shifting weight vector over values, then matching it to your project's phase and constraints. Right for here and now beats "universally right” in engineering.  
  
Under the hood, this is multi objective optimization. Values like latency, resiliency, readability, portability, cost, and dev speed define a Pareto frontier.  
  
"Good taste" is picking a point that fits your context and lifecycle. Early explore favors velocity and readability. Later hardening flips weight to SLOs and operability.  
  
Once telemetry pins the space, taste stops being vibes.  
  
Flexibility matters, yeah, but "success proves taste" is noisy. Teams win or lose for many reasons. I try to measure alignment instead: do our chosen weights show up in behavior? Signals I watch: change failure rate vs error budget burn, mean lead time vs permitted toil, dependency risk vs portability targets.  
  
Common traps: a fixed taste across phase shifts (staying speed first while ops needs reliability), Goodharting on the proxies, and unpriced externalities like on call pain or egress costs missing from the vector. When guards trip, I renegotiate weights before patching symptoms.  
  
I used to argue map/filter vs for loops, Rust vs Python, AWS heavy vs portable. That stuff is just how you realize a value vector.  
  
Rust leans toward correctness and performance. Heavy AWS favors scalability and cost, often at the price of portability. Good taste is stating that ordering up front, then flipping it when the context shifts.  
  
My take: treat taste as a living hypothesis, measure it, and reset the weights when reality disagrees.  
  
Sean's essay provoked these thoughts: <https://www.seangoedecke.com/taste/>

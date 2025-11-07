---
title: Alt text safety net
date: 2025-11-06T16:15:18.427Z
url: https://x.com/AnandChowdhary/status/1986467374770594157
---

Auto generated alt text works best as a safety net, not a stand in for authors. The model is not the hard part anymore. It is product choices like sane defaults, review flows, and knowing when to say nothing instead of guessing. Sharing a 2017 note and what changed ♿👇  
  
I found this from Sep 25, 2017 while cleaning my notes. We shipped AutoALT at Oswald Labs using AWS Rekognition to fill missing img alt. The idea was simple. If authors forgot, help users anyway. CV APIs were just getting good. Most sites still shipped empty or missing alt, yes, really.  
  
What I expected vs what happened. Platforms made it default. Facebook shipped automatic alt. Instagram added auto and custom alt. Microsoft 365 suggests alt text. iOS VoiceOver, Android TalkBack, and Windows Narrator describe unlabeled images on device.  
  
Tradeoffs showed up fast. Privacy when sending images to third party clouds. Latency in the critical path. Mislabels that cause real harm. Verbose walls of text vs one useful line. Uneven quality across languages. And labels rarely capture a photo's purpose.  
  
Since 2017 the tech went from CNN tag lists to multimodal models that summarize scenes and read text in images. Standards barely moved. WCAG 1.1.1 still asks for a text alternative that helps the task. A 2025 pattern: generate a short literal default. Let people edit at upload. Show provenance and confidence. Prefer on device when you can. Skip decorative images with alt="". Keep thoughtful human writing where it matters.  
  
Open questions:  
1) Should generative alt infer emotions or intent, or stick to observable facts?  
2) Who owns errors, platforms setting defaults or publishers shipping content?  
3) How do we score quality beyond word overlap, like task success or user trust?  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/auto-alt-using-aws.md>

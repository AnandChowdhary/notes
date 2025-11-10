---
title: AR profile consent and access
date: 2025-11-08T14:45:13.540Z
url: https://x.com/AnandChowdhary/status/1987169493341364277
---

AR needs a clean way to attach a profile to a person or a place. Drawing a handle over a head is easy. The real work is consent, authentication, and context. Who should see what, on which device, and when. Plus anti spoofing and graceful failure when trust is missing. 🥽👇

Found this in my notes from Sep 26, 2017: "Social media profile link in AR display." ARKit and ARCore had just landed. HoloLens was niche. Post Glass, face recognition in consumer products was basically a no go. I'm revisiting the folder to see what aged well and what didn't.

Back then the naive path was face recognition to profile lookup. That crashed into policy, law, and safety. The viable model was opt in discovery: QR or Snapcodes, NFC taps, BLE or UWB proximity beacons, or image anchors in the scene. Technical sketch: broadcast a rotating signed identifier and resolve to a profile only if we share trust or permissions. Think contact cards and people nearby, not doxxing.

Today head worn and pass through devices make in view overlays feel normal. Vision Pro, Quest 3, Ray Ban smart glasses. Identity is still fragmented. Bright spots: passkeys for auth, DIDs with verifiable credentials for portable claims, on device ML for entity hints without sharing biometrics, and OpenXR or WebXR for rendering. Tradeoffs are clearer now. Linkability or discovery. Spoofing or anonymity. Convenience or consent. My 2017 blind spot was underestimating how policy and regulation shape the space more than rendering does.

Open questions I'm still chewing on:

1. What standard binds proximity, permission, and profile across platforms?
2. Can zero knowledge proofs say we follow each other without leaking handles?
3. Should OSs expose a NameDrop for AR primitive?

Durable principles: consent first, local first, rotate by default, degrade gracefully. Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/social-media-profile.md>

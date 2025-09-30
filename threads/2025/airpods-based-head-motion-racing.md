---
title: AirPods based head motion racing
date: 2025-09-29T05:45:01.835Z
url: https://x.com/AnandChowdhary/status/1972538082571563067
---

This is awesome, an AirPods controlled racer game. Using the most popular everyday earbuds as a 3 DoF IMU with Core Motion and making the control feel smooth, comfy, and low latency under tight limits.  
  
On iOS you can read head motion from compatible AirPods with Core Motion's CMHeadphoneMotionManager.  
  
You get CMDeviceMotion with an attitude quaternion and fused gyro and accel at around 25 Hz. Then you smooth it, add dead zones and hysteresis, clamp extremes so your neck is happy, and calibrate a neutral pose every session.  
  
Constraints are real: 3 DoF only, limited update rate, yaw drift, device auto switching, and odd behavior when the buds lose fit.  
  
Winning here is mostly filter plus UX. Good neutral calibration, quick re center cues, and a tight latency budget across read, process, and render.  
  
This is a fun direction for hands free play and accessibility: <https://apps.apple.com/us/app/ridepods-race-with-head/id6752268828>

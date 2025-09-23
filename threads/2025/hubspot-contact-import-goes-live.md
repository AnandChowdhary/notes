---
title: HubSpot contact import goes live
date: 2025-09-22T13:45:17.409Z
url: https://x.com/AnandChowdhary/status/1970122179800178806
---

This week at [@FirstQuadrant](https://x.com/FirstQuadrant): HubSpot contact import is live (feature preview). Pull your CRM into FQ with a click, unify lists, and start outreach with no CSVs. Week 37, 2025\. 🔌👇  
  
How it works:  
• Go to Imports → Apps  
• Connect HubSpot  
• Start an all-contacts import  
Hit Import and watch your workspace populate with people your team already knows. We show HubSpot-specific labels and descriptions so you know what's coming in and how it'll look. Contacts are ready for Qualification, Sequences, Autopilot.  
  
Improvements  
• Deal pages now show multiple associated contacts and companies on HubSpot-synced deals for full context.  
• Import settings now include HubSpot-specific details to reduce guesswork.  
  
Fix  
• Emails no longer stall when a prior message has a future timestamp. We send using the current time.  
  
Under the hood  
• New HubSpot "all contacts" import endpoint, new response types, tighter error handling  
• Unified deal upsert, connection IDs, and schemas for multi-contact/company  
• Better error logs, a pagination guard, and correct audit/deleted-deal checks  
  
Docs  
• Revamped HubSpot guides: BCC auto-logging, pipeline sync, deal sync  
• Email/Calendar docs: what the "Invalid" OAuth badge means + Nylas reauth steps  
• Auto-generated docs/changelog to keep notes current  
  
Full notes: [https://docs.firstquadrant.ai/changelog/2025-09-14-hub-spot-contact-import Zero](https://docs.firstquadrant.ai/changelog/2025-09-14-hub-spot-contact-import<br/><br/>Zero) manual data entry. That's the goal.

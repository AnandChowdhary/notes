---
title: Contact summaries and duplicate cleanup
date: 2025-08-14T15:15:12.907Z
url: https://x.com/AnandChowdhary/status/1956011683408961698
---

This week at [@FirstQuadrant](https://x.com/FirstQuadrant): Contact Summaries and cleaner duplicate merging: One click to know who you're talking to, one click to keep your sales stack tidy 📝👇  
  
Contact Summary lives in the top-right on a contact. It's AI-powered and pulls 5-7 bullets from your interactions: role, interests, recent touchpoints, and key context. Great for quick prep before calls or meetings. I've been clicking it a lot.  
  
Improvements that change daily workflows:  
\- New contact dialog: choose to process on create with a clear toggle, success messages reflect your choice.  
\- Imports: process-on-import, row counts for pending/unqualified/qualified, and an AI credit estimate before you start. Only email is required.  
\- Bulk actions: Approve, Unapprove, Regenerate (with confirm), plus on-demand Enrich. Cleaner, more responsive controls.  
\- Properties: hide irrelevant fields, instant UI refresh, success toasts.  
\- Action tags: clearer labels for Reply now, Follow-ups, Reply later. Links in email, calendar, and chat open in a new tab (yes, really!). Smarter screen after deleting a task. Sort icons only where columns actually sort.  
\- Usage: clear notices when your org exceeds AI credits. Customer actions now shows each account's trial end date.  
  
Fixes you'll notice:  
\- Email subject comparisons are correct even with Re:, and placeholder subjects no longer break parsing.  
\- New activity date selector stays anchored on small screens.  
\- No more duplicate activities in suggestions thanks to stable identification across types.  
\- Property updates are reliable across multiselect, boolean, number, and date-time. UNKNOWN is ignored where it should be.  
\- Opening a deleted or merged contact redirects to the live record or shows a clear message.  
\- Calendar event cards show a readable organizer fallback. Bulk action bars don't hide behind elements. Changelog links and slugs are consistent.  
  
Behind the scenes:  
\- Parts of the AI stack now run on GPT-5 with simpler prompts and better detection of mentioned contacts, prompts gained a confidence parameter and we removed legacy reasoning flags.  
\- Background smart dedupe, a new summary field, and a service that summarizes conversation history.  
\- Calendar events process in the background to classify sales meetings and write tasks/metadata, organization sync runs on updates and subscription changes.  
\- Foundations for bulk email enrichment with usage tracking, null-friendly schema for due dates and pipelines, richer context and fallbacks in task creation, stable item IDs and stricter dedupe, hardened enrichment and tighter import handling, faster merges with better activity logging, improved subscription tracking with start/trial end and auto notes, custom markdown renderer for consistent links.  
  
TL,DR: See what matters about a contact at a glance and keep your CRM clean. Full notes: <https://docs.firstquadrant.ai/changelog/2025-08-10-contact-summary>

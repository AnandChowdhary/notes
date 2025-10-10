---
title: Email as a user interface
date: 2025-10-09T15:15:15.585Z
url: https://x.com/AnandChowdhary/status/1976305415718846595
---

Email can be an interface. Transactional mail plus <schema.org> quick actions turns the inbox into a UI. In 2017 I wrote a note about doing this with Amazon SES. I revisited what aged well, what didn't, and how I'd build it today. ✉️👇  
  
Found this in my notes from June 26, 2017: "Amazon SES mail sending API with integrated schema markup for quick actions."  
  
The setup then: Gmail supported Email Markup actions like View, Confirm, Track.  
You had to register your domain and wait for approval.  
Inbox by Gmail was still alive.  
Simpler times.  
  
Technical path in 2017 was clear. Send HTML via SES. Add a JSON‑LD EmailMessage whose potentialAction is ViewAction to go to a URL or ConfirmAction for one click. Use HttpActionHandler for inline confirm. You needed SPF and DKIM aligned and Google whitelisting or nothing rendered.  
  
That forced teams to treat markup as production infra, not a stunt.  
  
What changed since. Gmail added dynamic email with AMP for interactive content, but support stayed narrow, so schema actions are still the stable path for common flows. Deliverability became the gate. Gmail and Yahoo now expect SPF, DKIM, DMARC alignment, one click unsubscribe, and low complaint rates. SES shipped VDM and Mail Manager so you can monitor reputation, route traffic, and alert on issues.  
  
What endures and what I'd do today:  
  
Use actions on high intent transactional mail like RSVP, confirm, track with precise deep links. Register with Google and keep auth tight.  
  
Invest in deliverability first with SPF, DKIM, DMARC and RFC 8058 one click unsubscribe. Instrument with SES event destinations and VDM. Treat AMP as optional with a graceful fallback.  
  
Tradeoffs: Gmail centric support, more QA, and silent failure if you miss a requirement.  
  
Here's the original note from 2017: <https://github.com/AnandChowdhary/notes/blob/main/notes/2017/amazon-ses-mail.md>

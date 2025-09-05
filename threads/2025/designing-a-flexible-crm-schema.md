---
title: Designing a flexible crm schema
date: 2025-09-04T12:32:21.520Z
url: https://x.com/AnandChowdhary/status/1963580821362905549
---

Today I went down a rabbit-hole thinking about how to build a flexible CRM on top of Postgres. Most CRMs lock you into rigid tables (contacts, deals, etc.If you want users to define their own record types, custom fields, and relations, you need a different schema design. 💽👇  
  
To build a flexible CRM like [@Attio](https://x.com/Attio) or [@NotionHQ](https://x.com/NotionHQ), the core approach is similar:  
 • records → one table, one row per object  
 • data JSONB → entire payload of custom attributes  
 • attribute\_definitions → metadata describing fields (name, type, validations)  
 • attr\_\* mirrors → typed tables for indexed filters & sorts  
  
Why JSONB? Easy whole-object storage, fast patching, and flexible schemas per tenant. Paired with mirrors (attr\_text, attr\_number, …) you still get performant queries.  
  
Relations are first-class:  
 • record\_edges stores links between records  
 • relation\_types define semantics + cardinality (1-1, 1-n, n-n)  
 • constraints enforced with partial unique indexes  
  
Primitives to support:  
 • text (with validations like email/url/phone)  
 • number (int/decimal)  
 • boolean  
 • date, datetime (zoned), datetime\_local (wall time)  
 • select + multiselect (with option catalogs + junctions)  
 • arrays of primitives (attr\_text\_many, attr\_number\_many, …)  
 • references (edges)  
 • file/media pointers (attachments)  
 • currency (with FX normalization)  
 • formula / rollup  
  
First-class currency handling (if you'd build [@Stripe](https://x.com/Stripe) in 2025):  
 • store amount\_minor (integer minor units, exact)  
 • generate amount (NUMERIC) for math  
 • compute amount\_base (converted to tenant’s base currency) for sorting & rollups  
 • fetch FX rates opportunistically for only the (base, quote) pairs you actually need  
  
Dates & time zones:  
 • date for calendar days (filters like “last week”)  
 • timestamptz for absolute instants (UTC)  
 • timestamp for local wall times (“every day at 9am”)  
 • optionally persist original IANA tzid for display  
  
Soft deletes:  
 • deleted\_at everywhere  
 • partial indexes where deleted\_at is null  
 • triggers cascade edges on delete  
 • background job purges after N days  
  
Formulas & rollups:  
 • single formula engine  
 • rollups = formulas that aggregate via a relation  
 • dependency graph stored in formula\_dependencies  
 • recompute enqueued to formula\_jobs and processed by workers  
  
Unique fields:  
 • implemented with partial unique indexes on the mirrors  
 • e.g. create unique index on attr\_text(tenant\_id, attribute\_id, value) where attribute\_id = …;  
  
Files/media:  
 • metadata in attachments (filename, mime, size, storage key)  
 • blob in S3/GCS  
 • queries like “has proposal PDF” = exists(select …)  
  
Arrays:  
 • per-element tables for queryable sets (attr\_text\_many, …)  
 • add position if ordered  
 • no mixed-type arrays  
  
Indexing patterns:  
 • (tenant\_id, record\_type\_id, updated\_at desc) for list views  
 • (tenant\_id, attribute\_id, value) on mirrors  
 • GIN on records>data for ad-hoc JSON search  
  
TL;DR:  
 • records + JSONB payload for flexibility  
 • typed mirrors for performance  
 • edges for relations  
 • currency normalized to base for cross-currency ops  
 • formulas/rollups with a dependency graph  
 • soft deletes + jobs for hygiene

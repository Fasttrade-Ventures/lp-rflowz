# RflowZ Analytics Master Strategy

> Version **2026-08-14**. Marketing site only: [rflowz.com](https://rflowz.com).
> Property: GA4 `G-HPFJDV88NG` ([`src/lib/site.ts`](../src/lib/site.ts)).
> Labels: **VERIFIED** (this repo) · **UNMEASURED** (app) · **OWNER** (GA4 UI)

Do not invent traffic, conversion rates, or DebugView results. Do not send PII.

---

## 1. Business questions this site can answer

| Question | Signal |
|----------|--------|
| Did someone accept analytics and visit a page? | `page_view` (consent required) |
| Which landing path leads to a register click? | `generate_lead` + `page_path` |
| Which CTA location drives register clicks? | `cta_location` |
| Did they see pricing before converting? | `pricing_view` then `generate_lead` |
| Did they try Sign in or See pricing instead? | `cta_click` |
| Did they start contact by email? | `email_click` |

**This site cannot answer:** Did they create an account? Did they pay? Which plan did they buy? Those happen on [app.rflowz.com](https://app.rflowz.com) (**UNMEASURED** here).

---

## 2. KPI hierarchy

**North star (business):** activated Free account on the app. **Not in this repo.**

**Primary KPI (this site):** `generate_lead` count = click to `app.rflowz.com/register` after analytics consent. This is a **proxy**, not a completed signup.

**Secondary:** `generate_lead` / sessions; landing `page_path`; device (GA4 automatic).

**Micro:** `pricing_view`, `cta_click` (pricing / login), `email_click`.

**Diagnostic:** `page_view`, source/medium (GA4 automatic).

Do not mark `page_view` as a GA4 key event.

---

## 3. Funnel (marketing site)

```
Landing page_view
        ↓
pricing_view (optional)
        ↓
cta_click (See pricing / Sign in)  OR  generate_lead (register)
        ↓
app.rflowz.com  —  UNMEASURED
```

Drop-off after `generate_lead` is expected: the user left this domain.

---

## 4. Event specification (v2026-08-14)

Consent: events fire only if `localStorage` `rflowz-analytics-consent` is `granted` and `gtag` is loaded. Decline = no GA script, no events.

### `page_view`

- **Purpose:** Count unique path views under App Router client navigation without double-counting `gtag('config')` automatic page views.
- **Trigger:** Pathname change after GA is configured with `send_page_view: false`; first view sent by the route tracker.
- **Params:** `page_path` (string, required), `page_title` (string, required).
- **Owner:** LP engineering.

### `generate_lead`

- **Purpose:** Primary LP outcome — intent to start a Free account.
- **Trigger:** Click on register CTA (`data-cta-action="register"` or `href` contains `/register` on `app.rflowz.com`).
- **Params:** `cta_name` (string, button label), `cta_location` (string: `hero` / `header` / `pricing` / `final` / `sticky` / `seo` / `contact`), `page_path` (string).
- **Not collected:** email, plan price, User-ID.
- **Owner:** LP engineering.
- **GA4 UI (OWNER):** mark as **key event**.

### `cta_click`

- **Purpose:** Secondary CTAs that are not register.
- **Trigger:** See pricing (`/#pricing`) or Sign in (`/login` on the app), including `data-cta-action` `pricing` or `login`.
- **Params:** `cta_name`, `cta_location`, `destination` (`pricing` or `login`).
- **Owner:** LP engineering.

### `pricing_view`

- **Purpose:** Did the user see the plan table section?
- **Trigger:** `#pricing` intersects viewport (~40%) once per mount.
- **Params:** `page_path`.
- **Owner:** LP engineering.

### `email_click`

- **Purpose:** Contact intent.
- **Trigger:** `mailto:` click.
- **Params:** `cta_location` only. **Never** send the address.
- **Owner:** LP engineering.

---

## 5. Implementation map

| Piece | File |
|-------|------|
| `track()` | [`src/lib/analytics.ts`](../src/lib/analytics.ts) |
| Consent key | [`src/lib/consent.ts`](../src/lib/consent.ts) |
| Script + click + route | [`src/components/GoogleAnalytics.tsx`](../src/components/GoogleAnalytics.tsx) |
| Pricing impression | [`src/components/Pricing.tsx`](../src/components/Pricing.tsx) |

No GTM. No ads pixels. No dataLayer PII.

---

## 6. Privacy

- GA loads **only after Accept**.
- No passwords, emails, names, free-text, payment data, User-ID.
- No field-level form tracking (this LP has no lead form).
- Mailto: event name only, not `href`.

---

## 7. Attribution limits

UTM on inbound ads will appear in GA4 if present. Last-click on this site ends at `generate_lead`. Cross-domain linker to the app is **NEXT**, not this sprint. Do not invent AI-referral traffic.

---

## 8. Scorecard (this repo after implementation)

| Dimension | Score | Notes |
|-----------|------:|-------|
| Measurement Strategy | 78 | Questions mapped; app gap explicit |
| KPI Definition | 80 | Proxy primary KPI documented |
| Event Architecture | 82 | Five events, stable names |
| Parameter Quality | 80 | Location + path only |
| Data Layer | 55 | Direct `gtag`; no GTM layer (by choice) |
| GA4 Implementation | 76 | Consent-gated; key event is owner UI |
| Tag Governance | 70 | One tag: gtag.js |
| Conversion Tracking | 58 | Proxy click only; no app `sign_up` |
| Attribution | 50 | LP only; no cross-domain |
| CRM Integration | 0 | None |
| Data Quality | 72 | Deduped pricing_view; validate payload |
| Privacy / Consent | 86 | Opt-in before script |
| Dashboard Quality | 20 | Use GA4 UI; no custom dashboard in repo |
| Experiment Tracking | 0 | None this sprint |
| Documentation | 82 | This spec |
| Maintainability | 80 | Small helper + one listener |
| **Overall** | **72** | Broken if `generate_lead` never fires; app outcomes still missing |

---

## 9. Issues

**AN-01** · P1 · Conversion · App  
Problem: True signup unmeasured. Expected: app `sign_up`. Actual: LP click only. Fix: **NEXT** app GA4.

**AN-02** · P2 · Attribution · Cross-domain  
Problem: New session on app. Fix: linker **NEXT** if same property.

**AN-03** · P2 · GA4 UI · Key event  
Problem: Code can send `generate_lead`; GA4 will not treat it as a key event until the owner marks it.

---

## 10. Owner GA4 UI (do in analytics.google.com)

1. Mark `generate_lead` as a key event.
2. If reports need them, register custom dimensions: `cta_location`, `cta_name`, `page_path` (event-scoped).
3. Do not create dozens of unused dimensions.

---

## 11. Payload QA (local)

1. Open `http://localhost:3000`, **Decline** → Network: no `gtag/js`, no `google-analytics.com/g/collect`.
2. Clear `localStorage` key `rflowz-analytics-consent`, reload, **Accept** → `gtag/js?id=G-HPFJDV88NG` loads.
3. Click Hero “Start free” → request to `google-analytics.com/g/collect` (or `analytics.google.com`) with `en=generate_lead` (or event name in payload).
4. Scroll `#pricing` once → `en=pricing_view`.
5. Click “See pricing” → `en=cta_click`.
6. Client-navigate `/about` → additional `page_view` for `/about`.

Do not claim DebugView numbers in this doc unless someone recorded them.

---

## 12. Reporting cadence

Weekly: landing page × `generate_lead` in GA4 + Search Console (sitemap already submitted). No extra dashboard in this repo.

---

## 13. NEXT

- App `sign_up` / subscription events.
- Optional same-property cross-domain linker.
- GTM / Google Ads / Meta if paid campaigns start.
- A/B experiment events when a test has a hypothesis.

---

## 14. Ownership

| Object | Owner |
|--------|--------|
| Event code | LP engineering |
| Consent copy | LP / legal |
| GA4 property access | Marketing owner |
| App conversion events | App engineering |

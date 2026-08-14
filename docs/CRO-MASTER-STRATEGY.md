# RflowZ CRO Master Strategy

> Conversion strategy for [rflowz.com](https://rflowz.com) (this marketing repo).  
> Labels: **VERIFIED** (codebase / live product) · **INFERENCE** · **HYPOTHESIS** (unproven) · **RECOMMENDATION**  
> Do not invent GA4 numbers, conversion rates, or social proof. No dark patterns, fake urgency, fabricated ratings, or extra popups.

---

## 1. Conversion scorecard (pre-change diagnosis)

| Area | Score | Issues | Priority |
| ---- | ----- | ------ | -------- |
| Value proposition (first view) | 52 | Brand-clever H1; no product visual; empty spacer | P0 |
| CTA hierarchy | 48 | Mixed labels; one hero CTA; header “Get started today” | P0 |
| Risk reversal | 55 | Free/no-card exists in FAQ, not in hero | P0 |
| Funnel order | 50 | Testimonials after pricing | P0 |
| Trust / proof | 40 | Generic named quotes; no founder chip on LP | P0 |
| Pricing decision UX | 62 | Starter featured; Coming soon cards still register CTAs | P0 |
| Objection handling | 70 | ChatGPT / RAG / TreZ FAQs present; missing signup + integrity | P0 |
| Message match (screenshots) | 45 | Secondary titles still “templates” vs Library / Problem Statement | P1 |
| Mobile conversion | 50 | No sticky primary CTA; final CTA thin | P1 |
| Measurement | 40 | GA4 ID present; events not named in strategy | P1 |
| **Overall** | **52** | Clarity + proof before price, not more buttons | — |

---

## 2. Funnel (inferred)

```
Organic / direct / SEO pages
  → Homepage / resource page
  → Understand offer
  → Trust (proof, integrity, founder)
  → Pricing
  → Register (Free, no card)  →  app.rflowz.com/register
  → App onboarding (Prof Z chat)
```

**VERIFIED:** Primary conversion is Free-plan registration. Starter is the live paid plan. Standard and Professional are coming soon. Signup is on the app, not a multi-step LP form.

**INFERENCE:** Ready-to-try visitors bounce when they do not see who it is for, that it is free, or what the product looks like before scrolling.

---

## 3. Conversion hierarchy (locked)

| Priority | Action | Destination |
| -------- | ------ | ----------- |
| Primary | Start free — no credit card | `https://app.rflowz.com/register` |
| Secondary | See pricing | `/#pricing` |
| Tertiary | Sign in | `https://app.rflowz.com/login` (existing users) |
| Support | Contact / FAQ / vs ChatGPT | `/contact`, `/#faq`, `/rflowz-vs-chatgpt` |

Success metric: **qualified Free signups**, not more equal-weight buttons.

---

## 4. Value proposition

For students and researchers who need a submission-ready research proposal, RflowZ provides Ask Prof Z + OpenAlex Library + RAG grounding + citation checks, unlike generic ChatGPT, because the workflow is structured through to DOCX/PDF/PPTX export.

Hero first view must answer: what / who / why care / why trust / what next.

---

## 5. Issue IDs and hypotheses

| ID | Observation | Hypothesis | Change |
| -- | ----------- | ---------- | ------ |
| CRO-01 | Headline is brand-clever | Visitors do not map RflowZ to an outcome | Outcome H1 + subhead |
| CRO-02 | No hero screenshot | Product feels abstract | Onboarding screenshot in hero |
| CRO-03 | CTA copy varies | Decision friction | Unify primary/secondary labels |
| CRO-04 | Proof after price | Evaluators skip trust | Testimonials before pricing |
| CRO-05 | Named quotes without attribution | Trust risk | Relabel as researcher needs + founder chip |
| CRO-06 | Coming soon plans = Get started | False equal choice | Starter as live paid path; Coming soon not register CTAs |
| CRO-07 | Secondary titles mismatch shots | Message mismatch | Library / export / Problem Statement / RQs |
| CRO-08 | Mobile has no persistent CTA | Scroll drop-off | Compact sticky register CTA |

---

## 6. Roadmap

### NOW (this sprint)

- Hero rewrite, dual CTA, trust line, screenshot; remove empty spacer; no floating CTA that hurts taps
- Unify CTAs (header, pricing live plans, final CTA, SEO `SeoCta`)
- Homepage order: Hero → Who it’s for → How it works → Core features → Secondary → Testimonials → Pricing → FAQ → Final CTA
- Honest proof + founder chip
- Pricing decision copy + FAQ objections (after signup, academic integrity)
- Sticky mobile CTA; stronger final CTA
- This document

### NEXT

- Wire GA4 events (`hero_cta`, `header_cta`, `pricing_cta`, `sticky_cta`, `footer_cta`, `pricing_view`, `register_click`)
- Review Search Console / GA4 after volume exists
- Tighten SEO page CTAs with the same hierarchy

### LATER (do not build this sprint)

- Popups / exit-intent
- WhatsApp (no number in product)
- A/B tests until GSC/GA4 volume exists
- Multi-step LP forms (signup is on the app)
- Changing app onboarding (out of this repo)

---

## 7. Measurement

**VERIFIED:** Google Analytics ID `G-HPFJDV88NG` is already on the site.

**RECOMMENDATION:** Track register clicks by placement (hero, header, pricing, sticky, footer, SEO CTA) and `/#pricing` clicks. Do not claim a baseline until events fire.

North star: qualified Free signups, then Starter upgrades in the app.

# Final website audit — RflowZ marketing site

**Audit date:** 14 Aug 2026  
**Product:** Marketing / conversion site for RflowZ (this repo). App workspace and billing live on `app.rflowz.com` (out of this repo).  
**Primary conversion:** Free signup at `https://app.rflowz.com/register` (no credit card).

### Evidence used

| Source | Status |
| --- | --- |
| This working tree (Next.js 14, Tailwind Salient) | Inspected |
| Local `http://localhost:3000` + Playwright (Chrome) | Observed |
| Signed-in app `/subscription` screenshot (Yearly) | Verified prices |
| `https://www.rflowz.com` HTTP smoke | Observed (different build) |
| Docs: SEO, GEO, CRO, Analytics, QA | Inspected |
| GSC / GA4 UI / Lighthouse / VoiceOver / real iPhone | **Not available** |
| App checkout, Stripe, webhooks, emails | **Not in this repo / not tested** |
| Design files / brand guidelines PDF | **Not provided** |

Do not treat live www as this commit.

---

## EXECUTIVE SUMMARY

This is a **marketing site**, not the product. If a qualified visitor understands Ask Prof Z + Library + RAG + citation checks, sees Free / no card, and reaches app register, the site has done its job.

**Locally, that path works.** Hero, pricing, FAQ, and CTAs are coherent. Prices match the signed-in Yearly subscription UI ($0 / $3.99 / $4.99 coming soon / $7.99 coming soon). Hash navigation, skip link, and FAQ fade-in were fixed in this sprint.

**Live www is not this release.** `www.rflowz.com/login` and `/register` still return **200** LP HTML (`Sign In | RflowZ`, Vercel cache HIT). Locally those routes **307** to the app. Calling production “done” would be false.

**Release decision:** **CONDITIONAL** for this working tree. **NOT READY** to treat live rflowz.com as this launch until deploy + production smoke.

**Overall score: 71 / 100** (weighted: conversion path and honesty up; live drift, unmeasured CWV, unproven analytics, no real-device/a11y lab down).

**Maturity: Level 3 — Professional** (usable, positioned, technically organized). Not Level 4: measurement and production validation are incomplete.

---

## BUSINESS ALIGNMENT

**Observed:** Audience is students, researchers, supervisors. Differentiator is structured proposal workspace vs generic ChatGPT. Offer is Free start, Starter live paid, higher plans coming soon.

**PASS (local).** First-view path: Understand (H1 + screenshot) → Trust (no card, founder named, citation checks) → Evaluate (`/#pricing`) → Act (register).

**Journey breaks (inferred, medium confidence):** After `generate_lead` the user leaves this domain. This site cannot prove signup or payment. That is an architecture choice, not an LP bug.

**Do not change:** Primary CTA copy (`Start free — no credit card`), secondary `See pricing`, tertiary Sign in. Do not add fake reviews or urgency.

---

## USER EXPERIENCE

**Works:** Clear H1, product screenshot in hero, Who it’s for, How it works, feature screenshots, honest “not testimonials” block, pricing with coming-soon cards that do not fake checkout, FAQ, contact as email.

**Fails / friction:** Homepage is long (cognitive load). Feature sections were reordered (streamline cards, then AI tools tabs). `#features` still exists on the tabbed block; nav Features now targets `#secondary-features` (**observed**).

**First-time user test (local, high confidence):** What / who / next action are answerable above the fold. Why trust is weaker than a site with independent reviews (**hypothesis**, do not invent quotes).

---

## VISUAL / BRAND

Salient + blue/slate + Lexend/Inter + product UI shots is consistent. Logo-off: still reads as a serious academic SaaS, not a chatbot landing (**inference**).

**Do not redesign.** Preserve hero screenshot, featured Starter card, coming-soon treatment.

**P3:** Huge decorative FAQ/CTA background images; product screenshots carry the brand, not the blobs.

---

## CONVERSION

| Element | Verdict |
| --- | --- |
| Primary CTA to app register | PASS (local) |
| Pricing honesty vs Yearly app UI | PASS (verified) |
| Coming soon not sold as live | PASS |
| Sticky mobile CTA | Present; hidden while consent pending (**observed**) |
| In-app “Current plan” | Correctly **not** copied to LP |

**Drop-off risks (hypothesis):** Long page before price; no independent social proof; consent bar competes with sticky CTA; app onboarding quality unknown.

Do not invent uplift %.

---

## TECHNICAL

Next.js App Router, shared `plans.ts` / `entity.ts` / `cta.ts` / `analytics.ts`. Competent developer can change prices in one file. No CMS. No tests in `package.json` beyond lint.

**Systemic motion risk (partially fixed):** GSAP `from`/`autoAlpha` hid below-fold copy until refresh. Root cause: hide-on-load + stale ScrollTrigger. Current reveal uses opacity + IntersectionObserver + `clearProps` (**code + Playwright**). Still a class of risk if new sections copy old patterns.

**Hash nav:** Instant `HashScroll`; CSS `scroll-smooth` removed (**verified local**).

---

## PERFORMANCE

**Unable to verify.** No Lighthouse, CrUX, or Web Vitals for this build.

**Inference (medium):** Homepage is image-heavy (hero + feature tabs + FAQ/CTA backgrounds). LCP likely a screenshot. GSAP on homepage adds JS. Consent gates gtag until Accept.

**Do not invent TTFB/LCP/INP/CLS.**

---

## ACCESSIBILITY

**Observed (Chrome keyboard):** Skip link focuses `#main-content`; tab order hits header then CTAs; FAQ is static Q&A (good).  
**Not tested:** VoiceOver, NVDA, TalkBack, contrast lab, 200% zoom, real iOS.

**Do not claim WCAG conformance.**

---

## SECURITY

**Observed in code:** CSP, HSTS, nosniff, DENY framing, referrer policy, permissions policy, `poweredByHeader: false`, auth routes redirect off-site.

**Live HTML:** `access-control-allow-origin: *` on document responses (**observed** on www). Unusual for HTML; P3/P4 after deploy.

**Not tested:** Pentest, dependency audit, app auth.

LP has no passwords, uploads, or payments. Residual risk is XSS via third-party scripts (gtag after consent) and mis-set cookies on the **app**.

---

## SEARCH (SEO + GEO + Schema)

**SEO (local):** Titles, sitemap routes 200, robots allow `/` and disallow `/login` `/register`, 404 titled. **Live sitemap lastmod 2026-08-12** — production is older than this sprint.

**GEO:** Entity facts on About + `llms.txt`. Homepage “at a glance” removed (duplicate of About). Prices no longer labeled unverified vs Yearly UI.

**Schema:** Organization, WebSite, SoftwareApplication, Offers InStock vs PreOrder. **Not run** through Google’s rich-results tester this pass. Valid ≠ eligible ≠ displayed.

---

## ANALYTICS

**Code:** Consent-gated GA4 `G-HPFJDV88NG`; `page_view`, `generate_lead`, `cta_click`, `pricing_view`, `email_click`. App `sign_up` **UNMEASURED**.

**Unknown:** Whether owner marked `generate_lead` as a GA4 key event; DebugView not run.

Proxy lead ≠ account created.

---

## QA

See `docs/QA-RELEASE-REPORT.md`. Local critical journeys pass after hash/skip/reveal fixes. Production login/register **stale**. Chrome-only. No load test. No payment test (correct: not on LP).

---

## AUDIT SCORECARD

| Category | Score | Notes |
| --- | ---: | --- |
| Strategy | 82 | Clear Free-signup job |
| Brand | 76 | Consistent Salient academic SaaS |
| UI | 74 | Hierarchy OK; long page |
| UX | 76 | Path obvious; proof thin |
| CRO | 78 | CTA/pricing honesty strong |
| Content | 80 | Specific; no lorem |
| Responsive | 70 | Simulated only |
| Accessibility | 58 | Keyboard only |
| Performance | N/A* | *Unable to verify — no lab/field data |
| Security | 68 | Headers yes; no pentest; LP attack surface small |
| Technical architecture | 80 | Shared libs, App Router |
| SEO | 74 | Local solid; live stale |
| GEO | 78 | About + llms; prices verified Yearly |
| Schema | 70 | Present; not validator-run |
| Analytics | 62 | Code yes; GA4 UI/app unknown |
| Motion | 64 | Purpose mixed; hide-bug class remains a risk |
| Micro-interactions | 68 | Magnetic CTAs; Headless tabs |
| Image / art direction | 72 | Product shots help; decorative JPG cost unknown |
| 3D / WebGL | N/A | Not used |
| QA / reliability | 66 | Local pass; prod ≠ this tree |

\*Performance excluded from average; unknown is not “fast.”

**Weighted overall: 71.**

---

## LAUNCH GATES

| Gate | Result |
| --- | --- |
| BUSINESS | **PASS** (local intent) |
| FUNCTIONALITY | **PASS** local / **FAIL** live auth pages vs this branch |
| UX | **PASS** (with proof caveats) |
| RESPONSIVE | **CONDITIONAL** |
| ACCESSIBILITY | **CONDITIONAL** |
| PERFORMANCE | **UNABLE TO VERIFY** |
| SECURITY | **CONDITIONAL** |
| SEO | **CONDITIONAL** until deploy |
| GEO | **PASS** for listed facts |
| SCHEMA | **CONDITIONAL** |
| ANALYTICS | **CONDITIONAL** |
| QA | **CONDITIONAL** |
| **PRODUCTION** | **CONDITIONAL** (this tree) / **NOT READY** as live=this release |

---

## TOP 5 STRENGTHS (do not undo)

1. Honest conversion: Free, no card, coming-soon plans not sold as live.  
2. Product-specific copy (Ask Prof Z, OpenAlex, RAG, citation checks) vs generic AI filler.  
3. Single source of prices (`plans.ts`) aligned to Yearly `/subscription`.  
4. Auth belongs on the app; LP `/login` `/register` 307 locally.  
5. Consent before gtag; no fake AggregateRating.

---

## TOP 5 RISKS

1. **Live deploy lag** — www still serves LP login/register 200.  
2. **Measurement gap** — register click ≠ signup; key event unverified.  
3. **GSAP hide class** — could regress if someone restores `autoAlpha` + ScrollTrigger `from()`.  
4. **No CWV / real-device evidence.**  
5. **Monthly billing toggle unknown** — do not invent annual discounts.

---

## TOP 5 OPPORTUNITIES (not launch blockers)

1. Mark `generate_lead` in GA4; later measure app `sign_up` (cross-domain or app tag).  
2. Lab Lighthouse on production after deploy; compress decorative backgrounds if LCP/weight is high.  
3. One iPhone Safari pass of home → pricing → register.  
4. VoiceOver on skip + mobile menu + pricing table.  
5. Depth content (30 articles) only after GSC shows impressions — already NEXT in SEO doc.

---

## TOP 5 PRIORITY FIXES

1. **P0:** Deploy this branch; purge CDN; smoke www `/`, `/login`→app, `/register`→app, `/#pricing`.  
2. **P1:** Owner: GA4 key event `generate_lead`.  
3. **P1:** Production CWV snapshot (unknown until measured).  
4. **P2:** Real iPhone + one other browser.  
5. **P2:** Keep motion policy: never hide copy with `visibility: hidden` for scroll reveals.

---

## PRIORITY FINDINGS

### P0 — AUDIT-01 — Live ≠ this release

- **Problem:** www `/login` and `/register` are 200 HTML, cached.  
- **Expected:** 307 to `app.rflowz.com` (this branch).  
- **Evidence:** HTTP 200, title “Sign In | RflowZ”, `x-matched-path: /login`, age ~12000s. Local 307.  
- **Impact:** Returning users may hit a stale LP sign-in instead of the app; message match broken.  
- **Action:** Deploy + cache invalidation + smoke.  
- **Confidence:** High.

### P1 — AUDIT-02 — Analytics not proven in GA4 UI

- **Problem:** Code can fire `generate_lead`; unknown if it is a key event or appears in DebugView.  
- **Action:** Owner marks key event; one consented click test.  
- **Confidence:** High that code exists; Low that reporting is correct.

### P1 — AUDIT-03 — Performance unknown

- **Problem:** No LCP/INP/CLS. Image-heavy homepage is a plausible LCP risk.  
- **Action:** Measure production after deploy before adding more motion/images.  
- **Confidence:** Medium for risk; none for numbers.

### P2 — AUDIT-04 — Motion architecture

- **Problem:** Scroll-hide GSAP caused invisible FAQ/pricing/testimonials.  
- **Root cause:** `autoAlpha` + trigger mismatch + matchMedia cleanup.  
- **Action:** Keep current `reveal.ts` contract; do not reintroduce `autoAlpha` for below-fold copy.  
- **Confidence:** High (reproduced then fixed).

### P2 — AUDIT-05 — Cross-browser / device gap

- **Problem:** Chrome Playwright only.  
- **Action:** iPhone Safari smoke of CTA + hash + menu.  
- **Confidence:** High that gap exists.

### P3 — AUDIT-06 — CORS `*` on live HTML

- **Evidence:** `access-control-allow-origin: *` on www document responses.  
- **Action:** Recheck after deploy; tighten if still present.  
- **Confidence:** High observation; Medium severity.

### P3 — AUDIT-07 — Monthly toggle not captured

- **Action:** Optional screenshot of Monthly billing; do not change listed $3.99/$4.99/$7.99 without it.  
- **Confidence:** High.

### P4 — Decorative background weight, logo tab name, Features hash ID vs first section

Polish only.

---

## DO NOT CHANGE

- Free / no-card primary CTA  
- Coming-soon Standard/Professional  
- Honest testimonials labeling  
- Consent-first analytics  
- Redirecting auth to the app  
- Price amounts that match Yearly UI  
- No fake reviews / no TreZ-TAM as live  

---

## ROADMAP

**Phase 1 — Stabilize:** Deploy this tree; prod smoke; confirm login/register 307; FAQ/pricing visible on cold scroll.  
**Phase 2 — Optimize:** GA4 key event; CWV; iPhone; keyboard/SR sample.  
**Phase 3 — Differentiate:** Content depth after GSC; art direction of backgrounds only if weight hurts LCP.  
**Phase 4 — Scale:** App `sign_up` measurement; design-system lint for motion; optional tests.

---

## TESTING LIMITATIONS

Not tested: Safari, Firefox, Edge, real iOS/Android, VoiceOver/NVDA, Lighthouse, CrUX, GA4 DebugView, GSC queries, email delivery, app register completion, Stripe, load, rollback.

**Assumption:** Qualified users will accept (or decline) analytics and still convert. Decline must not block register (**observed** locally).

---

## RELEASE DECISION

**This working tree: CONDITIONAL.**  
Critical local journeys pass. No open P0 **in local**.  

**Live rflowz.com as “this launch”: NOT READY** until AUDIT-01 is closed.

After a clean production smoke of home, pricing jump, register CTA, and auth redirects, status can move to **READY** with P1 analytics/CWV accepted as known gaps.

# QA release report — RflowZ marketing site

**Release:** local `lp-rflowz-main` (unreleased vs production)  
**Environment tested:** `http://localhost:3000` (Next.js 14.2.35, Chrome/Playwright)  
**Date:** 14 Aug 2026  
**Production spot-check:** `https://www.rflowz.com` (current Vercel deploy — **not** this working tree)

## Product under test

Marketing / conversion site for RflowZ. Core outcome: a visitor can understand the offer and reach **Free signup** at `https://app.rflowz.com/register`. Payments, workspace, and account APIs live on the **app**, not this repo. No CMS. No on-site lead form (contact is `mailto:`).

## Overall QA score

**68 / 100** (critical journeys on local are usable after fixes; several required layers were not tested; production is a different build)

| Area | Score | Notes |
| --- | ---: | --- |
| Functionality | 82 | Local smoke passed; hash nav was broken then fixed |
| User journeys | 78 | Home → register CTA works; pricing jump now works locally |
| Navigation | 80 | Hash + skip fixed; production `/login` still old |
| Forms | 70 | No marketing lead form; mailto only |
| Responsive | 72 | 320–1440 simulated, no overflow; no real iPhone/Android |
| Cross-browser | 20 | Chrome/Playwright only |
| Accessibility | 62 | Keyboard skip/tab checked; no VoiceOver/NVDA |
| Performance | 15 | Not measured (no LCP/INP/CLS this pass) |
| Security | 55 | CSP/HSTS present locally; no authorized pentest |
| SEO | 70 | Titles/sitemap/404 local OK; production not re-crawled |
| GEO | 78 | Entity copy on About; Yearly prices verified |
| Schema | 60 | JSON-LD present; not validator-run this pass |
| Analytics | 58 | Consent banner works; GA4 DebugView not confirmed |
| Content | 82 | No lorem/TODO in `src`; prices verified vs Yearly UI |
| Brand consistency | 75 | Not a visual-regression pass |
| Animation | 70 | Homepage GSAP; reduced-motion hero visible |
| 3D / WebGL | N/A | Not used |
| Error handling | 72 | 404 works; no offline/API failure UI on LP |
| Deployment | 45 | Local ≠ production; rollback not exercised |

## Defect counts (this pass)

| Priority | Open | Fixed this pass |
| --- | ---: | ---: |
| P0 | 0 | 0 |
| P1 | 0 | 1 (same-page hash) |
| P2 | 0 | 1 (skip focus) |
| P3 | 2 | 1 (404 title) |
| P4 | 3 | 0 |
| P5 | — | not hunted |

## Critical user journeys

| Journey | Local | Production (live) |
| --- | --- | --- |
| Home loads, H1 visible, primary CTA to app register | **PASS** | Smoke: www home **200** (old build) |
| See pricing / header Pricing / `#pricing` | **PASS** after fix | **Not retested** on live |
| SEO pages in sitemap all 200 | **PASS** | **Not fully retested** |
| `/login` `/register` → app | **PASS** (307) | **FAIL vs local intent:** `www.rflowz.com/login` returns **200** “Sign In \| RflowZ” (cached old deploy) |
| Contact mailto | **PASS** (link present; send not tested) | Not tested |
| Consent accept/decline | **PASS** | Not tested |
| 404 | **PASS** | Not tested |

**Critical user journeys (local, after fixes): PASS**  
**Critical user journeys (production as deployed today): FAIL / STALE** — login is still an LP page.

## Gate results

| Gate | Result |
| --- | --- |
| Responsive | **PASS** (simulated viewports only) |
| Accessibility | **CONDITIONAL** |
| Performance | **NOT TESTED** |
| Security | **CONDITIONAL** (headers only) |
| SEO | **CONDITIONAL** |
| Analytics | **CONDITIONAL** |
| **Production readiness** | **CONDITIONAL** for this working tree; **NOT READY** to call *live* production “this release” until deploy + prod smoke |

## Bugs found

### BUG-QA-001 — FIXED — P1
**Same-page hash links did not land on the section in a usable time**

- **Page:** Home (`/#pricing`, `/#features`, skip `#main-content`)
- **Steps:** Load `/`. Click “See pricing” or header “Pricing”.
- **Expected:** Pricing section in view within ~300ms, under sticky header.
- **Actual:** Hash updated; CSS `scroll-smooth` on `<html>` animated ~7,000px over ~2s. At 700ms the section was still off-screen (looked like a broken CTA). Next.js same-route hash also did not reliably `scrollIntoView` without a capture handler.
- **Evidence:** Playwright samples at 200/600/1200/2000ms; `scrollBehavior: smooth`.
- **Root cause:** `scroll-smooth` on `html` + App Router same-path `#` handling.
- **Fix:** `HashScroll` intercepts same-path hash clicks and jumps instantly; removed `scroll-smooth`; skip focuses `#main-content`.
- **Retest:** Desktop “See pricing” and Features: `top ≈ 92`, in view at 250ms. From `/about` → pricing: PASS.

### BUG-QA-002 — FIXED — P2
**Skip link did not move keyboard focus into main**

- **Expected:** After Skip + Enter, focus on `main#main-content`.
- **Actual:** `location.hash = #main-content`, `activeElement` was `BODY`.
- **Fix:** `tabIndex={-1}` on mains + HashScroll `focus()` for `#main-content`.
- **Retest:** `activeTag: MAIN`, `activeId: main-content`.

### BUG-QA-003 — FIXED — P3
**404 used the default site title**

- **Fix:** `metadata.title = 'Page not found'` + `noindex`.
- **Retest:** `Page not found | RflowZ`, HTTP 404.

### BUG-QA-004 — OPEN — P3 — Production
**Live `/login` is not the app redirect**

- **Environment:** `https://www.rflowz.com/login`
- **Expected (this branch):** 307 → `https://app.rflowz.com/login`
- **Actual:** HTTP 200, title “Sign In | RflowZ”, `x-matched-path: /login`, Vercel cache HIT.
- **Root cause:** Production is not this commit (or CDN cache of old HTML). Apex `https://rflowz.com` 308s to `www` (Vercel) — browsers follow; not a functional blocker.

### BUG-QA-005 — OPEN — P3 — Analytics
**Header Features / How it works hash links have no `data-cta`**

Pricing header/mobile now tagged. Other in-nav hashes still untracked. App `sign_up` still unmeasured (known).

### BUG-QA-006 — OPEN — P4
**Logo control has no accessible name in the tab snapshot text** (parent `aria-label="RflowZ home"` is present; second Tab lands on an unlabeled-looking graphic).

### BUG-QA-007 — CLOSED — P4
**Live plan dollar amounts** match signed-in `https://app.rflowz.com/subscription` Yearly view (14 Aug 2026): $3.99 / $4.99 / $7.99. Monthly toggle not captured.

### BUG-QA-008 — OPEN — P4
**Production HTML sends `access-control-allow-origin: *`** on document responses. Unusual for a marketing HTML page; confirm Vercel/project headers after deploy.

## Test execution

| | Count |
| --- | ---: |
| Planned (this adversarial pass) | ~40 focused checks |
| Executed | 38 |
| Passed | 32 |
| Failed then fixed | 3 |
| Open | 3 (prod drift, analytics tags, unverified prices) |
| Blocked | 0 |
| **Not tested** | Safari/iOS/Firefox, VoiceOver, Lighthouse, load, GA4 DebugView, real payment, app auth, email delivery |

## QA gaps (do not hide)

- No physical iPhone / Safari / Firefox
- No screen-reader pass
- No Core Web Vitals lab or field data this pass
- No GA4 DebugView / consent-denied network proof
- No production smoke of **this** build
- App checkout / subscription / webhooks out of scope and untested
- Destructive security testing not authorized and not done

## Production readiness

**CONDITIONAL** for the local marketing site after BUG-QA-001–003.

Do **not** call live rflowz.com this release until:

1. This branch is deployed  
2. Production smoke: home, `/#pricing`, `/login` → app, `/register` → app, sitemap URLs, consent  
3. Owner confirms signed-in subscription prices  
4. GA4 key event `generate_lead` is marked in the GA4 UI  

**READY** only after those, with remaining P3/P4 accepted.

# RflowZ SEO Master Strategy

> Refresh date: 14 Aug 2026. Site: [rflowz.com](https://rflowz.com) · App: [app.rflowz.com](https://app.rflowz.com) · Locale `en_MY`.
> Labels: **VERIFIED** (this repo / public HTTP) · **INFERENCE** · **RECOMMENDATION**
> Do not invent search volume, KD, rankings, traffic, or GSC numbers. Do not guarantee positions.

Conversion path: Free signup at `https://app.rflowz.com/register`. Pricing is the **engine**; metadata and clusters are the **gearbox**.

---

## 1. EXECUTIVE SUMMARY

**VERIFIED:** RflowZ is an AI research-proposal SaaS (Ask Prof Z, OpenAlex Library, RAG grounding, citation integrity, DOCX/PDF/PPTX). The marketing site has homepage, About, Contact, Resources, terms, five intent URLs, robots/sitemap/`llms.txt`, JSON-LD, CRO CTAs, and security headers. `/login` and `/register` are noindex and redirect to the app.

**VERIFIED (engine, 14 Aug 2026):** In-app plans are at [https://app.rflowz.com/subscription](https://app.rflowz.com/subscription), not `/pricing`. Unauthenticated GET returns **302 → /login**. Signed-in **Yearly** view confirms Free; Starter **$3.99/mo billed annually**; Standard **$4.99/mo billed annually** (coming soon); Professional **$7.99/mo billed annually** (coming soon). LP `src/lib/plans.ts` matches. Monthly-toggle totals were not captured. Do not invent a cheaper annual package.

**INFERENCE:** Discovery still competes with ChatGPT tutorials, university how-tos, and other academic AI tools. The product wedge is workflow + Library + RAG + citation checks + export — not generic chat.

**RECOMMENDATION:** Keep one URL per intent. Measure in GSC before rewriting titles for CTR. Do not rank TreZ/TAM/Mendeley/RetraxtAI. Ship the 30-article calendar only after GSC coverage exists (**NEXT**, not this sprint).

---

## 2. SEO SCORE

Scores are qualitative audits of this repo after About/Contact/Resources, CRO, a11y, headers, and this engine/schema pass. They are **not** GSC scores.

| Area | Score | Problems | Priority |
| ---- | ----- | -------- | -------- |
| Technical SEO | 84 | Auth noindex OK; sitemap covers indexable paths; screenshot filename debt left on purpose | Medium |
| On-page SEO | 80 | Home H1 aligned with Hero; unique titles/descriptions; some pages still shorter than university guides | Medium |
| Content | 66 | Five intent pages + hub exist; 30-URL calendar not built | High |
| Keywords | 74 | Clusters mapped; OpenAlex/RAG niche is real | High |
| Search Intent | 76 | Awareness / consideration / transaction URLs exist | Medium |
| Internal Linking | 80 | Footer, hub, Who-it’s-for, related links to `/#pricing` and `/about` | Medium |
| Local SEO | 42 | `en_MY` only; no GBP (correct for this SaaS) | Low |
| E-E-A-T | 74 | About, Contact, founder sameAs (YouTube, LinkedIn), terms | Medium |
| Entity SEO | 72 | Organization + founder + sameAs in schema | Medium |
| Structured Data | 80 | Org/WebSite/Software/FAQ/Breadcrumb; Offers: Free+Starter InStock, Standard/Professional PreOrder; no fake ratings | Medium |
| Performance | 70 | Next static OK; GSAP may affect INP — monitor | Medium |
| Authority | 35 | Backlinks/GSC unknown — not invented | Long-term |
| Conversion SEO | 84 | Free signup CTAs; honest coming-soon paid tiers | Medium |
| **Overall** | **73** | Content depth + unmeasured GSC remain the gap | — |

Previous overall (~62) treated About/Contact as missing. That gap is closed in code.

---

## 3. BIGGEST SEO PROBLEMS (Top 20)

1. Monthly billing toggle on `/subscription` was not captured — LP lists USD/month matching the Yearly UI; do not invent a cheaper annual package  
2. Thin depth vs university “how to write a proposal” pages → P2 guides (**NEXT**)  
3. No documented GSC operating rhythm with real data → owner must verify property + submit sitemap  
4. Screenshot filename `Mendeley-Integration.png` still in repo → **do not rename this sprint** (cache/URL risk)  
5. Competitive SERPs dominated by ChatGPT how-tos (**INFERENCE**)  
6. Informational how-to owned by universities (**INFERENCE**)  
7. Keyword cannibalization if a future blog duplicates landing intents  
8. Testimonials must stay honest — no AggregateRating  
9. TreZ/TAM coming soon — do not optimize those keywords yet  
10. OG image hosted on app domain — keep reachable  
11. Authority/backlinks unknown — do not invent  
12. Local overkill if city doorways are added → avoid  
13. RetraxtAI backend name as consumer brand → avoid  
14. Standard/Professional listed prices could confuse if schema treated them as buyable — **fixed** with PreOrder  
15. Annual vs monthly copy previously implied a discount without proof — **clarified**  
16. Home `seoPages.home.h1` previously mismatched Hero — **fixed**  
17. Image filename vs alt mismatch (legacy Mendeley file)  
18. 30-article calendar not started  
19. Title/meta A/B only after impressions exist  
20. Ethical PR/backlinks not started  

---

## 4. BIGGEST SEO OPPORTUNITIES (Top 20)

1. AI research proposal writer → `/ai-research-proposal-writer`  
2. How to write a research proposal → `/how-to-write-a-research-proposal`  
3. ChatGPT comparison → `/rflowz-vs-chatgpt`  
4. OpenAlex + RAG lit review → `/openalex-literature-review`  
5. Thesis / dissertation proposal → `/thesis-proposal`  
6. Ask Prof Z branded + feature → `/`  
7. Free plan / transactional → `/#pricing`  
8. RAG vs ungrounded AI → OpenAlex page  
9. Export DOCX/PDF → AI writer + features  
10. Master’s vs PhD structure → thesis page  
11. Resources hub → `/resources`  
12. About entity → `/about`  
13. FAQ schema on homepage  
14. Featured snippets (lists/tables) on how-to and vs  
15. Long-tail “grounded AI literature review”  
16. Grant proposal drafting (**NEXT** content)  
17. Conceptual framework / Mermaid (**NEXT**)  
18. Citation integrity education (**NEXT**)  
19. Light Malaysia postgraduate framing (no city pages)  
20. Supervisor / university partnerships (authority)  

---

## 5. SEARCH INTENT ANALYSIS

**Awareness:** how to write a research proposal; thesis outline  
**Consideration:** AI for research proposal; OpenAlex for proposals; RAG academic writing  
**Evaluation:** ChatGPT research proposal; RflowZ vs ChatGPT  
**Transaction:** free AI research proposal writer; pricing; signup  

Customers want structure, credible citations, and export. USP: Ask Prof Z + OpenAlex Library + RAG + citation checks + export.

---

## 6. MASTER KEYWORD STRATEGY

| Cluster | Canonical URL | Intent | Priority |
|---------|---------------|--------|----------|
| Brand / Ask Prof Z | `/` | Branded | High |
| AI research proposal writer | `/ai-research-proposal-writer` | Commercial | Critical |
| OpenAlex / RAG lit | `/openalex-literature-review` | Commercial+Info | High |
| How to write a research proposal | `/how-to-write-a-research-proposal` | Informational | Critical |
| Thesis / dissertation / PhD | `/thesis-proposal` | Commercial | High |
| ChatGPT comparison | `/rflowz-vs-chatgpt` | Comparison | High |
| Pricing / free plan | `/#pricing` | Transactional | High |
| Entity trust | `/about`, `/contact` | Navigational | High |
| Cluster index | `/resources` | Hub | High |

One intent → one canonical page. Do not add TreZ/TAM/Mendeley/RetraxtAI ranking URLs.

---

## 7. COMPETITOR ANALYSIS

**INFERENCE from public web, not GSC. Do not claim current rank.**

| Competitor type | Strength | Weakness | Gap for RflowZ |
|-----------------|----------|----------|----------------|
| ChatGPT + GPTs | Ubiquity; tutorials rank | Weak structured proposal + cite gates | Workflow + integrity + export |
| Academic AI / lit-review tools | Strong literature marketing | Often not a proposal workspace | Sections + Library + export |
| University how-to pages | Authority on “how to write” | No product | Genuine guide then Free CTA |
| Homework/essay AI | Student SEO | Broader homework brand | Stay proposal-specific |

Wedge: Ask Prof Z + OpenAlex Library + RAG + citation checks + export.

---

## 8. TECHNICAL SEO AUDIT

**VERIFIED good:** `robots.ts` allows `/`, disallows `/login` `/register`; sitemap from `indexableSeoPaths` + home; per-page canonicals; Next App Router; `lang="en-MY"`; security headers/CSP; JSON-LD escaped.

**VERIFIED keep:** stub auth pages noindex + redirect to app.

**Follow-ups (NEXT / owner):** Submit sitemap in GSC; monitor GSAP INP; rename Mendeley screenshot later with cache care; confirm app OG URL.

---

## 9. ON-PAGE SEO

Unique title, meta, one H1, H2/H3, internal links, CTA via `src/lib/seo-pages.ts`.

Home H1 source of truth is Hero: “Write a grounded research proposal with Ask Prof Z” — `seoPages.home.h1` matches.

Do not rename screenshot files this sprint. Product shot alts stay descriptive.

---

## 10. CONTENT STRATEGY (30+ opportunities)

Live this sprint (do not duplicate):

1. AI research proposal writer  
2. How to write a research proposal  
3. OpenAlex literature review with RAG  
4. Thesis proposal (master’s vs PhD table)  
5. RflowZ vs ChatGPT  
6. Resources hub  
7. About  
8. Contact  

**NEXT (do not build in this sprint):** 30-article calendar under Resources, e.g. sections checklist, problem-statement examples, questions vs objectives, Mermaid framework, methodology tips, citation integrity explained, RAG vs ungrounded, Free vs Starter, export formats, master’s timeline, PhD expectations, supervisor review, grant proposals, integrity & AI disclosure, OpenAlex search tips, Ask Prof Z patterns, Review Proposal gates. TreZ/TAM pages only when those engines are live.

---

## 11. TOPICAL AUTHORITY MAP

```
Pillar: / + /ai-research-proposal-writer
├── Literature: /openalex-literature-review
├── Education: /how-to-write-a-research-proposal
├── Use-case: /thesis-proposal
├── Comparison: /rflowz-vs-chatgpt
├── Hub: /resources
└── Trust: /about · /contact · /terms-and-policies
```

---

## 12. INTERNAL LINKING STRATEGY

| Source | Target | Anchor idea | Reason |
|--------|--------|-------------|--------|
| Homepage Who-it’s-for | `/resources`, writer | Cluster + money page | Equity |
| Intent pages | `/#pricing`, `/about` | Free plan / entity | Convert + trust |
| How-to | AI writer | Soft convert | Education → product |
| OpenAlex | vs ChatGPT | Ungrounded contrast | Differentiation |
| Thesis | how-to | Steps | Education |
| Resources | cluster pages | Descriptive labels | Crawl |
| Footer | About/Contact/Resources | Sitewide | Entity + hub |

---

## 13. ENTITY & E-E-A-T STRATEGY

**VERIFIED:** Organization RflowZ / RFlowZ-SS; email support@rflowz.com; About; Contact; terms; founder Mohd Zairul (PhD, P.Tech); sameAs YouTube + LinkedIn.

No fake reviews/ratings. Academic integrity stays on the user.

---

## 14. STRUCTURED DATA STRATEGY

Use: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList, WebPage, HowTo (how-to page).

**Offers (this pass):** Free and Starter `InStock` with register URL. Standard and Professional `PreOrder` pointing at `/#pricing` — not presented as currently buyable.

Never: fake AggregateRating, fake Review, city LocalBusiness doorways.

---

## 15. LOCAL SEO

SaaS, `en_MY`. Light Malaysia/Asia postgraduate framing OK. **No city doorway pages.** Google Business Profile only if a real public office exists.

---

## 16. BACKLINK STRATEGY

**NEXT / ethical only:** university partnerships, supervisor webinars, proposal-integrity explainers, OpenAlex community mentions, relevant directories. No PBNs or paid link schemes. Do not invent existing backlink counts.

---

## 17. CONVERSION SEO

Search → intent page → USP → Free CTA → `app.rflowz.com/register`. Trust: Free plan, no card, citation integrity, OpenAlex. Do not keyword-stuff.

Transactional copy must match the engine: Free $0; Starter $3.99/mo live paid path (verified vs Yearly `/subscription`); Standard/Professional listed coming soon.

---

## 18. QUICK WINS

| Situation | Change | Status |
|-----------|--------|--------|
| Stale home H1 in seo-pages | Align with Hero | Done this pass |
| Buyable Offers for coming-soon plans | PreOrder + pricing URL | Done this pass |
| Annual discount copy without proof | Monthly USD rate; billing in app | Done this pass |
| Thin intent → pricing/about | Related + contextual links | Done this pass |
| About/Contact/Resources missing | Pages exist | Done previously |
| GSC sitemap submit | Owner | **Done** (owner, 14 Aug 2026) |
| 30 posts | Calendar in §10 | **NEXT** |
| Rename Mendeley screenshot | Cache risk | **NEXT** |

---

## 19. TOP 10 KEYWORDS (attack first)

No volume/KD invented. Cluster map unless checkout verify changes transactional copy (it did not; amounts unchanged).

1. AI research proposal writer — `/ai-research-proposal-writer`  
2. how to write a research proposal — `/how-to-write-a-research-proposal`  
3. ChatGPT research proposal — `/rflowz-vs-chatgpt`  
4. thesis proposal AI / tool — `/thesis-proposal`  
5. OpenAlex literature review — `/openalex-literature-review`  
6. research proposal generator — AI writer page  
7. grounded academic writing / RAG — OpenAlex page  
8. PhD research proposal — thesis page  
9. free research proposal AI — homepage `/#pricing` + CTAs  
10. Ask Prof Z — homepage / AI writer  

Competition: high for generic how-to/ChatGPT; better opportunity on OpenAlex + proposal workflow (**INFERENCE**).

---

## 20. PAGE-BY-PAGE SEO PLAN

See `src/lib/seo-pages.ts`. Schema: BreadcrumbList + WebPage (+ FAQ/HowTo). CTA: start free → app register. Pricing hash for money.

No URL changes without redirects.

---

## 21. 90-DAY ROADMAP

**This sprint (done in repo):** engine copy honesty, Offer schema, home H1, related links, strategy refresh.

**Weeks 1–2 (owner):** GSC property + sitemap submit — **done**. Still confirm live checkout vs `plans.ts` at `/subscription`.  
**Weeks 3–4:** CTR rewrites only after impressions; internal link review.  
**Weeks 5–8:** Publish P2 guides from §10 (**NEXT**).  
**Weeks 9–12:** Ethical outreach; CWV; refresh pillars vs SERP — still no rank guarantees.

---

## 22. IMPLEMENTATION CHECKLIST

- [x] Strategy doc (this refresh)  
- [x] `seo-pages.ts` unique titles/H1s  
- [x] `/about` `/contact` `/resources`  
- [x] Five intent pages + light deepen  
- [x] Header/Footer/sitemap/`llms.txt`/schema  
- [x] Honest SoftwareApplication Offers  
- [x] Billing copy without invented annual discount  
- [x] GSC verify + sitemap submit (owner)  
- [ ] Confirm app checkout prices (owner; sign in at `/subscription`)  
- [ ] 30-article calendar (**NEXT**)  
- [ ] Rename `Mendeley-Integration.png` later  
- [ ] Title A/B after GSC impressions  

---

## 23. MEASUREMENT PLAN

**Google Analytics:** `G-HPFJDV88NG` (**VERIFIED** in `siteConfig`; no traffic numbers invented).  
**Search Console:** Impressions, clicks, CTR, position, coverage, CWV — **after** owner verification. No current rankings claimed.

**NEXT operating loop (document, do not fake data):**

- Position 4–10 → deepen that URL  
- 11–20 → relevance + internal links  
- High impressions + low CTR → rewrite title/meta  
- New queries → map to existing URL or a P2 page (one intent → one URL)

---

## 24. FINAL PRIORITY LIST (Top 10)

1. Confirm live checkout vs `plans.ts` while signed in at `/subscription`  
2. Keep product claims accurate (no Mendeley / no fake TreZ-live / honest Offers)  
3. Owner: GSC + sitemap — **done**  
4. Do not ship 30 posts until pillars are measured  
5. Maintain one URL per intent  
6. Ethical authority only  
7. Rename legacy screenshot when cache plan exists  
8. Iterate titles from real CTR  
9. Quarterly pillar refresh vs SERP (no rank promises)  
10. Never invent metrics in this doc  

---

## Engine note (pricing)

| Plan | LP amount | Sellable on LP | Schema |
|------|-----------|----------------|--------|
| Free | $0 | Yes | Offer InStock |
| Starter | $3.99/mo | Yes (paid, no trial) | Offer InStock |
| Standard | $4.99/mo | Coming soon | Offer PreOrder |
| Professional | $7.99/mo | Coming soon | Offer PreOrder |

Live app amounts: **VERIFIED** against signed-in Yearly `/subscription` (14 Aug 2026). LP does not promise a cheaper annual package than the listed monthly rate.

---

## Follow-up debt

- Capture Monthly toggle on `/subscription` if it differs from Yearly monthly-equivalent rates.  
- Rename `src/images/screenshots/Mendeley-Integration.png` with cache/CDN care.  
- 30-article calendar and GSC rhythm: **NEXT**, not this sprint.

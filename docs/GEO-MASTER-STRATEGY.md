# RflowZ GEO / AI Search Master Strategy

> Refresh: 14 Aug 2026. Complements [SEO-MASTER-STRATEGY.md](./SEO-MASTER-STRATEGY.md) and [CRO-MASTER-STRATEGY.md](./CRO-MASTER-STRATEGY.md).
> Labels: **VERIFIED** · **INFERENCE** · **RECOMMENDATION**
> GEO is not “keywords for ChatGPT.” It is clear, retrievable, verifiable, citable information for humans and answer engines.

Engine first: prices. Gearbox: entity + passages. Do not invent missing facts.

---

## Engine — actual price

**VERIFIED (14 Aug 2026):** Signed-in [https://app.rflowz.com/subscription](https://app.rflowz.com/subscription) with the **Yearly** toggle shows Free; Starter **$3.99/mo billed annually** (live); Standard **$4.99/mo billed annually** (Coming soon); Professional **$7.99/mo billed annually** (Coming soon). Those monthly USD rates match `src/lib/plans.ts`. Unauthenticated GET is still **302 → /login**. Monthly-toggle totals were not captured. Do not invent a cheaper annual package.

| Plan | Listed USD / mo | Sellable | Claim class |
|------|-----------------|----------|-------------|
| Free | $0 | Yes (registration) | VERIFIED vs app + LP |
| Starter | $3.99 | Live paid path, no trial | VERIFIED vs Yearly subscription UI |
| Standard | $4.99 | Coming soon | VERIFIED as listed, not sellable |
| Professional | $7.99 | Coming soon | VERIFIED as listed, not sellable |

No invented annual discount. Billing interval is chosen in the app.

---

## 1. Entity map (VERIFIED in this repo)

```
RFlowZ-SS (legal)
  └── operates as → RflowZ (brand)
        ├── website → https://rflowz.com
        ├── product → RflowZ app (https://app.rflowz.com)
        ├── includes → Ask Prof Z
        ├── includes → Source Library (OpenAlex + policy/media)
        ├── uses → RAG grounding + citation integrity
        ├── exports → DOCX, PDF (PPTX coming soon on higher plans)
        ├── founder → Mohd Zairul (PhD, P.Tech)
        ├── support → support@rflowz.com
        └── serves → students, researchers, supervisors/teams
```

Not entities for ranking: TreZ, TAM (coming soon), Mendeley (not integrated), RetraxtAI (do not use as consumer brand).

**Missing on purpose:** street address, founding year, employee count, AggregateRating — not published; do not invent.

---

## 2. GEO scorecard (qualitative, this repo)

Not a GSC or ChatGPT citation score.

| Dimension | Score | Notes |
|-----------|------:|-------|
| Entity Clarity | 86 | Name, legal, product, founder explicit |
| Entity Relationships | 84 | About + llms.txt graph |
| Content Quality | 78 | Intent pages exist; not a docs site |
| Question Coverage | 82 | What/who/how/cost/limits/where |
| Answer Clarity | 80 | Answer-first blocks added |
| Passage Retrievability | 78 | Hero/WhoItsFor/Works name RflowZ in-section |
| Evidence / Trust | 78 | First-party; Yearly subscription UI confirmed |
| Originality | 70 | Product workflow is first-party |
| Content Freshness | 78 | Dated August 2026; prices verified Yearly |
| Internal Linking | 80 | Hub + pricing + about |
| Semantic Structure | 82 | Headings, dl, tables, lists |
| Structured Data | 80 | Honest Offers; no fake reviews |
| Topical Authority | 68 | Five pillars + hub; 30 posts NEXT |
| Fact Consistency | 84 | Shared `entity.ts` + `plans.ts` |
| Technical Accessibility | 84 | robots allow public; auth noindex |
| AI Answer Readiness | 82 | llms.txt + About entity copy |
| **Overall GEO Quality** | **80** | Yearly rates verified; monthly toggle not captured |

---

## 3. AI question simulation (site-based, not a live model run)

Do **not** claim ChatGPT/Gemini produced these answers. These are whether the **website contains** a correct, complete, current, unambiguous passage.

| Question | Available? | Correct vs intended truth | Caveat |
|----------|------------|---------------------------|--------|
| What does RflowZ do? | Yes | Yes | — |
| Who is it for? | Yes | Yes | — |
| How does it work? | Yes | Yes | — |
| How much does it cost? | Yes | $3.99 / $4.99 / $7.99 monthly USD | Yearly app UI verified; monthly toggle not captured |
| Where is it located? | Yes | Web SaaS; no street address | Do not invent city HQ |
| How is it different from ChatGPT? | Yes | Yes | Comparison page |
| Limitations? | Yes | TreZ/TAM/Mendeley/PPTX | — |
| Who is the founder? | Yes | Mohd Zairul | — |
| How to sign up? | Yes | app.rflowz.com/register | — |

---

## 4. Issues (GEO format)

**GEO-01** · Closed · Entity: Pricing · Page: app `/subscription` + LP  
Problem was login-gated checkout. **Closed 14 Aug 2026:** signed-in Yearly subscription UI matches LP $3.99 / $4.99 / $7.99. Remaining gap: Monthly toggle not captured; do not invent a cheaper annual package.

**GEO-02** · P1 · Topic: Evidence · Pages: testimonials  
Problem: Testimonials are company-published, not independent. Why: do not schema-rate. Current: honest quotes, no AggregateRating. Fix: keep.

**GEO-03** · P2 · Topic: Freshness · Screenshot filename Mendeley  
Problem: Legacy filename. Why: entity confusion. Fix: rename later (cache). Not this sprint.

**GEO-04** · P2 · Topic: Depth · Resources  
Problem: No 30-article hub yet. Why: GEO vs thin volume. Fix: NEXT calendar from SEO doc.

**GEO-05** · P3 · Crawlers · robots.ts  
Problem: No named GPTBot rules. Why: `User-agent: *` already allows. Fix: do not special-case unless legal/product policy changes. No inclusion guarantee.

---

## 5. Implementation this pass (gearbox)

- `src/lib/entity.ts` — first-party answers + listed pricing summary  
- About — what / how / where / price-as-of / limits / founder (homepage at-a-glance removed)  
- Hero, WhoItsFor, Works — entity named in the passage  
- FAQs — operate where + limitations  
- `public/llms.txt` — graph, dated prices, `/subscription` login note for machines  
- Schema: `provider` + founder `jobTitle`; Offers unchanged (InStock vs PreOrder)

Not done: extra FAQ farms, city pages, fake reviews, extra schema types, blocking or privileging AI bots.

---

## 6. Source of truth

| Fact | Canonical |
|------|-----------|
| Org names, locale, email, founder, sameAs | `src/lib/site.ts` |
| Plan amounts and limits | `src/lib/plans.ts` |
| GEO prose answers | `src/lib/entity.ts` |
| CTAs | `src/lib/cta.ts` |

---

## 7. Robots / AI access

`robots.ts` allows `/` for `*`, disallows `/login` `/register`. That includes typical AI crawlers unless they ignore robots. **RECOMMENDATION:** keep public pages crawlable. Do not claim GPTBot access equals citations.

---

## 8. NEXT (not this sprint)

- Confirm checkout; then update every price surface together  
- GSC + sitemap — **done** (owner). Optional: AI-answer spot checks with dated screenshots after checkout confirm.  
- P2 resource articles from the SEO calendar  
- Rename Mendeley screenshot when cache is planned  

---

## 9. Quality gate

An unfamiliar system can now answer who RflowZ is, what it offers, who it serves, how it works, and what it does **not** claim. It **cannot** honestly treat paid prices as verified live checkout until someone confirms [app.rflowz.com/subscription](https://app.rflowz.com/subscription) while signed in.

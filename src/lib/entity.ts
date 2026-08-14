import { pricingPlans } from '@/lib/plans'
import { siteConfig } from '@/lib/site'

/** Visible, first-party facts for GEO. Do not invent offices, ratings, or checkout prices. */
export const entityFacts = {
  asOf: 'August 2026',
  pricingVerifiedAgainstLiveCheckout: true as const,
  organization: {
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    type: 'AI research-proposal SaaS',
    website: siteConfig.url,
    app: siteConfig.appUrl,
    subscription: `${siteConfig.appUrl}/subscription`,
    email: siteConfig.email,
    locale: 'en-MY',
    operates: 'Web application. No public storefront address is published on this site.',
  },
  product: {
    name: siteConfig.name,
    assistant: 'Ask Prof Z',
    library: 'OpenAlex academic search plus policy/media sources in the Source Library',
    rag: 'Retrieval-augmented generation (RAG) grounds Ask Prof Z on sources the user attaches from the Library, instead of writing from an ungrounded chat window alone.',
  },
  founder: {
    name: siteConfig.founder.name,
    credentials: siteConfig.founder.credentials,
    role: 'Founder',
  },
  audience:
    'Undergraduate and postgraduate students, academic researchers, supervisors, and research teams writing research, thesis, dissertation, or grant proposals.',
  howItWorks:
    'RflowZ works as a guided proposal workspace: start with Ask Prof Z onboarding, search and attach Library sources (including OpenAlex), ground literature with RAG, run citation integrity checks, then export DOCX or PDF (PPTX on higher plans when those plans launch).',
  differentiator:
    'RflowZ is a structured research-proposal workspace with Ask Prof Z, OpenAlex Library search, RAG grounding, citation integrity checks, and document export — not a general-purpose chat window.',
  limitations:
    'RflowZ does not replace a supervisor, examiner, or academic integrity. Citation checks do not certify a proposal is examination-ready. TreZ (thematic review) and TAM (transcript analysis) are coming soon, not live. Mendeley is not a current integration. PPTX export is listed on Standard and Professional, which are not available to subscribe yet.',
  signup: `${siteConfig.appUrl}/register`,
} as const

export function listedPricingSummary(): string {
  const live = pricingPlans.filter((plan) => !plan.comingSoonNote)
  const soon = pricingPlans.filter((plan) => plan.comingSoonNote)
  const liveText = live
    .map((plan) =>
      plan.isFree ? `${plan.name} at $0` : `${plan.name} at ${plan.price} per month`,
    )
    .join('; ')
  const soonText = soon
    .map((plan) => `${plan.name} at ${plan.price} per month (coming soon)`)
    .join('; ')
  return `As of ${entityFacts.asOf}, this marketing site lists ${liveText}. ${soonText}. Those USD monthly rates match the signed-in Yearly view of ${entityFacts.organization.subscription} (14 Aug 2026). Billing interval (monthly or annual) is chosen in the app; this site does not promise a cheaper annual package than the listed monthly rate.`
}

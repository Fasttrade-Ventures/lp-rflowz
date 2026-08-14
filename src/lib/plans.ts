import { siteConfig } from '@/lib/site'

/**
 * Marketing prices (USD monthly rate).
 * Verified 14 Aug 2026 against signed-in https://app.rflowz.com/subscription
 * with the Yearly billing toggle: Free; Starter $3.99/mo billed annually;
 * Standard $4.99/mo billed annually (Coming soon); Professional $7.99/mo
 * billed annually (Coming soon). Monthly-toggle totals were not captured.
 * Do not invent a cheaper annual package price. Wrong URL: /pricing 500s.
 */
export type PlanRow = {
  name: string
  monthly: string
  annual: string
  proposals: string
  exports: string
  watermark: string
  pptx: string
}

export type PlanCard = {
  name: string
  price: string
  description: string
  href?: string
  features: string[]
  notIncluded: string[]
  featured?: boolean
  isFree?: boolean
  footerNote?: string
  comingSoonNote?: string
  ctaLabel?: string
}

export const planComparison: PlanRow[] = [
  {
    name: 'Free',
    monthly: '$0',
    annual: '$0',
    proposals: '1 / month',
    exports: '5 / month',
    watermark: 'Yes',
    pptx: 'No',
  },
  {
    name: 'Starter',
    monthly: '$3.99',
    annual: '$3.99',
    proposals: '10 / month',
    exports: '30 / month',
    watermark: 'No',
    pptx: 'No',
  },
  {
    name: 'Standard',
    monthly: '$4.99',
    annual: '$4.99',
    proposals: '30 / month',
    exports: 'Included',
    watermark: 'No',
    pptx: 'Yes',
  },
  {
    name: 'Professional',
    monthly: '$7.99',
    annual: '$7.99',
    proposals: 'Unlimited',
    exports: 'Unlimited',
    watermark: 'No',
    pptx: 'Yes',
  },
]

export const pricingPlans: PlanCard[] = [
  {
    isFree: true,
    name: 'Free',
    price: 'Free',
    description:
      'Get started with limited proposal generation and watermarked exports.',
    href: `${siteConfig.appUrl}/register`,
    ctaLabel: 'Start free — no credit card',
    features: [
      '1 proposal per month',
      'Unlimited Ask Prof Z included',
      'RAG: 10 documents per month (policy / literature)',
      'Export limit: 5 times per month',
      'Watermarked DOCX/PDF export',
      '1 document version per project',
    ],
    notIncluded: [
      'PowerPoint (PPTX) export',
      'Framework generator',
      'Collaboration',
      'Unwatermarked exports',
    ],
    footerNote: 'Included for all new accounts',
  },
  {
    featured: true,
    name: 'Starter',
    price: '$3.99',
    description:
      'Perfect for beginners and occasional users looking to get started with research proposal formulation.',
    href: `${siteConfig.appUrl}/register`,
    ctaLabel: 'Get started',
    footerNote: 'Live paid plan · 5-day trial, then Starter',
    features: [
      'Unlimited Ask Prof Z included',
      'Unlimited RAG — academic document grounding (policy / literature)',
      'AI-guided research questions formulation',
      'Up to 10 proposal generations per month',
      'Up to 30 exports per month',
      'Email support',
      'Help center access',
    ],
    notIncluded: [
      'AI-driven support for literature review structuring',
      'Priority proposal generation queue',
      'Advanced AI-guided proposal structure and referencing tools',
      'TreZ thematic review engine',
      'TAM transcript analysis engine',
    ],
  },
  {
    name: 'Standard',
    price: '$4.99',
    description:
      'Ideal for academic professionals and regular researchers needing enhanced tools and support.',
    features: [
      'Unlimited Ask Prof Z included',
      'Unlimited RAG — academic document grounding (policy / literature)',
      'AI-driven support for literature review structuring',
      'Up to 30 proposal generations per month',
      'PowerPoint (PPTX) export',
      'Email support',
      'Priority help center access',
      'Priority proposal generation queue',
      'Full access to TreZ features — AI-assisted thematic review paper writing, fully RAG-integrated (coming soon)',
    ],
    notIncluded: [
      'Advanced AI-guided proposal structure and referencing tools',
      'TAM transcript analysis engine',
    ],
    comingSoonNote:
      'Coming soon — Standard is not available to subscribe yet.',
  },
  {
    name: 'Professional',
    price: '$7.99',
    description:
      'Best for large-scale research projects and experienced researchers.',
    features: [
      'Unlimited Ask Prof Z included',
      'Unlimited RAG — academic document grounding (policy / literature)',
      'Unlimited proposal generations per month',
      'Advanced AI-guided proposal structure and referencing tools',
      'PowerPoint (PPTX) export',
      'Premium email and chat support',
      'Dedicated support for research methodologies',
      'Professional-grade proposal formatting tools',
      'Full access to TreZ features — AI-assisted thematic review paper writing, fully RAG-integrated (coming soon)',
      'Full access to TAM features — upload your transcripts and let AI assist with thematic analysis (coming soon)',
    ],
    notIncluded: [],
    comingSoonNote:
      'Coming soon — Professional is not available to subscribe yet.',
  },
]

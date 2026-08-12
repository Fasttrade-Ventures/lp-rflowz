import { type Metadata } from 'next'

import {
  SeoCta,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { siteConfig } from '@/lib/site'

const path = '/how-to-write-a-research-proposal'
const title = 'How to Write a Research Proposal'
const description =
  'Step-by-step guide to writing a research proposal: define the problem, review literature with OpenAlex, set questions and methods, then export with RflowZ.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'how to write a research proposal',
    'thesis proposal outline',
    'research proposal steps',
  ],
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    type: 'article',
  },
}

const steps = [
  {
    name: 'Clarify your research problem',
    text: 'State the gap, context, and why the study matters. In RflowZ, draft and refine the problem statement with Ask Prof Z.',
  },
  {
    name: 'Build a grounded literature base',
    text: 'Search OpenAlex, attach sources in your Library, and synthesize literature with RAG-grounded Ask Prof Z instead of inventing references.',
  },
  {
    name: 'Define questions and objectives',
    text: 'Turn the problem into clear research questions and objectives that guide methodology.',
  },
  {
    name: 'Propose philosophy and methodology',
    text: 'Recommend design, sampling, collection, and analysis — then write a coherent methodology narrative.',
  },
  {
    name: 'Add a conceptual framework',
    text: 'Generate a proposed framework caption and Mermaid diagram that ties concepts together for reviewers.',
  },
  {
    name: 'Review, check citations, and export',
    text: 'Assemble the proposal, run citation integrity checks, and export to DOCX, PDF, or PPTX (plan-dependent).',
  },
]

export default function HowToWriteResearchProposalPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${siteConfig.url}${path}`,
      isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      description,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
  ]

  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: title, href: path },
      ]}
      jsonLd={jsonLd}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          How to write a research proposal
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          A strong proposal shows a clear problem, credible literature,
          coherent methods, and a realistic contribution. Use this outline —
          and optionally follow it inside RflowZ with Ask Prof Z and OpenAlex.
        </p>

        <ol className="mt-12 space-y-8">
          {steps.map((step, index) => (
            <li key={step.name}>
              <h2 className="font-display text-2xl text-slate-900">
                {index + 1}. {step.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>

        <SeoCta
          title="Write your proposal in RflowZ"
          description="Follow the same steps in the app: project setup, Library sources, Ask Prof Z, review, and export."
        />
        <SeoRelatedLinks
          links={[
            {
              href: '/ai-research-proposal-writer',
              label: 'AI research proposal writer',
            },
            { href: '/thesis-proposal', label: 'Thesis proposal' },
            {
              href: '/openalex-literature-review',
              label: 'OpenAlex literature review',
            },
          ]}
        />
      </article>
    </SeoPageLayout>
  )
}

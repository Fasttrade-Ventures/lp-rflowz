import { type Metadata } from 'next'

import {
  SeoCta,
  SeoFaqSection,
  SeoPageLayout,
  SeoRelatedLinks,
} from '@/components/SeoPageLayout'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'
import { siteConfig } from '@/lib/site'

const page = seoPages.howTo

export const metadata: Metadata = buildPageMetadata(page)

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

const faqs = [
  {
    question: 'How long should a research proposal be?',
    answer:
      'Length varies by program and funder. Many master’s and PhD proposals run from a few thousand words to a full chapter-length document. Follow your institution’s template; RflowZ helps structure sections regardless of final length.',
  },
  {
    question: 'What sections does a research proposal usually include?',
    answer:
      'Common sections include problem statement, literature review, research questions and objectives, philosophy/methodology, proposed framework, contributions, and references. Exact labels differ by faculty.',
  },
  {
    question: 'Can AI write my entire proposal?',
    answer:
      'Treat AI as a drafting assistant. You remain responsible for originality, ethics, accuracy, and supervisor requirements. RflowZ is designed for grounded drafting and export — not unsupervised submission.',
  },
]

export default function HowToWriteResearchProposalPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: `${siteConfig.url}${page.path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: page.title,
      description: page.description,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Resources', href: '/resources' },
        { name: page.h1, href: page.path },
      ]}
      jsonLd={jsonLd}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          {page.h1}
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

        <SeoFaqSection faqs={faqs} />
        <SeoCta
          title="Write your proposal in RflowZ"
          description="Follow the same steps in the app: project setup, Library sources, Ask Prof Z, review, and export. Free plan available — no credit card required."
        />
        <SeoRelatedLinks links={page.relatedLinks} />
      </article>
    </SeoPageLayout>
  )
}
